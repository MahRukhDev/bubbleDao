"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [5082],
  {
    33246: (gt, ie, o) => {
      o.d(ie, { f: () => _e });
      var fe = o(90813),
        m = o(33646),
        ge = o(94748),
        K = o(71909),
        _ = o(76327),
        V = o(17114),
        H = o(77724),
        ae = o(64736),
        z = o(83358),
        se = o(67701),
        j = o(57817),
        Q = o(55468),
        we = o(16289),
        xe = o(52611),
        e = o(51109),
        re = o(41912),
        Se = o(42462),
        Ce = o(93130),
        F = o(68534),
        G = o(95707),
        ke = o(24124),
        Te = o(60358),
        J = o(37847),
        ye = o(98066),
        X = o(56747),
        Pe = o(69064),
        ce = o(36477),
        b = o(1146),
        M = o(68043),
        pe = o(83140),
        k = (() => {
          return (
            ((f = k || (k = {}))[(f.tokenSwap = 0)] = "tokenSwap"),
            (f[(f.limitOrder = 1)] = "limitOrder"),
            k
          );
          var f;
        })();
      let _e = (() => {
        class f {
          constructor(u, v, h, w, l, p, T, y, P, Z, E, be, le, Ee) {
            (this.contractAddressQuery = u),
              (this.transactionsCountService = v),
              (this.walletConnectionQuery = h),
              (this.web3ProvidersService = w),
              (this.tokenAllowanceService = l),
              (this.activeConnectionQuery = p),
              (this.transactionHistoryService = T),
              (this.approveService = y),
              (this.txStatusDialogService = P),
              (this.acceptTermsService = Z),
              (this.swapSettingsQuery = E),
              (this.tokenBalanceQuery = be),
              (this.createPendingTxService = le),
              (this.orderApproveCheckerService = Ee);
          }
          approveInfinitySwapTransaction$(u) {
            return this.acceptTermsService
              .checkTermsAccepting()
              .pipe((0, _.w)(() => this.approveTxForMaxAmount(k.tokenSwap, u)));
          }
          approveLimitOrderTransaction$(u) {
            return this.acceptTermsService.checkTermsAccepting().pipe(
              (0, _.w)(() =>
                this.orderApproveCheckerService.checkUnapprovedBadPriceOrders(u)
              ),
              (0, _.w)(() => this.approveTxForMaxAmount(k.limitOrder, u))
            );
          }
          contractApproveTransaction(
            {
              txType: u,
              txSubType: v,
              contractAddress: h,
              spenderAddress: w,
              amount: l,
              meta: p,
            },
            T = !0
          ) {
            let y = null;
            return (
              T &&
                (y = this.txStatusDialogService.open({ status: j._.pending })),
              (0, m.D)({
                hash: this.approveService.approve(h, w, l),
                nonce:
                  this.transactionsCountService.getCurrentWalletTransactionsCount(),
              }).pipe(
                (0, V.K)(
                  (P) => (
                    pe.error(P),
                    T ? (null == y || y.close(), ge.C) : (0, K._)(() => P)
                  )
                ),
                (0, H.b)(({ hash: P, nonce: Z }) => {
                  const E = this.createPendingTxService.getPendingTxFactory({
                    type: u,
                    subType: v,
                    amount: l.toString(),
                    meta: p,
                  })(P, Z);
                  this.transactionHistoryService.addHistoryItem(E),
                    T &&
                      this.txStatusDialogService.changeTo({
                        status: j._.success,
                        link: this.txStatusDialogService.txStatusDialogLink(P),
                      });
                }),
                (0, ae.U)(({ hash: P }) => P),
                (0, z.q)(1)
              )
            );
          }
          approveTxForMaxAmount(u, v) {
            return this.tokenApproveTransaction(u, v, xe.zL).pipe(
              (0, V.K)((h) =>
                h instanceof we.fl
                  ? this.tokenBalanceQuery
                      .getBalanceOnce$(v)
                      .pipe(
                        (0, _.w)((w) => this.tokenApproveTransaction(u, v, w))
                      )
                  : (0, K._)(() => h)
              )
            );
          }
          tokenApproveTransaction(u, v, h) {
            const w = this.contractAddressQuery.getContractAddress(
                (function Oe(f, Y = !1) {
                  switch (f) {
                    case k.limitOrder:
                      return Q.a4.limitOrder;
                    case k.tokenSwap:
                      return Y ? Q.a4.tokenSwapV4 : Q.a4.tokenSwapV3;
                  }
                  throw new Error("unknown approve contract type");
                })(u, this.swapSettingsQuery.enableSwapRouterV4)
              ),
              l = this.txStatusDialogService.open({ status: j._.pending });
            return (0, m.D)({
              hash: this.approveService.approve(v.address, w, h),
              nonce:
                this.transactionsCountService.getCurrentWalletTransactionsCount(),
            }).pipe(
              (0, V.K)((p) => (pe.error(p), l.close(), (0, K._)(() => p))),
              (0, H.b)(({ hash: p, nonce: T }) => {
                this.walletConnectionQuery.isCurrentWalletGnosis ||
                  this.addTxToHistory({
                    approveType: u,
                    amount: h,
                    hash: p,
                    nonce: T,
                    sourceToken: v,
                    spenderAddress: w,
                  }),
                  this.txStatusDialogService.changeTo({
                    status: j._.approveSuccess,
                    metaInfo: { token: v.symbol },
                    link: this.txStatusDialogService.txStatusDialogLink(p),
                  }),
                  this.watchForPriorityAllowance(v, w, h, p);
              }),
              (0, ae.U)(({ hash: p }) => p),
              (0, z.q)(1)
            );
          }
          addTxToHistory({
            approveType: u,
            amount: v,
            hash: h,
            nonce: w,
            sourceToken: l,
            spenderAddress: p,
          }) {
            const T = (function Me(f) {
                switch (f) {
                  case k.limitOrder:
                    return se.E.approveLimitOrder;
                  case k.tokenSwap:
                    return se.E.approve;
                }
                throw new Error("unknown approve history type");
              })(u),
              y = this.createPendingTxService.getPendingTxFactory({
                type: "authorize",
                subType: T,
                amount: v.toString(),
                meta: {
                  tradeApproveToken: l,
                  tradeApproveContract: p,
                  asset: l,
                },
              })(h, w);
            this.transactionHistoryService.addHistoryItem(y);
          }
          watchForPriorityAllowance(u, v, h, w) {
            const l = this.web3ProvidersService.defaultEtherProviderOnce().pipe(
              (0, _.w)((p) => p.waitForTransaction(w)),
              (0, H.b)((p) => {
                1 === (null == p ? void 0 : p.status) &&
                  this.tokenAllowanceService.setPriorityAllowance(
                    u.address,
                    v,
                    h.toString()
                  );
              }),
              (0, z.q)(1)
            );
            (0, fe.O)(l, "watchForPriorityAllowance$");
          }
        }
        return (
          (f.ɵfac = function (u) {
            return new (u || f)(
              e.ɵɵinject(re.O),
              e.ɵɵinject(Se.K),
              e.ɵɵinject(Ce.r),
              e.ɵɵinject(F.v),
              e.ɵɵinject(G.a),
              e.ɵɵinject(ke.r),
              e.ɵɵinject(Te.d),
              e.ɵɵinject(J.Z),
              e.ɵɵinject(ye.i),
              e.ɵɵinject(X.N),
              e.ɵɵinject(Pe.G),
              e.ɵɵinject(ce.n4),
              e.ɵɵinject(b.B),
              e.ɵɵinject(M.I)
            );
          }),
          (f.ɵprov = e.ɵɵdefineInjectable({
            token: f,
            factory: f.ɵfac,
            providedIn: "root",
          })),
          f
        );
      })();
    },
    4237: (gt, ie, o) => {
      o.r(ie), o.d(ie, { SimpleSwapModule: () => ao });
      var fe = o(78336),
        m = o(54510),
        ge = o(65028),
        K = o(78090),
        _ = o(63223),
        V = o(92356),
        H = o(50349),
        ae = o(21784),
        z = o(41140),
        se = o(59312),
        j = o(33760),
        Q = o(95580),
        we = o(82253),
        xe = o(88450),
        e = o(51109);
      let re = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [m.Bz] })),
            n
          );
        })(),
        Se = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [m.Bz, re, xe.I] })),
            n
          );
        })();
      var Ce = o(30904),
        F = o(31777),
        G = o(77065),
        ke = o(4461),
        Te = o(60303),
        J = o(16944),
        ye = o(46160),
        X = o(65687),
        Pe = o(76044),
        ce = o(7405),
        b = o(99580),
        M = o(74578),
        pe = o(87771),
        k = o(8124),
        Me = o(90799),
        Oe = o(21122),
        _e = o(2609),
        f = o(11212),
        Y = o(42719),
        u = o(68598),
        v = o(9032),
        h = o(60803),
        w = o(92157),
        l = o(38143),
        p = o(12725),
        T = o(89990),
        y = o(15881),
        P = o(28367),
        Z = o(16785),
        E = o(10047),
        be = o(69194),
        le = o(44849);
      let Ee = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [l.ez, E.y, le.K, y.T, p.y4],
          })),
          n
        );
      })();
      var wt = o(44578);
      let xt = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [
              l.ez,
              wt.P,
              y.T,
              Q.c,
              h.p,
              p.y4,
              E.y,
              P.E,
              le.K,
              Ee,
              M.WD,
              be.j,
              Z.y,
              X.m,
              J.z,
              T.j,
            ],
          })),
          n
        );
      })();
      var St = o(10546);
      let Ct = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({ imports: [l.ez] })),
            n
          );
        })(),
        $e = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
            (n.ɵinj = e.ɵɵdefineInjector({
              imports: [l.ez, E.y, St.f, h.p, X.m, Ct, p.y4, M.WD, J.z],
            })),
            n
          );
        })();
      var kt = o(70681),
        Tt = o(41852),
        yt = o(54497);
      let Pt = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [l.ez, $e, yt.X, m.Bz, kt.A, M.WD, p.y4, Tt.a],
          })),
          n
        );
      })();
      var Ue = o(84736),
        Le = o(3648);
      let Mt = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            providers: [Ue.y, Le.N, b.q, ce.w],
            imports: [
              X.m,
              m.Bz,
              Pt,
              $e,
              w.U,
              _e.J,
              Oe.o,
              F.ReactiveFormsModule,
              pe.U,
              u.u,
              Y.a,
              M.WD,
              f.o,
              xt,
              h.p,
              v.j,
              Me.m,
              G.Is,
              Te.j,
              ke.M,
              k.s,
              ye.z,
              J.z,
              Pe.h,
            ],
          })),
          n
        );
      })();
      var Ot = o(72800),
        We = o(95249),
        de = o(18742),
        ue = o(89170);
      let Ne = (() => {
        class n {
          constructor(t, i) {
            (this.simpleSwapQuery = t), (this.simpleRoutingService = i);
          }
          navigateToDefaultSwapUrlIfNeeded(t) {
            const { sourceToken: i, destinationToken: s } =
              this.simpleSwapQuery;
            (i.address === t.address || s.address === t.address) &&
              this.simpleRoutingService.navigateToDefaultSwapUrl();
          }
          getImportLink(t) {
            const { destinationToken: i } = this.simpleSwapQuery;
            return this.simpleRoutingService.getSwapUrl(t.address, i.symbol, [
              "import-token",
            ]);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵinject(de.G), e.ɵɵinject(ue.E));
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var $ = o(79296),
        Ke = o(39700),
        U = o(24124),
        Ve = o(36565),
        He = o(36063),
        _t = o(70167),
        bt = o(44803),
        Et = o(74941),
        Ie = o(37867);
      let ze = (() => {
        class n {
          constructor(t, i, s, c, r, d, g, S, x, C) {
            (this.activeConnectionQuery = t),
              (this.gasPriceQuery = i),
              (this.swapFormPathfinderService = s),
              (this.gasRefundService = c),
              (this.webAnalyticsService = r),
              (this.uiStore = d),
              (this.uiService = g),
              (this.currentSpenderService = S),
              (this.swapFormService = x),
              (this.otcModeService = C),
              (this.subscription = new $.w0());
          }
          init() {
            this.currentSpenderService.setCurrentSpenderType(Ke.F.swap),
              this.uiStore.update({ swapLayout: "simple" }),
              this.swapFormPathfinderService.init(this.subscription),
              this.webAnalyticsService.pageView("/swap", "Exchange / Market"),
              this.resetPresetToMaxReturn();
          }
          reset() {
            this.subscription.unsubscribe(), (this.subscription = new $.w0());
          }
          resetPresetToMaxReturn() {
            this.swapFormService.selectQuotePreset("maxReturnResult"),
              this.otcModeService.resetOTCModeWhenItSet();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵinject(U.r),
              e.ɵɵinject(Ve.j),
              e.ɵɵinject(We.u),
              e.ɵɵinject(He.U),
              e.ɵɵinject(_t.y),
              e.ɵɵinject(bt.y),
              e.ɵɵinject(Et.F),
              e.ɵɵinject(Ke.q),
              e.ɵɵinject(b.q),
              e.ɵɵinject(Ie.N)
            );
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
          n
        );
      })();
      var Ge = o(16380),
        L = o(18479),
        Je = o(3228),
        It = o(1596),
        Dt = o(2819),
        De = o(54377);
      let At = (() => {
        class n {
          constructor(t, i, s, c, r) {
            (this.router = t),
              (this.routerHelperService = i),
              (this.featureToggleService = s),
              (this.globalSettingsService = c),
              (this.tradeNavigationStateService = r);
          }
          canActivate() {
            const { sourceToken: t, destinationToken: i } =
              this.tradeNavigationStateService.tradeNavigationState$.value ||
              {};
            return (
              this.globalSettingsService.updateExchangeLayoutSettings({
                showCharts: !1,
                showRouting: !1,
                showTables: !1,
              }),
              this.router.createUrlTree(
                t && i
                  ? [
                      this.routerHelperService.buildUnifiedSwapUrl(
                        t.symbol,
                        i.symbol
                      ),
                    ]
                  : [this.routerHelperService.buildDefaultUnifiedSwapUrl()]
              )
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵinject(m.F0),
              e.ɵɵinject(Je.b),
              e.ɵɵinject(It.BV),
              e.ɵɵinject(Dt.o),
              e.ɵɵinject(De.W)
            );
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({
            token: n,
            factory: n.ɵfac,
            providedIn: L.o,
          })),
          n
        );
      })();
      var Rt = o(13748),
        Bt = o(59226),
        Xe = o(14806),
        jt = o(6904),
        Qt = o(29611);
      let Ft = (() => {
        class n {
          constructor(t) {
            (this.simpleSwapInitService = t), (this.id = "uni");
          }
          ngOnInit() {
            this.simpleSwapInitService.init();
          }
          ngOnDestroy() {
            this.simpleSwapInitService.reset();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(ze));
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["simple-swap-layout"]],
            hostVars: 1,
            hostBindings: function (t, i) {
              2 & t && e.ɵɵattribute("id", i.id);
            },
            decls: 2,
            vars: 0,
            consts: [[1, "current-block-number"]],
            template: function (t, i) {
              1 & t && e.ɵɵelement(0, "router-outlet")(1, "block-number", 0);
            },
            dependencies: [m.lC, Qt.i4],
            styles: [
              "[_nghost-%COMP%]{display:block;padding-bottom:120px;margin-bottom:60px}@media (max-width: 520px){[_nghost-%COMP%]{padding-bottom:190px}[_nghost-%COMP%]   .embedded-swap[_nghost-%COMP%], .embedded-swap   [_nghost-%COMP%]{padding-bottom:0}}@media (max-width: 418px){[_nghost-%COMP%]{margin:0 -16px}}.current-block-number[_ngcontent-%COMP%]{position:fixed;right:40px;bottom:30px}",
            ],
          })),
          n
        );
      })();
      var $t = o(90710);
      let Ut = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["swap-container"]],
            decls: 1,
            vars: 0,
            template: function (t, i) {
              1 & t && e.ɵɵelement(0, "router-outlet");
            },
            dependencies: [m.lC],
            styles: [
              "[_nghost-%COMP%]{display:block;margin:0 auto;width:418px;min-height:100px;background-color:var(--1inch-bg-02);box-shadow:var(--1inch-shadow-04);border-radius:24px;padding:16px;max-width:100%}",
            ],
          })),
          n
        );
      })();
      var Lt = o(48163),
        Wt = o(82868),
        me = o(90813),
        Nt = o(95021),
        q = o(29737),
        Ye = o(53886),
        Ae = o(3012),
        Kt = o(1753),
        ee = o(76327),
        I = o(64736),
        Re = o(35878),
        Ze = o(21491),
        Be = o(68751),
        W = o(77724),
        Vt = o(83358),
        qe = o(25221),
        et = o(58983),
        tt = o(36477),
        nt = o(20803),
        Ht = o(44432),
        ot = o(44200),
        zt = o(43253),
        Gt = o(76027),
        N = o(30137),
        Jt = o(40475),
        it = o(60300),
        Xt = o(5327),
        Yt = o(80849),
        Zt = o(97093),
        qt = o(67769),
        ve = o(38964),
        en = o(19396),
        at = o(80135);
      function tn(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 6),
          e.ɵɵtext(1, "Primary"),
          e.ɵɵelementEnd());
      }
      let nn = (() => {
        class n {
          constructor() {
            this.isOneInch = !1;
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["quote-preview-skeleton"]],
            inputs: { isOneInch: "isOneInch" },
            decls: 10,
            vars: 3,
            consts: [
              [1, "skeleton"],
              [1, "skeleton-row"],
              [1, "skeleton-box-text"],
              [1, "skeleton-box", "skeleton-box-small"],
              [1, "skeleton-box"],
              ["class", "save-amount", 4, "ngIf"],
              [1, "save-amount"],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2),
                e.ɵɵtext(3, "1inch"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(4, "p", 3)(5, "p", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(6, "div", 1),
                e.ɵɵelement(7, "p", 4)(8, "p", 3),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(9, tn, 2, 0, "div", 5)),
                2 & t &&
                  (e.ɵɵclassProp("is-one-inch", i.isOneInch),
                  e.ɵɵadvance(9),
                  e.ɵɵproperty("ngIf", i.isOneInch));
            },
            dependencies: [l.O5],
            styles: [
              '.skeleton[_ngcontent-%COMP%]{margin:-16px;padding:22px 16px 17px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;height:76px;border-radius:12px;position:relative}.skeleton-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.skeleton-box[_ngcontent-%COMP%]{border-radius:4px;width:35%;height:12px;background:var(--1inch-skeleton-bg-03)}.skeleton-box-small[_ngcontent-%COMP%]{width:25%}.skeleton[_ngcontent-%COMP%]:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translate(-100%);background-image:linear-gradient(270deg,var(--1inch-skeleton-bg-04) 0,var(--1inch-skeleton-bg-05));animation:shimmer 1.5s infinite;content:""}@keyframes shimmer{to{transform:translate(100%)}}.skeleton[_ngcontent-%COMP%]:hover:after{background-image:linear-gradient(270deg,var(--1inch-skeleton-bg-01) 0,var(--1inch-skeleton-bg-02))}.skeleton-box-text[_ngcontent-%COMP%]{display:none}.save-amount[_ngcontent-%COMP%]{display:block;font-size:11px;background:#00897B;color:#fff;padding:4px 10px;border-radius:10px 10px 10px 0;position:absolute;left:-1px;top:-10px;z-index:1}.is-one-inch[_ngcontent-%COMP%]{padding:15px 16px 19px}.is-one-inch[_ngcontent-%COMP%]   .skeleton-row[_ngcontent-%COMP%]:first-of-type   .skeleton-box-text[_ngcontent-%COMP%]{display:flex;font-size:16px;font-weight:500;line-height:26px;color:var(--1inch-text-01)}.is-one-inch[_ngcontent-%COMP%]   .skeleton-row[_ngcontent-%COMP%]:first-of-type   .skeleton-box-small[_ngcontent-%COMP%]{display:none}.is-one-inch[_ngcontent-%COMP%]   .skeleton-row[_ngcontent-%COMP%]:first-of-type   .skeleton-box[_ngcontent-%COMP%]{margin-left:auto}',
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var on = o(733);
      function an(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 19),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "currency"),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              t.saveUsdAmount
                ? e.ɵɵpipeBind1(2, 1, "uni.quotePreview.save") +
                    " " +
                    e.ɵɵpipeBind1(3, 3, t.saveUsdAmount)
                : e.ɵɵpipeBind1(4, 5, "uni.quotePreview.primary"),
              " "
            );
        }
      }
      function sn(n, a) {
        if ((1 & n && e.ɵɵelement(0, "tooltip", 20), 2 & n)) {
          e.ɵɵnextContext(2);
          const t = e.ɵɵreference(5);
          e.ɵɵproperty("tooltip", t);
        }
      }
      function rn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 21)(1, "span", 22),
            e.ɵɵpipe(2, "tokenAmountView"),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "tokenAmountView"),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = a.tuiLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵattribute(
              "title",
              e.ɵɵpipeBind3(
                2,
                2,
                i.pathfinderResponse.toTokenAmount || "0",
                t,
                t
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(4, 6, i.pathfinderResponse.toTokenAmount || "0", t),
              " "
            );
        }
      }
      function cn(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 4),
            e.ɵɵtemplate(1, an, 5, 7, "div", 5),
            e.ɵɵelementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(
              5,
              "button",
              9
            ),
            e.ɵɵlistener("click", function (s) {
              e.ɵɵrestoreView(t);
              const c = e.ɵɵnextContext();
              return e.ɵɵresetView(c.expand(s));
            }),
            e.ɵɵelementStart(6, "span"),
            e.ɵɵelement(7, "span", 10),
            e.ɵɵtemplate(8, sn, 1, 1, "tooltip", 11),
            e.ɵɵelement(9, "span", 12),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(10, rn, 5, 9, "div", 13),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(11, "div", 7)(12, "div", 14)(13, "span", 15),
            e.ɵɵtext(14, "Tx cost"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(15, "usd-token-price", 16),
            e.ɵɵpipe(16, "async"),
            e.ɵɵpipe(17, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(18, "div", 17),
            e.ɵɵelement(19, "usd-swap-price", 18),
            e.ɵɵelementEnd()()()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.isTheBest),
            e.ɵɵadvance(3),
            e.ɵɵclassProp("selectable", t.selectable),
            e.ɵɵadvance(1),
            e.ɵɵproperty("tabIndex", t.selectable ? 0 : -1),
            e.ɵɵattribute("data-id", t.selectable ? "quotes-expander" : null)(
              "id",
              t.selectable ? "quotes-expander" : null
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("textContent", t.marketName || "-- / --"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "Direct swap" === t.marketName),
            e.ɵɵadvance(2),
            e.ɵɵproperty("tuiLet", t.swapTokensData.destinationToken.decimals),
            e.ɵɵadvance(5),
            e.ɵɵproperty("amount", e.ɵɵpipeBind1(16, 15, t.txFeeAmount$))(
              "token",
              t.nativeToken
            )("decimals", e.ɵɵpipeBind1(17, 17, t.decimals$))(
              "showTokenAmount",
              !0
            )("showBrackets", !0),
            e.ɵɵadvance(4),
            e.ɵɵproperty("swapTokensData", t.swapTokensDataMapped);
        }
      }
      function pn(n, a) {
        if ((1 & n && e.ɵɵelement(0, "quote-preview-skeleton", 23), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("isOneInch", "1inch" === t.marketName);
        }
      }
      function ln(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 24)(1, "span", 25),
          e.ɵɵtext(
            2,
            " A direct swap is a swap over the Uniswap protocol and its forks using the optimized 1inch router contract that facilitates saving up to 10% of gas. "
          ),
          e.ɵɵelementEnd()());
      }
      let dn = (() => {
        class n {
          constructor(t, i, s, c) {
            (this.txFeeService = t),
              (this.simpleSwapManagerService = i),
              (this.changeDetectorRef = s),
              (this.activeConnectionQuery = c),
              (this.isTheBest = !1),
              (this.selectable = !1),
              (this.saveUsdAmount = null),
              (this.onExpand = new e.EventEmitter()),
              (this.gasUnitsConsumed$ = new Yt.t(1)),
              (this.txFeeAmount$ = this.gasUnitsConsumed$.pipe(
                (0, ee.w)((r) =>
                  this.txFeeService.getTxFee(r, this.simpleSwapManagerService)
                )
              )),
              (this.decimals$ = this.activeConnectionQuery.currentChainId$.pipe(
                (0, I.U)((r) => (r === Xt.$L.etherumMainnet ? 5 : null))
              )),
              (this._pathfinderResponse = null);
          }
          set pathfinderResponse(t) {
            (this._pathfinderResponse = t),
              t && this.gasUnitsConsumed$.next(t.gasUnitsConsumed),
              this.changeDetectorRef.markForCheck();
          }
          get pathfinderResponse() {
            return this._pathfinderResponse;
          }
          get swapTokensDataMapped() {
            var t;
            return this.pathfinderResponse &&
              0 != +this.pathfinderResponse.toTokenAmount
              ? Object.assign(Object.assign({}, this.swapTokensData), {
                  destinationTokenAmount: (0, N.kg)(
                    (null === (t = this.pathfinderResponse) || void 0 === t
                      ? void 0
                      : t.toTokenAmount) || "0",
                    this.swapTokensData.destinationToken.decimals
                  ),
                })
              : null;
          }
          expand(t) {
            !this.selectable ||
              (t.stopImmediatePropagation(), this.onExpand.next());
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(Zt.V),
              e.ɵɵdirectiveInject(qt.B),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef),
              e.ɵɵdirectiveInject(U.r)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["quote-preview"]],
            inputs: {
              pathfinderResponse: "pathfinderResponse",
              isTheBest: "isTheBest",
              selectable: "selectable",
              saveUsdAmount: "saveUsdAmount",
              marketName: "marketName",
              txFeeAmount: "txFeeAmount",
              nativeToken: "nativeToken",
              swapTokensData: "swapTokensData",
            },
            outputs: { onExpand: "onExpand" },
            decls: 6,
            vars: 2,
            consts: [
              [1, "quote-container"],
              ["class", "quote-data-wrap", 4, "ngIf", "ngIfElse"],
              ["quoteSkeleton", ""],
              ["directSwapTooltip", ""],
              [1, "quote-data-wrap"],
              ["class", "save-amount", 4, "ngIf"],
              [1, "quote-data"],
              [1, "quote-data-row"],
              [1, "market-name-container"],
              [1, "blank-button", "market-expand", 3, "tabIndex", "click"],
              [1, "market-name", 3, "textContent"],
              [
                "class",
                "quote-data-tooltip",
                "direction",
                "right",
                3,
                "tooltip",
                4,
                "ngIf",
              ],
              [1, "arrow-down"],
              ["class", "token-amount-container", 4, "tuiLet"],
              [1, "quote-preview-tx-cost"],
              ["transloco", "uni.swap.tx-cost"],
              [
                3,
                "amount",
                "token",
                "decimals",
                "showTokenAmount",
                "showBrackets",
              ],
              [1, "quote-token-amount-usd-price"],
              [3, "swapTokensData"],
              [1, "save-amount"],
              ["direction", "right", 1, "quote-data-tooltip", 3, "tooltip"],
              [1, "token-amount-container"],
              [1, "token-amount"],
              [3, "isOneInch"],
              [1, "direct-swap-tooltip-text"],
              ["transloco", "uni.tooltip.direct-swap"],
            ],
            template: function (t, i) {
              if (
                (1 & t &&
                  (e.ɵɵelementStart(0, "div", 0),
                  e.ɵɵtemplate(1, cn, 20, 19, "div", 1),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(
                    2,
                    pn,
                    1,
                    1,
                    "ng-template",
                    null,
                    2,
                    e.ɵɵtemplateRefExtractor
                  ),
                  e.ɵɵtemplate(
                    4,
                    ln,
                    3,
                    0,
                    "ng-template",
                    null,
                    3,
                    e.ɵɵtemplateRefExtractor
                  )),
                2 & t)
              ) {
                const s = e.ɵɵreference(3);
                e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !!(
                      i.pathfinderResponse &&
                      i.swapTokensData &&
                      i.swapTokensData.destinationTokenAmount
                    )
                  )("ngIfElse", s);
              }
            },
            dependencies: [
              l.O5,
              ve.C,
              en.t,
              p.KI,
              at.K,
              nn,
              M.Ls,
              l.Ov,
              l.H9,
              p.Ot,
              on.s,
            ],
            styles: [
              '.quote-container[_ngcontent-%COMP%]{display:block;position:relative;height:76px;padding:15px 16px 16px;font-size:13px;border-radius:8px 12px 12px;transition:border .2s,background-color .2s;color:var(--1inch__ui-02);border:1px solid var(--1inch-border-04)}.quote-data-wrap[_ngcontent-%COMP%]{height:100%}.quote-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.quote-data-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.market-name-container.selectable[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover   .market-name[_ngcontent-%COMP%]{text-decoration:underline}.market-name-container.selectable[_ngcontent-%COMP%]   .market-expand[_ngcontent-%COMP%]:hover, .market-name-container.selectable[_ngcontent-%COMP%]   .market-expand[_ngcontent-%COMP%]:focus{background-color:var(--1inch-bg-10);border-radius:12px}.market-name-container[_ngcontent-%COMP%]:not(.selectable)   .arrow-down[_ngcontent-%COMP%]{display:none}.market-expand[_ngcontent-%COMP%]{padding:0 4px 0 8px;border-radius:4px;margin:0 -4px 0 -8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.market-expand[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.market-name[_ngcontent-%COMP%]{font-weight:500;font-size:16px;line-height:26px}.token-amount[_ngcontent-%COMP%]{font-size:20px;line-height:23px}.token-amount-container[_ngcontent-%COMP%]{min-height:20px;white-space:nowrap}.token-amount-container[_ngcontent-%COMP%], .token-amount-usd-price[_ngcontent-%COMP%]{text-align:right}.quote-preview-tx-cost[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:8px;color:var(--1inch__ui-02)}.save-amount[_ngcontent-%COMP%]{display:block;font-size:11px;background:#00897B;color:#fff;padding:4px 10px;border-radius:10px 10px 10px 0;position:absolute;left:-1px;top:-10px;z-index:1}.arrow-down[_ngcontent-%COMP%]{display:inline-block;position:relative;width:12px;height:8px;margin-left:8px}.arrow-down[_ngcontent-%COMP%]:before, .arrow-down[_ngcontent-%COMP%]:after{content:" ";position:absolute;height:7px;width:2px;top:0;border-radius:3px;background-color:currentColor}.arrow-down[_ngcontent-%COMP%]:before{transform:rotate(-135deg);left:4px}.arrow-down[_ngcontent-%COMP%]:after{transform:rotate(135deg);left:0}.quote-token-amount-usd-price[_ngcontent-%COMP%]{text-align:right}.direct-swap-tooltip-text[_ngcontent-%COMP%]{max-width:270px;font-size:13px;line-height:15px;color:var(--1inch-text-03)}.quote-data-tooltip[_ngcontent-%COMP%]{margin-top:5px;margin-left:4px}',
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var un = o(23982),
        mn = o(3875),
        vn = o(29889),
        hn = o(97202);
      const st = { UNISWAP: "Uniswap", PANCAKESWAP: "Pancakeswap" },
        rt = "WETH",
        ct = "WBNB",
        pt = "WMATIC";
      let fn = (() => {
        class n {
          constructor(t) {
            this.liquiditySourcesQuery = t;
          }
          transform(t) {
            var i;
            const s = this.getMarketName(t);
            return s
              ? (null === (i = this.liquiditySourcesQuery.getEntity(s)) ||
                void 0 === i
                  ? void 0
                  : i.title) || s
              : null;
          }
          getMarketName(t) {
            var i, s, c, r, d, g, S, x, C, D, A, R, te, ne, O, oe;
            const he = t.routes || [];
            let B =
              (null ===
                (d =
                  null ===
                    (r =
                      null ===
                        (c =
                          null ===
                            (s =
                              null === (i = he[0]) || void 0 === i
                                ? void 0
                                : i.subRoutes) || void 0 === s
                            ? void 0
                            : s[0]) || void 0 === c
                        ? void 0
                        : c[0]) || void 0 === r
                    ? void 0
                    : r.market) || void 0 === d
                ? void 0
                : d.name) || null;
            if (
              ([rt, ct, pt].includes((B || "").toUpperCase()) &&
                (null ===
                  (D =
                    null ===
                      (C =
                        null ===
                          (x =
                            null ===
                              (S =
                                null === (g = he[0]) || void 0 === g
                                  ? void 0
                                  : g.subRoutes) || void 0 === S
                              ? void 0
                              : S[1]) || void 0 === x
                          ? void 0
                          : x[0]) || void 0 === C
                      ? void 0
                      : C.market) || void 0 === D
                  ? void 0
                  : D.name) &&
                (B =
                  (null ===
                    (O =
                      null ===
                        (ne =
                          null ===
                            (te =
                              null ===
                                (R =
                                  null === (A = he[0]) || void 0 === A
                                    ? void 0
                                    : A.subRoutes) || void 0 === R
                                ? void 0
                                : R[1]) || void 0 === te
                            ? void 0
                            : te[0]) || void 0 === ne
                        ? void 0
                        : ne.market) || void 0 === O
                    ? void 0
                    : O.name) || null),
              !B)
            )
              return null;
            const ft = B.replace(/_?V\d{1,2}$/, "").toUpperCase();
            return he.every(
              (Qe) =>
                !(!Qe.subRoutes || 0 === Qe.subRoutes.length) &&
                Qe.subRoutes.every((so) =>
                  (0, q.d1t)(
                    (Fe) => [rt, ct, pt].includes(Fe.market.name.toUpperCase()),
                    so
                  ).every((Fe) => Fe.market.name.toUpperCase().startsWith(ft))
                )
            )
              ? st[ft] ||
                  st[B] ||
                  (null === (oe = this.liquiditySourcesQuery.getEntity(B)) ||
                  void 0 === oe
                    ? void 0
                    : oe.title) ||
                  B
              : "Direct swap";
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(hn.F, 16));
          }),
          (n.ɵpipe = e.ɵɵdefinePipe({
            name: "simpleMarketName",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
      function gn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 5)(1, "span", 6),
            e.ɵɵtext(2, "Balance"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span"),
            e.ɵɵtext(4, ":\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(5, "token-amount", 7),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵproperty("value", t.tokenBalance)("decimals", t.tokenDecimals);
        }
      }
      function wn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "a", 8),
            e.ɵɵelement(2, "token-select-button", 9),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = a.tuiLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵattribute("disabled", t),
            e.ɵɵadvance(1),
            e.ɵɵproperty("token", i.swapTokensData.destinationToken)(
              "dataId",
              "swap-box.dst-token.symbol"
            )("withArrow", !t);
        }
      }
      function xn(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 13),
            e.ɵɵlistener("click", function () {
              const c = e.ɵɵrestoreView(t).$implicit,
                r = e.ɵɵnextContext(3);
              return e.ɵɵresetView(r.selectQuote(c.preset));
            }),
            e.ɵɵelementStart(1, "quote-preview", 14),
            e.ɵɵlistener("onExpand", function () {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView(s.onExpandQuote());
            }),
            e.ɵɵpipe(2, "simpleMarketName"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = a.$implicit,
            i = a.index,
            s = e.ɵɵnextContext().tuiLet,
            c = e.ɵɵnextContext().tuiLet,
            r = e.ɵɵnextContext();
          e.ɵɵclassProp("active", s === t.preset),
            e.ɵɵproperty(
              "tabIndex",
              r.secondQuoteExpanded || i !== c.length - 1 ? 0 : -1
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "marketName",
              r.pathfinderResponse && "uniResult" === t.preset
                ? e.ɵɵpipeBind1(2, 10, r.pathfinderResponse[t.preset])
                : t.marketName
            )("isTheBest", t.isTheBest)(
              "selectable",
              t.selectable && i !== c.length - 1
            )("saveUsdAmount", e.ɵɵpipeBind1(3, 12, r.saveAmount$))(
              "nativeToken",
              e.ɵɵpipeBind1(4, 14, r.currentNativeToken$)
            )("swapTokensData", r.swapTokensData)(
              "pathfinderResponse",
              r.pathfinderResponse ? r.pathfinderResponse[t.preset] : null
            );
        }
      }
      function Sn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 11),
            e.ɵɵtemplate(1, xn, 5, 16, "button", 12),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().tuiLet,
            i = e.ɵɵnextContext();
          e.ɵɵclassProp("expanded", i.secondQuoteExpanded),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngForOf", t)("ngForTrackBy", i.trackByQuotes);
        }
      }
      function Cn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Sn, 2, 4, "div", 10),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(2, 1, t.currentPreset$));
        }
      }
      const je = [
        {
          marketName: "1inch",
          isTheBest: !0,
          selectable: !1,
          preset: "maxReturnResult",
        },
        {
          marketName: null,
          isTheBest: !1,
          selectable: !0,
          preset: "uniResult",
        },
        {
          marketName: "OTC",
          isTheBest: !1,
          selectable: !0,
          preset: "otcResult",
        },
      ];
      let kn = (() => {
        class n {
          constructor(t, i, s, c, r, d, g, S) {
            (this.activeConnectionQuery = t),
              (this.gasPriceQuery = i),
              (this.tokenPricesQuery = s),
              (this.simpleSwapQuery = c),
              (this.simpleSwapService = r),
              (this.otcModeService = d),
              (this.swapSettingsService = g),
              (this.pathfinderQuery = S),
              (this.currentNativeToken$ =
                this.activeConnectionQuery.currentNativeToken$),
              (this.currentPreset$ = this.simpleSwapQuery.currentPreset$),
              (this.saveAmount$ = (0, Ye.a)([
                this.pathfinderQuery.pathfinderResponse$,
                this.simpleSwapQuery.currentPreset$,
              ]).pipe(
                (0, I.U)(([x]) => {
                  if (!x) return 0;
                  const C = x[this.quotesPreviewData[1].preset];
                  return 0 == +C.toTokenAmount
                    ? 0
                    : this.getSaveUsdAmount(x.maxReturnResult, C);
                })
              )),
              (this.quotesPreviewData$ = new Gt.X(je)),
              (this.isEmbeddedSwap$ = et.c),
              (this.secondQuoteExpanded = !1),
              (this.quotesPreviewData = je),
              (this.subscription = new $.w0());
          }
          ngOnInit() {
            this.resetQuotesStateOnChanges(),
              "otcResult" === this.simpleSwapQuery.currentPreset &&
                this.swapQuotesPlaces();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          selectQuote(t) {
            const i = this.quotesPreviewData.findIndex((s) => s.preset === t);
            if (
              ((this.secondQuoteExpanded = !1),
              i > 1 && this.swapQuotesPlaces(),
              this.simpleSwapService.selectQuotePreset(t),
              "otcResult" === t)
            )
              return (
                this.swapSettingsService.setPartialValuesForCurrentChain({
                  pathfinderPreset: zt.dn.OTC,
                }),
                void this.otcModeService.onSwitchToOTC()
              );
            this.otcModeService.resetOTCModeWhenItSet();
          }
          onExpandQuote() {
            this.secondQuoteExpanded = !this.secondQuoteExpanded;
          }
          trackByQuotes(t, i) {
            return i.preset;
          }
          filterQuotes(t) {
            var i, s;
            const { isRestrainedNetwork: c } = this.activeConnectionQuery,
              r =
                0 ==
                +(
                  (null ===
                    (s =
                      null === (i = this.pathfinderResponse) || void 0 === i
                        ? void 0
                        : i.otcResult) || void 0 === s
                    ? void 0
                    : s.toTokenAmount) || "0"
                );
            return c || r ? t.filter((d) => "otcResult" !== d.preset) : t;
          }
          getSaveUsdAmount(t, i) {
            const s = this.activeConnectionQuery.currentNativeToken,
              c = this.gasPriceQuery.getCurrentGasPrice(),
              { destinationToken: r } = this.swapTokensData,
              d = this.tokenPricesQuery.getUsdPrice(s.address),
              g = this.tokenPricesQuery.getUsdPrice(r.address);
            if (
              [c, d, t.toTokenAmount, i.toTokenAmount].some(
                (0, q.H50)([q.kKJ, q.xbD])
              )
            )
              return 0;
            const x = +(0, N.s5)((+t.gasUnitsConsumed * c).toString()) * d,
              C = +(0, N.s5)((+i.gasUnitsConsumed * c).toString()) * d,
              D = +(0, N.kg)(t.toTokenAmount, r.decimals) * g,
              A = +(0, N.kg)(i.toTokenAmount, r.decimals) * g;
            return Math.max(D - x - (A - C), 0);
          }
          swapQuotesPlaces() {
            const t = this.quotesPreviewData[1];
            (this.quotesPreviewData[1] = this.quotesPreviewData[2]),
              (this.quotesPreviewData[2] = t);
          }
          resetQuotesStateOnChanges() {
            const t = this.simpleSwapService.triggerToResetCurrentPreset$.pipe(
              (0, W.b)(() => {
                this.resetPresetToMaxReturn();
              })
            );
            (0, me.O)(t, "resetQuotesStateOnChanges", this.subscription);
          }
          resetPresetToMaxReturn() {
            var t;
            null === (t = document.activeElement) || void 0 === t || t.blur(),
              (this.quotesPreviewData = je),
              this.selectQuote("maxReturnResult"),
              this.quotesPreviewData$.next(this.quotesPreviewData);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(U.r),
              e.ɵɵdirectiveInject(Ve.j),
              e.ɵɵdirectiveInject(nt.u),
              e.ɵɵdirectiveInject(de.G),
              e.ɵɵdirectiveInject(b.q),
              e.ɵɵdirectiveInject(Ie.N),
              e.ɵɵdirectiveInject(Jt._),
              e.ɵɵdirectiveInject(it.o)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["swap-destination-token"]],
            inputs: {
              swapTokensData: "swapTokensData",
              pathfinderResponse: "pathfinderResponse",
              tokenBalance: "tokenBalance",
              tokenDecimals: "tokenDecimals",
            },
            decls: 9,
            vars: 8,
            consts: [
              [1, "destination-token-container"],
              [1, "destination-top-row"],
              [
                "target",
                "_blank",
                "transloco",
                "uni.swap.you-buy",
                1,
                "destination-top-row-title",
                3,
                "tokenLink",
              ],
              ["class", "destination-token-balance", 4, "ngIf"],
              [4, "tuiLet"],
              [1, "destination-token-balance"],
              ["transloco", "field.balance"],
              [
                "data-id",
                "swap-box.dst-balance",
                "id",
                "swap-box.dst-balance",
                3,
                "value",
                "decimals",
              ],
              [
                "routerLink",
                "select-destination-token",
                "data-id",
                "swap-box.dst-token.dropdown-button",
                "id",
                "swap-box.dst-token.dropdown-button",
                1,
                "select-destination-token",
              ],
              [3, "token", "dataId", "withArrow"],
              [
                "data-id",
                "quotes-box",
                "id",
                "quotes-box",
                "class",
                "quotes-list",
                3,
                "expanded",
                4,
                "tuiLet",
              ],
              ["data-id", "quotes-box", "id", "quotes-box", 1, "quotes-list"],
              [
                "data-id",
                "quote",
                "id",
                "quote",
                "class",
                "blank-button quote-preview",
                3,
                "active",
                "tabIndex",
                "click",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [
                "data-id",
                "quote",
                "id",
                "quote",
                1,
                "blank-button",
                "quote-preview",
                3,
                "tabIndex",
                "click",
              ],
              [
                3,
                "marketName",
                "isTheBest",
                "selectable",
                "saveUsdAmount",
                "nativeToken",
                "swapTokensData",
                "pathfinderResponse",
                "onExpand",
              ],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2),
                e.ɵɵtext(3, " You buy "),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(4, gn, 6, 2, "div", 3),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(5, wn, 3, 4, "ng-container", 4),
                e.ɵɵpipe(6, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(7, Cn, 3, 3, "ng-container", 4),
                e.ɵɵpipe(8, "async")),
                2 & t &&
                  (e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "tokenLink",
                    i.swapTokensData.destinationToken.address
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", i.tokenBalance),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(6, 4, i.isEmbeddedSwap$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "tuiLet",
                    i.filterQuotes(e.ɵɵpipeBind1(8, 6, i.quotesPreviewData$))
                  ));
            },
            dependencies: [
              l.sg,
              l.O5,
              dn,
              un.N,
              m.yS,
              mn.e,
              M.Ls,
              p.KI,
              vn.O,
              l.Ov,
              fn,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;border:1px solid var(--1inch-border-05);border-radius:16px;padding:16px}@media (max-width: 418px){[_nghost-%COMP%]{padding:0}}.destination-token-container[_ngcontent-%COMP%]{margin-bottom:24px;color:var(--1inch__ui-02)}@media (max-width: 418px){.destination-token-container[_ngcontent-%COMP%]{border-radius:16px 16px 0 0;padding:16px;border-bottom:0;margin-bottom:8px}}.destination-top-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:13px;margin-bottom:12px}.destination-top-row-title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.destination-top-row-title[_ngcontent-%COMP%]:hover, .destination-top-row-title[_ngcontent-%COMP%]:focus{text-decoration:none;color:var(--1inch-text-03);transition:.2s}.destination-token-balance[_ngcontent-%COMP%]{text-align:right}.select-destination-token[_ngcontent-%COMP%]{display:inline-block;text-decoration:none;padding:6px 6px 6px 9px;margin-left:-9px;border-radius:12px}.select-destination-token[_ngcontent-%COMP%]:not([disabled=true]):hover, .select-destination-token[_ngcontent-%COMP%]:not([disabled=true]):focus{background:var(--1inch-bg-10)}.select-destination-token[disabled=true][_ngcontent-%COMP%]{pointer-events:none}.quotes-list[_ngcontent-%COMP%]{padding-top:12px;margin-top:-12px;height:172px;transition:height .3s;overflow:hidden}@media (max-width: 418px){.quotes-list[_ngcontent-%COMP%]{margin:-12px 16px 16px}}.quotes-list.expanded[_ngcontent-%COMP%]{height:256px}button.quote-preview[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:8px;display:block;width:100%;text-align:left;outline:none!important;box-shadow:none!important}button.quote-preview[_ngcontent-%COMP%]:last-child{margin-bottom:0}button.quote-preview.active[_ngcontent-%COMP%]     .quote-container{border:1px solid var(--1inch-common-border-01);background-color:var(--1inch-hover-01)}button.quote-preview.active[_ngcontent-%COMP%]     .quote-container .skeleton:after{background-image:linear-gradient(270deg,var(--1inch-skeleton-bg-01) 0,var(--1inch-skeleton-bg-02))}button.quote-preview[_ngcontent-%COMP%]:focus     .quote-container, button.quote-preview[_ngcontent-%COMP%]:hover     .quote-container{background-color:var(--1inch-hover-01)}button.quote-preview[_ngcontent-%COMP%]:hover     .quote-container .market-expand>*, button.quote-preview[_ngcontent-%COMP%]:hover     .quote-container .token-amount-container, button.quote-preview[_ngcontent-%COMP%]:hover     .quote-container .market-name-container .tooltip-icon, button.quote-preview[_ngcontent-%COMP%]:focus     .quote-container .market-expand>*, button.quote-preview[_ngcontent-%COMP%]:focus     .quote-container .token-amount-container, button.quote-preview[_ngcontent-%COMP%]:focus     .quote-container .market-name-container .tooltip-icon, button.quote-preview.active[_ngcontent-%COMP%]     .quote-container .market-expand>*, button.quote-preview.active[_ngcontent-%COMP%]     .quote-container .token-amount-container, button.quote-preview.active[_ngcontent-%COMP%]     .quote-container .market-name-container .tooltip-icon{color:var(--1inch-text-01)}button.quote-preview[_ngcontent-%COMP%]     .tx-cost .token-amount{color:var(--1inch__ui-02)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Tn = o(36995),
        yn = o(46801),
        lt = o(56472),
        Pn = o(57627),
        Mn = o(17505),
        dt = o(90927),
        ut = o(4685),
        On = o(82767),
        mt = o(95475);
      function _n(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 1),
            e.ɵɵelement(1, "min-received-amount", 8),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("destinationToken", t.swapData.destinationToken)(
              "isHighSlippageTolerance",
              t.snapshot.isHighSlippageTolerance
            )("minDestinationAmount", t.snapshot.minReceivedTokenAmount)(
              "receivedAmountSlippage",
              t.snapshot.slippageTolerance
            );
        }
      }
      function bn(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "swap-confirm-settings-rows", 9),
            e.ɵɵlistener("openSettings", function (s) {
              e.ɵɵrestoreView(t);
              const c = e.ɵɵnextContext();
              return e.ɵɵresetView(c.handleOpenSettings(s));
            }),
            e.ɵɵelementEnd();
        }
      }
      function En(n, a) {
        if ((1 & n && e.ɵɵelement(0, "partner-fees", 10), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("usdFirst", !0)("partnersFees", t.snapshot.partnerFees)(
            "sourceToken",
            t.swapData.sourceToken
          );
        }
      }
      function In(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 11)(1, "span", 12),
            e.ɵɵtext(2, "Price impact"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "div", 13)(4, "span", 14),
            e.ɵɵtext(5),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(6, "svg", 15),
            e.ɵɵelement(7, "use", 16),
            e.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate1("-", t.snapshot.swapPriceImpact, "%");
        }
      }
      let Dn = (() => {
        class n {
          constructor() {
            this.openSettings = new e.EventEmitter();
          }
          get swapData() {
            return this.snapshot.swapData;
          }
          handleOpenSettings(t) {
            this.openSettings.emit(t);
          }
          get destinationTokenRate() {
            const t = +this.swapData.sourceTokenAmount,
              i = +this.swapData.destinationTokenAmount;
            return 0 === i || 0 === t ? 0 : i / t;
          }
          get sourceTokenRate() {
            const t = +this.swapData.sourceTokenAmount,
              i = +this.swapData.destinationTokenAmount;
            return 0 === i || 0 === t ? 0 : t / i;
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["swap-rate-info"]],
            inputs: { snapshot: "snapshot", mode: "mode" },
            outputs: { openSettings: "openSettings" },
            decls: 19,
            vars: 16,
            consts: [
              [1, "swap-confirm-details"],
              [1, "swap-confirm-details-row"],
              ["transloco", "limitOrderBox.price"],
              [3, "showTokenAmount", "amount", "token"],
              ["class", "swap-confirm-details-row", 4, "ngIf"],
              [3, "openSettings", 4, "ngIf"],
              [
                "class",
                "swap-confirm-details-row partners-fee-row",
                3,
                "usdFirst",
                "partnersFees",
                "sourceToken",
                4,
                "ngIf",
              ],
              [
                "class",
                "swap-confirm-details-row swap-confirm-price-impact",
                4,
                "ngIf",
              ],
              [
                3,
                "destinationToken",
                "isHighSlippageTolerance",
                "minDestinationAmount",
                "receivedAmountSlippage",
              ],
              [3, "openSettings"],
              [
                1,
                "swap-confirm-details-row",
                "partners-fee-row",
                3,
                "usdFirst",
                "partnersFees",
                "sourceToken",
              ],
              [1, "swap-confirm-details-row", "swap-confirm-price-impact"],
              ["transloco", "uni.swapRateInfo.price-impact"],
              [
                "data-id",
                "swap-price-impact-confirm",
                "id",
                "swap-price-impact-confirm",
                1,
                "impact-info",
              ],
              [1, "impact-value"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/simple/icons/price-impact.svg#price-impact",
              ],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div"),
                e.ɵɵtext(3),
                e.ɵɵpipe(4, "displaySymbol"),
                e.ɵɵelementStart(5, "span", 2),
                e.ɵɵtext(6, "price"),
                e.ɵɵelementEnd()(),
                e.ɵɵelement(7, "usd-token-price", 3),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(8, "div", 1)(9, "div"),
                e.ɵɵtext(10),
                e.ɵɵpipe(11, "displaySymbol"),
                e.ɵɵelementStart(12, "span", 2),
                e.ɵɵtext(13, "price"),
                e.ɵɵelementEnd()(),
                e.ɵɵelement(14, "usd-token-price", 3),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(15, _n, 2, 4, "div", 4),
                e.ɵɵtemplate(16, bn, 1, 0, "swap-confirm-settings-rows", 5),
                e.ɵɵtemplate(17, En, 1, 3, "partner-fees", 6),
                e.ɵɵtemplate(18, In, 8, 1, "div", 7),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    " ",
                    e.ɵɵpipeBind1(4, 12, i.swapData.sourceToken),
                    " "
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("showTokenAmount", !0)(
                    "amount",
                    i.destinationTokenRate
                  )("token", i.swapData.destinationToken),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    " ",
                    e.ɵɵpipeBind1(11, 14, i.swapData.destinationToken),
                    " "
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("showTokenAmount", !0)(
                    "amount",
                    i.sourceTokenRate
                  )("token", i.swapData.sourceToken),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", i.snapshot.minReceivedTokenAmount),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", "confirm" === i.mode),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", i.snapshot.partnerFees),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", i.snapshot.isHighPriceImpact));
            },
            dependencies: [l.O5, ve.C, dt.K, p.KI, ut.o, On.D, mt.s],
            styles: [
              "[_nghost-%COMP%]{display:block}.swap-confirm-details[_ngcontent-%COMP%]{padding-right:4px;padding-left:4px}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:13px;line-height:15px;margin-top:8px}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row[_ngcontent-%COMP%]:first-child{margin-top:0}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:8px}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.swap-confirm-price-impact[_ngcontent-%COMP%]   .impact-info[_ngcontent-%COMP%]{display:flex;align-items:center}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.swap-confirm-price-impact[_ngcontent-%COMP%]   .impact-info[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-top:-2px;margin-left:4px}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.swap-confirm-price-impact[_ngcontent-%COMP%]   .impact-value[_ngcontent-%COMP%]{color:#ff8078}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.tx-cost[_ngcontent-%COMP%]   .usd-value[_ngcontent-%COMP%]{color:var(--1inch__ui-02);margin-right:4px}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.tx-cost[_ngcontent-%COMP%]   .usd-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.swap-confirm-details[_ngcontent-%COMP%]   .swap-confirm-details-row.partners-fee-row[_ngcontent-%COMP%]   info-icon[_ngcontent-%COMP%]{margin-left:8px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var An = o(33904),
        Rn = o(89092);
      function Bn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 9),
            e.ɵɵelement(1, "min-received-amount", 10),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("destinationToken", t.swapData.destinationToken)(
              "isHighSlippageTolerance",
              t.snapshot.isHighSlippageTolerance
            )("minDestinationAmount", t.snapshot.minReceivedTokenAmount)(
              "receivedAmountSlippage",
              t.snapshot.slippageTolerance
            );
        }
      }
      const vt = function (n) {
        return { token: n };
      };
      let jn = (() => {
        class n {
          constructor() {
            this.closeExpansion = new e.EventEmitter();
          }
          get swapData() {
            return this.snapshot.swapData;
          }
          get destinationTokenRate() {
            const t = +this.swapData.sourceTokenAmount,
              i = +this.swapData.destinationTokenAmount;
            return 0 === i || 0 === t ? 0 : i / t;
          }
          get sourceTokenRate() {
            const t = +this.swapData.sourceTokenAmount,
              i = +this.swapData.destinationTokenAmount;
            return 0 === i || 0 === t ? 0 : t / i;
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["extended-rate-info"]],
            inputs: { snapshot: "snapshot" },
            outputs: { closeExpansion: "closeExpansion" },
            decls: 23,
            vars: 31,
            consts: [
              [
                "data-id",
                "info-token-from-row",
                "id",
                "info-token-from-row",
                1,
                "extended-info-row",
              ],
              [
                "data-id",
                "info-rate-collapse",
                "id",
                "info-rate-collapse",
                1,
                "blank-button",
                "expand-button",
                3,
                "click",
              ],
              ["width", "16", "height", "16", 1, "arrow-expand"],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              [
                "data-id",
                "info-token-from-value",
                "id",
                "info-token-from-value",
              ],
              [3, "amount", "token", "showBrackets"],
              [
                "data-id",
                "info-token-to-row",
                "id",
                "info-token-to-row",
                1,
                "extended-info-row",
              ],
              ["data-id", "info-token-to-value", "id", "info-token-to-value"],
              [
                "class",
                "extended-info-row",
                "data-id",
                "info-min-received-row",
                "id",
                "info-min-received-row",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "info-min-received-row",
                "id",
                "info-min-received-row",
                1,
                "extended-info-row",
              ],
              [
                3,
                "destinationToken",
                "isHighSlippageTolerance",
                "minDestinationAmount",
                "receivedAmountSlippage",
              ],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div")(2, "button", 1),
                e.ɵɵlistener("click", function () {
                  return i.closeExpansion.emit();
                }),
                e.ɵɵelementStart(3, "span"),
                e.ɵɵtext(4),
                e.ɵɵpipe(5, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(6, "svg", 2),
                e.ɵɵelement(7, "use", 3),
                e.ɵɵelementEnd()()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(8, "div", 4)(9, "span"),
                e.ɵɵtext(10),
                e.ɵɵpipe(11, "formatTokenAmount"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(12, "usd-token-price", 5),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(13, "div", 6)(14, "span"),
                e.ɵɵtext(15),
                e.ɵɵpipe(16, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(17, "div", 7)(18, "span"),
                e.ɵɵtext(19),
                e.ɵɵpipe(20, "formatTokenAmount"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(21, "usd-token-price", 5),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(22, Bn, 2, 4, "div", 8)),
                2 & t &&
                  (e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      5,
                      13,
                      "swapBox.token-price",
                      e.ɵɵpureFunction1(27, vt, i.swapData.sourceToken.symbol)
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate2(
                    " ",
                    e.ɵɵpipeBind3(
                      11,
                      16,
                      i.destinationTokenRate + "",
                      i.swapData.destinationToken.decimals,
                      "1.0-4"
                    ),
                    " ",
                    i.swapData.destinationToken.symbol,
                    " "
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("amount", i.destinationTokenRate)(
                    "token",
                    i.swapData.destinationToken
                  )("showBrackets", !0),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      16,
                      20,
                      "swapBox.token-price",
                      e.ɵɵpureFunction1(
                        29,
                        vt,
                        i.swapData.destinationToken.symbol
                      )
                    )
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate2(
                    " ",
                    e.ɵɵpipeBind3(
                      20,
                      23,
                      i.sourceTokenRate + "",
                      i.swapData.sourceToken.decimals,
                      "1.0-4"
                    ),
                    " ",
                    i.swapData.sourceToken.symbol,
                    " "
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("amount", i.sourceTokenRate)(
                    "token",
                    i.swapData.sourceToken
                  )("showBrackets", !0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", i.snapshot.minReceivedTokenAmount));
            },
            dependencies: [l.O5, ve.C, dt.K, Rn.l, p.Ot],
            styles: [
              ".extended-info-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:8px}.extended-info-row[_ngcontent-%COMP%]:last-of-type{margin-top:20px}.expand-button[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.expand-button[_ngcontent-%COMP%]   .arrow-expand[_ngcontent-%COMP%]{margin:-2px 0 0 8px;transform:rotate(180deg);color:var(--1inch__ui-03)}.expand-button[_ngcontent-%COMP%]:hover, .expand-button[_ngcontent-%COMP%]:focus{color:var(--1inch-text-01)}.expand-button[_ngcontent-%COMP%]:hover   .arrow-expand[_ngcontent-%COMP%], .expand-button[_ngcontent-%COMP%]:focus   .arrow-expand[_ngcontent-%COMP%]{color:var(--1inch-text-01)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Qn = o(2794);
      function Fn(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 7)(1, "div")(2, "button", 8),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.toggleExpansion());
            }),
            e.ɵɵelementStart(3, "span", 9),
            e.ɵɵtext(4, "Rate"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(5, "svg", 10),
            e.ɵɵelement(6, "use", 11),
            e.ɵɵelementEnd()()(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(7, "span", 12)(8, "span"),
            e.ɵɵtext(9),
            e.ɵɵpipe(10, "displaySymbol"),
            e.ɵɵpipe(11, "displaySymbol"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(12, "usd-token-price", 13)(13, "tooltip", 14),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(),
            i = e.ɵɵreference(10);
          e.ɵɵadvance(9),
            e.ɵɵtextInterpolate3(
              " 1 ",
              e.ɵɵpipeBind1(10, 7, t.swapData.destinationToken),
              " = ",
              t.formatRateValue(t.sourceTokenRate),
              " ",
              e.ɵɵpipeBind1(11, 9, t.swapData.sourceToken),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("amount", t.sourceTokenRate)(
              "token",
              t.swapData.sourceToken
            )("showBrackets", !0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("tooltip", i);
        }
      }
      function $n(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "extended-rate-info", 15),
            e.ɵɵlistener("closeExpansion", function () {
              e.ɵɵrestoreView(t);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.toggleExpansion());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("snapshot", t.snapshot);
        }
      }
      function Un(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 16)(1, "span"),
            e.ɵɵtext(2, "Gas refund"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(3, "gas-refund-value", 17),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "refundPercent",
              e.ɵɵpipeBind1(4, 1, t.gasRefundPercent$)
            );
        }
      }
      function Ln(n, a) {
        if ((1 & n && e.ɵɵelement(0, "partner-fees", 18), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("partnersFees", t.snapshot.partnerFees)(
            "sourceToken",
            t.swapData.sourceToken
          )("showBrackets", !0);
        }
      }
      function Wn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 19),
            e.ɵɵelement(1, "swap-rate-info", 20),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("snapshot", t.snapshot);
        }
      }
      let Nn = (() => {
        class n {
          constructor(t, i, s, c, r) {
            (this.matDialog = t),
              (this.tokensQuery = i),
              (this.gasRefundService = s),
              (this.simpleUiStore = c),
              (this.simpleUiQuery = r),
              (this.gasRefundPercent$ =
                this.gasRefundService.gasRefundPercent$),
              (this.isExtendedRateExpanded$ = this.simpleUiQuery.select(
                "isExtendedRateExpanded"
              ));
          }
          get swapData() {
            return this.snapshot.swapData;
          }
          get sourceTokenRate() {
            const t = +this.swapData.sourceTokenAmount,
              i = +this.swapData.destinationTokenAmount;
            if (0 === i || 0 === t) return 0;
            const s = t / i;
            return -1 === s.toString().indexOf("e")
              ? s
              : new yn.g().transform(s);
          }
          toggleExpansion() {
            const t = this.simpleUiStore.getValue().isExtendedRateExpanded;
            this.simpleUiStore.update({ isExtendedRateExpanded: !t });
          }
          formatRateValue(t) {
            return (0, N.hK)(t);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(G.uw),
              e.ɵɵdirectiveInject(lt.d),
              e.ɵɵdirectiveInject(He.U),
              e.ɵɵdirectiveInject(Pn.M),
              e.ɵɵdirectiveInject(Mn.D)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["quote-info"]],
            inputs: { routes: "routes", snapshot: "snapshot" },
            decls: 11,
            vars: 13,
            consts: [
              [1, "layout-table"],
              [
                "class",
                "layout-table-row",
                "data-id",
                "info-rate-row",
                "id",
                "info-rate-row",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "info-rate-expanded-box",
                "id",
                "info-rate-expanded-box",
                3,
                "snapshot",
                "closeExpansion",
                4,
                "ngIf",
              ],
              [
                1,
                "routes-info",
                3,
                "routes",
                "sourceToken",
                "destinationToken",
              ],
              [
                "class",
                "layout-table-row",
                "data-id",
                "info-gas-refund-row",
                "id",
                "info-gas-refund-row",
                4,
                "ngIf",
              ],
              [
                "class",
                "partner-fees layout-table-row",
                3,
                "partnersFees",
                "sourceToken",
                "showBrackets",
                4,
                "ngIf",
              ],
              ["tooltip", ""],
              [
                "data-id",
                "info-rate-row",
                "id",
                "info-rate-row",
                1,
                "layout-table-row",
              ],
              [
                "data-id",
                "info-rate-expand",
                "id",
                "info-rate-expand",
                1,
                "blank-button",
                "expand-button",
                3,
                "click",
              ],
              ["transloco", "swapBox.rate"],
              ["width", "16", "height", "16", 1, "arrow-expand"],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              [
                "data-id",
                "info-rate-collapsed-value",
                "id",
                "info-rate-collapsed-value",
              ],
              [3, "amount", "token", "showBrackets"],
              [
                "direction",
                "left",
                "data-id",
                "info-rate-collapsed-value-tooltip",
                "id",
                "info-rate-collapsed-value-tooltip",
                1,
                "rate-info-icon",
                3,
                "tooltip",
              ],
              [
                "data-id",
                "info-rate-expanded-box",
                "id",
                "info-rate-expanded-box",
                3,
                "snapshot",
                "closeExpansion",
              ],
              [
                "data-id",
                "info-gas-refund-row",
                "id",
                "info-gas-refund-row",
                1,
                "layout-table-row",
              ],
              [
                "data-id",
                "info-gas-refund-value",
                "id",
                "info-gas-refund-value",
                3,
                "refundPercent",
              ],
              [
                1,
                "partner-fees",
                "layout-table-row",
                3,
                "partnersFees",
                "sourceToken",
                "showBrackets",
              ],
              [1, "rate-info"],
              ["mode", "info", 3, "snapshot"],
            ],
            template: function (t, i) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵtemplate(1, Fn, 14, 11, "div", 1),
                e.ɵɵpipe(2, "async"),
                e.ɵɵtemplate(3, $n, 1, 1, "extended-rate-info", 2),
                e.ɵɵpipe(4, "async"),
                e.ɵɵelement(5, "routes-info", 3),
                e.ɵɵtemplate(6, Un, 5, 3, "div", 4),
                e.ɵɵpipe(7, "async"),
                e.ɵɵtemplate(8, Ln, 1, 3, "partner-fees", 5),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(
                  9,
                  Wn,
                  2,
                  1,
                  "ng-template",
                  null,
                  6,
                  e.ɵɵtemplateRefExtractor
                )),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !e.ɵɵpipeBind1(2, 7, i.isExtendedRateExpanded$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(4, 9, i.isExtendedRateExpanded$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("routes", i.routes)(
                    "sourceToken",
                    i.swapData.sourceToken
                  )("destinationToken", i.swapData.destinationToken),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    null !== e.ɵɵpipeBind1(7, 11, i.gasRefundPercent$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", i.snapshot.partnerFees));
            },
            dependencies: [
              l.O5,
              Dn,
              p.KI,
              ve.C,
              An.C,
              jn,
              ut.o,
              at.K,
              Qn.a,
              l.Ov,
              mt.s,
            ],
            styles: [
              ".layout-table[_ngcontent-%COMP%]{width:100%;font-size:12px;line-height:15px;color:var(--1inch__ui-02)}.layout-table-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.layout-table-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.rate-info[_ngcontent-%COMP%]{min-width:250px}.rate-info-icon[_ngcontent-%COMP%]{cursor:pointer;margin-top:-1px}.expand-button[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.expand-button[_ngcontent-%COMP%]   .arrow-expand[_ngcontent-%COMP%]{margin:-2px 0 0 8px;color:var(--1inch__ui-03)}.expand-button[_ngcontent-%COMP%]:hover, .expand-button[_ngcontent-%COMP%]:focus{color:var(--1inch-text-01)}.expand-button[_ngcontent-%COMP%]:hover   .arrow-expand[_ngcontent-%COMP%], .expand-button[_ngcontent-%COMP%]:focus   .arrow-expand[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.routes-info[_ngcontent-%COMP%]{display:block;margin-bottom:8px}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Kn = o(14851),
        Vn = o(2551),
        Hn = o(29229),
        zn = o(33798);
      function Gn(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "swap-separator", 12),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = a.tuiLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("rotatable", !t)(
              "reverseTokensLink",
              t ? null : e.ɵɵpipeBind1(2, 2, i.reverseTokensUrl$)
            );
        }
      }
      function Jn(n, a) {
        if (
          (1 & n && (e.ɵɵelement(0, "quote-info", 13), e.ɵɵpipe(1, "async")),
          2 & n)
        ) {
          const t = a.ngIf,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("snapshot", t)("routes", e.ɵɵpipeBind1(1, 2, i.routes$));
        }
      }
      let Xn = (() => {
        class n {
          constructor(t, i, s, c, r, d, g, S, x, C, D, A, R, te, ne) {
            (this.tokenBalanceQuery = t),
              (this.tokenPricesQuery = i),
              (this.simpleSwapQuery = s),
              (this.simpleSwapService = c),
              (this.swapFormQuery = r),
              (this.swapFormRefreshService = d),
              (this.swapPriceImpactService = g),
              (this.pathfinderService = S),
              (this.swapConfirmSnapshotService = x),
              (this.activeConnectionQuery = C),
              (this.matDialog = D),
              (this.router = A),
              (this.activatedRoute = R),
              (this.routerHelperService = te),
              (this.simpleSwapButtonStateService = ne),
              (this.sourceToken$ = this.simpleSwapQuery.sourceToken$),
              (this.destinationToken$ = this.simpleSwapQuery.destinationToken$),
              (this.sourceTokenAmount$ =
                this.simpleSwapQuery.sourceTokenAmount$),
              (this.swapInfo$ = this.simpleSwapButtonStateService.swapInfo$),
              (this.swapButtonState$ =
                this.simpleSwapButtonStateService.swapButtonState$),
              (this.sourceTokenViewBalance$ =
                this.simpleSwapQuery.sourceToken$.pipe(
                  (0, ee.w)((O) => this.getTokenViewBalance$(O))
                )),
              (this.destinationTokenBalance$ = this.destinationToken$.pipe(
                (0, ee.w)((O) => this.getBalanceInTokenUnits(O))
              )),
              (this.connectedWalletAddress$ =
                this.swapFormQuery.connectedWalletAddress$),
              (this.pathfinderResponse$ =
                this.swapFormQuery.pathfinderResponse$),
              (this.routes$ = this.swapFormQuery.routes$),
              (this.swapTokensData$ = this.simpleSwapQuery.swapTokensData$),
              (this.currentSnapshot$ =
                this.swapConfirmSnapshotService.currentSnapshot$),
              (this.isEmbeddedSwap$ = et.c),
              (this.swapIsLocked$ = this.swapFormQuery.swapIsLocked$),
              (this.sourceTokenAmountControl = new F.UntypedFormControl()),
              (this.reverseTokensUrl$ = (0, Ye.a)([
                this.sourceToken$,
                this.destinationToken$,
              ]).pipe(
                (0, I.U)(([O, oe]) => `../../${O.symbol}/${oe.symbol}/reverse`)
              )),
              (this.isSetMax$ = this.simpleSwapQuery
                .select("isSetMax")
                .pipe((0, Re.x)())),
              (this.subscription = new $.w0()),
              (this.sourceTokenPersistSubscription = new $.w0()),
              (this.isSetMaxInProgress = !1);
          }
          ngOnInit() {
            this.pathfinderService.reset(),
              this.persistSourceTokenAmount(),
              this.manualRefresh(),
              this.simpleSwapService.resetMax(),
              this.subscription.add(
                this.sourceTokenAmountControl.valueChanges
                  .pipe(
                    (0, Ze.b)(100),
                    (0, Nt.BX)(),
                    (0, I.U)((t) => `${t}`),
                    (0, Be.h)((t) => "" !== (0, q.fyY)(t)),
                    (0, Re.x)(),
                    (0, W.b)(() => {
                      this.simpleSwapService.setMaxReturnResultPreset();
                    })
                  )
                  .subscribe({ error: (t) => (0, Wt.eK)(t, "is0008") })
              ),
              this.resubscribeSourceTokenOnChainChanges();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe(),
              this.sourceTokenPersistSubscription.unsubscribe();
          }
          startSwapFlow() {
            return (0, Lt.__awaiter)(this, void 0, void 0, function* () {
              yield this.router.navigate(["confirm"], {
                relativeTo: this.activatedRoute,
              });
            });
          }
          manualRefresh() {
            this.pathfinderService.reset(),
              this.swapFormRefreshService.manualRefresh$.next();
          }
          setMaxAmount() {
            const t = this.swapFormQuery.availableSourceTokenBalance$.pipe(
              (0, Vt.q)(1),
              (0, W.b)((i) => {
                const s = (0, tt.k3)({
                  balance: i.toString(),
                  decimals: this.simpleSwapQuery.sourceToken.decimals,
                  precision: this.simpleSwapQuery.sourceToken.decimals,
                });
                s !== this.simpleSwapQuery.sourceTokenAmount
                  ? (this.pathfinderService.reset(),
                    (this.isSetMaxInProgress = !0),
                    this.simpleSwapService.setMaxSourceTokenAmount(s),
                    this.sourceTokenAmountControl.setValue(s, {
                      emitEvent: !1,
                      onlySelf: !0,
                    }),
                    (this.isSetMaxInProgress = !1),
                    this.resubscribeSourceTokenPersisting())
                  : this.simpleSwapService.setMax();
              })
            );
            (0, me.O)(t, "SwapFormComponent.setMaxAmount()", this.subscription);
          }
          getBalanceInTokenUnits(t) {
            return this.connectedWalletAddress$.pipe(
              (0, ee.w)((i) =>
                i
                  ? this.tokenBalanceQuery.getBalanceInTokenUnits(t)
                  : (0, Ae.of)(null)
              )
            );
          }
          getTokenViewBalance$(t) {
            return this.connectedWalletAddress$.pipe(
              (0, ee.w)((i) =>
                i ? this.tokenBalanceQuery.getViewBalance$(t) : (0, Ae.of)(null)
              )
            );
          }
          persistSourceTokenAmount(t = 0) {
            const i = this.sourceTokenAmountControl.valueChanges.pipe(
                (0, I.U)((r) => ([void 0, null].includes(r) ? 0 : r)),
                (0, Be.h)((r) => !((0 !== r && !r) || this.isSetMaxInProgress)),
                (0, I.U)((r) => +r),
                (0, Re.x)(),
                (0, Ze.b)(200),
                (0, W.b)((r) => {
                  this.pathfinderService.reset(),
                    this.simpleSwapService.setSourceTokenAmount(`${r}`);
                })
              ),
              s = this.simpleSwapQuery.sourceTokenAmount$.pipe(
                (0, qe.T)(t),
                (0, Be.h)((r) => !!r && !this.isSetMaxInProgress),
                (0, W.b)((r) => {
                  this.sourceTokenAmountControl.setValue(r, {
                    emitEvent: !1,
                    onlySelf: !0,
                  });
                })
              ),
              c = (0, Kt.T)(i, s);
            (0, me.O)(
              c,
              "persistSourceTokenAmount",
              this.sourceTokenPersistSubscription
            );
          }
          resubscribeSourceTokenPersisting() {
            this.sourceTokenPersistSubscription.unsubscribe(),
              (this.sourceTokenPersistSubscription = new $.w0()),
              this.persistSourceTokenAmount(1);
          }
          resubscribeSourceTokenOnChainChanges() {
            const t = this.activeConnectionQuery.currentChainId$.pipe(
              (0, qe.T)(1),
              (0, W.b)(() => {
                this.resubscribeSourceTokenPersisting();
              })
            );
            (0, me.O)(
              t,
              "resubscribeSourceTokenOnChainChanges$",
              this.subscription
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(tt.n4),
              e.ɵɵdirectiveInject(nt.u),
              e.ɵɵdirectiveInject(de.G),
              e.ɵɵdirectiveInject(b.q),
              e.ɵɵdirectiveInject(Ue.y),
              e.ɵɵdirectiveInject(Le.N),
              e.ɵɵdirectiveInject(Ht.f),
              e.ɵɵdirectiveInject(ot.Q),
              e.ɵɵdirectiveInject(Ge.O),
              e.ɵɵdirectiveInject(U.r),
              e.ɵɵdirectiveInject(G.uw),
              e.ɵɵdirectiveInject(m.F0),
              e.ɵɵdirectiveInject(m.gz),
              e.ɵɵdirectiveInject(Je.b),
              e.ɵɵdirectiveInject(ce.w)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["swap-form"]],
            decls: 26,
            vars: 44,
            consts: [
              [1, "swap-form-header"],
              [1, "swap-form-actions"],
              [
                "id",
                "swap-box.refresh-button",
                "data-id",
                "swap-box.refresh-button",
                1,
                "refresh-icon",
                "blank-button",
                3,
                "click",
              ],
              [3, "width", "height", "duration"],
              [
                "routerLink",
                "settings",
                "data-id",
                "advanced-settings-button",
                "id",
                "advanced-settings-button",
                1,
                "settings-icon",
              ],
              ["width", "24", "height", "24"],
              [
                0,
                "xlink",
                "href",
                "assets/images/simple/icons/swap-settings.svg#swap-settings",
              ],
              [
                3,
                "formControl",
                "token",
                "tokenBalance",
                "showLock",
                "customTokenLinkString",
                "isSwapForm",
                "isSetMaxActive",
                "setMaxAmount",
              ],
              [4, "tuiLet"],
              [
                1,
                "swap-destination-token",
                3,
                "tokenDecimals",
                "swapTokensData",
                "pathfinderResponse",
                "tokenBalance",
              ],
              [3, "swapInfo", "swapButtonState", "swap"],
              [
                "class",
                "quote-info",
                "data-id",
                "token-swap-info-box",
                "id",
                "token-swap-info-box",
                3,
                "snapshot",
                "routes",
                4,
                "ngIf",
              ],
              [3, "rotatable", "reverseTokensLink"],
              [
                "data-id",
                "token-swap-info-box",
                "id",
                "token-swap-info-box",
                1,
                "quote-info",
                3,
                "snapshot",
                "routes",
              ],
            ],
            template: function (t, i) {
              if (
                (1 & t &&
                  (e.ɵɵelementStart(0, "div", 0),
                  e.ɵɵelement(1, "trade-menu"),
                  e.ɵɵelementStart(2, "div", 1)(3, "button", 2),
                  e.ɵɵlistener("click", function () {
                    return i.manualRefresh();
                  }),
                  e.ɵɵelement(4, "arrow-locator-loading", 3),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(5, "a", 4),
                  e.ɵɵnamespaceSVG(),
                  e.ɵɵelementStart(6, "svg", 5),
                  e.ɵɵelement(7, "use", 6),
                  e.ɵɵelementEnd()()()(),
                  e.ɵɵnamespaceHTML(),
                  e.ɵɵelementStart(8, "token-select-input", 7),
                  e.ɵɵlistener("setMaxAmount", function () {
                    return i.setMaxAmount();
                  }),
                  e.ɵɵpipe(9, "async"),
                  e.ɵɵpipe(10, "async"),
                  e.ɵɵpipe(11, "async"),
                  e.ɵɵpipe(12, "transloco"),
                  e.ɵɵpipe(13, "async"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(14, Gn, 3, 4, "ng-container", 8),
                  e.ɵɵpipe(15, "async"),
                  e.ɵɵelement(16, "swap-destination-token", 9),
                  e.ɵɵpipe(17, "async"),
                  e.ɵɵpipe(18, "async"),
                  e.ɵɵpipe(19, "async"),
                  e.ɵɵpipe(20, "async"),
                  e.ɵɵelementStart(21, "swap-button", 10),
                  e.ɵɵlistener("swap", function () {
                    return i.startSwapFlow();
                  }),
                  e.ɵɵpipe(22, "async"),
                  e.ɵɵpipe(23, "async"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(24, Jn, 2, 4, "quote-info", 11),
                  e.ɵɵpipe(25, "async")),
                2 & t)
              ) {
                let s;
                e.ɵɵadvance(4),
                  e.ɵɵproperty("width", 36)("height", 36)("duration", 10),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("formControl", i.sourceTokenAmountControl)(
                    "token",
                    e.ɵɵpipeBind1(9, 18, i.sourceToken$)
                  )(
                    "tokenBalance",
                    e.ɵɵpipeBind1(10, 20, i.sourceTokenViewBalance$)
                  )("showLock", e.ɵɵpipeBind1(11, 22, i.swapIsLocked$))(
                    "customTokenLinkString",
                    e.ɵɵpipeBind1(12, 24, "uni.swap.you-sell")
                  )("isSwapForm", !0)(
                    "isSetMaxActive",
                    e.ɵɵpipeBind1(13, 26, i.isSetMax$)
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(15, 28, i.isEmbeddedSwap$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "tokenDecimals",
                    null == (s = e.ɵɵpipeBind1(17, 30, i.destinationToken$))
                      ? null
                      : s.decimals
                  )("swapTokensData", e.ɵɵpipeBind1(18, 32, i.swapTokensData$))(
                    "pathfinderResponse",
                    e.ɵɵpipeBind1(19, 34, i.pathfinderResponse$)
                  )(
                    "tokenBalance",
                    e.ɵɵpipeBind1(20, 36, i.destinationTokenBalance$)
                  ),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty(
                    "swapInfo",
                    e.ɵɵpipeBind1(22, 38, i.swapTokensData$)
                  )(
                    "swapButtonState",
                    e.ɵɵpipeBind1(23, 40, i.swapButtonState$)
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(25, 42, i.currentSnapshot$)
                  );
              }
            },
            dependencies: [
              l.O5,
              m.yS,
              kn,
              Tn.g,
              F.NgControlStatus,
              F.FormControlDirective,
              M.Ls,
              Nn,
              Kn.X,
              Vn.Y,
              Hn.q,
              zn.C,
              l.Ov,
              p.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;position:relative}.swap-form-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;margin-top:-8px}.swap-form-actions[_ngcontent-%COMP%]{display:flex;margin-right:-4px}.swap-form-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.quote-info[_ngcontent-%COMP%]{position:absolute;width:100%;top:106%}.refresh-icon[_ngcontent-%COMP%]{margin-right:12px}.settings-icon[_ngcontent-%COMP%]{padding:6px}.refresh-icon[_ngcontent-%COMP%], .settings-icon[_ngcontent-%COMP%]{cursor:pointer;width:36px;height:36px;border-radius:12px;transition:background .2s}.refresh-icon[_ngcontent-%COMP%]:hover, .refresh-icon[_ngcontent-%COMP%]:focus, .settings-icon[_ngcontent-%COMP%]:hover, .settings-icon[_ngcontent-%COMP%]:focus{background:var(--1inch-common-btn-bg-03)}.swap-destination-token[_ngcontent-%COMP%]{margin-bottom:16px}@media (max-width: 418px){.quote-info[_ngcontent-%COMP%]{bottom:-85px}}",
            ],
          })),
          n
        );
      })();
      var Yn = o(98621);
      let Zn = (() => {
        class n {
          constructor(t, i, s, c, r, d) {
            (this.router = t),
              (this.activeConnectionQuery = i),
              (this.pathfinderService = s),
              (this.simpleSwapStore = c),
              (this.tokensQuery = r),
              (this.simpleRoutingService = d);
          }
          canActivate(t, i) {
            var s;
            const { sourceToken: c, destinationToken: r } =
              (null === (s = t.parent) || void 0 === s ? void 0 : s.params) ||
              {};
            if (!c && !r) return this.getDefaultFallbackUrlTree();
            const d = this.tokensQuery.findTokenBySymbolOrAddress(c, !1),
              g = this.tokensQuery.findTokenBySymbolOrAddress(r, !1);
            if (!d || !g) return this.getDefaultFallbackUrlTree();
            this.pathfinderService.reset();
            const { destinationTokenAmount: S } =
              this.simpleSwapStore.getValue();
            return (
              this.simpleSwapStore.update({
                sourceToken: g,
                destinationToken: d,
                sourceTokenAmount: S || "1",
                isSetMax: !1,
              }),
              this.simpleRoutingService.getSwapUrl(g.symbol, d.symbol)
            );
          }
          getDefaultFallbackUrlTree() {
            return this.simpleRoutingService.getCurrentSwapUrl();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵinject(m.F0),
              e.ɵɵinject(U.r),
              e.ɵɵinject(ot.Q),
              e.ɵɵinject(Yn.jJ),
              e.ɵɵinject(lt.d),
              e.ɵɵinject(ue.E)
            );
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({
            token: n,
            factory: n.ɵfac,
            providedIn: L.o,
          })),
          n
        );
      })();
      var qn = o(17114),
        eo = o(56747);
      let to = (() => {
          class n {
            constructor(t, i, s) {
              (this.router = t),
                (this.pathfinderQuery = i),
                (this.acceptTermsService = s);
            }
            canActivate(t, i) {
              return this.acceptTermsService.checkTermsAccepting(0).pipe(
                (0, I.U)(() => {
                  if (this.pathfinderQuery.getValue().pathfinderResponse)
                    return !0;
                  const c = i.url.slice(0, i.url.indexOf("/confirm"));
                  return this.router.createUrlTree([c]);
                }),
                (0, qn.K)(() => (0, Ae.of)(!1))
              );
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵinject(m.F0),
                e.ɵɵinject(it.o),
                e.ɵɵinject(eo.N)
              );
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: L.o,
            })),
            n
          );
        })(),
        no = (() => {
          class n {
            constructor(t, i, s, c) {
              (this.router = t),
                (this.simpleSwapQuery = i),
                (this.simpleRoutingService = s),
                (this.otcModeService = c);
            }
            canActivate(t, i) {
              return (
                this.otcModeService.resetOTCModeWhenItSet(),
                this.simpleRoutingService.getSwapUrl(
                  this.simpleSwapQuery.sourceToken.symbol,
                  this.simpleSwapQuery.destinationToken.symbol
                )
              );
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵinject(m.F0),
                e.ɵɵinject(de.G),
                e.ɵɵinject(ue.E),
                e.ɵɵinject(Ie.N)
              );
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({
              token: n,
              factory: n.ɵfac,
              providedIn: L.o,
            })),
            n
          );
        })();
      var ht = o(16562),
        oo = o(95496);
      const io = [
        {
          path: "",
          component: Ft,
          canActivate: [At],
          children: [
            {
              path: "",
              pathMatch: "full",
              component: class {},
              canActivate: [no],
            },
            {
              path: ":sourceToken/:destinationToken",
              component: Ut,
              canActivate: [
                (() => {
                  class n extends ht.B {
                    constructor(t, i, s, c, r, d) {
                      super(t, i, s, r),
                        (this.router = t),
                        (this.activeConnectionQuery = i),
                        (this.tokensSearchService = s),
                        (this.simpleRoutingService = c),
                        (this.tradeNavigationStateService = r),
                        (this.simpleSwapService = d),
                        (this.tradeFormKind = ht.p.SWAP),
                        (this.tradeNavigationKind = De.p.SIMPLE_SWAP);
                    }
                    setNavigationState(t) {
                      this.simpleSwapService.setNavigationState(t);
                    }
                    getDefaultTradeUrl() {
                      return this.simpleRoutingService.getDefaultSwapUrl();
                    }
                    getImportUrl(t) {
                      return this.router.createUrlTree([
                        this.activeConnectionQuery.currentChainId,
                        "swap",
                        ...t.url.map((i) => i.path),
                        "import-token",
                      ]);
                    }
                    getTradeUrlForPair(t) {
                      return this.router.createUrlTree([
                        this.activeConnectionQuery.currentChainId,
                        "swap",
                        t.sourceToken,
                        t.destinationToken,
                      ]);
                    }
                  }
                  return (
                    (n.ɵfac = function (t) {
                      return new (t || n)(
                        e.ɵɵinject(m.F0),
                        e.ɵɵinject(U.r),
                        e.ɵɵinject(oo.M),
                        e.ɵɵinject(ue.E),
                        e.ɵɵinject(De.W),
                        e.ɵɵinject(b.q)
                      );
                    }),
                    (n.ɵprov = e.ɵɵdefineInjectable({
                      token: n,
                      factory: n.ɵfac,
                      providedIn: L.o,
                    })),
                    n
                  );
                })(),
              ],
              children: [
                { path: "", component: Xn },
                { path: "reverse", component: class {}, canActivate: [Zn] },
                { path: "confirm", component: $t.F, canActivate: [to] },
                {
                  path: "select-source-token",
                  component: Xe.D,
                  data: { role: "source" },
                },
                {
                  path: "select-destination-token",
                  component: Xe.D,
                  data: { role: "destination" },
                },
                { path: "import-token", component: Bt.Z },
                {
                  path: "settings",
                  data: { domain: "uni-swap" },
                  component: jt.q,
                  children: Rt.y,
                },
              ],
            },
          ],
        },
      ];
      let ao = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            providers: [
              Ge.O,
              ze,
              We.u,
              Ot.j,
              Ne,
              H.e,
              { provide: z.v, useExisting: Ne },
            ],
            imports: [
              m.Bz.forChild(io),
              L.o,
              Se,
              re,
              Mt,
              Ce.B,
              se.I,
              K.r,
              ge.Y,
              Q.c,
              we.W,
              _._,
              fe.JF,
              j._,
              ae.Q,
              V.w,
            ],
          })),
          n
        );
      })();
    },
  },
]);