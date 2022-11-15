"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [4143],
  {
    8035: (Y, w, n) => {
      n.d(w, { v: () => L });
      var r = n(3012),
        u = n(51714),
        l = n(51109),
        T = n(98851),
        e = n(58903),
        o = n(93130);
      let L = (() => {
        class I {
          constructor(i, B, A) {
            (this.addressGetCodeService = i),
              (this.ensService = B),
              (this.walletConnectionQuery = A);
          }
          getAsyncAddressValidator(i) {
            const {
                checkEns: B,
                banTheSameAddress: A,
                banContract: k,
                ignoreEmptyAddress: t,
              } = i,
              h = B
                ? this.ensService.resolveWalletAddressByEnsName$.bind(
                    this.ensService
                  )
                : (j) => (0, r.of)(j),
              g = k
                ? this.addressGetCodeService.isAddressIsContract$.bind(
                    this.addressGetCodeService
                  )
                : (j) => (0, r.of)(!1),
              D = A
                ? this.walletConnectionQuery.connectedWalletAddress$
                : (0, r.of)("");
            return (0, u.qV)(D, h, null != t && t, g);
          }
        }
        return (
          (I.ɵfac = function (i) {
            return new (i || I)(
              l.ɵɵinject(T.j),
              l.ɵɵinject(e.D),
              l.ɵɵinject(o.r)
            );
          }),
          (I.ɵprov = l.ɵɵdefineInjectable({
            token: I,
            factory: I.ɵfac,
            providedIn: "root",
          })),
          I
        );
      })();
    },
    13748: (Y, w, n) => {
      n.d(w, { y: () => J });
      var r = n(31777),
        u = n(79296),
        l = n(77724),
        T = n(90813),
        e = n(51109),
        o = n(69064),
        L = n(40475),
        I = n(38143),
        P = n(62425),
        i = n(12725),
        B = n(98569),
        A = n(13836),
        k = n(75392),
        t = n(48543);
      function h(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementStart(0, "div", 7)(1, "span", 8),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span", 9),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(7, "div", 10),
            e.ɵɵelement(8, "amount-input", 11),
            e.ɵɵpipe(9, "tuiCurrency"),
            e.ɵɵelementEnd()()),
          2 & p)
        ) {
          const s = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                3,
                6,
                "advancedSettingsPanels.compliance.risk-level"
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                6,
                8,
                "advancedSettingsPanels.compliance.risk-level.info"
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("formControl", s.riskLevelControl)("precision", 0)(
              "max",
              100
            )("postfix", e.ɵɵpipeBind1(9, 10, "%"));
        }
      }
      let g = (() => {
        class p {
          constructor(s, _) {
            (this.swapSettingsQuery = s),
              (this.swapSettingsService = _),
              (this.complianceSettings$ =
                this.swapSettingsQuery.complianceSettings$),
              (this.riskLevelControl = new r.UntypedFormControl(
                this.swapSettingsQuery.complianceRiskLevel
              )),
              (this.complianceIsEnabledControl = new r.UntypedFormControl(
                this.swapSettingsQuery.complianceIsEnabled
              )),
              (this.subscriptionStore = new u.w0());
          }
          ngOnInit() {
            const s = this.riskLevelControl.valueChanges.pipe(
                (0, l.b)((z) => {
                  var K;
                  this.swapSettingsService.setComplianceRiskLevelForCurrentChain(
                    null !== (K = z) && void 0 !== K ? K : 0
                  ),
                    null === z && this.riskLevelControl.setValue(0);
                })
              ),
              _ = this.complianceIsEnabledControl.valueChanges.pipe(
                (0, l.b)((z) => {
                  this.swapSettingsService.toggleIsEnabledComplianceForCurrentChain();
                })
              );
            (0, T.O)(s, "riskLevelChange$", this.subscriptionStore),
              (0, T.O)(_, "complianceIsEnabledChange$", this.subscriptionStore);
          }
          ngOnDestroy() {
            this.subscriptionStore.unsubscribe();
          }
          toggle(s) {
            s.preventDefault(),
              this.swapSettingsService.toggleIsEnabledComplianceForCurrentChain();
          }
        }
        return (
          (p.ɵfac = function (s) {
            return new (s || p)(
              e.ɵɵdirectiveInject(o.G),
              e.ɵɵdirectiveInject(L._)
            );
          }),
          (p.ɵcmp = e.ɵɵdefineComponent({
            type: p,
            selectors: [["compliance-settings"]],
            decls: 13,
            vars: 11,
            consts: [
              ["backLink", "../"],
              ["transloco", "advancedSettingsPanels.compliance"],
              [
                "type",
                "notification",
                1,
                "compliance-settings-info",
                3,
                "hideCloseButton",
              ],
              [1, "compliance-settings-title-wrap"],
              [1, "compliance-settings-title"],
              [3, "formControl"],
              ["class", "compliance-settings-risk-level", 4, "ngIf"],
              [1, "compliance-settings-risk-level"],
              [1, "risk-level-title"],
              [1, "risk-level-info"],
              [1, "risk-level-input-wrap"],
              [
                "decimal",
                "never",
                1,
                "risk-level-input",
                3,
                "formControl",
                "precision",
                "max",
                "postfix",
              ],
            ],
            template: function (s, _) {
              1 & s &&
                (e.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                e.ɵɵtext(2, "Pre-swap compliance"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(3, "alert", 2),
                e.ɵɵtext(4),
                e.ɵɵpipe(5, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(6, "div", 3)(7, "span", 4),
                e.ɵɵtext(8),
                e.ɵɵpipe(9, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(10, "mat-slide-toggle", 5),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(11, h, 10, 12, "div", 6),
                e.ɵɵpipe(12, "async")),
                2 & s &&
                  (e.ɵɵadvance(3),
                  e.ɵɵproperty("hideCloseButton", !0),
                  e.ɵɵadvance(1),
                  e.ɵɵtextInterpolate1(
                    " ",
                    e.ɵɵpipeBind1(
                      5,
                      5,
                      "advancedSettingsPanels.compliance.info"
                    ),
                    "\n"
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(9, 7, "advancedSettingsPanels.compliance")
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("formControl", _.complianceIsEnabledControl),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(12, 9, _.complianceSettings$).isEnabled
                  ));
            },
            dependencies: [
              I.O5,
              r.NgControlStatus,
              P.y,
              i.KI,
              r.FormControlDirective,
              B.w,
              A.Rr,
              k.l,
              I.Ov,
              i.Ot,
              t.iJ,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;min-height:624px}.compliance-settings-info[_ngcontent-%COMP%]{margin-bottom:32px;display:block}.compliance-settings-title-wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px}.compliance-settings-risk-level[_ngcontent-%COMP%]{display:flex;flex-direction:column}.risk-level-title[_ngcontent-%COMP%]{margin-bottom:4px}.risk-level-info[_ngcontent-%COMP%]{font-size:16px;line-height:18px;color:var(--1inch__ui-02);margin-bottom:16px}.risk-level-input-wrap[_ngcontent-%COMP%]{width:100%;height:56px;border-radius:12px;background-color:var(--1inch-bg-07);box-shadow:var(--1inch-shadow-03);display:flex;flex-direction:column;justify-content:center}.risk-level-input[_ngcontent-%COMP%]{width:100%;height:56px;--tui-focus: transparent}.risk-level-input[_ngcontent-%COMP%]     tui-wrapper{height:56px}.risk-level-input[_ngcontent-%COMP%]     label{display:none}.risk-level-input[_ngcontent-%COMP%]     .t-input{padding:0!important}",
            ],
            changeDetection: 0,
          })),
          p
        );
      })();
      var D = n(29737),
        j = n(76327),
        H = n(12733),
        R = n(52563),
        ee = n(18471),
        E = n(95496),
        $ = n(54510),
        S = n(24124),
        F = n(41140),
        Q = n(48091),
        ie = n(5728);
      function se(p, C) {
        if (1 & p) {
          const s = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 7),
            e.ɵɵtext(2, "This token has already been added"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "custom-token-item", 8),
            e.ɵɵlistener("removeToken", function () {
              e.ɵɵrestoreView(s);
              const z = e.ɵɵnextContext().ngIf,
                K = e.ɵɵnextContext();
              return e.ɵɵresetView(K.removeCustomToken(z.token));
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & p) {
          const s = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(3), e.ɵɵproperty("token", s.token);
        }
      }
      function b(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementStart(0, "span", 11), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & p)
        ) {
          const s = C.ngIf;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(s);
        }
      }
      function V(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "custom-token-item", 9),
            e.ɵɵtemplate(2, b, 2, 1, "span", 10),
            e.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const s = e.ɵɵnextContext().ngIf,
            _ = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("token", s.token)(
              "importLink",
              _.getImportLink(s.token)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", s.message);
        }
      }
      function y(p, C) {
        1 & p && e.ɵɵelement(0, "img", 12);
      }
      function O(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 13),
            e.ɵɵelement(2, "span", 14),
            e.ɵɵelementStart(3, "span", 15),
            e.ɵɵtext(4, "Token not found"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "span", 16),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "transloco"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const s = e.ɵɵnextContext().ngIf,
            _ = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(7, 1, _.getDescriptionForError(s.importState))
            );
        }
      }
      function W(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementStart(0, "div", 4)(1, "div"),
            e.ɵɵtemplate(2, se, 4, 1, "ng-container", 5),
            e.ɵɵtemplate(3, V, 3, 3, "ng-container", 5),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(4, y, 1, 0, "img", 6),
            e.ɵɵtemplate(5, O, 8, 3, "ng-container", 5),
            e.ɵɵelement(6, "div"),
            e.ɵɵelementEnd()),
          2 & p)
        ) {
          const s = C.ngIf,
            _ = e.ɵɵnextContext();
          e.ɵɵclassProp("loading", s.importState === _.importStates.Loading),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              s.importState === _.importStates.TokenAlreadyExists
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", _.showImportToken(s.importState)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", s.importState === _.importStates.Loading),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", _.showErrorScreen(s.importState));
        }
      }
      let te = (() => {
        class p {
          constructor(s, _, z, K, q, me) {
            (this.customTokensService = s),
              (this.tokensSearchService = _),
              (this.router = z),
              (this.activatedRoute = K),
              (this.activeConnectionQuery = q),
              (this.customTokensHelperService = me),
              (this.importStates = R.H),
              (this.widgetInputControl = new r.UntypedFormControl()),
              (this.tokenForImportResult$ =
                this.widgetInputControl.valueChanges.pipe(
                  (0, j.w)((ue) =>
                    this.tokensSearchService
                      .getTokenForImport(ue, !1)
                      .pipe((0, H.O)({ importState: R.H.Loading }))
                  )
                )),
              (this._backToUrl = null),
              (this._backToUrl = (0, D.pMU)(
                null,
                ["extras", "state", "backTo"],
                this.router.getCurrentNavigation()
              ));
          }
          get backLink() {
            return this._backToUrl || "../";
          }
          removeCustomToken(s) {
            const { currentChainId: _ } = this.activeConnectionQuery;
            this.customTokensService.removeToken(
              Object.assign(Object.assign({}, s), { chainId: _ })
            ),
              this.router.navigate(["../"], {
                relativeTo: this.activatedRoute,
              });
          }
          getImportLink(s) {
            return this.customTokensHelperService.getImportLink(s);
          }
          showImportToken(s) {
            return [R.H.Success, R.H.DuplicateName].includes(s);
          }
          showErrorScreen(s) {
            return [
              R.H.InvalidTokenAddress,
              R.H.CanNotFetchToken,
              R.H.CanNotFindToken,
            ].includes(s);
          }
          getDescriptionForError(s) {
            return (
              {
                [R.H.InvalidTokenAddress]: "uni.addToken.invalid-token-address",
                [R.H.CanNotFetchToken]: "uni.addToken.can-not-fetch-token",
                [R.H.CanNotFindToken]: "uni.addToken.can-not-find-token",
              }[s] || "uni.addToken.unknown-error"
            );
          }
        }
        return (
          (p.ɵfac = function (s) {
            return new (s || p)(
              e.ɵɵdirectiveInject(ee.p),
              e.ɵɵdirectiveInject(E.M),
              e.ɵɵdirectiveInject($.F0),
              e.ɵɵdirectiveInject($.gz),
              e.ɵɵdirectiveInject(S.r),
              e.ɵɵdirectiveInject(F.v)
            );
          }),
          (p.ɵcmp = e.ɵɵdefineComponent({
            type: p,
            selectors: [["add-custom-token"]],
            decls: 7,
            vars: 8,
            consts: [
              [3, "backLink"],
              ["transloco", "uni.addToken.add-token"],
              ["dataId", "add-token", 3, "placeholder", "formControl"],
              ["class", "add-token-wrap", 3, "loading", 4, "ngIf"],
              [1, "add-token-wrap"],
              [4, "ngIf"],
              [
                "class",
                "custom-token-loader",
                "src",
                "/assets/images/loader3.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              [
                "transloco",
                "uni.addToken.token-already-been-added",
                1,
                "custom-token-message",
              ],
              [3, "token", "removeToken"],
              [3, "token", "importLink"],
              ["class", "custom-token-message", 4, "ngIf"],
              [1, "custom-token-message"],
              [
                "src",
                "/assets/images/loader3.svg",
                "alt",
                "",
                1,
                "custom-token-loader",
              ],
              [1, "empty-list-wrap"],
              [1, "empty-list-image"],
              [
                "transloco",
                "uni.addToken.token-not-found",
                1,
                "empty-list-text",
              ],
              [1, "empty-list-subtext"],
            ],
            template: function (s, _) {
              1 & s &&
                (e.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                e.ɵɵtext(2, "Add a token"),
                e.ɵɵelementEnd()(),
                e.ɵɵelement(3, "widget-input", 2),
                e.ɵɵpipe(4, "transloco"),
                e.ɵɵtemplate(5, W, 7, 6, "div", 3),
                e.ɵɵpipe(6, "async")),
                2 & s &&
                  (e.ɵɵpropertyInterpolate("backLink", _.backLink),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "placeholder",
                    e.ɵɵpipeBind1(4, 4, "uni.input.search-by-address")
                  )("formControl", _.widgetInputControl),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(6, 6, _.tokenForImportResult$)
                  ));
            },
            dependencies: [
              I.O5,
              P.y,
              Q.O,
              i.KI,
              ie.G,
              r.NgControlStatus,
              r.FormControlDirective,
              I.Ov,
              i.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;height:648px;max-height:calc(100vh - 160px)}.add-token-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100% - 71px)}.add-token-wrap.loading[_ngcontent-%COMP%]{justify-content:center;align-items:center}.empty-list-wrap[_ngcontent-%COMP%]{display:grid;justify-items:center;padding-bottom:42px}.empty-list-text[_ngcontent-%COMP%]{line-height:26px;font-weight:500;margin:24px 0 4px}.empty-list-subtext[_ngcontent-%COMP%]{font-size:13px;line-height:16px;color:var(--1inch__ui-02)}.empty-list-image[_ngcontent-%COMP%]{height:160px;width:160px;background-image:url(/../../assets/images/empty-states/nothing-found.png);background-size:contain}.light-theme[_nghost-%COMP%]   .empty-list-image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .empty-list-image[_ngcontent-%COMP%]{background-image:url(/../../assets/images/empty-states/nothing-found-light-theme.png)}.custom-token-message[_ngcontent-%COMP%]{display:block;margin-bottom:8px;font-size:13px;line-height:16px;color:var(--1inch__text-and-icons__approve)}.custom-token-loader[_ngcontent-%COMP%]{width:80px;height:80px;margin-top:-50px}",
            ],
            changeDetection: 0,
          })),
          p
        );
      })();
      var N = n(64736),
        ne = n(66027),
        G = n(61870),
        ae = n(74578),
        le = n(71106);
      function pe(p, C) {
        if (1 & p) {
          const s = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "custom-token-item", 15),
            e.ɵɵlistener("removeToken", function () {
              const K = e.ɵɵrestoreView(s).$implicit,
                q = e.ɵɵnextContext(3);
              return e.ɵɵresetView(q.removeCustomToken(K));
            }),
            e.ɵɵelementEnd();
        }
        2 & p && e.ɵɵproperty("token", C.$implicit);
      }
      function de(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementStart(0, "div", 13),
            e.ɵɵtemplate(1, pe, 1, 1, "custom-token-item", 14),
            e.ɵɵelementEnd()),
          2 & p)
        ) {
          const s = e.ɵɵnextContext().tuiLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", s);
        }
      }
      function v(p, C) {
        1 & p &&
          (e.ɵɵelementStart(0, "div")(1, "div", 16),
          e.ɵɵelement(2, "loading-indicator", 17),
          e.ɵɵelementEnd()()),
          2 & p && (e.ɵɵadvance(2), e.ɵɵproperty("width", 36)("height", 36));
      }
      function M(p, C) {
        1 & p &&
          (e.ɵɵelementStart(0, "div", 18),
          e.ɵɵelement(1, "span", 19),
          e.ɵɵelementStart(2, "span", 20),
          e.ɵɵtext(3, "List is empty"),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, "span", 21),
          e.ɵɵtext(5, "Can\u2019t find any custom token"),
          e.ɵɵelementEnd()());
      }
      function m(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementStart(0, "div", 3)(1, "div", 4),
            e.ɵɵelement(2, "widget-input", 5),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵtemplate(4, de, 2, 1, "div", 6),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, v, 3, 2, "div", 7),
            e.ɵɵtemplate(6, M, 6, 0, "div", 8),
            e.ɵɵelementStart(7, "a", 9)(8, "span", 10),
            e.ɵɵtext(9, "Add token"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(10, "svg", 11),
            e.ɵɵelement(11, "use", 12),
            e.ɵɵelementEnd()()()),
          2 & p)
        ) {
          const s = C.tuiLet,
            _ = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "placeholder",
              e.ɵɵpipeBind1(3, 5, "uni.input.search-by-name")
            )("formControl", _.widgetInputControl),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", s),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !s),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", s && 0 === s.length);
        }
      }
      let c = (() => {
        class p {
          constructor(s, _, z) {
            (this.customTokensQuery = s),
              (this.customTokensService = _),
              (this.customTokensHelperService = z),
              (this.widgetInputControl = new r.UntypedFormControl()),
              (this.customTokens$ = this.widgetInputControl.valueChanges.pipe(
                (0, j.w)((K) =>
                  this.customTokensQuery.selectAll().pipe(
                    (0, H.O)(null),
                    (0, N.U)((q) =>
                      ((p, C = "") => {
                        const s = (0, D.hXT)((K) => {
                            const q = K.symbol
                                .toLowerCase()
                                .includes(C.toLowerCase()),
                              me = K.name
                                .toLowerCase()
                                .includes(C.toLowerCase());
                            return q || me;
                          }, p),
                          _ = (0, ne.W)(C);
                        return (0, D.DYV)((K, q) => _(K.symbol, q.symbol))(s);
                      })(q, K)
                    )
                  )
                )
              ));
          }
          removeCustomToken(s) {
            this.customTokensService.removeToken(s),
              this.customTokensHelperService.navigateToDefaultSwapUrlIfNeeded(
                s
              );
          }
        }
        return (
          (p.ɵfac = function (s) {
            return new (s || p)(
              e.ɵɵdirectiveInject(G.k),
              e.ɵɵdirectiveInject(ee.p),
              e.ɵɵdirectiveInject(F.v)
            );
          }),
          (p.ɵcmp = e.ɵɵdefineComponent({
            type: p,
            selectors: [["custom-tokens"]],
            decls: 5,
            vars: 3,
            consts: [
              ["backLink", "../"],
              [
                "transloco",
                "uni.customTokens.custom-tokens",
                1,
                "custom-tokens-title",
              ],
              ["class", "custom-tokens-wrap", 4, "tuiLet"],
              [1, "custom-tokens-wrap"],
              [1, "custom-tokens-list-wrap"],
              ["dataId", "custom-tokens", 3, "placeholder", "formControl"],
              ["class", "custom-tokens-list", 4, "ngIf"],
              [4, "ngIf"],
              ["class", "empty-list-wrap", 4, "ngIf"],
              [
                "routerLink",
                "add-token",
                "data-id",
                "custom-tokens.add-token-button",
                1,
                "custom-tokens-add-link",
              ],
              ["transloco", "uni.add-token"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "/assets/images/icons/plus_2.svg#plus_2"],
              [1, "custom-tokens-list"],
              [3, "token", "removeToken", 4, "ngFor", "ngForOf"],
              [3, "token", "removeToken"],
              [1, "custom-token-loader"],
              [3, "width", "height"],
              [1, "empty-list-wrap"],
              [1, "empty-list-image"],
              [
                "transloco",
                "uni.customTokens.list-is-empty",
                1,
                "empty-list-text",
              ],
              [
                "transloco",
                "uni.customTokens.cant-find",
                1,
                "empty-list-subtext",
              ],
            ],
            template: function (s, _) {
              1 & s &&
                (e.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                e.ɵɵtext(2, "Custom tokens"),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(3, m, 12, 7, "div", 2),
                e.ɵɵpipe(4, "async")),
                2 & s &&
                  (e.ɵɵadvance(3),
                  e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(4, 1, _.customTokens$)));
            },
            dependencies: [
              I.sg,
              I.O5,
              $.yS,
              P.y,
              ae.Ls,
              le.Q,
              i.KI,
              ie.G,
              r.NgControlStatus,
              r.FormControlDirective,
              Q.O,
              I.Ov,
              i.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;height:648px;max-height:calc(100vh - 160px)}.custom-tokens-title[_ngcontent-%COMP%]{max-width:80%;display:block;margin:auto}@media (max-width: 360px){.custom-tokens-title[_ngcontent-%COMP%]{font-size:16px}}.custom-tokens-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100% - 71px)}.custom-tokens-list-wrap[_ngcontent-%COMP%]{max-height:calc(100% - 130px)}.custom-tokens-list[_ngcontent-%COMP%]{height:calc(100% + 16px);overflow:auto;margin:0 -12px 0 -16px;padding:0 12px 0 16px}.custom-tokens-add-link[_ngcontent-%COMP%]{margin:0 -16px -16px;padding:16px 0;text-align:center;text-decoration:none;border-top:1px solid var(--1inch-border-01);color:var(--1inch-common-text-03)}.custom-tokens-add-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:26px;margin-right:8px}.custom-tokens-add-link[_ngcontent-%COMP%]:hover, .custom-tokens-add-link[_ngcontent-%COMP%]:focus{opacity:.75}.empty-list-wrap[_ngcontent-%COMP%]{display:grid;justify-items:center;margin:16px 0}.empty-list-text[_ngcontent-%COMP%]{line-height:26px;font-weight:500;margin:16px 0 8px}.empty-list-subtext[_ngcontent-%COMP%]{font-size:12px;color:var(--1inch__ui-02)}.empty-list-image[_ngcontent-%COMP%]{height:160px;width:160px;background-image:url(/../../assets/images/empty-states/nothing-found.png);background-size:contain}.light-theme[_nghost-%COMP%]   .empty-list-image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .empty-list-image[_ngcontent-%COMP%]{background-image:url(/../../assets/images/empty-states/nothing-found-light-theme.png)}.custom-token-loader[_ngcontent-%COMP%]{text-align:center}",
            ],
            changeDetection: 0,
          })),
          p
        );
      })();
      var f = n(54189),
        a = n(29439);
      function d(p, C) {
        if (1 & p) {
          const s = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-list-option", 8),
            e.ɵɵlistener("click", function () {
              const K = e.ɵɵrestoreView(s).$implicit,
                q = e.ɵɵnextContext(2);
              return e.ɵɵresetView(q.handleItemClick(K));
            }),
            e.ɵɵelementStart(1, "div", 9),
            e.ɵɵelement(2, "img", 10),
            e.ɵɵelementStart(3, "span"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()();
        }
        if (2 & p) {
          const s = C.$implicit;
          e.ɵɵproperty("value", s.id)("selected", s.selected),
            e.ɵɵattribute("data-id", s.name),
            e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate1(
              "src",
              "https://cdn.1inch.io/liquidity-sources-logo/",
              s.icon,
              "_color.svg",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(s.name);
        }
      }
      function x(p, C) {
        if (
          (1 & p &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 6),
            e.ɵɵtext(2),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(3, d, 5, 5, "mat-list-option", 7),
            e.ɵɵelementContainerEnd()),
          2 & p)
        ) {
          const s = C.$implicit,
            _ = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(s[0]),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngForOf", s[1])("ngForTrackBy", _.trackById);
        }
      }
      let U = (() => {
        class p {
          constructor(s, _) {
            (this.swapSettingsLiquiditySourcesService = s),
              (this.location = _),
              (this.widgetInputControl = new r.UntypedFormControl()),
              (this.sources$ = this.widgetInputControl.valueChanges.pipe(
                (0, j.w)((z) =>
                  this.swapSettingsLiquiditySourcesService.liquiditySourceGroups$(
                    z
                  )
                )
              ));
          }
          get resetButtonTitle() {
            return 0 ===
              this.swapSettingsLiquiditySourcesService.getSelectedCount()
              ? "Select all"
              : "Reset all";
          }
          get selectedCount() {
            return (
              this.swapSettingsLiquiditySourcesService.getSelectedCount() || 0
            );
          }
          navigateBack() {
            this.location.back();
          }
          handleItemClick(s) {
            this.swapSettingsLiquiditySourcesService.toggleLiquiditySource(
              s.id
            );
          }
          trackById(s, _) {
            return _.id;
          }
          trackBySection(s, _) {
            return `${s}_${_[0]}_${_[1].length}`;
          }
          toggleAll() {
            this.swapSettingsLiquiditySourcesService.toggleAll();
          }
        }
        return (
          (p.ɵfac = function (s) {
            return new (s || p)(
              e.ɵɵdirectiveInject(f.N),
              e.ɵɵdirectiveInject(I.Ye)
            );
          }),
          (p.ɵcmp = e.ɵɵdefineComponent({
            type: p,
            selectors: [["liquidity-sources-list"]],
            decls: 11,
            vars: 12,
            consts: [
              [
                1,
                "ls-header",
                3,
                "showBorder",
                "forceShowBackButton",
                "onBack",
              ],
              [
                "transloco",
                "advancedSettingsPanels.liquidity-sources2",
                1,
                "ls-header-title",
              ],
              [
                "data-id",
                "liquidity-sources.toggle-button",
                1,
                "blank-button",
                "toggle",
                3,
                "transloco",
                "click",
              ],
              ["dataId", "liquidity-sources", 3, "placeholder", "formControl"],
              [1, "ls-container"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              ["mat-subheader", "", 1, "ls-section-header"],
              [
                "class",
                "ls-item-wrap",
                3,
                "value",
                "selected",
                "click",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [1, "ls-item-wrap", 3, "value", "selected", "click"],
              [1, "ls-item"],
              ["alt", "", 3, "src"],
            ],
            template: function (s, _) {
              1 & s &&
                (e.ɵɵelementStart(0, "widget-header", 0),
                e.ɵɵlistener("onBack", function () {
                  return _.navigateBack();
                }),
                e.ɵɵelementStart(1, "span", 1),
                e.ɵɵtext(2, "Liquidity sources"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(3, "button", 2),
                e.ɵɵlistener("click", function () {
                  return _.toggleAll();
                }),
                e.ɵɵtext(4),
                e.ɵɵelementEnd()(),
                e.ɵɵelement(5, "widget-input", 3),
                e.ɵɵpipe(6, "transloco"),
                e.ɵɵelementStart(7, "div", 4)(8, "mat-selection-list"),
                e.ɵɵtemplate(9, x, 4, 3, "ng-container", 5),
                e.ɵɵpipe(10, "async"),
                e.ɵɵelementEnd()()),
                2 & s &&
                  (e.ɵɵproperty("showBorder", !1)("forceShowBackButton", !0),
                  e.ɵɵadvance(3),
                  e.ɵɵpropertyInterpolate(
                    "transloco",
                    0 === _.selectedCount
                      ? "button.select-all"
                      : "button.reset-all"
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵtextInterpolate(_.resetButtonTitle),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "placeholder",
                    e.ɵɵpipeBind1(6, 8, "uni.input.search-by-name")
                  )("formControl", _.widgetInputControl),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngForOf", e.ɵɵpipeBind1(10, 10, _.sources$))(
                    "ngForTrackBy",
                    _.trackBySection
                  ));
            },
            dependencies: [
              a.gs,
              a.Ub,
              a.vS,
              I.sg,
              P.y,
              i.KI,
              ie.G,
              r.NgControlStatus,
              r.FormControlDirective,
              I.Ov,
              i.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;position:relative}.ls-container[_ngcontent-%COMP%]{height:530px;max-height:calc(100vh - 250px);overflow:overlay;overflow-x:hidden;margin:0 -16px}@media (max-width: 360px){.ls-header-title[_ngcontent-%COMP%]{max-width:50%;display:block;margin:auto;font-size:16px}}.ls-section-header[_ngcontent-%COMP%]{height:-moz-fit-content!important;height:fit-content!important;padding:16px 0 8px;font-size:16px;font-weight:700;border-bottom:1px solid var(--1inch-border-02);margin:0 16px 12px!important}.ls-section-header[_ngcontent-%COMP%]:first-of-type{padding-top:8px}.ls-item-wrap[_ngcontent-%COMP%]{padding:10px 16px!important;height:-moz-fit-content!important;height:fit-content!important}.ls-item-wrap[_ngcontent-%COMP%]:hover, .ls-item-wrap[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03)}.ls-item[_ngcontent-%COMP%]{display:flex;align-items:center}.ls-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500!important;margin-left:16px}.ls-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px}.toggle[_ngcontent-%COMP%]{position:absolute;max-width:75px;right:16px;top:0;bottom:0;margin-top:6px;font-size:16px;color:var(--1inch-text-03)}.toggle[_ngcontent-%COMP%]:hover, .toggle[_ngcontent-%COMP%]:focus{opacity:.75;transition:.2s}@media (max-width: 360px){.toggle[_ngcontent-%COMP%]{font-size:14px;margin-top:2px}}",
            ],
            changeDetection: 0,
          })),
          p
        );
      })();
      var X = n(52126),
        re = n(11537),
        Z = n(1596);
      const J = [
        { path: "", pathMatch: "full", component: X.W },
        { path: "liquidity-sources", component: U },
        { path: "custom-tokens", component: c },
        { path: "custom-tokens/add-token", component: te },
        {
          path: "compliance",
          component: g,
          canActivate: [
            (() => {
              class p {
                constructor(s) {
                  this.featureToggleService = s;
                }
                canActivate() {
                  return this.featureToggleService.getFeature(re.IN);
                }
              }
              return (
                (p.ɵfac = function (s) {
                  return new (s || p)(e.ɵɵinject(Z.BV));
                }),
                (p.ɵprov = e.ɵɵdefineInjectable({
                  token: p,
                  factory: p.ɵfac,
                  providedIn: "root",
                })),
                p
              );
            })(),
          ],
        },
      ];
    },
    59226: (Y, w, n) => {
      n.d(w, { Z: () => se });
      var r = n(29737),
        u = n(76027),
        l = n(79296),
        T = n(64736),
        e = n(82868),
        o = n(51109),
        L = n(95496),
        I = n(572),
        P = n(56472),
        i = n(54510),
        B = n(31777),
        A = n(38143),
        k = n(44480),
        t = n(62425),
        h = n(98182),
        g = n(12725),
        D = n(74922),
        j = n(37742),
        H = n(3875),
        R = n(45256),
        ee = n(80135),
        E = n(4069);
      function $(b, V) {
        if (1 & b) {
          const y = o.ɵɵgetCurrentView();
          o.ɵɵnamespaceSVG(),
            o.ɵɵelementStart(0, "svg", 12),
            o.ɵɵlistener("click", function () {
              o.ɵɵrestoreView(y);
              const W = o.ɵɵnextContext();
              return o.ɵɵresetView(W.copyAddress());
            }),
            o.ɵɵelement(1, "use", 13),
            o.ɵɵelementEnd();
        }
      }
      const S = function () {
        return { head: 5, tail: 3 };
      };
      let F = (() => {
        class b {
          constructor(y, O) {
            (this.clipboardService = y),
              (this.deviceDetectorService = O),
              (this.tooltipInClickedState$ = new u.X(!1)),
              (this.currentCopyText$ = this.tooltipInClickedState$.pipe(
                (0, T.U)((W) =>
                  this.deviceDetectorService.isDesktop()
                    ? W
                      ? "accountBox.copied"
                      : "accountBox.copy"
                    : "accountBox.copied"
                )
              ));
          }
          copyAddress() {
            this.clipboardService.copyFromContent(this.token.address),
              this.tooltipInClickedState$.next(!0),
              window.setTimeout(() => {
                this.tooltipInClickedState$.next(!1);
              }, 3e3);
          }
        }
        return (
          (b.ɵfac = function (y) {
            return new (y || b)(
              o.ɵɵdirectiveInject(D.Yv),
              o.ɵɵdirectiveInject(j.x0)
            );
          }),
          (b.ɵcmp = o.ɵɵdefineComponent({
            type: b,
            selectors: [["import-token-preview"]],
            inputs: { token: "token" },
            decls: 24,
            vars: 18,
            consts: [
              [1, "token-preview__container"],
              [3, "token"],
              [1, "token-preview__up-wrap"],
              ["data-id", "custom-token-name", 1, "token-preview__token-name"],
              [1, "token-preview__label"],
              [1, "token-preview__down-wrap"],
              ["data-id", "custom-token-address"],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "custom-token__tooltip",
                3,
                "tooltip",
                "customElement",
                "changeableContent",
                "clickableElement",
              ],
              ["copyIcon", ""],
              ["target", "_blank", 1, "token-preview__link", 3, "tokenLink"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link.svg#arrow-link",
              ],
              ["width", "16", "height", "16", 3, "click"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/copy_account_2.svg#copy_account",
              ],
            ],
            template: function (y, O) {
              if (
                (1 & y &&
                  (o.ɵɵelementStart(0, "div", 0),
                  o.ɵɵelement(1, "token-icon", 1),
                  o.ɵɵelementStart(2, "div")(3, "div", 2)(4, "span", 3),
                  o.ɵɵtext(5),
                  o.ɵɵelementEnd(),
                  o.ɵɵelementStart(6, "div", 4)(7, "span"),
                  o.ɵɵtext(8),
                  o.ɵɵelementEnd()()(),
                  o.ɵɵelementStart(9, "div", 5)(10, "div")(11, "span", 6),
                  o.ɵɵtext(12),
                  o.ɵɵpipe(13, "prettyHash"),
                  o.ɵɵelementEnd(),
                  o.ɵɵelement(14, "tooltip", 7),
                  o.ɵɵpipe(15, "transloco"),
                  o.ɵɵpipe(16, "async"),
                  o.ɵɵtemplate(
                    17,
                    $,
                    2,
                    0,
                    "ng-template",
                    null,
                    8,
                    o.ɵɵtemplateRefExtractor
                  ),
                  o.ɵɵelementEnd(),
                  o.ɵɵelementStart(19, "a", 9)(20, "span"),
                  o.ɵɵtext(21, "Etherscan"),
                  o.ɵɵelementEnd(),
                  o.ɵɵnamespaceSVG(),
                  o.ɵɵelementStart(22, "svg", 10),
                  o.ɵɵelement(23, "use", 11),
                  o.ɵɵelementEnd()()()()()),
                2 & y)
              ) {
                const W = o.ɵɵreference(18);
                o.ɵɵattribute("data-id", "custom-token-" + O.token.name),
                  o.ɵɵadvance(1),
                  o.ɵɵproperty("token", O.token),
                  o.ɵɵadvance(4),
                  o.ɵɵtextInterpolate(O.token.name),
                  o.ɵɵadvance(3),
                  o.ɵɵtextInterpolate(O.token.symbol),
                  o.ɵɵadvance(4),
                  o.ɵɵtextInterpolate(
                    o.ɵɵpipeBind2(
                      13,
                      10,
                      O.token.address,
                      o.ɵɵpureFunction0(17, S)
                    )
                  ),
                  o.ɵɵadvance(2),
                  o.ɵɵproperty(
                    "tooltip",
                    o.ɵɵpipeBind1(
                      15,
                      13,
                      o.ɵɵpipeBind1(16, 15, O.currentCopyText$)
                    )
                  )("customElement", W)("changeableContent", !0)(
                    "clickableElement",
                    !0
                  ),
                  o.ɵɵadvance(5),
                  o.ɵɵproperty("tokenLink", O.token.address);
              }
            },
            dependencies: [H.e, R.o, ee.K, A.Ov, g.Ot, E.V],
            styles: [
              ".token-preview__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px 1fr;grid-column-gap:12px;align-items:center;padding:16px;margin-bottom:16px;border-radius:16px;color:var(--1inch__ui-01);border:1px solid var(--1inch-border-06)}.token-preview__container[_ngcontent-%COMP%]   token-icon[_ngcontent-%COMP%]{height:40px}.token-preview__up-wrap[_ngcontent-%COMP%], .token-preview__down-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.token-preview__token-name[_ngcontent-%COMP%]{font-size:16px;line-height:26px;font-weight:500;margin-right:8px}.token-preview__label[_ngcontent-%COMP%]{font-size:13px;line-height:16px;padding:2px 4px;border-radius:4px;background:var(--1inch-bg-03)}.token-preview__down-wrap[_ngcontent-%COMP%]{justify-content:space-between;margin-top:4px;font-size:13px;line-height:16px;color:var(--1inch__ui-02)}.token-preview__down-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-1px 0 0 4px}.token-preview__link[_ngcontent-%COMP%]{text-decoration:none;color:var(--1inch__ui-02)}.token-preview__link[_ngcontent-%COMP%]:hover{color:var(--1inch__ui-01)}.custom-token__tooltip[_ngcontent-%COMP%]:hover{cursor:pointer}.custom-token__tooltip[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch__ui-01)}",
            ],
            changeDetection: 0,
          })),
          b
        );
      })();
      function Q(b, V) {
        1 & b && o.ɵɵelement(0, "import-token-preview", 13),
          2 & b && o.ɵɵproperty("token", V.$implicit);
      }
      function ie(b, V) {
        if (1 & b) {
          const y = o.ɵɵgetCurrentView();
          o.ɵɵelementStart(0, "div", 3),
            o.ɵɵtemplate(1, Q, 1, 1, "import-token-preview", 4),
            o.ɵɵelementStart(2, "div", 5)(3, "span", 6),
            o.ɵɵtext(4, "Trade at your own risk!"),
            o.ɵɵelementEnd(),
            o.ɵɵelementStart(5, "p", 7),
            o.ɵɵtext(
              6,
              " Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects"
            ),
            o.ɵɵelementEnd(),
            o.ɵɵelementStart(7, "p", 8),
            o.ɵɵtext(
              8,
              "If you purchase this token, you may not be able to sell it back"
            ),
            o.ɵɵelementEnd(),
            o.ɵɵelementStart(9, "mat-checkbox", 9)(10, "span", 10),
            o.ɵɵtext(11, "I understand"),
            o.ɵɵelementEnd()()(),
            o.ɵɵelementStart(12, "simple-button", 11),
            o.ɵɵlistener("click", function () {
              o.ɵɵrestoreView(y);
              const W = o.ɵɵnextContext();
              return o.ɵɵresetView(W.importTokens());
            }),
            o.ɵɵelementStart(13, "span", 12),
            o.ɵɵtext(14, "Import"),
            o.ɵɵelementEnd()()();
        }
        if (2 & b) {
          const y = V.ngIf,
            O = o.ɵɵnextContext();
          o.ɵɵproperty("formGroup", O.form),
            o.ɵɵadvance(1),
            o.ɵɵproperty("ngForOf", y),
            o.ɵɵadvance(8),
            o.ɵɵproperty("formControl", O.checkboxControl),
            o.ɵɵadvance(3),
            o.ɵɵproperty("disabled", !O.checkboxControl.value);
        }
      }
      let se = (() => {
        class b {
          constructor(y, O, W, te, N, ne) {
            (this.tokenSearchService = y),
              (this.tokensService = O),
              (this.tokensQuery = W),
              (this.activatedRoute = te),
              (this.router = N),
              (this.fb = ne),
              (this.tokensForImport$ = new u.X([])),
              (this.subscription = new l.w0());
          }
          get checkboxControl() {
            return this.form.controls.checkbox;
          }
          ngOnInit() {
            (this.form = this.fb.group({ checkbox: this.fb.control(!1) })),
              this.processTokens();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          importTokens() {
            this.tokensForImport$.value.forEach((y) => {
              this.tokensService.addCustomToken(y);
            }),
              this.processTokens();
          }
          processTokens() {
            var y;
            const O =
                (null === (y = this.activatedRoute.snapshot.parent) ||
                void 0 === y
                  ? void 0
                  : y.params) || {},
              W = O.sourceToken || O.fromTokenSymbolOrAddress,
              te = O.destinationToken || O.toTokenSymbolOrAddress;
            (!W || !te) && this.goToHome(),
              this.subscription.add(
                this.tokenSearchService
                  .tryToFindTokens(W, te)
                  .pipe(
                    (0, T.U)(({ sourceToken: N, destinationToken: ne }) => [
                      N,
                      ne,
                    ])
                  )
                  .subscribe(
                    (N) => {
                      if ((0, r.YjB)(r.kKJ, N)) return void this.goToHome();
                      if ((0, r.$6P)((0, r.OH4)("source", "store"), N)) {
                        const [G, ae] = N;
                        return void this.goToSwapPage(
                          G.token.symbol,
                          ae.token.symbol
                        );
                      }
                      const ce = (0, r.hXT)(
                        (G) => !(0, r.kKJ)(G) && "blockchain" === G.source,
                        N
                      ).map((G) =>
                        this.tokensQuery.isTokenExistsWith(
                          "symbol",
                          G.token.symbol
                        )
                          ? Object.assign(Object.assign({}, G.token), {
                              symbol: `${G.token.symbol}_1`,
                            })
                          : G.token
                      );
                      this.tokensForImport$.next(ce);
                    },
                    (N) => (0, e.eK)(N, "is0007")
                  )
              );
          }
          goToHome() {
            this.router.navigate(["../../../"], {
              relativeTo: this.activatedRoute,
            });
          }
          goToSwapPage(y, O) {
            this.router.navigate([`../../../${y}/${O}`], {
              relativeTo: this.activatedRoute,
            });
          }
        }
        return (
          (b.ɵfac = function (y) {
            return new (y || b)(
              o.ɵɵdirectiveInject(L.M),
              o.ɵɵdirectiveInject(I.H),
              o.ɵɵdirectiveInject(P.d),
              o.ɵɵdirectiveInject(i.gz),
              o.ɵɵdirectiveInject(i.F0),
              o.ɵɵdirectiveInject(B.UntypedFormBuilder)
            );
          }),
          (b.ɵcmp = o.ɵɵdefineComponent({
            type: b,
            selectors: [["import-token"]],
            decls: 5,
            vars: 3,
            consts: [
              ["closeLink", "../../../"],
              ["transloco", "uni.importToken.import-token"],
              [3, "formGroup", 4, "ngIf"],
              [3, "formGroup"],
              [3, "token", 4, "ngFor", "ngForOf"],
              [
                "data-id",
                "import-token-warning-dialog",
                1,
                "import-token-warning",
              ],
              [
                "transloco",
                "uni.importToken.trade-at-your-risk",
                1,
                "import-token-warning-title",
              ],
              [
                "transloco",
                "uni.importToken.anyone-can-create",
                1,
                "import-token-warning-text",
              ],
              [
                "transloco",
                "uni.importToken.if-you-purchase",
                1,
                "import-token-warning-text",
              ],
              [
                "data-id",
                "import-token-warning.checkbox",
                1,
                "import-token-checkbox",
                3,
                "formControl",
              ],
              ["transloco", "uni.importToken.i-understand"],
              [
                "color",
                "blue",
                "data-id",
                "import-token-warning.import-button",
                3,
                "disabled",
                "click",
              ],
              ["transloco", "uni.importToken.import"],
              [3, "token"],
            ],
            template: function (y, O) {
              1 & y &&
                (o.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                o.ɵɵtext(2, "Import a token"),
                o.ɵɵelementEnd()(),
                o.ɵɵtemplate(3, ie, 15, 4, "div", 2),
                o.ɵɵpipe(4, "async")),
                2 & y &&
                  (o.ɵɵadvance(3),
                  o.ɵɵproperty(
                    "ngIf",
                    o.ɵɵpipeBind1(4, 1, O.tokensForImport$)
                  ));
            },
            dependencies: [
              A.sg,
              A.O5,
              B.NgControlStatus,
              B.NgControlStatusGroup,
              B.FormControlDirective,
              B.FormGroupDirective,
              k.oG,
              t.y,
              h.q,
              g.KI,
              F,
              A.Ov,
            ],
            styles: [
              ".import-token-warning[_ngcontent-%COMP%]{border-radius:12px;padding:16px;background:var(--1inch-common-bg-12);margin-bottom:80px}.import-token-warning-title[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:500;color:var(--1inch__text-and-icons__error)}.import-token-warning-text[_ngcontent-%COMP%]{line-height:26px;margin:8px 0 16px}.import-token-warning-text[_ngcontent-%COMP%]:first-of-type{margin:8px 0 16px}.import-token-warning-text[_ngcontent-%COMP%]:last-of-type{margin-bottom:16px}.import-token-checkbox[_ngcontent-%COMP%]  .mat-checkbox-background{background:var(--1inch-common-text-01)!important}.import-token-checkbox[_ngcontent-%COMP%]  .mat-checkbox-checkmark{fill:var(--1inch-common-text-05)!important}.import-token-checkbox[_ngcontent-%COMP%]  .mat-checkbox-checkmark-path{stroke:var(--1inch-common-text-05)!important}",
            ],
            changeDetection: 0,
          })),
          b
        );
      })();
    },
    14806: (Y, w, n) => {
      n.d(w, { D: () => m });
      var r = n(31777),
        u = n(45461),
        l = n(80849),
        T = n(53886),
        e = n(79296),
        o = n(76327),
        L = n(12733),
        I = n(64736),
        P = n(69682),
        i = n(77724),
        B = n(90813),
        A = n(52563),
        k = n(21607),
        t = n(51109),
        h = n(54510),
        g = n(36477),
        D = n(49482),
        j = n(95496),
        H = n(38143),
        R = n(62425),
        ee = n(48091),
        E = n(71106),
        $ = n(12725),
        S = n(5728),
        F = n(74578),
        Q = n(45256),
        ie = n(95475);
      function se(c, f) {
        if (1 & c) {
          const a = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "a", 5),
            t.ɵɵelement(1, "token-icon", 6),
            t.ɵɵelementStart(2, "span"),
            t.ɵɵtext(3),
            t.ɵɵpipe(4, "displaySymbol"),
            t.ɵɵelementEnd(),
            t.ɵɵelementStart(5, "div", 7),
            t.ɵɵlistener("click", function (x) {
              const X = t.ɵɵrestoreView(a).$implicit,
                re = t.ɵɵnextContext();
              return t.ɵɵresetView(re.remove(x, X.address));
            }),
            t.ɵɵnamespaceSVG(),
            t.ɵɵelementStart(6, "svg", 8),
            t.ɵɵelement(7, "use", 9),
            t.ɵɵelementEnd()()();
        }
        if (2 & c) {
          const a = f.$implicit,
            d = t.ɵɵnextContext();
          t.ɵɵproperty(
            "routerLink",
            d.editMode ? null : "../../../" + d.getSwapTokenUrl(a)
          ),
            t.ɵɵattribute("data-id", "favorite-tokens." + a.symbol)(
              "id",
              "favorite-tokens." + a.symbol
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("token", a),
            t.ɵɵadvance(2),
            t.ɵɵtextInterpolate(t.ɵɵpipeBind1(4, 5, a));
        }
      }
      let b = (() => {
        class c {
          constructor() {
            (this.tokensList = []),
              (this.removeFavoriteToken = new t.EventEmitter()),
              (this.editMode = !1);
          }
          remove(a, d) {
            a.stopPropagation(),
              a.preventDefault(),
              this.removeFavoriteToken.emit(d);
          }
          toggleEditMode() {
            this.editMode = !this.editMode;
          }
        }
        return (
          (c.ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵcmp = t.ɵɵdefineComponent({
            type: c,
            selectors: [["app-favourite-tokens"]],
            inputs: {
              tokensList: "tokensList",
              getSwapTokenUrl: "getSwapTokenUrl",
            },
            outputs: { removeFavoriteToken: "removeFavoriteToken" },
            decls: 5,
            vars: 3,
            consts: [
              [1, "favourite-tokens-container"],
              [
                "class",
                "favourite-token",
                3,
                "routerLink",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "edit-button", 3, "click"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/edit_2.svg#edit"],
              [1, "favourite-token", 3, "routerLink"],
              [1, "token-icon", 3, "token"],
              [1, "remove-favorite-token", 3, "click"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
            ],
            template: function (a, d) {
              1 & a &&
                (t.ɵɵelementStart(0, "div", 0),
                t.ɵɵtemplate(1, se, 8, 7, "a", 1),
                t.ɵɵelementStart(2, "button", 2),
                t.ɵɵlistener("click", function () {
                  return d.toggleEditMode();
                }),
                t.ɵɵnamespaceSVG(),
                t.ɵɵelementStart(3, "svg", 3),
                t.ɵɵelement(4, "use", 4),
                t.ɵɵelementEnd()()()),
                2 & a &&
                  (t.ɵɵclassProp("edit-mode", d.editMode),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngForOf", d.tokensList));
            },
            dependencies: [h.yS, H.sg, Q.o, ie.s],
            styles: [
              ".favourite-tokens-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-8px;padding:16px 0;border-bottom:1px solid var(--1inch-border-01)}@media (max-width: 360px){.favourite-tokens-container[_ngcontent-%COMP%]{padding:16px 0 8px}}@media (max-width: 520px){.favourite-tokens-container.edit-mode[_ngcontent-%COMP%]   .remove-favorite-token[_ngcontent-%COMP%]{display:block;width:50px;height:50px;text-align:right}.favourite-tokens-container.edit-mode[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{background:var(--1inch-bg-06)}}@media (min-width: 520px){.favourite-tokens-container[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]{display:none}}.remove-favorite-token[_ngcontent-%COMP%]{display:none;position:absolute;top:-4px;right:-4px;cursor:pointer}.remove-favorite-token[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;justify-content:center;align-items:center;background:var(--1inch-btn-bg-01);color:var(--1inch__ui-02);box-shadow:var(--1inch-btn-shadow-03)}.remove-favorite-token[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch-text-03)}@media (max-width: 520px){.remove-favorite-token[_ngcontent-%COMP%]:hover{display:none}}.favourite-token[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:8px 11px;margin:0 6px 8px 0;border-radius:8px;border:1px solid var(--1inch-border-02);color:var(--1inch-text-01);text-decoration:none}.favourite-token[_ngcontent-%COMP%]   .token-icon[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:8px}.favourite-token[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}@media (min-width: 520px){.favourite-token[_ngcontent-%COMP%]:hover, .favourite-token[_ngcontent-%COMP%]:focus{cursor:pointer;background:var(--1inch-bg-06)}.favourite-token[_ngcontent-%COMP%]:hover   .remove-favorite-token[_ngcontent-%COMP%], .favourite-token[_ngcontent-%COMP%]:focus   .remove-favorite-token[_ngcontent-%COMP%]{display:flex}}@media (max-width: 418px){.favourite-token[_ngcontent-%COMP%]{padding:6px 8px;margin:0 5px 5px 0}}@media (max-width: 360px){.favourite-token[_ngcontent-%COMP%]{padding:4px;margin:0 5px 5px 0}}.edit-button[_ngcontent-%COMP%]{padding:4px;margin:0 6px 8px 0;border-radius:8px;border:1px solid var(--1inch-border-02);color:var(--1inch__ui-02);text-decoration:none;min-width:38px}@media (max-width: 418px){.edit-button[_ngcontent-%COMP%]{padding:4px;margin:0 5px 5px 0}}",
            ],
            changeDetection: 0,
          })),
          c
        );
      })();
      var V = n(57015),
        y = n(43376);
      function O(c, f) {
        if (1 & c) {
          const a = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "a", 2),
            t.ɵɵlistener("keydown.arrowup", function (x) {
              t.ɵɵrestoreView(a);
              const U = t.ɵɵnextContext();
              return t.ɵɵresetView(U.moveUp(x));
            })("keydown.arrowdown", function (x) {
              t.ɵɵrestoreView(a);
              const U = t.ɵɵnextContext();
              return t.ɵɵresetView(U.moveDown(x));
            }),
            t.ɵɵelementStart(1, "token-list-item", 3),
            t.ɵɵlistener("togglePinFavoriteToken", function () {
              const U = t.ɵɵrestoreView(a).$implicit,
                X = t.ɵɵnextContext();
              return t.ɵɵresetView(X.togglePin(U.token.address));
            }),
            t.ɵɵelementEnd()();
        }
        if (2 & c) {
          const a = f.$implicit,
            d = t.ɵɵnextContext();
          t.ɵɵproperty("routerLink", "../../../" + d.getSwapTokenUrl(a.token)),
            t.ɵɵattribute(
              "data-id",
              "tokens-list." + a.token.symbol + "-token"
            )("id", "tokens-list." + a.token.symbol + "-token"),
            t.ɵɵadvance(1),
            t.ɵɵproperty("item", a)("canPin", !0)("canSend", !1)(
              "isTokenFavorite",
              d.isTokenFavorite(a.token.address)
            );
        }
      }
      let W = (() => {
        class c {
          constructor() {
            (this.favouriteTokens = []),
              (this.togglePinFavoriteToken = new t.EventEmitter());
          }
          trackById(a, d) {
            return d.token.symbol;
          }
          moveUp(a) {
            const x = a.currentTarget.previousElementSibling;
            null == x || x.focus();
          }
          moveDown(a) {
            const x = a.currentTarget.nextElementSibling;
            null == x || x.focus();
          }
          togglePin(a) {
            this.togglePinFavoriteToken.emit(a);
          }
          isTokenFavorite(a) {
            return !!this.favouriteTokens.find((d) => d.address === a);
          }
        }
        return (
          (c.ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵcmp = t.ɵɵdefineComponent({
            type: c,
            selectors: [["simple-tokens-list"]],
            inputs: {
              tokensWithBalances: "tokensWithBalances",
              getSwapTokenUrl: "getSwapTokenUrl",
              favouriteTokens: "favouriteTokens",
            },
            outputs: { togglePinFavoriteToken: "togglePinFavoriteToken" },
            decls: 2,
            vars: 2,
            consts: [
              ["itemSize", "50", 1, "tokens-list-viewport"],
              [
                "class",
                "tokens-list-item",
                3,
                "routerLink",
                "keydown.arrowup",
                "keydown.arrowdown",
                4,
                "cdkVirtualFor",
                "cdkVirtualForOf",
                "cdkVirtualForTrackBy",
              ],
              [
                1,
                "tokens-list-item",
                3,
                "routerLink",
                "keydown.arrowup",
                "keydown.arrowdown",
              ],
              [
                3,
                "item",
                "canPin",
                "canSend",
                "isTokenFavorite",
                "togglePinFavoriteToken",
              ],
            ],
            template: function (a, d) {
              1 & a &&
                (t.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0),
                t.ɵɵtemplate(1, O, 2, 7, "a", 1),
                t.ɵɵelementEnd()),
                2 & a &&
                  (t.ɵɵadvance(1),
                  t.ɵɵproperty("cdkVirtualForOf", d.tokensWithBalances)(
                    "cdkVirtualForTrackBy",
                    d.trackById
                  ));
            },
            dependencies: [h.yS, V.xd, V.x0, V.N7, y.P],
            styles: [
              "[_nghost-%COMP%]{display:block;height:100%}.tokens-list-viewport[_ngcontent-%COMP%]{height:100%}.tokens-list-item[_ngcontent-%COMP%]{display:block}.tokens-list-item[_ngcontent-%COMP%]:hover{text-decoration:none}",
            ],
            changeDetection: 0,
          })),
          c
        );
      })();
      function te(c, f) {
        if (1 & c) {
          const a = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "app-favourite-tokens", 6),
            t.ɵɵlistener("removeFavoriteToken", function (x) {
              t.ɵɵrestoreView(a);
              const U = t.ɵɵnextContext(3);
              return t.ɵɵresetView(U.togglePinFavoriteToken(x));
            }),
            t.ɵɵelementEnd();
        }
        if (2 & c) {
          const a = t.ɵɵnextContext().tuiLet,
            d = t.ɵɵnextContext(2);
          t.ɵɵproperty("tokensList", a)("getSwapTokenUrl", d.getSwapTokenUrl);
        }
      }
      function N(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementStart(0, "span", 9), t.ɵɵtext(1), t.ɵɵelementEnd()),
          2 & c)
        ) {
          const a = f.ngIf;
          t.ɵɵadvance(1), t.ɵɵtextInterpolate(a);
        }
      }
      function ne(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "custom-token-item", 7),
            t.ɵɵtemplate(2, N, 2, 1, "span", 8),
            t.ɵɵelementContainerEnd()),
          2 & c)
        ) {
          const a = t.ɵɵnextContext().ngIf,
            d = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("token", a.token)(
              "importLink",
              d.getImportTokenUrl(a.token)
            ),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", a.message);
        }
      }
      function ce(c, f) {
        1 & c &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "div", 10),
          t.ɵɵelement(2, "loading-indicator", 11),
          t.ɵɵelementEnd(),
          t.ɵɵelementContainerEnd()),
          2 & c &&
            (t.ɵɵadvance(2),
            t.ɵɵproperty("height", 36)("width", 36)("duration", 10));
      }
      function G(c, f) {
        if (1 & c) {
          const a = t.ɵɵgetCurrentView();
          t.ɵɵelementStart(0, "div", 13)(1, "simple-tokens-list", 14),
            t.ɵɵlistener("togglePinFavoriteToken", function (x) {
              t.ɵɵrestoreView(a);
              const U = t.ɵɵnextContext(5);
              return t.ɵɵresetView(U.togglePinFavoriteToken(x));
            }),
            t.ɵɵelementEnd()();
        }
        if (2 & c) {
          const a = t.ɵɵnextContext().ngIf,
            d = t.ɵɵnextContext(2).tuiLet,
            x = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty("tokensWithBalances", a)(
              "getSwapTokenUrl",
              x.getSwapTokenUrl
            )("favouriteTokens", d);
        }
      }
      function ae(c, f) {
        1 & c &&
          (t.ɵɵelementContainerStart(0),
          t.ɵɵelementStart(1, "div", 15)(2, "div", 16),
          t.ɵɵelement(3, "span", 17),
          t.ɵɵelementStart(4, "span", 18),
          t.ɵɵtext(5, "Nothing found"),
          t.ɵɵelementEnd()(),
          t.ɵɵelementStart(6, "a", 19)(7, "span", 20),
          t.ɵɵtext(8, "Add token"),
          t.ɵɵelementEnd(),
          t.ɵɵnamespaceSVG(),
          t.ɵɵelementStart(9, "svg", 21),
          t.ɵɵelement(10, "use", 22),
          t.ɵɵelementEnd()()(),
          t.ɵɵelementContainerEnd());
      }
      function le(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, G, 2, 3, "div", 12),
            t.ɵɵtemplate(2, ae, 11, 0, "ng-container", 2),
            t.ɵɵelementContainerEnd()),
          2 & c)
        ) {
          const a = f.ngIf,
            d = t.ɵɵnextContext().ngIf,
            x = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", a.length > 0),
            t.ɵɵadvance(1),
            t.ɵɵproperty(
              "ngIf",
              0 === a.length && !d.token && !x.showLoading(d.importState)
            );
        }
      }
      function pe(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, ne, 3, 3, "ng-container", 2),
            t.ɵɵtemplate(2, ce, 3, 3, "ng-container", 2),
            t.ɵɵtemplate(3, le, 3, 2, "ng-container", 2),
            t.ɵɵpipe(4, "async"),
            t.ɵɵelementContainerEnd()),
          2 & c)
        ) {
          const a = f.ngIf,
            d = t.ɵɵnextContext(3);
          t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", d.showImportToken(a.importState)),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", d.showLoading(a.importState)),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(4, 3, d.tokensWithBalances$));
        }
      }
      function de(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵelement(1, "widget-input", 4),
            t.ɵɵpipe(2, "transloco"),
            t.ɵɵtemplate(3, te, 1, 2, "app-favourite-tokens", 5),
            t.ɵɵtemplate(4, pe, 5, 5, "ng-container", 2),
            t.ɵɵpipe(5, "async"),
            t.ɵɵelementContainerEnd()),
          2 & c)
        ) {
          const a = f.tuiLet,
            d = t.ɵɵnextContext(2);
          t.ɵɵadvance(1),
            t.ɵɵproperty(
              "placeholder",
              t.ɵɵpipeBind1(
                2,
                5,
                "uni.selectToken.search-by-name-or-paste-address"
              )
            )("dataId", "select-token-" + d.tokenRole)(
              "formControl",
              d.widgetInputControl
            ),
            t.ɵɵadvance(2),
            t.ɵɵproperty("ngIf", null == a ? null : a.length),
            t.ɵɵadvance(1),
            t.ɵɵproperty("ngIf", t.ɵɵpipeBind1(5, 7, d.tokenForImport$));
        }
      }
      function v(c, f) {
        if (
          (1 & c &&
            (t.ɵɵelementContainerStart(0),
            t.ɵɵtemplate(1, de, 6, 9, "ng-container", 3),
            t.ɵɵpipe(2, "async"),
            t.ɵɵelementContainerEnd()),
          2 & c)
        ) {
          const a = t.ɵɵnextContext();
          t.ɵɵadvance(1),
            t.ɵɵproperty("tuiLet", t.ɵɵpipeBind1(2, 1, a.favouriteTokens$));
        }
      }
      let m = (() => {
        class c {
          constructor(a, d, x, U, X, re) {
            (this.router = a),
              (this.activatedRoute = d),
              (this.tokenBalanceQuery = x),
              (this.favouriteTokensService = U),
              (this.tokensSearchService = X),
              (this.viewContainerRef = re),
              (this.isNativeTokenExcluded =
                this.activatedRoute.snapshot.data.isNativeTokenExcluded),
              (this.favouriteTokens$ = this.favouriteTokensService.getTokens$(
                this.isNativeTokenExcluded
              )),
              (this.tokenRole = this.activatedRoute.snapshot.data.role),
              (this.widgetInputControl = new r.UntypedFormControl()),
              (this.searchTerm$ = new l.t(1)),
              (this.tokensWithBalances$ = this.searchTerm$.pipe(
                (0, o.w)((Z) =>
                  (0, T.a)([
                    this.tokenBalanceQuery.balancesInfo$,
                    this.tokenBalanceQuery.allTokensWithBalancesSorted$,
                  ]).pipe(
                    (0, L.O)([]),
                    (0, I.U)(([oe, J]) => {
                      const p = this.isNativeTokenExcluded
                        ? null == J
                          ? void 0
                          : J.filter(({ address: C }) => !(0, u.G)(C))
                        : J;
                      return (0, k.ot)(oe || [], p || [], Z);
                    })
                  )
                )
              )),
              (this.tokenForImport$ = this.searchTerm$.pipe(
                (0, o.w)((Z) =>
                  this.tokensSearchService
                    .getTokenForImport(Z, "destination" === this.tokenRole)
                    .pipe((0, L.O)({ importState: A.H.Loading }))
                ),
                (0, P.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.subscription = new e.w0()),
              (this.viewInited = !1),
              (this.getSwapTokenUrl = (Z) => {
                const { sourceToken: oe, destinationToken: J } =
                  this.getTokensPair();
                return (Z.symbol === J && "source" === this.tokenRole) ||
                  (Z.symbol === oe && "destination" === this.tokenRole)
                  ? `${oe}/${J}/reverse`
                  : `${"source" === this.tokenRole ? Z.symbol : oe}/${
                      "destination" === this.tokenRole ? Z.symbol : J
                    }`;
              });
          }
          outsideClick(a) {
            !this.viewInited ||
              this.viewContainerRef.element.nativeElement.contains(a.target) ||
              this.router.navigate([".."], { relativeTo: this.activatedRoute });
          }
          ngAfterViewInit() {
            setTimeout(() => {
              this.viewInited = !0;
            }, 300);
          }
          ngOnInit() {
            const a = this.widgetInputControl.valueChanges.pipe(
              (0, i.b)((d) => {
                this.searchTerm$.next(d);
              })
            );
            (0, B.O)(a, "select-token-search-term", this.subscription);
          }
          getImportTokenUrl(a) {
            const { sourceToken: d, destinationToken: x } =
              this.getTokensPair();
            return this.router.createUrlTree(
              [
                "../../../",
                "source" === this.tokenRole ? a.address : d,
                "destination" === this.tokenRole ? a.address : x,
                "import-token",
              ],
              { relativeTo: this.activatedRoute }
            );
          }
          togglePinFavoriteToken(a) {
            this.favouriteTokensService.toggleFavoriteToken(a);
          }
          showImportToken(a) {
            return [A.H.Success, A.H.DuplicateName].includes(a);
          }
          showLoading(a) {
            return a === A.H.Loading;
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          getTokensPair() {
            var a, d;
            const x =
              null !==
                (d =
                  null === (a = this.activatedRoute.snapshot.parent) ||
                  void 0 === a
                    ? void 0
                    : a.params) && void 0 !== d
                ? d
                : {};
            return {
              sourceToken: x.sourceToken || x.fromTokenSymbolOrAddress,
              destinationToken: x.destinationToken || x.toTokenSymbolOrAddress,
            };
          }
        }
        return (
          (c.ɵfac = function (a) {
            return new (a || c)(
              t.ɵɵdirectiveInject(h.F0),
              t.ɵɵdirectiveInject(h.gz),
              t.ɵɵdirectiveInject(g.n4),
              t.ɵɵdirectiveInject(D.k),
              t.ɵɵdirectiveInject(j.M),
              t.ɵɵdirectiveInject(t.ViewContainerRef)
            );
          }),
          (c.ɵcmp = t.ɵɵdefineComponent({
            type: c,
            selectors: [["select-token"]],
            hostBindings: function (a, d) {
              1 & a &&
                t.ɵɵlistener(
                  "click",
                  function (U) {
                    return d.outsideClick(U);
                  },
                  !1,
                  t.ɵɵresolveDocument
                );
            },
            decls: 4,
            vars: 2,
            consts: [
              ["backLink", "../", 3, "showBorder"],
              [
                "transloco",
                "uni.selectToken.select-a-token",
                1,
                "select-token-title",
              ],
              [4, "ngIf"],
              [4, "tuiLet"],
              [3, "placeholder", "dataId", "formControl"],
              [
                3,
                "tokensList",
                "getSwapTokenUrl",
                "removeFavoriteToken",
                4,
                "ngIf",
              ],
              [3, "tokensList", "getSwapTokenUrl", "removeFavoriteToken"],
              [3, "token", "importLink"],
              ["class", "custom-token-message", 4, "ngIf"],
              [1, "custom-token-message"],
              [1, "select-token-loading"],
              [3, "height", "width", "duration"],
              ["class", "tokens-list", 4, "ngIf"],
              [1, "tokens-list"],
              [
                "data-id",
                "swap-box.token-list",
                3,
                "tokensWithBalances",
                "getSwapTokenUrl",
                "favouriteTokens",
                "togglePinFavoriteToken",
              ],
              [1, "nothing-found-screen"],
              [1, "image-area"],
              [1, "nothing-found-image"],
              ["transloco", "uni.selectToken.nothing-found"],
              [
                "routerLink",
                "../settings/custom-tokens/add-token",
                1,
                "custom-tokens-add-link",
              ],
              ["transloco", "uni.add-token"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "/assets/images/icons/plus_2.svg#plus_2"],
            ],
            template: function (a, d) {
              1 & a &&
                (t.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                t.ɵɵtext(2, "Select a token"),
                t.ɵɵelementEnd()(),
                t.ɵɵtemplate(3, v, 3, 3, "ng-container", 2)),
                2 & a &&
                  (t.ɵɵproperty("showBorder", !1),
                  t.ɵɵadvance(3),
                  t.ɵɵproperty("ngIf", !!d.tokenRole));
            },
            dependencies: [
              h.yS,
              H.O5,
              R.y,
              r.NgControlStatus,
              r.FormControlDirective,
              ee.O,
              E.Q,
              $.KI,
              S.G,
              F.Ls,
              b,
              W,
              H.Ov,
              $.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{height:calc(100vh - 200px);min-height:400px;max-height:680px;margin:-16px -16px 0;padding:16px 16px 0;position:relative;display:flex;flex-direction:column;justify-content:flex-start}[_nghost-%COMP%]   .embedded-swap[_nghost-%COMP%], .embedded-swap   [_nghost-%COMP%]{height:100vh}@media (max-width: 360px){.select-token-title[_ngcontent-%COMP%]{font-size:16px}}.tokens-list[_ngcontent-%COMP%]{margin:0 -16px;height:100%}.custom-token-message[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__warning)}.select-token-loading[_ngcontent-%COMP%]{text-align:center;margin:20px 0}.nothing-found-screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.nothing-found-screen[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]{flex:1;flex-direction:column;justify-content:center;align-items:center;display:flex}.nothing-found-screen[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;margin-top:16px;line-height:26px}.nothing-found-screen[_ngcontent-%COMP%]   .custom-tokens-add-link[_ngcontent-%COMP%]{width:calc(100% + 32px);padding-top:16px;text-align:center;text-decoration:none;border-top:1px solid var(--1inch-border-01);color:var(--1inch-common-text-03)}.nothing-found-screen[_ngcontent-%COMP%]   .custom-tokens-add-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:26px;margin-right:8px}.nothing-found-image[_ngcontent-%COMP%]{height:160px;width:160px;background-image:url(/../../assets/images/empty-states/nothing-found.png);background-size:contain}.light-theme[_nghost-%COMP%]   .nothing-found-image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .nothing-found-image[_ngcontent-%COMP%]{background-image:url(/../../assets/images/empty-states/nothing-found-light-theme.png)}",
            ],
          })),
          c
        );
      })();
    },
    24960: (Y, w, n) => {
      n.d(w, { b: () => ee });
      var r = n(52611),
        u = n(90813),
        l = n(76027),
        T = n(76327),
        e = n(77724),
        o = n(51109),
        L = n(33246),
        I = n(82405),
        P = n(56747),
        i = n(38143),
        B = n(74578),
        A = n(98182),
        k = n(80135),
        t = n(12725),
        h = n(95475);
      function g(E, $) {
        1 & E &&
          (o.ɵɵelementContainerStart(0),
          o.ɵɵelementStart(1, "span", 5),
          o.ɵɵtext(2),
          o.ɵɵpipe(3, "transloco"),
          o.ɵɵelementEnd(),
          o.ɵɵelement(4, "img", 6),
          o.ɵɵelementContainerEnd()),
          2 & E &&
            (o.ɵɵadvance(2),
            o.ɵɵtextInterpolate(o.ɵɵpipeBind1(3, 1, "button.approving")));
      }
      function D(E, $) {
        if (
          (1 & E &&
            (o.ɵɵelementStart(0, "div", 7)(1, "span", 8),
            o.ɵɵtext(2),
            o.ɵɵpipe(3, "transloco"),
            o.ɵɵelementEnd(),
            o.ɵɵelement(4, "tooltip", 9),
            o.ɵɵelementEnd()),
          2 & E)
        ) {
          const S = o.ɵɵnextContext(2),
            F = o.ɵɵreference(3);
          o.ɵɵadvance(2),
            o.ɵɵtextInterpolate1(
              " ",
              S.approveButtonTitle ||
                o.ɵɵpipeBind1(3, 2, "otc-deal.give-permission"),
              " "
            ),
            o.ɵɵadvance(2),
            o.ɵɵproperty("tooltip", F);
        }
      }
      function j(E, $) {
        if (1 & E) {
          const S = o.ɵɵgetCurrentView();
          o.ɵɵelementStart(0, "simple-button", 2),
            o.ɵɵlistener("click", function () {
              o.ɵɵrestoreView(S);
              const Q = o.ɵɵnextContext();
              return o.ɵɵresetView(Q.approveSourceToken());
            }),
            o.ɵɵtemplate(1, g, 5, 3, "ng-container", 3),
            o.ɵɵtemplate(2, D, 5, 4, "div", 4),
            o.ɵɵelementEnd();
        }
        if (2 & E) {
          const S = $.tuiLet,
            F = o.ɵɵnextContext();
          o.ɵɵproperty("color", F.color)("disabled", F.disabled || S),
            o.ɵɵadvance(1),
            o.ɵɵproperty("ngIf", S),
            o.ɵɵadvance(1),
            o.ɵɵproperty("ngIf", !S);
        }
      }
      const H = function (E) {
        return { sourceToken: E };
      };
      function R(E, $) {
        if (
          (1 & E &&
            (o.ɵɵtext(0),
            o.ɵɵpipe(1, "transloco"),
            o.ɵɵpipe(2, "displaySymbol")),
          2 & E)
        ) {
          const S = o.ɵɵnextContext();
          o.ɵɵtextInterpolate1(
            " ",
            o.ɵɵpipeBind2(
              1,
              1,
              "swapBox.to-continue",
              o.ɵɵpureFunction1(6, H, o.ɵɵpipeBind1(2, 4, S.sourceToken))
            ),
            "\n"
          );
        }
      }
      let ee = (() => {
        class E {
          constructor(S, F, Q) {
            (this.approveTransactionService = S),
              (this.inProgressTxService = F),
              (this.acceptTermsService = Q),
              (this.disabled = !1),
              (this.color = "blue"),
              (this.isSourceTokenApproveInProgress$ = new l.X(!1));
          }
          approveSourceToken() {
            const S = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, T.w)(() => this.approveTransaction$()),
              (0, T.w)((F) => {
                const Q = this.sourceToken.address;
                return (
                  this.inProgressTxService.trackTransaction({
                    txHash: F,
                    asset: Q,
                    widgetId: this.widgetId,
                  }),
                  this.isSourceTokenApproveInProgress$.next(!0),
                  this.inProgressTxService.isTxInProgress(Q, this.widgetId)
                );
              }),
              (0, e.b)((F) => {
                this.isSourceTokenApproveInProgress$.next(F);
              })
            );
            (0, u.O)(S, "approveSourceToken$");
          }
          approveTransaction$() {
            const { sourceToken: S, approveContractType: F } = this;
            if (this.customSpender)
              return this.approveTransactionService.contractApproveTransaction({
                contractAddress: S.address,
                txType: this.customSpender.txType,
                txSubType: this.customSpender.txSubType,
                meta: {
                  asset: this.customSpender.asset,
                  approvedForAddress: this.customSpender.address,
                },
                spenderAddress: this.customSpender.address,
                amount: r.zL,
              });
            if ("swap" === this.approveContractType)
              return this.approveTransactionService.approveInfinitySwapTransaction$(
                S
              );
            if ("limit" === this.approveContractType)
              return this.approveTransactionService.approveLimitOrderTransaction$(
                S
              );
            throw new Error(`approveContractType has incorrect value: ${F}`);
          }
        }
        return (
          (E.ɵfac = function (S) {
            return new (S || E)(
              o.ɵɵdirectiveInject(L.f),
              o.ɵɵdirectiveInject(I.Y),
              o.ɵɵdirectiveInject(P.N)
            );
          }),
          (E.ɵcmp = o.ɵɵdefineComponent({
            type: E,
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
            template: function (S, F) {
              1 & S &&
                (o.ɵɵtemplate(0, j, 3, 4, "simple-button", 0),
                o.ɵɵpipe(1, "async"),
                o.ɵɵtemplate(
                  2,
                  R,
                  3,
                  8,
                  "ng-template",
                  null,
                  1,
                  o.ɵɵtemplateRefExtractor
                )),
                2 & S &&
                  o.ɵɵproperty(
                    "tuiLet",
                    o.ɵɵpipeBind1(1, 1, F.isSourceTokenApproveInProgress$)
                  );
            },
            dependencies: [i.O5, B.Ls, A.q, k.K, i.Ov, t.Ot, h.s],
            styles: [
              "[_nghost-%COMP%]{display:block}.token-approving[_ngcontent-%COMP%]{text-align:var(--1inch-common-text-01)}.approving-img[_ngcontent-%COMP%]{width:24px;height:24px;margin-left:4px}.create-deal-button__title-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.create-deal-button__title-wrap[_ngcontent-%COMP%] > tooltip[_ngcontent-%COMP%]{margin-top:-1px}",
            ],
            changeDetection: 0,
          })),
          E
        );
      })();
    },
    40934: (Y, w, n) => {
      n.d(w, { f: () => I });
      var r = n(38143),
        u = n(12725),
        l = n(16944),
        T = n(62901),
        e = n(74578),
        o = n(63223),
        L = n(51109);
      let I = (() => {
        class P {}
        return (
          (P.ɵfac = function (B) {
            return new (B || P)();
          }),
          (P.ɵmod = L.ɵɵdefineNgModule({ type: P })),
          (P.ɵinj = L.ɵɵdefineInjector({
            imports: [r.ez, e.WD, u.y4, o._, l.z, T.w],
          })),
          P
        );
      })();
    },
    98002: (Y, w, n) => {
      n.d(w, { W: () => A });
      var r = n(20683),
        u = n(51109),
        l = n(38143),
        T = n(12725),
        e = n(23982),
        o = n(38964),
        L = n(3875),
        I = n(47843),
        P = n(29889),
        i = n(86345);
      function B(k, t) {
        if ((1 & k && u.ɵɵelement(0, "swap-price-impact", 9), 2 & k)) {
          const h = u.ɵɵnextContext();
          u.ɵɵproperty("priceImpact", h.swapPriceImpact.loss.inPercent)(
            "isHighPriceImpact",
            "extreme" === h.swapPriceImpact.level
          )("isWarningPriceImpact", "high" === h.swapPriceImpact.level);
        }
      }
      let A = (() => {
        class k {
          constructor() {
            (this.reverseText = !1),
              (this.loading = !1),
              (this.isBigIntMode = !1),
              (this.TokenRole = r.q);
          }
          set title(h) {
            this._title = h;
          }
          get title() {
            return this._title
              ? this._title
              : this.tokenRole === r.q.source
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
          (k.ɵfac = function (h) {
            return new (h || k)();
          }),
          (k.ɵcmp = u.ɵɵdefineComponent({
            type: k,
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
            template: function (h, g) {
              1 & h &&
                (u.ɵɵelementStart(0, "div", 0),
                u.ɵɵelement(1, "a", 1),
                u.ɵɵelementStart(2, "div", 2),
                u.ɵɵelement(3, "usd-token-price", 3),
                u.ɵɵtemplate(4, B, 1, 3, "swap-price-impact", 4),
                u.ɵɵelementEnd()(),
                u.ɵɵelementStart(5, "div", 5),
                u.ɵɵelement(6, "token-select-button", 6),
                u.ɵɵelementStart(7, "div", 7),
                u.ɵɵelement(8, "token-amount", 8),
                u.ɵɵpipe(9, "toBigInt"),
                u.ɵɵelementEnd()()),
                2 & h &&
                  (u.ɵɵadvance(1),
                  u.ɵɵproperty("tokenLink", g.token.address)(
                    "transloco",
                    g.title
                  ),
                  u.ɵɵadvance(2),
                  u.ɵɵclassProp("skeleton-host", g.loading),
                  u.ɵɵproperty("token", g.token)("amount", g.tokenAmount),
                  u.ɵɵadvance(1),
                  u.ɵɵproperty("ngIf", g.swapPriceImpact && !g.loading),
                  u.ɵɵadvance(2),
                  u.ɵɵproperty("token", g.token)("withArrow", !1),
                  u.ɵɵadvance(1),
                  u.ɵɵclassProp("skeleton-host", g.loading),
                  u.ɵɵadvance(1),
                  u.ɵɵproperty(
                    "value",
                    g.isBigIntMode
                      ? g.tokenAmount
                      : u.ɵɵpipeBind2(9, 13, g.tokenAmount, g.token.decimals)
                  )("decimals", g.token.decimals));
            },
            dependencies: [l.O5, T.KI, e.N, o.C, L.e, I.V, P.O, i.M],
            styles: [
              "[_nghost-%COMP%]{display:block;padding:16px;border:1px solid var(--1inch-border-04);box-sizing:border-box;border-radius:16px}.token-preview__usd-wrapper[_ngcontent-%COMP%]{display:flex}.token-preview__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:var(--1inch__ui-02)!important;font-size:13px;line-height:15px}.token-preview__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.token-preview__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer;transition:.2s;color:var(--1inch-text-03)}.token-preview__swap-price-impact[_ngcontent-%COMP%]{margin-left:4px}.token-preview__body[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:8px;padding:2px 0}.body__token-amount[_ngcontent-%COMP%]{font-size:24px;line-height:24px}.usd-token-price[_ngcontent-%COMP%]{display:block}",
            ],
            changeDetection: 0,
          })),
          k
        );
      })();
    },
    20683: (Y, w, n) => {
      n.d(w, { q: () => r });
      var r = (() => {
        return (
          ((u = r || (r = {})).source = "source"),
          (u.destination = "destination"),
          r
        );
        var u;
      })();
    },
    9907: (Y, w, n) => {
      n.d(w, { j: () => T });
      var r = n(51109);
      const u = [
          [["", "tradeInfoItemTitle", ""]],
          [["", "tradeInfoItemValue", ""]],
        ],
        l = ["[tradeInfoItemTitle]", "[tradeInfoItemValue]"];
      let T = (() => {
        class e {}
        return (
          (e.ɵfac = function (L) {
            return new (L || e)();
          }),
          (e.ɵcmp = r.ɵɵdefineComponent({
            type: e,
            selectors: [["trade-info-item"]],
            ngContentSelectors: l,
            decls: 2,
            vars: 0,
            template: function (L, I) {
              1 & L &&
                (r.ɵɵprojectionDef(u), r.ɵɵprojection(0), r.ɵɵprojection(1, 1));
            },
            styles: [
              "[_nghost-%COMP%]{display:flex;justify-content:space-between;font-size:13px;line-height:15px;margin-top:8px}[_nghost-%COMP%]     info-icon{margin:-1px 0 0 4px;color:var(--1inch__ui-02)!important}[_nghost-%COMP%]   .trade-info-item__title-wrapper[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}",
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
    },
    23524: (Y, w, n) => {
      n.d(w, { n: () => k });
      var r = n(24654),
        u = n(89618),
        l = n(51109),
        T = n(38143),
        e = n(38964),
        o = n(9907),
        L = n(12725),
        I = n(95475);
      function P(t, h) {
        if (
          (1 & t &&
            (l.ɵɵelementStart(0, "trade-info-item", 2)(1, "div", 3),
            l.ɵɵtext(2),
            l.ɵɵpipe(3, "displaySymbol"),
            l.ɵɵpipe(4, "transloco"),
            l.ɵɵelementEnd(),
            l.ɵɵelement(5, "usd-token-price", 4),
            l.ɵɵelementEnd()),
          2 & t)
        ) {
          const g = l.ɵɵnextContext();
          l.ɵɵadvance(2),
            l.ɵɵtextInterpolate2(
              " 1 ",
              l.ɵɵpipeBind1(3, 6, g.sourceToken),
              " ",
              l.ɵɵpipeBind1(4, 8, "trade-info.price-title"),
              " "
            ),
            l.ɵɵadvance(3),
            l.ɵɵproperty("isBigIntMode", g.isBigIntMode)("showTokenAmount", !0)(
              "amount",
              g.isBigIntMode
                ? g.destinationTokenRate
                : g.destinationTokenRateAsNumber
            )("token", g.destinationToken);
        }
      }
      function i(t, h) {
        if (
          (1 & t &&
            (l.ɵɵelementStart(0, "trade-info-item", 5)(1, "div", 3),
            l.ɵɵtext(2),
            l.ɵɵpipe(3, "displaySymbol"),
            l.ɵɵpipe(4, "transloco"),
            l.ɵɵelementEnd(),
            l.ɵɵelement(5, "usd-token-price", 6),
            l.ɵɵelementEnd()),
          2 & t)
        ) {
          const g = l.ɵɵnextContext();
          l.ɵɵadvance(2),
            l.ɵɵtextInterpolate2(
              " 1 ",
              l.ɵɵpipeBind1(3, 6, g.destinationToken),
              " ",
              l.ɵɵpipeBind1(4, 8, "trade-info.price-title"),
              " "
            ),
            l.ɵɵadvance(3),
            l.ɵɵproperty("showTokenAmount", !0)("isBigIntMode", g.isBigIntMode)(
              "amount",
              g.isBigIntMode ? g.sourceTokenRate : g.sourceTokenRateAsNumber
            )("token", g.sourceToken);
        }
      }
      const B = [
          [["trade-info-item"], ["", "tradeInfoItem", ""]],
          [["", "additionalRows", ""]],
        ],
        A = ["trade-info-item,[tradeInfoItem]", "[additionalRows]"];
      let k = (() => {
        class t {
          constructor() {
            (this.isRateTradeInfoVisible = !0),
              (this.isRevertedRateTradeInfoVisible = !0),
              (this.isBigIntMode = !1);
          }
          get sourceTokenRateAsNumber() {
            return this.getRateAsNumber(r.N.direct);
          }
          get destinationTokenRateAsNumber() {
            return this.getRateAsNumber(r.N.reversed);
          }
          get sourceTokenRate() {
            return this.getRate(r.N.direct);
          }
          get destinationTokenRate() {
            return this.getRate(r.N.reversed);
          }
          getRateAsNumber(g) {
            const D = +this.sourceTokenAmount,
              j = +(this.destinationTokenAmount || 0);
            return 0 === j || 0 === D ? 0 : g === r.N.direct ? D / j : j / D;
          }
          getRate(g) {
            const D = this.sourceTokenAmount,
              j = this.destinationTokenAmount;
            if (j === u.p.ZERO || D === u.p.ZERO) return u.p.ZERO;
            const H = this.sourceToken.decimals,
              R = this.destinationToken.decimals;
            return g === r.N.direct ? u.p.div(D, j, H, R) : u.p.div(j, D, R, H);
          }
        }
        return (
          (t.ɵfac = function (g) {
            return new (g || t)();
          }),
          (t.ɵcmp = l.ɵɵdefineComponent({
            type: t,
            selectors: [["trade-info"]],
            inputs: {
              sourceToken: "sourceToken",
              sourceTokenAmount: "sourceTokenAmount",
              destinationToken: "destinationToken",
              destinationTokenAmount: "destinationTokenAmount",
              isRateTradeInfoVisible: "isRateTradeInfoVisible",
              isRevertedRateTradeInfoVisible: "isRevertedRateTradeInfoVisible",
              isBigIntMode: "isBigIntMode",
            },
            ngContentSelectors: A,
            decls: 4,
            vars: 2,
            consts: [
              ["data-id", "info-token-from-row", 4, "ngIf"],
              ["data-id", "info-token-to-row", 4, "ngIf"],
              ["data-id", "info-token-from-row"],
              ["tradeInfoItemTitle", "", 1, "trade-item__title"],
              [
                "tradeInfoItemValue",
                "",
                1,
                "trade-item__value",
                3,
                "isBigIntMode",
                "showTokenAmount",
                "amount",
                "token",
              ],
              ["data-id", "info-token-to-row"],
              [
                "tradeInfoItemValue",
                "",
                1,
                "trade-item__value",
                3,
                "showTokenAmount",
                "isBigIntMode",
                "amount",
                "token",
              ],
            ],
            template: function (g, D) {
              1 & g &&
                (l.ɵɵprojectionDef(B),
                l.ɵɵtemplate(0, P, 6, 10, "trade-info-item", 0),
                l.ɵɵtemplate(1, i, 6, 10, "trade-info-item", 1),
                l.ɵɵprojection(2),
                l.ɵɵprojection(3, 1)),
                2 & g &&
                  (l.ɵɵproperty("ngIf", D.isRateTradeInfoVisible),
                  l.ɵɵadvance(1),
                  l.ɵɵproperty("ngIf", D.isRevertedRateTradeInfoVisible));
            },
            dependencies: [T.O5, e.C, o.j, L.Ot, I.s],
            styles: [
              "[_nghost-%COMP%]{display:block}trade-info-item.tx-cost[_ngcontent-%COMP%]   .usd-value[_ngcontent-%COMP%]{color:var(--1inch__ui-02);margin-right:4px}trade-info-item.tx-cost[_ngcontent-%COMP%]   .usd-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}trade-info-item[_ngcontent-%COMP%]   .trade-item__title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}  .trade-info-item-custom{margin-top:8px;display:flex;justify-content:space-between;font-size:13px;line-height:15px;font-weight:400}  .trade-info-item-custom .trade-item__title{color:var(--1inch__ui-02)}  .trade-info-item-custom .trade-item__value{color:var(--1inch-text-01)}",
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
    },
    29229: (Y, w, n) => {
      n.d(w, { q: () => de });
      var r = n(37683),
        u = n(45461),
        l = n(95021),
        T = n(53886),
        e = n(64736),
        o = n(5327),
        L = n(58983),
        I = n(56284),
        P = n(35878),
        i = n(51109),
        B = n(42832),
        A = n(27226),
        k = n(38143),
        t = n(70421),
        h = n(80135),
        g = n(12725);
      function D(v, M) {
        if ((1 & v && i.ɵɵelement(0, "tooltip", 3), 2 & v)) {
          i.ɵɵnextContext();
          const m = i.ɵɵreference(4),
            c = i.ɵɵreference(2);
          i.ɵɵproperty("tooltip", m)("customElement", c);
        }
      }
      function j(v, M) {
        if ((1 & v && i.ɵɵelement(0, "tui-badge", 4), 2 & v)) {
          const m = i.ɵɵnextContext();
          i.ɵɵclassProp(
            "yellow-badge",
            m.countInfo.uncoveredCount || m.countInfo.notApprovedCount
          )("red-badge", m.countInfo.unprofitableCount),
            i.ɵɵproperty("value", m.countInfo.count);
        }
      }
      function H(v, M) {
        1 & v &&
          (i.ɵɵelementStart(0, "span"), i.ɵɵtext(1, ":"), i.ɵɵelementEnd());
      }
      const R = function (v) {
        return { value: v };
      };
      function ee(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementStart(0, "div"),
            i.ɵɵtext(1),
            i.ɵɵpipe(2, "transloco"),
            i.ɵɵelementEnd()),
          2 & v)
        ) {
          const m = i.ɵɵnextContext(2);
          i.ɵɵadvance(1),
            i.ɵɵtextInterpolate1(
              " ",
              i.ɵɵpipeBind2(
                2,
                1,
                "swapPage.uncovered-active-orders-hint-updated",
                i.ɵɵpureFunction1(4, R, m.countInfo.uncoveredCount)
              ),
              " "
            );
        }
      }
      function E(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementStart(0, "div"),
            i.ɵɵtext(1),
            i.ɵɵpipe(2, "transloco"),
            i.ɵɵelementEnd()),
          2 & v)
        ) {
          const m = i.ɵɵnextContext(2);
          i.ɵɵadvance(1),
            i.ɵɵtextInterpolate1(
              " ",
              i.ɵɵpipeBind2(
                2,
                1,
                "swapPage.notapproved-active-orders-hint",
                i.ɵɵpureFunction1(4, R, m.countInfo.notApprovedCount)
              ),
              " "
            );
        }
      }
      function $(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementStart(0, "div"),
            i.ɵɵtext(1),
            i.ɵɵpipe(2, "transloco"),
            i.ɵɵelementEnd()),
          2 & v)
        ) {
          const m = i.ɵɵnextContext(2);
          i.ɵɵadvance(1),
            i.ɵɵtextInterpolate1(
              " ",
              i.ɵɵpipeBind2(
                2,
                1,
                "swapPage.unprofitable-active-orders-hint-updated",
                i.ɵɵpureFunction1(4, R, m.countInfo.unprofitableCount)
              ),
              " "
            );
        }
      }
      function S(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementStart(0, "div")(1, "span"),
            i.ɵɵtext(2),
            i.ɵɵpipe(3, "transloco"),
            i.ɵɵelementEnd(),
            i.ɵɵtemplate(4, H, 2, 0, "span", 5),
            i.ɵɵelementEnd(),
            i.ɵɵtemplate(5, ee, 3, 6, "div", 5),
            i.ɵɵtemplate(6, E, 3, 6, "div", 5),
            i.ɵɵtemplate(7, $, 3, 6, "div", 5)),
          2 & v)
        ) {
          const m = i.ɵɵnextContext();
          i.ɵɵadvance(2),
            i.ɵɵtextInterpolate(
              i.ɵɵpipeBind2(
                3,
                5,
                "swapPage.active-orders-hint",
                i.ɵɵpureFunction1(8, R, m.countInfo.count)
              )
            ),
            i.ɵɵadvance(2),
            i.ɵɵproperty(
              "ngIf",
              m.countInfo.uncoveredCount || m.countInfo.unprofitableCount
            ),
            i.ɵɵadvance(1),
            i.ɵɵproperty("ngIf", m.countInfo.uncoveredCount),
            i.ɵɵadvance(1),
            i.ɵɵproperty("ngIf", m.countInfo.notApprovedCount),
            i.ɵɵadvance(1),
            i.ɵɵproperty("ngIf", m.countInfo.unprofitableCount);
        }
      }
      let F = (() => {
          class v {
            constructor() {
              this.isVisible = !1;
            }
          }
          return (
            (v.ɵfac = function (m) {
              return new (m || v)();
            }),
            (v.ɵcmp = i.ɵɵdefineComponent({
              type: v,
              selectors: [["order-counter"]],
              inputs: { isVisible: "isVisible", countInfo: "countInfo" },
              decls: 5,
              vars: 1,
              consts: [
                [
                  "class",
                  "orders-badge",
                  "direction",
                  "top",
                  "contentType",
                  "custom",
                  3,
                  "tooltip",
                  "customElement",
                  4,
                  "ngIf",
                ],
                ["badge", ""],
                ["tooltip", ""],
                [
                  "direction",
                  "top",
                  "contentType",
                  "custom",
                  1,
                  "orders-badge",
                  3,
                  "tooltip",
                  "customElement",
                ],
                ["status", "primary", 3, "value"],
                [4, "ngIf"],
              ],
              template: function (m, c) {
                1 & m &&
                  (i.ɵɵtemplate(0, D, 1, 2, "tooltip", 0),
                  i.ɵɵtemplate(
                    1,
                    j,
                    1,
                    5,
                    "ng-template",
                    null,
                    1,
                    i.ɵɵtemplateRefExtractor
                  ),
                  i.ɵɵtemplate(
                    3,
                    S,
                    8,
                    10,
                    "ng-template",
                    null,
                    2,
                    i.ɵɵtemplateRefExtractor
                  )),
                  2 & m && i.ɵɵproperty("ngIf", c.isVisible);
              },
              dependencies: [k.O5, t.g, h.K, g.Ot],
              styles: [".orders-badge[_ngcontent-%COMP%]{margin:-1px 0 0 4px}"],
              changeDetection: 0,
            })),
            v
          );
        })(),
        Q = (() => {
          class v {
            constructor(m, c) {
              (this.ordersStatusQuery = m),
                (this.orderStatusService = c),
                (this.limitOrdersCount$ =
                  this.ordersStatusQuery.selectLimitOrdersCountInfo()),
                (this.showOrdersCountBadge$ = (0, T.a)([
                  this.orderStatusService.needToShowOrderStatus(),
                  this.ordersStatusQuery.selectLimitOrdersCountInfo(),
                ]).pipe(
                  (0, e.U)(([f, { count: a }]) => f && !!a),
                  (0, P.x)()
                ));
            }
          }
          return (
            (v.ɵfac = function (m) {
              return new (m || v)(
                i.ɵɵdirectiveInject(B.R),
                i.ɵɵdirectiveInject(A.o)
              );
            }),
            (v.ɵcmp = i.ɵɵdefineComponent({
              type: v,
              selectors: [["active-limit-orders-count"]],
              decls: 3,
              vars: 6,
              consts: [[3, "isVisible", "countInfo"]],
              template: function (m, c) {
                1 & m &&
                  (i.ɵɵelement(0, "order-counter", 0),
                  i.ɵɵpipe(1, "async"),
                  i.ɵɵpipe(2, "async")),
                  2 & m &&
                    i.ɵɵproperty(
                      "isVisible",
                      i.ɵɵpipeBind1(1, 2, c.showOrdersCountBadge$)
                    )("countInfo", i.ɵɵpipeBind1(2, 4, c.limitOrdersCount$));
              },
              dependencies: [F, k.Ov],
              changeDetection: 0,
            })),
            v
          );
        })();
      var ie = n(69395);
      let se = (() => {
        class v {
          constructor(m, c, f) {
            (this.otcDealListQuery = m),
              (this.ordersStatusQuery = c),
              (this.orderStatusService = f),
              (this.p2pOrdersCount$ =
                this.ordersStatusQuery.selectP2POrdersCountInfo()),
              (this.showOrdersCountBadge$ = (0, T.a)([
                this.orderStatusService.needToShowOrderStatus(),
                this.ordersStatusQuery.selectP2POrdersCountInfo(),
              ]).pipe(
                (0, e.U)(([a, { count: d }]) => a && !!d),
                (0, P.x)()
              ));
          }
        }
        return (
          (v.ɵfac = function (m) {
            return new (m || v)(
              i.ɵɵdirectiveInject(ie.B),
              i.ɵɵdirectiveInject(B.R),
              i.ɵɵdirectiveInject(A.o)
            );
          }),
          (v.ɵcmp = i.ɵɵdefineComponent({
            type: v,
            selectors: [["active-p2p-count"]],
            decls: 3,
            vars: 6,
            consts: [[3, "isVisible", "countInfo"]],
            template: function (m, c) {
              1 & m &&
                (i.ɵɵelement(0, "order-counter", 0),
                i.ɵɵpipe(1, "async"),
                i.ɵɵpipe(2, "async")),
                2 & m &&
                  i.ɵɵproperty(
                    "isVisible",
                    i.ɵɵpipeBind1(1, 2, c.showOrdersCountBadge$)
                  )("countInfo", i.ɵɵpipeBind1(2, 4, c.p2pOrdersCount$));
            },
            dependencies: [F, k.Ov],
            changeDetection: 0,
          })),
          v
        );
      })();
      var b = n(54510),
        V = n(65083),
        y = n(10569),
        O = n(24124),
        W = n(54377),
        te = n(1596);
      function N(v, M) {
        1 & v && i.ɵɵelementContainer(0);
      }
      function ne(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementContainerStart(0),
            i.ɵɵtemplate(1, N, 1, 0, "ng-container", 4),
            i.ɵɵelementContainerEnd()),
          2 & v)
        ) {
          const m = i.ɵɵnextContext().$implicit,
            c = i.ɵɵnextContext();
          i.ɵɵadvance(1),
            i.ɵɵproperty("ngComponentOutlet", m.additionalContent)(
              "ngComponentOutletInjector",
              c.injector
            );
        }
      }
      const ce = function () {
          return { queryParams: "ignored" };
        },
        G = function () {
          return { dontChangeChain: !0 };
        };
      function ae(v, M) {
        if (
          (1 & v &&
            (i.ɵɵelementStart(0, "a", 1),
            i.ɵɵelement(1, "span", 2),
            i.ɵɵpipe(2, "transloco"),
            i.ɵɵtemplate(3, ne, 2, 2, "ng-container", 3),
            i.ɵɵelementEnd()),
          2 & v)
        ) {
          const m = M.$implicit;
          i.ɵɵproperty("routerLinkActiveOptions", i.ɵɵpureFunction0(9, ce))(
            "routerLink",
            m.link
          )("state", i.ɵɵpureFunction0(10, G)),
            i.ɵɵattribute("id", m.dataId)("data-id", m.dataId),
            i.ɵɵadvance(1),
            i.ɵɵproperty("innerText", i.ɵɵpipeBind1(2, 7, m.title)),
            i.ɵɵadvance(2),
            i.ɵɵproperty("ngIf", m.additionalContent);
        }
      }
      const pe = [
        {
          link: "/unified/swap",
          title: "txType.swap",
          dataId: "trade-menu.unified-swap-tab",
          filter: () => !0,
        },
        {
          link: "/classic/limit-order",
          title: "marketLimitBox.limit",
          dataId: "market-limit-box.limit-tab",
          filter: ({ isLimitOrdersDisabled: v }) => !v,
          additionalContent: Q,
        },
        {
          link: "/" + r.E,
          title: "marketLimitBox.p2p",
          dataId: "trade-menu.otc-deal-tab",
          filter: ({ isOtcDealEnabled: v, isLimitOrdersDisabled: M }) =>
            v && !M,
          additionalContent: se,
        },
      ];
      let de = (() => {
        class v {
          constructor(m, c, f, a, d, x, U) {
            (this.injector = m),
              (this.activatedRoute = c),
              (this.uiQuery = f),
              (this.walletConnectionService = a),
              (this.activeConnectionQuery = d),
              (this.tradeStateService = x),
              (this.featureToggleService = U),
              (this.highlightActive = !1),
              (this.currentChainId$ =
                this.activeConnectionQuery.currentChainId$),
              (this.isLimitOrdersDisabled$ = (0, T.a)([I.j, L.c]).pipe(
                (0, e.U)(([X, re]) => X || re)
              )),
              (this.menuItems$ = (0, T.a)([
                this.currentChainId$,
                this.isLimitOrdersDisabled$,
                this.uiQuery.select("swapLayout"),
                this.tradeStateService.tradeNavigationState$.pipe((0, l.BX)()),
              ]).pipe(
                (0, e.U)(([X, re, Z, oe]) => {
                  const J = {
                      sourceToken: oe.sourceToken.symbol,
                      destinationToken: oe.destinationToken.symbol,
                    },
                    s = { isLimitOrdersDisabled: re, isOtcDealEnabled: !0 };
                  return pe
                    .filter((_) => _.filter(s))
                    .map((_) =>
                      Object.assign(Object.assign({}, _), {
                        link: `/${X}${_.link}${this.getTokensPairPath(_, J)}`,
                      })
                    );
                })
              ));
          }
          getTokensPairPath(m, c) {
            const { dataId: f } = m,
              d = c
                ? "market-limit-box.limit-tab" === f ||
                  "trade-menu.otc-deal-tab" === f
                  ? this.getSourceTokenSymbolForOrders(c)
                  : c.sourceToken
                : null;
            return c ? `/${d}/${c.destinationToken}` : "";
          }
          getSourceTokenSymbolForOrders(m) {
            const c = (0, u.M)(m.sourceToken),
              a =
                o.tQ[this.activeConnectionQuery.currentChainId] ===
                m.sourceToken.toUpperCase();
            return c || a
              ? o.EA[this.activeConnectionQuery.currentChainId].symbol
              : m.sourceToken;
          }
        }
        return (
          (v.ɵfac = function (m) {
            return new (m || v)(
              i.ɵɵdirectiveInject(i.Injector),
              i.ɵɵdirectiveInject(b.gz),
              i.ɵɵdirectiveInject(V.s),
              i.ɵɵdirectiveInject(y.m),
              i.ɵɵdirectiveInject(O.r),
              i.ɵɵdirectiveInject(W.W),
              i.ɵɵdirectiveInject(te.BV)
            );
          }),
          (v.ɵcmp = i.ɵɵdefineComponent({
            type: v,
            selectors: [["trade-menu"]],
            hostVars: 2,
            hostBindings: function (m, c) {
              2 & m && i.ɵɵclassProp("highlight-active", c.highlightActive);
            },
            inputs: { highlightActive: "highlightActive" },
            decls: 2,
            vars: 3,
            consts: [
              [
                "class",
                "trade-menu-item",
                "routerLinkActive",
                "trade-menu-item__active",
                3,
                "routerLinkActiveOptions",
                "routerLink",
                "state",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "routerLinkActive",
                "trade-menu-item__active",
                1,
                "trade-menu-item",
                3,
                "routerLinkActiveOptions",
                "routerLink",
                "state",
              ],
              [3, "innerText"],
              [4, "ngIf"],
              [4, "ngComponentOutlet", "ngComponentOutletInjector"],
            ],
            template: function (m, c) {
              1 & m &&
                (i.ɵɵtemplate(0, ae, 4, 11, "a", 0), i.ɵɵpipe(1, "async")),
                2 & m &&
                  i.ɵɵproperty("ngForOf", i.ɵɵpipeBind1(1, 1, c.menuItems$));
            },
            dependencies: [k.$G, k.sg, k.O5, b.yS, b.Od, k.Ov, g.Ot],
            styles: [
              "[_nghost-%COMP%]{position:relative}.trade-menu-item[_ngcontent-%COMP%]{font-size:16px;line-height:20px;text-decoration:none;font-weight:500;color:var(--1inch__ui-02);margin:0 24px 0 0;padding-bottom:4px;cursor:pointer;position:relative}.trade-menu-item[_ngcontent-%COMP%]:hover, .trade-menu-item[_ngcontent-%COMP%]:focus{color:var(--1inch-common-text-03)}.trade-menu-item[_ngcontent-%COMP%]:last-child{margin-right:0!important}@media (max-width: 360px){.trade-menu-item[_ngcontent-%COMP%]{margin-right:16px}}.trade-menu-item__active[_ngcontent-%COMP%]{color:var(--1inch-text-01)!important}.highlight-active[_nghost-%COMP%]   .trade-menu-item__active[_ngcontent-%COMP%]{border-bottom:2px solid var(--1inch-common-text-03)}  tui-data-list{padding:0!important}.swap-link[_ngcontent-%COMP%]{text-decoration:none;color:var(--1inch-text-01)!important}.arrow-icon[_ngcontent-%COMP%]{margin-left:6px}",
            ],
            changeDetection: 0,
          })),
          v
        );
      })();
    },
    71106: (Y, w, n) => {
      n.d(w, { Q: () => u });
      var r = n(51109);
      let u = (() => {
        class l {
          constructor() {
            (this.width = 12), (this.height = 12), (this.duration = 2);
          }
        }
        return (
          (l.ɵfac = function (e) {
            return new (e || l)();
          }),
          (l.ɵcmp = r.ɵɵdefineComponent({
            type: l,
            selectors: [["loading-indicator"]],
            inputs: { width: "width", height: "height", duration: "duration" },
            decls: 4,
            vars: 3,
            consts: [
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 120 120",
                1,
                "loading-indicator",
              ],
              [
                "cx",
                "60",
                "cy",
                "60",
                "r",
                "50",
                "fill",
                "none",
                "stroke",
                "none",
                "stroke-width",
                "8",
                1,
                "background-circle",
              ],
              [
                "cx",
                "60",
                "cy",
                "60",
                "r",
                "50",
                "transform",
                "rotate(-90 60 60)",
                "fill",
                "none",
                "stroke-dashoffset",
                "314",
                "stroke-dasharray",
                "314",
                "stroke",
                "currentColor",
                "stroke-width",
                "14",
                1,
                "loading-circle",
              ],
              [
                "id",
                "circleAnimate",
                "attributeName",
                "stroke-dashoffset",
                "repeatCount",
                "indefinite",
                "values",
                "314;0",
                "begin",
                "0s",
              ],
            ],
            template: function (e, o) {
              1 & e &&
                (r.ɵɵnamespaceSVG(),
                r.ɵɵelementStart(0, "svg", 0),
                r.ɵɵelement(1, "circle", 1),
                r.ɵɵelementStart(2, "circle", 2),
                r.ɵɵelement(3, "animate", 3),
                r.ɵɵelementEnd()()),
                2 & e &&
                  (r.ɵɵattribute("width", o.width)("height", o.height),
                  r.ɵɵadvance(3),
                  r.ɵɵattribute("dur", o.duration + "s"));
            },
            styles: [
              "[_nghost-%COMP%]{display:block}.loading-indicator[_ngcontent-%COMP%]{color:var(--1inch-text-06)}.loading-indicator[_ngcontent-%COMP%]   .background-circle[_ngcontent-%COMP%]{stroke:var(--1inch-border-08)}",
            ],
            changeDetection: 0,
          })),
          l
        );
      })();
    },
    48091: (Y, w, n) => {
      n.d(w, { O: () => A });
      var r = n(51109),
        u = n(38143),
        l = n(54510),
        T = n(98182),
        e = n(12725),
        o = n(45256),
        L = n(26960);
      let I = (() => {
        class k {
          constructor(h) {
            this.chainExplorerService = h;
          }
          transform(h, ...g) {
            return this.chainExplorerService.token(h);
          }
        }
        return (
          (k.ɵfac = function (h) {
            return new (h || k)(r.ɵɵdirectiveInject(L.o, 16));
          }),
          (k.ɵpipe = r.ɵɵdefinePipe({
            name: "chainExplorerTokenLink",
            type: k,
            pure: !0,
          })),
          k
        );
      })();
      function P(k, t) {
        1 & k && r.ɵɵelement(0, "img", 8);
      }
      function i(k, t) {
        if (1 & k) {
          const h = r.ɵɵgetCurrentView();
          r.ɵɵelementStart(0, "div", 9)(1, "button", 10),
            r.ɵɵlistener("click", function () {
              r.ɵɵrestoreView(h);
              const D = r.ɵɵnextContext();
              return r.ɵɵresetView(D.remove());
            }),
            r.ɵɵnamespaceSVG(),
            r.ɵɵelementStart(2, "svg", 11),
            r.ɵɵelement(3, "use", 12),
            r.ɵɵelementEnd()(),
            r.ɵɵnamespaceHTML(),
            r.ɵɵelementStart(4, "a", 13),
            r.ɵɵpipe(5, "async"),
            r.ɵɵpipe(6, "chainExplorerTokenLink"),
            r.ɵɵnamespaceSVG(),
            r.ɵɵelementStart(7, "svg", 14),
            r.ɵɵelement(8, "use", 15),
            r.ɵɵelementEnd()()();
        }
        if (2 & k) {
          const h = r.ɵɵnextContext();
          r.ɵɵadvance(4),
            r.ɵɵproperty(
              "href",
              r.ɵɵpipeBind1(5, 1, r.ɵɵpipeBind1(6, 3, h.token.address)),
              r.ɵɵsanitizeUrl
            );
        }
      }
      function B(k, t) {
        if (
          (1 & k &&
            (r.ɵɵelementStart(0, "a", 16)(1, "simple-button", 17)(
              2,
              "span",
              18
            ),
            r.ɵɵtext(3, "Import"),
            r.ɵɵelementEnd()()()),
          2 & k)
        ) {
          const h = r.ɵɵnextContext();
          r.ɵɵproperty("routerLink", h.importLink.toString()),
            r.ɵɵattribute(
              "data-id",
              "add-token." + h.token.symbol + "-import-button"
            );
        }
      }
      let A = (() => {
        class k {
          constructor() {
            (this.showButtons = !0),
              (this.importLink = null),
              (this.removeToken = new r.EventEmitter());
          }
          get hasLogoFromCoingeko() {
            return "" !== this.token.image;
          }
          remove() {
            this.removeToken.next();
          }
        }
        return (
          (k.ɵfac = function (h) {
            return new (h || k)();
          }),
          (k.ɵcmp = r.ɵɵdefineComponent({
            type: k,
            selectors: [["custom-token-item"]],
            inputs: {
              token: "token",
              showButtons: "showButtons",
              importLink: "importLink",
            },
            outputs: { removeToken: "removeToken" },
            decls: 11,
            vars: 6,
            consts: [
              [1, "custom-token-icon", 3, "token"],
              [1, "custom-token-info"],
              ["data-id", "custom-token-name", 1, "custom-token-title"],
              [1, "custom-token-symbol-wrap"],
              ["data-id", "custom-token-ticker", 1, "custom-token-symbol"],
              [
                "class",
                "custom-token-source-icon",
                "src",
                "/assets/images/coingecko.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              ["class", "custom-token-buttons", 4, "ngIf"],
              ["class", "custom-token-import-link", 3, "routerLink", 4, "ngIf"],
              [
                "src",
                "/assets/images/coingecko.svg",
                "alt",
                "",
                1,
                "custom-token-source-icon",
              ],
              [1, "custom-token-buttons"],
              [1, "blank-button", "custom-token-remove", 3, "click"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              ["target", "_blank", 1, "custom-token-link", 3, "href"],
              ["width", "20", "height", "20"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link.svg#arrow-link",
              ],
              [1, "custom-token-import-link", 3, "routerLink"],
              ["color", "blue", "size", "inline"],
              ["transloco", "uni.importToken.import"],
            ],
            template: function (h, g) {
              1 & h &&
                (r.ɵɵelement(0, "token-icon", 0),
                r.ɵɵelementStart(1, "div", 1)(2, "div")(3, "p", 2),
                r.ɵɵtext(4),
                r.ɵɵelementEnd(),
                r.ɵɵelementStart(5, "span", 3)(6, "span", 4),
                r.ɵɵtext(7),
                r.ɵɵelementEnd(),
                r.ɵɵtemplate(8, P, 1, 0, "img", 5),
                r.ɵɵelementEnd()(),
                r.ɵɵtemplate(9, i, 9, 5, "div", 6),
                r.ɵɵtemplate(10, B, 4, 2, "a", 7),
                r.ɵɵelementEnd()),
                2 & h &&
                  (r.ɵɵproperty("token", g.token),
                  r.ɵɵadvance(4),
                  r.ɵɵtextInterpolate(g.token.name),
                  r.ɵɵadvance(3),
                  r.ɵɵtextInterpolate(g.token.symbol),
                  r.ɵɵadvance(1),
                  r.ɵɵproperty("ngIf", g.importLink && g.hasLogoFromCoingeko),
                  r.ɵɵadvance(1),
                  r.ɵɵproperty("ngIf", !g.importLink && g.showButtons),
                  r.ɵɵadvance(1),
                  r.ɵɵproperty("ngIf", g.importLink));
            },
            dependencies: [u.O5, l.yS, T.q, e.KI, o.o, u.Ov, I],
            styles: [
              "[_nghost-%COMP%]{display:flex;align-items:center;padding:16px 0}.custom-token-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:16px}.custom-token-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:calc(100% - 56px)}.custom-token-title[_ngcontent-%COMP%]{line-height:26px;font-weight:500;display:block;color:var(--1inch-text-03)}.custom-token-symbol-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.custom-token-symbol[_ngcontent-%COMP%]{font-size:13px;line-height:16px;color:var(--1inch__ui-02)}.custom-token-source-icon[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:8px}.custom-token-buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px;margin-right:-4px}.custom-token-remove[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.custom-token-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:var(--1inch-common-text-03)}.custom-token-remove[_ngcontent-%COMP%], .custom-token-link[_ngcontent-%COMP%]{padding:4px;border-radius:8px}.custom-token-remove[_ngcontent-%COMP%]:hover, .custom-token-remove[_ngcontent-%COMP%]:focus, .custom-token-link[_ngcontent-%COMP%]:hover, .custom-token-link[_ngcontent-%COMP%]:focus{opacity:.75;transition:.2s;background:var(--1inch-common-btn-bg-03)}.custom-token-import-link[_ngcontent-%COMP%]{width:72px}.custom-token-import-link[_ngcontent-%COMP%]:hover{text-decoration:none}",
            ],
            changeDetection: 0,
          })),
          k
        );
      })();
    },
    6904: (Y, w, n) => {
      n.d(w, { q: () => l });
      var r = n(51109),
        u = n(54510);
      let l = (() => {
        class T {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (T.ɵfac = function (o) {
            return new (o || T)();
          }),
          (T.ɵcmp = r.ɵɵdefineComponent({
            type: T,
            selectors: [["app-swap-settings-wrapper"]],
            decls: 1,
            vars: 0,
            template: function (o, L) {
              1 & o && r.ɵɵelement(0, "router-outlet");
            },
            dependencies: [u.lC],
            styles: [
              "[_nghost-%COMP%]     widget-header{display:block!important}@media (max-width: 418px){[_nghost-%COMP%]     widget-header{margin:0!important}}",
            ],
          })),
          T
        );
      })();
    },
  },
]);
