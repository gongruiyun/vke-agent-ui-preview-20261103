/*! LICENSE: qp.bc8c1e0c3c.js.LICENSE.txt */
"use strict";(self.rspackChunkvke_agent=self.rspackChunkvke_agent||[]).push([["qp"],{JVS(e,t,r){r.d(t,{b:()=>v});var o=r("Hw"),a=r.t(o,2),n=r("SPA"),s=r("aY");r("ahw");var i=r("JE");r("o6");let l=(0,n.a)({tagName:s.v,elementClass:s.O,react:a}),c=o.forwardRef((e,t)=>{let{name:r,definition:a}=e;return o.useEffect(()=>{if(a)return;let e="string"==typeof r?r.trim():"";(0,i.iP)(e)&&(0,i.CW)(e)},[r,a]),o.createElement(l,{...e,ref:t})});function v(e,t){let r=o.forwardRef((t,r)=>o.createElement(c,{...t,definition:e,ref:r}));return r.displayName=t,r}c.displayName="Icon"},E2K(e,t,r){var o=r("AL");let a=(0,r("JVS").b)(o.errorIcon,"IconError");r.d(t,{},{c:a})},n5(e,t,r){var o=r("y1");let a=(0,r("JVS").b)(o.infoIcon,"IconInfo");r.d(t,{},{G:a})},II(e,t,r){r.d(t,{M:()=>a});var o=r("y0");let a=(0,r("JVS").b)(o.o,"IconLoading")},T7n(e,t,r){var o=r("pm6");let a=(0,r("JVS").b)(o.successIcon,"IconSuccess");r.d(t,{},{l:a})},jm(e,t,r){var o=r("Y7");let a=(0,r("JVS").b)(o.timeClockIcon,"IconTimeClock");r.d(t,{},{p:a})},oKt(e,t,r){var o=r("L6c");let a=(0,r("JVS").b)(o.warningIcon,"IconWarning");r.d(t,{},{i:a})},DP(e,t,r){let o,a,n,s,i,l,c,v,g,u,d,h,p,b,f,m,_,w,x,y,k,z,C,S;r.d(t,{v:()=>K});var I=r("Hw"),j=r.t(I,2),E=r("SPA"),B=r("Z5"),M=r("aMm"),L=r("pA");let A="important",P=" !"+A,T=(0,L.u$)(class extends L.WL{constructor(e){if(super(e),e.type!==L.OA.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{let o=e[r];return null==o?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){let{style:r}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?r.removeProperty(e):r[e]=null);for(let e in t){let o=t[e];if(null!=o){this.ft.add(e);let t="string"==typeof o&&o.endsWith(P);e.includes("-")||t?r.setProperty(e,t?o.slice(0,-11):o,t?A:""):r[e]=o}}return M.c0}});var $=r("CyR"),O=r("uiy"),q=r("pm6"),V=r("L6c"),W=r("AL"),Z=r("aY"),J=r("gq");let R=(0,B.AH)`
  :host {
    --ve-tag-height: 22px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-gap: var(--space-xxxs);
    --ve-tag-radius: var(--radius-sm);
    --ve-tag-font-family: var(--font-sans);
    --ve-tag-font-size: var(--text-caption);
    --ve-tag-font-weight: var(--font-weight-normal);
    --ve-tag-line-height: var(--line-height-body);
    --ve-tag-background: var(--color-bg-surface);
    --ve-tag-text-color: var(--color-text-secondary);
    --ve-tag-border-color: var(--color-border-default);
    --ve-tag-border-width: var(--stroke-weight-base);
    --ve-tag-icon-size: 14px;
    --ve-tag-close-size: 12px;
    --ve-tag-close-icon-size: 12px;
    --ve-tag-focus-ring-width: var(--stroke-weight-bold);
    --ve-tag-focus-ring-color: color-mix(
      in srgb,
      var(--ve-tag-current-text-color) 24%,
      transparent
    );

    --ve-tag-status-success-background: var(--color-bg-success-secondary);
    --ve-tag-status-success-text-color: var(--color-text-success);
    --ve-tag-status-success-border-color: var(--color-border-success);
    --ve-tag-status-warning-background: var(--color-bg-warning-secondary);
    --ve-tag-status-warning-text-color: var(--color-text-warning);
    --ve-tag-status-warning-border-color: var(--color-border-warning);
    --ve-tag-status-error-background: var(--color-bg-danger-secondary);
    --ve-tag-status-error-text-color: var(--color-text-danger);
    --ve-tag-status-error-border-color: var(--color-border-danger);

    --ve-tag-current-background: var(--ve-tag-background);
    --ve-tag-current-text-color: var(--ve-tag-text-color);
    --ve-tag-current-border-color: transparent;
    --ve-tag-current-close-color: var(--ve-tag-current-text-color);
  }

  :host([size='small']) {
    --ve-tag-height: 16px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-radius: var(--radius-xs);
    --ve-tag-font-size: calc(var(--text-caption) - var(--stroke-weight-bold));
    --ve-tag-icon-size: 12px;
    --ve-tag-close-size: 10px;
    --ve-tag-close-icon-size: 10px;
  }

  :host([size='medium']) {
    --ve-tag-height: 18px;
    --ve-tag-padding-inline: calc(var(--space-xxs) - var(--stroke-weight-bold));
    --ve-tag-radius: var(--radius-xs);
    --ve-tag-font-size: calc(var(--text-caption) - var(--stroke-weight-bold));
    --ve-tag-icon-size: 12px;
    --ve-tag-close-size: 10px;
    --ve-tag-close-icon-size: 10px;
  }

  :host([size='large']) {
    --ve-tag-height: 24px;
    --ve-tag-padding-inline: var(--space-xxs);
    --ve-tag-radius: var(--radius-sm);
    --ve-tag-font-size: var(--text-body-sm);
    --ve-tag-icon-size: 14px;
    --ve-tag-close-size: 12px;
    --ve-tag-close-icon-size: 12px;
  }

  :host([bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-border-color);
  }

  :host([status='success']) {
    --ve-tag-current-background: var(--ve-tag-status-success-background);
    --ve-tag-current-text-color: var(--ve-tag-status-success-text-color);
  }

  :host([status='warning']) {
    --ve-tag-current-background: var(--ve-tag-status-warning-background);
    --ve-tag-current-text-color: var(--ve-tag-status-warning-text-color);
  }

  :host([status='error']) {
    --ve-tag-current-background: var(--ve-tag-status-error-background);
    --ve-tag-current-text-color: var(--ve-tag-status-error-text-color);
  }

  :host([status='success'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-success-border-color);
  }

  :host([status='warning'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-warning-border-color);
  }

  :host([status='error'][bordered]) {
    --ve-tag-current-border-color: var(--ve-tag-status-error-border-color);
  }

  @supports not (color: color-mix(in srgb, red, blue)) {
    :host {
      --ve-tag-focus-ring-color: var(--ve-tag-current-text-color);
    }
  }
`,U=[O.H6,R,(0,B.AH)`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    .ve-tag {
      display: inline-flex;
      align-items: center;
      gap: var(--ve-tag-gap);
      box-sizing: border-box;
      block-size: var(--ve-tag-height);
      max-inline-size: 100%;
      padding-inline: var(--ve-tag-padding-inline);
      border: var(--ve-tag-border-width) solid
        var(--ve-tag-current-border-color);
      border-radius: var(--ve-tag-radius);
      background: var(--ve-tag-current-background);
      color: var(--ve-tag-current-text-color);
      font-family: var(--ve-tag-font-family);
      font-size: var(--ve-tag-font-size);
      font-weight: var(--ve-tag-font-weight);
      line-height: var(--ve-tag-line-height);
      white-space: nowrap;
      overflow: hidden;
      transition:
        background-color var(--motion-fast) ease,
        border-color var(--motion-fast) ease,
        color var(--motion-fast) ease,
        box-shadow var(--motion-fast) ease;
      outline: none;
    }

    .ve-tag-control {
      display: inline-flex;
      align-items: center;
      gap: var(--ve-tag-gap);
      min-inline-size: 0;
      color: inherit;
      outline: none;
    }

    .ve-tag-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-tag-icon-size);
      block-size: var(--ve-tag-icon-size);
      color: inherit;
      line-height: 0;
      --ve-icon-size: var(--ve-tag-icon-size);
    }

    .ve-tag-icon ::slotted(*) {
      flex: none;
      inline-size: var(--ve-tag-icon-size);
      block-size: var(--ve-tag-icon-size);
      color: inherit;
      line-height: 0;
    }


    .ve-tag-label {
      display: block;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ve-tag-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: none;
      inline-size: var(--ve-tag-close-size);
      block-size: var(--ve-tag-close-size);
      padding: 0;
      border: none;
      border-radius: var(--radius-full);
      background: transparent;
      color: var(--ve-tag-current-close-color);
      cursor: pointer;
      outline: none;
      transition:
        background-color var(--motion-fast) ease,
        box-shadow var(--motion-fast) ease;
    }

    .ve-tag-close svg {
      inline-size: var(--ve-tag-close-icon-size);
      block-size: var(--ve-tag-close-icon-size);
    }

    .ve-tag-close:hover,
    .ve-tag-close:focus-visible {
      background: color-mix(
        in srgb,
        var(--ve-tag-current-background) var(--state-hover-subtle-ratio),
        var(--state-hover-subtle-mix)
      );
    }

    .ve-tag-close:active {
      background: color-mix(
        in srgb,
        var(--ve-tag-current-background) var(--state-pressed-subtle-ratio),
        var(--state-pressed-subtle-mix)
      );
    }

    @supports not (color: color-mix(in srgb, red, blue)) {
      .ve-tag-close:hover,
      .ve-tag-close:focus-visible {
        background: var(--ve-tag-current-background);
      }

      .ve-tag-close:active {
        background: var(--ve-tag-current-background);
      }
    }
  `];function N(e,t,r){"symbol"==typeof t&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch(e){}return e}let D={success:q.successIcon,warning:V.warningIcon,error:W.errorIcon};o=(0,$.MZ)({type:String,reflect:!0}),a=(0,$.MZ)({type:String,attribute:"bg-color",reflect:!0}),n=(0,$.MZ)({type:String,reflect:!0}),s=(0,$.MZ)({type:String,reflect:!0,useDefault:!0}),i=(0,$.MZ)({type:Boolean,reflect:!0}),l=(0,$.MZ)({type:Boolean,reflect:!0}),c=(0,$.P)('slot[name="icon"]'),v=(0,$.wk)();class H extends O.IB{static{({e:[g,u,d,h,p,b,f,m,_,w,x,y,k,z,C,S]}=function(e,t,r){var o,a,n,s,i,l,c,v=Symbol.metadata||Symbol.for("Symbol.metadata"),g=Object.defineProperty,u=Object.create,d=[u(null),u(null)],h=t.length;function p(t,r,o){return function(a,n){r&&(n=a,a=e);for(var s=0;s<t.length;s++)n=t[s].apply(a,o?[n]:[]);return o?n:a}}function b(e,t,r,o){if("function"!=typeof e&&(o||void 0!==e))throw TypeError(t+" must "+(r||"be")+" a function"+(o?"":" or undefined"));return e}function f(e,t,r,o,a,n,s,i,v,u,h){function f(e){if(!h(e))throw TypeError("Attempted to access private element on non-instance")}var m=[].concat(t[0]),_=t[3],w=!s,x=1===a,y=3===a,k=4===a,z=2===a;function C(t,r,o){return function(a,n){return r&&(n=a,a=e),o&&o(a),desc[t].call(a,n)}}var S={},I=[],j=y?"get":k||x?"set":"value";if(!w&&(v?(u||x?S={get:N(function(){return _(this)},o,"get"),set:function(e){t[4](this,e)}}:S[j]=_,u||N(S[j],o,z?"":j)):u||(S=Object.getOwnPropertyDescriptor(e,o)),!u&&!v)){if((c=d[+i][o])&&(c^a)!=7)throw Error("Decorating two elements with the same name ("+S[j].name+") is not supported yet");d[+i][o]=a<3?1:a}for(var E=e,B=m.length-1;B>=0;B-=r?2:1){var M=b(m[B],"A decorator","be",!0),L=r?m[B-1]:void 0,A={},P={kind:["field","accessor","method","getter","setter","class"][a],name:o,metadata:l,addInitializer:(function(e,t){if(e.v)throw TypeError("attempted to call addInitializer after decoration was finished");b(t,"An initializer","be",!0),n.push(t)}).bind(null,A)};if(w){c=M.call(L,E,P),A.v=1,b(c,"class decorators","return")&&(E=c);continue}if(P.static=i,P.private=v,c=P.access={has:v?h.bind():function(e){return o in e}},k||(c.get=v?z?function(e){return f(e),S.value}:C("get",0,f):function(e){return e[o]}),z||y||(c.set=v?C("set",0,f):function(e,t){e[o]=t}),E=M.call(L,x?{get:S.get,set:S.set}:S[j],P),A.v=1,x){if("object"==typeof E&&E)(c=b(E.get,"accessor.get"))&&(S.get=c),(c=b(E.set,"accessor.set"))&&(S.set=c),(c=b(E.init,"accessor.init"))&&I.unshift(c);else if(void 0!==E)throw TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else b(E,(u?"field":"method")+" decorators","return")&&(u?I.unshift(E):S[j]=E)}return a<2&&s.push(p(I,i,1),p(n,i,0)),u||w||(v?x?s.splice(-1,0,C("get",i),C("set",i)):s.push(z?S[j]:b.call.bind(S[j])):g(e,o,S)),E}function m(e){return g(e,v,{configurable:!0,enumerable:!0,value:l})}return l=u(null==l?null:l),n=[],s=function(e){e&&n.push(p(e))},(i=function(t,s){for(var i=0;i<r.length;i++){var l=r[i],c=l[1],v=7&c;if((8&c)==t&&!v==s){var g=l[2],u=!!l[3],d=16&c;f(t?e:e.prototype,l,d,u?"#"+g:function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(g),v,v<2?[]:t?a=a||[]:o=o||[],n,!!t,u,s,t&&u?function(t){return function(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(null!==e?typeof e:"null"));return e}(t)===e}:void 0)}}})(8,0),i(0,0),i(8,1),i(0,1),s(o),s(a),c=n,h||m(e),{e:c,get c(){var r=[];return h&&[m(e=f(e,[t],void 0,e.name,5,r)),p(r,1)]}}}(this,[],[[o,1,"color"],[a,1,"bgColor"],[n,1,"status"],[s,1,"size"],[i,1,"closable"],[l,1,"bordered"],[c,1,"iconSlot"],[v,1,"hasIconSlot"]]))}static styles=U;static dependencies={[Z.v]:Z.O};#e=(()=>{let e=g(this,"");return u(this),e})();get color(){return this.#e}set color(e){this.#e=e}#t=(()=>{let e=d(this,"");return h(this),e})();get bgColor(){return this.#t}set bgColor(e){this.#t=e}#r=(()=>{let e=p(this,"");return b(this),e})();get status(){return this.#r}set status(e){this.#r=e}#o=(()=>{let e=f(this,"default");return m(this),e})();get size(){return this.#o}set size(e){this.#o=e}#a=(()=>{let e=_(this,!1);return w(this),e})();get closable(){return this.#a}set closable(e){this.#a=e}#n=(()=>{let e=x(this,!1);return y(this),e})();get bordered(){return this.#n}set bordered(e){this.#n=e}#s=(()=>{let e=k(this,null);return z(this),e})();get iconSlot(){return this.#s}set iconSlot(e){this.#s=e}#i=(()=>{let e=C(this,!1);return S(this),e})();get hasIconSlot(){return this.#i}set hasIconSlot(e){this.#i=e}firstUpdated(){this.syncSlotState()}get normalizedColor(){return(this.color??"").trim()}get normalizedBgColor(){return(this.bgColor??"").trim()}get customColorStyle(){let e={};return this.normalizedColor&&(e["--ve-tag-text-color"]=this.normalizedColor,e["--ve-tag-border-color"]=this.normalizedColor,e["--ve-tag-current-text-color"]=this.normalizedColor,e["--ve-tag-current-close-color"]=this.normalizedColor,this.bordered&&(e["--ve-tag-current-border-color"]=this.normalizedColor)),this.normalizedBgColor&&(e["--ve-tag-background"]=this.normalizedBgColor,e["--ve-tag-current-background"]=this.normalizedBgColor),e}get normalizedStatus(){return"success"===this.status||"warning"===this.status||"error"===this.status?this.status:""}get statusIcon(){let e=this.normalizedStatus;return e?D[e]:void 0}get shouldRenderIcon(){return!!this.statusIcon||this.hasIconSlot||(0,J.mh)(this,"icon")}syncSlotState(){this.hasIconSlot=(0,J.qi)(this.iconSlot)||(0,J.mh)(this,"icon")}handleIconSlotChange(){this.syncSlotState()}emitClose(e){return this.dispatchEvent(new CustomEvent("ve-close",{detail:{sourceEvent:e},bubbles:!0,composed:!0,cancelable:!0}))}handleCloseClick(e){e.preventDefault(),e.stopPropagation(),this.emitClose(e)}renderLabelContent(){return(0,B.qy)`<span class="ve-tag-label" part="label"><slot></slot></span>`}renderIcon(){if(!this.shouldRenderIcon)return B.s6;let e=this.statusIcon;return(0,B.qy)`
      <span class="ve-tag-icon" part="icon" aria-hidden="true">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        ${this.hasIconSlot||!e?B.s6:(0,B.qy)`<ve-icon .definition=${e}></ve-icon>`}
      </span>
    `}renderCloseButton(){return this.closable?(0,B.qy)`
      <button
        class="ve-tag-close"
        part="close"
        type="button"
        aria-label="Close tag"
        @click=${this.handleCloseClick}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            d="M4.47 4.47a.75.75 0 0 1 1.06 0L8 6.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L9.06 8l2.47 2.47a.75.75 0 1 1-1.06 1.06L8 9.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L6.94 8 4.47 5.53a.75.75 0 0 1 0-1.06Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    `:B.s6}renderControl(){return(0,B.qy)`
      <span class="ve-tag-control" part="control">
        ${this.renderIcon()}
        ${this.renderLabelContent()}
      </span>
    `}render(){return(0,B.qy)`
      <span
        class="ve-tag"
        part="container"
        style=${T(this.customColorStyle)}
      >
        ${this.renderControl()}
        ${this.renderCloseButton()}
      </span>
    `}}(0,O.Xq)("ve-tag",H);var Y=r("pw");let G=(0,E.a)({tagName:"ve-tag",elementClass:H,react:j,events:{onClose:"ve-close"}}),K=I.forwardRef(({icon:e,children:t,...r},o)=>I.createElement(G,{...r,ref:o},(0,Y.RG)("icon",e),t));K.displayName="Tag"},AL(e,t,r){r.r(t);var o=r("ahw"),a=r("o6");let n={name:"error",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.7 9.3-5.4 5.4m0-5.4 5.4 5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,o.W)(),(0,a.pU)(n),r.d(t,{},{errorIcon:n})},y1(e,t,r){r.r(t);var o=r("ahw"),a=r("o6");let n={name:"info",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18m.05-13v.1h-.1V8z"/></svg>\n'};(0,o.W)(),(0,a.pU)(n),r.d(t,{},{infoIcon:n})},pm6(e,t,r){r.r(t);var o=r("ahw"),a=r("o6");let n={name:"success",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.95 12 2.7 2.7 5.4-5.4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>\n'};(0,o.W)(),(0,a.pU)(n),r.d(t,{},{successIcon:n})},Y7(e,t,r){r.r(t);var o=r("ahw"),a=r("o6");let n={name:"time-clock",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5V12l3.405 3.405"/></svg>\n'};(0,o.W)(),(0,a.pU)(n),r.d(t,{},{timeClockIcon:n})},L6c(e,t,r){r.r(t);var o=r("ahw"),a=r("o6");let n={name:"warning",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v4m-7.686 2.2c-.917 1.575-1.376 2.363-1.307 3.01.06.563.358 1.075.82 1.408.53.382 1.447.382 3.28.382h9.786c1.833 0 2.75 0 3.28-.382.462-.333.76-.845.82-1.409.069-.646-.39-1.434-1.307-3.01l-4.89-8.4c-.918-1.574-1.377-2.362-1.976-2.626a2.03 2.03 0 0 0-1.64 0c-.6.264-1.058 1.052-1.974 2.625zm7.737.8v.1h-.101V16z"/></svg>\n'};(0,o.W)(),(0,a.pU)(n),r.d(t,{},{warningIcon:n})}}]);