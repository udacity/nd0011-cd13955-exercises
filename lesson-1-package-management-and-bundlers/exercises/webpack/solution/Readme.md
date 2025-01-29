# Webpack

## **Summary**

In this exercise, you will configure a `webpack.config.js` file and bundle an application.

---

### **Resources**

- [Webpack Documentation](https://webpack.js.org/)

---

## **Instructions**

Webpack and Webpack CLI have already been added to the `package.json`. Run `npm install` to install the required Node modules.

### **1. Configure `webpack.config.js`**

- Open the `webpack.config.js` file and follow the TODO instructions provided there.

### **2. Add a Build Script to `package.json`**

- Add the following script to the `scripts` section of `package.json`:
  ```
  "build": "webpack"
  ```

### **3. Run the Build**

- Open the terminal and run:
  ```
  npm run build
  ```

### **4. Verify Minification**

- Check the bundled file to ensure that the functions from `fileOne` and `fileTwo` are included.
