This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local setup

Use Node 22 (verified with 22.13.1) and Yarn Classic 1.x:

```sh
yarn install --frozen-lockfile
yarn build
```

SCSS is compiled with Dart Sass; no Intel Node runtime or `SASS_BINARY_PATH` override is needed on Apple Silicon. The start/build scripts pass `--openssl-legacy-provider` to Node because CRA 4's webpack 4 uses hashing unsupported by OpenSSL 3 defaults. This compatibility workaround is scoped to these commands; remove it when upgrading the build toolchain. Existing Sass syntax and the loader's legacy API emit non-blocking deprecation warnings.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## Client design previews

Client previews live in `public/previews/<project>/`, with an `index.html` entry point and relative asset links. The build copies these standalone files into `build/previews/<project>/`; Firebase serves them independently of the React app.

SJ Rec2Rec: **https://bmacpherson.com/previews/sjrec2rec/** (available after deploying this change).

The folder contains the comparison page and four designs copied from `../sjrec2rec/website/dist`. The hosted copy deliberately excludes the two PDF links and all proposal documents. Demo forms do not send or save submissions.

To update SJ Rec2Rec from the project source:

```sh
# Run from the portfolio repository.
cp -R ../sjrec2rec/website/dist/. public/previews/sjrec2rec/
```

After copying, remove the two `../../output/pdf/` links from the copied `index.html` again. Review the destination for retired concept files when the source collection changes. Do not copy proposal PDFs or internal project files. Keep the source repository unchanged.

For future projects, use a separate `public/previews/<project>/` folder with relative links and `noindex,nofollow` HTML metadata. The `/previews/**` Firebase response header also discourages indexing. These are public URLs, not password-protected pages, and they are not linked from portfolio navigation.

Build with `yarn build` using the local setup above. Verify using `firebase emulators:start --only hosting`: check the preview URL both with and without the final slash, concept links, assets, mobile navigation, demo dialogs and the `X-Robots-Tag` response header. Also check `/`, `/projects` and `/about`.

Publishing requires a separate, explicitly authorized Firebase Hosting deployment. Copying or building alone does not publish changes.
