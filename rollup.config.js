import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const DIST_DIR = 'dist';
const TYPES_DIR = 'types';

const commonPlugins = [
  babel({
    babelrc: false,
    skipPreflightCheck: true,
    extensions,
    babelHelpers: 'bundled',
  }),
  terser({
    output: {
      comments: false,
    },
  }),
];

const esmConfig = {
  external: [...Object.keys(pkg.peerDependencies || {})],
  input: 'src/index.ts',
  output: [
    {
      file: `${DIST_DIR}/index.es.js`,
      format: 'es',
      sourcemap: true,
    },
    {
      file: `${DIST_DIR}/index.cjs.js`,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: TYPES_DIR,
    }),
    ...commonPlugins,
    copy({
      targets: [
        { src: 'LICENSE', dest: DIST_DIR },
        { src: 'README.md', dest: DIST_DIR },
        {
          src: 'package.json',
          dest: DIST_DIR,
          transform: (content) => {
            const { scripts, devDependencies, ...keep } = JSON.parse(
              content.toString()
            );
            return JSON.stringify(keep, null, 2);
          },
        },
      ],
    }),
  ],
};

const dtsConfig = {
  external: [...Object.keys(pkg.peerDependencies || {})],
  input: `./${DIST_DIR}/${TYPES_DIR}/index.d.ts`,
  output: {
    file: `${DIST_DIR}/index.d.ts`,
    format: 'es',
  },
  plugins: [
    dts(),
    del({ targets: `${DIST_DIR}/${TYPES_DIR}`, hook: 'writeBundle' }),
  ],
};

export default [esmConfig, dtsConfig];
