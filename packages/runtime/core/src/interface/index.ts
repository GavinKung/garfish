import { VText, VNode } from '@garfish/utils';
import { HtmlResource as HtmlResourceInterfaces } from '../module/source';
import {
  SyncHook,
  AsyncSeriesBailHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
} from '@garfish/hooks';
import { Garfish } from '../instance/context';
// import { App } from '../module/app';

declare global {
  interface Window {
    Garfish: Garfish;
    __GARFISH__: boolean;
  }
}

declare global {
  interface Window {
    Garfish: Garfish;
    __GARFISH__: boolean;
  }
}

export namespace interfaces {
  export type DomGetter = Element | (() => Element | null) | string;

  export interface LoaderResult {
    mount: () => void;
    unmount: () => void;
  }

  export declare type LifeCycleFn = (
    appInfo: AppInfo,
    path: string,
  ) => Promise<void> | void;

  export interface App {
    // name: string;
    // appInfo: AppInfo;
    // cjsModules: Record<string, any>;
    // customExports: Record<string, any>; // If you don't want to use the CJS export, can use this
    // active: boolean;
    // mounted: boolean;
    // appContainer: HTMLElement;
    // mounting: boolean;
    // unmounting: boolean;
    // provider: Provider;
    // entryResManager: HtmlResource;
    // htmlNode: HTMLElement | ShadowRoot;
    // resources: ResourceModules;
    // isHtmlMode: boolean;
    // context: Garfish;
    // strictIsolation: boolean;
    // mount(): Promise<boolean>;
    // unmount(): boolean;
    // getExecScriptEnv(noEntry: boolean): Record<string, any>;
    // execScript(
    //   code: string,
    //   env: Record<string, any>,
    //   url?: string,
    //   options?: {
    //     async?: boolean;
    //     noEntry?: boolean;
    //   },
    // ): void;
  }

  export interface Provider {
    destroy: ({ dom: HTMLElement }) => void;
    render: ({ dom: HTMLElement, basename: string }) => void;
  }

  export interface SandboxConfig {
    open?: boolean;
    snapshot?: boolean;
    useStrict?: boolean;
    strictIsolation?: boolean;
  }

  export interface Provider {
    destroy: ({ dom: HTMLElement }) => void;
    render: ({ dom: HTMLElement, basename: string }) => void;
  }

  export interface AppInfo {
    name: string;
    entry: string;
    basename?: string;
    cache?: boolean; // Whether the cache
    props?: Record<string, any>;
    domGetter?: DomGetter;
    activeWhen?: string | ((path: string) => boolean); // 手动加载，可不填写路由
    active?: (appInfo: AppInfo, rootPath: string) => void;
    deactive?: (appInfo: AppInfo, rootPath: string) => void;
  }

  export interface Provider {
    destroy: ({ dom: HTMLElement }) => void;
    render: ({ dom: HTMLElement, basename: string }) => void;
  }

  export interface SandboxConfig {
    open?: boolean;
    snapshot?: boolean;
    useStrict?: boolean;
    strictIsolation?: boolean;
  }

  export interface Provider {
    destroy: ({ dom: HTMLElement }) => void;
    render: ({ dom: HTMLElement, basename: string }) => void;
  }

  export interface Config {
    appID?: string;
    basename?: string;
    apps?: Array<AppInfo>;
    sandbox?: SandboxConfig;
    plugins?: Array<(context: Garfish) => Plugin>;
    autoRefreshApp?: boolean;
    props?: Record<string, any>;
    disableStatistics?: boolean;
    disablePreloadApp?: boolean;
    protectVariable?: Array<PropertyKey>;
    insulationVariable?: Array<PropertyKey>;
    domGetter?: DomGetter;
  }

  export interface HooksLifecycle {
    beforeEval?: LifeCycleFn;
    afterEval?: LifeCycleFn;
    beforeMount?: LifeCycleFn;
    afterMount?: LifeCycleFn;
    beforeUnmount?: LifeCycleFn;
    afterUnmount?: LifeCycleFn;
    beforeLoad?: (
      appInfo: AppInfo,
      opts: LoadAppOptions,
    ) => Promise<void | false> | void | false;
    afterLoad?: (
      appInfo: AppInfo,
      opts: LoadAppOptions,
    ) => Promise<void> | void;
    onNotMatchRouter?: (path: string) => Promise<void> | void;
    errorLoadApp?: (err: Error | string, appInfo: AppInfo) => void;
    errorMountApp?: (err: Error | string, appInfo: AppInfo) => void;
    errorUnmountApp?: (err: Error | string, appInfo: AppInfo) => void;
    customLoader?: (
      provider: Provider,
      appInfo: AppInfo,
      path: string,
    ) => Promise<LoaderResult | void> | LoaderResult | void;
  }

