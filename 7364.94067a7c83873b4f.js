"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [7364],
  {
    92110: (yt, U, r) => {
      r.d(U, { z: () => O });
      var s = r(51109),
        h = r(52126);
      let O = (() => {
        class b {}
        return (
          (b.ɵfac = function (p) {
            return new (p || b)();
          }),
          (b.ɵcmp = s.ɵɵdefineComponent({
            type: b,
            selectors: [["gas-price-widget"]],
            decls: 1,
            vars: 2,
            consts: [
              [
                "domain",
                "classic-swap-embed-gas-price",
                3,
                "compactMode",
                "showTitles",
              ],
            ],
            template: function (p, x) {
              1 & p && s.ɵɵelement(0, "swap-settings", 0),
                2 & p && s.ɵɵproperty("compactMode", !0)("showTitles", !1);
            },
            dependencies: [h.W],
            styles: ["[_nghost-%COMP%]{display:block}"],
            changeDetection: 0,
          })),
          b
        );
      })();
    },
    15927: (yt, U, r) => {
      r.d(U, { $: () => Z });
      var s = r(33747),
        h = r(35878),
        O = r(77724),
        b = r(55231),
        z = r(90813),
        p = r(51109),
        x = r(19333);
      let Z = (() => {
        class w {
          constructor(F, X, I, rt, M) {
            (this.destroy$ = F),
              (this.element = X),
              (this.templateRef = I),
              (this.viewContainer = rt),
              (this.settingToggleQuery = M);
          }
          set isSettingWidgetVisible(F) {
            const { contextId: X, widgetId: I } = F;
            (this.contextId = X), (this.widgetId = I);
          }
          get isViewCreated() {
            return null !== this.viewContainer.get(0);
          }
          ngOnInit() {
            const F = this.settingToggleQuery
              .isWidgetOpened$(this.contextId, this.widgetId)
              .pipe(
                (0, h.x)(),
                (0, O.b)((X) => {
                  !X || this.isViewCreated
                    ? X || !this.isViewCreated || this.viewContainer.clear()
                    : this.viewContainer.createEmbeddedView(this.templateRef);
                }),
                (0, b.R)(this.destroy$)
              );
            (0, z.O)(F, "isWidgetVisible$");
          }
        }
        return (
          (w.ɵfac = function (F) {
            return new (F || w)(
              p.ɵɵdirectiveInject(s.a3, 2),
              p.ɵɵdirectiveInject(p.ElementRef),
              p.ɵɵdirectiveInject(p.TemplateRef),
              p.ɵɵdirectiveInject(p.ViewContainerRef),
              p.ɵɵdirectiveInject(x.k)
            );
          }),
          (w.ɵdir = p.ɵɵdefineDirective({
            type: w,
            selectors: [["", "isSettingWidgetVisible", ""]],
            inputs: { isSettingWidgetVisible: "isSettingWidgetVisible" },
            features: [p.ɵɵProvidersFeature([s.a3])],
          })),
          w
        );
      })();
    },
    63582: (yt, U, r) => {
      r.d(U, { z: () => rt });
      var s = r(51109),
        h = r(90813),
        O = r(33747),
        b = r(76027),
        z = r(35878),
        p = r(77724),
        x = r(55231),
        Z = r(74578),
        w = r(19333),
        at = r(86732),
        F = r(12725),
        X = r(38143);
      function I(M, B) {
        if (1 & M) {
          const Q = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "button", 1),
            s.ɵɵlistener("click", function () {
              const bt = s.ɵɵrestoreView(Q).tuiLet,
                vt = s.ɵɵnextContext();
              return s.ɵɵresetView(vt.clickEdit(!bt));
            }),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd();
        }
        if (2 & M) {
          const Q = B.tuiLet;
          s.ɵɵadvance(1),
            s.ɵɵproperty(
              "transloco",
              Q ? "transactionCost.hide-title" : "common.edit"
            );
        }
      }
      let rt = (() => {
        class M {
          constructor(Q, pt, Tt) {
            (this.destroy$ = Q),
              (this.settingToggleQuery = pt),
              (this.settingToggleService = Tt),
              (this.customToggleFlow = !1),
              (this.toggleClick = new s.EventEmitter()),
              (this.isWidgetOpened$ = new b.X(!1));
          }
          ngOnInit() {
            const Q = this.settingToggleQuery
              .isWidgetOpened$(this.contextId, this.widgetId)
              .pipe(
                (0, z.x)(),
                (0, p.b)((pt) => {
                  this.isWidgetOpened$.next(pt);
                }),
                (0, x.R)(this.destroy$)
              );
            (0, h.O)(Q, "isWidgetOpened$");
          }
          clickEdit(Q) {
            this.settingToggleService.changeIsWidgetOpened({
              isOpened: Q,
              contextId: this.contextId,
              widgetId: this.widgetId,
            }),
              this.customToggleFlow && this.toggleClick.emit(Q);
          }
        }
        return (
          (M.ɵfac = function (Q) {
            return new (Q || M)(
              s.ɵɵdirectiveInject(O.a3, 2),
              s.ɵɵdirectiveInject(w.k),
              s.ɵɵdirectiveInject(at.d)
            );
          }),
          (M.ɵcmp = s.ɵɵdefineComponent({
            type: M,
            selectors: [["setting-toggle"]],
            inputs: {
              contextId: "contextId",
              widgetId: "widgetId",
              customToggleFlow: "customToggleFlow",
            },
            outputs: { toggleClick: "toggleClick" },
            features: [s.ɵɵProvidersFeature([O.a3])],
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              [1, "edit-button", "blank-button", 3, "transloco", "click"],
            ],
            template: function (Q, pt) {
              1 & Q &&
                (s.ɵɵtemplate(0, I, 2, 1, "ng-container", 0),
                s.ɵɵpipe(1, "async")),
                2 & Q &&
                  s.ɵɵproperty(
                    "tuiLet",
                    s.ɵɵpipeBind1(1, 1, pt.isWidgetOpened$)
                  );
            },
            dependencies: [Z.Ls, F.KI, X.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block}.edit-button[_ngcontent-%COMP%]{font-size:13px;color:var(--1inch-common-text-03)}.edit-button[_ngcontent-%COMP%]:hover{opacity:.75;transition:.2s}",
            ],
          })),
          M
        );
      })();
    },
    24960: (yt, U, r) => {
      r.d(U, { b: () => vt });
      var s = r(52611),
        h = r(90813),
        O = r(76027),
        b = r(76327),
        z = r(77724),
        p = r(51109),
        x = r(33246),
        Z = r(82405),
        w = r(56747),
        at = r(38143),
        F = r(74578),
        X = r(98182),
        I = r(80135),
        rt = r(12725),
        M = r(95475);
      function B(L, tt) {
        1 & L &&
          (p.ɵɵelementContainerStart(0),
          p.ɵɵelementStart(1, "span", 5),
          p.ɵɵtext(2),
          p.ɵɵpipe(3, "transloco"),
          p.ɵɵelementEnd(),
          p.ɵɵelement(4, "img", 6),
          p.ɵɵelementContainerEnd()),
          2 & L &&
            (p.ɵɵadvance(2),
            p.ɵɵtextInterpolate(p.ɵɵpipeBind1(3, 1, "button.approving")));
      }
      function Q(L, tt) {
        if (
          (1 & L &&
            (p.ɵɵelementStart(0, "div", 7)(1, "span", 8),
            p.ɵɵtext(2),
            p.ɵɵpipe(3, "transloco"),
            p.ɵɵelementEnd(),
            p.ɵɵelement(4, "tooltip", 9),
            p.ɵɵelementEnd()),
          2 & L)
        ) {
          const E = p.ɵɵnextContext(2),
            t = p.ɵɵreference(3);
          p.ɵɵadvance(2),
            p.ɵɵtextInterpolate1(
              " ",
              E.approveButtonTitle ||
                p.ɵɵpipeBind1(3, 2, "otc-deal.give-permission"),
              " "
            ),
            p.ɵɵadvance(2),
            p.ɵɵproperty("tooltip", t);
        }
      }
      function pt(L, tt) {
        if (1 & L) {
          const E = p.ɵɵgetCurrentView();
          p.ɵɵelementStart(0, "simple-button", 2),
            p.ɵɵlistener("click", function () {
              p.ɵɵrestoreView(E);
              const Ct = p.ɵɵnextContext();
              return p.ɵɵresetView(Ct.approveSourceToken());
            }),
            p.ɵɵtemplate(1, B, 5, 3, "ng-container", 3),
            p.ɵɵtemplate(2, Q, 5, 4, "div", 4),
            p.ɵɵelementEnd();
        }
        if (2 & L) {
          const E = tt.tuiLet,
            t = p.ɵɵnextContext();
          p.ɵɵproperty("color", t.color)("disabled", t.disabled || E),
            p.ɵɵadvance(1),
            p.ɵɵproperty("ngIf", E),
            p.ɵɵadvance(1),
            p.ɵɵproperty("ngIf", !E);
        }
      }
      const Tt = function (L) {
        return { sourceToken: L };
      };
      function bt(L, tt) {
        if (
          (1 & L &&
            (p.ɵɵtext(0),
            p.ɵɵpipe(1, "transloco"),
            p.ɵɵpipe(2, "displaySymbol")),
          2 & L)
        ) {
          const E = p.ɵɵnextContext();
          p.ɵɵtextInterpolate1(
            " ",
            p.ɵɵpipeBind2(
              1,
              1,
              "swapBox.to-continue",
              p.ɵɵpureFunction1(6, Tt, p.ɵɵpipeBind1(2, 4, E.sourceToken))
            ),
            "\n"
          );
        }
      }
      let vt = (() => {
        class L {
          constructor(E, t, Ct) {
            (this.approveTransactionService = E),
              (this.inProgressTxService = t),
              (this.acceptTermsService = Ct),
              (this.disabled = !1),
              (this.color = "blue"),
              (this.isSourceTokenApproveInProgress$ = new O.X(!1));
          }
          approveSourceToken() {
            const E = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, b.w)(() => this.approveTransaction$()),
              (0, b.w)((t) => {
                const Ct = this.sourceToken.address;
                return (
                  this.inProgressTxService.trackTransaction({
                    txHash: t,
                    asset: Ct,
                    widgetId: this.widgetId,
                  }),
                  this.isSourceTokenApproveInProgress$.next(!0),
                  this.inProgressTxService.isTxInProgress(Ct, this.widgetId)
                );
              }),
              (0, z.b)((t) => {
                this.isSourceTokenApproveInProgress$.next(t);
              })
            );
            (0, h.O)(E, "approveSourceToken$");
          }
          approveTransaction$() {
            const { sourceToken: E, approveContractType: t } = this;
            if (this.customSpender)
              return this.approveTransactionService.contractApproveTransaction({
                contractAddress: E.address,
                txType: this.customSpender.txType,
                txSubType: this.customSpender.txSubType,
                meta: {
                  asset: this.customSpender.asset,
                  approvedForAddress: this.customSpender.address,
                },
                spenderAddress: this.customSpender.address,
                amount: s.zL,
              });
            if ("swap" === this.approveContractType)
              return this.approveTransactionService.approveInfinitySwapTransaction$(
                E
              );
            if ("limit" === this.approveContractType)
              return this.approveTransactionService.approveLimitOrderTransaction$(
                E
              );
            throw new Error(`approveContractType has incorrect value: ${t}`);
          }
        }
        return (
          (L.ɵfac = function (E) {
            return new (E || L)(
              p.ɵɵdirectiveInject(x.f),
              p.ɵɵdirectiveInject(Z.Y),
              p.ɵɵdirectiveInject(w.N)
            );
          }),
          (L.ɵcmp = p.ɵɵdefineComponent({
            type: L,
            selectors: [["source-token-approve-button"]],
            inputs: {
              disabled: "disabled",
              sourceToken: "sourceToken",
              approveButtonTitle: "approveButtonTitle",
              widgetId: "widgetId",
              color: "color",
              approveContractType: "approveContractType",
              customSpender: "customSpender",
            },
            decls: 4,
            vars: 3,
            consts: [
              [3, "color", "disabled", "click", 4, "tuiLet"],
              ["tooltipText", ""],
              [3, "color", "disabled", "click"],
              [4, "ngIf"],
              ["class", "create-deal-button__title-wrap", 4, "ngIf"],
              [1, "token-approving"],
              [
                "src",
                "/assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "approving-img",
              ],
              [1, "create-deal-button__title-wrap"],
              [1, "create-deal-button__title"],
              [
                "direction",
                "top",
                "contentType",
                "question",
                "iconColor",
                "white",
                3,
                "tooltip",
              ],
            ],
            template: function (E, t) {
              1 & E &&
                (p.ɵɵtemplate(0, pt, 3, 4, "simple-button", 0),
                p.ɵɵpipe(1, "async"),
                p.ɵɵtemplate(
                  2,
                  bt,
                  3,
                  8,
                  "ng-template",
                  null,
                  1,
                  p.ɵɵtemplateRefExtractor
                )),
                2 & E &&
                  p.ɵɵproperty(
                    "tuiLet",
                    p.ɵɵpipeBind1(1, 1, t.isSourceTokenApproveInProgress$)
                  );
            },
            dependencies: [at.O5, F.Ls, X.q, I.K, at.Ov, rt.Ot, M.s],
            styles: [
              "[_nghost-%COMP%]{display:block}.token-approving[_ngcontent-%COMP%]{text-align:var(--1inch-common-text-01)}.approving-img[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:4px}.create-deal-button__title-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.create-deal-button__title-wrap[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]{margin-top:-1px}",
            ],
            changeDetection: 0,
          })),
          L
        );
      })();
    },
    40934: (yt, U, r) => {
      r.d(U, { f: () => Z });
      var s = r(38143),
        h = r(12725),
        O = r(16944),
        b = r(62901),
        z = r(74578),
        p = r(63223),
        x = r(51109);
      let Z = (() => {
        class w {}
        return (
          (w.ɵfac = function (F) {
            return new (F || w)();
          }),
          (w.ɵmod = x.ɵɵdefineNgModule({ type: w })),
          (w.ɵinj = x.ɵɵdefineInjector({
            imports: [s.ez, z.WD, h.y4, p._, O.z, b.w],
          })),
          w
        );
      })();
    },
    98002: (yt, U, r) => {
      r.d(U, { W: () => X });
      var s = r(20683),
        h = r(51109),
        O = r(38143),
        b = r(12725),
        z = r(23982),
        p = r(38964),
        x = r(3875),
        Z = r(47843),
        w = r(29889),
        at = r(86345);
      function F(I, rt) {
        if ((1 & I && h.ɵɵelement(0, "swap-price-impact", 9), 2 & I)) {
          const M = h.ɵɵnextContext();
          h.ɵɵproperty("priceImpact", M.swapPriceImpact.loss.inPercent)(
            "isHighPriceImpact",
            "extreme" === M.swapPriceImpact.level
          )("isWarningPriceImpact", "high" === M.swapPriceImpact.level);
        }
      }
      let X = (() => {
        class I {
          constructor() {
            (this.reverseText = !1),
              (this.loading = !1),
              (this.isBigIntMode = !1),
              (this.TokenRole = s.q);
          }
          set title(M) {
            this._title = M;
          }
          get title() {
            return this._title
              ? this._title
              : this.tokenRole === s.q.source
              ? this.reverseText
                ? "tokenPreview.pay-title"
                : "tokenPreview.sell-title"
              : this._title || "tokenPreview.get-title";
          }
          get tokenAmountTitle() {
            return this.isBigIntMode ? "" : this.tokenAmount;
          }
        }
        return (
          (I.ɵfac = function (M) {
            return new (M || I)();
          }),
          (I.ɵcmp = h.ɵɵdefineComponent({
            type: I,
            selectors: [["token-preview"]],
            inputs: {
              token: "token",
              tokenRole: "tokenRole",
              tokenAmount: "tokenAmount",
              reverseText: "reverseText",
              loading: "loading",
              isBigIntMode: "isBigIntMode",
              title: "title",
              swapPriceImpact: "swapPriceImpact",
            },
            decls: 10,
            vars: 16,
            consts: [
              [1, "token-preview__header"],
              ["target", "_blank", 3, "tokenLink", "transloco"],
              [1, "token-preview__usd-wrapper"],
              [1, "usd-token-price", 3, "token", "amount"],
              [
                "class",
                "token-preview__swap-price-impact",
                "data-id",
                "confirm-price-impact",
                3,
                "priceImpact",
                "isHighPriceImpact",
                "isWarningPriceImpact",
                4,
                "ngIf",
              ],
              [1, "token-preview__body"],
              [3, "token", "withArrow"],
              [1, "body__token-amount"],
              [3, "value", "decimals"],
              [
                "data-id",
                "confirm-price-impact",
                1,
                "token-preview__swap-price-impact",
                3,
                "priceImpact",
                "isHighPriceImpact",
                "isWarningPriceImpact",
              ],
            ],
            template: function (M, B) {
              1 & M &&
                (h.ɵɵelementStart(0, "div", 0),
                h.ɵɵelement(1, "a", 1),
                h.ɵɵelementStart(2, "div", 2),
                h.ɵɵelement(3, "usd-token-price", 3),
                h.ɵɵtemplate(4, F, 1, 3, "swap-price-impact", 4),
                h.ɵɵelementEnd()(),
                h.ɵɵelementStart(5, "div", 5),
                h.ɵɵelement(6, "token-select-button", 6),
                h.ɵɵelementStart(7, "div", 7),
                h.ɵɵelement(8, "token-amount", 8),
                h.ɵɵpipe(9, "toBigInt"),
                h.ɵɵelementEnd()()),
                2 & M &&
                  (h.ɵɵadvance(1),
                  h.ɵɵproperty("tokenLink", B.token.address)(
                    "transloco",
                    B.title
                  ),
                  h.ɵɵadvance(2),
                  h.ɵɵclassProp("skeleton-host", B.loading),
                  h.ɵɵproperty("token", B.token)("amount", B.tokenAmount),
                  h.ɵɵadvance(1),
                  h.ɵɵproperty("ngIf", B.swapPriceImpact && !B.loading),
                  h.ɵɵadvance(2),
                  h.ɵɵproperty("token", B.token)("withArrow", !1),
                  h.ɵɵadvance(1),
                  h.ɵɵclassProp("skeleton-host", B.loading),
                  h.ɵɵadvance(1),
                  h.ɵɵproperty(
                    "value",
                    B.isBigIntMode
                      ? B.tokenAmount
                      : h.ɵɵpipeBind2(9, 13, B.tokenAmount, B.token.decimals)
                  )("decimals", B.token.decimals));
            },
            dependencies: [O.O5, b.KI, z.N, p.C, x.e, Z.V, w.O, at.M],
            styles: [
              "[_nghost-%COMP%]{display:block;padding:16px;border:1px solid var(--1inch-border-04);box-sizing:border-box;border-radius:16px}.token-preview__usd-wrapper[_ngcontent-%COMP%]{display:flex}.token-preview__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:var(--1inch__ui-02)!important;font-size:13px;line-height:15px}.token-preview__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.token-preview__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer;transition:.2s;color:var(--1inch-text-03)}.token-preview__swap-price-impact[_ngcontent-%COMP%]{margin-left:4px}.token-preview__body[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:2px 0}.body__token-amount[_ngcontent-%COMP%]{font-size:24px;line-height:24px}.usd-token-price[_ngcontent-%COMP%]{display:block}",
            ],
            changeDetection: 0,
          })),
          I
        );
      })();
    },
    20683: (yt, U, r) => {
      r.d(U, { q: () => s });
      var s = (() => {
        return (
          ((h = s || (s = {})).source = "source"),
          (h.destination = "destination"),
          s
        );
        var h;
      })();
    },
    25541: (yt, U, r) => {
      r.d(U, { o: () => Wt });
      var s = r(51109),
        h = r(18992),
        O = r(52126),
        b = r(29737),
        z = r(76027),
        p = r(64736),
        x = r(68751),
        Z = r(76327),
        w = r(24124),
        at = r(36063),
        F = r(36565),
        X = r(86732),
        I = r(38143),
        rt = r(38964),
        M = r(33904),
        B = r(74578),
        Q = r(63582),
        pt = r(12725),
        Tt = r(80135);
      function bt(k, et) {
        if (
          (1 & k &&
            (s.ɵɵelement(0, "gas-refund-value", 6), s.ɵɵpipe(1, "async")),
          2 & k)
        ) {
          const S = s.ɵɵnextContext();
          s.ɵɵproperty(
            "refundPercent",
            s.ɵɵpipeBind1(1, 1, S.gasRefundPercent$)
          );
        }
      }
      function vt(k, et) {
        if (
          (1 & k &&
            (s.ɵɵnamespaceSVG(),
            s.ɵɵelementStart(0, "svg", 13),
            s.ɵɵelement(1, "use"),
            s.ɵɵelementEnd()),
          2 & k)
        ) {
          const S = s.ɵɵnextContext(5);
          s.ɵɵadvance(1),
            s.ɵɵattribute(
              "href",
              "assets/images/icons/" +
                S.gasPreview.icon +
                ".svg#" +
                S.gasPreview.icon,
              null,
              "xlink"
            );
        }
      }
      function L(k, et) {
        if (
          (1 & k &&
            (s.ɵɵelementStart(0, "div", 10),
            s.ɵɵtemplate(1, vt, 2, 1, "svg", 11),
            s.ɵɵelementStart(2, "span", 12),
            s.ɵɵtext(3),
            s.ɵɵpipe(4, "transloco"),
            s.ɵɵelementEnd()()),
          2 & k)
        ) {
          const S = s.ɵɵnextContext(4);
          s.ɵɵadvance(1),
            s.ɵɵproperty("ngIf", S.gasPreview.icon),
            s.ɵɵadvance(2),
            s.ɵɵtextInterpolate(s.ɵɵpipeBind1(4, 2, S.gasPreview.title));
        }
      }
      function tt(k, et) {
        if (1 & k) {
          const S = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "tooltip", 8),
            s.ɵɵlistener("click", function () {
              s.ɵɵrestoreView(S);
              const kt = s.ɵɵnextContext(3);
              return s.ɵɵresetView(kt.toggleGasSettings());
            }),
            s.ɵɵelementEnd(),
            s.ɵɵtemplate(
              2,
              L,
              5,
              4,
              "ng-template",
              null,
              9,
              s.ɵɵtemplateRefExtractor
            ),
            s.ɵɵelementContainerEnd();
        }
        if (2 & k) {
          const S = s.ɵɵreference(3),
            nt = s.ɵɵnextContext(3);
          s.ɵɵadvance(1),
            s.ɵɵproperty("tooltip", nt.gasPreview.tooltip)("customElement", S)(
              "clickableElement",
              !0
            );
        }
      }
      function E(k, et) {
        if (1 & k) {
          const S = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "setting-toggle", 7),
            s.ɵɵlistener("toggleClick", function (kt) {
              s.ɵɵrestoreView(S);
              const jt = s.ɵɵnextContext(2);
              return s.ɵɵresetView(jt.emitToggleClick(kt));
            }),
            s.ɵɵelementEnd(),
            s.ɵɵtemplate(2, tt, 4, 3, "ng-container", 4),
            s.ɵɵelementContainerEnd();
        }
        if (2 & k) {
          const S = s.ɵɵnextContext(2);
          s.ɵɵadvance(1),
            s.ɵɵproperty("contextId", S.contextId)(
              "customToggleFlow",
              S.customToggleFlow
            ),
            s.ɵɵadvance(1),
            s.ɵɵproperty("ngIf", S.gasPreview);
        }
      }
      function t(k, et) {
        if (
          (1 & k &&
            (s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "span", 14),
            s.ɵɵtext(2),
            s.ɵɵpipe(3, "async"),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd()),
          2 & k)
        ) {
          const S = s.ɵɵnextContext(2);
          s.ɵɵadvance(2),
            s.ɵɵtextInterpolate(s.ɵɵpipeBind1(3, 1, S.currentGasPriceGwei$));
        }
      }
      function Ct(k, et) {
        if (
          (1 & k &&
            (s.ɵɵelementContainerStart(0),
            s.ɵɵtemplate(1, E, 3, 3, "ng-container", 4),
            s.ɵɵpipe(2, "async"),
            s.ɵɵtemplate(3, t, 4, 3, "ng-container", 4),
            s.ɵɵpipe(4, "async"),
            s.ɵɵelementContainerEnd()),
          2 & k)
        ) {
          const S = s.ɵɵnextContext();
          s.ɵɵadvance(1),
            s.ɵɵproperty(
              "ngIf",
              s.ɵɵpipeBind1(2, 2, S.isSettingToggleAvailable$)
            ),
            s.ɵɵadvance(2),
            s.ɵɵproperty(
              "ngIf",
              !s.ɵɵpipeBind1(4, 4, S.isSettingToggleAvailable$)
            );
        }
      }
      function Pt(k, et) {
        if (1 & k) {
          const S = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "usd-token-price", 15),
            s.ɵɵlistener("click", function () {
              s.ɵɵrestoreView(S);
              const kt = s.ɵɵnextContext();
              return s.ɵɵresetView(kt.handlePriceClick());
            }),
            s.ɵɵpipe(2, "async"),
            s.ɵɵpipe(3, "async"),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd();
        }
        if (2 & k) {
          const S = et.tuiLet,
            nt = s.ɵɵnextContext();
          s.ɵɵadvance(1),
            s.ɵɵclassProp("skeleton-host", nt.loading),
            s.ɵɵproperty("showTokenAmount", S)("showUsdAmount", !S)(
              "amount",
              s.ɵɵpipeBind1(2, 6, nt.currentTxFeeAmount$)
            )("token", s.ɵɵpipeBind1(3, 8, nt.feeToken$));
        }
      }
      let Wt = (() => {
        class k {
          constructor(S, nt, kt, jt) {
            (this.activeConnectionQuery = S),
              (this.gasRefundService = nt),
              (this.gasPriceQuery = kt),
              (this.settingToggleService = jt),
              (this.loading = !1),
              (this.isEditEnable = !0),
              (this.customToggleFlow = !1),
              (this.toggleClick = new s.EventEmitter()),
              (this.currentTxFeeAmount$ = new z.X(0)),
              (this.feeToken$ = this.activeConnectionQuery.currentNativeToken$),
              (this.showTokenAmount$ = new z.X(!1)),
              (this.isSettingToggleAvailable$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, p.U)((wt) => !O.o.includes(wt))
                )),
              (this.currentGasPriceGwei$ = this.isSettingToggleAvailable$.pipe(
                (0, x.h)((wt) => !wt),
                (0, Z.w)(() =>
                  this.gasPriceQuery.currentGasPrice$.pipe(
                    (0, p.U)(
                      (wt) =>
                        +(0, h.aY)(wt).toFixed(3) +
                        " " +
                        this.activeConnectionQuery.currentChainGasUnitName
                    )
                  )
                )
              )),
              (this.gasRefundPercent$ =
                this.gasRefundService.gasRefundPercent$),
              (this.isGasRefundVisible$ = this.gasRefundPercent$.pipe(
                (0, p.U)((wt) => null !== wt)
              ));
          }
          set txFeeAmount(S) {
            (0, b.kKJ)(S) || this.currentTxFeeAmount$.next(S);
          }
          handlePriceClick() {
            this.showTokenAmount$.next(!this.showTokenAmount$.value);
          }
          toggleGasSettings() {
            this.settingToggleService.toggleIsWidgetOpened(
              this.contextId,
              "gas-price"
            );
          }
          emitToggleClick(S) {
            this.customToggleFlow && this.toggleClick.emit(S);
          }
        }
        return (
          (k.ɵfac = function (S) {
            return new (S || k)(
              s.ɵɵdirectiveInject(w.r),
              s.ɵɵdirectiveInject(at.U),
              s.ɵɵdirectiveInject(F.j),
              s.ɵɵdirectiveInject(X.d)
            );
          }),
          (k.ɵcmp = s.ɵɵdefineComponent({
            type: k,
            selectors: [["transaction-cost"]],
            inputs: {
              txFeeAmount: "txFeeAmount",
              contextId: "contextId",
              loading: "loading",
              isEditEnable: "isEditEnable",
              customToggleFlow: "customToggleFlow",
              gasPreview: "gasPreview",
            },
            outputs: { toggleClick: "toggleClick" },
            decls: 9,
            vars: 7,
            consts: [
              [1, "transaction-cost-title-wrap"],
              ["transloco", "swapBox.tx-cost"],
              [
                "class",
                "gas-refund-tooltip",
                "data-id",
                "info-gas-refund-value",
                3,
                "refundPercent",
                4,
                "ngIf",
              ],
              [1, "transaction-cost-value-wrap"],
              [4, "ngIf"],
              [4, "tuiLet"],
              [
                "data-id",
                "info-gas-refund-value",
                1,
                "gas-refund-tooltip",
                3,
                "refundPercent",
              ],
              [
                "widgetId",
                "gas-price",
                1,
                "edit-gas-price",
                3,
                "contextId",
                "customToggleFlow",
                "toggleClick",
              ],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "gas-preset-preview",
                3,
                "tooltip",
                "customElement",
                "clickableElement",
                "click",
              ],
              ["gas_preview", ""],
              [1, "gas-preset-preview-wrap"],
              [
                "width",
                "16",
                "height",
                "16",
                "class",
                "gas-preset-preview-icon",
                4,
                "ngIf",
              ],
              [1, "gas-preset-preview-title"],
              ["width", "16", "height", "16", 1, "gas-preset-preview-icon"],
              [1, "constant-gas-value"],
              [
                "data-id",
                "info-transaction-cost-usd-price",
                1,
                "token-price",
                3,
                "showTokenAmount",
                "showUsdAmount",
                "amount",
                "token",
                "click",
              ],
            ],
            template: function (S, nt) {
              1 & S &&
                (s.ɵɵelementStart(0, "div", 0)(1, "span", 1),
                s.ɵɵtext(2, "Tx cost"),
                s.ɵɵelementEnd(),
                s.ɵɵtemplate(3, bt, 2, 3, "gas-refund-value", 2),
                s.ɵɵpipe(4, "async"),
                s.ɵɵelementEnd(),
                s.ɵɵelementStart(5, "div", 3),
                s.ɵɵtemplate(6, Ct, 5, 6, "ng-container", 4),
                s.ɵɵtemplate(7, Pt, 4, 10, "ng-container", 5),
                s.ɵɵpipe(8, "async"),
                s.ɵɵelementEnd()),
                2 & S &&
                  (s.ɵɵadvance(3),
                  s.ɵɵproperty(
                    "ngIf",
                    s.ɵɵpipeBind1(4, 3, nt.isGasRefundVisible$)
                  ),
                  s.ɵɵadvance(3),
                  s.ɵɵproperty("ngIf", nt.isEditEnable),
                  s.ɵɵadvance(1),
                  s.ɵɵproperty(
                    "tuiLet",
                    s.ɵɵpipeBind1(8, 5, nt.showTokenAmount$)
                  ));
            },
            dependencies: [
              I.O5,
              rt.C,
              M.C,
              B.Ls,
              Q.z,
              pt.KI,
              Tt.K,
              I.Ov,
              pt.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;height:16px}.transaction-cost-title-wrap[_ngcontent-%COMP%]{display:flex;color:var(--1inch__ui-02)}.transaction-cost-gas-refund[_ngcontent-%COMP%]{margin-left:0;margin-top:-1px}.transaction-cost-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.edit-gas-price[_ngcontent-%COMP%]{margin-right:8px}.token-price[_ngcontent-%COMP%]{cursor:pointer}.token-price[_ngcontent-%COMP%]     span{color:var(--1inch-text-01)!important}.gas-preset-preview[_ngcontent-%COMP%]{margin-left:0;cursor:pointer}.gas-preset-preview[_ngcontent-%COMP%]:hover   .gas-preset-preview-icon[_ngcontent-%COMP%], .gas-preset-preview[_ngcontent-%COMP%]:hover   .gas-preset-preview-title[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.gas-preset-preview-icon[_ngcontent-%COMP%]{margin-right:4px;color:var(--1inch__ui-02)}.gas-preset-preview-title[_ngcontent-%COMP%]{line-height:16px;margin-right:8px;color:var(--1inch__ui-02)}.constant-gas-value[_ngcontent-%COMP%]{margin-right:8px;color:var(--1inch__ui-02)}.gas-refund-tooltip[_ngcontent-%COMP%]{margin-top:-1px}.skeleton-host[_ngcontent-%COMP%]{height:16px}.gas-preset-preview-wrap[_ngcontent-%COMP%]{display:flex}",
            ],
            changeDetection: 0,
          })),
          k
        );
      })();
    },
    31455: (yt, U, r) => {
      r.d(U, { o: () => O });
      var s = r(95580),
        h = r(51109);
      let O = (() => {
        class b {}
        return (
          (b.ɵfac = function (p) {
            return new (p || b)();
          }),
          (b.ɵmod = h.ɵɵdefineNgModule({ type: b })),
          (b.ɵinj = h.ɵɵdefineInjector({ imports: [s.c] })),
          b
        );
      })();
    },
    87364: (yt, U, r) => {
      r.r(U), r.d(U, { TradingStrategiesModule: () => Ar });
      var s = r(38143),
        h = r(78336),
        O = r(31777),
        b = r(25460),
        z = r(77065),
        p = r(54510),
        x = r(12725),
        Z = r(16944),
        w = r(74578),
        at = r(76248),
        F = r(67945),
        X = r(96185),
        I = r(99825),
        rt = r(5945),
        M = r(12574),
        B = r(32594),
        Q = r(23963),
        pt = r(70681),
        Tt = r(15881),
        bt = r(65687),
        vt = r(35950),
        L = r(84581),
        tt = r(85125),
        E = r(14321),
        t = r(51109);
      let Ct = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = t.ɵɵdefineInjector({ providers: [E.X], imports: [s.ez] })),
          n
        );
      })();
      var Pt = r(65672),
        Wt = r(62139),
        k = r(31455),
        et = r(41852);
      let S = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = t.ɵɵdefineInjector({
            imports: [x.y4, s.ez, rt.$$, tt.vQ, Z.z],
          })),
          n
        );
      })();
      var nt = r(67265);
      let kt = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = t.ɵɵdefineInjector({
            imports: [x.y4, s.ez, nt.L, w.WD, Ct],
          })),
          n
        );
      })();
      var jt = r(96791),
        wt = r(15843),
        Ke = r(56314),
        He = r(4987),
        Ge = r(36037),
        It = r(63223),
        Ye = r(40934),
        ve = r(60303),
        qt = r(10047),
        te = r(32770),
        J = r(29737),
        W = r(53886),
        T = r(3012),
        m = r(64736),
        $ = r(69682),
        _ = r(76327),
        R = r(12733),
        st = r(35878),
        A = r(30137),
        ee = r(93475),
        ut = (() => {
          return (
            ((n = ut || (ut = {})).WalletIsNotConnected =
              "Wallet is not connected"),
            (n.StakeInProgress = "Stake in progress"),
            (n.NeedApprove = "Need approve"),
            (n.EmptyAmount = "Empty amount"),
            (n.NotEnoughBalance = "Not enough balance"),
            (n.Stake = "Stake"),
            (n.Schedule = "Schedule"),
            ut
          );
          var n;
        })(),
        dt = r(24124),
        At = r(41912),
        ct = r(93130),
        mt = r(92436),
        Ft = r(36477),
        it = r(71426),
        N = r(83358),
        ot = r(16353),
        K = r(55468),
        H = r(95021),
        q = r(67701),
        ne = r(73013),
        Ze = r(88647),
        Dt = r(52611),
        Ce = r(33246),
        fe = r(56747),
        Je = r(1146);
      let Mt = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f, g) {
            (this.walletConnectionQuery = e),
              (this.contractAddressQuery = i),
              (this.ethContractService = o),
              (this.simpleSendTransactionService = c),
              (this.erc20Helper = l),
              (this.approveTransactionService = d),
              (this.acceptTermsService = u),
              (this.createPendingTxService = f),
              (this.opiumPoolsQuery = g);
          }
          getDepositReserveCoefficient(e) {
            return this.ethContractService
              .callViewContract(
                ot._.OpiumDepositSchedulerABI,
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumStakeScheduler
                ),
                "getReserveCoefficient",
                [e]
              )
              .then((i) => it.O$.from(i));
          }
          getWithdrawReserveCoefficient(e) {
            return this.ethContractService
              .callViewContract(
                ot._.OpiumWithdrawalSchedulerABI,
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumWithdrawScheduler
                ),
                "getReserveCoefficient",
                [e]
              )
              .then((i) => it.O$.from(i));
          }
          getScheduledAmount(e) {
            const { walletAddress: i } = this.walletConnectionQuery;
            return this.ethContractService
              .callViewContract(
                ot._.OpiumDepositSchedulerABI,
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumStakeScheduler
                ),
                "getScheduled",
                [i, e]
              )
              .then((o) => it.O$.from(o));
          }
          getStakedAmount(e) {
            const { walletAddress: i } = this.walletConnectionQuery;
            return this.ethContractService
              .callViewContract(ot._.OpiumPoolABI, e, "balanceOf", [i])
              .then((o) =>
                this.ethContractService.callViewContract(
                  ot._.OpiumPoolABI,
                  e,
                  "calculateSharesToUnderlyingRatio",
                  [o]
                )
              );
          }
          estimateStakingLPAmount(e, i) {
            return this.ethContractService.callViewContract(
              ot._.OpiumStakingPoolABI,
              e,
              "calculateUnderlyingToSharesRatio",
              [i.toString()]
            );
          }
          scheduleDepositCallData(e, i) {
            return this.ethContractService.getContractEncodeABI(
              ot._.OpiumDepositSchedulerABI,
              this.contractAddressQuery.getContractAddress(
                K.a4.opiumStakeScheduler
              ),
              "scheduleDeposit",
              [e, i.toString()]
            );
          }
          scheduleDeposit(e, i) {
            return this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() => this.scheduleDepositCallData(e, i)),
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  {
                    to: this.contractAddressQuery.getContractAddress(
                      K.a4.opiumStakeScheduler
                    ),
                    data: o,
                  },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "execution",
                    subType: q.E.opiumStakeSchedule,
                    meta: { asset: this.opiumPoolsQuery.poolToken },
                    amount: i.toString(),
                  })
                )
              ),
              (0, N.q)(1)
            );
          }
          unscheduleStake(e, i) {
            return (0, H.p4)(
              this.ethContractService.getContractEncodeABI(
                ot._.OpiumDepositSchedulerABI,
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumStakeScheduler
                ),
                "unscheduleDeposit",
                [e, i.toString()]
              )
            ).pipe(
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  {
                    to: this.contractAddressQuery.getContractAddress(
                      K.a4.opiumStakeScheduler
                    ),
                    data: o,
                  },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "execution",
                    subType: q.E.opiumStakeScheduleCancel,
                    meta: { asset: this.opiumPoolsQuery.poolToken },
                    amount: i.toString(),
                  })
                )
              ),
              (0, N.q)(1)
            );
          }
          getStakingSpender(e, i) {
            const o = this.contractAddressQuery.getContractAddress(
              K.a4.opiumStakeScheduler
            );
            return i ? e : o;
          }
          scheduleWithdrawCallData(e) {
            const i = this.contractAddressQuery.getContractAddress(
              K.a4.opiumWithdrawScheduler
            );
            return this.ethContractService.getContractEncodeABI(
              ot._.OpiumWithdrawalSchedulerABI,
              i,
              "scheduleWithdrawal",
              [e]
            );
          }
          scheduleWithdraw(e) {
            const i = this.contractAddressQuery.getContractAddress(
              K.a4.opiumWithdrawScheduler
            );
            return (0, H.p4)(this.scheduleWithdrawCallData(e)).pipe(
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: i, data: o },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "execution",
                    subType: q.E.execution,
                    meta: { voucherAddress: "" },
                    amount: "0",
                  })
                )
              )
            );
          }
          unscheduleWithdraw(e) {
            const i = this.contractAddressQuery.getContractAddress(
              K.a4.opiumWithdrawScheduler
            );
            return (0, H.p4)(
              this.ethContractService.getContractEncodeABI(
                ot._.OpiumWithdrawalSchedulerABI,
                i,
                "unscheduleWithdrawal",
                [e]
              )
            ).pipe(
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: i, data: o },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "execution",
                    subType: q.E.opiumWithdrawScheduleCancel,
                    meta: { asset: this.opiumPoolsQuery.poolToken },
                    amount: "0",
                  })
                )
              )
            );
          }
          withdrawCallData(e, i) {
            return this.ethContractService.getContractEncodeABI(
              ot._.OpiumStakingPoolABI,
              e,
              "withdraw",
              [i.toString()]
            );
          }
          withdraw(e, i) {
            return (0, H.p4)(this.withdrawCallData(e, i)).pipe(
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: e, data: o },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "unstake",
                    subType: q.E.opiumWithdraw,
                    meta: { asset: this.opiumPoolsQuery.poolToken },
                    amount: i.toString(),
                  })
                )
              )
            );
          }
          stakeCallData(e, i) {
            return this.ethContractService.getContractEncodeABI(
              ot._.OpiumStakingPoolABI,
              e,
              "deposit",
              [i.toString()]
            );
          }
          stake(e, i) {
            return this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() => this.stakeCallData(e, i)),
              (0, _.w)((o) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: e, data: o },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "stake",
                    subType: q.E.opiumStake,
                    meta: { asset: this.opiumPoolsQuery.poolToken },
                    amount: i.toString(),
                  })
                )
              )
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵinject(ct.r),
              t.ɵɵinject(At.O),
              t.ɵɵinject(ne.u),
              t.ɵɵinject(Ze.RW),
              t.ɵɵinject(Dt.ZU),
              t.ɵɵinject(Ce.f),
              t.ɵɵinject(fe.N),
              t.ɵɵinject(Je.B),
              t.ɵɵinject(mt.q)
            );
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var xe = r(50875),
        Kt = r(82405),
        Qt = r(47190),
        ie = r(20803),
        Ut = r(58913);
      let Xe = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f, g, P, D) {
            (this.activeConnectionQuery = e),
              (this.contractAddressQuery = i),
              (this.walletConnectionQuery = o),
              (this.opiumPoolsQuery = c),
              (this.tokenBalanceQuery = l),
              (this.opiumPoolActionsService = d),
              (this.estimateTransactionService = u),
              (this.inProgressTxService = f),
              (this.opiumUserPoolsQuery = g),
              (this.tokenPricesQuery = P),
              (this.txHistoryQuery = D),
              (this.widgetId = "opium-stake");
          }
          getStakingAllowance() {
            return this.opiumUserPoolsQuery.currentPoolUserData$.pipe(
              (0, m.U)((e) => {
                if (!e) return ee.Y;
                const { isDirectStakingEnabled: i } = this.opiumPoolsQuery;
                return i ? e.stakingPoolAllowance : e.stakingSchedulerAllowance;
              }),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          isStakingApproved(e) {
            return (0, W.a)([
              this.getStakingAllowance(),
              this.walletConnectionQuery.isWalletConnected$,
              e,
            ]).pipe(
              (0, m.U)(([i, o, c]) => {
                if (!o) return !0;
                const l = (0, A.bl)(
                  c || 0,
                  this.opiumPoolsQuery.poolToken.decimals
                );
                return i.gte(l);
              }),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          getOpiumStakeFormState(e) {
            return this.walletConnectionQuery.isWalletConnected$.pipe(
              (0, _.w)((i) => {
                const {
                  poolAddress: o,
                  poolToken: c,
                  isDirectStakingEnabled: l,
                } = this.opiumPoolsQuery;
                return (0, W.a)([
                  (0, T.of)(i),
                  this.inProgressTxService.isTxInProgress(o, this.widgetId),
                  this.isStakingApproved(e),
                  (0, T.of)(l),
                  e,
                  i ? this.tokenBalanceQuery.getBalance$(c) : (0, T.of)(ee.Y),
                  (0, T.of)(c),
                  this.tokenPricesQuery.selectTokenUsdPrice(c.address),
                  this.txHistoryQuery.newTransactionMined$.pipe((0, R.O)(null)),
                ]);
              }),
              (0, st.x)((i, o) => (0, J.fS0)(i, o)),
              (0, m.U)((i) => {
                const [o, c, l, d, u, f, g, P] = i;
                return (function Fn(n) {
                  return n.isWalletConnected
                    ? n.isStakeInProgress
                      ? ut.StakeInProgress
                      : n.isStakeApproved
                      ? +n.stakeAmount
                        ? (0, A.bl)(n.stakeAmount, n.poolToken.decimals).gt(
                            n.balance
                          )
                          ? ut.NotEnoughBalance
                          : n.isDirectStakingEnabled
                          ? ut.Stake
                          : ut.Schedule
                        : ut.EmptyAmount
                      : ut.NeedApprove
                    : ut.WalletIsNotConnected;
                })({
                  isWalletConnected: o,
                  isStakeInProgress: c,
                  isStakeApproved: l,
                  isDirectStakingEnabled: d,
                  stakeAmount: u,
                  balance: f,
                  poolToken: g,
                  tokenUsdPrice: P,
                });
              }),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵinject(dt.r),
              t.ɵɵinject(At.O),
              t.ɵɵinject(ct.r),
              t.ɵɵinject(mt.q),
              t.ɵɵinject(Ft.n4),
              t.ɵɵinject(Mt),
              t.ɵɵinject(xe.Z),
              t.ɵɵinject(Kt.Y),
              t.ɵɵinject(Qt.q),
              t.ɵɵinject(ie.u),
              t.ɵɵinject(Ut.x)
            );
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var ht = r(17114),
        qe = r(36565),
        tn = r(27604),
        en = r(83140);
      let we = (() => {
          class n {
            constructor(e, i, o, c, l, d, u, f, g) {
              (this.activeConnectionQuery = e),
                (this.contractAddressQuery = i),
                (this.walletConnectionQuery = o),
                (this.opiumPoolsQuery = c),
                (this.tokenBalanceQuery = l),
                (this.opiumPoolActionsService = d),
                (this.estimateTransactionService = u),
                (this.gasPriceQuery = f),
                (this.approveEstimateService = g);
            }
            getStakeTxCost() {
              return (0, W.a)([
                this.getStakeGasLimit(),
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, m.U)(([e, i]) => {
                  const { decimals: o } =
                    this.activeConnectionQuery.currentNativeToken;
                  return (e * i) / Math.pow(10, o);
                })
              );
            }
            getApproveTxCost() {
              return (0, W.a)([
                this.getApproveGasLimit(),
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, m.U)(([e, i]) => {
                  const { decimals: o } =
                    this.activeConnectionQuery.currentNativeToken;
                  return (e * i) / Math.pow(10, o);
                })
              );
            }
            getStakeGasLimit() {
              const {
                isDirectStakingEnabled: e,
                poolToken: i,
                poolAddress: o,
              } = this.opiumPoolsQuery;
              return this.tokenBalanceQuery.getBalance$(i).pipe(
                (0, st.x)((c, l) => c.eq(l)),
                (0, _.w)((c) => {
                  if (c.isZero()) return (0, T.of)(0);
                  const l = e
                    ? o
                    : this.contractAddressQuery.getContractAddress(
                        K.a4.opiumStakeScheduler
                      );
                  return (0, H.p4)(
                    e
                      ? this.opiumPoolActionsService.stakeCallData(o, c)
                      : this.opiumPoolActionsService.scheduleDepositCallData(
                          o,
                          c
                        )
                  ).pipe(
                    (0, _.w)((u) =>
                      this.estimateTransactionService.estimateTransactionWithWeb3Connector(
                        {
                          from: this.walletConnectionQuery.walletAddress,
                          to: l,
                          data: u,
                        }
                      )
                    ),
                    (0, m.U)((u) => u.gasLimit || 0),
                    (0, ht.K)(
                      (u) => (
                        en.error("Opium stake estimation fail", u), (0, T.of)(0)
                      )
                    ),
                    (0, R.O)(0),
                    (0, $.d)({ refCount: !0, bufferSize: 1 })
                  );
                })
              );
            }
            getApproveGasLimit() {
              const {
                  isDirectStakingEnabled: e,
                  poolToken: i,
                  poolAddress: o,
                  chainId: c,
                } = this.opiumPoolsQuery,
                l = e
                  ? o
                  : this.contractAddressQuery.getContractAddress(
                      K.a4.opiumStakeScheduler
                    );
              return (0, H.p4)(
                this.approveEstimateService.estimateApprove({
                  amount: Dt.zL,
                  contractAddress: i.address,
                  spenderAddress: l,
                  chainId: c,
                  walletAddress: this.walletConnectionQuery.walletAddress,
                })
              ).pipe(
                (0, m.U)(({ gasLimit: u }) => u),
                (0, ht.K)(
                  (u) => (
                    en.error("Approve 1inch for stake estimation fail", u),
                    (0, T.of)(0)
                  )
                )
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(dt.r),
                t.ɵɵinject(At.O),
                t.ɵɵinject(ct.r),
                t.ɵɵinject(mt.q),
                t.ɵɵinject(Ft.n4),
                t.ɵɵinject(Mt),
                t.ɵɵinject(xe.Z),
                t.ɵɵinject(qe.j),
                t.ɵɵinject(tn.J)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Qn = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              providers: [we, Xe],
              imports: [
                x.y4,
                s.ez,
                Pt.n,
                ve.j,
                w.WD,
                k.o,
                O.ReactiveFormsModule,
                It._,
                Ye.f,
                wt.r,
                te.Z,
                Ke.H,
                vt.S,
                Z.z,
                qt.y,
                jt.Z,
                He.M,
                Ge.n,
                et.a,
                Wt.G,
              ],
            })),
            n
          );
        })();
      var nn = r(84590),
        oe = r(47384),
        ft = r(87064),
        lt = (() => {
          return (
            ((n = lt || (lt = {})).walletNotConnected =
              "Wallet is not connected"),
            (n.directWithdrawAvailable = "Direct withdraw available"),
            (n.notEnoughBalance = "Not enough balance"),
            (n.withdrawScheduled = "Withdraw scheduled"),
            (n.withdrawApproved = "Withdraw"),
            (n.needApproveForWithdraw = "Need approve"),
            (n.loading = "Loading"),
            (n.enterAmount = "Empty amount"),
            lt
          );
          var n;
        })();
      let on = (() => {
        class n {
          constructor(e, i, o, c, l) {
            (this.walletConnectionQuery = e),
              (this.opiumPoolsQuery = i),
              (this.opiumPoolActionsService = o),
              (this.opiumUserPoolsQuery = c),
              (this.txHistoryQuery = l),
              (this.widgetId = "opium-stake");
          }
          getOpiumWithdrawFormState(e) {
            return (0, W.a)([
              e,
              this.opiumUserPoolsQuery.currentPoolUserData$.pipe(
                (0, m.U)(
                  (i) =>
                    (null == i ? void 0 : i.withdrawSchedulerAllowance) || ee.Y
                )
              ),
              this.opiumUserPoolsQuery.isWithdrawScheduled$,
              this.txHistoryQuery.newTransactionMined$.pipe((0, R.O)(null)),
            ]).pipe(
              (0, m.U)(([i, o, c]) => {
                const { poolToken: l, userStaked: d } = this.opiumPoolsQuery,
                  u = (0, oe.parseUnits)(d.toString(), l.decimals),
                  f = (0, oe.parseUnits)(i.toString(), l.decimals);
                return (function Un(n, a, e, i, o, c) {
                  return c
                    ? ft.D.STAKING === n.phase
                      ? "0" === e.toString()
                        ? lt.enterAmount
                        : a.lt(e)
                        ? lt.notEnoughBalance
                        : lt.directWithdrawAvailable
                      : o
                      ? lt.withdrawScheduled
                      : a.isZero()
                      ? lt.notEnoughBalance
                      : i.gte(a)
                      ? lt.withdrawApproved
                      : lt.needApproveForWithdraw
                    : lt.walletNotConnected;
                })(
                  this.opiumPoolsQuery.poolDetails,
                  u,
                  f,
                  o,
                  c,
                  !!this.walletConnectionQuery.walletAddress
                );
              }),
              (0, R.O)(lt.loading)
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵinject(ct.r),
              t.ɵɵinject(mt.q),
              t.ɵɵinject(Mt),
              t.ɵɵinject(Qt.q),
              t.ɵɵinject(Ut.x)
            );
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var an = r(83140);
      let Se = (() => {
          class n {
            constructor(e, i, o, c, l, d, u, f, g) {
              (this.activeConnectionQuery = e),
                (this.contractAddressQuery = i),
                (this.walletConnectionQuery = o),
                (this.opiumPoolsQuery = c),
                (this.tokenBalanceQuery = l),
                (this.opiumPoolActionsService = d),
                (this.estimateTransactionService = u),
                (this.gasPriceQuery = f),
                (this.approveEstimateService = g);
            }
            getWithdrawTxCost() {
              return (0, W.a)([
                this.getWithdrawGasLimit(),
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, m.U)(([e, i]) => {
                  const { decimals: o } =
                    this.activeConnectionQuery.currentNativeToken;
                  return (e * i) / Math.pow(10, o);
                })
              );
            }
            getApproveTxCost() {
              return (0, W.a)([
                this.getApproveGasLimit(),
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, m.U)(([e, i]) => {
                  const { decimals: o } =
                    this.activeConnectionQuery.currentNativeToken;
                  return (e * i) / Math.pow(10, o);
                })
              );
            }
            getWithdrawGasLimit() {
              const {
                isDirectWithdrawEnabled: e,
                poolToken: i,
                poolAddress: o,
                userStaked: c,
              } = this.opiumPoolsQuery;
              if (0 === c) return (0, T.of)(0);
              const l = (0, A.bl)(c - 0.01 * c, i.decimals),
                d = e
                  ? o
                  : this.contractAddressQuery.getContractAddress(
                      K.a4.opiumWithdrawScheduler
                    );
              return (0, H.p4)(
                e
                  ? this.opiumPoolActionsService.withdrawCallData(o, l)
                  : this.opiumPoolActionsService.scheduleWithdrawCallData(o)
              ).pipe(
                (0, _.w)((f) =>
                  this.estimateTransactionService.estimateTransactionWithWeb3Connector(
                    {
                      from: this.walletConnectionQuery.walletAddress,
                      to: d,
                      data: f,
                    }
                  )
                ),
                (0, m.U)((f) => f.gasLimit || 0),
                (0, ht.K)(
                  (f) => (
                    an.error("Opium withdraw estimation fail", f), (0, T.of)(0)
                  )
                ),
                (0, R.O)(0)
              );
            }
            getApproveGasLimit() {
              const {
                  isDirectWithdrawEnabled: e,
                  poolToken: i,
                  poolAddress: o,
                  chainId: c,
                } = this.opiumPoolsQuery,
                l = e
                  ? o
                  : this.contractAddressQuery.getContractAddress(
                      K.a4.opiumWithdrawScheduler
                    );
              return (0, H.p4)(
                this.approveEstimateService.estimateApprove({
                  amount: Dt.zL,
                  contractAddress: i.address,
                  spenderAddress: l,
                  chainId: c,
                  walletAddress: this.walletConnectionQuery.walletAddress,
                })
              ).pipe(
                (0, m.U)(({ gasLimit: u }) => u),
                (0, ht.K)(
                  (u) => (
                    an.error("Approve 1inch for stake estimation fail", u),
                    (0, T.of)(0)
                  )
                )
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(dt.r),
                t.ɵɵinject(At.O),
                t.ɵɵinject(ct.r),
                t.ɵɵinject(mt.q),
                t.ɵɵinject(Ft.n4),
                t.ɵɵinject(Mt),
                t.ɵɵinject(xe.Z),
                t.ɵɵinject(qe.j),
                t.ɵɵinject(tn.J)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Rn = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              providers: [Se, on],
              imports: [
                x.y4,
                s.ez,
                Pt.n,
                ve.j,
                w.WD,
                k.o,
                O.ReactiveFormsModule,
                It._,
                Ye.f,
                wt.r,
                te.Z,
                Ke.H,
                Z.z,
                qt.y,
                vt.S,
                nn.T,
                jt.Z,
                He.M,
                Ge.n,
                et.a,
                Wt.G,
              ],
            })),
            n
          );
        })();
      var Vn = r(74586),
        Rt = r(64324),
        zn = r(30459),
        G = r(77724),
        Ht = r(7722),
        Nn = r(57817),
        rn = r(20683),
        xt = r(33747),
        V = r(90813),
        ye = r(98066),
        sn = r(98002),
        Vt = r(98569),
        Bt = r(98182),
        Kn = r(38964),
        Gt = r(52126);
      function Hn(n, a) {
        if (
          (1 & n &&
            (t.ɵɵnamespaceSVG(),
            t.ɵɵnamespaceHTML(),
            t.ɵɵelement(0, "token-preview", 12),
            t.ɵɵpipe(1, "transloco")),
          2 & n)
        ) {
          const e = a.ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵproperty("token", i.poolToken)(
            "title",
            t.ɵɵpipeBind1(1, 4, "field.amount")
          )(
            "tokenAmount",
            (i.isStakeAction ? e.pendingStake : e.activeStake || 0) + ""
          )("tokenRole", i.TokenRole.source);
        }
      }
      function Gn(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "span"), t.ɵɵtext(1, "N/A"), t.ɵɵelementEnd());
      }
      function Yn(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelement(0, "usd-token-price", 16), t.ɵɵpipe(1, "async")),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext();
          t.ɵɵproperty("amount", e)(
            "token",
            t.ɵɵpipeBind1(1, 3, i.currentNativeToken$)
          )("showTokenAmount", !0);
        }
      }
      function Zn(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "span", 13),
            t.ɵɵtemplate(1, Gn, 2, 0, "span", 14),
            t.ɵɵtemplate(2, Yn, 2, 5, "usd-token-price", 15),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", e);
        }
      }
      function Jn(n, a) {
        1 & n && t.ɵɵelement(0, "swap-settings", 17),
          2 & n && t.ɵɵproperty("compactMode", !0)("collapsedOnInit", !0);
      }
      let Xn = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f, g, P) {
            (this.activeConnectionQuery = e),
              (this.opiumUserPoolsQuery = i),
              (this.opiumPoolsQuery = o),
              (this.inProgressTxService = c),
              (this.opiumPoolActionsService = l),
              (this.opiumPoolStakeTxEstimateService = d),
              (this.opiumPoolWithdrawTxEstimateService = u),
              (this.txStatusDialogService = f),
              (this.context = g),
              (this.destroy$ = P),
              (this.isStakeAction = "stake" === this.context.data.action),
              (this.currentPoolUserData$ =
                this.opiumUserPoolsQuery.currentPoolUserData$),
              (this.txCost$ = (
                this.isStakeAction
                  ? this.opiumPoolStakeTxEstimateService.getStakeTxCost()
                  : this.opiumPoolWithdrawTxEstimateService.getWithdrawTxCost()
              ).pipe((0, $.d)({ refCount: !0, bufferSize: 1 }))),
              (this.currentNativeToken$ =
                this.activeConnectionQuery.currentNativeToken$),
              (this.poolToken = this.opiumPoolsQuery.poolToken),
              (this.TokenRole = rn.q),
              (this.viewInited = !1);
          }
          ngAfterViewInit() {
            this.viewInited = !0;
          }
          closeDialog(e) {
            this.context.completeWith(e);
          }
          cancelWithdraw() {
            const { poolAddress: e } = this.opiumPoolsQuery,
              i = this.trackTransaction(
                e,
                "opium-unschedule-withdraw",
                this.opiumPoolActionsService.unscheduleWithdraw(e)
              ).pipe(
                (0, G.b)((o) => {
                  this.closeDialog(o);
                }),
                (0, N.q)(1)
              );
            (0, V.O)(i, "unscheduleWithdraw$");
          }
          cancelStake() {
            const { poolAddress: e } = this.opiumPoolsQuery,
              i = (0, H.p4)(
                this.opiumPoolActionsService.getScheduledAmount(e)
              ).pipe(
                (0, _.w)((o) =>
                  this.opiumPoolActionsService.unscheduleStake(e, o)
                ),
                (0, G.b)((o) => {
                  this.closeDialog(o);
                }),
                (0, N.q)(1)
              );
            (0, V.O)(i, "unscheduleStake$");
          }
          trackTransaction(e, i, o) {
            return o.pipe(
              (0, G.b)((c) => {
                this.inProgressTxService.trackTransaction({
                  txHash: c,
                  asset: e,
                  widgetId: i,
                });
              })
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(dt.r),
              t.ɵɵdirectiveInject(Qt.q),
              t.ɵɵdirectiveInject(mt.q),
              t.ɵɵdirectiveInject(Kt.Y),
              t.ɵɵdirectiveInject(Mt),
              t.ɵɵdirectiveInject(we),
              t.ɵɵdirectiveInject(Se),
              t.ɵɵdirectiveInject(ye.i),
              t.ɵɵdirectiveInject(Rt.yf),
              t.ɵɵdirectiveInject(xt.a3, 2)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-schedule-canceling"]],
            features: [t.ɵɵProvidersFeature([xt.a3])],
            decls: 18,
            vars: 15,
            consts: [
              [1, "modal-title"],
              [3, "transloco"],
              [1, "blank-button", "dialog-close-icon", 3, "click"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [3, "token", "title", "tokenAmount", "tokenRole", 4, "ngIf"],
              ["type", "notification", 3, "hideCloseButton"],
              [1, "tx-cost-wrapper"],
              ["transloco", "confirmSwap.transaction-cost", 1, "param-label"],
              ["class", "param-value", 4, "tuiLet"],
              [
                "class",
                "swap-settings",
                "domain",
                "opium",
                3,
                "compactMode",
                "collapsedOnInit",
                4,
                "ngIf",
              ],
              ["color", "blue", 3, "click"],
              [3, "token", "title", "tokenAmount", "tokenRole"],
              [1, "param-value"],
              [4, "ngIf"],
              [3, "amount", "token", "showTokenAmount", 4, "ngIf"],
              [3, "amount", "token", "showTokenAmount"],
              [
                "domain",
                "opium",
                1,
                "swap-settings",
                3,
                "compactMode",
                "collapsedOnInit",
              ],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵelementStart(0, "div", 0),
                t.ɵɵelement(1, "h4", 1),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(2, "button", 2),
                t.ɵɵlistener("click", function () {
                  return i.closeDialog();
                }),
                t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(3, "svg", 3),
                t.ɵɵelement(4, "use", 4),
                t.ɵɵelementEnd()(),
                t.ɵɵtemplate(5, Hn, 2, 6, "token-preview", 5),
                t.ɵɵpipe(6, "async"),
                t.ɵɵnamespaceHTML(),
                t.ɵɵelementStart(7, "alert", 6),
                t.ɵɵtext(8),
                t.ɵɵpipe(9, "transloco"),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(10, "div", 7),
                t.ɵɵelement(11, "span", 8),
                t.ɵɵtemplate(12, Zn, 3, 2, "span", 9),
                t.ɵɵpipe(13, "async"),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(14, Jn, 1, 2, "swap-settings", 10),
                t.ɵɵelementStart(15, "simple-button", 11),
                t.ɵɵlistener("click", function () {
                  return i.isStakeAction ? i.cancelStake() : i.cancelWithdraw();
                }),
                t.ɵɵtext(16),
                t.ɵɵpipe(17, "transloco"),
                t.ɵɵelementEnd()),
                2 & e &&
                  (t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "transloco",
                    i.isStakeAction
                      ? "opium.cancel-pend-stake"
                      : "opium.cancel-pend-withdraw"
                  ),
                  t.ɵɵadvance(4),
                  t.ɵɵproperty(
                    "ngIf",
                    t.ɵɵpipeBind1(6, 7, i.currentPoolUserData$)
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("hideCloseButton", !0),
                  t.ɵɵadvance(1),
                  t.ɵɵtextInterpolate1(
                    " ",
                    t.ɵɵpipeBind1(
                      9,
                      9,
                      i.isStakeAction
                        ? "opium.cancel-stake-warn"
                        : "opium.cancel-withdraw-warn"
                    ),
                    "\n"
                  ),
                  t.ɵɵadvance(4),
                  t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(13, 11, i.txCost$)),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", i.viewInited),
                  t.ɵɵadvance(2),
                  t.ɵɵtextInterpolate1(
                    " ",
                    t.ɵɵpipeBind1(
                      17,
                      13,
                      i.isStakeAction
                        ? "opium.cancel-stake"
                        : "opium.cancel-withdraw"
                    ),
                    "\n"
                  ));
            },
            dependencies: [
              x.KI,
              s.O5,
              sn.W,
              Vt.w,
              w.Ls,
              Bt.q,
              Kn.C,
              Gt.W,
              x.Ot,
              s.Ov,
            ],
            styles: [
              "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:16px!important;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02);text-align:left}@media (max-width: 520px){[_nghost-%COMP%]{width:100%!important}}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.dialog-close-icon[_ngcontent-%COMP%]{position:absolute;width:36px;height:36px;padding:6px;border-radius:12px;color:var(--1inch__ui-01);right:10px;top:10px;top:17px}.dialog-close-icon[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}@media (max-width: 520px){.dialog-close-icon[_ngcontent-%COMP%]{display:none}}.modal-title[_ngcontent-%COMP%]{display:flex;padding-bottom:16px;margin-bottom:4px}.modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px}.tx-cost-wrapper[_ngcontent-%COMP%]{justify-content:space-between;display:flex;margin-bottom:16px}.swap-settings[_ngcontent-%COMP%]{margin-bottom:16px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var cn = r(68530);
      let Pe = (() => {
          class n {
            constructor(e, i, o) {
              (this.txStatusDialogService = e),
                (this.tuiDialogService = i),
                (this.injector = o);
            }
            cancelStake() {
              return this.openCancelDialog({ action: "stake" });
            }
            cancelWithdraw() {
              return this.openCancelDialog({ action: "withdraw" });
            }
            openCancelDialog(e) {
              return this.tuiDialogService
                .open(new Rt.Al(Xn, this.injector), { data: e })
                .pipe(
                  (0, zn.g)(500),
                  (0, G.b)((i) => {
                    i &&
                      this.txStatusDialogService.changeTo({
                        status: Nn._.success,
                        link: this.txStatusDialogService.txStatusDialogLink(i),
                      });
                  }),
                  (0, Ht.h)(void 0)
                );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(ye.i),
                t.ɵɵinject(cn.RO),
                t.ɵɵinject(t.Injector)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        qn = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              providers: [Pe],
              imports: [x.y4, s.ez, Vn.I, nn.T, Pt.n, w.WD, It._, qt.y, te.Z],
            })),
            n
          );
        })(),
        ln = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              imports: [
                x.y4,
                s.ez,
                p.Bz,
                w.WD,
                k.o,
                rt.$$,
                tt.vQ,
                S,
                Pt.n,
                kt,
                Z.z,
                Qn,
                Rn,
                qn,
                Ct,
                Wt.G,
                et.a,
                I.a,
              ],
            })),
            n
          );
        })(),
        ae = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              imports: [s.ez, It._, vt.S, x.y4, p.Bz],
            })),
            n
          );
        })(),
        ti = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              imports: [
                x.y4,
                s.ez,
                k.o,
                w.WD,
                ae,
                p.Bz,
                tt.vQ,
                et.a,
                Wt.G,
                I.a,
              ],
            })),
            n
          );
        })(),
        pn = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              imports: [x.y4, s.ez, ti, w.WD, Pt.n],
            })),
            n
          );
        })();
      var re = r(39700),
        ke = r(7882),
        dn = r(74941),
        Oe = r(1753),
        zt = r(30606),
        Te = r(33646),
        se = r(18084),
        be = r(74027),
        gt = r(5327),
        Me = r(47831);
      const Ee = {
          [gt.$L.etherumMainnet]: "https://api.opium.finance",
          [gt.$L.polygonMainnet]: "https://api-matic.opium.finance",
        },
        ei = {
          [gt.$L.etherumMainnet]: ["PEER_2_POOL_OPTION_CALL_ONE_INCH_V1"],
          [gt.$L.polygonMainnet]: ["PEER_2_POOL_OPTION_CALL_ETH_V3"],
        },
        Ie = (n) => `https://cdn.1inch.io/opium/pool-logo/${n}.svg`,
        Ae = {
          [gt.$L.etherumMainnet]: {
            PEER_2_POOL_OPTION_CALL_ONE_INCH_V1: Ie(
              "PEER_2_POOL_OPTION_CALL_ONE_INCH_V1"
            ),
          },
          [gt.$L.polygonMainnet]: {
            PEER_2_POOL_OPTION_PUT_ETH_V2: Ie("PEER_2_POOL_OPTION_PUT_ETH_V2"),
            PEER_2_POOL_OPTION_CALL_ETH_V3: Ie(
              "PEER_2_POOL_OPTION_CALL_ETH_V3"
            ),
          },
        };
      let ce = (() => {
          class n {
            constructor(e, i, o, c, l) {
              (this.walletConnectionQuery = e),
                (this.activeConnectionQuery = i),
                (this.httpClient = o),
                (this.opiumPoolsStore = c),
                (this.txHistoryQuery = l);
            }
            persistOpiumPools() {
              return (0, Oe.T)(
                this.txHistoryQuery.newTransactionMined$,
                (0, zt.H)(0, 7e3)
              ).pipe(
                (0, R.O)(null),
                (0, _.w)(() => this.updateOpiumPools())
              );
            }
            updateOpiumPools() {
              return (0, Te.D)({
                pools: this.fetchOpiumPoolsData(),
                products: this.fetchOpiumProducts(),
              }).pipe(
                (0, N.q)(1),
                (0, G.b)(({ pools: e, products: i }) => {
                  this.opiumPoolsStore.upsertMany(
                    this.buildOpiumPoolDtoList(e, i)
                  );
                }),
                (0, Ht.h)(void 0)
              );
            }
            buildOpiumPoolDtoList(e, i) {
              const { uiChainId: o } = this.activeConnectionQuery;
              return e
                .filter((c) => ei[o].includes(c.id))
                .map((c) => {
                  var l;
                  const d = i.find((Dr) => Dr.id === c.id),
                    {
                      avgCost: u,
                      avgCostFrequency: f,
                      params: {
                        createdAt: g,
                        collateralization: P,
                        inverseTrigger: D,
                        poolAddress: j,
                        marginTitle: C,
                        title: y,
                        withdrawalFee: v,
                        marginAddress: Y,
                        underlyingTitle: Xt,
                        referenceTitle: Lt,
                      },
                    } = d;
                  return {
                    id: c.id,
                    chainId: o,
                    data: Object.assign(Object.assign({}, c), {
                      logo:
                        (null === (l = null == Ae ? void 0 : Ae[o]) ||
                        void 0 === l
                          ? void 0
                          : l[c.id]) || c.logo,
                    }),
                    product: {
                      avgCost: u,
                      avgCostFrequency: f,
                      createdAt: g,
                      collateralization: P,
                      inverseTrigger: D,
                      poolAddress: j.toLowerCase(),
                      marginTitle: C,
                      title: y,
                      withdrawalFee: v,
                      underlyingTitle: Xt,
                      referenceTitle: Lt,
                    },
                    tokenAddress: Y.toLowerCase(),
                  };
                });
            }
            fetchOpiumPoolsData() {
              const { walletAddress: e } = this.walletConnectionQuery,
                { uiChainId: i } = this.activeConnectionQuery,
                o = Ee[i];
              if (!o) throw new Error("Opium does not support chain: " + i);
              return this.httpClient.get(`${o}/v1/stakings?address=${e}`).pipe(
                (0, se.V)(8e3),
                (0, be.a)((0, Me.d)(3, 3e3)),
                (0, ht.K)(() => (0, T.of)([]))
              );
            }
            fetchOpiumProducts() {
              const { uiChainId: e } = this.activeConnectionQuery,
                i = Ee[e];
              if (!i) throw new Error("Opium does not support chain: " + e);
              return this.httpClient.get(`${i}/v1/products`).pipe(
                (0, se.V)(8e3),
                (0, be.a)((0, Me.d)(3, 3e3)),
                (0, ht.K)(() => (0, T.of)([]))
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(ct.r),
                t.ɵɵinject(dt.r),
                t.ɵɵinject(h.eN),
                t.ɵɵinject(ke.z7),
                t.ɵɵinject(Ut.x)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        un = (() => {
          class n {
            constructor(e, i, o, c, l, d, u) {
              (this.activeConnectionQuery = e),
                (this.router = i),
                (this.opiumPoolsQuery = o),
                (this.opiumPoolsStore = c),
                (this.uiService = l),
                (this.currentSpenderService = d),
                (this.opiumPoolsService = u);
            }
            canActivateChild(e) {
              const { poolId: i } = e.params;
              return (
                0 === this.opiumPoolsQuery.getAll().length
                  ? this.opiumPoolsService.updateOpiumPools()
                  : (0, T.of)(void 0)
              ).pipe((0, m.U)(() => this.activatePool(i)));
            }
            activatePool(e) {
              const { currentChainId: i } = this.activeConnectionQuery,
                o = this.opiumPoolsQuery.getEntity(e);
              return o && o.chainId === i
                ? (this.opiumPoolsStore.setActive(e),
                  this.currentSpenderService.setCurrentSpenderType(re.F.opium),
                  !0)
                : this.router.createUrlTree([i, "earn", "strategies"]);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(dt.r),
                t.ɵɵinject(p.F0),
                t.ɵɵinject(mt.q),
                t.ɵɵinject(ke.z7),
                t.ɵɵinject(dn.F),
                t.ɵɵinject(re.q),
                t.ɵɵinject(ce)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })();
      var ni = r(14585),
        St = (() => {
          return (
            ((n = St || (St = {})).firstToken = "firstToken"),
            (n.secondToken = "secondToken"),
            St
          );
          var n;
        })();
      const Yt = {
        [St.firstToken]: {
          mainColor: "rgba(47, 138, 245, 1)",
          gradientStart: "rgba(47, 138, 245, 0.7)",
          gradientMiddle: "rgba(47, 138, 245, 0.3)",
          gradientEnd: "rgba(47, 138, 245, 0.03)",
        },
        [St.secondToken]: {
          mainColor: "rgba(33, 193, 135, 1)",
          gradientStart: "rgba(33, 193, 135, 0.7)",
          gradientMiddle: "rgba(33, 193, 135, 0.2)",
          gradientEnd: "rgba(33, 193, 135, 0.03)",
        },
      };
      let De = (() => {
        class n {
          constructor(e, i) {
            (this.activeConnectionQuery = e), (this.httpClient = i);
          }
          buildPerformanceChartData(e) {
            const i = Yt[St.firstToken],
              o = Yt[St.secondToken];
            return {
              datasets: [
                {
                  type: "bar",
                  label: "Pool performance",
                  data: e.map((c) => 100 * c.performance),
                  backgroundColor: i.mainColor,
                  hoverBackgroundColor: i.mainColor,
                  borderWidth: 0,
                  borderColor: i.mainColor,
                },
                {
                  type: "line",
                  label: "Return since inception",
                  data: e.map((c) => 100 * c.linePerformance),
                  borderColor: o.mainColor,
                  borderWidth: 2,
                  backgroundColor: (c) => {
                    const l = c.chart.ctx.createLinearGradient(
                      0,
                      0,
                      0,
                      c.chart.chartArea.height
                    );
                    return (
                      l.addColorStop(0, o.gradientStart),
                      l.addColorStop(0.5, o.gradientMiddle),
                      l.addColorStop(1, o.gradientEnd),
                      l
                    );
                  },
                  pointStyle: "circle",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  pointBorderWidth: 0,
                  pointBorderColor: o.mainColor,
                  pointBackgroundColor: o.mainColor,
                  pointHoverBackgroundColor: o.mainColor,
                  pointHoverBorderColor: o.mainColor,
                  fill: !0,
                },
              ],
              labels: e.map((c) => 1e3 * c.timestamp),
            };
          }
          fetchPerformanceChartData(e) {
            const { uiChainId: i } = this.activeConnectionQuery,
              o = Ee[i];
            if (!o) throw new Error("Opium does not support chain: " + i);
            return this.httpClient
              .get(`${o}/v1/products/${e}/analyticsChart`)
              .pipe(
                (0, se.V)(8e3),
                (0, be.a)((0, Me.d)(3, 3e3)),
                (0, ht.K)(() => (0, T.of)([]))
              );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.ɵɵinject(dt.r), t.ɵɵinject(h.eN));
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var ii = r(91531),
        oi = r(17191),
        ai = r(83140);
      let mn = (() => {
          class n {
            constructor(e, i, o, c, l, d, u) {
              (this.walletConnectionQuery = e),
                (this.ethContractService = i),
                (this.contractAddressQuery = o),
                (this.erc20Helper = c),
                (this.opiumPoolsQuery = l),
                (this.opiumUserPoolsStore = d),
                (this.txHistoryQuery = u);
            }
            persistUserStateForPool(e) {
              let i = null;
              return (0, Oe.T)(
                this.txHistoryQuery.newTransactionMined$,
                (0, zt.H)(0, 7e3)
              ).pipe(
                (0, R.O)(null),
                (0, _.w)(
                  () => this.walletConnectionQuery.connectedWalletAddress$
                ),
                (0, _.w)((o) =>
                  o
                    ? this.opiumPoolsQuery.selectEntity(e).pipe(
                        (0, H.BX)(),
                        (0, st.x)(J.fS0),
                        (0, _.w)(
                          (c) => (
                            i ||
                              (i = this.fetchUserStateForPool(o, c).pipe(
                                (0, $.d)({ refCount: !0, bufferSize: 1 })
                              )),
                            i
                          )
                        ),
                        (0, G.b)((c) => {
                          (i = null), this.opiumUserPoolsStore.upsert(c.id, c);
                        })
                      )
                    : (0, T.of)(null)
                ),
                (0, ht.K)(
                  (o) => (
                    (i = null),
                    ai.error("Opium user pool fetch error", o),
                    (0, T.of)(null)
                  )
                ),
                (0, Ht.h)(void 0)
              );
            }
            fetchUserStateForPool(e, i) {
              const o = (0, ii.w)({ walletAddress: e, poolId: i.id }),
                c = i.product.poolAddress,
                l = i.tokenAddress;
              return (0, Te.D)({
                id: (0, T.of)(o),
                activeStake: (0, T.of)(i.data.userStaked || 0),
                pendingStake: (0, T.of)(i.data.userStakedPending || 0),
                isWithdrawScheduled: (0, H.p4)(this.isWithdrawScheduled(c)),
                stakingSchedulerAllowance: this.getStakingSchedulerAllowance(
                  l
                ).pipe((0, N.q)(1)),
                stakingPoolAllowance: this.getStakingPoolAllowance(c, l).pipe(
                  (0, N.q)(1)
                ),
                withdrawSchedulerAllowance: this.getWithdrawSchedulerAllowance(
                  c
                ).pipe((0, N.q)(1)),
              }).pipe((0, se.V)(1e4));
            }
            getWithdrawSchedulerAllowance(e) {
              const i = this.contractAddressQuery.getContractAddress(
                K.a4.opiumWithdrawScheduler
              );
              return this.erc20Helper.getApprovedAmount(e, i);
            }
            getStakingSchedulerAllowance(e) {
              const i = this.contractAddressQuery.getContractAddress(
                K.a4.opiumStakeScheduler
              );
              return this.erc20Helper.getApprovedAmount(e, i);
            }
            getStakingPoolAllowance(e, i) {
              return this.erc20Helper.getApprovedAmount(i, e);
            }
            isWithdrawScheduled(e) {
              const { walletAddress: i } = this.walletConnectionQuery;
              return this.ethContractService.callViewContract(
                ot._.OpiumWithdrawalSchedulerABI,
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumWithdrawScheduler
                ),
                "isScheduled",
                [i, e]
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(ct.r),
                t.ɵɵinject(ne.u),
                t.ɵɵinject(At.O),
                t.ɵɵinject(Dt.ZU),
                t.ɵɵinject(mt.q),
                t.ɵɵinject(oi.Eh),
                t.ɵɵinject(Ut.x)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        ri = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              providers: [ce, De, un, Mt, mn],
              imports: [h.JF, ni.Z, pn, ln, pn, ln],
            })),
            n
          );
        })();
      var si = r(25305),
        ci = r(74004),
        li = r(18465);
      let pi = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = t.ɵɵdefineInjector({
            imports: [s.ez, It._, ae, Pt.n, p.Bz],
          })),
          n
        );
      })();
      var Be = r(91066),
        di = r(54497),
        Ot = r(65127),
        le = r(49184),
        ui = r(1596);
      let gn = (() => {
        class n {
          constructor(e, i, o, c, l) {
            (this.activeConnectionQuery = e),
              (this.router = i),
              (this.tradingStrategiesQuery = o),
              (this.tradingStrategiesStore = c),
              (this.featureToggleService = l);
          }
          canActivate() {
            const { uiChainId: e } = this.activeConnectionQuery;
            if (
              0 ===
                this.tradingStrategiesQuery.getAll({
                  filterBy: (c) => c.chainId === e,
                }).length &&
              !ke.py[e]
            )
              return this.router.createUrlTree([
                this.activeConnectionQuery.currentChainId,
                "swap",
              ]);
            const o = this.tradingStrategiesQuery.getActiveId();
            return o && this.tradingStrategiesStore.removeActive(o), !0;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵinject(dt.r),
              t.ɵɵinject(p.F0),
              t.ɵɵinject(Ot.c),
              t.ɵɵinject(le.I),
              t.ɵɵinject(ui.BV)
            );
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var $e = r(27445),
        mi = r(64057),
        Le = r(95605),
        gi = r(572),
        Et = (() => {
          return (
            ((n = Et || (Et = {})).firstToken = "token0"),
            (n.secondToken = "token1"),
            (n.deposit = "deposit"),
            (n.withdraw = "withdraw"),
            (n.withdrawWithRatio = "withdrawWithRatio"),
            (n.balanceOf = "balanceOf"),
            (n.totalSupply = "totalSupply"),
            Et
          );
          var n;
        })();
      let We = (() => {
        class n {
          constructor(e, i, o, c, l, d, u) {
            (this.ethContractService = e),
              (this.contractAddressQuery = i),
              (this.erc20Helper = o),
              (this.walletConnectionQuery = c),
              (this.tokenService = l),
              (this.simpleSendTransactionService = d),
              (this.createPendingTxService = u);
          }
          fetchTokenBalance(e, i) {
            return this.erc20Helper.getErc20Balance(i, e).pipe((0, N.q)(1));
          }
          fetchAccountBalance(e) {
            return this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, _.w)((i) =>
                i
                  ? this.callTradingContract(e, Et.balanceOf, [i])
                  : (0, T.of)(null)
              ),
              (0, m.U)((i) => it.O$.from(null != i ? i : 0)),
              (0, ht.K)(() => (0, T.of)(it.O$.from(0))),
              (0, N.q)(1)
            );
          }
          fetchTotalSupply(e) {
            return this.callTradingContract(e, Et.totalSupply).pipe(
              (0, m.U)((i) => it.O$.from(null != i ? i : 0)),
              (0, ht.K)(() => (0, T.of)(it.O$.from(0))),
              (0, N.q)(1)
            );
          }
          fetchDeposit(e, i, o, c = it.O$.from(0)) {
            return this.getCallDataForTradingContract(e, Et.deposit, [
              i,
              o,
              c.toString(),
            ]).pipe(
              (0, _.w)((l) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: e, data: l },
                  () => null
                )
              )
            );
          }
          fetchWithdraw(e, i, o = it.O$.from(0), c = it.O$.from(0)) {
            return this.getCallDataForTradingContract(e, Et.withdraw, [
              i,
              o.toString(),
              c.toString(),
            ]).pipe(
              (0, _.w)((l) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: e, data: l },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "withdraw",
                    subType: q.E.tradingStrategyWithdraw,
                    amount: "0",
                    meta: { token: Le.UU },
                  })
                )
              )
            );
          }
          fetchWithdrawWithRatio(
            e,
            i,
            o,
            c = it.O$.from(0),
            l = it.O$.from(0)
          ) {
            return this.getCallDataForTradingContract(e, Et.withdrawWithRatio, [
              i,
              o,
              c.toString(),
              l.toString(),
            ]).pipe(
              (0, _.w)((d) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: e, data: d },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "withdraw",
                    subType: q.E.tradingStrategyWithdrawWithRatio,
                    amount: "0",
                    meta: { token: Le.UU },
                  })
                )
              )
            );
          }
          getCallDataForTradingContract(e, i, o = []) {
            return (0, H.p4)(
              this.ethContractService.getContractEncodeABI(
                ot._.FixedRateSwapABI,
                e,
                i,
                o
              )
            );
          }
          callTradingContract(e, i, o = []) {
            return (0, H.p4)(
              this.ethContractService.callViewContract(
                ot._.FixedRateSwapABI,
                e,
                i,
                o
              )
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵinject(ne.u),
              t.ɵɵinject(At.O),
              t.ɵɵinject(Dt.ZU),
              t.ɵɵinject(ct.r),
              t.ɵɵinject(gi.H),
              t.ɵɵinject(Ze.RW),
              t.ɵɵinject(Je.B)
            );
          }),
          (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var hn = r(76307),
        je = r(70167);
      let Zt = (() => {
          class n {
            constructor(e, i, o, c, l, d) {
              (this.tradingStrategiesStore = e),
                (this.tradingStrategiesQuery = i),
                (this.earnStrategiesBlockchainService = o),
                (this.approveTransactionService = c),
                (this.twoStepApproveService = l),
                (this.webAnalyticsService = d);
            }
            setActiveTradingStrategyEntity(e) {
              this.tradingStrategiesStore.setActive(e);
            }
            updateApyRange(e) {
              this.tradingStrategiesStore.updateActive({ apyRange: e });
            }
            updateCharts(e) {
              this.tradingStrategiesStore.updateActive({ activeChart: e });
            }
            updateChartSettings(e, i) {
              this.tradingStrategiesStore.updateActive({
                strategiesChartTypes: Object.assign(
                  Object.assign(
                    {},
                    this.tradingStrategiesQuery.strategiesChartTypes
                  ),
                  { [e]: i }
                ),
              });
            }
            deposit(e, i) {
              const o = (0, A.yD)(
                  e,
                  this.tradingStrategiesQuery.firstTokenDecimals
                ).toString(),
                c = (0, A.yD)(
                  i,
                  this.tradingStrategiesQuery.secondTokenDecimals
                ).toString();
              return (
                (0, mi.H)("Deposit to trading strategy: ", {
                  firstAmount: o,
                  secondAmount: c,
                }),
                this.earnStrategiesBlockchainService
                  .fetchDeposit(
                    this.tradingStrategiesQuery.contractAddress,
                    o,
                    c
                  )
                  .pipe(
                    (0, G.b)(() => {
                      this.webAnalyticsService.trackViaDataLayer(
                        "earn-deposit",
                        {
                          strategy: this.tradingStrategiesQuery.contractAddress,
                          firstTokenValue: e,
                          secondTokenValue: i,
                        }
                      );
                    })
                  )
              );
            }
            withdraw(e, i) {
              return (
                "correlation" == i
                  ? this.earnStrategiesBlockchainService.fetchWithdraw(
                      this.tradingStrategiesQuery.contractAddress,
                      e
                    )
                  : this.earnStrategiesBlockchainService.fetchWithdrawWithRatio(
                      this.tradingStrategiesQuery.contractAddress,
                      e,
                      it.O$.from((0, A.yD)("firstToken" == i ? "1" : "0", 18))
                    )
              ).pipe(
                (0, G.b)(() => {
                  this.webAnalyticsService.trackViaDataLayer("earn-withdraw", {
                    strategy: this.tradingStrategiesQuery.contractAddress,
                    amount: e.toString(),
                    proportion: i,
                  });
                })
              );
            }
            approveDeposit(e, i) {
              if (!e.approved && !i.approved)
                return this.twoStepApproveService.twoStepApprove(
                  e.token,
                  i.token,
                  this.tradingStrategiesQuery.contractAddress,
                  Dt.zL,
                  "authorize",
                  q.E.approveTradingStrategyDeposit,
                  {
                    approvedForAddress:
                      this.tradingStrategiesQuery.contractAddress,
                    asset: e.token,
                  },
                  {
                    approvedForAddress:
                      this.tradingStrategiesQuery.contractAddress,
                    asset: i.token,
                  }
                );
              {
                const c = e.approved ? i.token : e.token;
                return this.approveTransactionService
                  .contractApproveTransaction(
                    {
                      contractAddress: c.address,
                      spenderAddress:
                        this.tradingStrategiesQuery.contractAddress,
                      amount: Dt.zL,
                      txSubType: q.E.approveTradingStrategyDeposit,
                      txType: "authorize",
                      meta: {
                        approvedForAddress:
                          this.tradingStrategiesQuery.contractAddress,
                        asset: c,
                      },
                    },
                    !0
                  )
                  .pipe((0, Ht.h)(void 0));
              }
            }
            getWithdrawMinAmounts(e, i, o) {
              const { tokens: c, totalSupply: l } =
                this.tradingStrategiesQuery.getActive();
              return (0, $e.WG)({
                slippage: i,
                proportion: o,
                inputAmount: e,
                firstTokenAmount: c.first.amount,
                secondTokenAmount: c.second.amount,
                totalSupply: l,
              });
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(le.I),
                t.ɵɵinject(Ot.c),
                t.ɵɵinject(We),
                t.ɵɵinject(Ce.f),
                t.ɵɵinject(hn.V),
                t.ɵɵinject(je.y)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        _n = (() => {
          class n {
            constructor(e, i, o, c, l, d) {
              (this.activeConnectionQuery = e),
                (this.router = i),
                (this.tradingStrategiesQuery = o),
                (this.tradingStrategiesService = c),
                (this.uiService = l),
                (this.currentSpenderService = d);
            }
            canActivateChild(e) {
              const { firstToken: i, secondToken: o } = e.params,
                c = (0, $e.cE)({
                  chainId: this.activeConnectionQuery.currentChainId,
                  firstTokenSymbol: i,
                  secondTokenSymbol: o,
                });
              return this.tradingStrategiesQuery.getEntity(c)
                ? (this.tradingStrategiesService.setActiveTradingStrategyEntity(
                    c
                  ),
                  this.currentSpenderService.setCurrentSpenderType(
                    re.F.tradingStrategy
                  ),
                  !0)
                : this.router.createUrlTree([
                    this.activeConnectionQuery.currentChainId,
                    "swap",
                  ]);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(dt.r),
                t.ɵɵinject(p.F0),
                t.ɵɵinject(Ot.c),
                t.ɵɵinject(Zt),
                t.ɵɵinject(dn.F),
                t.ɵɵinject(re.q)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        hi = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({ imports: [s.ez, Be.E, I.a, w.WD] })),
            n
          );
        })();
      var _i = r(44863),
        pe = r(76027),
        _t = (() => {
          return (
            ((n = _t || (_t = {})).ConnectWallet = "ConnectWallet"),
            (n.NotEnoughBalance = "NotEnoughBalance"),
            (n.NeedToApprove = "NeedToApprove"),
            (n.Approving = "Approving"),
            (n.Deposit = "Deposit"),
            (n.WrongAmount = "WrongAmount"),
            (n.NeedToAdjustGasFee = "NeedToAdjustGasFee"),
            (n.Disabled = "Disabled"),
            _t
          );
          var n;
        })(),
        vn = r(19688),
        Ci = r(63898),
        Cn = r(40475),
        de = r(2551),
        fn = r(69554);
      function fi(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 11)(2, "span")(3, "span", 12),
          t.ɵɵtext(4, "Approving..."),
          t.ɵɵelementEnd(),
          t.ɵɵelement(5, "img", 13),
          t.ɵɵelementEnd()(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function xi(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 11)(2, "span"),
          t.ɵɵtext(3, "Enter amount to deposit"),
          t.ɵɵelementEnd()(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function wi(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 11)(2, "span"),
          t.ɵɵtext(3, "Not enough balance"),
          t.ɵɵelementEnd()(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      const Si = function (n, a) {
        return { token0: n, token1: a };
      };
      function yi(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "span"),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "createPoolDialog.allow-1inch-to-use",
                t.ɵɵpureFunction2(4, Si, i.token.symbol, e.token.symbol)
              ),
              " "
            );
        }
      }
      const Pi = function (n) {
        return { sourceToken: n };
      };
      function ki(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "span"),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "limitOrderBox.allow-1inch-to-use",
                t.ɵɵpureFunction1(
                  4,
                  Pi,
                  i.approved ? e.token.symbol : i.token.symbol
                )
              ),
              " "
            );
        }
      }
      function Oi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 14),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(3);
              return t.ɵɵresetView(o.approve());
            }),
            t.ɵɵtemplate(2, yi, 3, 7, "span", 15),
            t.ɵɵtemplate(3, ki, 3, 6, "span", 15),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", !i.approved && !e.approved),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i.approved || e.approved);
        }
      }
      function Ti(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "adjust-gas-price-button", 16),
            t.ɵɵlistener("clickHandler", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(3);
              return t.ɵɵresetView(o.expandGasPriceSettings());
            }),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
      }
      function bi(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 11)(2, "span", 17),
          t.ɵɵtext(3, "Deposit"),
          t.ɵɵelementEnd()(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function Mi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 14),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(3);
              return t.ɵɵresetView(o.makeDeposit());
            }),
            t.ɵɵelementStart(2, "span", 17),
            t.ɵɵtext(3, "Deposit"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementContainerEnd();
        }
      }
      function Ei(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "token-select-input", 6),
            t.ɵɵlistener("setMaxAmount", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.handleSetMaxForFirstToken());
            }),
            t.ɵɵpipe(2, "async"),
            t.ɵɵpipe(3, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "token-select-input", 7),
            t.ɵɵlistener("setMaxAmount", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.handleSetMaxForSecondToken());
            }),
            t.ɵɵpipe(5, "async"),
            t.ɵɵpipe(6, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(7, "swap-settings", 8),
            t.ɵɵelementContainerStart(8, 9),
            t.ɵɵpipe(9, "async"),
            t.ɵɵtemplate(10, fi, 6, 1, "ng-container", 10),
            t.ɵɵtemplate(11, xi, 4, 1, "ng-container", 10),
            t.ɵɵtemplate(12, wi, 4, 1, "ng-container", 10),
            t.ɵɵtemplate(13, Oi, 4, 2, "ng-container", 10),
            t.ɵɵtemplate(14, Ti, 2, 0, "ng-container", 10),
            t.ɵɵtemplate(15, bi, 4, 1, "ng-container", 10),
            t.ɵɵtemplate(16, Mi, 4, 0, "ng-container", 10),
            t.ɵɵelementContainerEnd()();
        }
        if (2 & n) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext().tuiLet,
            o = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("token", i.token)(
              "tokenBalance",
              t.ɵɵpipeBind1(2, 24, o.getTokenBalance(i.token))
            )("tokenChangeable", !1)("formControl", o.firstTokenControl)(
              "showTokenDescription",
              !1
            )("showLock", !i.approved || i.approving)(
              "disabled",
              t.ɵɵpipeBind1(3, 26, o.isAmountInputDisabled$)
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("token", e.token)(
              "tokenBalance",
              t.ɵɵpipeBind1(5, 28, o.getTokenBalance(e.token))
            )("tokenChangeable", !1)("formControl", o.secondTokenControl)(
              "showTokenDescription",
              !1
            )("showLock", !e.approved || e.approving)(
              "disabled",
              t.ɵɵpipeBind1(6, 30, o.isAmountInputDisabled$)
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("compactMode", !0)("collapsedOnInit", !0),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitch",
              t.ɵɵpipeBind1(9, 32, o.depositButtonState$)
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.Approving),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.WrongAmount),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.NotEnoughBalance),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.NeedToApprove),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitchCase",
              o.depositButtonState.NeedToAdjustGasFee
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.Disabled),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.depositButtonState.Deposit);
        }
      }
      function Ii(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Ei, 17, 34, "ng-container", 5),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.secondTokenState$));
        }
      }
      let Ai = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f, g, P, D, j, C) {
            (this.context = e),
              (this.tradingStrategiesStore = i),
              (this.tokenBalanceQuery = o),
              (this.swapSettingsDisplayService = c),
              (this.tradingStrategiesQuery = l),
              (this.tradingStrategiesService = d),
              (this.tokenAllowanceQuery = u),
              (this.txStatusDialogService = f),
              (this.approveTransactionService = g),
              (this.twoStepApproveService = P),
              (this.txHistoryQuery = D),
              (this.acceptTermsService = j),
              (this.swapSettingsService = C),
              (this.depositButtonState = _t),
              (this.firstToken$ = this.tradingStrategiesQuery.firstToken$),
              (this.secondToken$ = this.tradingStrategiesQuery.secondToken$),
              (this.firstTokenControl = new O.UntypedFormControl("1")),
              (this.secondTokenControl = new O.UntypedFormControl("1")),
              (this.firstTokenAmount$ =
                this.firstTokenControl.valueChanges.pipe(
                  (0, R.O)(1),
                  (0, st.x)(),
                  (0, m.U)((y) => `${y || 0}`)
                )),
              (this.secondTokenAmount$ =
                this.secondTokenControl.valueChanges.pipe(
                  (0, R.O)(1),
                  (0, st.x)(),
                  (0, m.U)((y) => `${y || 0}`)
                )),
              (this.firstTokenState$ = (0, W.a)([
                this.firstToken$,
                this.firstTokenAmount$,
              ]).pipe((0, _.w)(([y, v]) => this.tokenState$(y, v)))),
              (this.secondTokenState$ = (0, W.a)([
                this.secondToken$,
                this.secondTokenAmount$,
              ]).pipe((0, _.w)(([y, v]) => this.tokenState$(y, v)))),
              (this.isCustomFeeValid$ = new pe.X(!0)),
              (this.depositButtonState$ = (0, W.a)([
                this.firstTokenState$,
                this.secondTokenState$,
                this.isCustomFeeValid$,
                this.swapSettingsService.isGasPriceNeedAdjust$,
                this.swapSettingsDisplayService
                  .displaySettingsForDomain$("trading-strategies")
                  .pipe(
                    (0, m.U)(
                      (y) =>
                        !(0, J.pMU)(!1, ["gasPriceAdvanced", "collapsed"], y)
                    )
                  ),
              ]).pipe(
                (0, m.U)(([y, v, Y, Xt, Lt]) =>
                  ((n, a, e, i) =>
                    n.approving || a.approving
                      ? _t.Approving
                      : n.approved && a.approved
                      ? [+n.enteredAmount, +a.enteredAmount].every(
                          (o) => o <= 0
                        )
                        ? _t.WrongAmount
                        : n.enoughBalance &&
                          a.enoughBalance &&
                          (+n.enteredAmount || +a.enteredAmount)
                        ? i
                          ? _t.NeedToAdjustGasFee
                          : e
                          ? _t.Deposit
                          : _t.Disabled
                        : _t.NotEnoughBalance
                      : _t.NeedToApprove)(y, v, Y, !Lt && Xt)
                )
              )),
              (this.setMaxEnabled$ = this.depositButtonState$.pipe(
                (0, m.U)((y) => y === _t.Deposit)
              )),
              (this.isAmountInputDisabled$ = (0, W.a)([
                this.firstTokenState$,
                this.secondTokenState$,
              ]).pipe(
                (0, m.U)(
                  ([y, v]) =>
                    !y.approved || !v.approved || y.approving || v.approving
                )
              ));
          }
          ngAfterViewInit() {
            const e = this.swapSettings.isCustomFeeControlValid$.pipe(
              (0, G.b)((i) => {
                this.isCustomFeeValid$.next(i);
              })
            );
            (0, V.O)(e, "isCustomFeeValid$");
          }
          getTokenBalance(e) {
            return this.tokenBalanceQuery.getViewBalance$(e);
          }
          close() {
            this.context.completeWith();
          }
          approve() {
            const e = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() =>
                (0, W.a)([this.firstTokenState$, this.secondTokenState$]).pipe(
                  (0, N.q)(1),
                  (0, _.w)(([i, o]) =>
                    this.tradingStrategiesService.approveDeposit(i, o)
                  )
                )
              )
            );
            (0, V.O)(e, "tradingStrategyDepositApprove$");
          }
          makeDeposit() {
            const e = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() =>
                this.tradingStrategiesService.deposit(
                  (this.firstTokenControl.value || 0).toString(),
                  (this.secondTokenControl.value || 0).toString()
                )
              ),
              (0, G.b)(() => this.close())
            );
            (0, V.O)(e, "tradingStrategyDeposit$");
          }
          handleSetMaxForFirstToken() {
            var e;
            const i =
              null === (e = this.tradingStrategiesQuery.firstTokenState) ||
              void 0 === e
                ? void 0
                : e.token;
            if (!i) return;
            const o = (0, A.kg)(
              this.tokenBalanceQuery.getBalance(i).toString(),
              i.decimals
            );
            this.firstTokenControl.setValue(o);
          }
          handleSetMaxForSecondToken() {
            var e;
            const i =
              null === (e = this.tradingStrategiesQuery.secondTokenState) ||
              void 0 === e
                ? void 0
                : e.token;
            if (!i) return;
            const o = (0, A.kg)(
              this.tokenBalanceQuery.getBalance(i).toString(),
              i.decimals
            );
            this.secondTokenControl.setValue(o);
          }
          expandGasPriceSettings() {
            this.swapSettingsDisplayService.setCollapsed(
              "trading-strategies",
              "gasPriceAdvanced",
              !1
            );
          }
          tokenState$(e, i) {
            const o = this.tradingStrategiesQuery.contractAddress;
            return this.tokenAllowanceQuery
              .isTokenApprovedForContract$(o, e, i)
              .pipe(
                (0, _.w)((c) => {
                  const l = this.txHistoryQuery
                      .pendingTransactionsByType(
                        q.E.approveTradingStrategyDeposit
                      )
                      .pipe(
                        (0, m.U)(
                          (u) =>
                            u.filter((f) => {
                              var g;
                              const P = f.meta;
                              return (
                                P &&
                                (null === (g = P.spender) || void 0 === g
                                  ? void 0
                                  : g.toLowerCase()) === o
                              );
                            }).length > 0
                        )
                      ),
                    d = this.tokenBalanceQuery
                      .getBalance$(e)
                      .pipe(
                        (0, m.U)((u) =>
                          it.O$.from(u).gte(
                            it.O$.from((0, A.yD)(i, e.decimals))
                          )
                        )
                      );
                  return (0, W.a)([c ? (0, T.of)(!1) : l, d]).pipe(
                    (0, m.U)(([u, f]) => ({
                      token: e,
                      approved: c,
                      approving: u,
                      enoughBalance: f,
                      enteredAmount: i,
                    }))
                  );
                })
              );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(Rt.yf),
              t.ɵɵdirectiveInject(le.I),
              t.ɵɵdirectiveInject(Ft.n4),
              t.ɵɵdirectiveInject(vn.A),
              t.ɵɵdirectiveInject(Ot.c),
              t.ɵɵdirectiveInject(Zt),
              t.ɵɵdirectiveInject(Ci.K),
              t.ɵɵdirectiveInject(ye.i),
              t.ɵɵdirectiveInject(Ce.f),
              t.ɵɵdirectiveInject(hn.V),
              t.ɵɵdirectiveInject(Ut.x),
              t.ɵɵdirectiveInject(fe.N),
              t.ɵɵdirectiveInject(Cn._)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["trading-strategies-deposit"]],
            viewQuery: function (e, i) {
              if ((1 & e && t.ɵɵviewQuery(Gt.W, 5), 2 & e)) {
                let o;
                t.ɵɵqueryRefresh((o = t.ɵɵloadQuery())) &&
                  (i.swapSettings = o.first);
              }
            },
            decls: 8,
            vars: 3,
            consts: [
              ["transloco", "tradingStrategies.deposit", 1, "deposit-title"],
              [1, "deposit-close-icon", "blank-button", 3, "click"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [1, "deposit-dialog-wrap"],
              [4, "tuiLet"],
              [
                "mode",
                "compact",
                3,
                "token",
                "tokenBalance",
                "tokenChangeable",
                "formControl",
                "showTokenDescription",
                "showLock",
                "disabled",
                "setMaxAmount",
              ],
              [
                "mode",
                "compact",
                1,
                "next-token-select-input",
                3,
                "token",
                "tokenBalance",
                "tokenChangeable",
                "formControl",
                "showTokenDescription",
                "showLock",
                "disabled",
                "setMaxAmount",
              ],
              [
                "domain",
                "trading-strategies",
                1,
                "deposit-settings",
                3,
                "compactMode",
                "collapsedOnInit",
              ],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              ["color", "blue", 3, "disabled"],
              ["transloco", "button.approving"],
              [
                "src",
                "assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "approving-loader",
              ],
              ["color", "blue", 3, "click"],
              [4, "ngIf"],
              [3, "clickHandler"],
              ["transloco", "tradingStrategies.deposit"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵelementStart(0, "h1", 0),
                t.ɵɵtext(1, "Deposit"),
                t.ɵɵelementEnd(),
                t.ɵɵelementStart(2, "button", 1),
                t.ɵɵlistener("click", function () {
                  return i.close();
                }),
                t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(3, "svg", 2),
                t.ɵɵelement(4, "use", 3),
                t.ɵɵelementEnd()(),
                t.ɵɵnamespaceHTML(),
                t.ɵɵelementStart(5, "div", 4),
                t.ɵɵtemplate(6, Ii, 3, 3, "ng-container", 5),
                t.ɵɵpipe(7, "async"),
                t.ɵɵelementEnd()),
                2 & e &&
                  (t.ɵɵadvance(6),
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(7, 1, i.firstTokenState$)
                  ));
            },
            dependencies: [
              s.O5,
              s.RF,
              s.n9,
              Bt.q,
              x.KI,
              O.NgControlStatus,
              O.FormControlDirective,
              Gt.W,
              de.Y,
              w.Ls,
              fn.R,
              s.Ov,
              x.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02);padding:18px 16px 16px!important;align-items:center;text-align:center;border-radius:20px!important;align-items:start!important;text-align:start!important;max-height:calc(100vh - 100px);color:var(--1inch__ui-01)}@media (max-width: 520px){[_nghost-%COMP%]{width:100%!important}}@media (max-width: 520px){[_nghost-%COMP%]{position:fixed;right:0;bottom:0;left:0;padding:16px 16px 32px!important;border-radius:24px 24px 0 0}}.deposit-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;line-height:23px;padding:0 24px;text-align:start!important;padding:0!important;margin-bottom:16px}@media (max-width: 520px){.deposit-title[_ngcontent-%COMP%]{font-size:18px}}.deposit-close-icon[_ngcontent-%COMP%]{position:absolute;width:36px;height:36px;padding:6px;border-radius:12px;color:var(--1inch__ui-01);right:10px;top:10px;top:12px!important}.deposit-close-icon[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}@media (max-width: 520px){.deposit-close-icon[_ngcontent-%COMP%]{display:none}}.deposit-dialog-wrap[_ngcontent-%COMP%]{overflow:auto;width:calc(100% + 8px);padding-right:8px}.deposit-settings[_ngcontent-%COMP%]{margin:32px 0}.next-token-select-input[_ngcontent-%COMP%]{margin-top:8px}.approving-loader[_ngcontent-%COMP%]{width:20px;margin-left:10px}adjust-gas-price-button[_ngcontent-%COMP%]{margin-top:-8px}@media (max-width: 520px){[_nghost-%COMP%]{border-radius:24px 24px 0 0!important}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var ue = r(68751),
        $t = r(55231),
        Di = r(85531),
        Bi = r(69064),
        $i = r(23982),
        Li = r(75392);
      function Wi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "button", 24),
            t.ɵɵlistener("click", function () {
              const c = t.ɵɵrestoreView(e).index,
                l = t.ɵɵnextContext(2);
              return t.ɵɵresetView(l.selectWithdrawOption(c));
            }),
            t.ɵɵelement(1, "token-select-button", 25),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = a.$implicit;
          t.ɵɵadvance(1), t.ɵɵproperty("token", e)("withArrow", !1);
        }
      }
      function ji(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 21)(1, "tui-data-list", 22),
            t.ɵɵtemplate(2, Wi, 2, 2, "button", 23),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(2), t.ɵɵproperty("ngForOf", e.withdrawOptions);
        }
      }
      function Fi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "button", 26),
            t.ɵɵlistener("click", function () {
              const c = t.ɵɵrestoreView(e).$implicit,
                l = t.ɵɵnextContext();
              return t.ɵɵresetView(l.takePartOfAmount(c));
            }),
            t.ɵɵtext(1),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = a.$implicit,
            i = t.ɵɵnextContext();
          t.ɵɵclassProp("active", i.amountControl.value === e),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(" ", e, "% ");
        }
      }
      function Qi(n, a) {
        if (
          (1 & n &&
            (t.ɵɵnamespaceSVG(),
            t.ɵɵnamespaceHTML(),
            t.ɵɵelement(0, "token-select-input", 27)),
          2 & n)
        ) {
          const e = a.$implicit;
          t.ɵɵproperty("token", e.token)("tokenChangeable", !1)(
            "calculatedValue",
            e.calculatedValue
          )("showTokenDescription", !1)("isBalanceVisible", !1);
        }
      }
      const Ui = function (n, a) {
        return { amount: n, symbol: a };
      };
      function Ri(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "alert", 29),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                2,
                "tradingStrategies.withdraw.not-enough-liquidity",
                t.ɵɵpureFunction2(5, Ui, e.amount, e.symbol)
              ),
              " "
            );
        }
      }
      function Vi(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Ri, 3, 8, "alert", 28),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", e);
        }
      }
      function zi(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "span", 35),
          t.ɵɵtext(1, " Withdraw "),
          t.ɵɵelementEnd());
      }
      function Ni(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "span", 36),
          t.ɵɵtext(1, " Not enough balance to withdraw "),
          t.ɵɵelementEnd());
      }
      const Ki = function () {
          return ["enabled", "disabled"];
        },
        Hi = function () {
          return ["notEnoughBalance", "notEnoughLiquidity"];
        };
      function Gi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "simple-button", 32),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.makeWithdraw());
            }),
            t.ɵɵtemplate(1, zi, 2, 0, "span", 33),
            t.ɵɵtemplate(2, Ni, 2, 0, "span", 34),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵproperty("disabled", "enabled" !== e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", -1 !== t.ɵɵpureFunction0(3, Ki).indexOf(e)),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", -1 !== t.ɵɵpureFunction0(4, Hi).indexOf(e));
        }
      }
      function Yi(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "adjust-gas-price-button", 37),
            t.ɵɵlistener("clickHandler", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.expandGasPriceSettings());
            }),
            t.ɵɵelement(1, "span", 38),
            t.ɵɵelementEnd();
        }
      }
      function Zi(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Gi, 3, 5, "simple-button", 30),
            t.ɵɵtemplate(2, Yi, 2, 0, "adjust-gas-price-button", 31),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", "isGasPriceNeedAdjust" !== e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", "isGasPriceNeedAdjust" === e);
        }
      }
      let Ji = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f) {
            (this.context = e),
              (this.tokenPricesQuery = i),
              (this.swapSettingsDisplayService = o),
              (this.tradingStrategiesQuery = c),
              (this.tradingStrategiesService = l),
              (this.acceptTermsService = d),
              (this.swapSettingsQuery = u),
              (this.swapSettingsService = f),
              (this.firstTokenState$ =
                this.tradingStrategiesQuery.firstTokenState$),
              (this.secondTokenState$ =
                this.tradingStrategiesQuery.secondTokenState$),
              (this.percent = [25, 50, 75, 100]),
              (this.amountControl = new O.UntypedFormControl(this.balanceView)),
              (this.proportion$ = new pe.X("correlation")),
              (this.myLiquidityUsd$ = this.tradingStrategiesQuery
                .selectActive()
                .pipe(
                  (0, m.U)((g) =>
                    g ? this.tradingStrategiesQuery.getMyLiquidityUsd(g) : 0
                  ),
                  (0, $.d)({ bufferSize: 1, refCount: !0 })
                )),
              (this.withdrawBalance$ = this.amountControl.valueChanges.pipe(
                (0, m.U)((g) => g || 0),
                (0, R.O)(this.balanceView)
              )),
              (this.withdrawFields$ = (0, W.a)([
                this.firstTokenState$,
                this.secondTokenState$,
                this.withdrawBalance$,
                this.tradingStrategiesQuery.totalSupply$,
                this.proportion$,
                this.tradingStrategiesQuery.balance$,
                this.tradingStrategiesQuery.lpTokenDecimals$,
                this.tradingStrategiesQuery.frsTokenPrice$,
              ]).pipe(
                (0, st.x)(J.fS0),
                (0, m.U)(([g, P, D, j, C, y, v, Y]) =>
                  (0, Di.j)(g, P, C, (0, A.Pz)(D + "", v), j, y, Y)
                )
              )),
              (this.withdrawOptions = [
                [
                  this.tradingStrategiesQuery.firstTokenState.token,
                  this.tradingStrategiesQuery.secondTokenState.token,
                ],
                this.tradingStrategiesQuery.firstTokenState.token,
                this.tradingStrategiesQuery.secondTokenState.token,
              ]),
              (this.isUserBalanceEnoughToWithdraw$ = this.withdrawBalance$.pipe(
                (0, m.U)((g) => {
                  if (!g) return !1;
                  const D = (0, A.yD)(
                      "" + g,
                      this.tradingStrategiesQuery.lpTokenDecimals
                    ),
                    j = it.O$.from(D);
                  return j.gte(ee.Y) && j.lte(this.balanceRawView);
                })
              )),
              (this.notEnoughLiquidityError$ = (0, W.a)([
                this.proportion$,
                this.withdrawBalance$,
                this.isUserBalanceEnoughToWithdraw$,
              ]).pipe(
                (0, m.U)(([g, P, D]) => {
                  if ("correlation" === g || !P || !D) return null;
                  const j = this.tradingStrategiesQuery.lpTokenDecimals,
                    C = (0, A.Pz)(P + "", j),
                    y = this.tradingStrategiesQuery.getActive().tokens.first,
                    v = this.tradingStrategiesQuery.getActive().tokens.second;
                  return "firstToken" === g && y.amount.lt(C)
                    ? {
                        amount: (0, s.uf)(
                          +(0, A.kg)(y.amount.toString(), j),
                          "en",
                          "1.1-2"
                        ),
                        symbol: y.token.symbol,
                      }
                    : "secondToken" === g && v.amount.lt(C)
                    ? {
                        amount: (0, s.uf)(
                          +(0, A.kg)(v.amount.toString(), j),
                          "en",
                          "1.1-2"
                        ),
                        symbol: v.token.symbol,
                      }
                    : null;
                })
              )),
              (this.isCustomFeeValid$ = new pe.X(!0)),
              (this.withdrawButtonState$ = (0, W.a)([
                this.isUserBalanceEnoughToWithdraw$,
                this.notEnoughLiquidityError$,
                this.swapSettingsService.isGasPriceNeedAdjust$,
                this.swapSettingsDisplayService
                  .displaySettingsForDomain$("trading-strategies")
                  .pipe(
                    (0, m.U)(
                      (g) =>
                        !(0, J.pMU)(!1, ["gasPriceAdvanced", "collapsed"], g)
                    )
                  ),
                this.isCustomFeeValid$,
              ]).pipe(
                (0, m.U)(([g, P, D, j, C]) =>
                  g
                    ? P
                      ? "notEnoughLiquidity"
                      : D
                      ? j
                        ? "disabled"
                        : "isGasPriceNeedAdjust"
                      : C
                      ? "enabled"
                      : "disabled"
                    : "notEnoughBalance"
                )
              )),
              (this.currentOptionIndex = 0),
              (this.open = !1);
          }
          get balanceView() {
            const e = this.tradingStrategiesQuery.lpTokenDecimals;
            return (0, A.kg)(this.balanceRawView.toString(), e);
          }
          get balanceRawView() {
            return this.tradingStrategiesQuery.balance;
          }
          ngOnInit() {
            const e = this.myLiquidityUsd$.pipe(
              (0, ue.h)((i) => i > 0),
              (0, G.b)(() => {
                this.amountControl.setValue(this.balanceView);
              }),
              (0, N.q)(1),
              (0, $t.R)(this.amountControl.valueChanges)
            );
            (0, V.O)(e, "initWithdrawAmount$");
          }
          ngAfterViewInit() {
            const e = this.swapSettings.isCustomFeeControlValid$.pipe(
              (0, G.b)((i) => {
                this.isCustomFeeValid$.next(i);
              })
            );
            (0, V.O)(e, "isCustomFeeValid$");
          }
          selectWithdrawOption(e) {
            (this.currentOptionIndex = e),
              (this.open = !1),
              this.proportion$.next(this.getCurrentProportion());
          }
          takePartOfAmount(e) {
            const i = this.tradingStrategiesQuery.lpTokenDecimals,
              o = this.balanceRawView.mul(e).div(100).toString();
            this.amountControl.setValue((0, A.kg)(o, i));
          }
          makeWithdraw() {
            const e = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() => {
                const o = this.proportion$.value,
                  l = (0, A.Pz)(
                    this.amountControl.value + "",
                    this.tradingStrategiesQuery.lpTokenDecimals
                  );
                return this.tradingStrategiesService.withdraw(l, o);
              }),
              (0, G.b)((i) => {
                this.close();
              })
            );
            (0, V.O)(e, "acceptTermsAndWithdraw$");
          }
          close() {
            this.context.completeWith();
          }
          expandGasPriceSettings() {
            this.swapSettingsDisplayService.setCollapsed(
              "trading-strategies",
              "gasPriceAdvanced",
              !1
            );
          }
          getCurrentProportion() {
            var e, i;
            const o = this.withdrawOptions[this.currentOptionIndex];
            return o ===
              (null === (e = this.tradingStrategiesQuery.firstTokenState) ||
              void 0 === e
                ? void 0
                : e.token)
              ? "firstToken"
              : o ===
                (null === (i = this.tradingStrategiesQuery.secondTokenState) ||
                void 0 === i
                  ? void 0
                  : i.token)
              ? "secondToken"
              : "correlation";
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(Rt.yf),
              t.ɵɵdirectiveInject(ie.u),
              t.ɵɵdirectiveInject(vn.A),
              t.ɵɵdirectiveInject(Ot.c),
              t.ɵɵdirectiveInject(Zt),
              t.ɵɵdirectiveInject(fe.N),
              t.ɵɵdirectiveInject(Bi.G),
              t.ɵɵdirectiveInject(Cn._)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["trading-strategies-withdraw"]],
            viewQuery: function (e, i) {
              if ((1 & e && t.ɵɵviewQuery(Gt.W, 5), 2 & e)) {
                let o;
                t.ɵɵqueryRefresh((o = t.ɵɵloadQuery())) &&
                  (i.swapSettings = o.first);
              }
            },
            decls: 35,
            vars: 22,
            consts: [
              ["transloco", "tradingStrategies.withdraw", 1, "withdraw-title"],
              [1, "withdraw-close-icon", "blank-button", 3, "click"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [1, "withdraw-dialog-wrap"],
              [1, "withdraw-share-wrap"],
              [1, "withdraw-title-row"],
              [1, "withdraw-row-title"],
              [1, "withdraw-share-input-row"],
              ["tuiDropdownAlign", "left", 3, "content", "open", "openChange"],
              [1, "select-withdraw-token", 3, "token"],
              ["dropdown", ""],
              [1, "withdraw-share-input-wrap"],
              [1, "withdraw-share-input", 3, "precision", "formControl"],
              [1, "withdraw-share-buttons-row"],
              [
                "class",
                "blank-button withdraw-share-button",
                3,
                "active",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["width", "12", "height", "11", 1, "withdraw-arrow"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow_down_small.svg#arrow_down_small",
              ],
              [
                "class",
                "token-select-input transparent",
                "mode",
                "view",
                3,
                "token",
                "tokenChangeable",
                "calculatedValue",
                "showTokenDescription",
                "isBalanceVisible",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "domain",
                "trading-strategies",
                1,
                "withdraw-settings",
                3,
                "compactMode",
                "collapsedOnInit",
              ],
              [4, "tuiLet"],
              [1, "withdraw-dropdown-wrap"],
              ["role", "menu"],
              [
                "tuiOption",
                "",
                "class",
                "withdraw-dropdown-option",
                "role",
                "menuitem",
                3,
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "tuiOption",
                "",
                "role",
                "menuitem",
                1,
                "withdraw-dropdown-option",
                3,
                "click",
              ],
              [3, "token", "withArrow"],
              [1, "blank-button", "withdraw-share-button", 3, "click"],
              [
                "mode",
                "view",
                1,
                "token-select-input",
                "transparent",
                3,
                "token",
                "tokenChangeable",
                "calculatedValue",
                "showTokenDescription",
                "isBalanceVisible",
              ],
              ["type", "warning", 3, "hideCloseButton", 4, "ngIf"],
              ["type", "warning", 3, "hideCloseButton"],
              ["color", "blue", 3, "disabled", "click", 4, "ngIf"],
              [3, "clickHandler", 4, "ngIf"],
              ["color", "blue", 3, "disabled", "click"],
              ["transloco", "tradingStrategies.withdraw", 4, "ngIf"],
              [
                "transloco",
                "tradingStrategies.withdraw.not-enough-balance",
                4,
                "ngIf",
              ],
              ["transloco", "tradingStrategies.withdraw"],
              ["transloco", "tradingStrategies.withdraw.not-enough-balance"],
              [3, "clickHandler"],
              ["transloco", "uni.button.need-to-adjust-gas-price2"],
            ],
            template: function (e, i) {
              if (
                (1 & e &&
                  (t.ɵɵelementStart(0, "h1", 0),
                  t.ɵɵtext(1, "Withdraw"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(2, "button", 1),
                  t.ɵɵlistener("click", function () {
                    return i.close();
                  }),
                  t.ɵɵnamespaceSVG(),
                  t.ɵɵelementStart(3, "svg", 2),
                  t.ɵɵelement(4, "use", 3),
                  t.ɵɵelementEnd()(),
                  t.ɵɵnamespaceHTML(),
                  t.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(
                    8,
                    "div",
                    7
                  ),
                  t.ɵɵtext(9, "Asset"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(10, "div", 7)(11, "span"),
                  t.ɵɵtext(12, "Available"),
                  t.ɵɵelementEnd(),
                  t.ɵɵtext(13),
                  t.ɵɵpipe(14, "number"),
                  t.ɵɵpipe(15, "async"),
                  t.ɵɵelementEnd()(),
                  t.ɵɵelementStart(16, "div", 8)(17, "div")(
                    18,
                    "tui-hosted-dropdown",
                    9
                  ),
                  t.ɵɵlistener("openChange", function (c) {
                    return (i.open = c);
                  }),
                  t.ɵɵelement(19, "token-select-button", 10),
                  t.ɵɵelementEnd(),
                  t.ɵɵtemplate(
                    20,
                    ji,
                    3,
                    1,
                    "ng-template",
                    null,
                    11,
                    t.ɵɵtemplateRefExtractor
                  ),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(22, "div", 12),
                  t.ɵɵelement(23, "amount-input", 13),
                  t.ɵɵelementEnd()(),
                  t.ɵɵelementStart(24, "div", 14),
                  t.ɵɵtemplate(25, Fi, 2, 3, "button", 15),
                  t.ɵɵelementEnd()(),
                  t.ɵɵnamespaceSVG(),
                  t.ɵɵelementStart(26, "svg", 16),
                  t.ɵɵelement(27, "use", 17),
                  t.ɵɵelementEnd(),
                  t.ɵɵtemplate(28, Qi, 1, 5, "token-select-input", 18),
                  t.ɵɵpipe(29, "async"),
                  t.ɵɵnamespaceHTML(),
                  t.ɵɵelement(30, "swap-settings", 19),
                  t.ɵɵtemplate(31, Vi, 2, 1, "ng-container", 20),
                  t.ɵɵpipe(32, "async"),
                  t.ɵɵtemplate(33, Zi, 3, 2, "ng-container", 20),
                  t.ɵɵpipe(34, "async"),
                  t.ɵɵelementEnd()),
                2 & e)
              ) {
                const o = t.ɵɵreference(21);
                t.ɵɵadvance(13),
                  t.ɵɵtextInterpolate1(
                    " $",
                    t.ɵɵpipeBind1(
                      14,
                      12,
                      t.ɵɵpipeBind1(15, 14, i.myLiquidityUsd$)
                    ),
                    " "
                  ),
                  t.ɵɵadvance(5),
                  t.ɵɵproperty("content", o)("open", i.open),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "token",
                    i.withdrawOptions[i.currentOptionIndex]
                  ),
                  t.ɵɵadvance(4),
                  t.ɵɵproperty("precision", 5)("formControl", i.amountControl),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngForOf", i.percent),
                  t.ɵɵadvance(3),
                  t.ɵɵproperty(
                    "ngForOf",
                    t.ɵɵpipeBind1(29, 16, i.withdrawFields$)
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("compactMode", !0)("collapsedOnInit", !0),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(32, 18, i.notEnoughLiquidityError$)
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(34, 20, i.withdrawButtonState$)
                  );
              }
            },
            dependencies: [
              s.sg,
              s.O5,
              Bt.q,
              x.KI,
              O.NgControlStatus,
              O.FormControlDirective,
              Gt.W,
              de.Y,
              w.Ls,
              $i.N,
              at.o1,
              F.qi,
              F.vK,
              X.Sw,
              Li.l,
              Vt.w,
              fn.R,
              s.Ov,
              s.JJ,
              x.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02);padding:18px 16px 16px!important;align-items:center;text-align:center;border-radius:20px!important;align-items:start!important;text-align:start!important;max-height:calc(100vh - 100px);color:var(--1inch__ui-01)}@media (max-width: 520px){[_nghost-%COMP%]{width:100%!important}}@media (max-width: 520px){[_nghost-%COMP%]{position:fixed;right:0;bottom:0;left:0;padding:16px 16px 32px!important;border-radius:24px 24px 0 0}}.withdraw-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;line-height:23px;padding:0 24px;text-align:start!important;padding:0!important;margin-bottom:16px}@media (max-width: 520px){.withdraw-title[_ngcontent-%COMP%]{font-size:18px}}.withdraw-close-icon[_ngcontent-%COMP%]{position:absolute;width:36px;height:36px;padding:6px;border-radius:12px;color:var(--1inch__ui-01);right:10px;top:10px;top:12px!important}.withdraw-close-icon[_ngcontent-%COMP%]:hover{background:var(--1inch-common-btn-bg-03)}@media (max-width: 520px){.withdraw-close-icon[_ngcontent-%COMP%]{display:none}}.withdraw-share-wrap[_ngcontent-%COMP%]{border-radius:16px;padding:16px;margin-bottom:16px;box-shadow:var(--1inch-shadow-03);background:var(--1inch-bg-21)}.withdraw-share-input-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;align-items:center;margin-bottom:16px}.withdraw-share-input-title[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:23px}.withdraw-share-input-wrap[_ngcontent-%COMP%]{display:flex;font-size:24px;line-height:28px}.withdraw-share-input[_ngcontent-%COMP%]{width:100%;height:28px;--tui-focus: transparent}.withdraw-share-input[_ngcontent-%COMP%]     .t-input{font-size:24px;padding:0!important;text-align:right;border:none;height:28px}.withdraw-share-buttons-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:8px}.withdraw-share-button[_ngcontent-%COMP%]{border-radius:12px;padding:4px 0;font-weight:500;font-size:16px;line-height:26px;color:var(--1inch-common-text-03);background:var(--1inch-common-bg-07)}.withdraw-share-button[_ngcontent-%COMP%]:hover, .withdraw-share-button.active[_ngcontent-%COMP%]{background:var(--1inch-common-btn-bg-09)}.withdraw-arrow[_ngcontent-%COMP%]{display:block;margin:0 auto 16px;color:var(--1inch__ui-02)}.withdraw-dialog-wrap[_ngcontent-%COMP%]{overflow:auto;width:calc(100% + 8px);padding-right:8px}.withdraw-selector[_ngcontent-%COMP%]{display:block;margin-bottom:8px}.withdraw-selector[_ngcontent-%COMP%]     .trading-strategies-selector{background:var(--1inch-bg-03)!important}.withdraw-settings[_ngcontent-%COMP%]{margin:32px 0}token-select-input[_ngcontent-%COMP%] + token-select-input[_ngcontent-%COMP%]{margin-top:8px}.select-withdraw-token[_ngcontent-%COMP%]{text-decoration:none;padding:6px 5px 6px 8px;margin-left:-8px;border-radius:12px}.select-withdraw-token[_ngcontent-%COMP%]:hover, .select-withdraw-token[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-02)}.withdraw-row-title[_ngcontent-%COMP%]{font-size:13px;color:var(--1inch__ui-02);margin-bottom:10px}.withdraw-title-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.withdraw-row-title[_ngcontent-%COMP%]:last-child{text-align:right}.withdraw-dropdown-option[_ngcontent-%COMP%]{padding:20px}.withdraw-dropdown-option[_ngcontent-%COMP%]:hover, .withdraw-dropdown-option[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-01)}.token-select-input[_ngcontent-%COMP%]     .source-layout-row.view{margin-top:20px;margin-bottom:0;height:16px}@media (max-width: 520px){[_nghost-%COMP%]{border-radius:24px 24px 0 0!important}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Fe = r(3228);
      let Qe = (() => {
          class n {
            constructor(e, i, o, c, l, d, u) {
              (this.tuiDialogService = e),
                (this.injector = i),
                (this.activatedRoute = o),
                (this.router = c),
                (this.routerHelperService = l),
                (this.activeConnectionQuery = d),
                (this.tradingStrategiesQuery = u);
            }
            resolve(e, i) {
              var o;
              const c =
                  (null === (o = e.routeConfig) || void 0 === o
                    ? void 0
                    : o.path) || "",
                l = -1 !== c.indexOf("deposit"),
                d = Boolean(e.data.fromMain),
                u = new Rt.Al(l ? Ai : Ji, this.injector),
                { firstToken: f, secondToken: g } = e.params;
              if (!l && !this.hasLiquidity(f, g))
                return void this.router.navigateByUrl(
                  this.routerHelperService.buildEarnStrategiesUrl()
                );
              const P = this.tuiDialogService.open(u).pipe(
                (0, _i.x)(() => {
                  this.router.navigateByUrl(
                    d
                      ? this.routerHelperService.buildEarnStrategiesUrl()
                      : i.url.replace("/" + c, "")
                  );
                })
              );
              (0, V.O)(P, "$openWithdraw");
            }
            hasLiquidity(e, i) {
              const c = (0, $e.cE)({
                  chainId: this.activeConnectionQuery.currentChainId,
                  firstTokenSymbol: e,
                  secondTokenSymbol: i,
                }),
                l = this.tradingStrategiesQuery.getUserLiquidityUsd(c);
              return Boolean(l);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(cn.RO),
                t.ɵɵinject(t.Injector),
                t.ɵɵinject(p.gz),
                t.ɵɵinject(p.F0),
                t.ɵɵinject(Fe.b),
                t.ɵɵinject(dt.r),
                t.ɵɵinject(Ot.c)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        xn = (() => {
          class n {
            constructor(e, i, o, c, l, d) {
              (this.earnStrategiesBlockchainService = e),
                (this.tradingStrategiesService = i),
                (this.tradingStrategiesQuery = o),
                (this.tradingStrategiesStore = c),
                (this.txHistoryQuery = l),
                (this.walletConnectionQuery = d);
            }
            persistTradingStrategy(e) {
              return (0, Oe.T)(
                (0, zt.H)(0, 1e4),
                this.txHistoryQuery.newTransactionMined$,
                this.walletConnectionQuery.isWalletConnected$
              ).pipe(
                (0, _.w)(() => this.getUpdateStream$(e)),
                (0, ht.K)(() => (0, T.of)(void 0)),
                (0, Ht.h)(void 0)
              );
            }
            getUpdateStream$(e) {
              const { contractAddress: i, tokens: o } = e,
                c = this.earnStrategiesBlockchainService
                  .fetchTotalSupply(i)
                  .pipe((0, N.q)(1), (0, $.d)({ refCount: !0, bufferSize: 1 })),
                l = c.pipe(
                  (0, G.b)((g) => {
                    this.tradingStrategiesStore.update(e.id, {
                      totalSupply: g,
                    });
                  })
                ),
                d = this.earnStrategiesBlockchainService
                  .fetchAccountBalance(i)
                  .pipe((0, N.q)(1), (0, $.d)({ refCount: !0, bufferSize: 1 })),
                u = d.pipe(
                  (0, G.b)((g) => {
                    this.tradingStrategiesStore.update(e.id, { balance: g });
                  })
                ),
                f = (0, Te.D)({
                  firstTokenInPool:
                    this.earnStrategiesBlockchainService.fetchTokenBalance(
                      i,
                      o.first.token.address
                    ),
                  secondTokenInPool:
                    this.earnStrategiesBlockchainService.fetchTokenBalance(
                      i,
                      o.second.token.address
                    ),
                  userBalance: d,
                  totalSupply: c,
                }).pipe(
                  (0, G.b)(
                    ({
                      firstTokenInPool: g,
                      secondTokenInPool: P,
                      userBalance: D,
                      totalSupply: j,
                    }) => {
                      const C = g.mul(D).div(j),
                        y = P.mul(D).div(j),
                        v = j.mul(1e3).div(g.add(P)),
                        Y = g.div(v).mul(998).gt(D) ? D : g.div(v).mul(998),
                        Xt = P.div(v).mul(998).gt(D) ? D : P.div(v).mul(998);
                      this.tradingStrategiesStore.update(e.id, (Lt) =>
                        Object.assign(Object.assign({}, Lt), {
                          tokens: {
                            first: Object.assign(
                              Object.assign({}, Lt.tokens.first),
                              { amount: g, userAmount: C, userAmountLP: Y }
                            ),
                            second: Object.assign(
                              Object.assign({}, Lt.tokens.second),
                              { amount: P, userAmount: y, userAmountLP: Xt }
                            ),
                          },
                        })
                      );
                    }
                  )
                );
              return (0, W.a)([l, u, f]);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵinject(We),
                t.ɵɵinject(Zt),
                t.ɵɵinject(Ot.c),
                t.ɵɵinject(le.I),
                t.ɵɵinject(Ut.x),
                t.ɵɵinject(ct.r)
              );
            }),
            (n.ɵprov = t.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        wn = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({ imports: [s.ez, bt.m, w.WD] })),
            n
          );
        })();
      var Xi = r(42891),
        Nt = r(57726);
      const qi = [
          { title: "tradingStrategies.pool" },
          { title: "stakeCard.total-staked2" },
          { title: "stakeCard.your-stake" },
          { title: "opium.strike-price" },
          { title: "tradingStrategies.apr-1" },
          { title: "opium.performance" },
        ],
        to = {
          [ft.D.STAKING]: "Rebalancing",
          [ft.D.TRADING]: "Active",
          [ft.D.IDLE]: "Next rebalancing",
          [ft.D.NOT_INITIALIZED]: "NOT_INITIALIZED",
        };
      function Sn(n) {
        const a = (0, Nt.dN)(n),
          e = to[a.phase],
          i = (0, s.p6)(
            ((n) =>
              n.phase === ft.D.STAKING
                ? 1e3 * n.nextTradingPhaseTimestamp
                : n.phase === ft.D.TRADING
                ? 1e3 * n.tradingPhaseEnd
                : n.phase === ft.D.IDLE
                ? 1e3 * n.nextStakingPhaseTimestamp
                : 0)(a),
            "d MMM HH:mm",
            "en-US"
          );
        return {
          id: n.id,
          address: n.product.poolAddress,
          logoLink: n.data.logo,
          title: n.data.title,
          phaseTitle: e,
          phaseEndDate: i,
          stakingTokenSymbol: n.product.marginTitle,
          strikeTokenSymbol: n.product.referenceTitle,
          totalStaked: n.data.params.poolSize,
          yourStake: n.data.userStaked,
          strikePrice: n.product.inverseTrigger,
          APR: n.data.params.yieldToDateAnnualized,
          poolUtilization: +(10 * n.data.params.poolUtilization).toFixed(2),
        };
      }
      var no = r(80849),
        io = r(32388);
      const Ue = (n) => (n ? "rgba(108, 134, 173, 0.55)" : "#9BAFCD"),
        yn = (n) => (n ? "#202835" : "#B2C3DD"),
        Pn = Yt[St.firstToken].mainColor,
        kn = Yt[St.secondToken].mainColor;
      function so(n) {
        return function (a, e, i) {
          (e.fontColor = ((n) => (n ? "#FBFBFB" : "#222222"))(n)),
            this.chart.render();
        };
      }
      function co(n) {
        return function (a, e, i) {
          const o = i.chart,
            c = o.isDatasetVisible(0),
            l = o.isDatasetVisible(1),
            d = e.datasetIndex,
            u = 0 === d ? c : l;
          (e.fontColor = Re(u, n)),
            (e.strokeStyle = Ve(d, u, n)),
            this.chart.render();
        };
      }
      const Re = (n, a) => (n ? "#6C86AD" : Ue(a)),
        Ve = (n, a, e) => (0 === n ? (a ? Pn : Ue(e)) : a ? kn : Ue(e));
      var lo = r(68435);
      let po = (() => {
          class n {
            constructor(e, i) {
              (this.globalSettingsQuery = e),
                (this.opiumPoolChartsService = i),
                (this.poolData$ = new no.t(1)),
                (this.performanceChartData$ = this.poolData$.pipe(
                  (0, _.w)((o) =>
                    this.opiumPoolChartsService.fetchPerformanceChartData(
                      o.product.poolAddress
                    )
                  ),
                  (0, m.U)((o) =>
                    this.opiumPoolChartsService.buildPerformanceChartData(o)
                  ),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.chartPlugins = [
                  (0, io.S)({ drawHorizontal: !1 }),
                  {
                    id: "paddingBelowLegends",
                    beforeInit: function (o) {
                      const c = o.legend.fit;
                      o.legend.fit = function (...l) {
                        return c.apply(o.legend, l), (this.height += 20);
                      };
                    },
                  },
                ]),
                (this.chartOptions$ =
                  this.globalSettingsQuery.isLightTheme$.pipe(
                    (0, m.U)((o) =>
                      (function ro(n) {
                        const a = !n.isLightTheme,
                          e = a ? "#37445A" : "#adb9cb",
                          i = "#6C86AD",
                          o = { color: e, borderColor: e, tickColor: e };
                        return {
                          animation: { duration: 300 },
                          responsive: !0,
                          maintainAspectRatio: !1,
                          interaction: { intersect: !1, mode: "index" },
                          scales: {
                            x: Object.assign(
                              Object.assign(
                                { offset: !1, display: !0 },
                                n.isTimeScale
                                  ? { type: "time", time: { stepSize: 1 } }
                                  : {}
                              ),
                              {
                                ticks: {
                                  padding: -35,
                                  source: "auto",
                                  color: i,
                                  font: {
                                    family: "",
                                    style: "normal",
                                    weight: null,
                                    lineHeight: 10,
                                    size: 10,
                                  },
                                },
                                grid: Object.assign(Object.assign({}, o), {
                                  drawOnChartArea: !1,
                                }),
                              }
                            ),
                            y: {
                              display: !0,
                              type: "linear",
                              ticks: {
                                autoSkip: !1,
                                color: i,
                                font: {
                                  family: "",
                                  style: "normal",
                                  weight: null,
                                  lineHeight: 10,
                                  size: 10,
                                },
                              },
                              grid: Object.assign(Object.assign({}, o), {
                                borderDash: [3, 3],
                                drawBorder: !1,
                                drawTicks: !1,
                              }),
                            },
                          },
                          plugins: {
                            legend: {
                              display: !0,
                              align: "end",
                              position: "top",
                              labels: {
                                padding: 18,
                                usePointStyle: !0,
                                pointStyle: "circle",
                                color: i,
                                generateLabels(c) {
                                  const l = c.isDatasetVisible(0),
                                    d = c.isDatasetVisible(1);
                                  return [
                                    {
                                      text: "Pool performance",
                                      datasetIndex: 0,
                                      fillStyle: l ? Pn : yn(a),
                                      strokeStyle: Ve(0, l, a),
                                      fontColor: Re(l, a),
                                    },
                                    {
                                      text: "Return since inception",
                                      datasetIndex: 1,
                                      fillStyle: d ? kn : yn(a),
                                      strokeStyle: Ve(1, d, a),
                                      fontColor: Re(d, a),
                                    },
                                  ];
                                },
                              },
                              onHover: so(a),
                              onLeave: co(a),
                            },
                            tooltip: {
                              mode: "index",
                              usePointStyle: !0,
                              bodyFont: {
                                family: "",
                                style: "normal",
                                weight: "normal",
                                lineHeight: 0,
                                size: 12,
                              },
                              bodyColor: n.isLightTheme ? "#000" : "#FFF",
                              backgroundColor: n.isLightTheme
                                ? "#FFF"
                                : "#324054",
                              bodySpacing: 10,
                              padding: 10,
                              callbacks: {
                                title: () => "",
                                label: function (c) {
                                  return (
                                    "  " +
                                    c.dataset.label +
                                    ":  " +
                                    c.formattedValue +
                                    "%"
                                  );
                                },
                                labelPointStyle: () => ({
                                  pointStyle: "circle",
                                  rotation: 0,
                                }),
                              },
                            },
                          },
                        };
                      })({ isTimeScale: !0, isLightTheme: o })
                    )
                  ));
            }
            set pool(e) {
              this.poolData$.next(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵdirectiveInject(lo.J),
                t.ɵɵdirectiveInject(De)
              );
            }),
            (n.ɵcmp = t.ɵɵdefineComponent({
              type: n,
              selectors: [["opium-pool-charts"]],
              inputs: { pool: "pool" },
              features: [t.ɵɵProvidersFeature([xt.a3])],
              decls: 4,
              vars: 7,
              consts: [
                [1, "opium-chart"],
                ["baseChart", "", 3, "data", "options", "plugins"],
              ],
              template: function (e, i) {
                1 & e &&
                  (t.ɵɵelementStart(0, "div", 0),
                  t.ɵɵelement(1, "canvas", 1),
                  t.ɵɵpipe(2, "async"),
                  t.ɵɵpipe(3, "async"),
                  t.ɵɵelementEnd()),
                  2 & e &&
                    (t.ɵɵadvance(1),
                    t.ɵɵproperty(
                      "data",
                      t.ɵɵpipeBind1(2, 3, i.performanceChartData$)
                    )("options", t.ɵɵpipeBind1(3, 5, i.chartOptions$))(
                      "plugins",
                      i.chartPlugins
                    ));
              },
              dependencies: [tt.jh, s.Ov],
              styles: [
                ".charts-tabs[_ngcontent-%COMP%]{font-size:16px}.charts-tabs[_ngcontent-%COMP%]     tui-underline{border-bottom:2px solid var(--1inch-common-border-01);box-shadow:none!important}.charts-tabs[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{padding-bottom:10px}.opium-chart[_ngcontent-%COMP%]{height:300px;width:100%;margin-top:-32px}@media (max-width: 720px){.opium-chart[_ngcontent-%COMP%]{margin-top:0}}",
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        On = (() => {
          class n {
            constructor(e) {
              this.dateTimeFormat = e;
            }
            transform({ from: e, to: i, separator: o = "-" }, c = !1, l = !0) {
              const d = new Date(e),
                u = new Date(i),
                f = d.getDay(),
                g = u.getDay();
              return `${this.dateTimeFormat.transform(d.getTime(), !1)} ${o} ${
                c && f === g
                  ? this.dateTimeFormat.transform(u.getTime(), l, "HH:mm")
                  : this.dateTimeFormat.transform(u.getTime(), l)
              }`;
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.ɵɵdirectiveInject(E.X, 16));
            }),
            (n.ɵpipe = t.ɵɵdefinePipe({
              name: "dateTimePeriodFormat",
              type: n,
              pure: !0,
            })),
            n
          );
        })(),
        uo = (() => {
          class n {
            transform(e) {
              return (0, zt.H)(0, 5e3).pipe(
                (0, R.O)(null),
                (0, m.U)(() => me(e))
              );
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵpipe = t.ɵɵdefinePipe({
              name: "opiumPoolPhase",
              type: n,
              pure: !0,
            })),
            n
          );
        })();
      const me = (n) => {
        const { startTimestamp: a, endTimestamp: e } = n,
          i = (100 * (Date.now() - a)) / (e - a);
        return Math.min(Math.max(i, 0), 100);
      };
      function mo(n, a) {
        1 & n && t.ɵɵelementContainer(0);
      }
      function go(n, a) {
        1 & n && t.ɵɵelementContainer(0);
      }
      const ho = function (n, a) {
        return { from: n, to: a };
      };
      function _o(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 3)(1, "div", 4),
            t.ɵɵnamespaceSVG(),
            t.ɵɵelementStart(2, "svg", 5),
            t.ɵɵelement(3, "use"),
            t.ɵɵelementEnd(),
            t.ɵɵnamespaceHTML(),
            t.ɵɵelementStart(4, "span", 6),
            t.ɵɵtext(5),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(6, "div", 7)(7, "span"),
            t.ɵɵtext(8),
            t.ɵɵpipe(9, "dateTimePeriodFormat"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(10, "div", 8)(11, "span", 9),
            t.ɵɵtemplate(12, mo, 1, 0, "ng-container", 10),
            t.ɵɵtext(13),
            t.ɵɵpipe(14, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(15, "span", 9),
            t.ɵɵtemplate(16, go, 1, 0, "ng-container", 10),
            t.ɵɵtext(17),
            t.ɵɵpipe(18, "transloco"),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(19, "div", 11),
            t.ɵɵelement(20, "div", 12),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext(),
            o = t.ɵɵreference(6),
            c = t.ɵɵreference(4);
          t.ɵɵclassProp("finished", 100 === e)(
            "in-progress",
            e > 0 && 100 !== e
          ),
            t.ɵɵadvance(3),
            t.ɵɵattribute("href", i.icon, null, "xlink"),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(i.title),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind1(
                9,
                13,
                t.ɵɵpureFunction2(19, ho, i.startTimestamp, i.endTimestamp)
              )
            ),
            t.ɵɵadvance(4),
            t.ɵɵproperty("ngTemplateOutlet", i.directStake ? o : c),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(" ", t.ɵɵpipeBind1(14, 15, "dao.stake"), " "),
            t.ɵɵadvance(3),
            t.ɵɵproperty("ngTemplateOutlet", i.directWithdraw ? o : c),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(18, 17, "tradingStrategies.withdraw"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵstyleProp("width", e + "%");
        }
      }
      function vo(n, a) {
        1 & n &&
          (t.ɵɵnamespaceSVG(),
          t.ɵɵelementStart(0, "svg", 13),
          t.ɵɵelement(1, "use", 14),
          t.ɵɵelementEnd());
      }
      function Co(n, a) {
        1 & n &&
          (t.ɵɵnamespaceSVG(),
          t.ɵɵelementStart(0, "svg", 15),
          t.ɵɵelement(1, "use", 16),
          t.ɵɵelementEnd());
      }
      const fo = function (n, a) {
        return { startTimestamp: n, endTimestamp: a };
      };
      let xo = (() => {
        class n {
          constructor() {
            (this.directStake = !1), (this.directWithdraw = !1);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-pool-phase"]],
            inputs: {
              title: "title",
              icon: "icon",
              startTimestamp: "startTimestamp",
              endTimestamp: "endTimestamp",
              directStake: "directStake",
              directWithdraw: "directWithdraw",
            },
            features: [t.ɵɵProvidersFeature([xt.a3])],
            decls: 7,
            vars: 8,
            consts: [
              ["class", "wrapper", 3, "finished", "in-progress", 4, "tuiLet"],
              ["clockIcon", ""],
              ["checkIcon", ""],
              [1, "wrapper"],
              [1, "header"],
              ["width", "24", "height", "24", 1, "icon"],
              [1, "title"],
              [1, "info"],
              [1, "actions"],
              [1, "action"],
              [4, "ngTemplateOutlet"],
              [1, "progress-bar"],
              [1, "progress-bar-inner"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/clock.svg#clock"],
              ["width", "18", "height", "18"],
              [0, "xlink", "href", "assets/images/icons/check.svg#check"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, _o, 21, 22, "div", 0),
                t.ɵɵpipe(1, "async"),
                t.ɵɵpipe(2, "opiumPoolPhase"),
                t.ɵɵtemplate(
                  3,
                  vo,
                  2,
                  0,
                  "ng-template",
                  null,
                  1,
                  t.ɵɵtemplateRefExtractor
                ),
                t.ɵɵtemplate(
                  5,
                  Co,
                  2,
                  0,
                  "ng-template",
                  null,
                  2,
                  t.ɵɵtemplateRefExtractor
                )),
                2 & e &&
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(
                      1,
                      1,
                      t.ɵɵpipeBind1(
                        2,
                        3,
                        t.ɵɵpureFunction2(
                          5,
                          fo,
                          i.startTimestamp,
                          i.endTimestamp
                        )
                      )
                    )
                  );
            },
            dependencies: [s.tP, w.Ls, x.Ot, s.Ov, On, uo],
            styles: [
              ".wrapper.in-progress[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--1inch-text-03)}.wrapper.in-progress[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:var(--1inch-common-border-01)}.wrapper.in-progress[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]{background-color:var(--1inch-common-border-01)}.wrapper.finished[_ngcontent-%COMP%]   .progress-bar-inner[_ngcontent-%COMP%]{background-color:var(--1inch-warning-text-03)}.header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px}.title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.icon[_ngcontent-%COMP%]{margin-right:8px;color:var(--1inch-border-04)}.info[_ngcontent-%COMP%]{font-size:13px;line-height:18px;color:var(--1inch__ui-02)}.progress-bar[_ngcontent-%COMP%]{height:4px;width:100%;background-color:var(--1inch-border-12);border-radius:2px;overflow:hidden;margin-top:16px;transition:transform 0s}.progress-bar-inner[_ngcontent-%COMP%]{width:0;height:4px;border-radius:2px;background-color:var(--1inch-border-04)}.actions[_ngcontent-%COMP%]{display:flex;margin-top:8px}.action[_ngcontent-%COMP%]{display:inline-flex;margin-right:12px;gap:6px}.action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}@media (max-width: 720px){.wrapper[_ngcontent-%COMP%]{padding-bottom:2px}.info[_ngcontent-%COMP%]{margin-left:32px}.progress-bar[_ngcontent-%COMP%]{transform:rotate(90deg) translate(-40px,10px);height:4px;width:45px;margin-bottom:-16px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Jt = r(80135),
        Tn = r(97093),
        bn = r(24960),
        Mn = r(78612),
        En = r(25541),
        In = r(92110),
        An = r(15927),
        ge = r(29889),
        he = r(86345);
      function wo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 21),
            t.ɵɵelement(1, "span", 22),
            t.ɵɵelementStart(2, "span", 5)(3, "span", 6),
            t.ɵɵelement(4, "token-amount", 7),
            t.ɵɵpipe(5, "toBigInt"),
            t.ɵɵpipe(6, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(7, "span", 8)(8, "token-amount", 7),
            t.ɵɵpipe(9, "toBigInt"),
            t.ɵɵpipe(10, "async"),
            t.ɵɵtext(11),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(4),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                5,
                5,
                t.ɵɵpipeBind1(6, 8, i.pendingStake$),
                i.poolToken.decimals
              )
            )("decimals", i.poolToken.decimals),
            t.ɵɵadvance(4),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                9,
                10,
                t.ɵɵpipeBind1(10, 13, i.pendingStakeTotal$),
                i.poolToken.decimals
              )
            )("decimals", i.poolToken.decimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.pool.product.marginTitle, " ");
        }
      }
      function So(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "transaction-cost", 25),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("txFeeAmount", e)(
              "gasPreview",
              t.ɵɵpipeBind1(2, 2, i.currentGasPricePreview$)
            );
        }
      }
      function yo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 23),
            t.ɵɵtemplate(1, So, 3, 4, "ng-container", 24),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.txCost$));
        }
      }
      function Po(n, a) {
        1 & n && t.ɵɵelement(0, "gas-price-widget", 27);
      }
      const ko = function () {
        return { contextId: "opium-stake", widgetId: "gas-price" };
      };
      function Oo(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵtemplate(1, Po, 1, 0, "gas-price-widget", 26),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(1),
            t.ɵɵproperty("isSettingWidgetVisible", t.ɵɵpureFunction0(1, ko)));
      }
      function To(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Oo, 2, 2, "ng-container", 0),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(2, 1, e.txCost$));
        }
      }
      const bo = function (n) {
        return { token: n };
      };
      function Mo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 33)(1, "p"),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(4, "p", 34),
            t.ɵɵelementStart(5, "p"),
            t.ɵɵtext(6),
            t.ɵɵpipe(7, "transloco"),
            t.ɵɵelementStart(8, "a", 35),
            t.ɵɵtext(9),
            t.ɵɵpipe(10, "transloco"),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4);
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind2(
                3,
                3,
                "opium.warn.stake-tooltip-1",
                t.ɵɵpureFunction1(10, bo, e.poolToken.symbol)
              )
            ),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1(
              "",
              t.ɵɵpipeBind1(7, 6, "opium.warn.stake-tooltip-3"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(10, 8, "learn-more"));
        }
      }
      const Eo = function (n, a) {
        return { amount: n, token: a };
      };
      function Io(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "alert", 30),
            t.ɵɵtemplate(
              1,
              Mo,
              11,
              12,
              "ng-template",
              null,
              31,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵtext(3),
            t.ɵɵpipe(4, "transloco"),
            t.ɵɵpipe(5, "async"),
            t.ɵɵelement(6, "tooltip", 32),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵreference(2),
            i = t.ɵɵnextContext(3);
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                4,
                3,
                "opium.warn.ethereum.stake-schedule-fee",
                t.ɵɵpureFunction2(
                  8,
                  Eo,
                  t.ɵɵpipeBind1(5, 6, i.depositReserveCoefficient$),
                  i.poolToken.symbol
                )
              ),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("tooltip", e);
        }
      }
      const Ao = function (n) {
        return { percent: n };
      };
      function Do(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "alert", 28),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelement(4, "token-amount", 7),
            t.ɵɵpipe(5, "toBigInt"),
            t.ɵɵpipe(6, "async"),
            t.ɵɵtext(7),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(8, Io, 7, 11, "alert", 29),
            t.ɵɵpipe(9, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                3,
                6,
                "opium.warn.ethereum.stake-fee-1",
                t.ɵɵpureFunction1(16, Ao, e.pool.product.withdrawalFee)
              ),
              ""
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                5,
                9,
                t.ɵɵpipeBind1(6, 12, i.amountMinusReserve$),
                i.poolToken.decimals
              )
            )("decimals", i.poolToken.decimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", i.poolToken.symbol, " "),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              !t.ɵɵpipeBind1(9, 14, i.isDirectStakingEnabled$)
            );
        }
      }
      const Bo = function (n) {
        return { poolToken: n };
      };
      function $o(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "alert", 37),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).ngIf;
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                2,
                "opium.warn.polygon.stake-schedule",
                t.ɵɵpureFunction1(5, Bo, e.pool.product.marginTitle)
              ),
              " "
            );
        }
      }
      function Lo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵtemplate(0, $o, 3, 7, "alert", 36), t.ɵɵpipe(1, "async")),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵproperty("ngIf", !t.ɵɵpipeBind1(1, 1, e.isDirectStakingEnabled$));
        }
      }
      function Wo(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 38),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(3, 1, "button.connect-wallet2"),
              " "
            ));
      }
      function jo(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 39),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(1),
            t.ɵɵproperty("disabled", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              "",
              t.ɵɵpipeBind1(3, 2, "navigation.staking"),
              " ..."
            ));
      }
      function Fo(n, a) {
        if (
          (1 & n && t.ɵɵelement(0, "source-token-approve-button", 41), 2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext(3);
          t.ɵɵproperty("customSpender", e)("sourceToken", i.poolToken);
        }
      }
      function Qo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Fo, 1, 2, "source-token-approve-button", 40),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.customSpender$));
        }
      }
      function Uo(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 42),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(1),
            t.ɵɵproperty("disabled", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind1(3, 2, "uni.button.enter-amount")
            ));
      }
      function Ro(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 43),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(1),
            t.ɵɵproperty("disabled", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind1(3, 2, "tradingStrategies.stake.not-enough-balance")
            ));
      }
      function Vo(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 44),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.stake());
            }),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        2 & n &&
          (t.ɵɵadvance(2),
          t.ɵɵtextInterpolate(t.ɵɵpipeBind1(3, 1, "dao.stake")));
      }
      function zo(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 45),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.stake());
            }),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        2 & n &&
          (t.ɵɵadvance(2),
          t.ɵɵtextInterpolate(t.ɵɵpipeBind1(3, 1, "opium.schedule-stake")));
      }
      function No(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "token-select-input", 1),
            t.ɵɵlistener("setMaxAmount", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext();
              return t.ɵɵresetView(o.setMaxAmount());
            }),
            t.ɵɵpipe(2, "async"),
            t.ɵɵpipe(3, "async"),
            t.ɵɵpipe(4, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(5, "div", 2)(6, "div", 3),
            t.ɵɵelement(7, "span", 4),
            t.ɵɵelementStart(8, "span", 5)(9, "span", 6),
            t.ɵɵelement(10, "token-amount", 7),
            t.ɵɵpipe(11, "toBigInt"),
            t.ɵɵpipe(12, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(13, "span", 8)(14, "token-amount", 7),
            t.ɵɵpipe(15, "toBigInt"),
            t.ɵɵpipe(16, "async"),
            t.ɵɵtext(17),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(18, wo, 12, 15, "div", 9),
            t.ɵɵpipe(19, "async"),
            t.ɵɵelementStart(20, "div", 10)(21, "span", 11),
            t.ɵɵtext(22),
            t.ɵɵpipe(23, "transloco"),
            t.ɵɵelement(24, "tooltip", 12),
            t.ɵɵpipe(25, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(26, "span", 5),
            t.ɵɵtext(27),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(28, "div", 13),
            t.ɵɵelement(29, "span", 14),
            t.ɵɵelementStart(30, "span", 5),
            t.ɵɵelement(31, "token-amount", 7),
            t.ɵɵpipe(32, "async"),
            t.ɵɵtext(33, " LP "),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(34, yo, 3, 3, "div", 15),
            t.ɵɵpipe(35, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(36, To, 3, 3, "ng-container", 0),
            t.ɵɵpipe(37, "async"),
            t.ɵɵtemplate(38, Do, 10, 18, "ng-container", 16),
            t.ɵɵpipe(39, "async"),
            t.ɵɵtemplate(
              40,
              Lo,
              2,
              3,
              "ng-template",
              null,
              17,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵelementContainerStart(42, 18),
            t.ɵɵpipe(43, "async"),
            t.ɵɵtemplate(44, Wo, 4, 3, "ng-container", 19),
            t.ɵɵtemplate(45, jo, 4, 4, "ng-container", 19),
            t.ɵɵtemplate(46, Qo, 3, 3, "ng-container", 19),
            t.ɵɵtemplate(47, Uo, 4, 4, "ng-container", 19),
            t.ɵɵtemplate(48, Ro, 4, 4, "ng-container", 19),
            t.ɵɵtemplate(49, Vo, 4, 3, "ng-container", 19),
            t.ɵɵtemplate(50, zo, 4, 3, "ng-container", 20),
            t.ɵɵelementContainerEnd()();
        }
        if (2 & n) {
          const e = a.ngIf,
            i = t.ɵɵreference(41),
            o = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("formControl", o.tokenAmountControl)(
              "token",
              o.poolToken
            )("tokenBalance", t.ɵɵpipeBind1(2, 30, o.tokenViewBalance$))(
              "showLock",
              !t.ɵɵpipeBind1(3, 32, o.isTokenApproved$)
            )("customTokenLinkString", t.ɵɵpipeBind1(4, 34, "field.amount"))(
              "tokenChangeable",
              !1
            )("showMaxButton", !1)("showPercentControl", !0),
            t.ɵɵadvance(9),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                11,
                36,
                t.ɵɵpipeBind1(12, 39, o.activeStake$),
                o.poolToken.decimals
              )
            )("decimals", o.poolToken.decimals),
            t.ɵɵadvance(4),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                15,
                41,
                t.ɵɵpipeBind1(16, 44, o.activeStakeTotal$),
                o.poolToken.decimals
              )
            )("decimals", o.poolToken.decimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.pool.product.marginTitle, " "),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              !t.ɵɵpipeBind1(19, 46, o.isDirectStakingEnabled$)
            ),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(23, 48, "opium.util-starts"),
              " "
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "tooltip",
              t.ɵɵpipeBind1(25, 50, "opium.util-starts-tooltip")
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.info.nextRebalancing, " "),
            t.ɵɵadvance(4),
            t.ɵɵproperty("value", t.ɵɵpipeBind1(32, 52, o.estimatedLPAmount$))(
              "decimals",
              18
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty(
              "ngIf",
              +t.ɵɵpipeBind1(35, 54, o.tokenViewBalance$) > 0
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "ngIf",
              +t.ɵɵpipeBind1(37, 56, o.tokenViewBalance$) > 0
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(39, 58, o.isEthereumMainnet$))(
              "ngIfElse",
              i
            ),
            t.ɵɵadvance(4),
            t.ɵɵproperty("ngSwitch", t.ɵɵpipeBind1(43, 60, o.formState$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "ngSwitchCase",
              o.OpiumStakeFormState.WalletIsNotConnected
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.OpiumStakeFormState.StakeInProgress),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.OpiumStakeFormState.NeedApprove),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.OpiumStakeFormState.EmptyAmount),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitchCase",
              o.OpiumStakeFormState.NotEnoughBalance
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", o.OpiumStakeFormState.Stake);
        }
      }
      let Ko = (() => {
          class n {
            constructor(e, i, o, c, l, d, u, f, g, P, D, j) {
              (this.activeConnectionQuery = e),
                (this.walletConnectionQuery = i),
                (this.opiumPoolsQuery = o),
                (this.opiumUserPoolsQuery = c),
                (this.tokenBalanceQuery = l),
                (this.opiumPoolActionsService = d),
                (this.inProgressTxService = u),
                (this.opiumPoolStakeService = f),
                (this.opiumPoolStakeFormService = g),
                (this.webAnalyticsService = P),
                (this.tokenPricesQuery = D),
                (this.txFeeService = j),
                (this.tokenAmountControl = new O.UntypedFormControl(1)),
                (this.amountValueChanges$ =
                  this.tokenAmountControl.valueChanges.pipe(
                    (0, m.U)((C) => +(C || 0)),
                    (0, R.O)(this.tokenAmountControl.value),
                    (0, st.x)()
                  )),
                (this.poolData$ = this.opiumPoolsQuery.currentPool$.pipe(
                  (0, H.BX)(),
                  (0, m.U)((C) => ({ pool: C, info: (0, Nt.us)(C) })),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.userPoolData$ =
                  this.opiumUserPoolsQuery.currentPoolUserData$),
                (this.isWalletConnected$ =
                  this.walletConnectionQuery.isWalletConnected$),
                (this.isEthereumMainnet$ =
                  this.activeConnectionQuery.isEthereumMainnet$),
                (this.isDirectStakingEnabled$ = (0, zt.H)(0, 2e3).pipe(
                  (0, R.O)(null),
                  (0, m.U)(() => this.opiumPoolsQuery.isDirectStakingEnabled),
                  (0, st.x)(),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.poolToken = this.opiumPoolsQuery.poolToken),
                (this.depositReserveCoefficient$ = this.poolData$.pipe(
                  (0, _.w)((C) =>
                    this.opiumPoolActionsService.getDepositReserveCoefficient(
                      C.pool.tokenAddress
                    )
                  ),
                  (0, m.U)((C) =>
                    (0, A.hK)((0, oe.formatUnits)(C, this.poolToken.decimals))
                  ),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.amountMinusReserve$ = (0, W.a)([
                  this.poolData$,
                  this.amountValueChanges$,
                ]).pipe(
                  (0, m.U)(([C, y]) =>
                    (0, A.hK)((y * C.pool.product.withdrawalFee) / 100)
                  ),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.tokenViewBalance$ = this.isWalletConnected$.pipe(
                  (0, _.w)((C) =>
                    C
                      ? this.tokenBalanceQuery.getViewBalance$(this.poolToken)
                      : (0, T.of)(null)
                  ),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.estimatedLPAmount$ = this.amountValueChanges$.pipe(
                  (0, _.w)(() =>
                    this.opiumPoolActionsService.estimateStakingLPAmount(
                      this.opiumPoolsQuery.poolAddress,
                      this.getTokenAmount(this.poolToken)
                    )
                  ),
                  (0, ht.K)(() => (0, T.of)("0")),
                  (0, R.O)("0"),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.depositSpenderData$ = this.isDirectStakingEnabled$.pipe(
                  (0, m.U)((C) => ({
                    spender: this.opiumPoolActionsService.getStakingSpender(
                      this.opiumPoolsQuery.poolAddress,
                      C
                    ),
                    isDirect: C,
                  })),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.customSpender$ = this.depositSpenderData$.pipe(
                  (0, st.x)(J.fS0),
                  (0, m.U)((C) => ({
                    address: C.spender,
                    asset: this.poolToken,
                    txType: "authorize",
                    txSubType: C.isDirect
                      ? q.E.opiumStakeApprove
                      : q.E.opiumStakeScheduleApprove,
                  }))
                )),
                (this.isTokenApproved$ =
                  this.opiumPoolStakeFormService.isStakingApproved(
                    this.amountValueChanges$
                  )),
                (this.formState$ =
                  this.opiumPoolStakeFormService.getOpiumStakeFormState(
                    this.amountValueChanges$
                  )),
                (this.activeStake$ = this.userPoolData$.pipe(
                  (0, m.U)((C) => (null == C ? void 0 : C.activeStake) || 0)
                )),
                (this.pendingStake$ = this.userPoolData$.pipe(
                  (0, m.U)((C) => (null == C ? void 0 : C.pendingStake) || 0)
                )),
                (this.activeStakeTotal$ = (0, W.a)([
                  this.isDirectStakingEnabled$,
                  this.amountValueChanges$,
                  this.activeStake$,
                ]).pipe((0, m.U)(([C, y, v]) => (C ? v + +y : v)))),
                (this.pendingStakeTotal$ = (0, W.a)([
                  this.isDirectStakingEnabled$,
                  this.amountValueChanges$,
                  this.pendingStake$,
                ]).pipe((0, m.U)(([C, y, v]) => (C ? v : v + +y)))),
                (this.txCost$ = this.formState$.pipe(
                  (0, _.w)((C) =>
                    C === ut.NeedApprove
                      ? this.opiumPoolStakeService.getApproveTxCost()
                      : this.opiumPoolStakeService.getStakeTxCost()
                  )
                )),
                (this.currentGasPricePreview$ = this.formState$.pipe(
                  (0, _.w)((C) =>
                    C === ut.NeedApprove
                      ? this.opiumPoolStakeService
                          .getApproveGasLimit()
                          .pipe(
                            (0, _.w)((y) =>
                              this.txFeeService.getGasFeePreview(y.toString())
                            )
                          )
                      : this.opiumPoolStakeService
                          .getStakeGasLimit()
                          .pipe(
                            (0, _.w)((y) =>
                              this.txFeeService.getGasFeePreview(y.toString())
                            )
                          )
                  )
                )),
                (this.currentNativeToken$ =
                  this.activeConnectionQuery.currentNativeToken$),
                (this.OpiumStakeFormState = ut),
                (this.TxHistoryItemType = q.E);
            }
            setMaxAmount() {
              const { poolToken: e } = this.opiumPoolsQuery,
                i = this.tokenBalanceQuery.getBalance(e);
              this.tokenAmountControl.setValue(
                (0, Ft.k3)({ decimals: e.decimals, balance: i.toString() })
              );
            }
            stake() {
              const {
                  poolToken: e,
                  poolAddress: i,
                  isDirectStakingEnabled: o,
                } = this.opiumPoolsQuery,
                c = this.getTokenAmount(e),
                d = (
                  o
                    ? this.opiumPoolActionsService.stake(i, c)
                    : this.opiumPoolActionsService.scheduleDeposit(i, c)
                ).pipe(
                  (0, G.b)((u) => {
                    this.inProgressTxService.trackTransaction({
                      txHash: u,
                      asset: i,
                      widgetId: "opium-stake",
                    }),
                      this.trackToGA(u, c);
                  }),
                  (0, N.q)(1)
                );
              (0, V.O)(d, "opiumPoolStake$");
            }
            getTokenAmount(e) {
              return (0, A.bl)(this.tokenAmountControl.value || 0, e.decimals);
            }
            trackToGA(e, i) {
              const o = this.opiumPoolsQuery.poolDetails;
              if (!o) return;
              let c = null;
              const l = (f) => f > 0 && 100 !== f;
              l(
                me({
                  startTimestamp: 1e3 * o.stakingPhaseStart,
                  endTimestamp: 1e3 * o.stakingPhaseEnd,
                })
              )
                ? (c = "active")
                : l(
                    me({
                      startTimestamp: 1e3 * o.stakingPhaseEnd,
                      endTimestamp: 1e3 * o.tradingPhaseEnd,
                    })
                  )
                ? (c = "rebalancing")
                : l(
                    me({
                      startTimestamp: 1e3 * o.tradingPhaseEnd,
                      endTimestamp: 1e3 * (o.nextStakingPhaseTimestamp - 1),
                    })
                  ) && (c = "pending");
              const d = this.tokenPricesQuery.getUsdPrice(
                  this.poolToken.address
                ),
                u = (0, A.kg)(i.toString(), this.poolToken.decimals);
              this.webAnalyticsService.trackViaDataLayer("stake1inch_opium", {
                chainId: this.activeConnectionQuery.currentChainId,
                walletTypeId:
                  this.walletConnectionQuery.connectedWalletTypeForAnalytics,
                walletAddress: "/" + this.walletConnectionQuery.walletAddress,
                stakingStage: c,
                assetAmount: u,
                usdAsset: "" + d * +u,
                txHash: "/" + e,
              });
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(
                t.ɵɵdirectiveInject(dt.r),
                t.ɵɵdirectiveInject(ct.r),
                t.ɵɵdirectiveInject(mt.q),
                t.ɵɵdirectiveInject(Qt.q),
                t.ɵɵdirectiveInject(Ft.n4),
                t.ɵɵdirectiveInject(Mt),
                t.ɵɵdirectiveInject(Kt.Y),
                t.ɵɵdirectiveInject(we),
                t.ɵɵdirectiveInject(Xe),
                t.ɵɵdirectiveInject(je.y),
                t.ɵɵdirectiveInject(ie.u),
                t.ɵɵdirectiveInject(Tn.V)
              );
            }),
            (n.ɵcmp = t.ɵɵdefineComponent({
              type: n,
              selectors: [["opium-pool-stake"]],
              features: [t.ɵɵProvidersFeature([xt.a3])],
              decls: 2,
              vars: 3,
              consts: [
                [4, "ngIf"],
                [
                  "data-id",
                  "opium-stake.token-select",
                  3,
                  "formControl",
                  "token",
                  "tokenBalance",
                  "showLock",
                  "customTokenLinkString",
                  "tokenChangeable",
                  "showMaxButton",
                  "showPercentControl",
                  "setMaxAmount",
                ],
                ["data-id", "opium-stake.info", 1, "stake-info"],
                ["data-id", "opium-stake.info.your-active-stake"],
                ["transloco", "opium.u-active-stake", 1, "param-label"],
                [1, "param-value"],
                [1, "text-gray"],
                [3, "value", "decimals"],
                [1, "value-arrow"],
                ["data-id", "opium-stake.info.your-pending-stake", 4, "ngIf"],
                ["data-id", "opium-stake.info.utilization-starts"],
                [1, "param-label"],
                [1, "info-tooltip", 3, "tooltip"],
                ["data-id", "opium-stake.info.you-receive"],
                ["transloco", "you-receive2", 1, "param-label"],
                ["data-id", "opium-stake.info.transaction-cost", 4, "ngIf"],
                [4, "ngIf", "ngIfElse"],
                ["polygonWarning", ""],
                [3, "ngSwitch"],
                [4, "ngSwitchCase"],
                [4, "ngSwitchDefault"],
                ["data-id", "opium-stake.info.your-pending-stake"],
                ["transloco", "opium.u-pending-stake", 1, "param-label"],
                ["data-id", "opium-stake.info.transaction-cost"],
                [4, "tuiLet"],
                ["contextId", "opium-stake", 3, "txFeeAmount", "gasPreview"],
                ["class", "gas-price-widget", 4, "isSettingWidgetVisible"],
                [1, "gas-price-widget"],
                ["type", "warning", 1, "info-banner", 3, "hideCloseButton"],
                [
                  "type",
                  "notification",
                  "class",
                  "info-banner",
                  3,
                  "hideCloseButton",
                  4,
                  "ngIf",
                ],
                [
                  "type",
                  "notification",
                  1,
                  "info-banner",
                  3,
                  "hideCloseButton",
                ],
                ["scheduleFeeTooltip", ""],
                ["iconColor", "themeable", 3, "tooltip"],
                [1, "schedule-fee-tooltip"],
                ["transloco", "opium.warn.stake-tooltip-2"],
                [
                  "href",
                  "https://help.1inch.io/en/articles/6162115-what-is-1inch-turbo-and-how-does-it-work",
                  "target",
                  "_blank",
                ],
                [
                  "type",
                  "notification",
                  "class",
                  "info-banner",
                  "data-id",
                  "opium-stake.stake-schedule-banner",
                  3,
                  "hideCloseButton",
                  4,
                  "ngIf",
                ],
                [
                  "type",
                  "notification",
                  "data-id",
                  "opium-stake.stake-schedule-banner",
                  1,
                  "info-banner",
                  3,
                  "hideCloseButton",
                ],
                [
                  "walletConnect",
                  "",
                  "color",
                  "light-blue",
                  "data-id",
                  "opium-stake.connect-wallet",
                ],
                [
                  "color",
                  "blue",
                  "data-id",
                  "opium-stake-button.loading",
                  1,
                  "action-button",
                  3,
                  "disabled",
                ],
                [
                  "class",
                  "action-button",
                  "widgetId",
                  "opium-stake-approve",
                  "data-id",
                  "opium-stake-button.give-permission",
                  3,
                  "customSpender",
                  "sourceToken",
                  4,
                  "tuiLet",
                ],
                [
                  "widgetId",
                  "opium-stake-approve",
                  "data-id",
                  "opium-stake-button.give-permission",
                  1,
                  "action-button",
                  3,
                  "customSpender",
                  "sourceToken",
                ],
                [
                  "color",
                  "blue",
                  "data-id",
                  "opium-stake-button.enter-amount",
                  1,
                  "action-button",
                  3,
                  "disabled",
                ],
                [
                  "color",
                  "blue",
                  "data-id",
                  "opium-stake-button.not-enough-balance",
                  1,
                  "action-button",
                  3,
                  "disabled",
                ],
                [
                  "color",
                  "blue",
                  "data-id",
                  "opium-stake-button.stake",
                  1,
                  "action-button",
                  3,
                  "click",
                ],
                [
                  "color",
                  "blue",
                  "data-id",
                  "opium-stake-button.schedule-stake",
                  1,
                  "action-button",
                  3,
                  "click",
                ],
              ],
              template: function (e, i) {
                1 & e &&
                  (t.ɵɵtemplate(0, No, 51, 62, "ng-container", 0),
                  t.ɵɵpipe(1, "async")),
                  2 & e &&
                    t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(1, 1, i.poolData$));
              },
              dependencies: [
                x.KI,
                s.O5,
                s.RF,
                s.n9,
                s.ED,
                Vt.w,
                de.Y,
                w.Ls,
                O.NgControlStatus,
                O.FormControlDirective,
                Bt.q,
                bn.b,
                Mn.M,
                Jt.K,
                En.o,
                In.z,
                An.$,
                ge.O,
                x.Ot,
                s.Ov,
                he.M,
              ],
              styles: [
                "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:100%;align-items:start;text-align:start;color:var(--1inch__ui-01)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.stake-info[_ngcontent-%COMP%]{width:100%;font-size:14px;margin-top:16px}.stake-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;height:16px;flex-direction:row;justify-content:space-between;margin-bottom:10px}.stake-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.stake-info[_ngcontent-%COMP%]   .param-label[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.action-button[_ngcontent-%COMP%]{width:100%}.info-banner[_ngcontent-%COMP%] ~ .info-banner[_ngcontent-%COMP%]{margin-top:0}.value-arrow[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:-2px 4px 1px;overflow:hidden;height:16px}.value-arrow[_ngcontent-%COMP%]:after{border:none;content:url(/assets/images/icons/arrow-right-3.svg);height:16px;width:16px}.stake-description[_ngcontent-%COMP%]{border-bottom:1px solid var(--1inch-border-01);font-size:14px;line-height:18px;margin-bottom:20px;padding-bottom:15px}.swap-settings[_ngcontent-%COMP%]{width:100%;margin:16px 0}.info-tooltip[_ngcontent-%COMP%]{margin-left:2px;margin-top:-1px}.schedule-fee-tooltip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}.info-banner[_ngcontent-%COMP%] + .info-banner[_ngcontent-%COMP%]{margin-top:-16px}",
              ],
              changeDetection: 0,
            })),
            n
          );
        })(),
        Ho = (() => {
          class n {
            constructor(e) {
              this.inProgressTxService = e;
            }
            transform(e, i) {
              return this.inProgressTxService
                .watchForTxStatus(e, i)
                .pipe((0, m.U)((o) => (o ? o.widgetId : null)));
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(t.ɵɵdirectiveInject(Kt.Y, 16));
            }),
            (n.ɵpipe = t.ɵɵdefinePipe({
              name: "isTxInProgress",
              type: n,
              pure: !0,
            })),
            n
          );
        })();
      const Go = function (n, a, e) {
        return { token: n, amount: a, date: e };
      };
      function Yo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "token-preview", 2),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementStart(3, "alert", 3),
            t.ɵɵtext(4),
            t.ɵɵpipe(5, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).tuiLet,
            i = t.ɵɵnextContext().ngIf,
            o = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("token", o.poolToken)(
              "title",
              t.ɵɵpipeBind1(2, 6, "field.amount")
            )("tokenAmount", ((null == e ? null : e.activeStake) || 0) + "")(
              "tokenRole",
              o.TokenRole.source
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                5,
                8,
                "opium.withdraw-already-schedule-warn",
                t.ɵɵpureFunction3(
                  11,
                  Go,
                  i.pool.product.marginTitle,
                  (null == e ? null : e.activeStake) || 0,
                  i.info.nextRebalancing
                )
              ),
              " "
            );
        }
      }
      function Zo(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "token-select-input", 13),
            t.ɵɵlistener("setMaxAmount", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(5);
              return t.ɵɵresetView(o.setMaxAmount());
            }),
            t.ɵɵpipe(1, "number"),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext(3).tuiLet,
            i = t.ɵɵnextContext(2);
          t.ɵɵproperty("formControl", i.tokenAmountControl)(
            "token",
            i.poolToken
          )(
            "tokenBalance",
            t.ɵɵpipeBind2(
              1,
              8,
              (null == e ? null : e.activeStake) || 0,
              "1.0-4"
            )
          )("showLock", !1)(
            "customTokenLinkString",
            t.ɵɵpipeBind1(2, 11, "field.amount")
          )("tokenChangeable", !1)("showMaxButton", !1)(
            "showPercentControl",
            !0
          );
        }
      }
      function Jo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelement(0, "token-preview", 2), t.ɵɵpipe(1, "transloco")),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(3).tuiLet,
            i = t.ɵɵnextContext(2);
          t.ɵɵproperty("token", i.poolToken)(
            "title",
            t.ɵɵpipeBind1(1, 4, "field.amount")
          )("tokenAmount", ((null == e ? null : e.activeStake) || 0) + "")(
            "tokenRole",
            i.TokenRole.source
          );
        }
      }
      function Xo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "div", 14),
            t.ɵɵelement(2, "span", 15),
            t.ɵɵelementStart(3, "span", 10)(4, "span", 16),
            t.ɵɵtext(5, "0"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(6, "span", 17)(7, "token-amount", 11),
            t.ɵɵpipe(8, "toBigInt"),
            t.ɵɵtext(9),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(10, "div", 18)(11, "span", 19),
            t.ɵɵtext(12),
            t.ɵɵpipe(13, "transloco"),
            t.ɵɵelement(14, "tooltip", 20),
            t.ɵɵpipe(15, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(16, "span", 10),
            t.ɵɵtext(17),
            t.ɵɵelementEnd()(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4).ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(7),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(8, 6, e.pool.data.userStaked, i.poolToken.decimals)
            )("decimals", i.poolToken.decimals),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(" ", e.pool.product.marginTitle, " "),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(13, 9, "opium.withdraw-release"),
              " "
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "tooltip",
              t.ɵɵpipeBind1(15, 11, "opium.withdraw-release-tooltip")
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.info.nextRebalancing, " ");
        }
      }
      function qo(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 21),
            t.ɵɵelement(1, "span", 22),
            t.ɵɵelementStart(2, "span", 10)(3, "span", 16),
            t.ɵɵtext(4),
            t.ɵɵelementEnd(),
            t.ɵɵtext(5, "\xa0 "),
            t.ɵɵelement(6, "token-amount", 11),
            t.ɵɵpipe(7, "toBigInt"),
            t.ɵɵpipe(8, "async"),
            t.ɵɵtext(9),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4).ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1("", e.pool.product.withdrawalFee, "%"),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                7,
                4,
                t.ɵɵpipeBind1(8, 7, i.withdrawalFeeValue$),
                i.poolToken.decimals
              )
            )("decimals", i.poolToken.decimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.pool.product.marginTitle, " ");
        }
      }
      function ta(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "transaction-cost", 24),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext(6);
          t.ɵɵadvance(1),
            t.ɵɵproperty("txFeeAmount", e)(
              "gasPreview",
              t.ɵɵpipeBind1(2, 2, i.currentGasPricePreview$)
            );
        }
      }
      function ea(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 23),
            t.ɵɵtemplate(1, ta, 3, 4, "ng-container", 1),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(5);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.txCost$));
        }
      }
      function na(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Zo, 3, 13, "token-select-input", 4),
            t.ɵɵtemplate(2, Jo, 2, 6, "token-preview", 5),
            t.ɵɵelementStart(3, "div", 6),
            t.ɵɵtemplate(4, Xo, 18, 13, "ng-container", 0),
            t.ɵɵtemplate(5, qo, 10, 9, "div", 7),
            t.ɵɵelementStart(6, "div", 8),
            t.ɵɵelement(7, "span", 9),
            t.ɵɵelementStart(8, "span", 10),
            t.ɵɵelement(9, "token-amount", 11),
            t.ɵɵpipe(10, "toBigInt"),
            t.ɵɵpipe(11, "async"),
            t.ɵɵtext(12),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(13, ea, 3, 3, "div", 12),
            t.ɵɵpipe(14, "async"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext(2).ngIf,
            o = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !e),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", !e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", i.pool.product.withdrawalFee),
            t.ɵɵadvance(4),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(
                10,
                8,
                t.ɵɵpipeBind1(11, 11, o.youReceiveValue$),
                o.poolToken.decimals
              )
            )("decimals", o.poolToken.decimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", i.pool.product.marginTitle, " "),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(14, 13, o.isWalletConnected$));
        }
      }
      function ia(n, a) {
        1 & n && t.ɵɵelement(0, "gas-price-widget", 26);
      }
      const oa = function () {
        return { contextId: "opium-withdraw", widgetId: "gas-price" };
      };
      function aa(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵtemplate(1, ia, 1, 0, "gas-price-widget", 25),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(1),
            t.ɵɵproperty("isSettingWidgetVisible", t.ɵɵpureFunction0(1, oa)));
      }
      function ra(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, aa, 2, 2, "ng-container", 0),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4);
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(2, 1, e.txCost$));
        }
      }
      const Dn = function (n) {
        return { phase: n };
      };
      function sa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 32)(1, "p"),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵpipe(4, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(5, "p", 33),
            t.ɵɵelementStart(6, "p"),
            t.ɵɵtext(7),
            t.ɵɵpipe(8, "transloco"),
            t.ɵɵelementStart(9, "a", 34),
            t.ɵɵtext(10),
            t.ɵɵpipe(11, "transloco"),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).tuiLet;
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(
              t.ɵɵpipeBind2(
                3,
                3,
                "opium.warn.withdraw-tooltip-1-new",
                t.ɵɵpureFunction1(12, Dn, t.ɵɵpipeBind1(4, 6, e))
              )
            ),
            t.ɵɵadvance(5),
            t.ɵɵtextInterpolate1(
              "",
              t.ɵɵpipeBind1(8, 8, "opium.warn.withdraw-tooltip-3"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(11, 10, "learn-more"));
        }
      }
      const ca = function (n) {
        return { amount: n };
      };
      function la(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "alert", 29),
            t.ɵɵtemplate(
              2,
              sa,
              12,
              14,
              "ng-template",
              null,
              30,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵtext(4),
            t.ɵɵpipe(5, "transloco"),
            t.ɵɵpipe(6, "async"),
            t.ɵɵelement(7, "tooltip", 31),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵreference(3),
            i = t.ɵɵnextContext(6);
          t.ɵɵadvance(1),
            t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                5,
                3,
                "opium.warn.ethereum.withdraw-schedule-fee",
                t.ɵɵpureFunction1(
                  8,
                  ca,
                  t.ɵɵpipeBind1(6, 6, i.withdrawReserveCoefficient$)
                )
              ),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("tooltip", e);
        }
      }
      function pa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "alert", 35),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵproperty("hideCloseButton", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                2,
                "opium.warn.polygon.withdraw-schedule",
                t.ɵɵpureFunction1(7, Dn, t.ɵɵpipeBind1(3, 5, e))
              ),
              " "
            );
        }
      }
      function da(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, la, 8, 10, "ng-container", 27),
            t.ɵɵpipe(2, "async"),
            t.ɵɵtemplate(
              3,
              pa,
              4,
              9,
              "ng-template",
              null,
              28,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵreference(4),
            i = t.ɵɵnextContext(5);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(2, 2, i.isEthereumMainnet$))(
              "ngIfElse",
              e
            );
        }
      }
      function ua(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, da, 5, 4, "ng-container", 1),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4);
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "tuiLet",
              e.poolDetails.phase === e.OpiumPoolPhase.TRADING
                ? "opium.withdraw-schedule-warn.phase.active"
                : "opium.withdraw-schedule-warn.phase.pending"
            );
        }
      }
      function ma(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Yo, 6, 15, "ng-container", 0),
            t.ɵɵtemplate(2, na, 15, 15, "ng-container", 0),
            t.ɵɵtemplate(3, ra, 3, 3, "ng-container", 0),
            t.ɵɵpipe(4, "async"),
            t.ɵɵtemplate(5, ua, 2, 1, "ng-container", 0),
            t.ɵɵpipe(6, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !(null == e || !e.isWithdrawScheduled)),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !(null != e && e.isWithdrawScheduled)),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(4, 4, i.isWalletConnected$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "ngIf",
              !t.ɵɵpipeBind1(6, 6, i.isDirectWithdrawEnabled$)
            );
        }
      }
      function ga(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ma, 7, 8, "ng-container", 1),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "tuiLet",
              t.ɵɵpipeBind1(2, 1, e.isDirectWithdrawEnabled$)
            );
        }
      }
      function ha(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "simple-button", 37),
            t.ɵɵtext(1),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext(2);
          t.ɵɵproperty("disabled", !0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(" ", i.inProgressTxWidgetText[e], " ");
        }
      }
      function _a(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 40),
          t.ɵɵtext(2),
          t.ɵɵpipe(3, "transloco"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n &&
            (t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(3, 1, "button.connect-wallet2"),
              " "
            ));
      }
      function va(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 41),
          t.ɵɵtext(2, "Loading ..."),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function Ca(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 42),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(4);
              return t.ɵɵresetView(o.withdraw());
            }),
            t.ɵɵtext(2, "Withdraw"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
      }
      function fa(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 43),
          t.ɵɵtext(2, "Not enough balance"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function xa(n, a) {
        1 & n &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "simple-button", 44),
          t.ɵɵtext(2, "Enter amount to withdraw"),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & n && (t.ɵɵadvance(1), t.ɵɵproperty("disabled", !0));
      }
      function wa(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 45),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(4);
              return t.ɵɵresetView(o.unscheduleWithdraw());
            }),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        2 & n &&
          (t.ɵɵadvance(2),
          t.ɵɵtextInterpolate(t.ɵɵpipeBind1(3, 1, "opium.cancel-withdraw")));
      }
      function Sa(n, a) {
        if (
          (1 & n && t.ɵɵelement(0, "source-token-approve-button", 47), 2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext(4).ngIf;
          t.ɵɵproperty("customSpender", e)("sourceToken", i.poolToken);
        }
      }
      function ya(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Sa, 1, 2, "source-token-approve-button", 46),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(4);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.customSpender$));
        }
      }
      function Pa(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "simple-button", 48),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(4);
              return t.ɵɵresetView(o.scheduleWithdraw());
            }),
            t.ɵɵtext(2, "Schedule withdraw"),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
      }
      function ka(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0)(1, 38),
            t.ɵɵpipe(2, "async"),
            t.ɵɵtemplate(3, _a, 4, 3, "ng-container", 39),
            t.ɵɵtemplate(4, va, 3, 1, "ng-container", 39),
            t.ɵɵtemplate(5, Ca, 3, 0, "ng-container", 39),
            t.ɵɵtemplate(6, fa, 3, 1, "ng-container", 39),
            t.ɵɵtemplate(7, xa, 3, 1, "ng-container", 39),
            t.ɵɵtemplate(8, wa, 4, 3, "ng-container", 39),
            t.ɵɵtemplate(9, ya, 3, 3, "ng-container", 39),
            t.ɵɵtemplate(10, Pa, 3, 0, "ng-container", 39),
            t.ɵɵelementContainerEnd()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitch", t.ɵɵpipeBind1(2, 9, e.withdrawalState$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "ngSwitchCase",
              e.OpiumWithdrawState.walletNotConnected
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", e.OpiumWithdrawState.loading),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitchCase",
              e.OpiumWithdrawState.directWithdrawAvailable
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", e.OpiumWithdrawState.notEnoughBalance),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", e.OpiumWithdrawState.enterAmount),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitchCase",
              e.OpiumWithdrawState.withdrawScheduled
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngSwitchCase",
              e.OpiumWithdrawState.needApproveForWithdraw
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngSwitchCase", e.OpiumWithdrawState.withdrawApproved);
        }
      }
      function Oa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ha, 2, 2, "simple-button", 36),
            t.ɵɵtemplate(2, ka, 11, 11, "ng-container", 0),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !e);
        }
      }
      function Ta(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ga, 3, 3, "ng-container", 1),
            t.ɵɵpipe(2, "async"),
            t.ɵɵtemplate(3, Oa, 3, 2, "ng-container", 1),
            t.ɵɵpipe(4, "async"),
            t.ɵɵpipe(5, "isTxInProgress"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.ngIf,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 2, i.currentPoolUserData$)),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "tuiLet",
              t.ɵɵpipeBind1(
                4,
                4,
                t.ɵɵpipeBind2(
                  5,
                  6,
                  e.pool.product.poolAddress,
                  i.inProgressTxWidgets
                )
              )
            );
        }
      }
      let ba = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f, g, P, D, j, C, y) {
            (this.activeConnectionQuery = e),
              (this.walletConnectionQuery = i),
              (this.contractAddressQuery = o),
              (this.opiumPoolsQuery = c),
              (this.opiumUserPoolsQuery = l),
              (this.opiumPoolActionsService = d),
              (this.inProgressTxService = u),
              (this.opiumPoolWithdrawFormService = f),
              (this.opiumPoolWithdrawTxEstimateService = g),
              (this.opiumScheduleCancelingService = P),
              (this.destroy$ = D),
              (this.webAnalyticsService = j),
              (this.tokenPricesQuery = C),
              (this.txFeeService = y),
              (this.tokenAmountControl = new O.UntypedFormControl(1)),
              (this.poolData$ = this.opiumPoolsQuery.currentPool$.pipe(
                (0, H.BX)(),
                (0, m.U)((v) => ({
                  pool: v,
                  info: (0, Nt.us)(v),
                  poolToken: {
                    address: v.product.poolAddress,
                    symbol: "OPIUM_POOL",
                    name: "OPIUM_POOL",
                    decimals: 18,
                    image: "",
                  },
                })),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.isEthereumMainnet$ =
                this.activeConnectionQuery.isEthereumMainnet$),
              (this.isPolygon$ = this.opiumPoolsQuery.isPolygon$),
              (this.poolDetails = this.opiumPoolsQuery.poolDetails),
              (this.currentPoolUserData$ =
                this.opiumUserPoolsQuery.currentPoolUserData$),
              (this.isDirectWithdrawEnabled$ = (0, zt.H)(0, 2e3).pipe(
                (0, R.O)(null),
                (0, m.U)(() => this.opiumPoolsQuery.isDirectWithdrawEnabled),
                (0, st.x)()
              )),
              (this.poolToken = this.opiumPoolsQuery.poolToken),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              (this.amountValueChanges$ =
                this.tokenAmountControl.valueChanges.pipe(
                  (0, m.U)((v) => +(v || 0)),
                  (0, R.O)(this.tokenAmountControl.value),
                  (0, st.x)()
                )),
              (this.withdrawReserveCoefficient$ = this.poolData$.pipe(
                (0, _.w)((v) =>
                  this.opiumPoolActionsService.getWithdrawReserveCoefficient(
                    v.pool.product.poolAddress
                  )
                ),
                (0, m.U)((v) => (0, A.hK)((0, oe.formatUnits)(v, 18))),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.withdrawalAmount$ = this.isDirectWithdrawEnabled$.pipe(
                (0, _.w)((v) =>
                  v
                    ? this.tokenAmountControl.valueChanges.pipe(
                        (0, R.O)(this.tokenAmountControl.value)
                      )
                    : this.currentPoolUserData$.pipe(
                        (0, m.U)(
                          (Y) => (null == Y ? void 0 : Y.activeStake) || 0
                        )
                      )
                )
              )),
              (this.youReceiveValue$ = this.withdrawalAmount$.pipe(
                (0, m.U)((v) => {
                  const { withdrawalFee: Y } = this.opiumPoolsQuery;
                  return +v - (+v * Y) / 100;
                })
              )),
              (this.withdrawalFeeValue$ = this.withdrawalAmount$.pipe(
                (0, m.U)((v) => {
                  const { withdrawalFee: Y } = this.opiumPoolsQuery;
                  return (+v * Y) / 100;
                })
              )),
              (this.isWithdrawScheduled$ =
                this.opiumUserPoolsQuery.isWithdrawScheduled$.pipe(
                  (0, R.O)(!0)
                )),
              (this.withdrawalState$ = this.opiumPoolWithdrawFormService
                .getOpiumWithdrawFormState(this.amountValueChanges$)
                .pipe((0, $.d)({ refCount: !0, bufferSize: 1 }))),
              (this.txCost$ = this.withdrawalState$.pipe(
                (0, _.w)((v) =>
                  v === lt.needApproveForWithdraw
                    ? this.opiumPoolWithdrawTxEstimateService.getApproveTxCost()
                    : this.opiumPoolWithdrawTxEstimateService.getWithdrawTxCost()
                ),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.currentGasPricePreview$ = this.withdrawalState$.pipe(
                (0, _.w)((v) =>
                  v === lt.needApproveForWithdraw
                    ? this.opiumPoolWithdrawTxEstimateService
                        .getApproveGasLimit()
                        .pipe(
                          (0, _.w)((Y) =>
                            this.txFeeService.getGasFeePreview(Y.toString())
                          )
                        )
                    : this.opiumPoolWithdrawTxEstimateService
                        .getWithdrawGasLimit()
                        .pipe(
                          (0, _.w)((Y) =>
                            this.txFeeService.getGasFeePreview(Y.toString())
                          )
                        )
                )
              )),
              (this.currentNativeToken$ =
                this.activeConnectionQuery.currentNativeToken$),
              (this.opiumWithdrawScheduler =
                this.contractAddressQuery.getContractAddress(
                  K.a4.opiumWithdrawScheduler
                )),
              (this.customSpender$ = this.isDirectWithdrawEnabled$.pipe(
                (0, st.x)(J.fS0),
                (0, m.U)((v) => ({
                  address: this.opiumWithdrawScheduler,
                  asset: this.poolToken,
                  txType: "authorize",
                  txSubType: v
                    ? q.E.approveOpiumWithdraw
                    : q.E.opiumWithdrawScheduleApprove,
                }))
              )),
              (this.inProgressTxWidgets = [
                "opium-schedule-withdraw",
                "opium-unschedule-withdraw",
                "opium-withdraw",
              ]),
              (this.inProgressTxWidgetText = {
                "opium-schedule-withdraw": "Withdraw scheduling ...",
                "opium-unschedule-withdraw": "Withdraw unscheduling ...",
                "opium-withdraw": "Withdraw in progress ...",
              }),
              (this.TxHistoryItemType = q.E),
              (this.OpiumWithdrawState = lt),
              (this.TokenRole = rn.q),
              (this.OpiumPoolPhase = ft.D);
          }
          setMaxAmount() {
            const e = this.poolData$.pipe(
              (0, N.q)(1),
              (0, G.b)(({ pool: i }) => {
                this.tokenAmountControl.setValue(i.data.userStaked);
              })
            );
            (0, V.O)(e, "setMaxAmount$");
          }
          scheduleWithdraw() {
            const {
                poolAddress: e,
                userStaked: i,
                poolToken: o,
              } = this.opiumPoolsQuery,
              c =
                i === this.tokenAmountControl.value
                  ? this.opiumPoolActionsService.getStakedAmount(e)
                  : Promise.resolve(
                      (0, A.bl)(this.tokenAmountControl.value, o.decimals)
                    ),
              l = (0, H.p4)(c).pipe(
                (0, _.w)((d) =>
                  this.trackTransaction(
                    e,
                    "opium-schedule-withdraw",
                    this.opiumPoolActionsService.scheduleWithdraw(e),
                    d
                  )
                ),
                (0, N.q)(1)
              );
            (0, V.O)(l, "scheduleWithdraw$");
          }
          unscheduleWithdraw() {
            const e = this.opiumScheduleCancelingService
              .cancelWithdraw()
              .pipe((0, $t.R)(this.destroy$));
            (0, V.O)(e, "unscheduleWithdraw$");
          }
          withdraw() {
            const {
                poolAddress: e,
                poolToken: i,
                userStaked: o,
              } = this.opiumPoolsQuery,
              c =
                o === this.tokenAmountControl.value
                  ? this.opiumPoolActionsService.getStakedAmount(e)
                  : Promise.resolve(
                      (0, A.bl)(this.tokenAmountControl.value, i.decimals)
                    ),
              l = (0, H.p4)(c).pipe(
                (0, _.w)((d) =>
                  this.trackTransaction(
                    e,
                    "opium-withdraw",
                    this.opiumPoolActionsService.withdraw(e, d),
                    d
                  )
                ),
                (0, N.q)(1)
              );
            (0, V.O)(l, "opiumPoolWithdraw$");
          }
          trackTransaction(e, i, o, c) {
            return o.pipe(
              (0, G.b)((l) => {
                this.inProgressTxService.trackTransaction({
                  txHash: l,
                  asset: e,
                  widgetId: i,
                }),
                  this.trackToGA(c, l);
              })
            );
          }
          trackToGA(e, i) {
            const o = this.tokenPricesQuery.getUsdPrice(this.poolToken.address),
              c = (0, A.kg)(e.toString(), this.poolToken.decimals);
            this.webAnalyticsService.trackViaDataLayer("withdraw_1inch_opium", {
              chainId: this.activeConnectionQuery.currentChainId,
              walletTypeId:
                this.walletConnectionQuery.connectedWalletTypeForAnalytics,
              walletAddress: this.walletConnectionQuery.walletAddress,
              assetAmount: c,
              usdAsset: "" + o * +c,
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(dt.r),
              t.ɵɵdirectiveInject(ct.r),
              t.ɵɵdirectiveInject(At.O),
              t.ɵɵdirectiveInject(mt.q),
              t.ɵɵdirectiveInject(Qt.q),
              t.ɵɵdirectiveInject(Mt),
              t.ɵɵdirectiveInject(Kt.Y),
              t.ɵɵdirectiveInject(on),
              t.ɵɵdirectiveInject(Se),
              t.ɵɵdirectiveInject(Pe),
              t.ɵɵdirectiveInject(xt.a3, 2),
              t.ɵɵdirectiveInject(je.y),
              t.ɵɵdirectiveInject(ie.u),
              t.ɵɵdirectiveInject(Tn.V)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-pool-withdraw"]],
            features: [t.ɵɵProvidersFeature([xt.a3])],
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [4, "tuiLet"],
              [3, "token", "title", "tokenAmount", "tokenRole"],
              ["type", "warning", 3, "hideCloseButton"],
              [
                "data-id",
                "opium-withdraw.token-select",
                3,
                "formControl",
                "token",
                "tokenBalance",
                "showLock",
                "customTokenLinkString",
                "tokenChangeable",
                "showMaxButton",
                "showPercentControl",
                "setMaxAmount",
                4,
                "ngIf",
              ],
              [3, "token", "title", "tokenAmount", "tokenRole", 4, "ngIf"],
              ["data-id", "opium-withdraw.info", 1, "withdraw-info"],
              ["data-id", "opium-withdraw.info.withdrawal-fee", 4, "ngIf"],
              ["data-id", "opium-withdraw.info.you-receive"],
              ["transloco", "you-receive2", 1, "param-label"],
              [1, "param-value"],
              [3, "value", "decimals"],
              ["data-id", "opium-withdraw.info.transaction-cost", 4, "ngIf"],
              [
                "data-id",
                "opium-withdraw.token-select",
                3,
                "formControl",
                "token",
                "tokenBalance",
                "showLock",
                "customTokenLinkString",
                "tokenChangeable",
                "showMaxButton",
                "showPercentControl",
                "setMaxAmount",
              ],
              ["data-id", "opium-withdraw.info.your-pending-withdrawal"],
              ["transloco", "opium.pending-withdraw", 1, "param-label"],
              [1, "text-gray"],
              [1, "value-arrow"],
              ["data-id", "opium-withdraw.info.withdrawal-release"],
              [1, "param-label"],
              [1, "info-tooltip", 3, "tooltip"],
              ["data-id", "opium-withdraw.info.withdrawal-fee"],
              ["transloco", "opium.withdraw-fee", 1, "param-label"],
              ["data-id", "opium-withdraw.info.transaction-cost"],
              ["contextId", "opium-withdraw", 3, "txFeeAmount", "gasPreview"],
              ["class", "gas-price-widget", 4, "isSettingWidgetVisible"],
              [1, "gas-price-widget"],
              [4, "ngIf", "ngIfElse"],
              ["polygonWarning", ""],
              ["type", "notification", 1, "info-banner", 3, "hideCloseButton"],
              ["scheduleFeeTooltip", ""],
              ["iconColor", "themeable", 3, "tooltip"],
              [1, "schedule-fee-tooltip"],
              ["transloco", "opium.warn.withdraw-tooltip-2"],
              [
                "href",
                "https://help.1inch.io/en/articles/6162115-what-is-1inch-turbo-and-how-does-it-work",
                "target",
                "_blank",
              ],
              [
                "type",
                "notification",
                "data-id",
                "opium-withdraw.schedule-banner",
                1,
                "info-banner",
                3,
                "hideCloseButton",
              ],
              [
                "class",
                "action-button",
                "color",
                "blue",
                3,
                "disabled",
                4,
                "ngIf",
              ],
              ["color", "blue", 1, "action-button", 3, "disabled"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [
                "walletConnect",
                "",
                "color",
                "light-blue",
                "data-id",
                "opium-withdraw.connect-wallet",
                1,
                "action-button",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.loading",
                1,
                "action-button",
                3,
                "disabled",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.withdraw",
                1,
                "action-button",
                3,
                "click",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.not-enough-balance",
                1,
                "action-button",
                3,
                "disabled",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.enter-amount",
                1,
                "action-button",
                3,
                "disabled",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.cancel-withdraw",
                1,
                "action-button",
                3,
                "click",
              ],
              [
                "class",
                "action-button",
                "widgetId",
                "opium-withdraw-approve",
                "data-id",
                "opium-withdraw-button.give-permission",
                3,
                "customSpender",
                "sourceToken",
                4,
                "tuiLet",
              ],
              [
                "widgetId",
                "opium-withdraw-approve",
                "data-id",
                "opium-withdraw-button.give-permission",
                1,
                "action-button",
                3,
                "customSpender",
                "sourceToken",
              ],
              [
                "color",
                "blue",
                "data-id",
                "opium-withdraw-button.schedule-withdraw",
                1,
                "action-button",
                3,
                "click",
              ],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, Ta, 6, 9, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & e && t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(1, 1, i.poolData$));
            },
            dependencies: [
              x.KI,
              s.O5,
              s.RF,
              s.n9,
              Vt.w,
              de.Y,
              w.Ls,
              O.NgControlStatus,
              O.FormControlDirective,
              Bt.q,
              bn.b,
              Jt.K,
              Mn.M,
              sn.W,
              En.o,
              In.z,
              An.$,
              ge.O,
              x.Ot,
              s.Ov,
              s.JJ,
              Ho,
              he.M,
            ],
            styles: [
              "[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;width:100%;align-items:start;text-align:start;color:var(--1inch__ui-01)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.withdraw-info[_ngcontent-%COMP%]{width:100%;font-size:14px;margin-top:20px}.withdraw-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:10px;min-height:16px}.withdraw-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.withdraw-info[_ngcontent-%COMP%]   .param-value[_ngcontent-%COMP%]{text-align:right}.withdraw-info[_ngcontent-%COMP%]   .param-label[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.value-arrow[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin:-2px 4px 1px;overflow:hidden;height:16px}.value-arrow[_ngcontent-%COMP%]:after{border:none;content:url(/assets/images/icons/arrow-right-3.svg);height:16px;width:16px}.action-button[_ngcontent-%COMP%]{width:100%}.schedule-banner[_ngcontent-%COMP%]{margin-bottom:-16px}.swap-settings[_ngcontent-%COMP%]{width:100%;margin:16px 0}alert[_ngcontent-%COMP%] + .info-banner[_ngcontent-%COMP%]     .uni-alert-container{margin-top:0}.info-tooltip[_ngcontent-%COMP%]{margin-left:2px;margin-top:-1px}.schedule-fee-tooltip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}.withdraw-info[_ngcontent-%COMP%] + simple-button[_ngcontent-%COMP%]{margin-top:16px}gas-price-widget[_ngcontent-%COMP%] + simple-button[_ngcontent-%COMP%]{margin-top:16px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      const Ma = function (n, a, e) {
        return { inverseTrigger: n, referenceTitle: a, strikePriceReset: e };
      };
      function Ea(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "alert", 26),
            t.ɵɵlistener("onCloseClick", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(2);
              return t.ɵɵresetView(o.toggleRiskBanner());
            }),
            t.ɵɵpipe(1, "transloco"),
            t.ɵɵelement(2, "p", 27)(3, "p", 28),
            t.ɵɵelementStart(4, "p", 29),
            t.ɵɵtext(5),
            t.ɵɵpipe(6, "transloco"),
            t.ɵɵelementEnd()();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵproperty("title", t.ɵɵpipeBind1(1, 2, "opium.risk-disc")),
            t.ɵɵadvance(5),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                6,
                4,
                "opium.alert-text-3",
                t.ɵɵpureFunction3(
                  7,
                  Ma,
                  e.pool.product.inverseTrigger,
                  e.pool.product.referenceTitle,
                  e.info.strikePriceReset
                )
              ),
              " "
            );
        }
      }
      function Ia(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 49),
            t.ɵɵelement(1, "p", 50),
            t.ɵɵelementStart(2, "div", 34),
            t.ɵɵelement(3, "token-amount", 35),
            t.ɵɵpipe(4, "toBigInt"),
            t.ɵɵtext(5, "\xa0 "),
            t.ɵɵelementStart(6, "span", 36),
            t.ɵɵtext(7),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext().tuiLet,
            o = t.ɵɵnextContext(2);
          t.ɵɵadvance(3),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(4, 3, i.activeStake, o.poolToken.decimals)
            )("decimals", o.poolToken.decimals),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol);
        }
      }
      function Aa(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "div", 51)(1, "p", 42),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementStart(4, "button", 52),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(4);
              return t.ɵɵresetView(o.cancelStakeSchedule());
            }),
            t.ɵɵtext(5),
            t.ɵɵpipe(6, "transloco"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(7, "div", 34),
            t.ɵɵtext(8),
            t.ɵɵpipe(9, "number"),
            t.ɵɵelementStart(10, "span", 36),
            t.ɵɵtext(11),
            t.ɵɵelementEnd()()();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(3, 4, "tradingStrategies.pending-stake"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(6, 6, "commonText.cancel"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(9, 8, i.pendingStake, "1.0-4"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol);
        }
      }
      function Da(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "div", 53)(1, "p", 42),
            t.ɵɵtext(2),
            t.ɵɵpipe(3, "transloco"),
            t.ɵɵelementStart(4, "button", 52),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(4);
              return t.ɵɵresetView(o.cancelWithdrawSchedule());
            }),
            t.ɵɵtext(5),
            t.ɵɵpipe(6, "transloco"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(7, "div", 34),
            t.ɵɵtext(8),
            t.ɵɵpipe(9, "number"),
            t.ɵɵelementStart(10, "span", 36),
            t.ɵɵtext(11),
            t.ɵɵelementEnd()()();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(3, 4, "opium.pending-withdraw"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(6, 6, "commonText.cancel"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(9, 8, i.activeStake, "1.0-4"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol);
        }
      }
      const Ba = function (n, a) {
        return { from: n, to: a };
      };
      function $a(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 31)(1, "div", 32),
            t.ɵɵelement(2, "p", 33),
            t.ɵɵelementStart(3, "div", 34),
            t.ɵɵelement(4, "token-amount", 35),
            t.ɵɵpipe(5, "toBigInt"),
            t.ɵɵtext(6, "\xa0 "),
            t.ɵɵelementStart(7, "span", 36),
            t.ɵɵtext(8),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(9, "div", 37),
            t.ɵɵelement(10, "p", 38),
            t.ɵɵelementStart(11, "div", 34),
            t.ɵɵtext(12),
            t.ɵɵpipe(13, "tuiFormatNumber"),
            t.ɵɵelementStart(14, "span", 36),
            t.ɵɵtext(15),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(16, "div", 39),
            t.ɵɵelement(17, "p", 40),
            t.ɵɵelementStart(18, "div", 34),
            t.ɵɵtext(19),
            t.ɵɵpipe(20, "dateTimePeriodFormat"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(21, "div", 41)(22, "p", 42),
            t.ɵɵelement(23, "span", 43)(24, "tooltip", 22),
            t.ɵɵpipe(25, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(26, "div", 34),
            t.ɵɵtext(27),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(28, "div", 44),
            t.ɵɵelement(29, "p", 45),
            t.ɵɵelementStart(30, "div", 34),
            t.ɵɵtext(31),
            t.ɵɵpipe(32, "number"),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(33, Ia, 8, 6, "div", 46),
            t.ɵɵtemplate(34, Aa, 12, 11, "div", 47),
            t.ɵɵtemplate(35, Da, 12, 11, "div", 48),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext().tuiLet,
            o = t.ɵɵnextContext().tuiLet,
            c = t.ɵɵnextContext();
          t.ɵɵadvance(4),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(5, 13, e.totalStaked, c.poolToken.decimals)
            )("decimals", c.poolToken.decimals),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "transloco",
              o.details.phase === c.OpiumPoolPhase.STAKING
                ? "opium.prev-strike-price"
                : "opium.strike-price"
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(13, 16, e.strikePrice, 4),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.strikeTokenSymbol),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind3(
                20,
                19,
                t.ɵɵpureFunction2(
                  28,
                  Ba,
                  o.info.nextRebalancingTimestamp,
                  o.info.nextRebalancingEndTimestamp
                ),
                !0,
                !1
              ),
              " "
            ),
            t.ɵɵadvance(5),
            t.ɵɵproperty(
              "tooltip",
              t.ɵɵpipeBind1(25, 23, "opium.utilization-tooltip3")
            ),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", e.poolUtilization, "% "),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(32, 25, e.APR, "1.0-2"),
              "% "
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", i),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              0 != +((null == i ? null : i.pendingStake) || 0)
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", null == i ? null : i.isWithdrawScheduled);
        }
      }
      function La(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, $a, 36, 31, "div", 30),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("tuiLet", e.viewItem);
        }
      }
      function Wa(n, a) {
        1 & n && t.ɵɵelement(0, "opium-pool-stake");
      }
      function ja(n, a) {
        1 & n && t.ɵɵelement(0, "opium-pool-withdraw");
      }
      function Fa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 54)(1, "div", 55)(2, "a", 56),
            t.ɵɵtext(3),
            t.ɵɵpipe(4, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(5, "a", 57),
            t.ɵɵtext(6),
            t.ɵɵpipe(7, "transloco"),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(8, Wa, 1, 0, "opium-pool-stake", 58),
            t.ɵɵtemplate(9, ja, 1, 0, "opium-pool-withdraw", 58),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(" ", t.ɵɵpipeBind1(4, 4, "dao.stake"), " "),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(7, 6, "stakeCard.withdraw"),
              " "
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", e),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", !e);
        }
      }
      function Qa(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "div", 1)(2, "a", 2),
            t.ɵɵelement(3, "span", 3)(4, "span", 4),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(5, "div", 5)(6, "div", 6),
            t.ɵɵelement(7, "img", 7),
            t.ɵɵelementStart(8, "span", 8),
            t.ɵɵtext(9),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(10, "button", 9),
            t.ɵɵlistener("click", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext();
              return t.ɵɵresetView(o.toggleRiskBanner());
            }),
            t.ɵɵtext(11),
            t.ɵɵpipe(12, "transloco"),
            t.ɵɵelement(13, "i", 10),
            t.ɵɵelementEnd()(),
            t.ɵɵtemplate(14, Ea, 7, 11, "alert", 11),
            t.ɵɵelementStart(15, "div", 12)(16, "div", 13)(17, "div", 14),
            t.ɵɵelement(18, "opium-pool-phase", 15),
            t.ɵɵpipe(19, "transloco"),
            t.ɵɵelement(20, "opium-pool-phase", 16),
            t.ɵɵpipe(21, "transloco"),
            t.ɵɵelement(22, "opium-pool-phase", 17),
            t.ɵɵpipe(23, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(24, La, 2, 1, "ng-container", 0),
            t.ɵɵpipe(25, "async"),
            t.ɵɵelementStart(26, "div", 18),
            t.ɵɵelement(27, "h3", 19),
            t.ɵɵelementStart(28, "div", 20)(29, "div")(30, "span", 21),
            t.ɵɵtext(31),
            t.ɵɵpipe(32, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵtext(33),
            t.ɵɵelement(34, "tooltip", 22),
            t.ɵɵpipe(35, "transloco"),
            t.ɵɵelementEnd()(),
            t.ɵɵelement(36, "opium-pool-charts", 23),
            t.ɵɵpipe(37, "async"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(38, "div", 24),
            t.ɵɵtemplate(39, Fa, 10, 8, "div", 25),
            t.ɵɵpipe(40, "async"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext();
          let o;
          t.ɵɵadvance(2),
            t.ɵɵproperty("routerLink", i.backLink),
            t.ɵɵadvance(5),
            t.ɵɵproperty("src", e.pool.data.logo, t.ɵɵsanitizeUrl),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(e.pool.data.title),
            t.ɵɵadvance(1),
            t.ɵɵclassProp("banner-btn_open", i.isOpiumRiskBannerShown),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind1(12, 25, "opium.risk-disc"),
              " "
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("ngIf", i.isOpiumRiskBannerShown),
            t.ɵɵadvance(4),
            t.ɵɵproperty("startTimestamp", 1e3 * e.details.stakingPhaseStart)(
              "endTimestamp",
              1e3 * e.details.stakingPhaseEnd
            )("title", t.ɵɵpipeBind1(19, 27, "opium.rebalancing"))(
              "directStake",
              !0
            )("directWithdraw", !0),
            t.ɵɵadvance(2),
            t.ɵɵproperty("startTimestamp", 1e3 * e.details.stakingPhaseEnd)(
              "endTimestamp",
              1e3 * e.details.tradingPhaseEnd
            )("title", t.ɵɵpipeBind1(21, 29, "dao.farming-status-active"))(
              "directStake",
              !0
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("startTimestamp", 1e3 * e.details.tradingPhaseEnd)(
              "endTimestamp",
              1e3 * (e.details.nextStakingPhaseTimestamp - 1)
            )("title", t.ɵɵpipeBind1(23, 31, "status.pending")),
            t.ɵɵadvance(2),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(25, 33, i.userPoolData$)),
            t.ɵɵadvance(7),
            t.ɵɵtextInterpolate1(
              "",
              t.ɵɵpipeBind1(32, 35, "opium.bench-return"),
              ":"
            ),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1(" ", e.info.benchMarkReturn, " "),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "tooltip",
              t.ɵɵpipeBind1(35, 37, "opium.benchmark-tooltip")
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty(
              "pool",
              null == (o = t.ɵɵpipeBind1(37, 39, i.poolData$)) ? null : o.pool
            ),
            t.ɵɵadvance(3),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(40, 41, i.isStakeAction$));
        }
      }
      const ze = "opiumRiskBannerStorageKey";
      let Bn = (() => {
        class n {
          constructor(e, i, o, c, l, d, u, f) {
            (this.walletConnectionQuery = e),
              (this.activatedRoute = i),
              (this.opiumPoolsService = o),
              (this.opiumUserPoolsService = c),
              (this.opiumUserPoolsQuery = l),
              (this.opiumPoolsQuery = d),
              (this.opiumScheduleCancelingService = u),
              (this.destroy$ = f),
              (this.poolData$ = this.opiumPoolsQuery.currentPool$.pipe(
                (0, m.U)((g) => ({
                  pool: g,
                  viewItem: Sn(g),
                  details: (0, Nt.dN)(g),
                  info: (0, Nt.us)(g),
                })),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.userPoolData$ =
                this.opiumUserPoolsQuery.currentPoolUserData$),
              (this.poolToken = this.opiumPoolsQuery.poolToken),
              (this.isStakeAction$ = this.activatedRoute.data.pipe(
                (0, m.U)((g) => "stake" === g.action)
              )),
              (this.backLink = "../../../../"),
              (this.OpiumPoolPhase = ft.D),
              (this.isOpiumRiskBannerShown = !localStorage.getItem(ze));
          }
          ngOnInit() {
            const e = this.opiumPoolsService
              .persistOpiumPools()
              .pipe((0, $t.R)(this.destroy$));
            (0, V.O)(e, "persistOpiumPool$");
            const i = this.opiumPoolsQuery.currentPool$.pipe(
              (0, _.w)((o) =>
                this.opiumUserPoolsService.persistUserStateForPool(o.id)
              ),
              (0, $t.R)(this.destroy$)
            );
            (0, V.O)(i, "persistOpiumUserPool$");
          }
          toggleRiskBanner() {
            this.isOpiumRiskBannerShown
              ? localStorage.setItem(ze, "1")
              : localStorage.removeItem(ze),
              (this.isOpiumRiskBannerShown = !this.isOpiumRiskBannerShown);
          }
          cancelStakeSchedule() {
            const e = this.opiumScheduleCancelingService
              .cancelStake()
              .pipe((0, $t.R)(this.destroy$));
            (0, V.O)(e, "unscheduleStake$");
          }
          cancelWithdrawSchedule() {
            const e = this.opiumScheduleCancelingService
              .cancelWithdraw()
              .pipe((0, $t.R)(this.destroy$));
            (0, V.O)(e, "unscheduleWithdraw$");
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(ct.r),
              t.ɵɵdirectiveInject(p.gz),
              t.ɵɵdirectiveInject(ce),
              t.ɵɵdirectiveInject(mn),
              t.ɵɵdirectiveInject(Qt.q),
              t.ɵɵdirectiveInject(mt.q),
              t.ɵɵdirectiveInject(Pe),
              t.ɵɵdirectiveInject(xt.a3, 2)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-pool-page"]],
            features: [t.ɵɵProvidersFeature([xt.a3])],
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              ["data-id", "opium-pool.back-button", 1, "back-link-wrapper"],
              [1, "link-button", "back-link", 3, "routerLink"],
              [1, "close-button"],
              ["transloco", "button.back"],
              ["data-id", "opium-pool.header", 1, "pool-page-header"],
              [1, "title-wrapper"],
              ["data-id", "opium-pool.header.logo", 1, "pool-logo", 3, "src"],
              ["data-id", "opium-pool.header.title", 1, "pool-title"],
              [
                "data-id",
                "opium-pool.header.disclosure-dropdown",
                1,
                "banner-btn",
                "blank-button",
                3,
                "click",
              ],
              [1, "arrow", "down"],
              [
                "type",
                "warning",
                "data-id",
                "opium-pool.risk-disclosure-banner",
                3,
                "title",
                "onCloseClick",
                4,
                "ngIf",
              ],
              [1, "page-layout"],
              [1, "page-layout-left-col"],
              ["data-id", "opium-pool.phases-line", 1, "phase-line"],
              [
                "icon",
                "assets/images/icons/scales-2.svg#scales",
                "data-id",
                "opium-pool.phases-line.rebalancing",
                3,
                "startTimestamp",
                "endTimestamp",
                "title",
                "directStake",
                "directWithdraw",
              ],
              [
                "icon",
                "assets/images/icons/refresh-2.svg#refresh",
                "data-id",
                "opium-pool.phases-line.active",
                3,
                "startTimestamp",
                "endTimestamp",
                "title",
                "directStake",
              ],
              [
                "icon",
                "assets/images/icons/time.svg#time",
                "data-id",
                "opium-pool.phases-line.pending",
                3,
                "startTimestamp",
                "endTimestamp",
                "title",
              ],
              ["data-id", "opium-pool.performance-graphic"],
              ["transloco", "opium.performance-title", 1, "performance-title"],
              [1, "performance-info"],
              [1, "caption"],
              [3, "tooltip"],
              [3, "pool"],
              [1, "page-layout-right-col"],
              [
                "class",
                "actions",
                "data-id",
                "opium-pool.stake-withdraw-panel",
                4,
                "tuiLet",
              ],
              [
                "type",
                "warning",
                "data-id",
                "opium-pool.risk-disclosure-banner",
                3,
                "title",
                "onCloseClick",
              ],
              ["transloco", "opium.alert-text-1", 1, "alert__text"],
              ["transloco", "opium.alert-text-2", 1, "alert__text"],
              [1, "alert__text"],
              [
                "class",
                "pool-stats",
                "data-id",
                "opium-pool.statistic",
                4,
                "tuiLet",
              ],
              ["data-id", "opium-pool.statistic", 1, "pool-stats"],
              [
                "data-id",
                "opium-pool.statistic.total-stacked",
                1,
                "pool-stats-item",
              ],
              ["transloco", "stakeCard.total-staked2", 1, "title"],
              [1, "value"],
              [3, "value", "decimals"],
              [1, "unit"],
              [
                "data-id",
                "opium-pool.statistic.strike-price",
                1,
                "pool-stats-item",
              ],
              [1, "title", 3, "transloco"],
              [
                "data-id",
                "opium-pool.statistic.next-rebalancing",
                1,
                "pool-stats-item",
              ],
              ["transloco", "opium.next-rebalance", 1, "title"],
              [
                "data-id",
                "opium-pool.statistic.utilization",
                1,
                "pool-stats-item",
              ],
              [1, "title"],
              ["transloco", "opium.pool-util"],
              ["data-id", "opium-pool.statistic.apr", 1, "pool-stats-item"],
              ["transloco", "tradingStrategies.apr-1", 1, "title"],
              [
                "class",
                "pool-stats-item",
                "data-id",
                "opium-pool.statistic.active-stake",
                4,
                "ngIf",
              ],
              [
                "class",
                "pool-stats-item",
                "data-id",
                "opium-pool.statistic.pending-stake",
                4,
                "ngIf",
              ],
              [
                "class",
                "pool-stats-item",
                "data-id",
                "opium-pool.statistic.pending-withdraw",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "opium-pool.statistic.active-stake",
                1,
                "pool-stats-item",
              ],
              ["transloco", "opium.active-stake", 1, "title"],
              [
                "data-id",
                "opium-pool.statistic.pending-stake",
                1,
                "pool-stats-item",
              ],
              [1, "blank-button", "cancel-pending", 3, "click"],
              [
                "data-id",
                "opium-pool.statistic.pending-withdraw",
                1,
                "pool-stats-item",
              ],
              ["data-id", "opium-pool.stake-withdraw-panel", 1, "actions"],
              [1, "actions-tabs"],
              [
                "routerLink",
                "../stake",
                "routerLinkActive",
                "active",
                "data-id",
                "opium-pool.stake-withdraw-panel.stake-tab",
              ],
              [
                "routerLink",
                "../withdraw",
                "routerLinkActive",
                "active",
                "data-id",
                "opium-pool.stake-withdraw-panel.withdraw-tab",
              ],
              [4, "ngIf"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, Qa, 41, 43, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & e &&
                  t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(1, 1, i.poolData$));
            },
            dependencies: [
              x.KI,
              s.O5,
              p.yS,
              p.Od,
              w.Ls,
              po,
              Vt.w,
              xo,
              Jt.K,
              Ko,
              ba,
              ge.O,
              x.Ot,
              s.Ov,
              s.JJ,
              On,
              he.M,
              I.m,
            ],
            styles: [
              '[_nghost-%COMP%]{display:block;width:1180px;margin:0 auto;color:var(--1inch__ui-01)}.page-layout[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;margin-top:32px;margin-bottom:100px}.page-layout-left-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:40px;width:calc(100% - 440px);margin-right:40px}.page-layout-right-col[_ngcontent-%COMP%]{width:400px}.pool-logo[_ngcontent-%COMP%]{height:42px}.pool-page-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.pool-title[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.pool-logo[_ngcontent-%COMP%]{width:56px;height:56px;margin-right:16px}.back-link-wrapper[_ngcontent-%COMP%]{display:block;margin-bottom:16px}.back-link[_ngcontent-%COMP%]{font-size:16px;display:inline-block;transition:opacity .3s;padding:4px 8px 4px 4px}.back-link[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{vertical-align:middle;line-height:normal}.close-button[_ngcontent-%COMP%]{position:relative;display:inline-block;height:16px;width:16px;line-height:16px;margin-right:8px}.close-button[_ngcontent-%COMP%]:before, .close-button[_ngcontent-%COMP%]:after{content:" ";position:absolute;height:10px;width:2px;left:5px;top:0px;border-radius:3px;background-color:currentColor}.close-button[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.close-button[_ngcontent-%COMP%]:after{top:6px;transform:rotate(-45deg)}.cancel-pending[_ngcontent-%COMP%]{font-size:13px;color:var(--link-blue);margin-left:8px}.banner-btn[_ngcontent-%COMP%]{font-size:16px;color:var(--1inch__ui-02)}.banner-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border:solid var(--1inch__ui-02);border-width:0 2px 2px 0;display:inline-block;padding:3px;transform:rotate(-45deg);margin-left:6px;margin-top:1px}.banner-btn_open[_ngcontent-%COMP%]{color:var(--1inch-btn-bg-05)}.banner-btn_open[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-color:var(--1inch-btn-bg-05);transform:rotate(45deg);margin-top:-4px}.banner-btn[_ngcontent-%COMP%]:hover{color:var(--1inch__ui-01)}.banner-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%]{border-color:var(--1inch__ui-01)}.title-wrapper[_ngcontent-%COMP%], .banner-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.phase-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;position:relative;width:100%;margin-right:40px}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]:after{content:"";border:solid var(--1inch-border-12);border-width:0 3px 3px 0;display:inline-block;padding:4px;transform:rotate(-45deg);position:absolute;right:-22px;top:8px}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]:last-child{margin-right:0}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]:last-child:after{display:none}.pool-stats[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:24px;padding-bottom:40px;border-bottom:1px solid var(--1inch-border-01)}.pool-stats-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:13px;line-height:normal;color:var(--1inch__ui-02);margin-bottom:8px}.pool-stats-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:16px;color:var(--1inch-text-03)}.pool-stats-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.performance-title[_ngcontent-%COMP%]{font-size:20px;margin-bottom:16px}.performance-info[_ngcontent-%COMP%]{font-size:13px;line-height:normal}.performance-info[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.actions[_ngcontent-%COMP%]{display:block;border-radius:16px;background:var(--1inch-bg-02);padding:16px;margin:0 auto}.actions-tabs[_ngcontent-%COMP%]{font-size:16px;margin-bottom:16px}.actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{font-size:16px;line-height:20px;text-decoration:none;font-weight:500;color:var(--1inch__ui-02);margin:0 24px 0 0;padding-bottom:4px;cursor:pointer}.actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus{color:var(--1inch-common-text-03)}.actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:last-child{margin-right:0!important}@media (max-width: 360px){.actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-right:16px}}.actions-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%], .actions-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:var(--1inch-text-01)}.alert__text[_ngcontent-%COMP%]{margin-bottom:16px}.alert__text[_ngcontent-%COMP%]:last-child{margin-bottom:0}@media (max-width: 1200px){[_nghost-%COMP%]{width:100%}.actions[_ngcontent-%COMP%]{max-width:480px}.page-layout[_ngcontent-%COMP%]{flex-direction:column-reverse}.page-layout-left-col[_ngcontent-%COMP%], .page-layout-right-col[_ngcontent-%COMP%]{width:100%}.page-layout-right-col[_ngcontent-%COMP%]{margin-bottom:40px}}@media (max-width: 720px){.phase-line[_ngcontent-%COMP%]{flex-direction:column;margin:auto}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]{width:auto;margin-bottom:20px}.phase-line[_ngcontent-%COMP%]   opium-pool-phase[_ngcontent-%COMP%]:after{display:none}}@media (max-width: 520px){.pool-stats[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (max-width: 418px){.actions[_ngcontent-%COMP%]{margin:0 -16px}}',
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      const Ua = [
        {
          path: "opium/pool/:poolId",
          canActivateChild: [un],
          children: [
            { path: "", pathMatch: "full", redirectTo: "stake" },
            {
              path: "stake",
              pathMatch: "full",
              component: Bn,
              data: { action: "stake" },
            },
            {
              path: "withdraw",
              pathMatch: "full",
              component: Bn,
              data: { action: "withdraw" },
            },
          ],
        },
      ];
      var $n = r(79296),
        Ra = r(42089),
        Va = r(45256),
        za = r(31552),
        Na = r(79714);
      let Ha = (() => {
        class n {
          transform(e, i) {
            if (!e) return null;
            if (!Ga(e) || "unknown" === e.current) return 0;
            const o = e.historical[i];
            if (!o || "unknown" === o || 0 === e.current) return 0;
            const l = +(function Ka(n, a) {
              return n - a == 0 ? 0 : 100 * Math.abs((n - a) / a);
            })(o, e.current).toFixed(1);
            return o > e.current ? -1 * l : l;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵpipe = t.ɵɵdefinePipe({ name: "earnValue", type: n, pure: !0 })),
          n
        );
      })();
      const Ga = (n) =>
        (0, J.arb)(
          {
            day: (0, J.H50)([(0, J.is)(Number), (0, J.fS0)("unknown")]),
            week: (0, J.H50)([(0, J.is)(Number), (0, J.fS0)("unknown")]),
            month: (0, J.H50)([(0, J.is)(Number), (0, J.fS0)("unknown")]),
          },
          n.historical || {}
        );
      function Ya(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "number"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              e.valueAsPercent
                ? e.value.current + "%"
                : "$" + t.ɵɵpipeBind2(2, 1, e.value.current, "1.0-0"),
              " "
            );
        }
      }
      function Za(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "span"),
            t.ɵɵtext(2),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(2), t.ɵɵtextInterpolate(e.valueAsPercent ? "0%" : "$0");
        }
      }
      function Ja(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "span", 5),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "percentDifference"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext().tuiLet,
            i = t.ɵɵnextContext(2);
          t.ɵɵclassProp("big", "big" === i.mode)("giant", "giant" === i.mode)(
            "medium",
            "medium" === i.mode
          )("positive", e > 0)("negative", e < 0),
            t.ɵɵadvance(1),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(2, 11, e));
        }
      }
      function Xa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Ja, 3, 13, "span", 4),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1), t.ɵɵproperty("ngIf", !!e);
        }
      }
      function qa(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Xa, 2, 1, "ng-container", 3),
            t.ɵɵpipe(2, "earnValue"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind2(2, 1, e.value, e.earnRange));
        }
      }
      let tr = (() => {
        class n {
          constructor() {
            (this.mode = "regular"),
              (this.valueAsPercent = !1),
              (this.earnRange = za.N.DAY),
              (this.revertView = !1),
              (this.showPercent = !0);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["earning-value"]],
            inputs: {
              mode: "mode",
              valueAsPercent: "valueAsPercent",
              earnRange: "earnRange",
              value: "value",
              revertView: "revertView",
              showPercent: "showPercent",
            },
            decls: 5,
            vars: 11,
            consts: [
              [1, "earning-value"],
              [1, "value"],
              [4, "ngIf"],
              [4, "tuiLet"],
              [
                "class",
                "difference",
                3,
                "big",
                "giant",
                "medium",
                "positive",
                "negative",
                4,
                "ngIf",
              ],
              [1, "difference"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵelementStart(0, "div", 0)(1, "span", 1),
                t.ɵɵtemplate(2, Ya, 3, 4, "ng-container", 2),
                t.ɵɵtemplate(3, Za, 3, 1, "ng-container", 2),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(4, qa, 3, 4, "ng-container", 2),
                t.ɵɵelementEnd()),
                2 & e &&
                  (t.ɵɵclassProp("revert-view", i.revertView),
                  t.ɵɵadvance(1),
                  t.ɵɵclassProp("big", "big" === i.mode)(
                    "giant",
                    "giant" === i.mode
                  )("medium", "medium" === i.mode),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "ngIf",
                    i.value && "unknown" !== i.value.current
                  ),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty(
                    "ngIf",
                    !i.value || "unknown" === i.value.current
                  ),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngIf", i.showPercent));
            },
            dependencies: [s.O5, w.Ls, s.JJ, Na.h, Ha],
            styles: [
              ".earning-value[_ngcontent-%COMP%]{display:flex;align-items:baseline}.revert-view[_ngcontent-%COMP%]{flex-direction:row-reverse}.revert-view[_ngcontent-%COMP%]   .difference[_ngcontent-%COMP%]{margin-left:0;margin-right:8px}.value[_ngcontent-%COMP%]{font-size:16px}.value.medium[_ngcontent-%COMP%]{font-size:20px;font-weight:500;line-height:23px}.value.big[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.value.giant[_ngcontent-%COMP%]{font-size:32px;font-weight:700}.difference[_ngcontent-%COMP%]{font-size:13px;margin-left:8px}.difference.medium[_ngcontent-%COMP%]{font-size:13px;font-weight:400;margin-left:10px}.difference.big[_ngcontent-%COMP%]{font-size:16px;margin-left:15px;margin-bottom:2px}.difference.giant[_ngcontent-%COMP%]{font-size:16px;margin-left:14px;margin-bottom:2px}.difference.positive[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve)}.difference.negative[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function er(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "a", 2),
            t.ɵɵlistener("click", function (o) {
              t.ɵɵrestoreView(e);
              const c = t.ɵɵnextContext();
              return t.ɵɵresetView(c.onLinkClick(o));
            }),
            t.ɵɵelementStart(2, "simple-button", 3)(3, "span", 4),
            t.ɵɵtext(4, "Withdraw"),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("routerLink", e.withdrawLink),
            t.ɵɵadvance(1),
            t.ɵɵproperty("size", e.smallSize ? "small" : "standard")(
              "disabled",
              e.withdrawDisabled
            );
        }
      }
      function nr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "a")(1, "simple-button", 5)(2, "span", 4),
            t.ɵɵtext(3, "Withdraw"),
            t.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("disabled", !0)(
              "size",
              e.smallSize ? "small" : "standard"
            );
        }
      }
      let ir = (() => {
        class n {
          constructor(e) {
            (this.walletConnectionQuery = e),
              (this.withdrawDisabled = !1),
              (this.depositDisabled = !1),
              (this.smallSize = !1),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$);
          }
          onLinkClick(e) {
            e.stopPropagation();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.ɵɵdirectiveInject(ct.r));
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["pool-actions"]],
            hostVars: 2,
            hostBindings: function (e, i) {
              2 & e && t.ɵɵclassProp("small", i.smallSize);
            },
            inputs: {
              withdrawLink: "withdrawLink",
              depositLink: "depositLink",
              withdrawDisabled: "withdrawDisabled",
              depositDisabled: "depositDisabled",
              smallSize: "smallSize",
            },
            decls: 4,
            vars: 4,
            consts: [
              [4, "ngIf", "ngIfElse"],
              ["walletConnectButtons", ""],
              [3, "routerLink", "click"],
              ["color", "light-blue", 3, "size", "disabled"],
              ["transloco", "tradingStrategies.withdraw"],
              ["color", "light-blue", 3, "disabled", "size"],
            ],
            template: function (e, i) {
              if (
                (1 & e &&
                  (t.ɵɵtemplate(0, er, 5, 3, "ng-container", 0),
                  t.ɵɵpipe(1, "async"),
                  t.ɵɵtemplate(
                    2,
                    nr,
                    4,
                    2,
                    "ng-template",
                    null,
                    1,
                    t.ɵɵtemplateRefExtractor
                  )),
                2 & e)
              ) {
                const o = t.ɵɵreference(3);
                t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(1, 2, i.isWalletConnected$))(
                  "ngIfElse",
                  o
                );
              }
            },
            dependencies: [s.O5, Bt.q, x.KI, p.yS, s.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .uni-button{min-width:100%}.small[_nghost-%COMP%]     .uni-button{min-width:88px;height:32px}.small[_nghost-%COMP%]     .uni-button-content{font-size:13px;font-weight:500;line-height:16px}[_nghost-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}[_nghost-%COMP%] > a[_ngcontent-%COMP%]:first-child{margin-right:8px}@media (max-width: 1200px){.small[_nghost-%COMP%]{display:grid;grid-column-gap:8px}.small[_nghost-%COMP%]     .uni-button{width:100%}}@media (max-width: 925px){[_nghost-%COMP%] > a[_ngcontent-%COMP%]{margin-right:8px}[_nghost-%COMP%]     .uni-button{width:100px}}@media (max-width: 720px){[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}[_nghost-%COMP%] > a[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]     .uni-button{width:100%}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var or = r(66654);
      const ar = ["trading-strategies-list-row", ""];
      function rr(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "span", 20),
          t.ɵɵtext(
            1,
            " Estimated annual percentage yield (APY) based on total value locked and trading volume "
          ),
          t.ɵɵelementEnd());
      }
      function sr(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3),
            t.ɵɵelement(4, "token-icon", 4)(5, "token-icon", 4),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(6, "p"),
            t.ɵɵtext(7),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(8, "a", 5),
            t.ɵɵlistener("click", function (o) {
              t.ɵɵrestoreView(e);
              const c = t.ɵɵnextContext();
              return t.ɵɵresetView(c.onLinkClick(o));
            }),
            t.ɵɵpipe(9, "async"),
            t.ɵɵpipe(10, "chainExplorerAddressLink"),
            t.ɵɵelementStart(11, "simple-button", 6),
            t.ɵɵnamespaceSVG(),
            t.ɵɵelementStart(12, "svg", 7),
            t.ɵɵelement(13, "use", 8),
            t.ɵɵelementEnd()()()()(),
            t.ɵɵnamespaceHTML(),
            t.ɵɵelementStart(14, "div", 1)(15, "span", 9),
            t.ɵɵtext(16, "Earnings"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(17, "earning-value", 10),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(18, "div", 1)(19, "span", 11),
            t.ɵɵtext(20, "Total value locked"),
            t.ɵɵelementEnd(),
            t.ɵɵelement(21, "earning-value", 12),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(22, "div", 1)(23, "span", 13),
            t.ɵɵtext(24, "My liquidity"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(25, "span"),
            t.ɵɵtext(26),
            t.ɵɵpipe(27, "number"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(28, "div", 1)(29, "div", 14)(30, "span", 15),
            t.ɵɵtext(31, "APY"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(32, "tooltip", 16),
            t.ɵɵlistener("click", function (o) {
              t.ɵɵrestoreView(e);
              const c = t.ɵɵnextContext();
              return t.ɵɵresetView(c.onLinkClick(o));
            }),
            t.ɵɵelementEnd(),
            t.ɵɵtemplate(
              33,
              rr,
              2,
              0,
              "ng-template",
              null,
              17,
              t.ɵɵtemplateRefExtractor
            ),
            t.ɵɵelementEnd(),
            t.ɵɵelement(35, "earning-value", 18),
            t.ɵɵelementEnd(),
            t.ɵɵelement(36, "pool-actions", 19),
            t.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const e = a.tuiLet,
            i = t.ɵɵreference(34),
            o = t.ɵɵnextContext();
          t.ɵɵadvance(4),
            t.ɵɵproperty("token", o.firstToken.token),
            t.ɵɵadvance(1),
            t.ɵɵproperty("token", o.secondToken.token),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate2(
              "",
              o.firstToken.token.symbol,
              "-",
              o.secondToken.token.symbol,
              ""
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "href",
              t.ɵɵpipeBind1(
                9,
                17,
                t.ɵɵpipeBind1(10, 19, o.tradingStrategy.contractAddress)
              ),
              t.ɵɵsanitizeUrl
            ),
            t.ɵɵadvance(9),
            t.ɵɵproperty("value", o.earningValues.earnings)("showPercent", !1),
            t.ɵɵadvance(4),
            t.ɵɵproperty("value", o.earningValues.tvl),
            t.ɵɵadvance(5),
            t.ɵɵtextInterpolate("$" + t.ɵɵpipeBind2(27, 21, e || 0, "1.0-0")),
            t.ɵɵadvance(6),
            t.ɵɵproperty("tooltip", i),
            t.ɵɵadvance(3),
            t.ɵɵproperty("value", o.earningValues.apy)("valueAsPercent", !0)(
              "showPercent",
              !1
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("smallSize", !0)("withdrawLink", o.withdrawLink)(
              "depositLink",
              o.depositLink
            )("withdrawDisabled", 0 === e);
        }
      }
      let cr = (() => {
        class n {
          constructor(e, i, o) {
            (this.walletQuery = e),
              (this.routerHelperService = i),
              (this.tradingStrategiesQuery = o),
              (this.tradingStrategyItemState$ = new pe.X(null)),
              (this.isWalletConnected$ = this.walletQuery.isWalletConnected$),
              (this.myLiquidityUsd$ = this.tradingStrategyItemState$.pipe(
                (0, H.BX)(),
                (0, st.x)(),
                (0, _.w)((c) =>
                  this.tradingStrategiesQuery.selectEntity(c.id, "tokens")
                ),
                (0, H.BX)(),
                (0, _.w)((c) =>
                  this.tradingStrategiesQuery.getUserLiquidityForTokens$(
                    c.first,
                    c.second
                  )
                ),
                (0, st.x)()
              )),
              (this.depositLink = null),
              (this.withdrawLink = null),
              (this.subscription = new $n.w0());
          }
          set tradingStrategy(e) {
            (this._tradingStrategy = e), this.tradingStrategyItemState$.next(e);
          }
          get tradingStrategy() {
            return this._tradingStrategy;
          }
          get earningValues() {
            return this.tradingStrategy.earningValues;
          }
          get firstToken() {
            return this.tradingStrategy.tokens.first;
          }
          get secondToken() {
            return this.tradingStrategy.tokens.second;
          }
          ngOnInit() {
            const e = this.firstToken.token.symbol,
              i = this.secondToken.token.symbol;
            (this.depositLink = `deposit/${e}/${i}`),
              (this.withdrawLink = `withdraw/${e}/${i}`);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          onLinkClick(e) {
            e.stopPropagation();
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(ct.r),
              t.ɵɵdirectiveInject(Fe.b),
              t.ɵɵdirectiveInject(Ot.c)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["a", "trading-strategies-list-row", ""]],
            inputs: { tradingStrategy: "tradingStrategy" },
            attrs: ar,
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              [1, "trading-strategies-list-row-item"],
              [1, "trading-strategies-list-row-strategy"],
              [1, "trading-strategy-preview-tokens"],
              [1, "trading-strategy-preview-top-token", 3, "token"],
              ["target", "_blank", 1, "view-contact-href", 3, "href", "click"],
              ["color", "light-blue", "size", "small"],
              ["width", "20", "height", "20"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/etherscan-logo-2.svg#etherscan-logo",
              ],
              [
                "transloco",
                "tradingStrategies.list.header.earning",
                1,
                "trading-strategies-list-row-item-text",
              ],
              ["earnRange", "month", 3, "value", "showPercent"],
              [
                "transloco",
                "tradingStrategies.list.header.tvl",
                1,
                "trading-strategies-list-row-item-text",
              ],
              ["earnRange", "day", 3, "value"],
              [
                "trsnsloco",
                "tradingStrategies.list.header.my-liquidity",
                1,
                "trading-strategies-list-row-item-text",
              ],
              [1, "trading-strategies-list-row-item-text"],
              ["trsnsloco", "tradingStrategies.list.header.apy"],
              [1, "trading-strategies-list-row-tooltip", 3, "tooltip", "click"],
              ["strategyApyTooltipTemplate", ""],
              ["earnRange", "day", 3, "value", "valueAsPercent", "showPercent"],
              [
                3,
                "smallSize",
                "withdrawLink",
                "depositLink",
                "withdrawDisabled",
              ],
              ["transloco", "tradingStrategies.estimated-annual-percentage"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, sr, 37, 24, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & e &&
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(1, 1, i.myLiquidityUsd$)
                  );
            },
            dependencies: [
              x.KI,
              Bt.q,
              Va.o,
              tr,
              w.Ls,
              ir,
              Jt.K,
              or.E,
              s.Ov,
              s.JJ,
            ],
            styles: [
              "[_nghost-%COMP%]:hover{background:var(--1inch-bg-01)}.trading-strategies-list-row-item[_ngcontent-%COMP%]{display:flex;align-items:center}.trading-strategies-list-row-item-text[_ngcontent-%COMP%]{display:none}.trading-strategies-list-row-strategy[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between;align-items:center;font-weight:500}.trading-strategy-preview-tokens[_ngcontent-%COMP%]{display:flex}.trading-strategy-preview-tokens[_ngcontent-%COMP%]   .trading-strategy-preview-top-token[_ngcontent-%COMP%]{width:24px;height:24px}.trading-strategy-preview-tokens[_ngcontent-%COMP%]   .trading-strategy-preview-top-token[_ngcontent-%COMP%]:last-of-type{margin-left:-12px}.trading-strategy-preview-charts[_ngcontent-%COMP%]{height:34px;width:112px;pointer-events:none}.view-contact-href[_ngcontent-%COMP%]     .small-uni-button{height:32px;width:32px}.chart-skeleton[_ngcontent-%COMP%]{width:100px;height:32px}.trading-strategies-list-row-tooltip[_ngcontent-%COMP%]{margin-top:-1px}@media (max-width: 1200px){[_nghost-%COMP%]:hover{background:var(--1inch-bg-02)}.trading-strategies-list-row-strategy[_ngcontent-%COMP%]{justify-content:start}.trading-strategies-list-row-item[_ngcontent-%COMP%]{font-size:13px;line-height:16px;display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.trading-strategies-list-row-item[_ngcontent-%COMP%]:first-child{margin-bottom:24px;font-size:16px}.trading-strategies-list-row-item[_ngcontent-%COMP%]     .value{font-size:13px}.trading-strategies-list-row-item-text[_ngcontent-%COMP%]{display:inline}.trading-strategy-preview-tokens[_ngcontent-%COMP%]{margin-right:16px}.view-contact-href[_ngcontent-%COMP%]{margin-left:16px}.trading-strategy-preview-charts[_ngcontent-%COMP%]{margin:24px 0;height:60px;width:auto}.chart-skeleton[_ngcontent-%COMP%]{width:100%;height:60px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function lr(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "span", 10),
          t.ɵɵtext(
            1,
            " Estimated annual percentage yield (APY) based on total value locked and trading volume "
          ),
          t.ɵɵelementEnd());
      }
      function pr(n, a) {
        1 & n && t.ɵɵelement(0, "a", 11),
          2 & n && t.ɵɵproperty("tradingStrategy", a.$implicit);
      }
      let dr = (() => {
        class n {
          constructor(e) {
            this.routerHelperService = e;
          }
          trackByFn(e, i) {
            return i.id;
          }
          earnStrategyLink(e) {
            return (
              "/" +
              this.routerHelperService.buildEarnStrategiesTokensUrl(
                e.tokens.first.token.symbol,
                e.tokens.second.token.symbol
              )
            );
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.ɵɵdirectiveInject(Fe.b));
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["trading-strategies-list"]],
            inputs: { strategies: "strategies" },
            decls: 18,
            vars: 3,
            consts: [
              [1, "trading-strategies-table"],
              [1, "trading-strategies-list-header"],
              ["transloco", "tradingStrategies.list.header.strategy"],
              ["transloco", "tradingStrategies.list.header.earning"],
              ["transloco", "tradingStrategies.list.header.tvl"],
              ["transloco", "tradingStrategies.list.header.my-liquidity"],
              ["transloco", "tradingStrategies.list.header.apy"],
              [1, "trading-strategies-table-tooltip", 3, "tooltip"],
              ["strategyApyTooltipTemplate", ""],
              [
                "trading-strategies-list-row",
                "",
                "class",
                "trading-strategies-list-item-wrapper",
                3,
                "tradingStrategy",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["transloco", "tradingStrategies.estimated-annual-percentage"],
              [
                "trading-strategies-list-row",
                "",
                1,
                "trading-strategies-list-item-wrapper",
                3,
                "tradingStrategy",
              ],
            ],
            template: function (e, i) {
              if (
                (1 & e &&
                  (t.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2),
                  t.ɵɵtext(3, "Strategy"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(4, "div", 3),
                  t.ɵɵtext(5, "Earnings"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(6, "div", 4),
                  t.ɵɵtext(7, "Total value locked"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(8, "div", 5),
                  t.ɵɵtext(9, "My liquidity"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(10, "div")(11, "span", 6),
                  t.ɵɵtext(12, "APY"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelement(13, "tooltip", 7),
                  t.ɵɵtemplate(
                    14,
                    lr,
                    2,
                    0,
                    "ng-template",
                    null,
                    8,
                    t.ɵɵtemplateRefExtractor
                  ),
                  t.ɵɵelementEnd(),
                  t.ɵɵelement(16, "div"),
                  t.ɵɵelementEnd(),
                  t.ɵɵtemplate(17, pr, 1, 1, "a", 9),
                  t.ɵɵelementEnd()),
                2 & e)
              ) {
                const o = t.ɵɵreference(15);
                t.ɵɵadvance(13),
                  t.ɵɵproperty("tooltip", o),
                  t.ɵɵadvance(4),
                  t.ɵɵproperty("ngForOf", i.strategies)(
                    "ngForTrackBy",
                    i.trackByFn
                  );
              }
            },
            dependencies: [x.KI, s.sg, Jt.K, cr],
            styles: [
              ".trading-strategies-table[_ngcontent-%COMP%]{border-collapse:separate;border-radius:16px;border:1px solid var(--1inch-bg-02);background:var(--1inch-bg-02);overflow:hidden}.trading-strategies-list-header[_ngcontent-%COMP%], .trading-strategies-list-item-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:180px 120px 180px 120px 70px 1fr;grid-column-gap:25px;grid-row-gap:24px}.trading-strategies-list-item-wrapper[_ngcontent-%COMP%]{padding:20px 24px}.trading-strategies-list-header[_ngcontent-%COMP%]{padding:24px 24px 0}.trading-strategies-list-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-size:13px;line-height:15px;font-weight:400;display:flex;align-items:center;margin-right:-50px;padding-bottom:10px;color:var(--1inch__ui-02);border-bottom:1px solid var(--1inch-border-01)}.trading-strategies-list-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{margin-right:0}a[_ngcontent-%COMP%]{text-decoration:none;color:var(--1inch__ui-01)}a[_ngcontent-%COMP%]:hover{color:var(--1inch__ui-01)}.trading-strategies-table-tooltip[_ngcontent-%COMP%]{margin-top:-1px;margin-left:4px}@media (max-width: 1200px){.trading-strategies-table[_ngcontent-%COMP%]{display:grid;grid-column-gap:2%;grid-template-columns:49% 49%;background:none;border:none}.trading-strategies-list-header[_ngcontent-%COMP%]{display:none}.trading-strategies-list-item-wrapper[_ngcontent-%COMP%]{display:block;border-radius:16px;margin-bottom:16px;background:var(--1inch-bg-02)}}@media (max-width: 720px){.trading-strategies-table[_ngcontent-%COMP%]{display:block}}@media (max-width: 418px){.trading-strategies-table[_ngcontent-%COMP%]{margin:0 -16px 16px}}",
            ],
          })),
          n
        );
      })();
      r(40020);
      var Ln = r(5372),
        ur = r(27612);
      function gr(n) {
        const a = Yt[St.secondToken];
        return {
          datasets: [
            {
              type: "line",
              label: "",
              data: n.map((e) => e.linePerformance),
              borderColor: a.mainColor,
              borderWidth: 2,
              backgroundColor: (e) => {
                const i = e.chart.ctx.createLinearGradient(
                  0,
                  0,
                  0,
                  e.chart.chartArea.height
                );
                return (
                  i.addColorStop(0, a.gradientStart),
                  i.addColorStop(0.5, a.gradientMiddle),
                  i.addColorStop(1, a.gradientEnd),
                  i
                );
              },
              pointStyle: "circle",
              pointRadius: 0,
              pointHoverRadius: 0,
              pointBorderWidth: 0,
              pointBorderColor: a.mainColor,
              pointBackgroundColor: a.mainColor,
              pointHoverBackgroundColor: a.mainColor,
              pointHoverBorderColor: a.mainColor,
              fill: !0,
            },
          ],
          labels: n.map((e) => 1e3 * e.timestamp),
        };
      }
      function hr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 3),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.$implicit;
          t.ɵɵadvance(1), t.ɵɵtextInterpolate(t.ɵɵpipeBind1(2, 1, e.title));
        }
      }
      function _r(n, a) {
        1 & n &&
          (t.ɵɵelementStart(0, "div", 7),
          t.ɵɵelement(1, "img", 8),
          t.ɵɵelementEnd());
      }
      const Wn = function () {
        return [];
      };
      function vr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "a", 9)(1, "div", 10)(2, "div", 11),
            t.ɵɵelement(3, "img", 12),
            t.ɵɵelementStart(4, "div")(5, "p", 13),
            t.ɵɵtext(6),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(7, "p")(8, "span", 14),
            t.ɵɵtext(9),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(10, "span", 15),
            t.ɵɵtext(11),
            t.ɵɵelementEnd()()()()(),
            t.ɵɵelementStart(12, "div", 16)(13, "span", 17),
            t.ɵɵtext(14),
            t.ɵɵpipe(15, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(16, "div", 18),
            t.ɵɵelement(17, "token-amount", 19),
            t.ɵɵpipe(18, "toBigInt"),
            t.ɵɵelementStart(19, "span", 20),
            t.ɵɵtext(20),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(21, "div", 21)(22, "span", 17),
            t.ɵɵtext(23),
            t.ɵɵpipe(24, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(25, "div", 18),
            t.ɵɵelement(26, "token-amount", 22),
            t.ɵɵpipe(27, "toBigInt"),
            t.ɵɵelementStart(28, "span", 23),
            t.ɵɵtext(29),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(30, "div", 24)(31, "span", 17),
            t.ɵɵtext(32),
            t.ɵɵpipe(33, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(34, "span", 18)(35, "span", 25),
            t.ɵɵtext(36),
            t.ɵɵpipe(37, "tuiFormatNumber"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(38, "span", 26),
            t.ɵɵtext(39),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(40, "div", 27)(41, "span", 17),
            t.ɵɵtext(42),
            t.ɵɵpipe(43, "transloco"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(44, "span", 18)(45, "span", 28),
            t.ɵɵtext(46),
            t.ɵɵpipe(47, "number"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(48, "span", 29),
            t.ɵɵtext(49, "%"),
            t.ɵɵelementEnd()()(),
            t.ɵɵelementStart(50, "div", 30)(51, "div", 31),
            t.ɵɵelement(52, "canvas", 32),
            t.ɵɵpipe(53, "async"),
            t.ɵɵelementEnd()(),
            t.ɵɵelementStart(54, "div", 33),
            t.ɵɵelement(55, "i", 34),
            t.ɵɵelementEnd()()),
          2 & n)
        ) {
          const e = a.$implicit,
            i = t.ɵɵnextContext(2);
          t.ɵɵproperty("routerLink", "opium/pool/" + e.id),
            t.ɵɵattribute("data-id", "opium-pool-" + e.id),
            t.ɵɵadvance(3),
            t.ɵɵproperty("src", e.logoLink, t.ɵɵsanitizeUrl),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.title),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.phaseTitle),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate1("on ", e.phaseEndDate, ""),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(15, 22, i.listFields[1].title)),
            t.ɵɵadvance(3),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(18, 24, e.totalStaked, i.oneInchDecimals)
            )("decimals", i.oneInchDecimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(24, 27, i.listFields[2].title)),
            t.ɵɵadvance(3),
            t.ɵɵproperty(
              "value",
              t.ɵɵpipeBind2(27, 29, e.yourStake, i.oneInchDecimals)
            )("decimals", i.oneInchDecimals),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.stakingTokenSymbol),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(33, 32, i.listFields[3].title)),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind2(37, 34, e.strikePrice, 4)),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(e.strikeTokenSymbol),
            t.ɵɵadvance(3),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(43, 37, i.listFields[4].title)),
            t.ɵɵadvance(4),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind2(47, 39, e.APR, "1.0-2")),
            t.ɵɵadvance(6),
            t.ɵɵproperty(
              "data",
              t.ɵɵpipeBind1(53, 42, i.charts$)[e.id] ||
                t.ɵɵpureFunction0(44, Wn)
            )("options", i.barChartOptions)(
              "plugins",
              t.ɵɵpureFunction0(45, Wn)
            );
        }
      }
      function Cr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "div", 4),
            t.ɵɵtemplate(1, _r, 2, 0, "div", 5),
            t.ɵɵtemplate(2, vr, 56, 46, "a", 6),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", 0 === e.length),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngForOf", e)("ngForTrackBy", i.trackByFn);
        }
      }
      Ln.kL.registry.plugins.get("annotation") || Ln.kL.register(ur.Z);
      let fr = (() => {
        class n {
          constructor(e, i) {
            (this.opiumPoolsQuery = e),
              (this.opiumPoolChartsService = i),
              (this.listFields = qi),
              (this.oneInchDecimals = Le.UU.decimals),
              (this.opiumPools$ =
                this.opiumPoolsQuery.strategiesForCurrentChain$.pipe(
                  (0, m.U)((o) =>
                    o
                      .filter(
                        (c) => (0, Nt.dN)(c).phase !== ft.D.NOT_INITIALIZED
                      )
                      .map(Sn)
                  ),
                  (0, R.O)([]),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.charts$ = this.opiumPools$.pipe(
                (0, _.w)((o) =>
                  (0, W.a)(
                    o.map((c) =>
                      this.getPerformanceChartData$(c.address).pipe(
                        (0, m.U)((l) => ({ id: c.id, chartData: l }))
                      )
                    )
                  )
                ),
                (0, m.U)((o) =>
                  o.reduce((c, l) => ((c[l.id] = l.chartData), c), {})
                ),
                (0, R.O)({}),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.barChartOptions = {
                animation: { duration: 300 },
                responsive: !0,
                maintainAspectRatio: !1,
                interaction: { intersect: !1, mode: "index" },
                scales: { x: { display: !1 }, y: { display: !1 } },
                plugins: { legend: { display: !1 }, tooltip: { enabled: !1 } },
              });
          }
          trackByFn(e, i) {
            return i.id;
          }
          getPerformanceChartData$(e) {
            return this.opiumPoolChartsService
              .fetchPerformanceChartData(e)
              .pipe((0, m.U)(gr));
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(mt.q),
              t.ɵɵdirectiveInject(De)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-pools-list"]],
            viewQuery: function (e, i) {
              if ((1 & e && t.ɵɵviewQuery(tt.jh, 5), 2 & e)) {
                let o;
                t.ɵɵqueryRefresh((o = t.ɵɵloadQuery())) && (i.chart = o.first);
              }
            },
            decls: 4,
            vars: 4,
            consts: [
              [1, "header"],
              ["class", "header-col", 4, "ngFor", "ngForOf"],
              ["class", "body", "data-id", "opium-pools-list", 4, "tuiLet"],
              [1, "header-col"],
              ["data-id", "opium-pools-list", 1, "body"],
              ["class", "loading", 4, "ngIf"],
              [
                "class",
                "body-row",
                3,
                "routerLink",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [1, "loading"],
              ["src", "assets/images/loader_gray.svg", "alt", ""],
              [1, "body-row", 3, "routerLink"],
              ["data-id", "opium-pool.main-info"],
              [1, "pool-main-info"],
              ["alt", "", 1, "logo", 3, "src"],
              ["data-id", "opium-pool.main-info.title", 1, "title"],
              ["data-id", "opium-pool.main-info.-phaseTitle", 1, "phase-title"],
              [
                "data-id",
                "opium-pool.main-info.phaseEndDate",
                1,
                "phase-end-date",
              ],
              ["data-id", "opium-pool.total-staked"],
              [1, "field-title"],
              [1, "field-value"],
              [
                "id",
                "opium-pool.total-staked.totalStakedValue",
                3,
                "value",
                "decimals",
              ],
              [
                "data-id",
                "opium-pool.total-staked.stakingTokenSymbol",
                1,
                "field-value__gray-text",
              ],
              ["data-id", "opium-pool.your-stake"],
              [
                "id",
                "opium-pool.your-stake.yourStakeValue",
                3,
                "value",
                "decimals",
              ],
              [
                "data-id",
                "opium-pool.your-stake.stakingTokenSymbol",
                1,
                "field-value__gray-text",
              ],
              ["data-id", "opium-pool.strike-price"],
              ["data-id", "opium-pool.strike-price.strikePriceValue"],
              [
                "data-id",
                "opium-pool.strike-price.strikeTokenSymbol",
                1,
                "field-value__gray-text",
              ],
              ["data-id", "opium-pool.apr"],
              ["data-id", "opium-pool.apr.aprValue"],
              [1, "field-value__gray-text", "small-space"],
              ["data-id", "opium-pool.perfomance-chart"],
              [1, "performance-chart"],
              [
                "baseChart",
                "",
                "type",
                "line",
                3,
                "data",
                "options",
                "plugins",
              ],
              [1, "arrow-container"],
              [1, "arrow", "right"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵelementStart(0, "div", 0),
                t.ɵɵtemplate(1, hr, 3, 3, "div", 1),
                t.ɵɵelementEnd(),
                t.ɵɵtemplate(2, Cr, 3, 3, "div", 2),
                t.ɵɵpipe(3, "async")),
                2 & e &&
                  (t.ɵɵadvance(1),
                  t.ɵɵproperty("ngForOf", i.listFields),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(3, 2, i.opiumPools$)));
            },
            dependencies: [
              s.sg,
              s.O5,
              w.Ls,
              p.yS,
              tt.jh,
              ge.O,
              x.Ot,
              s.Ov,
              s.JJ,
              he.M,
              I.m,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;border-collapse:separate;border-radius:16px;overflow:hidden;border:1px solid var(--1inch-bg-02);background:var(--1inch-bg-02);margin-top:16px}.header[_ngcontent-%COMP%]{padding:24px 24px 0}.header[_ngcontent-%COMP%], .body-row[_ngcontent-%COMP%]{display:grid;grid-column-gap:16px;grid-row-gap:24px;grid-template-columns:2.3fr 1.5fr 1.5fr 1.4fr 1fr 1.7fr}.body-row[_ngcontent-%COMP%]{padding:20px 24px;color:var(--1inch__ui-01);text-decoration:none;position:relative;border-bottom:1px solid var(--1inch-border-01)}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.body-row[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%]{display:none}.body-row[_ngcontent-%COMP%]:last-child{border-bottom:0}.body-row[_ngcontent-%COMP%]:hover{background:var(--1inch-bg-01)}.arrow-container[_ngcontent-%COMP%]{position:absolute;top:32px;right:32px}.header-col[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin-right:-50px;padding-bottom:8px;color:var(--1inch__ui-02);border-bottom:1px solid var(--1inch-border-01)}.header-col[_ngcontent-%COMP%]:last-of-type{margin-right:0}.loading[_ngcontent-%COMP%]{padding:20px 0;text-align:center}.logo[_ngcontent-%COMP%]{height:40px;width:40px;margin-right:12px}.pool-main-info[_ngcontent-%COMP%]{width:100%;display:flex}.title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin-bottom:4px}.phase-title[_ngcontent-%COMP%], .phase-end-date[_ngcontent-%COMP%]{font-size:13px}.phase-title[_ngcontent-%COMP%]{color:var(--1inch-common-text-03);margin-right:6px}.phase-end-date[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.performance-chart[_ngcontent-%COMP%]{width:124px;height:32px}.arrow[_ngcontent-%COMP%]{border:solid var(--1inch-icon-color-03);border-width:0 2px 2px 0;display:inline-block;padding:5px}.right[_ngcontent-%COMP%]{transform:rotate(-45deg)}.field-value__gray-text[_ngcontent-%COMP%]{display:inline-block;margin-left:8px;color:var(--1inch__ui-02)}.field-value__gray-text.small-space[_ngcontent-%COMP%]{margin-left:4px}@media (max-width: 1200px){[_nghost-%COMP%]{background:none;border:0;border-radius:0}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{display:none}.body-row[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr;grid-column-gap:0;background:var(--1inch-bg-02);border-bottom:0;margin-bottom:24px;border-radius:16px}.body-row[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%]{display:block;color:var(--1inch__ui-02);font-size:13px;font-weight:400;margin-bottom:10px}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:block;padding-left:24px}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){padding-left:0}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){border-bottom:1px solid var(--1inch-border-01);padding-bottom:16px}.arrow-container[_ngcontent-%COMP%]{right:28px;top:32px}}@media (max-width: 720px){.body-row[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:0;border-bottom:0!important}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){padding-left:24px}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{grid-column:1/3;border-bottom:1px solid var(--1inch-border-01)!important}.body-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){display:none}}@media (max-width: 418px){[_nghost-%COMP%]{margin:0 -16px 16px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      const xr = function (n) {
        return { asset: n };
      };
      function wr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementStart(0, "p", 2),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "tradingStrategies.amm-derivatives-description-full",
                t.ɵɵpureFunction1(4, xr, e)
              ),
              "\n"
            );
        }
      }
      const Sr = function (n, a) {
        return { networkName: n, asset: a };
      };
      function yr(n, a) {
        if (1 & n) {
          const e = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "alert", 5),
            t.ɵɵlistener("onCloseClick", function () {
              t.ɵɵrestoreView(e);
              const o = t.ɵɵnextContext(3);
              return t.ɵɵresetView(o.handleCloseAlert());
            }),
            t.ɵɵtext(1),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵelementEnd();
        }
        if (2 & n) {
          const e = a.tuiLet,
            i = t.ɵɵnextContext().tuiLet;
          t.ɵɵadvance(1),
            t.ɵɵtextInterpolate1(
              " ",
              t.ɵɵpipeBind2(
                2,
                1,
                "tradingStrategies.alert",
                t.ɵɵpureFunction2(4, Sr, i, e)
              ),
              " "
            );
        }
      }
      function Pr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, yr, 3, 7, "alert", 4),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.assetForAlert$));
        }
      }
      function kr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, Pr, 3, 3, "ng-container", 3),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, e.networkNameForAlert$));
        }
      }
      const _e = [gt.$L.etherumMainnet, gt.$L.polygonMainnet],
        jn = "pools_alert_hidden";
      let Or = (() => {
        class n {
          constructor(e, i, o, c) {
            (this.destroy$ = e),
              (this.opiumPoolsService = i),
              (this.opiumPoolsQuery = o),
              (this.activeConnectionQuery = c),
              (this.assetForTitle$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, _.w)((l) =>
                    _e.includes(l)
                      ? this.opiumPoolsQuery.selectEntity(
                          (d) => d.chainId === l
                        )
                      : (0, T.of)(null)
                  ),
                  (0, ue.h)((l) => !!l),
                  (0, m.U)((l) => l.product.underlyingTitle)
                )),
              (this.chainIdForAlert$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, m.U)((l) => {
                    const d = _e.findIndex((f) => f === l);
                    if (d < 0) return null;
                    const u = [..._e.slice(0, d), ..._e.slice(d + 1)];
                    return u.length ? u[0] : null;
                  })
                )),
              (this.networkNameForAlert$ = this.chainIdForAlert$.pipe(
                (0, ue.h)((l) => !!l),
                (0, m.U)((l) => gt.fy[l])
              )),
              (this.assetForAlert$ = this.chainIdForAlert$.pipe(
                (0, _.w)((l) =>
                  this.opiumPoolsQuery.selectEntity((d) => d.chainId === l)
                ),
                (0, ue.h)((l) => !!l),
                (0, m.U)((l) =>
                  null == l ? void 0 : l.product.underlyingTitle
                )
              ));
          }
          get isAlertHidden() {
            return Boolean(localStorage.getItem(jn));
          }
          handleCloseAlert() {
            localStorage.setItem(jn, "1");
          }
          ngOnInit() {
            const e = this.opiumPoolsService
              .persistOpiumPools()
              .pipe((0, $t.R)(this.destroy$));
            (0, V.O)(e, "persistOpiumPools$");
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(xt.a3, 2),
              t.ɵɵdirectiveInject(ce),
              t.ɵɵdirectiveInject(mt.q),
              t.ɵɵdirectiveInject(dt.r)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["opium-pools-page"]],
            features: [t.ɵɵProvidersFeature([xt.a3])],
            decls: 4,
            vars: 4,
            consts: [
              ["class", "text", 4, "tuiLet"],
              [4, "ngIf"],
              [1, "text"],
              [4, "tuiLet"],
              ["type", "notification", 3, "onCloseClick", 4, "tuiLet"],
              ["type", "notification", 3, "onCloseClick"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, wr, 3, 6, "p", 0),
                t.ɵɵpipe(1, "async"),
                t.ɵɵtemplate(2, kr, 3, 3, "ng-container", 1),
                t.ɵɵelement(3, "opium-pools-list")),
                2 & e &&
                  (t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(1, 2, i.assetForTitle$)
                  ),
                  t.ɵɵadvance(2),
                  t.ɵɵproperty("ngIf", !i.isAlertHidden));
            },
            dependencies: [s.O5, fr, w.Ls, Vt.w, x.Ot, s.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block;margin:auto;max-width:1180px;color:var(--1inch__ui-01)}[_nghost-%COMP%]   .description[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;line-height:37px;font-weight:700;margin-bottom:16px}[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{display:inline;font-size:16px;line-height:26px;color:var(--1inch__ui-02)}[_nghost-%COMP%]   .link[_ngcontent-%COMP%]{text-decoration:none}@media (max-width: 520px){[_nghost-%COMP%]   .text-wrap[_ngcontent-%COMP%]{margin:0 8px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function Tr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "h3", 6)(2, "span", 9),
            t.ɵɵtext(3, "AMM Liquidity Pools"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "a", 10),
            t.ɵɵnamespaceSVG(),
            t.ɵɵelementStart(5, "svg", 11),
            t.ɵɵelement(6, "use", 12),
            t.ɵɵelementEnd()()(),
            t.ɵɵnamespaceHTML(),
            t.ɵɵelement(7, "trading-strategies-list", 13),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext(2).tuiLet;
          t.ɵɵadvance(7), t.ɵɵproperty("strategies", e);
        }
      }
      function br(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "div", 1)(2, "h1", 2),
            t.ɵɵtext(3, "1inch Earn"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(4, "div", 3)(5, "p", 4),
            t.ɵɵtext(
              6,
              " 1inch Earn offers liquidity providers attractive APYs through efficient use of capital. "
            ),
            t.ɵɵelementEnd()()(),
            t.ɵɵtemplate(7, Tr, 8, 1, "ng-container", 5),
            t.ɵɵelementContainerStart(8),
            t.ɵɵelementStart(9, "h3", 6)(10, "span", 7),
            t.ɵɵtext(11, "Derivatives Liquidity Pools"),
            t.ɵɵelementEnd()(),
            t.ɵɵelement(12, "opium-pools-page", 8),
            t.ɵɵelementContainerEnd()()),
          2 & n)
        ) {
          const e = a.tuiLet;
          t.ɵɵadvance(7), t.ɵɵproperty("ngIf", e > 0);
        }
      }
      function Mr(n, a) {
        if (
          (1 & n &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, br, 13, 1, "ng-container", 0),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const e = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "tuiLet",
              t.ɵɵpipeBind1(2, 1, e.userBalanceInStrategy$)
            );
        }
      }
      let Ne = (() => {
        class n {
          constructor(e, i, o, c, l) {
            (this.activeConnectionQuery = e),
              (this.tradingStrategiesQuery = i),
              (this.tradingStrategiesUpdateService = o),
              (this.walletConnectionQuery = c),
              (this.ethContractService = l),
              (this.strategiesForCurrentChain$ =
                this.tradingStrategiesQuery.strategiesForCurrentChain$),
              (this.userBalanceInStrategy$ = (0, W.a)([
                this.walletConnectionQuery.connectedWalletAddress$,
                this.strategiesForCurrentChain$,
              ]).pipe(
                (0, _.w)(([d, u]) =>
                  d && 0 !== (null == u ? void 0 : u.length)
                    ? this.ethContractService.callProviderContract(
                        ot._.ERC20ABI,
                        Ra.x[0].contractAddress,
                        "balanceOf",
                        [d]
                      )
                    : (0, T.of)("0")
                ),
                (0, m.U)((d) => +d),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.subscriptions = new $n.w0());
          }
          ngOnInit() {
            const e = this.strategiesForCurrentChain$.pipe(
              (0, st.x)(J.fS0),
              (0, _.w)((i) =>
                (0, W.a)(
                  i.map((o) =>
                    this.tradingStrategiesUpdateService.persistTradingStrategy(
                      o
                    )
                  )
                )
              )
            );
            (0, V.O)(e, "tradingStrategiesListUpdates$", this.subscriptions);
          }
          ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
          trackByFn(e, i) {
            return i.id;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(
              t.ɵɵdirectiveInject(dt.r),
              t.ɵɵdirectiveInject(Ot.c),
              t.ɵɵdirectiveInject(xn),
              t.ɵɵdirectiveInject(ct.r),
              t.ɵɵdirectiveInject(ne.u)
            );
          }),
          (n.ɵcmp = t.ɵɵdefineComponent({
            type: n,
            selectors: [["trading-strategies"]],
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              [1, "description"],
              [
                "transloco",
                "tradingStrategies.trading-strategies-page-title",
                1,
                "title",
              ],
              [1, "text-wrap"],
              [
                "transloco",
                "tradingStrategies.amm-derivatives-description1",
                1,
                "text",
              ],
              [4, "ngIf"],
              [1, "pools-title"],
              ["transloco", "tradingStrategies.derivatives-title"],
              [1, "opium-pools-page"],
              ["transloco", "tradingStrategies.amm-title"],
              [
                "href",
                "https://help.1inch.io/en/articles/5743587-what-is-1inch-network-earn-and-how-does-it-work",
                "target",
                "_blank",
                "rel",
                "noopener noreferrer",
                1,
                "link",
              ],
              ["width", "24", "height", "24", 1, "pools-title__link"],
              [0, "xlink", "href", "assets/images/icons/info.svg#info"],
              [1, "trading-strategies-list", 3, "strategies"],
            ],
            template: function (e, i) {
              1 & e &&
                (t.ɵɵtemplate(0, Mr, 3, 3, "ng-container", 0),
                t.ɵɵpipe(1, "async")),
                2 & e &&
                  t.ɵɵproperty(
                    "tuiLet",
                    t.ɵɵpipeBind1(1, 1, i.strategiesForCurrentChain$)
                  );
            },
            dependencies: [s.O5, x.KI, w.Ls, dr, Or, s.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block;margin:auto;max-width:1180px;color:var(--1inch__ui-01)}[_nghost-%COMP%]   .description[_ngcontent-%COMP%]{margin-bottom:32px}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;line-height:37px;font-weight:700;margin-bottom:16px}[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{display:inline;font-size:16px;line-height:26px;color:var(--1inch__ui-02)}[_nghost-%COMP%]   .link[_ngcontent-%COMP%]{text-decoration:none}@media (max-width: 520px){[_nghost-%COMP%]   .text-wrap[_ngcontent-%COMP%]{margin:0 8px}}.pools-title[_ngcontent-%COMP%]{font-size:24px;line-height:28px;margin-bottom:24px}.pools-title__link[_ngcontent-%COMP%]{margin:-4px 0 0 10px;color:var(--1inch__ui-02)}.trading-strategies-list[_ngcontent-%COMP%]{display:block;margin-bottom:64px}.opium-pools-page[_ngcontent-%COMP%]{margin-top:20px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      const Er = [
        ...Ua,
        {
          path: "",
          component: Ne,
          canActivate: [gn],
          canActivateChild: [_n],
          children: [
            {
              path: "deposit/:firstToken/:secondToken",
              pathMatch: "full",
              component: Ne,
              data: { fromMain: !0 },
              resolve: { dialog: Qe },
            },
            {
              path: "withdraw/:firstToken/:secondToken",
              pathMatch: "full",
              component: Ne,
              data: { fromMain: !0 },
              resolve: { dialog: Qe },
            },
          ],
        },
      ];
      let Ir = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              imports: [
                x.y4,
                It._,
                Be.E,
                pt.A,
                s.ez,
                wn,
                p.Bz,
                w.WD,
                vt.S,
                ae,
                Z.z,
              ],
            })),
            n
          );
        })(),
        Ar = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = t.ɵɵdefineInjector({
              providers: [We, Zt, xn, _n, gn, Qe],
              imports: [
                p.Bz.forChild(Er),
                s.ez,
                It._,
                b.vV,
                bt.m,
                x.y4,
                O.ReactiveFormsModule,
                z.Is,
                te.Z,
                Tt.T,
                qt.y,
                ve.j,
                w.WD,
                Xi.p,
                h.JF,
                di.X,
                at.jh,
                F.pc,
                X.Cu,
                I.a,
                Be.E,
                pt.A,
                ci.l,
                rt.$$,
                vt.S,
                hi,
                Pt.n,
                Ir,
                M.Z,
                wn,
                si.h,
                li.N,
                L.N,
                B.iK,
                ri,
                Q.k,
                ae,
                pi,
                Z.z,
              ],
            })),
            n
          );
        })();
    },
  },
]);
