# Product Website Template

## Installation

To get started with this project, follow these steps:

1. **Fork the template repository and clone new forked repository:**

    ```
    Template Repository : https://github.com/voxelbusters/ads-kit-website
    ```
    
2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

For Starting the Application after above alteration use the below command
```bash
npm start
```

This command will start a local development server and open your Docusaurus website in your default web browser.


## Search plugin will not work in Development mode follow below commands:
Use the below command npm serve in the build version to see search plugin working

```bash
npm run build
```
```bash
npm serve
```

## Building for Production

To build the website for production, use the following command:

```bash
npm run build
```

## Deployment on gh-pages

To deploy the website on gh-pages, use the following command:

## Step: 1 Push the changes to be deployed on github 

## Step: 2 Build the website for production

```bash
npm run build
```
## Step: 3 Run the below command in your terminal and it will automatically deploy all your last pushed changes to gh-pages 
Note : Make sure that there are no-broken links in the project

```bash
cmd /C "set GIT_USER=GIT_USER_NAME&& yarn deploy"
```

