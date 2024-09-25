// // v-md-editor.d.ts
// declare module '@kangc/v-md-editor' {
//     import { Component, Vue } from 'vue-property-decorator'; // 如果你使用的是 Vue class-style 组件
//     // 或者如果你使用的是普通的 Vue 组件
//     // import Vue from 'vue';
  
//     const VMDEditor: any; // 你可以用更具体的类型代替 `any`
//     export default VMDEditor;
//   }

// declare module '@kangc/v-md-editor/lib/theme/vuepress.js' {
//     import { Component, Vue } from 'vue-property-decorator'; // 如果你使用的是 Vue class-style 组件
    
//     const VuePressTheme: any; // 你可以用更具体的类型代替 `any`
//     export = VuePressTheme;
//   }

//   declare module 'prismjs' {
//     const Prism: {
//       highlight(element: HTMLElement, language: string, async?: boolean): void;
//       highlightAll(async?: boolean): void;
//       highlightAllUnder(container: HTMLElement, async?: boolean): void;
//       highlightElement(element: HTMLElement, async?: boolean): void;
//       languages: {
//         [language: string]: any; // 你可以用更具体的类型代替 `any`
//       };
//       util: {
//         encode(tokens: any[]): string; // 你可以用更具体的类型代替 `any`
//         type: (o: any) => string; // 你可以用更具体的类型代替 `any`
//       };
//     };
  
//     export = Prism;
//   }

// 声明 @kangc/v-md-editor/lib/preview 模块
declare module '@kangc/v-md-editor/lib/preview' {
    const Preview: Component;
    export = Preview;
  
    // 如果有其他导出项，可以在这里声明
    // export const someOtherExport: SomeType;
  }

// 声明 @kangc/v-md-editor/lib/theme/github.js 模块
declare module '@kangc/v-md-editor/lib/theme/github.js' {
    const GitHubTheme: Component;
    export = GitHubTheme;
  
    // 如果有其他导出项，可以在这里声明
    // export const someOtherExport: SomeType;
  }
