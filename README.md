# esbuild-code-splitting
Esbuild Code Splitting Demo

This repo contains examples related to esbuild code splitting. 

It is meant to illustrate the issue of over code splitting with a minimal production.

## Issue

When splitting code the compiler does not seem to take into account what code is already loaded and therefore will split things into more chunks that are required.
