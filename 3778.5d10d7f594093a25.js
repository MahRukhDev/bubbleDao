"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [3778],
  {
    66110: (j, S, n) => {
      n.d(S, { q: () => O });
      var t = n(51109),
        y = n(25460),
        P = n(77065),
        a = n(78394),
        c = n(12725),
        d = n(92872),
        p = n(83389);
      let M = (() => {
          class i {
            constructor(o, g) {
              (this.ipfsLink = o),
                (this.sanitizer = g),
                (this.ipfsLinkUrl = this.sanitizer.bypassSecurityTrustUrl(
                  this.ipfsLink
                ));
            }
          }
          return (
            (i.ɵfac = function (o) {
              return new (o || i)(
                t.ɵɵdirectiveInject(P.WI),
                t.ɵɵdirectiveInject(a.DomSanitizer)
              );
            }),
            (i.ɵcmp = t.ɵɵdefineComponent({
              type: i,
              selectors: [["app-available-only-on-ipfs-dialog"]],
              decls: 30,
              vars: 1,
              consts: [
                ["mat-dialog-content", "", 1, "only-on-ipfs-dialog"],
                ["mat-dialog-actions", "", 1, "fix-mat-dialog-close"],
                [
                  "mat-icon-button",
                  "",
                  "mat-dialog-close",
                  "",
                  1,
                  "only-on-ipfs-dialog-close-icon",
                ],
                ["width", "24", "height", "24"],
                [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
                [
                  "transloco",
                  "onlyOnIpfsDialog.title",
                  1,
                  "only-on-ipfs-dialog-title",
                ],
                [1, "only-on-ipfs-dialog-content"],
                [
                  "transloco",
                  "onlyOnIpfsDialog.features-such-as",
                  1,
                  "only-on-ipfs-dialog-first-text",
                ],
                [1, "only-on-ipfs-dialog-list"],
                ["transloco", "onlyOnIpfsDialog.feature-first"],
                ["transloco", "onlyOnIpfsDialog.are-no-longer-available"],
                [1, "only-on-ipfs-dialog-second-text"],
                ["transloco", "onlyOnIpfsDialog.these-features-are-available"],
                [3, "href"],
                ["transloco", "onlyOnIpfsDialog.link"],
                [
                  "mat-dialog-actions",
                  "",
                  1,
                  "only-on-ipfs-dialog-buttons-wrap",
                ],
                ["color", "blue", "mat-dialog-close", "", "fullWidth", "true"],
                ["transloco", "txStatusDialog.dismiss"],
              ],
              template: function (o, g) {
                1 & o &&
                  (t.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2),
                  t.ɵɵnamespaceSVG(),
                  t.ɵɵelementStart(3, "svg", 3),
                  t.ɵɵelement(4, "use", 4),
                  t.ɵɵelementEnd()()(),
                  t.ɵɵnamespaceHTML(),
                  t.ɵɵelementStart(5, "h1", 5),
                  t.ɵɵtext(6, " Feature is available only on IPFS "),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(7, "div", 6)(8, "p", 7),
                  t.ɵɵtext(9, "Features, such as:"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(10, "ul", 8)(11, "li", 9),
                  t.ɵɵtext(12, "Liquidity protocol version 1.0"),
                  t.ɵɵelementEnd()(),
                  t.ɵɵelementStart(13, "p", 10),
                  t.ɵɵtext(
                    14,
                    " are no longer available in the current version for 1inch dApp. "
                  ),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(15, "p", 11)(16, "span", 12),
                  t.ɵɵtext(
                    17,
                    " These features are available on the legacy dApp version that you can access using "
                  ),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(18, "span"),
                  t.ɵɵtext(19, "\xa0"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(20, "a", 13),
                  t.ɵɵtext(21, "IPFS"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(22, "span"),
                  t.ɵɵtext(23, "\xa0"),
                  t.ɵɵelementEnd(),
                  t.ɵɵelementStart(24, "span", 14),
                  t.ɵɵtext(25, "link."),
                  t.ɵɵelementEnd()()(),
                  t.ɵɵelementStart(26, "div", 15)(27, "app-button", 16)(
                    28,
                    "span",
                    17
                  ),
                  t.ɵɵtext(29, "Dismiss"),
                  t.ɵɵelementEnd()()()()),
                  2 & o &&
                    (t.ɵɵadvance(20),
                    t.ɵɵproperty("href", g.ipfsLinkUrl, t.ɵɵsanitizeUrl));
              },
              dependencies: [P.ZT, P.xY, P.H8, c.KI, d.lW, p.r],
              styles: [
                "@media (max-width: 520px){[_nghost-%COMP%]{display:block;width:calc(100% - 32px);margin:0 auto}}.only-on-ipfs-dialog[_ngcontent-%COMP%]{width:480px;max-height:100%;padding:32px!important;border-radius:20px;border:none;position:relative;background:var(--1inch-bg-02)}.only-on-ipfs-dialog-close-icon[_ngcontent-%COMP%]{background:transparent;color:var(--1inch__ui-02)}@media (min-width: 720px){.only-on-ipfs-dialog-close-icon[_ngcontent-%COMP%]:hover{background:transparent;color:var(--1inch__ui-02)}}.only-on-ipfs-dialog-title[_ngcontent-%COMP%]{margin:0 0 32px}.only-on-ipfs-dialog-content[_ngcontent-%COMP%]{color:var(--1inch__ui-02);line-height:20px}.only-on-ipfs-dialog-first-text[_ngcontent-%COMP%]{margin-bottom:8px}.only-on-ipfs-dialog-list[_ngcontent-%COMP%]{margin-bottom:8px;padding-left:32px}.only-on-ipfs-dialog-second-text[_ngcontent-%COMP%]{margin-top:24px}.only-on-ipfs-dialog-buttons-wrap[_ngcontent-%COMP%]{margin-top:32px}@media (max-width: 720px){.only-on-ipfs-dialog[_ngcontent-%COMP%]{width:auto}}@media (max-width: 520px){.only-on-ipfs-dialog[_ngcontent-%COMP%]{padding:16px!important}.only-on-ipfs-dialog-title[_ngcontent-%COMP%]{margin:0 0 16px}.only-on-ipfs-dialog-content[_ngcontent-%COMP%]{font-size:14px;line-height:18px}.only-on-ipfs-dialog-second-text[_ngcontent-%COMP%], .only-on-ipfs-dialog-buttons-wrap[_ngcontent-%COMP%]{margin-top:16px}}",
              ],
              changeDetection: 0,
            })),
            i
          );
        })(),
        u = (() => {
          class i {
            constructor(o, g) {
              (this.elementRefRef = o), (this.matDialog = g);
            }
            onClick(o) {
              o.stopImmediatePropagation(),
                o.preventDefault(),
                this.matDialog.open(M, { data: this.legacyIpfsLink });
            }
          }
          return (
            (i.ɵfac = function (o) {
              return new (o || i)(
                t.ɵɵdirectiveInject(t.ElementRef),
                t.ɵɵdirectiveInject(P.uw)
              );
            }),
            (i.ɵdir = t.ɵɵdefineDirective({
              type: i,
              selectors: [["", "legacyIpfsLink", ""]],
              hostBindings: function (o, g) {
                1 & o &&
                  t.ɵɵlistener("click", function (U) {
                    return g.onClick(U);
                  });
              },
              inputs: { legacyIpfsLink: "legacyIpfsLink" },
            })),
            i
          );
        })(),
        O = (() => {
          class i {
            onV1Click(o) {
              o.stopImmediatePropagation();
            }
          }
          return (
            (i.ɵfac = function (o) {
              return new (o || i)();
            }),
            (i.ɵcmp = t.ɵɵdefineComponent({
              type: i,
              selectors: [["app-lp-version-switch"]],
              decls: 10,
              vars: 0,
              consts: [
                [
                  "aria-label",
                  "Quick Switch for pathfinder Settings",
                  "name",
                  "quickSwitch",
                  "value",
                  "1.1",
                  1,
                  "lp-switch-wrap",
                ],
                ["value", "1.1", 1, "lp-switch-value"],
                [1, "lp-switch-value-text"],
                ["value", "1.0", 1, "lp-switch-value"],
                [
                  "legacyIpfsLink",
                  "https://bafybeihtwrwb6jniwe7ojxduul7sqkflokloqdj4jkuh3jr4sewwnbczf4.ipfs.dweb.link/",
                  1,
                  "lp-switch-value-text",
                ],
                ["width", "16", "height", "16", 1, "lp-switch-value-icon"],
                [
                  0,
                  "xlink",
                  "href",
                  "assets/images/icons/external-link.svg#link",
                ],
              ],
              template: function (o, g) {
                1 & o &&
                  (t.ɵɵelementStart(0, "mat-button-toggle-group", 0)(
                    1,
                    "mat-button-toggle",
                    1
                  )(2, "span", 2),
                  t.ɵɵtext(3, "v 1.1"),
                  t.ɵɵelementEnd()(),
                  t.ɵɵelementStart(4, "mat-button-toggle", 3)(5, "span", 4)(
                    6,
                    "span"
                  ),
                  t.ɵɵtext(7, "v 1.0"),
                  t.ɵɵelementEnd(),
                  t.ɵɵnamespaceSVG(),
                  t.ɵɵelementStart(8, "svg", 5),
                  t.ɵɵelement(9, "use", 6),
                  t.ɵɵelementEnd()()()());
              },
              dependencies: [y.A9, y.Yi, u],
              styles: [
                ".lp-switch-wrap[_ngcontent-%COMP%]{background:var(--1inch-bg-09);border-radius:12px;box-shadow:var(--1inch-shadow-03);height:40px;padding:2px}.lp-switch-value[_ngcontent-%COMP%]{width:50%;padding:0;border-radius:10px}.lp-switch-value[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{padding:0!important}.lp-switch-value-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:36px;line-height:36px;padding:5px 22px}.lp-switch-value-icon[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:4px;color:var(--1inch__ui-02)}.lp-switch-wrap[_ngcontent-%COMP%]   .mat-button-toggle.mat-button-toggle-checked[_ngcontent-%COMP%]{background:var(--1inch-btn-bg-01)}",
              ],
              changeDetection: 0,
            })),
            i
          );
        })();
    },
    46773: (j, S, n) => {
      n.d(S, { H: () => c });
      var t = n(38143),
        y = n(25460),
        P = n(53686),
        a = n(51109);
      let c = (() => {
        class d {}
        return (
          (d.ɵfac = function (M) {
            return new (M || d)();
          }),
          (d.ɵmod = a.ɵɵdefineNgModule({ type: d })),
          (d.ɵinj = a.ɵɵdefineInjector({ imports: [t.ez, y.vV, P.u] })),
          d
        );
      })();
    },
    20049: (j, S, n) => {
      n.d(S, { Bv: () => c, NN: () => d, Nv: () => a });
      var t = n(47384),
        P = n(8713);
      function a(u, O, i, h, o, g) {
        const T = +(0, t.formatUnits)(u, 18),
          U = +(0, t.formatUnits)(O, 18),
          f = +(0, t.formatUnits)(h, 18),
          v = +(0, t.formatUnits)(i, 18),
          L =
            g === P.u9.deposit
              ? ((T + U) * v * 86400) / (f + U)
              : (T * v * 86400) / f;
        return {
          earnedPerDay: L.toString(),
          earnedPerDayFiat: (L * +o).toFixed(2),
          earnedPerMonth: (30 * L).toString(),
          earnedPerMonthFiat: (30 * L * +o).toFixed(2),
          earnedPerYear: (365 * L).toString(),
          earnedPerYearFiat: (365 * L * +o).toFixed(2),
        };
      }
      function c(u) {
        return {
          farmAddress: u.farmingAddress,
          poolAddress: u.poolAddress,
          action: u.action,
        };
      }
      function d(u, O, i, h, o) {
        const v = ((86400 * +u * O) / +i / (+h / 1e18)) * 365;
        return o ? 100 * v : v;
      }
    },
    5e3: (j, S, n) => {
      n.d(S, { L: () => g });
      var t = n(3012),
        y = n(64736),
        P = n(76327),
        a = n(18084),
        c = n(15674),
        d = n(17114),
        p = n(76219),
        M = n(73836),
        u = n(95605),
        O = n(51109),
        i = n(78336),
        h = n(24124),
        o = n(83140);
      let g = (() => {
        class T {
          constructor(f, v) {
            (this.http = f), (this.activeConnectionQuery = v);
          }
          getFarmingPoolData(f) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("farmingEndpoint")
              .pipe(
                (0, y.U)((v) =>
                  f ? `${v}/poolDetails/${f}` : `${v}/poolDetails`
                ),
                (0, P.w)((v) => this.http.get(v)),
                (0, y.U)((v) =>
                  v.map((r) => {
                    var B, W, L, $, K;
                    if (r.farmingAddress === p.D_) {
                      r.rewardRates &&
                        r.rewardRates.push(Object.assign({}, r.rewardRates[0]));
                      const R =
                        null === (B = r.earnedAmounts) || void 0 === B
                          ? void 0
                          : B[0];
                      (r.earnedAmounts = [{ token: u.r_, value: "0" }, R]),
                        (r = this.nullify1nchApy(r));
                    }
                    if (
                      (p.b3.includes(r.farmingAddress) &&
                        ((r.rewardRate =
                          null ===
                            (L =
                              null === (W = r.rewardRates) || void 0 === W
                                ? void 0
                                : W[0]) || void 0 === L
                            ? void 0
                            : L.value),
                        (r.earnedAmount =
                          null ===
                            (K =
                              null === ($ = r.earnedAmounts) || void 0 === $
                                ? void 0
                                : $[0]) || void 0 === K
                            ? void 0
                            : K.value)),
                      r.farmingAddress === p.ih &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      r.farmingAddress === p.$L)
                    ) {
                      const R = Date.UTC(2021, 4, 7, 23, 59, 59);
                      Date.now() > R &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r)));
                    }
                    if (
                      (r.farmingAddress === p.jJ &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      r.farmingAddress === p.K)
                    ) {
                      const R = Date.UTC(2021, 3, 16, 22, 0, 0);
                      Date.now() > R &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r)));
                    }
                    return (
                      r.farmingAddress === p.xh &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      r.farmingAddress === p.gf &&
                        (r = this.nullifyExtraApy(r)),
                      r.farmingAddress === p.hD &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      r.farmingAddress === p.iY &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      r.farmingAddress === p.Is &&
                        ((r = this.nullify1nchApy(r)),
                        (r = this.nullifyExtraApy(r))),
                      p.Fv.includes(r.farmingAddress) && (r.rewardRate = "0"),
                      r
                    );
                  })
                ),
                (0, a.V)(3e3),
                (0, c.X)(2),
                (0, d.K)((v) => (o.error(v), (0, t.of)([])))
              );
          }
          nullify1nchApy(f) {
            return (
              (f.rewardRate = "0"),
              f.rewardRates && (f.rewardRates[0].value = "0"),
              f
            );
          }
          nullifyExtraApy(f) {
            return (
              (f.rewardRate = "0"),
              f.rewardRates && (f.rewardRates[1].value = "0"),
              f
            );
          }
          getOpiumReward(f) {
            return this.http
              .get(`${M.N.farmingOpiumRewardEndpoint}?address=${f}`)
              .pipe(
                (0, a.V)(3e3),
                (0, c.X)(2),
                (0, y.U)((r) => r.rewardUsd),
                (0, d.K)((r) => (o.error(r), (0, t.of)(0)))
              );
          }
        }
        return (
          (T.ɵfac = function (f) {
            return new (f || T)(O.ɵɵinject(i.eN), O.ɵɵinject(h.r));
          }),
          (T.ɵprov = O.ɵɵdefineInjectable({
            token: T,
            factory: T.ɵfac,
            providedIn: "root",
          })),
          T
        );
      })();
    },
    76006: (j, S, n) => {
      n.d(S, { M: () => Ue });
      var t = n(47384),
        y = n(30606),
        P = n(1753),
        a = n(94748),
        c = n(3012),
        d = n(53886),
        p = n(54185),
        M = n(67805),
        u = n(8);
      const i = (k, N) => (k.push(N), k);
      var o = n(76327),
        g = n(64736),
        T = n(77724),
        U = n(83358),
        f = n(48535),
        v = n(5327),
        r = n(55468),
        B = n(30137),
        W = n(93475),
        L = n(88647),
        $ = n(82868),
        K = n(70299),
        R = n(90813),
        l = n(95605),
        G = n(95021),
        H = n(64057),
        Q = n(67701),
        D = n(20049),
        I = n(51109),
        Ae = n(93130),
        xe = n(58913),
        Me = n(20803),
        Oe = n(48688),
        Se = n(5e3),
        Te = n(73013),
        Ce = n(93587),
        we = n(24124),
        Re = n(41912),
        Ie = n(33246),
        Le = n(19810),
        ke = n(1146);
      const X = {
        address: "",
        image:
          "https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png",
        symbol: "LP TOKEN",
        name: "LP-TOKEN",
        decimals: 18,
      };
      let Ue = (() => {
        class k {
          constructor(s, m, E, A, x, b, V, Y, z, J, q, ee, ne) {
            (this.walletConnectionQuery = s),
              (this.transactionHistoryQuery = m),
              (this.pricesQuery = E),
              (this.farmingService = A),
              (this.farmingApiService = x),
              (this.ethContractService = b),
              (this.farmingPoolsService = V),
              (this.activeConnectionQuery = Y),
              (this.simpleSendTransactionService = z),
              (this.contractAddressService = J),
              (this.approveTransactionService = q),
              (this.uiPoolsQuery = ee),
              (this.createPendingTxService = ne);
          }
          startPipelines() {
            const s = (0, y.H)(0, 15e3);
            (0, P.T)(this.transactionHistoryQuery.newTransactionMined$, s)
              .pipe(
                (0, o.w)(() =>
                  this.activeConnectionQuery.isRestrainedNetwork
                    ? a.C
                    : (0, c.of)(null)
                ),
                (0, o.w)(() =>
                  (0, d.a)([
                    this.farmingApiService.getFarmingPoolData(
                      this.walletConnectionQuery.walletAddress
                    ),
                    this.pricesQuery.price2usd$,
                    this.pricesQuery.selectTokenUsdPrice(l.sx),
                    this.activeConnectionQuery.currentChainId$.pipe(
                      (0, o.w)((x) =>
                        (0, d.a)([
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.YA)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? (0, c.of)(0)
                            : this.pricesQuery.selectTokenUsdPrice(l.Bx),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.EW)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.nd)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.Di)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.M2)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.zs)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.B$)
                            : (0, c.of)(0),
                          x === v.$L.etherumMainnet
                            ? this.pricesQuery.selectTokenUsdPrice(l.cA)
                            : (0, c.of)(0),
                        ])
                      )
                    ),
                  ])
                ),
                (0, o.w)(([A, x, b, V]) => {
                  const [Y, z, J, q, ee, ne, _e, Fe, De] = V,
                    Be = A.map((e) =>
                      (0, d.a)([
                        (0, c.of)(e),
                        this.farmingPoolsService.getLpTokenPrice(e, x),
                      ])
                    );
                  return (0, c.of)(Be).pipe(
                    (0, p.z)((e) => e),
                    (0, p.z)((e) => e),
                    (0, g.U)(([e, _]) => {
                      var te,
                        re,
                        oe,
                        ie,
                        se,
                        ae,
                        ce,
                        le,
                        de,
                        ue,
                        ve,
                        me,
                        fe,
                        ge,
                        pe,
                        he,
                        ye,
                        Pe,
                        Ee;
                      let Z = 0,
                        F = 0;
                      if (b) {
                        const We = (0, t.formatUnits)(e.rewardRate, 18);
                        if (
                          ((Z = (0, D.NN)(We, b, _, e.totalStaked)),
                          (null == e ? void 0 : e.token0) === l.sx &&
                            (null == e ? void 0 : e.token1) === l.EW &&
                            (null ===
                              (te = null == e ? void 0 : e.rewardRates) ||
                            void 0 === te
                              ? void 0
                              : te.length) > 1)
                        ) {
                          const C =
                              null ===
                                (oe =
                                  null === (re = e.rewardRates) || void 0 === re
                                    ? void 0
                                    : re[1]) || void 0 === oe
                                ? void 0
                                : oe.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, J, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.YA
                        ) {
                          const C =
                              null ===
                                (se =
                                  null === (ie = e.rewardRates) || void 0 === ie
                                    ? void 0
                                    : ie[1]) || void 0 === se
                                ? void 0
                                : se.value,
                            w = (0, t.formatUnits)(C, 9);
                          F = (0, D.NN)(w, Y, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.Bx
                        ) {
                          const C =
                              null ===
                                (ce =
                                  null === (ae = e.rewardRates) || void 0 === ae
                                    ? void 0
                                    : ae[1]) || void 0 === ce
                                ? void 0
                                : ce.value,
                            w = (0, t.formatUnits)(C, 8);
                          F = (0, D.NN)(w, z, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.nd
                        ) {
                          const C =
                              null ===
                                (de =
                                  null === (le = e.rewardRates) || void 0 === le
                                    ? void 0
                                    : le[1]) || void 0 === de
                                ? void 0
                                : de.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, q, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.Di
                        ) {
                          const C =
                              null ===
                                (ve =
                                  null === (ue = e.rewardRates) || void 0 === ue
                                    ? void 0
                                    : ue[1]) || void 0 === ve
                                ? void 0
                                : ve.value,
                            w = (0, t.formatUnits)(C, 8);
                          F = (0, D.NN)(w, ee, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.M2
                        ) {
                          const C =
                              null ===
                                (fe =
                                  null === (me = e.rewardRates) || void 0 === me
                                    ? void 0
                                    : me[1]) || void 0 === fe
                                ? void 0
                                : fe.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, ne, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.sx &&
                          (null == e ? void 0 : e.token1) === l.zs
                        ) {
                          const C =
                              null ===
                                (pe =
                                  null === (ge = e.rewardRates) || void 0 === ge
                                    ? void 0
                                    : ge[1]) || void 0 === pe
                                ? void 0
                                : pe.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, _e, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.r_ &&
                          (null == e ? void 0 : e.token1) === l.B$
                        ) {
                          const C =
                              null ===
                                (ye =
                                  null === (he = e.rewardRates) || void 0 === he
                                    ? void 0
                                    : he[1]) || void 0 === ye
                                ? void 0
                                : ye.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, Fe, _, e.totalStaked, !0);
                        }
                        if (
                          (null == e ? void 0 : e.token0) === l.B4 &&
                          (null == e ? void 0 : e.token1) === l.K8
                        ) {
                          const C =
                              null ===
                                (Ee =
                                  null === (Pe = e.rewardRates) || void 0 === Pe
                                    ? void 0
                                    : Pe[1]) || void 0 === Ee
                                ? void 0
                                : Ee.value,
                            w = (0, t.formatUnits)(C, 18);
                          F = (0, D.NN)(w, De, _, e.totalStaked, !0);
                        }
                        (null == e ? void 0 : e.token0) === l.r_ &&
                          (null == e ? void 0 : e.token1) === l.nd &&
                          ((Z = 0), (F = 0)),
                          (null == e ? void 0 : e.token1) === l.cA && (Z = 0);
                      }
                      return {
                        poolAddress: e.poolAddress,
                        farmingAddress: e.farmingAddress,
                        token0Address: e.token0,
                        token1Address: e.token1,
                        poolBalance: e.poolBalance,
                        poolStaked: e.poolStaked,
                        totalStaked: e.totalStaked,
                        allowance: e.allowance,
                        earnedAmount: e.earnedAmount,
                        earnedAmounts: e.earnedAmounts,
                        rewardRate: e.rewardRate,
                        lpTokenPrices: _,
                        farmingPoolData: {
                          slippageFee: e.slippageFee,
                          fee: e.fee,
                          decayPeriod: e.decayPeriod,
                        },
                        apy: Z,
                        extraApy: F,
                        poolsTotalSupply: e.poolTotalSupply,
                        reserve0: e.reserve0,
                        reserve1: e.reserve1,
                      };
                    }),
                    (function h() {
                      return (0, u.e)((k, N) => {
                        (function O(k, N) {
                          return (0, u.e)(
                            (0, M.U)(k, N, arguments.length >= 2, !1, !0)
                          );
                        })(
                          i,
                          []
                        )(k).subscribe(N);
                      });
                    })()
                  );
                }),
                (0, T.b)((A) => {
                  this.farmingService.updateData(A);
                })
              )
              .subscribe({ error: (A) => (0, $.eK)(A, "lc0006") });
          }
          approveToFarmingContract(s, m, E) {
            const A =
                E in r.a4
                  ? this.contractAddressService.getContractAddress(E)
                  : E,
              x = this.approveTransactionService.contractApproveTransaction({
                txType: "authorize",
                txSubType: Q.E.approveFarming,
                meta: { approvedForAddress: m, asset: X },
                contractAddress: m,
                spenderAddress: A,
                amount: s,
              });
            (0, R.O)(x, "approveToFarmingContract$");
          }
          stake(s, m, E) {
            const A = this.createDepositGAEvent(E),
              x = this.sendRewardsTransaction(
                m,
                "stake",
                [s],
                "stake",
                Q.E.stakeFarming,
                { asset: X },
                s,
                A
              );
            (0, R.O)(x, "farmingStake$");
          }
          withdraw(s, m, E) {
            const A = this.createWithdrawGAEvent(E),
              x = this.sendRewardsTransaction(
                m,
                "withdraw",
                [s],
                "unstake",
                Q.E.withdrawFarming,
                { asset: X },
                s,
                A
              );
            (0, R.O)(x, "farmingWithdraw$");
          }
          exit(s) {
            const m = this.sendRewardsTransaction(
              s,
              "exit",
              [],
              "unstake",
              Q.E.exitFarming,
              { asset: X },
              W.Y
            );
            (0, R.O)(m, "farmingExit$");
          }
          getReward(s) {
            const m = this.sendRewardsTransaction(
              s,
              "getReward",
              [],
              "claim",
              Q.E.getRewardFarming,
              null,
              W.Y
            );
            (0, R.O)(m, "farmingGetReward$");
          }
          geMultiFarmingReward(s) {
            const m = this.sendGetAllRewardsTransaction(
              s,
              "getAllRewards",
              W.Y
            );
            (0, R.O)(m, "geMultiFarmingReward$");
          }
          sendRewardsTransaction(s, m, E, A, x, b, V, Y) {
            return (0, G.p4)(
              this.ethContractService.getContractEncodeABI(
                f._4.FarmingRewardsABI,
                s,
                m,
                E
              )
            ).pipe(
              (0, o.w)((z) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: s, data: z },
                  this.createPendingTxService.getPendingTxFactory({
                    type: A,
                    subType: x,
                    amount: V.toString(),
                    meta: b,
                  }),
                  L.qP,
                  Y
                )
              ),
              (0, U.q)(1)
            );
          }
          sendGetAllRewardsTransaction(s, m, E) {
            return (0, G.p4)(
              this.ethContractService.getContractEncodeABI(
                f._4.MultiFarmingRewardsABI,
                s,
                m
              )
            ).pipe(
              (0, o.w)((A) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: s, data: A },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "claim",
                    subType: Q.E.getRewardFarming,
                    amount: E.toString(),
                    meta: null,
                  })
                )
              ),
              (0, U.q)(1)
            );
          }
          createDepositGAEvent(s) {
            const m = this.uiPoolsQuery.getEntity(s.poolAddress.toLowerCase());
            if (m)
              try {
                return new K.Z(
                  "deposit_simplified",
                  {
                    poolName: `${m.token0.symbol}-${m.token1.symbol}`,
                    lpTokenAmount: (0, B.kg)(s.selectedValue, 18),
                    lpTokenUsdValue: s.selectedValueFiat,
                  },
                  +s.selectedValueFiat
                );
              } catch (E) {
                return void (0, H.H)("Error when deposit farming", E);
              }
          }
          createWithdrawGAEvent(s) {
            const m = this.uiPoolsQuery.getEntity(s.poolAddress.toLowerCase());
            if (m)
              try {
                const E =
                    +s.totalStakedInFarming - +(0, B.kg)(s.selectedValue, 18),
                  A = +E.toFixed(2) > 0;
                return new K.Z("withdrawal_simplified", {
                  poolName: `${m.token0.symbol}-${m.token1.symbol}`,
                  lpTokenAmount: (0, B.kg)(s.selectedValue, 18),
                  lpTokenUsdValue: s.selectedValueFiat,
                  stayedFarming: A,
                  stayedFarmingAmount: E.toFixed(2),
                });
              } catch (E) {
                return void (0, H.H)("Error when withdraw farming", E);
              }
          }
        }
        return (
          (k.ɵfac = function (s) {
            return new (s || k)(
              I.ɵɵinject(Ae.r),
              I.ɵɵinject(xe.x),
              I.ɵɵinject(Me.u),
              I.ɵɵinject(Oe.L),
              I.ɵɵinject(Se.L),
              I.ɵɵinject(Te.u),
              I.ɵɵinject(Ce.R),
              I.ɵɵinject(we.r),
              I.ɵɵinject(L.RW),
              I.ɵɵinject(Re.O),
              I.ɵɵinject(Ie.f),
              I.ɵɵinject(Le.z),
              I.ɵɵinject(ke.B)
            );
          }),
          (k.ɵprov = I.ɵɵdefineInjectable({
            token: k,
            factory: k.ɵfac,
            providedIn: "root",
          })),
          k
        );
      })();
    },
    8713: (j, S, n) => {
      n.d(S, { i7: () => M, rV: () => a, u9: () => c });
      var t = n(48163),
        y = n(52275),
        P = n(51109),
        a = (() => {
          return (
            ((u = a || (a = {})).walletDisconnected = "wallet_disconnected"),
            (u.ok = "ok"),
            (u.notEnoughBalance = "not_enough_balance"),
            a
          );
          var u;
        })(),
        c = (() => {
          return (
            ((u = c || (c = {})).deposit = "deposit"),
            (u.withdraw = "withdraw"),
            c
          );
          var u;
        })();
      const d = {
        farmingAddress: "",
        poolAddress: "",
        yourBalanceOrStaked: "0",
        yourStakedOrBalance: "0",
        earnedPerDay: "0",
        earnedPerDayFiat: "0",
        earnedPerMonth: "0",
        earnedPerMonthFiat: "0",
        earnedPerYear: "0",
        earnedPerYearFiat: "0",
        selectedValueFiatUI: "0",
        selectedValue: "0x0",
        headerText: "Deposit",
        topInputText: "Balance",
        bottomText: "You Staked",
        buttonText: "Deposit",
        action: "deposit",
        buttonState: "wallet_disconnected",
      };
      let M = class extends y.yh {
        constructor() {
          super(
            (function p() {
              return d;
            })()
          );
        }
      };
      (M.ɵfac = function (O) {
        return new (O || M)();
      }),
        (M.ɵprov = P.ɵɵdefineInjectable({ token: M, factory: M.ɵfac })),
        (M = (0, t.__decorate)([(0, y.yC)({ name: "action-deposit" })], M));
    },
    48688: (j, S, n) => {
      n.d(S, { L: () => P });
      var t = n(51109),
        y = n(47809);
      let P = (() => {
        class a {
          constructor(d) {
            this.farmingStore = d;
          }
          updateData(d) {
            this.farmingStore.upsertMany(d);
          }
        }
        return (
          (a.ɵfac = function (d) {
            return new (d || a)(t.ɵɵinject(y.X));
          }),
          (a.ɵprov = t.ɵɵdefineInjectable({
            token: a,
            factory: a.ɵfac,
            providedIn: "root",
          })),
          a
        );
      })();
    },
    19810: (j, S, n) => {
      n.d(S, { z: () => O });
      var t = n(52275),
        y = n(64736),
        P = n(35878),
        a = n(95605),
        c = n(51109),
        d = n(28695),
        p = n(56472);
      let O = (() => {
        class i extends t.Gv {
          constructor(o, g) {
            super(o), (this.store = o), (this.tokenQuery = g);
          }
          selectUniquePoolsIds() {
            return this.selectAll().pipe(
              (0, y.U)((o) => o.map((g) => g.address)),
              (0, P.x)((o, g) => {
                if (o.length !== g.length) return !1;
                const T = new Set(g);
                return !o.filter((f) => !T.has(f)).length;
              })
            );
          }
          getPoolTokens(o) {
            return [
              this.toTokenFromStore(o.token0),
              this.toTokenFromStore(o.token1),
            ];
          }
          toTokenFromStore(o) {
            const g = (function M(i) {
              return i === a.r_ ? a.xb : i;
            })(o.address);
            return (
              this.tokenQuery.getByAddress(g) ||
              (function u(i) {
                return {
                  decimals: +i.decimals,
                  address: i.address,
                  symbol: i.symbol,
                  name: "",
                  image: "/assets/images/wallet-logo-new.svg",
                };
              })(o)
            );
          }
        }
        return (
          (i.ɵfac = function (o) {
            return new (o || i)(c.ɵɵinject(d.a), c.ɵɵinject(p.d));
          }),
          (i.ɵprov = c.ɵɵdefineInjectable({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          })),
          i
        );
      })();
    },
    28695: (j, S, n) => {
      n.d(S, { a: () => a });
      var t = n(48163),
        y = n(52275),
        P = n(51109);
      let a = class extends y.cf {
        constructor() {
          super();
        }
      };
      (a.ɵfac = function (d) {
        return new (d || a)();
      }),
        (a.ɵprov = P.ɵɵdefineInjectable({
          token: a,
          factory: a.ɵfac,
          providedIn: "root",
        })),
        (a = (0, t.__decorate)(
          [(0, y.yC)({ name: "pools", idKey: "address" })],
          a
        ));
    },
  },
]);
