"use strict";(self.rspackChunkvke_agent=self.rspackChunkvke_agent||[]).push([["e"],{acs(t,e,r){var n=r("lu"),o=r("MT"),s=r("Hw"),a=r("Bg");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){(0,o.A)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var c=s.forwardRef(function(t,e){var r=(0,s.useContext)(a.V).prefixCls,o=void 0===r?"arco":r,i=t.spin,c=t.className,v=u(u({"aria-hidden":!0,focusable:!1,ref:e},t),{},{className:"".concat(c?c+" ":"").concat(o,"-icon ").concat(o,"-icon-more-vertical")});return i&&(v.className="".concat(v.className," ").concat(o,"-icon-loading")),delete v.spin,delete v.isIcon,s.createElement("svg",(0,n.A)({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},v),s.createElement("path",{fill:"currentColor",stroke:"none",d:"M25 10h-2V8h2v2ZM25 25h-2v-2h2v2ZM25 40h-2v-2h2v2Z"}),s.createElement("path",{d:"M25 10h-2V8h2v2ZM25 25h-2v-2h2v2ZM25 40h-2v-2h2v2Z"}))});c.defaultProps={isIcon:!0},c.displayName="IconMoreVertical",e.A=c},Md(t,e,r){let n,o,s,a,i,u,c,v,l,b,d,h,p,g,f,_,m,y,x,w,k,C,S,E,z,O,A,I,$,j,N,M,T,P,D,Z,J,R,U,L,q,B,H,V,X;r.d(e,{$:()=>th});var W=r("Hw"),Y=r.t(W,2),F=r("SPA"),G=r("Z5"),K=r("hhk"),Q=r("CyR"),tt=r("uiy"),te=r("aY"),tr=r("gq"),tn=r("y0");let to=(0,G.AH)`
  :host {
    --ve-button-gap: var(--space-xxxs);

    --ve-button-height-small: var(--height-small);
    --ve-button-height-default: var(--height-default);
    --ve-button-height-large: var(--height-large);

    --ve-button-padding-inline-small: var(--space-xxs);
    --ve-button-padding-inline-default: var(--space-xs);
    --ve-button-padding-inline-large: var(--space-xs);

    --ve-button-radius-default: var(--radius-md);
    --ve-button-radius-round: var(--radius-full);
    --ve-button-radius-circle: var(--radius-full);

    --ve-button-font-size-small: var(--text-body-sm);
    --ve-button-font-size-default: var(--text-body);
    --ve-button-font-size-large: var(--text-body);
    --ve-button-font-weight: var(--font-weight-normal);

    --ve-button-background-primary: var(--color-bg-primary);
    --ve-button-text-primary: var(--color-text-foreground);
    --ve-button-border-primary: transparent;

    --ve-button-background-secondary: var(--color-bg-secondary);
    --ve-button-text-secondary: var(--color-text-primary);
    --ve-button-border-secondary: transparent;

    --ve-button-background-outline: transparent;
    --ve-button-text-outline: var(--color-text-primary);
    --ve-button-border-outline: var(--color-border-strong);
    --ve-button-border-outline-hover: var(--color-border-interactive);
    --ve-button-border-outline-pressed: var(--color-border-interactive-active);

    --ve-button-background-text: transparent;
    --ve-button-text-text: var(--color-text-accent);
    --ve-button-border-text: transparent;

    --ve-button-status-surface-success: var(--color-bg-success);
    --ve-button-status-surface-warning: var(--color-bg-warning);
    --ve-button-status-surface-danger: var(--color-bg-danger);

    --ve-button-status-surface-secondary-success: var(
      --color-bg-success-secondary
    );
    --ve-button-status-surface-secondary-warning: var(
      --color-bg-warning-secondary
    );
    --ve-button-status-surface-secondary-danger: var(
      --color-bg-danger-secondary
    );

    --ve-button-status-text-success: var(--color-text-success);
    --ve-button-status-text-warning: var(--color-text-warning);
    --ve-button-status-text-danger: var(--color-text-danger);

    --ve-button-status-border-success: var(--color-border-success);
    --ve-button-status-border-warning: var(--color-border-warning);
    --ve-button-status-border-danger: var(--color-border-danger);

    /* 默认与 ve-icon 自身尺寸（1.15em）保持一致；基于 host 计算的
       绝对字号做缩放，保证 light DOM 中的图标包裹层也能解析到正确值 */
    --ve-button-icon-size: calc(var(--ve-button-current-font-size) * 1.15);
    --ve-button-loading-icon-size: var(--ve-button-current-font-size);
    --ve-button-disabled-opacity: var(--state-disabled-ratio);
    --ve-button-press-transform: translateY(0.4px) scale(0.995);

    --ve-button-current-height: var(--ve-button-height-default);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-default);
    --ve-button-current-radius: var(--ve-button-radius-default);
    --ve-button-current-font-size: var(--ve-button-font-size-default);

    --ve-button-current-background: var(--ve-button-background-primary);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-background) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-text-primary);
    --ve-button-current-text-hover: var(--ve-button-current-text);
    --ve-button-current-text-pressed: var(--ve-button-current-text);
    --ve-button-current-border: var(--ve-button-border-primary);
    --ve-button-current-border-hover: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-border) var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-solid-ratio);
    --ve-button-current-hover-mix: var(--state-hover-solid-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-solid-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-solid-mix);

    --ve-button-current-status-surface: transparent;
    --ve-button-current-status-surface-secondary: transparent;
    --ve-button-current-status-text: currentColor;
    --ve-button-current-status-border: currentColor;
  }

  :host([type='secondary']) {
    --ve-button-current-background: var(--ve-button-background-secondary);
    --ve-button-current-text: var(--ve-button-text-secondary);
    --ve-button-current-border: var(--ve-button-border-secondary);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']),
  :host([type='outline-filled']) {
    --ve-button-current-background: var(--ve-button-background-outline);
    --ve-button-current-text: var(--ve-button-text-outline);
    --ve-button-current-border: var(--ve-button-border-outline);
    --ve-button-current-border-hover: var(--ve-button-border-outline-hover);
    --ve-button-current-border-pressed: var(--ve-button-border-outline-pressed);
    --ve-button-current-border-width: var(--stroke-weight-base);

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([type='outline']) {
    --ve-button-current-background-hover: var(--ve-button-current-background);
    --ve-button-current-background-pressed: var(
      --ve-button-current-background
    );
  }

  :host([type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
  }

  :host([type='text']) {
    --ve-button-current-background: var(--ve-button-background-text);
    --ve-button-current-text: var(--ve-button-text-text);
    --ve-button-current-border: var(--ve-button-border-text);
    --ve-button-current-border-width: 0px;

    --ve-button-current-hover-ratio: var(--state-hover-subtle-ratio);
    --ve-button-current-hover-mix: var(--state-hover-subtle-mix);
    --ve-button-current-pressed-ratio: var(--state-pressed-subtle-ratio);
    --ve-button-current-pressed-mix: var(--state-pressed-subtle-mix);
  }

  :host([size='small']) {
    --ve-button-current-height: var(--ve-button-height-small);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-small);
    --ve-button-current-font-size: var(--ve-button-font-size-small);
  }

  :host([size='large']) {
    --ve-button-current-height: var(--ve-button-height-large);
    --ve-button-current-padding-inline: var(--ve-button-padding-inline-large);
    --ve-button-current-font-size: var(--ve-button-font-size-large);
  }

  :host([shape='round']) {
    --ve-button-current-radius: var(--ve-button-radius-round);
  }

  :host([shape='circle']) {
    --ve-button-current-radius: var(--ve-button-radius-circle);
    --ve-button-current-padding-inline: 0px;
  }

  :host([status='success']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-success);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-success
    );
    --ve-button-current-status-text: var(--ve-button-status-text-success);
    --ve-button-current-status-border: var(--ve-button-status-border-success);
  }

  :host([status='warning']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-warning);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-warning
    );
    --ve-button-current-status-text: var(--ve-button-status-text-warning);
    --ve-button-current-status-border: var(--ve-button-status-border-warning);
  }

  :host([status='danger']) {
    --ve-button-current-status-surface: var(--ve-button-status-surface-danger);
    --ve-button-current-status-surface-secondary: var(
      --ve-button-status-surface-secondary-danger
    );
    --ve-button-current-status-text: var(--ve-button-status-text-danger);
    --ve-button-current-status-border: var(--ve-button-status-border-danger);
  }

  :host([status='success'][type='primary']),
  :host([status='warning'][type='primary']),
  :host([status='danger'][type='primary']) {
    --ve-button-current-background: var(--ve-button-current-status-surface);
    --ve-button-current-text: var(--ve-button-text-primary);
  }

  :host([status='success'][type='secondary']),
  :host([status='warning'][type='secondary']),
  :host([status='danger'][type='secondary']) {
    --ve-button-current-background: var(
      --ve-button-current-status-surface-secondary
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  :host([status='success'][type='outline']),
  :host([status='warning'][type='outline']),
  :host([status='danger'][type='outline']),
  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-text: var(--ve-button-current-status-text);
    --ve-button-current-border: var(--ve-button-current-status-border);
    --ve-button-current-text-hover: var(--ve-button-current-status-text);
    --ve-button-current-text-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-text)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-border-hover: var(--ve-button-current-text-hover);
    --ve-button-current-border-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-border)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='outline-filled']),
  :host([status='warning'][type='outline-filled']),
  :host([status='danger'][type='outline-filled']) {
    --ve-button-current-border-hover: var(--ve-button-current-border);
    --ve-button-current-border-pressed: var(--ve-button-current-border);
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
  }

  :host([status='success'][type='text']),
  :host([status='warning'][type='text']),
  :host([status='danger'][type='text']) {
    --ve-button-current-background-hover: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-hover-ratio),
      var(--ve-button-current-hover-mix)
    );
    --ve-button-current-background-pressed: color-mix(
      in srgb,
      var(--ve-button-current-status-surface-secondary)
        var(--ve-button-current-pressed-ratio),
      var(--ve-button-current-pressed-mix)
    );
    --ve-button-current-text: var(--ve-button-current-status-text);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-button-current-background-hover: var(--ve-button-current-background);
      --ve-button-current-background-pressed: var(
        --ve-button-current-background
      );
      --ve-button-current-border-hover: var(--ve-button-current-border);
      --ve-button-current-border-pressed: var(--ve-button-current-border);
    }

    :host([status='success'][type='outline']),
    :host([status='warning'][type='outline']),
    :host([status='danger'][type='outline']),
    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-text-pressed: var(--ve-button-current-status-text);
      --ve-button-current-border-pressed: var(
        --ve-button-current-status-border
      );
    }

    :host([status='success'][type='outline-filled']),
    :host([status='warning'][type='outline-filled']),
    :host([status='danger'][type='outline-filled']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }

    :host([status='success'][type='text']),
    :host([status='warning'][type='text']),
    :host([status='danger'][type='text']) {
      --ve-button-current-background-hover: var(
        --ve-button-current-status-surface-secondary
      );
      --ve-button-current-background-pressed: var(
        --ve-button-current-status-surface-secondary
      );
    }
  }
`,ts=[tt.H6,to,(0,G.AH)`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([loading]) {
      cursor: wait;
    }

    :host([long]) {
      display: flex;
      width: 100%;
    }

    .ve-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
      appearance: none;
      box-sizing: border-box;
      margin: 0;
      min-inline-size: fit-content;
      block-size: var(--ve-button-current-height);
      padding-block: 0;
      padding-inline: var(--ve-button-current-padding-inline);
      border-style: solid;
      border-width: var(--ve-button-current-border-width);
      border-color: var(--ve-button-current-border);
      border-radius: var(--ve-button-current-radius);
      background: var(--ve-button-current-background);
      color: var(--ve-button-current-text);
      font-family: var(--font-sans);
      font-size: var(--ve-button-current-font-size);
      font-weight: var(--ve-button-font-weight);
      line-height: 1;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      transition:
        background-color 160ms ease,
        border-color 160ms ease,
        color 160ms ease,
        transform 90ms ease-out,
        opacity 160ms ease,
        box-shadow 160ms ease;
    }

    :host([long]) .ve-btn {
      width: 100%;
    }

    .ve-btn--compact {
      inline-size: var(--ve-button-current-height);
      min-inline-size: var(--ve-button-current-height);
      padding-inline: 0;
    }

    :host([shape='circle']) .ve-btn {
      inline-size: var(--ve-button-current-height);
    }

    .ve-btn:focus-visible {
      outline: none;
    }

    :host(:not([disabled]):not([loading])) .ve-btn:hover,
    :host(:not([disabled]):not([loading])) .ve-btn:focus-visible {
      background: var(--ve-button-current-background-hover);
      border-color: var(--ve-button-current-border-hover);
      color: var(--ve-button-current-text-hover);
    }

    :host(:not([disabled]):not([loading])) .ve-btn:active {
      background: var(--ve-button-current-background-pressed);
      border-color: var(--ve-button-current-border-pressed);
      color: var(--ve-button-current-text-pressed);
      transform: var(--ve-button-press-transform);
    }

    :host([disabled]) .ve-btn {
      opacity: var(--ve-button-disabled-opacity);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host([loading]) .ve-btn {
      cursor: wait;
      pointer-events: none;
    }

    .ve-btn-content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ve-button-gap);
    }

    .ve-btn-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      line-height: 0;
      /* 通过 -override 钩子把图标尺寸继承式地下发给插槽内（含包裹层内）
         的 ve-icon；ve-icon 自身 :host 声明会阻断直接继承 --ve-icon-size */
      --ve-icon-size-override: var(--ve-button-icon-size);
    }

    /* 与 .ve-btn-icon 的 display 规则优先级持平，需显式兜底 hidden 行为 */
    .ve-btn-icon[hidden] {
      display: none;
    }

    .ve-btn-icon ::slotted(*) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
    }

    .ve-btn-icon ::slotted(svg),
    .ve-btn-icon ::slotted(img) {
      inline-size: var(--ve-button-icon-size);
      block-size: var(--ve-button-icon-size);
      color: inherit;
    }

    .ve-btn-loading-icon {
      --ve-icon-size: var(--ve-button-loading-icon-size);

      animation: ve-button-spin 0.8s linear infinite;
      flex: none;
    }

    @keyframes ve-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ve-btn {
        transition: none;
      }

      .ve-btn-loading-icon {
        animation: none;
      }
    }

  `];function ta(t,e,r){"symbol"==typeof e&&(e=(e=e.description)?"["+e+"]":"");try{Object.defineProperty(t,"name",{configurable:!0,value:r?r+" "+e:e})}catch(t){}return t}let ti="ve-button",tu=["aria-label","aria-labelledby","aria-describedby"],tc=/^[^\p{L}\p{N}\p{Script=Han}]{1,2}$/u;n=(0,Q.MZ)({type:String,reflect:!0,useDefault:!0}),o=(0,Q.MZ)({type:String,reflect:!0,useDefault:!0}),s=(0,Q.MZ)({type:String,reflect:!0,useDefault:!0}),a=(0,Q.MZ)({type:String,reflect:!0,useDefault:!0}),i=(0,Q.MZ)({type:Boolean,reflect:!0}),u=(0,Q.MZ)({type:Boolean,reflect:!0}),c=(0,Q.MZ)({type:Boolean,reflect:!0}),v=(0,Q.MZ)({type:String}),l=(0,Q.MZ)({type:String}),b=(0,Q.P)(".ve-btn"),d=(0,Q.P)(".ve-btn-content"),h=(0,Q.P)("slot:not([name])"),p=(0,Q.P)('slot[name="icon"]'),g=(0,Q.wk)(),f=(0,Q.wk)();class tv extends tt.IB{static{({e:[_,m,y,x,w,k,C,S,E,z,O,A,I,$,j,N,M,T,P,D,Z,J,R,U,L,q,B,H,V,X]}=function(t,e,r){var n,o,s,a,i,u,c,v=Symbol.metadata||Symbol.for("Symbol.metadata"),l=Object.defineProperty,b=Object.create,d=[b(null),b(null)],h=e.length;function p(e,r,n){return function(o,s){r&&(s=o,o=t);for(var a=0;a<e.length;a++)s=e[a].apply(o,n?[s]:[]);return n?s:o}}function g(t,e,r,n){if("function"!=typeof t&&(n||void 0!==t))throw TypeError(e+" must "+(r||"be")+" a function"+(n?"":" or undefined"));return t}function f(t,e,r,n,o,s,a,i,v,b,h){function f(t){if(!h(t))throw TypeError("Attempted to access private element on non-instance")}var _=[].concat(e[0]),m=e[3],y=!a,x=1===o,w=3===o,k=4===o,C=2===o;function S(e,r,n){return function(o,s){return r&&(s=o,o=t),n&&n(o),desc[e].call(o,s)}}var E={},z=[],O=w?"get":k||x?"set":"value";if(!y&&(v?(b||x?E={get:ta(function(){return m(this)},n,"get"),set:function(t){e[4](this,t)}}:E[O]=m,b||ta(E[O],n,C?"":O)):b||(E=Object.getOwnPropertyDescriptor(t,n)),!b&&!v)){if((c=d[+i][n])&&(c^o)!=7)throw Error("Decorating two elements with the same name ("+E[O].name+") is not supported yet");d[+i][n]=o<3?1:o}for(var A=t,I=_.length-1;I>=0;I-=r?2:1){var $=g(_[I],"A decorator","be",!0),j=r?_[I-1]:void 0,N={},M={kind:["field","accessor","method","getter","setter","class"][o],name:n,metadata:u,addInitializer:(function(t,e){if(t.v)throw TypeError("attempted to call addInitializer after decoration was finished");g(e,"An initializer","be",!0),s.push(e)}).bind(null,N)};if(y){c=$.call(j,A,M),N.v=1,g(c,"class decorators","return")&&(A=c);continue}if(M.static=i,M.private=v,c=M.access={has:v?h.bind():function(t){return n in t}},k||(c.get=v?C?function(t){return f(t),E.value}:S("get",0,f):function(t){return t[n]}),C||w||(c.set=v?S("set",0,f):function(t,e){t[n]=e}),A=$.call(j,x?{get:E.get,set:E.set}:E[O],M),N.v=1,x){if("object"==typeof A&&A)(c=g(A.get,"accessor.get"))&&(E.get=c),(c=g(A.set,"accessor.set"))&&(E.set=c),(c=g(A.init,"accessor.init"))&&z.unshift(c);else if(void 0!==A)throw TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else g(A,(b?"field":"method")+" decorators","return")&&(b?z.unshift(A):E[O]=A)}return o<2&&a.push(p(z,i,1),p(s,i,0)),b||y||(v?x?a.splice(-1,0,S("get",i),S("set",i)):a.push(C?E[O]:g.call.bind(E[O])):l(t,n,E)),A}function _(t){return l(t,v,{configurable:!0,enumerable:!0,value:u})}return u=b(null==u?null:u),s=[],a=function(t){t&&s.push(p(t))},(i=function(e,a){for(var i=0;i<r.length;i++){var u=r[i],c=u[1],v=7&c;if((8&c)==e&&!v==a){var l=u[2],b=!!u[3],d=16&c;f(e?t:t.prototype,u,d,b?"#"+l:function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(l),v,v<2?[]:e?o=o||[]:n=n||[],s,!!e,b,a,e&&b?function(e){return function(t){if(Object(t)!==t)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==t?typeof t:"null"));return t}(e)===t}:void 0)}}})(8,0),i(0,0),i(8,1),i(0,1),a(n),a(o),c=s,h||_(t),{e:c,get c(){var r=[];return h&&[_(t=f(t,[e],void 0,t.name,5,r)),p(r,1)]}}}(this,[],[[n,1,"type"],[o,1,"size"],[s,1,"shape"],[a,1,"status"],[i,1,"disabled"],[u,1,"loading"],[c,1,"long"],[v,1,"href"],[l,1,"target"],[b,1,"controlElement"],[d,1,"contentElement"],[h,1,"defaultSlot"],[p,1,"iconSlot"],[g,1,"compact"],[f,1,"hasIconSlot"]]))}static styles=ts;static dependencies={[te.v]:te.O};static get observedAttributes(){return[...new Set([...super.observedAttributes,...tu])]}#t=(()=>{let t=_(this,"primary");return m(this),t})();get type(){return this.#t}set type(t){this.#t=t}#e=(()=>{let t=y(this,"default");return x(this),t})();get size(){return this.#e}set size(t){this.#e=t}#r=(()=>{let t=w(this,"default");return k(this),t})();get shape(){return this.#r}set shape(t){this.#r=t}#n=(()=>{let t=C(this,"default");return S(this),t})();get status(){return this.#n}set status(t){this.#n=t}#o=(()=>{let t=E(this,!1);return z(this),t})();get disabled(){return this.#o}set disabled(t){this.#o=t}#s=(()=>{let t=O(this,!1);return A(this),t})();get loading(){return this.#s}set loading(t){this.#s=t}#a=(()=>{let t=I(this,!1);return $(this),t})();get long(){return this.#a}set long(t){this.#a=t}#i=(()=>{let t=j(this,"");return N(this),t})();get href(){return this.#i}set href(t){this.#i=t}#u=(()=>{let t=M(this,"_self");return T(this),t})();get target(){return this.#u}set target(t){this.#u=t}#c=(()=>{let t=P(this,null);return D(this),t})();get controlElement(){return this.#c}set controlElement(t){this.#c=t}#v=(()=>{let t=Z(this,null);return J(this),t})();get contentElement(){return this.#v}set contentElement(t){this.#v=t}#l=(()=>{let t=R(this,null);return U(this),t})();get defaultSlot(){return this.#l}set defaultSlot(t){this.#l=t}#b=(()=>{let t=L(this,null);return q(this),t})();get iconSlot(){return this.#b}set iconSlot(t){this.#b=t}#d=(()=>{let t=B(this,!1);return H(this),t})();get compact(){return this.#d}set compact(t){this.#d=t}#h=(()=>{let t=V(this,!1);return X(this),t})();get hasIconSlot(){return this.#h}set hasIconSlot(t){this.#h=t}contentResizeObserver=null;observedContentElement=null;constructor(){super(),this.addEventListener("click",this.handleHostClick,{capture:!0})}get isLinkMode(){return(this.href??"").trim().length>0}get isUnavailable(){return this.disabled||this.loading}get showCustomIcon(){return!this.loading&&(this.hasIconSlot||(0,tr.mh)(this,"icon"))}get controlAriaLabel(){return this.getAttribute("aria-label")??void 0}get controlAriaLabelledby(){return this.getAttribute("aria-labelledby")??void 0}get controlAriaDescribedby(){return this.getAttribute("aria-describedby")??void 0}focus(t){this.controlElement?.focus(t)}click(){this.isUnavailable||this.controlElement?.click()}firstUpdated(t){super.firstUpdated(t),this.contentResizeObserver=new ResizeObserver(()=>{this.syncCompactState()}),this.observeContentElement(),this.syncIconSlotState(),this.syncCompactState()}updated(t){super.updated(t),this.observeContentElement(),this.syncCompactState()}disconnectedCallback(){this.contentResizeObserver?.disconnect(),this.observedContentElement=null,super.disconnectedCallback()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),e!==r&&tu.includes(t)&&this.requestUpdate()}handleHostClick(t){this.isUnavailable&&(t.preventDefault(),t.stopImmediatePropagation())}handleClick(t){this.isUnavailable&&(t.preventDefault(),t.stopPropagation())}handleSlotChange(){this.syncCompactState()}handleIconSlotChange(){this.syncIconSlotState(),this.syncCompactState()}syncIconSlotState(){this.hasIconSlot=(0,tr.qi)(this.iconSlot)||(0,tr.mh)(this,"icon")}observeContentElement(){this.contentResizeObserver&&this.observedContentElement!==this.contentElement&&(this.observedContentElement&&this.contentResizeObserver.unobserve(this.observedContentElement),this.contentElement&&this.contentResizeObserver.observe(this.contentElement),this.observedContentElement=this.contentElement)}syncCompactState(){this.compact=this.shouldRenderCompactSquare()}shouldRenderCompactSquare(){if("default"!==this.shape||this.long||this.loading)return!1;let t=this.controlElement,e=this.contentElement;if(!t||!e||!this.hasCompactContent())return!1;let r=e.getBoundingClientRect().width,n=t.getBoundingClientRect().height;return r>0&&n>0&&r<=n}hasCompactContent(){let t=[...this.showCustomIcon?this.iconSlot?.assignedNodes({flatten:!0})??[]:[],...this.defaultSlot?.assignedNodes({flatten:!0})??[]].filter(t=>t.nodeType===Node.TEXT_NODE?(t.textContent?.trim().length??0)>0:t.nodeType===Node.ELEMENT_NODE);return t.length>0&&t.every(t=>this.isCompactContentNode(t))}isCompactContentNode(t){if(t.nodeType===Node.TEXT_NODE)return this.isCompactText(t.textContent??"");if(t.nodeType!==Node.ELEMENT_NODE)return!1;let e=t.textContent?.trim()??"",r=t.tagName.toLowerCase(),n="svg"===r||"img"===r||r.includes("icon");if("true"===t.getAttribute("aria-hidden")||"presentation"===t.getAttribute("role")||t.getAttribute("role"),n&&0===e.length)return!0;if(0===e.length){let e=Array.from(t.children),r=1===e.length?e[0]:void 0;return void 0!==r&&this.isCompactContentNode(r)}return this.isCompactText(e)}isCompactText(t){return tc.test(t.trim())}renderIcon(){return(0,G.qy)`
      <span class="ve-btn-icon" part="icon" ?hidden=${!this.showCustomIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
    `}renderContent(){return(0,G.qy)`
      ${this.loading?(0,G.qy)`<ve-icon
            class="ve-btn-loading-icon"
            part="spinner"
            .definition=${tn.o}
          ></ve-icon>`:G.s6}
      <span class="ve-btn-content" part="content">
        ${this.renderIcon()}
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
    `}render(){let t=this.compact?"ve-btn ve-btn--compact":"ve-btn";return this.isLinkMode?(0,G.qy)`
        <a
          class=${t}
          part="control"
          href=${(0,K.J)(this.isUnavailable?void 0:this.href)}
          target=${(0,K.J)(this.isUnavailable?void 0:this.target)}
          rel=${(0,K.J)(!this.isUnavailable&&"_blank"===this.target?"noreferrer noopener":void 0)}
          aria-label=${(0,K.J)(this.controlAriaLabel)}
          aria-labelledby=${(0,K.J)(this.controlAriaLabelledby)}
          aria-describedby=${(0,K.J)(this.controlAriaDescribedby)}
          aria-disabled=${(0,K.J)(this.isUnavailable?"true":void 0)}
          aria-busy=${(0,K.J)(this.loading?"true":void 0)}
          tabindex=${(0,K.J)(this.isUnavailable?"-1":void 0)}
          @click=${this.handleClick}
        >
          ${this.renderContent()}
        </a>
      `:(0,G.qy)`
      <button
        class=${t}
        part="control"
        type="button"
        ?disabled=${this.isUnavailable}
        aria-label=${(0,K.J)(this.controlAriaLabel)}
        aria-labelledby=${(0,K.J)(this.controlAriaLabelledby)}
        aria-describedby=${(0,K.J)(this.controlAriaDescribedby)}
        aria-busy=${(0,K.J)(this.loading?"true":void 0)}
        @click=${this.handleClick}
      >
        ${this.renderContent()}
      </button>
    `}}(0,tt.Xq)(ti,tv);var tl=r("pw");let tb=(0,F.a)({tagName:ti,elementClass:tv,react:Y,events:{onClick:"click"}}),td={width:"var(--ve-button-icon-size)",height:"var(--ve-button-icon-size)"},th=W.forwardRef(({icon:t,children:e,...r},n)=>W.createElement(tb,{...r,ref:n},(0,tl.ns)(t)?W.isValidElement(t)&&"string"==typeof t.type?W.cloneElement(t,{slot:"icon"}):W.createElement("span",{slot:"icon",style:td},t):null,e));th.displayName="Button"},o4(t,e,r){var n=r("Txc");let o=(0,r("JVS").b)(n.addIcon,"IconAdd");r.d(e,{},{x:o})},Txc(t,e,r){r.r(e);var n=r("ahw"),o=r("o6");let s={name:"add",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m-8-8h16"/></svg>\n'};(0,n.W)(),(0,o.pU)(s),r.d(e,{},{addIcon:s})}}]);