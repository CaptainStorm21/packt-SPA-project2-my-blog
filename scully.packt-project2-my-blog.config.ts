import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  outDir: './dist/static',
  routes: {
    '/path/:id': {
      type: 'contentFolder',
      id: {
        folder: "./posts"
      }
    },
  }
};

/*
projectRoot: The path containing the source code of the Angular application
projectName: The name of the Angular application
outDir: The output path of the Scully generated filesImportant NoteThe Scully output path must
be different from the path that the Angular CLI outputs the bundle of your Angular application.
The latter can be configured from the angular.json file.
routes: It contains the route configuration that will be used for accessing our blog posts.
Scully will populate it automatically, as we will see in the following section.
*/
