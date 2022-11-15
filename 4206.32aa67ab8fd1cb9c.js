"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [4206],
  {
    29055: (x, D, e) => {
      e.d(D, { r: () => r, w: () => m });
      const r = {
          routes: [{ amount: "0", part: 0 }],
          toTokenAmount: "0",
          toTokenEthAmount: "0",
          gasUnitsConsumed: "0",
        },
        m = {
          maxReturnResult: r,
          otcResult: r,
          uniResult: r,
          pathfinderParams: { deepLevel: 2, mainParts: 10, subParts: 50 },
        };
    },
    2794: (x, D, e) => {
      e.d(D, { a: () => f });
      var r = e(4671),
        m = e(90813),
        h = e(95021),
        p = e(64324),
        n = e(51109),
        _ = e(56472),
        u = e(68530),
        E = e(38143),
        t = e(71106),
        l = e(12725),
        a = e(95475);
      function d(i, P) {
        1 & i && n.ɵɵelement(0, "loading-indicator");
      }
      function v(i, P) {
        if (
          (1 & i &&
            (n.ɵɵelementStart(0, "div", 11)(1, "span"),
            n.ɵɵtext(2),
            n.ɵɵpipe(3, "displaySymbol"),
            n.ɵɵelementEnd(),
            n.ɵɵnamespaceSVG(),
            n.ɵɵelementStart(4, "svg", 7),
            n.ɵɵelement(5, "use", 12),
            n.ɵɵelementEnd()()),
          2 & i)
        ) {
          const s = P.$implicit;
          n.ɵɵadvance(2), n.ɵɵtextInterpolate(n.ɵɵpipeBind1(3, 1, s));
        }
      }
      function C(i, P) {
        if (
          (1 & i &&
            (n.ɵɵelementStart(0, "div", 9),
            n.ɵɵtemplate(1, v, 6, 3, "div", 10),
            n.ɵɵelementEnd()),
          2 & i)
        ) {
          const s = n.ɵɵnextContext(2);
          n.ɵɵadvance(1), n.ɵɵproperty("ngForOf", s.flatRouteTokens);
        }
      }
      function U(i, P) {
        if (
          (1 & i &&
            (n.ɵɵelementStart(0, "span", 13),
            n.ɵɵtext(1),
            n.ɵɵelementStart(2, "span", 14),
            n.ɵɵtext(3, "steps in the route"),
            n.ɵɵelementEnd()()),
          2 & i)
        ) {
          const s = n.ɵɵnextContext(2);
          n.ɵɵadvance(1),
            n.ɵɵtextInterpolate1(" ", s.stepsCountInTheRoute, " ");
        }
      }
      function T(i, P) {
        if (
          (1 & i &&
            (n.ɵɵelementContainerStart(0),
            n.ɵɵtemplate(1, C, 2, 1, "div", 4),
            n.ɵɵtemplate(2, U, 4, 1, "span", 5),
            n.ɵɵelementStart(3, "button", 6),
            n.ɵɵnamespaceSVG(),
            n.ɵɵelementStart(4, "svg", 7),
            n.ɵɵelement(5, "use", 8),
            n.ɵɵelementEnd()(),
            n.ɵɵelementContainerEnd()),
          2 & i)
        ) {
          const s = n.ɵɵnextContext();
          n.ɵɵadvance(1),
            n.ɵɵproperty("ngIf", s.isSimpleRoute),
            n.ɵɵadvance(1),
            n.ɵɵproperty("ngIf", !s.isSimpleRoute);
        }
      }
      let f = (() => {
        class i {
          constructor(s, o, M) {
            (this.tokensQuery = s),
              (this.tuiDialogService = o),
              (this.injector = M);
          }
          get stepsCountInTheRoute() {
            return this.routes
              ? this.routes.reduce((s, o) => s + o.subRoutes.length, 0)
              : 0;
          }
          get isSimpleRoute() {
            return (
              this.routes && this.routes.length <= 4 && 1 === this.routes.length
            );
          }
          get flatRouteTokens() {
            if (!this.routes) return [];
            const s = this.routes[0].subRoutes;
            if (!s) return [];
            const o = s.map((w) => w[0].toTokenAddress);
            return [this.sourceToken.address, ...o]
              .map((w) => this.tokensQuery.getByAddress(w))
              .filter(h.RF);
          }
          showFullscreenRouting() {
            if (!this.routes) return;
            const s = {
                sourceToken: this.sourceToken,
                destinationToken: this.destinationToken,
                routes: this.routes,
              },
              o = this.tuiDialogService.open(new p.Al(r.T, this.injector), {
                data: s,
              });
            (0, m.O)(o, "PathfinderRoutePopupComponent open");
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)(
              n.ɵɵdirectiveInject(_.d),
              n.ɵɵdirectiveInject(u.RO),
              n.ɵɵdirectiveInject(n.Injector)
            );
          }),
          (i.ɵcmp = n.ɵɵdefineComponent({
            type: i,
            selectors: [["routes-info"]],
            inputs: {
              routes: "routes",
              sourceToken: "sourceToken",
              destinationToken: "destinationToken",
            },
            decls: 6,
            vars: 2,
            consts: [
              [
                "data-id",
                "info-route-row",
                "id",
                "info-route-row",
                1,
                "routes-info",
              ],
              ["transloco", "uni.quoteInfo.route"],
              [1, "pathfinder-route", 3, "click"],
              [4, "ngIf"],
              [
                "class",
                "flat-path",
                "data-id",
                "info-route-pathfinder-route",
                "id",
                "info-route-pathfinder-route",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "info-route-pathfinder-route-steps",
                "id",
                "info-route-pathfinder-route-steps",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "info-route-expand",
                "id",
                "info-route-expand",
                1,
                "fullscreen-route-btn",
                "blank-button",
              ],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/fullscreen_2.svg#fullscreen",
              ],
              [
                "data-id",
                "info-route-pathfinder-route",
                "id",
                "info-route-pathfinder-route",
                1,
                "flat-path",
              ],
              ["class", "flat-path-item", 4, "ngFor", "ngForOf"],
              [1, "flat-path-item"],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              [
                "data-id",
                "info-route-pathfinder-route-steps",
                "id",
                "info-route-pathfinder-route-steps",
              ],
              ["transloco", "uni.quoteInfo.steps-in-route"],
            ],
            template: function (s, o) {
              1 & s &&
                (n.ɵɵelementStart(0, "div", 0)(1, "span", 1),
                n.ɵɵtext(2, "Route"),
                n.ɵɵelementEnd(),
                n.ɵɵelementStart(3, "div", 2),
                n.ɵɵlistener("click", function () {
                  return o.showFullscreenRouting();
                }),
                n.ɵɵtemplate(4, d, 1, 0, "loading-indicator", 3),
                n.ɵɵtemplate(5, T, 6, 2, "ng-container", 3),
                n.ɵɵelementEnd()()),
                2 & s &&
                  (n.ɵɵadvance(4),
                  n.ɵɵproperty("ngIf", !o.routes),
                  n.ɵɵadvance(1),
                  n.ɵɵproperty("ngIf", o.routes));
            },
            dependencies: [E.sg, E.O5, t.Q, l.KI, a.s],
            styles: [
              ".routes-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--1inch__ui-02)}.pathfinder-route[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--1inch-text-01)}.pathfinder-route[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.pathfinder-route[_ngcontent-%COMP%], .flat-path[_ngcontent-%COMP%], .flat-path-item[_ngcontent-%COMP%]{display:flex;align-items:center}.flat-path-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:rotate(-90deg);margin:-1px 2px 0}.flat-path-item[_ngcontent-%COMP%]:last-of-type   svg[_ngcontent-%COMP%]{display:none}.fullscreen-route-btn[_ngcontent-%COMP%]{margin:0 -2px 0 8px}.fullscreen-route-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}",
            ],
            changeDetection: 0,
          })),
          i
        );
      })();
    },
    89990: (x, D, e) => {
      e.d(D, { j: () => u });
      var r = e(38143),
        m = e(12725),
        h = e(62901),
        p = e(60803),
        n = e(68530),
        _ = e(51109);
      let u = (() => {
        class E {}
        return (
          (E.ɵfac = function (l) {
            return new (l || E)();
          }),
          (E.ɵmod = _.ɵɵdefineNgModule({ type: E })),
          (E.ɵinj = _.ɵɵdefineInjector({
            imports: [r.ez, p.p, h.w, n.up, m.y4],
          })),
          E
        );
      })();
    },
    90710: (x, D, e) => {
      e.d(D, { F: () => ae });
      var r = e(90813),
        m = e(33747),
        h = e(29737),
        p = e(1753),
        n = e(35878),
        _ = e(25221),
        u = e(77724),
        E = e(55231),
        t = e(51109),
        l = e(69064),
        a = e(34377),
        d = e(50349),
        v = e(38143),
        C = e(39829),
        U = e(31777),
        T = e(83108),
        S = e(98396),
        f = e(79296),
        i = e(3012),
        P = e(71909),
        s = e(76327),
        o = e(17114),
        M = e(68751),
        w = e(64736),
        y = e(18128),
        W = e(18992),
        A = e(26451),
        O = e(18742),
        L = e(24124),
        R = e(93130),
        g = e(67769),
        K = e(98548),
        B = e(85377),
        Q = e(47438),
        V = e(16380),
        X = e(44200),
        H = e(9300),
        z = e(95249),
        J = e(40475),
        Y = e(97093),
        Z = e(30921),
        k = e(13348),
        b = e(2861),
        q = e(58903),
        ee = e(62425),
        te = e(12725),
        ne = e(68128);
      let se = (() => {
        class j {
          constructor(
            c,
            I,
            $,
            F,
            N,
            oe,
            _e,
            ce,
            pe,
            le,
            me,
            he,
            de,
            Ee,
            ue,
            ve,
            Pe,
            fe,
            Oe,
            Me
          ) {
            (this.simpleSwapQuery = c),
              (this.activeConnectionQuery = I),
              (this.walletConnectionQuery = $),
              (this.simpleSwapManagerService = F),
              (this.swapTransactionService = N),
              (this.priceImpactWarningService = oe),
              (this.highSlippageWarningService = _e),
              (this.swapConfirmSnapshotService = ce),
              (this.pathfinderService = pe),
              (this.walletService = le),
              (this.pathfinderManagerService = me),
              (this.swapSettingsService = he),
              (this.txFeeService = de),
              (this.simpleSwapConfirmService = Ee),
              (this.swapConfirmManagerService = ue),
              (this.swapConfirmTxService = ve),
              (this.simpleSwapConfirmationDataService = Pe),
              (this.tokensPairPriceImpactService = fe),
              (this.ensService = Oe),
              (this.destroy$ = Me),
              (this.openSettings = new t.EventEmitter()),
              (this.swapConfirmationData$ =
                this.simpleSwapConfirmationDataService.getData$()),
              (this.feeToken = this.activeConnectionQuery.currentNativeToken),
              (this.gasLimit$ = this.simpleSwapConfirmService.gasLimit$),
              (this.txType = new U.UntypedFormControl(T.X.BROADCAST)),
              (this.sendToReceiver = new U.UntypedFormControl({
                checked: !1,
                address: "",
              })),
              (this.customGasPriceControl = new U.UntypedFormControl()),
              (this.subscription = new f.w0()),
              this.swapConfirmManagerService.setContext({
                swapConfirmManager: this.simpleSwapConfirmService,
                swapBuilderManager: this.simpleSwapManagerService,
                originalDestinationAmount:
                  this.simpleSwapManagerService.getSwapData()
                    .destinationTokenAmount,
              });
            const De = this.sendToReceiver.statusChanges.pipe(
              (0, u.b)((Ce) => {
                this.simpleSwapConfirmationDataService.isAlternativeReceiverValid$.next(
                  "VALID" === Ce
                );
              }),
              (0, E.R)(this.destroy$)
            );
            (0, r.O)(De, "isAlternativeReceiverValid$");
          }
          get sendToAnotherReceiver() {
            return this.sendToReceiver.value;
          }
          get snapshot() {
            return this.simpleSwapConfirmService.snapshot;
          }
          set snapshot(c) {
            (this.simpleSwapConfirmService.snapshot = c),
              this.simpleSwapConfirmationDataService.swapSnapshot$.next(c);
          }
          get rateExpired() {
            return this.simpleSwapConfirmService.rateExpired;
          }
          set rateExpired(c) {
            this.simpleSwapConfirmService.rateExpired = c;
          }
          ngOnInit() {
            this.initialRatesUpdate(),
              this.redirectToSwapOnEnvChanges(),
              this.persistCustomGasPrice(),
              this.listenRateChanges(),
              this.listenSwapPriceImpact(),
              this.listenPermitExpiration(),
              this.listenAnotherReceiver();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe(),
              this.pathfinderService.reset(),
              this.swapConfirmManagerService.reset();
          }
          initialRatesUpdate() {
            this.snapshot = this.swapConfirmSnapshotService.buildSnapshot();
            const c = this.simpleSwapConfirmService.shouldRequestPF$.pipe(
              (0, s.w)((I) =>
                I
                  ? this.pathfinderManagerService.requestPathfinder()
                  : (0, i.of)(null)
              ),
              (0, s.w)(() => this.getUpdateRatesStream()),
              (0, E.R)(this.destroy$)
            );
            (0, r.O)(c, "initial rates update stream");
          }
          updateRates() {
            (0, r.O)(
              this.getUpdateRatesStream(!0),
              "swap confirm updateRates",
              this.subscription
            );
          }
          recalculateRoute() {
            const c = this.swapConfirmManagerService.recalculateRoute().pipe(
              (0, u.b)(() => {
                this.snapshot = this.swapConfirmSnapshotService.buildSnapshot();
              }),
              (0, E.R)(this.destroy$)
            );
            (0, r.O)(c, "recalculateRoute$");
          }
          confirmSwap() {
            if (this.sendToReceiver.invalid) return;
            const { address: c = null } = this.sendToAnotherReceiver,
              $ = this.ensService
                .resolveWalletAddressByEnsName$(c || "")
                .pipe(
                  (0, s.w)((F) =>
                    this.swapConfirmTxService
                      .confirmSwap(
                        this.snapshot,
                        this.txType.value,
                        F,
                        this.tokensPairPriceImpactService.swapPriceImpact
                      )
                      .pipe(
                        (0, o.K)((N) =>
                          N instanceof S.G
                            ? (this.handleOpenSettings("slippage"),
                              (0, i.of)(null))
                            : (0, P._)(() => N)
                        )
                      )
                  )
                );
            (0, r.O)($, "Uni swap", this.subscription);
          }
          handleOpenSettings(c) {
            this.openSettings.emit(c);
          }
          listenAnotherReceiver() {
            const c = (0, p.T)(
              this.sendToReceiver.valueChanges,
              this.sendToReceiver.statusChanges
            ).pipe(
              (0, M.h)(() => this.sendToReceiver.valid),
              (0, w.U)(() => this.sendToAnotherReceiver),
              (0, n.x)(
                (I, $) => I.checked === $.checked && I.address === $.address
              ),
              (0, s.w)(() => this.getUpdateRatesStream())
            );
            (0, r.O)(c, "another receiver", this.subscription);
          }
          getUpdateRatesStream(c = !1) {
            return (
              this.simpleSwapConfirmService.gasLimit$.next(0),
              this.simpleSwapManagerService.reset(),
              (this.snapshot = this.swapConfirmSnapshotService.buildSnapshot()),
              this.customGasPriceControl.setValue(
                this.customGasPriceControl.value
              ),
              this.activeConnectionQuery.isChainSupportEIP1559 &&
                (this.simpleSwapConfirmService.txTypeSwitchParams = (0, W.bM)(
                  0,
                  (0, A.E)(this.snapshot.gasParams),
                  this.snapshot.gasPriceAdvanced
                )),
              (this.rateExpired = !1),
              this.swapConfirmManagerService
                .updateRates({
                  allowUnoSwap: !(
                    this.sendToReceiver.valid &&
                    this.sendToAnotherReceiver.address
                  ),
                  pushAlert: c,
                })
                .pipe(
                  (0, u.b)(() => {
                    this.snapshot =
                      this.swapConfirmSnapshotService.buildSnapshot();
                  })
                )
            );
          }
          redirectToSwapOnEnvChanges() {
            const c = (0, p.T)(
              this.walletConnectionQuery.isWalletConnected$.pipe(
                (0, M.h)((I) => !I)
              ),
              this.activeConnectionQuery.currentChainId$.pipe((0, _.T)(1))
            ).pipe(
              (0, u.b)(() => {
                this.simpleSwapConfirmService.navigateToSwapForm();
              })
            );
            (0, r.O)(c, "", this.subscription);
          }
          persistCustomGasPrice() {
            const c = this.customGasPriceControl.valueChanges.pipe(
              (0, u.b)((I) => {
                this.simpleSwapManagerService.setFlashTxGasPriceGwei(I);
              })
            );
            (0, r.O)(c, "customGasPriceChanges$", this.subscription);
          }
          listenRateChanges() {
            const c = this.simpleSwapQuery.destinationTokenAmount$.pipe(
              (0, _.T)(1),
              (0, M.h)((I) => !!I),
              (0, y.p)(3e3),
              (0, u.b)(() => {
                this.rateExpired = !0;
              })
            );
            (0, r.O)(c, "rateExpired$", this.subscription);
          }
          listenSwapPriceImpact() {
            const c = this.swapConfirmSnapshotService.swapPriceImpact$.pipe(
              (0, u.b)(() => {
                this.snapshot = Object.assign(
                  Object.assign({}, this.snapshot),
                  (0, h.eiS)(
                    [
                      "swapPriceImpact",
                      "isHighPriceImpact",
                      "isExtremePriceImpact",
                    ],
                    this.swapConfirmSnapshotService.buildSnapshot()
                  )
                );
              })
            );
            (0, r.O)(c, "rateExpired$", this.subscription);
          }
          listenPermitExpiration() {
            const c = this.swapConfirmManagerService.listenPermitExpiration(
              this.simpleSwapQuery.sourceToken$
            );
            (0, r.O)(c, "permitExpired$", this.subscription);
          }
        }
        return (
          (j.ɵfac = function (c) {
            return new (c || j)(
              t.ɵɵdirectiveInject(O.G),
              t.ɵɵdirectiveInject(L.r),
              t.ɵɵdirectiveInject(R.r),
              t.ɵɵdirectiveInject(g.B),
              t.ɵɵdirectiveInject(K.z),
              t.ɵɵdirectiveInject(B.u),
              t.ɵɵdirectiveInject(Q.I),
              t.ɵɵdirectiveInject(V.O),
              t.ɵɵdirectiveInject(X.Q),
              t.ɵɵdirectiveInject(H.X),
              t.ɵɵdirectiveInject(z.u),
              t.ɵɵdirectiveInject(J._),
              t.ɵɵdirectiveInject(Y.V),
              t.ɵɵdirectiveInject(d.e),
              t.ɵɵdirectiveInject(Z.GA),
              t.ɵɵdirectiveInject(S.C),
              t.ɵɵdirectiveInject(k.f),
              t.ɵɵdirectiveInject(b.t),
              t.ɵɵdirectiveInject(q.D),
              t.ɵɵdirectiveInject(m.a3, 2)
            );
          }),
          (j.ɵcmp = t.ɵɵdefineComponent({
            type: j,
            selectors: [["swap-confirm"]],
            outputs: { openSettings: "openSettings" },
            features: [t.ɵɵProvidersFeature([m.a3])],
            decls: 6,
            vars: 9,
            consts: [
              ["backLink", "../"],
              ["transloco", "uni.confirmSwap.swap-confirmation-1"],
              [
                "contextId",
                "confirm-simple-swap",
                3,
                "swapConfirmationData",
                "txTypeControl",
                "customGasPriceControl",
                "sendToReceiverControl",
                "gasLimit",
                "onOpenSettings",
                "onRecalculateRoute",
                "onDoSwap",
                "onUpdateRates",
              ],
            ],
            template: function (c, I) {
              1 & c &&
                (t.ɵɵelementStart(0, "widget-header", 0)(1, "span", 1),
                t.ɵɵtext(2, "Confirm swap"),
                t.ɵɵelementEnd()(),
                t.ɵɵelementStart(3, "swap-confirmation", 2),
                t.ɵɵlistener("onOpenSettings", function (F) {
                  return I.handleOpenSettings(F);
                })("onRecalculateRoute", function () {
                  return I.recalculateRoute();
                })("onDoSwap", function () {
                  return I.confirmSwap();
                })("onUpdateRates", function () {
                  return I.updateRates();
                }),
                t.ɵɵpipe(4, "async"),
                t.ɵɵpipe(5, "async"),
                t.ɵɵelementEnd()),
                2 & c &&
                  (t.ɵɵadvance(3),
                  t.ɵɵproperty(
                    "swapConfirmationData",
                    t.ɵɵpipeBind1(4, 5, I.swapConfirmationData$)
                  )("txTypeControl", I.txType)(
                    "customGasPriceControl",
                    I.customGasPriceControl
                  )("sendToReceiverControl", I.sendToReceiver)(
                    "gasLimit",
                    t.ɵɵpipeBind1(5, 7, I.gasLimit$)
                  ));
            },
            dependencies: [ee.y, te.KI, ne.h, v.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]     swap-confirm-settings-rows .swap-confirm-settings-row{margin-top:8px}.back-link[_ngcontent-%COMP%]{display:block;position:absolute;left:440px;top:20px;width:50px;height:50px;cursor:pointer}.back-link[_ngcontent-%COMP%]:hover{background-color:#6ea4ff33}.swap-confirm-details[_ngcontent-%COMP%]{margin-top:16px}.swap-confirm-subtext-part[_ngcontent-%COMP%]{display:block;margin-bottom:16px}.swap-confirm-subtext-part[_ngcontent-%COMP%]:last-child{margin-bottom:0}.tx-type-switch[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.swap-confirm-settings-row-container[_ngcontent-%COMP%]{padding-right:4px;padding-left:4px}.swap-confirm-button[_ngcontent-%COMP%]{margin-top:16px}",
            ],
          })),
          j
        );
      })();
      function ie(j, G) {
        if (1 & j) {
          const c = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "swap-confirm", 3),
            t.ɵɵlistener("openSettings", function ($) {
              t.ɵɵrestoreView(c);
              const F = t.ɵɵnextContext();
              return t.ɵɵresetView(F.openSettings($));
            }),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
      }
      function re(j, G) {
        if (1 & j) {
          const c = t.ɵɵgetCurrentView();
          t.ɵɵelementContainerStart(0),
            t.ɵɵelementStart(1, "swap-confirm-settings", 4),
            t.ɵɵlistener("backButtonClick", function () {
              t.ɵɵrestoreView(c);
              const $ = t.ɵɵnextContext();
              return t.ɵɵresetView($.returnToConfirmForm());
            }),
            t.ɵɵelementEnd(),
            t.ɵɵelementContainerEnd();
        }
        if (2 & j) {
          const c = t.ɵɵnextContext();
          t.ɵɵadvance(1), t.ɵɵproperty("settingsType", c.settingsDomain);
        }
      }
      let ae = (() => {
        class j {
          constructor(c, I, $, F) {
            (this.destroy$ = c),
              (this.swapSettingsQuery = I),
              (this.swapSlippageService = $),
              (this.simpleSwapConfirmService = F),
              (this.currentScreen = "form");
          }
          get settingsDomain() {
            return "slippage" === this.currentScreen ? "slippage" : "gas-price";
          }
          ngOnInit() {
            const c = (0, p.T)(
              this.swapSlippageService.slippageTolerance$.pipe(
                (0, n.x)(h.fS0),
                (0, _.T)(1)
              ),
              this.swapSettingsQuery.gasPrice$.pipe(
                (0, n.x)(h.fS0),
                (0, _.T)(1)
              )
            ).pipe(
              (0, u.b)((I) => {
                this.simpleSwapConfirmService.shouldRequestPF$.next(!0);
              }),
              (0, E.R)(this.destroy$)
            );
            (0, r.O)(c, "requestSwapBuilder$");
          }
          openSettings(c) {
            this.currentScreen = c;
          }
          returnToConfirmForm() {
            this.simpleSwapConfirmService.shouldRequestPF$.next(!0),
              (this.currentScreen = "form");
          }
        }
        return (
          (j.ɵfac = function (c) {
            return new (c || j)(
              t.ɵɵdirectiveInject(m.a3, 2),
              t.ɵɵdirectiveInject(l.G),
              t.ɵɵdirectiveInject(a.j),
              t.ɵɵdirectiveInject(d.e)
            );
          }),
          (j.ɵcmp = t.ɵɵdefineComponent({
            type: j,
            selectors: [["swap-confirm-wrapper"]],
            features: [t.ɵɵProvidersFeature([m.a3])],
            decls: 3,
            vars: 2,
            consts: [
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [4, "ngSwitchDefault"],
              [
                "data-id",
                "confirm-swap-box",
                "id",
                "confirm-swap-box",
                3,
                "openSettings",
              ],
              [3, "settingsType", "backButtonClick"],
            ],
            template: function (c, I) {
              1 & c &&
                (t.ɵɵelementContainerStart(0, 0),
                t.ɵɵtemplate(1, ie, 2, 0, "ng-container", 1),
                t.ɵɵtemplate(2, re, 2, 1, "ng-container", 2),
                t.ɵɵelementContainerEnd()),
                2 & c &&
                  (t.ɵɵproperty("ngSwitch", I.currentScreen),
                  t.ɵɵadvance(1),
                  t.ɵɵproperty("ngSwitchCase", "form"));
            },
            dependencies: [v.RF, v.n9, v.ED, C.X, se],
          })),
          j
        );
      })();
    },
    26451: (x, D, e) => {
      function r(m) {
        if (!m) return 0;
        switch (m.gasPreset) {
          case "custom":
            return m.customGasFeesGwei;
          case "instant":
            return m.instantGwei;
          case "fast":
            return m.fastGwei;
          case "standard":
            return m.standardGwei;
        }
      }
      e.d(D, { E: () => r });
    },
    50349: (x, D, e) => {
      e.d(D, { e: () => f });
      var r = e(91488),
        m = e(30921),
        h = e(29737),
        p = e(76027),
        n = e(3012),
        _ = e(83358),
        u = e(77724),
        E = e(64736),
        t = e(18992),
        l = e(26451),
        a = e(51109),
        d = e(24124),
        v = e(67769),
        C = e(89170),
        U = e(99580),
        T = e(16380),
        S = e(95249);
      let f = (() => {
        class i extends m.B {
          constructor(s, o, M, w, y, W) {
            super(),
              (this.activeConnectionQuery = s),
              (this.simpleSwapManagerService = o),
              (this.simpleRoutingService = M),
              (this.simpleSwapService = w),
              (this.swapConfirmSnapshotService = y),
              (this.pathfinderManagerService = W),
              (this.gasLimit$ = new p.X(0)),
              (this.rateExpired$ = new p.X(!1)),
              (this.estimateWith99SlippageEnabled$ = new p.X(!1)),
              (this.shouldRequestPF$ = new p.X(!1)),
              (this.isUnoSwap = !1),
              (this.txTypeSwitchParams = null);
          }
          set rateExpired(s) {
            this.rateExpired$.next(s);
          }
          get rateExpired() {
            return this.rateExpired$.value;
          }
          set estimateWith99SlippageEnabled(s) {
            this.estimateWith99SlippageEnabled$.next(s);
          }
          get forSwapEnabled() {
            return this.estimateWith99SlippageEnabled$.value;
          }
          reset() {
            this.gasLimit$.next(0),
              (this.isUnoSwap = !1),
              (this.rateExpired = !1),
              (this.estimateWith99SlippageEnabled = !1),
              (this.txTypeSwitchParams = null);
          }
          getSwapConfirmTokensData() {
            return this.snapshot.swapData;
          }
          applySwapBuilderSuccessResponse() {
            const { callData: s, gasLimit: o } =
              this.simpleSwapManagerService.getSwapParams();
            return (
              this.gasLimit$.next(o),
              this.activeConnectionQuery.isChainSupportEIP1559 &&
                (this.txTypeSwitchParams = (0, t.bM)(
                  o,
                  (0, l.E)(this.snapshot.gasParams),
                  this.snapshot.gasPriceAdvanced
                )),
              (this.isUnoSwap = (0, r.Yi)(s)),
              (0, n.of)(void 0)
            );
          }
          requestPathfinder() {
            return this.pathfinderManagerService.requestPathfinder().pipe(
              (0, _.q)(1),
              (0, u.b)((s) => {
                !s ||
                  this.simpleSwapService.applyPathfinderResponse(
                    (0, h.eiS)(
                      [
                        "maxReturnResult",
                        "otcResult",
                        "uniResult",
                        "lowestGasResult",
                      ],
                      s
                    )
                  );
              }),
              (0, E.U)(() => {})
            );
          }
          getGasPriceAdvanced() {
            return this.snapshot.gasPriceAdvanced;
          }
          navigateToSwapForm() {
            return this.simpleRoutingService.navigateToCurrentSwapUrl();
          }
          beforeSwapTransaction() {}
          updateDestinationTokenAmount(s) {
            this.simpleSwapService.setDestinationTokenAmount(s),
              (this.rateExpired = !1),
              (this.snapshot = this.swapConfirmSnapshotService.buildSnapshot());
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)(
              a.ɵɵinject(d.r),
              a.ɵɵinject(v.B),
              a.ɵɵinject(C.E),
              a.ɵɵinject(U.q),
              a.ɵɵinject(T.O),
              a.ɵɵinject(S.u)
            );
          }),
          (i.ɵprov = a.ɵɵdefineInjectable({ token: i, factory: i.ɵfac })),
          i
        );
      })();
    },
    13348: (x, D, e) => {
      e.d(D, { f: () => S });
      var r = e(42585),
        m = e(83517),
        h = e(53886),
        p = e(76327),
        n = e(51109),
        _ = e(9300),
        u = e(2861),
        E = e(30921),
        t = e(40475),
        l = e(50349),
        a = e(97093),
        d = e(67769),
        v = e(18742),
        C = e(69064),
        U = e(98396),
        T = e(34377);
      let S = (() => {
        class f extends m.R {
          constructor(P, s, o, M, w, y, W, A, O, L, R) {
            super(P, s, o, M, O, L, R),
              (this.walletService = P),
              (this.tokensPairPriceImpactService = s),
              (this.swapConfirmManagerService = o),
              (this.swapSettingsService = M),
              (this.simpleSwapConfirmService = w),
              (this.txFeeService = y),
              (this.simpleSwapManagerService = W),
              (this.simpleSwapQuery = A),
              (this.swapSettingsQuery = O),
              (this.swapConfirmTxService = L),
              (this.swapSlippageService = R),
              (this.destinationTokenAmount$ =
                this.simpleSwapQuery.destinationTokenAmount$),
              (this.destinationToken$ = this.simpleSwapQuery.destinationToken$),
              (this.txFeeAmount$ = (0, h.a)([
                this.simpleSwapConfirmService.gasLimit$,
                this.swapSettingsQuery.gasPrice$,
              ]).pipe(
                (0, p.w)(([g]) =>
                  this.txFeeService.getTxFee(
                    (g || 0).toString(),
                    this.simpleSwapManagerService
                  )
                )
              )),
              (this.fotSwapEnabled$ = (0, r.K)(
                this.simpleSwapQuery.sourceToken$,
                this.simpleSwapQuery.destinationToken$
              )),
              (this.estimateWith99SlippageEnabled$ =
                this.simpleSwapConfirmService.estimateWith99SlippageEnabled$);
          }
          get isUnoSwap() {
            return this.simpleSwapConfirmService.isUnoSwap;
          }
          get txTypeSwitchParams() {
            return this.simpleSwapConfirmService.txTypeSwitchParams;
          }
        }
        return (
          (f.ɵfac = function (P) {
            return new (P || f)(
              n.ɵɵinject(_.X),
              n.ɵɵinject(u.t),
              n.ɵɵinject(E.GA),
              n.ɵɵinject(t._),
              n.ɵɵinject(l.e),
              n.ɵɵinject(a.V),
              n.ɵɵinject(d.B),
              n.ɵɵinject(v.G),
              n.ɵɵinject(C.G),
              n.ɵɵinject(U.C),
              n.ɵɵinject(T.j)
            );
          }),
          (f.ɵprov = n.ɵɵdefineInjectable({ token: f, factory: f.ɵfac })),
          f
        );
      })();
    },
    30904: (x, D, e) => {
      e.d(D, { B: () => K });
      var r = e(38143),
        m = e(31777),
        h = e(77065),
        p = e(54510),
        n = e(12725),
        _ = e(25305),
        u = e(65672),
        E = e(3493),
        t = e(44076),
        l = e(64977),
        a = e(34289),
        d = e(92356),
        v = e(47540),
        C = e(58395),
        U = e(38783),
        T = e(10047),
        S = e(23963),
        f = e(91290),
        i = e(12021),
        P = e(9516),
        s = e(87771),
        o = e(32770),
        M = e(59312),
        w = e(44578),
        y = e(92157),
        W = e(54568),
        A = e(74586),
        O = e(91859),
        L = e(13348),
        R = e(67769),
        g = e(51109);
      let K = (() => {
        class B {}
        return (
          (B.ɵfac = function (V) {
            return new (V || B)();
          }),
          (B.ɵmod = g.ɵɵdefineNgModule({ type: B })),
          (B.ɵinj = g.ɵɵdefineInjector({
            providers: [R.B, L.f],
            imports: [
              p.Bz,
              O.N,
              r.ez,
              m.FormsModule,
              m.ReactiveFormsModule,
              y.U,
              A.I,
              C.n,
              U.K,
              s.U,
              W.d,
              T.y,
              f.I,
              M.I,
              h.Is,
              i.p,
              t.T,
              w.P,
              u.n,
              n.y4,
              l.Y,
              d.w,
              o.Z,
              _.h,
              E.a,
              a.P,
              S.k,
              v.G,
              P.G,
            ],
          })),
          B
        );
      })();
    },
    7405: (x, D, e) => {
      e.d(D, { w: () => T });
      var r = e(51415),
        m = e(53886),
        h = e(7722),
        p = e(51109),
        n = e(18742),
        _ = e(24124),
        u = e(36477),
        E = e(36565),
        t = e(93130),
        l = e(63898),
        a = e(95535),
        d = e(40475),
        v = e(44432),
        C = e(28541),
        U = e(60300);
      let T = (() => {
        class S extends r.n {
          constructor(i, P, s, o, M, w, y, W, A, O, L) {
            super(
              (0, m.a)([i.currentPreset$, i.select("isSetMax")]).pipe(
                (0, h.h)(void 0)
              ),
              L.isSynthetixRoute$,
              i.select([
                "sourceToken",
                "sourceTokenAmount",
                "destinationToken",
                "destinationTokenAmount",
              ]),
              P,
              s,
              o,
              M,
              w,
              y,
              W,
              A,
              O
            ),
              (this.simpleSwapQuery = i),
              (this.activeConnectionQuery = P),
              (this.tokenBalanceQuery = s),
              (this.gasPriceQuery = o),
              (this.walletConnectionQuery = M),
              (this.tokenAllowanceQuery = w),
              (this.permitAvailabilityService = y),
              (this.swapSettingsService = W),
              (this.swapPriceImpactService = A),
              (this.limitOrderQuery = O),
              (this.pathfinderQuery = L);
          }
        }
        return (
          (S.ɵfac = function (i) {
            return new (i || S)(
              p.ɵɵinject(n.G),
              p.ɵɵinject(_.r),
              p.ɵɵinject(u.n4),
              p.ɵɵinject(E.j),
              p.ɵɵinject(t.r),
              p.ɵɵinject(l.K),
              p.ɵɵinject(a.X),
              p.ɵɵinject(d._),
              p.ɵɵinject(v.f),
              p.ɵɵinject(C.g),
              p.ɵɵinject(U.o)
            );
          }),
          (S.ɵprov = p.ɵɵdefineInjectable({ token: S, factory: S.ɵfac })),
          S
        );
      })();
    },
    3648: (x, D, e) => {
      e.d(D, { N: () => A });
      var r = e(90813),
        m = e(73592),
        h = e(76027),
        p = e(80849),
        n = e(53886),
        _ = e(1753),
        u = e(30606),
        E = e(3012),
        t = e(68751),
        l = e(35878),
        a = e(7722),
        d = e(25221),
        v = e(21491),
        C = e(76327),
        U = e(64736),
        T = e(77724),
        S = e(51109),
        f = e(24124),
        i = e(18742),
        P = e(68534),
        s = e(83140),
        o = (() => {
          return (
            ((O = o || (o = {})).newBlockMined = "newBlockMined"),
            (O.userInputChanges = "userInputChanges"),
            (O.manualRefresh = "manualRefresh"),
            (O.windowActivation = "windowActivation"),
            (O.timer = "timer"),
            o
          );
          var O;
        })();
      const y = !!localStorage.getItem("swapFormRefreshLogEnabled");
      function W(O) {
        y && s.log(`[SWAP FORM REFRESH] ${O} timestamp: ${Date.now()}`);
      }
      let A = (() => {
        class O {
          constructor(R, g, K) {
            (this.activeConnectionQuery = R),
              (this.simpleSwapQuery = g),
              (this.web3ProvidersService = K),
              (this.isWindowActive$ = new h.X(!0)),
              (this.manualRefresh$ = new p.t(1)),
              (this.latestBlockNumber$ =
                this.web3ProvidersService.latestBlockNumber$.pipe(
                  (0, t.h)((B) => !!B),
                  (0, l.x)()
                )),
              (this.userInputChanges$ = (0, n.a)([
                this.simpleSwapQuery.sourceTokenAmount$.pipe(
                  (0, t.h)((B) => !!B)
                ),
                this.simpleSwapQuery.sourceToken$,
                this.simpleSwapQuery.destinationToken$,
              ])),
              (this.forceRefreshTriggers$ = (0, _.T)(
                this.userInputChanges$.pipe((0, a.h)(o.userInputChanges)),
                this.manualRefresh$.pipe((0, a.h)(o.manualRefresh)),
                this.isWindowActive$.pipe(
                  (0, d.T)(1),
                  (0, t.h)((B) => B),
                  (0, a.h)(o.windowActivation)
                )
              )),
              (this.swapFormRefresh$ = (0, _.T)(
                this.forceRefreshTriggers$.pipe((0, v.b)(100))
              ).pipe(
                (0, C.w)((B) =>
                  this.activeConnectionQuery.currentChainBackgroundQuotes$.pipe(
                    (0, U.U)((Q) => ({ refreshTime: Q, source: B }))
                  )
                ),
                (0, C.w)(({ refreshTime: B, source: Q }) =>
                  (0, _.T)((0, u.H)(B, B).pipe((0, a.h)(o.timer)), (0, E.of)(Q))
                ),
                (0, T.b)((B) => {
                  W(B);
                }),
                (0, t.h)(() => this.isWindowActive$.value),
                (0, T.b)(() => {
                  (this.lastUpdateTime = Date.now()),
                    W("******** DO REQUEST ********");
                })
              )),
              (this.lastUpdateTime = 0),
              this.listenWindowFocus();
          }
          listenWindowFocus() {
            const R = (0, m.M)().pipe(
              (0, T.b)((g) => {
                this.isWindowActive$.next(g);
              })
            );
            (0, r.O)(R, "listenWindowFocus$ simple");
          }
        }
        return (
          (O.ɵfac = function (R) {
            return new (R || O)(
              S.ɵɵinject(f.r),
              S.ɵɵinject(i.G),
              S.ɵɵinject(P.v)
            );
          }),
          (O.ɵprov = S.ɵɵdefineInjectable({ token: O, factory: O.ɵfac })),
          O
        );
      })();
    },
    84736: (x, D, e) => {
      e.d(D, { y: () => P });
      var r = e(84756),
        m = e(45461),
        h = e(32005),
        p = e(29737),
        n = e(53886),
        _ = e(3012),
        u = e(76327),
        E = e(35878),
        t = e(17114),
        l = e(64736),
        a = e(51109),
        d = e(93130),
        v = e(36565),
        C = e(18742),
        U = e(60300),
        T = e(36477),
        S = e(24124),
        f = e(7405),
        i = e(83140);
      let P = (() => {
        class s {
          constructor(M, w, y, W, A, O, L) {
            (this.walletConnectionQuery = M),
              (this.gasPriceQuery = w),
              (this.simpleSwapQuery = y),
              (this.pathfinderQuery = W),
              (this.tokenBalanceQuery = A),
              (this.activeConnectionQuery = O),
              (this.simpleSwapButtonStateService = L),
              (this.pathfinderResponse$ =
                this.pathfinderQuery.pathfinderResponse$),
              (this.routes$ = this.pathfinderQuery.currentPathfinderRoutes$),
              (this.sourceTokenBalance$ =
                this.simpleSwapQuery.sourceToken$.pipe(
                  (0, u.w)((R) => this.getTokenViewBalance$(R)),
                  (0, E.x)()
                )),
              (this.destinationTokenBalance$ =
                this.simpleSwapQuery.destinationToken$.pipe(
                  (0, u.w)((R) => this.getTokenViewBalance$(R)),
                  (0, E.x)()
                )),
              (this.connectedWalletAddress$ =
                this.walletConnectionQuery.connectedWalletAddress$),
              (this.availableSourceTokenBalance$ =
                this.connectedWalletAddress$.pipe(
                  (0, u.w)(() =>
                    (0, n.a)([
                      this.simpleSwapQuery.sourceToken$,
                      this.simpleSwapQuery.sourceTokenAmount$,
                    ])
                  ),
                  (0, u.w)(([R]) =>
                    (0, n.a)([
                      (0, _.of)(R),
                      this.tokenBalanceQuery.getBalance$(R),
                      this.gasPriceQuery.currentGasPriceOnce$.pipe(
                        (0, t.K)(
                          (g) => (
                            i.error(
                              "Unknown gas price for availableSourceTokenBalance$",
                              g
                            ),
                            (0, _.of)(null)
                          )
                        )
                      ),
                    ])
                  ),
                  (0, E.x)(p.fS0),
                  (0, l.U)(([R, g, K]) =>
                    (0, m.M)(R.address) && K
                      ? (0, h.D)(
                          g,
                          K,
                          this.activeConnectionQuery.currentChainId
                        )
                      : g
                  )
                )),
              (this.swapIsLocked$ =
                this.simpleSwapButtonStateService.swapButtonState$.pipe(
                  (0, l.U)((R) =>
                    [
                      r.N.notApprovedSourceTokenWithoutPermit,
                      r.N.notApprovedSourceTokenWithPermit,
                    ].includes(R)
                  )
                ));
          }
          get swapTokensPair() {
            const { sourceToken: M, destinationToken: w } =
              this.simpleSwapQuery;
            return { sourceToken: M, destinationToken: w };
          }
          getTokenViewBalance$(M) {
            return this.connectedWalletAddress$.pipe(
              (0, u.w)((w) =>
                w ? this.tokenBalanceQuery.getViewBalance$(M) : (0, _.of)(null)
              )
            );
          }
        }
        return (
          (s.ɵfac = function (M) {
            return new (M || s)(
              a.ɵɵinject(d.r),
              a.ɵɵinject(v.j),
              a.ɵɵinject(C.G),
              a.ɵɵinject(U.o),
              a.ɵɵinject(T.n4),
              a.ɵɵinject(S.r),
              a.ɵɵinject(f.w)
            );
          }),
          (s.ɵprov = a.ɵɵdefineInjectable({ token: s, factory: s.ɵfac })),
          s
        );
      })();
    },
    99580: (x, D, e) => {
      e.d(D, { q: () => f });
      var r = e(5327),
        m = e(30137),
        h = e(90813),
        p = e(95021),
        n = e(3349),
        _ = e(53886),
        u = e(68751),
        E = e(77724),
        t = e(25221),
        l = e(51109),
        a = e(98621),
        d = e(18742),
        v = e(24124),
        C = e(98396),
        U = e(60300),
        T = e(1596);
      function S(i) {
        return -1 !== i.indexOf("e-") ? parseFloat(i).toFixed(20) : i;
      }
      let f = (() => {
        class i {
          constructor(s, o, M, w, y, W) {
            (this.simpleSwapStore = s),
              (this.simpleSwapQuery = o),
              (this.activeConnectionQuery = M),
              (this.swapConfirmTxService = w),
              (this.pathfinderQuery = y),
              (this.featureToggleService = W),
              (this.triggerToResetCurrentPreset$ = (0, _.a)([
                this.activeConnectionQuery.currentChainId$,
                this.simpleSwapQuery.sourceToken$,
                this.simpleSwapQuery.destinationToken$,
              ])),
              this.changeSwapStateOnNetworkChanges(),
              this.persistDestinationTokenAmount();
          }
          setTokensPair(s) {
            this.simpleSwapStore.update(s);
          }
          setNavigationState(s) {
            this.simpleSwapStore.update(s);
          }
          setSourceTokenAmount(s) {
            -1 !== s.indexOf("e-") && (s = parseFloat(s).toFixed(20)),
              this.simpleSwapStore.update({
                sourceTokenAmount: s,
                isSetMax: !1,
              });
          }
          setMaxSourceTokenAmount(s) {
            this.simpleSwapStore.update({ sourceTokenAmount: s, isSetMax: !0 });
          }
          resetMax() {
            this.simpleSwapStore.update({ isSetMax: !1 });
          }
          setMax() {
            this.simpleSwapStore.update({ isSetMax: !0 });
          }
          setDestinationTokenAmount(s) {
            this.simpleSwapStore.update({ destinationTokenAmount: S(s) });
          }
          setMaxReturnResultPreset() {
            this.simpleSwapStore.update({ currentPreset: "maxReturnResult" });
          }
          selectQuotePreset(s) {
            this.simpleSwapStore.update({ currentPreset: s });
          }
          getDefaultTokensPairByChainId(s) {
            return (0, n.Dk)(s, !0);
          }
          applyPathfinderResponse(s) {
            const M = (0, m.kg)(
              s[this.simpleSwapQuery.currentPreset].toTokenAmount || "0",
              this.simpleSwapQuery.destinationToken.decimals
            );
            this.setDestinationTokenAmount(M);
          }
          persistDestinationTokenAmount() {
            const s = (0, _.a)([
              this.simpleSwapQuery.currentPreset$,
              this.pathfinderQuery.pathfinderResponse$.pipe((0, p.BX)()),
            ]).pipe(
              (0, u.h)(() => !this.swapConfirmTxService.confirmSwapInProgress),
              (0, E.b)(([, o]) => {
                this.applyPathfinderResponse(o);
              })
            );
            (0, h.O)(s, "persistDestinationTokenAmount");
          }
          changeSwapStateOnNetworkChanges() {
            const s = this.activeConnectionQuery.currentChainId$.pipe(
              (0, t.T)(1),
              (0, E.b)((o) => {
                const { sourceTokenAmount: M } = r.Ep[o];
                this.setSourceTokenAmount(M),
                  this.setTokensPair(this.getDefaultTokensPairByChainId(o));
              })
            );
            (0, h.O)(s, "changeSwapStateOnNetworkChanges");
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)(
              l.ɵɵinject(a.jJ),
              l.ɵɵinject(d.G),
              l.ɵɵinject(v.r),
              l.ɵɵinject(C.C),
              l.ɵɵinject(U.o),
              l.ɵɵinject(T.BV)
            );
          }),
          (i.ɵprov = l.ɵɵdefineInjectable({ token: i, factory: i.ɵfac })),
          i
        );
      })();
    },
    44200: (x, D, e) => {
      e.d(D, { Q: () => E });
      var r = e(25221),
        m = e(77724),
        h = e(90813),
        p = e(42719),
        n = e(51109),
        _ = e(24124),
        u = e(63764);
      let E = (() => {
        class t {
          constructor(a, d) {
            (this.activeConnectionQuery = a),
              (this.pathfinderStore = d),
              this.resetOnNetworkChanges();
          }
          reset() {
            this.pathfinderStore.update({
              pathfinderResponse: null,
              pathfinderParams: null,
            });
          }
          setPathfinderQuotes(a) {
            this.pathfinderStore.update({ pathfinderResponse: a });
          }
          setPathfinderParams(a) {
            this.pathfinderStore.update({ pathfinderParams: a });
          }
          resetOnNetworkChanges() {
            const a = this.activeConnectionQuery.currentChainId$.pipe(
              (0, r.T)(1),
              (0, m.b)(() => {
                this.reset();
              })
            );
            (0, h.O)(a, "pathfinder resetOnNetworkChanges");
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(n.ɵɵinject(_.r), n.ɵɵinject(u.O));
          }),
          (t.ɵprov = n.ɵɵdefineInjectable({
            token: t,
            factory: t.ɵfac,
            providedIn: p.a,
          })),
          t
        );
      })();
    },
    72800: (x, D, e) => {
      e.d(D, { j: () => v });
      var r = e(78336),
        m = e(73836),
        h = e(29055),
        p = e(47831),
        n = e(3012),
        _ = e(71909),
        u = e(18084),
        E = e(17114),
        t = e(74027),
        l = e(51109),
        a = e(24124),
        d = e(69064);
      let v = (() => {
        class C {
          constructor(T, S, f) {
            (this.httpClient = T),
              (this.activeConnectionQuery = S),
              (this.swapSettingsQuery = f);
          }
          requestPathfinder(T) {
            const S = this.getApiUrl();
            return this.httpClient
              .get(S, {
                params: new r.LE({
                  fromObject: Object.assign(Object.assign({}, T), {
                    maxReturnProtocols: T.maxReturnProtocols.join(","),
                    time: Date.now(),
                  }),
                }),
              })
              .pipe(
                (0, u.V)(5e3),
                (0, E.K)((f) => {
                  var i, P;
                  return -1 !==
                    (null ===
                      (P =
                        null === (i = null == f ? void 0 : f.error) ||
                        void 0 === i
                          ? void 0
                          : i.indexOf) || void 0 === P
                      ? void 0
                      : P.call(i, "markets are empty"))
                    ? (0, n.of)(h.w)
                    : (0, _._)(() => f);
                }),
                (0, t.a)((0, p.d)(3, 200))
              );
          }
          getApiUrl() {
            const { currentChainId: T } = this.activeConnectionQuery;
            return (
              m.N.pathfinderEndpoint +
              `/${
                this.swapSettingsQuery.enableSwapRouterV4 ? "v1.2" : "v1.1"
              }/chain/${T}/router/${
                this.swapSettingsQuery.enableSwapRouterV4 ? "v4" : "v3"
              }/quotes-by-presets`
            );
          }
        }
        return (
          (C.ɵfac = function (T) {
            return new (T || C)(
              l.ɵɵinject(r.eN),
              l.ɵɵinject(a.r),
              l.ɵɵinject(d.G)
            );
          }),
          (C.ɵprov = l.ɵɵdefineInjectable({ token: C, factory: C.ɵfac })),
          C
        );
      })();
    },
    95249: (x, D, e) => {
      e.d(D, { u: () => w });
      var r = e(90813),
        m = e(29055),
        h = e(64057),
        p = e(29737),
        n = e(3012),
        _ = e(82188),
        u = e(68751),
        E = e(83358),
        t = e(17114),
        l = e(76327),
        a = e(64736),
        d = e(77724),
        v = e(51109),
        C = e(24124),
        U = e(18742),
        T = e(36565),
        S = e(44200),
        f = e(3648),
        i = e(72800),
        P = e(97202),
        s = e(42716),
        o = e(93130),
        M = e(83140);
      let w = (() => {
        class y {
          constructor(A, O, L, R, g, K, B, Q, V) {
            (this.activeConnectionQuery = A),
              (this.simpleSwapQuery = O),
              (this.gasPriceQuery = L),
              (this.pathfinderService = R),
              (this.swapFormRefreshService = g),
              (this.pathfinderApiService = K),
              (this.liquiditySourcesQuery = B),
              (this.swapFeesService = Q),
              (this.walletConnectionQuery = V);
          }
          init(A) {
            this.listenPathfinderUpdateTriggers(A);
          }
          requestPathfinder() {
            const {
              sourceTokenAmount: A,
              sourceToken: O,
              destinationToken: L,
            } = this.simpleSwapQuery.getValue();
            if ("0" === A || !A) return (0, n.of)(null);
            const { amountDeductedFee: R } =
              this.swapFeesService.calcFeeForAmount(A, O.decimals);
            return this.gasPriceQuery.currentGasPrice$.pipe(
              (0, u.h)((g) => 0 !== g),
              (0, E.q)(1),
              (0, t.K)(() => (0, n.of)(0)),
              (0, l.w)((g) =>
                this.liquiditySourcesQuery.selectActiveId().pipe(
                  (0, u.h)((K) => !!K && K.length > 0),
                  (0, a.U)(() => g),
                  (0, E.q)(1)
                )
              ),
              (0, l.w)((g) => {
                var K;
                return this.pathfinderApiService.requestPathfinder({
                  chainId: this.activeConnectionQuery.currentChainId,
                  fromTokenAddress: O.address,
                  toTokenAddress: L.address,
                  amount: R.toString(),
                  gasPrice: g,
                  walletAddress:
                    null !== (K = this.walletConnectionQuery.walletAddress) &&
                    void 0 !== K
                      ? K
                      : "",
                  maxReturnProtocols:
                    this.liquiditySourcesQuery.getActiveId() || [],
                });
              }),
              (0, t.K)(
                (g) => (M.error("Pathfinder error: ", g), (0, n.of)(m.w))
              ),
              (0, a.U)((g) =>
                Object.assign(Object.assign({}, g), { lowestGasResult: m.r })
              ),
              (0, d.b)((g) => {
                (0, h.W)("PATHFINDER RESPONSE: ", g),
                  g &&
                    (this.pathfinderService.setPathfinderParams(
                      g.pathfinderParams
                    ),
                    this.pathfinderService.setPathfinderQuotes(
                      (0, p.eiS)(
                        [
                          "maxReturnResult",
                          "otcResult",
                          "uniResult",
                          "lowestGasResult",
                        ],
                        g
                      )
                    ));
              })
            );
          }
          listenPathfinderUpdateTriggers(A) {
            const O = this.swapFormRefreshService.swapFormRefresh$.pipe(
              (0, l.w)(() => this.requestPathfinder()),
              (0, t.K)(() => _.E)
            );
            (0, r.O)(O, "listenPathfinderUpdateTriggers", A);
          }
        }
        return (
          (y.ɵfac = function (A) {
            return new (A || y)(
              v.ɵɵinject(C.r),
              v.ɵɵinject(U.G),
              v.ɵɵinject(T.j),
              v.ɵɵinject(S.Q),
              v.ɵɵinject(f.N),
              v.ɵɵinject(i.j),
              v.ɵɵinject(P.F),
              v.ɵɵinject(s.$),
              v.ɵɵinject(o.r)
            );
          }),
          (y.ɵprov = v.ɵɵdefineInjectable({ token: y, factory: y.ɵfac })),
          y
        );
      })();
    },
    89170: (x, D, e) => {
      e.d(D, { E: () => t });
      var r = e(5327),
        m = e(18479),
        h = e(51109),
        p = e(24124),
        n = e(18742),
        _ = e(54510),
        u = e(99580),
        E = e(3228);
      let t = (() => {
        class l {
          constructor(d, v, C, U, T) {
            (this.activeConnectionQuery = d),
              (this.simpleSwapQuery = v),
              (this.router = C),
              (this.simpleSwapFormService = U),
              (this.routerHelperService = T);
          }
          navigateToDefaultSwapUrl() {
            this.router.navigateByUrl(this.getDefaultSwapUrl());
          }
          navigateToCurrentSwapUrl() {
            this.router.navigateByUrl(this.getCurrentSwapUrl());
          }
          getCurrentSwapUrl() {
            return this.router.createUrlTree([
              this.activeConnectionQuery.currentChainId,
              "swap",
            ]);
          }
          getDefaultSwapUrl() {
            const { currentChainId: d } = this.activeConnectionQuery,
              { sourceToken: v, destinationToken: C } =
                this.simpleSwapFormService.getDefaultTokensPairByChainId(d);
            return this.router.createUrlTree([
              this.getCurrentOrDefaultChain(),
              "swap",
              v.symbol,
              C.symbol,
            ]);
          }
          getSwapUrl(d, v, C = []) {
            return this.router.createUrlTree([
              this.getCurrentOrDefaultChain(),
              "swap",
              d,
              v,
              ...C,
            ]);
          }
          getSwapFromStateUrl(d = []) {
            return this.router.createUrlTree([
              this.activeConnectionQuery.currentChainId,
              "swap",
              this.simpleSwapQuery.sourceToken.symbol,
              this.simpleSwapQuery.destinationToken.symbol,
              ...d,
            ]);
          }
          getCurrentOrDefaultChain() {
            const { currentChainId: d } = this.activeConnectionQuery;
            return this.routerHelperService.isValidChainId(d)
              ? d
              : r.$L.etherumMainnet;
          }
        }
        return (
          (l.ɵfac = function (d) {
            return new (d || l)(
              h.ɵɵinject(p.r),
              h.ɵɵinject(n.G),
              h.ɵɵinject(_.F0),
              h.ɵɵinject(u.q),
              h.ɵɵinject(E.b)
            );
          }),
          (l.ɵprov = h.ɵɵdefineInjectable({
            token: l,
            factory: l.ɵfac,
            providedIn: m.o,
          })),
          l
        );
      })();
    },
    16380: (x, D, e) => {
      e.d(D, { O: () => S });
      var r = e(91488),
        m = e(53886),
        h = e(64736),
        p = e(76327),
        n = e(56284),
        _ = e(51109),
        u = e(24124),
        E = e(36565),
        t = e(18742),
        l = e(69064),
        a = e(60300),
        d = e(20803),
        v = e(44432),
        C = e(22406),
        U = e(42716),
        T = e(34377);
      let S = (() => {
        class f {
          constructor(P, s, o, M, w, y, W, A, O, L) {
            (this.activeConnectionQuery = P),
              (this.gasPriceQuery = s),
              (this.simpleSwapQuery = o),
              (this.swapSettingsQuery = M),
              (this.pathfinderQuery = w),
              (this.tokenPricesQuery = y),
              (this.swapPriceImpactService = W),
              (this.swapContextService = A),
              (this.swapFeesService = O),
              (this.swapSlippageService = L),
              (this.snapshotChangesTrigger$ = (0, m.a)([
                this.swapSettingsQuery.selectAllForCurrentChainId(),
                this.simpleSwapQuery.swapTokensData$,
              ])),
              (this.currentSnapshot$ = this.snapshotChangesTrigger$.pipe(
                (0, h.U)(() => this.buildSnapshot())
              )),
              (this.swapPriceImpact$ =
                this.simpleSwapQuery.swapTokensData$.pipe(
                  (0, p.w)((R) =>
                    this.swapPriceImpactService.getSwapPriceImpact$(R)
                  )
                ));
          }
          buildSnapshot() {
            const { gasPrice: P } =
                this.swapSettingsQuery.getValueForCurrentChainId(),
              {
                instantGwei: s,
                fastGwei: o,
                standardGwei: M,
                advanced: w,
              } = this.gasPriceQuery.getValue(),
              {
                sourceToken: y,
                sourceTokenAmount: W,
                destinationToken: A,
                destinationTokenAmount: O,
              } = this.simpleSwapQuery.getValue(),
              L = {
                sourceToken: y,
                sourceTokenAmount: W,
                destinationToken: A,
                destinationTokenAmount: O,
              },
              R = (0, r.L_)(
                A,
                O,
                this.swapSlippageService.getSlippageToleranceLastValue()
              ),
              g = this.swapPriceImpactService.getSwapPriceImpact(L),
              K = (0, r.oJ)(O, R),
              B = this.swapFeesService.getPartnersFees(W, y);
            return {
              swapData: L,
              sourceTokenPrice: this.tokenPricesQuery.getEntity(y.address),
              destinationTokenPrice: this.tokenPricesQuery.getEntity(A.address),
              minReceivedTokenAmount: R,
              swapPriceImpact: g,
              isHighPriceImpact:
                this.swapPriceImpactService.isHighPriceImpact(g),
              isExtremePriceImpact:
                this.swapPriceImpactService.isExtremePriceImpact(g),
              slippageTolerance: K,
              isHighSlippageTolerance: (0, r.ed)(K),
              showSwapType: this.swapContextService.showSwapType,
              showTxCost: this.swapContextService.showTxCost,
              isLedgerLive: n.j.getValue(),
              nativeTokenPrice: this.tokenPricesQuery.getEntity(
                this.activeConnectionQuery.currentNativeToken.address
              ),
              gasPriceAdvanced: w,
              gasParams: {
                gasPreset: P.customValue ? "custom" : P.type,
                customGasFeesGwei: +P.customValue,
                instantGwei: s,
                fastGwei: o,
                standardGwei: M,
              },
              partnerFees: B || void 0,
            };
          }
        }
        return (
          (f.ɵfac = function (P) {
            return new (P || f)(
              _.ɵɵinject(u.r),
              _.ɵɵinject(E.j),
              _.ɵɵinject(t.G),
              _.ɵɵinject(l.G),
              _.ɵɵinject(a.o),
              _.ɵɵinject(d.u),
              _.ɵɵinject(v.f),
              _.ɵɵinject(C.Z),
              _.ɵɵinject(U.$),
              _.ɵɵinject(T.j)
            );
          }),
          (f.ɵprov = _.ɵɵdefineInjectable({ token: f, factory: f.ɵfac })),
          f
        );
      })();
    },
    18479: (x, D, e) => {
      e.d(D, { o: () => m });
      var r = e(51109);
      let m = (() => {
        class h {}
        return (
          (h.ɵfac = function (n) {
            return new (n || h)();
          }),
          (h.ɵmod = r.ɵɵdefineNgModule({ type: h })),
          (h.ɵinj = r.ɵɵdefineInjector({})),
          h
        );
      })();
    },
    44578: (x, D, e) => {
      e.d(D, { P: () => a });
      var r = e(38143),
        m = e(12725),
        h = e(15881),
        p = e(65687),
        n = e(16785),
        _ = e(92356),
        u = e(10047),
        E = e(69194),
        t = e(44849),
        l = e(51109);
      let a = (() => {
        class d {}
        return (
          (d.ɵfac = function (C) {
            return new (C || d)();
          }),
          (d.ɵmod = l.ɵɵdefineNgModule({ type: d })),
          (d.ɵinj = l.ɵɵdefineInjector({
            imports: [r.ez, u.y, t.K, m.y4, h.T, E.j, n.y, p.m, _.w],
          })),
          d
        );
      })();
    },
  },
]);