  export type HtmlResource = HtmlResourceInterfaces;

  export type Options = Config & HooksLifecycle;

  export type LoadAppOptions = Pick<AppInfo, keyof AppInfo> & {
    entry?: string;
    domGetter: DomGetter;
  };

  type AsyncResource = {
    async: boolean;
    content: () => Promise<any>;
  };

  export interface ResourceModules {
    link: Array<any>;
    js: Array<any | AsyncResource>;
  }

  export interface AppInfo {
    name: string;
    entry: string;
    basename?: string;
    cache?: boolean; // Whether the cache
    props?: Record<string, any>;
    domGetter?: DomGetter;
    activeWhen?: string | ((path: string) => boolean); // 手动加载，可不填写路由
    active?: (appInfo: AppInfo, rootPath: string) => void;
    deactive?: (appInfo: AppInfo, rootPath: string) => void;
  }

  export interface AppSources {
    manager: HtmlResource;
    resources: ResourceModules;
    isHtmlMode: boolean;
  }

  export interface Loader {
    loadAppSources(appInfo: AppInfo): Promise<AppSources>;
    // takeJsResources: (manager: HtmlResource) => void;
    // takeLinkResources: (manager: HtmlResource) => void;
    // createApp(appInfo: AppInfo, manager: HtmlResource, isHtmlMode: boolean): Promise<any>
  }

  export type BootStrapArgs = [Garfish, Options];

  type AppConstructor = new (
    context: Garfish,
    appInfo: AppInfo,
    entryResManager: HtmlResource,
    resources: interfaces.ResourceModules,
    isHtmlMode: boolean,
  ) => any;

  export interface Lifecycle {
    beforeInitialize: SyncHook<Options, void>;
    initialize: SyncHook<Options, void>;
    beforeBootstrap: SyncHook<Options, void>;
    bootstrap: SyncHook<Options, void>;
    beforeRegisterApp: SyncHook<[AppInfo | Array<AppInfo>], void>;
    registerApp: SyncHook<[AppInfo | Array<AppInfo>], void>;
    beforeLoad: AsyncSeriesBailHook<AppInfo, boolean | void | AppConstructor>; // 根据返回值决定是否继续执行后续代码 or return a constructor
    afterLoad: SyncHook<[AppInfo, App | void], void | boolean>;
    errorLoadApp: SyncHook<[AppInfo, Error], void>;
    beforeEval: SyncHook<
      [
        AppInfo,
        string,
        Record<string, any>,
        string,
        { async?: boolean; noEntry?: boolean },
      ],
      void
    >;
    afterEval: SyncHook<
      [
        AppInfo,
        string,
        Record<string, any>,
        string,
        { async?: boolean; noEntry?: boolean },
      ],
      void
    >;
    beforeMount: SyncHook<[AppInfo, any], void>;
    afterMount: SyncHook<[AppInfo, any], void>;
    errorMount: SyncHook<[AppInfo, Error], void>;
    beforeUnMount: SyncHook<[AppInfo], void>;
    afterUnMount: SyncHook<[AppInfo], void>;
    errorExecCode: SyncHook<[AppInfo, Error], void>;
  }

  type ConstructorParameters<T> = T extends SyncHook<any, any>
    ? T extends {
        tap: (options: any, fn: (...args: infer P) => infer R) => any;
      }
      ? (...args: P) => R
      : never
    : T extends {
        tapPromise: (options: any, fn: (...args: infer A) => infer AR) => any;
      }
    ? (...args: A) => AR
    : never;

  type PickParam<T> = {
    [k in keyof T]: ConstructorParameters<T[k]>;
  };

  export type Plugin = { name: string } & PickParam<
    Partial<interfaces.Lifecycle>
  >;

  export interface Hooks {
    lifecycle: Lifecycle;
    usePlugins(plugin: Plugin): void;
  }
}