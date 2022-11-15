"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [4255],
  {
    34255: (ka, ht, c) => {
      c.r(ht), c.d(ht, { PoolsModule: () => Pa });
      var y = c(38143),
        Ee = c(92872),
        N = c(77065),
        vt = c(77370),
        qe = c(83156),
        De = c(54266),
        K = c(54510),
        ue = c(84093),
        j = c(12725),
        An = c(16944),
        yt = c(85125),
        On = c(46773),
        Mn = c(70681),
        En = c(12901),
        Dn = c(99759),
        _t = c(64925),
        $n = c(64508),
        Bn = c(35950),
        Ln = c(52260),
        Fn = c(47384),
        $e = c(76027),
        me = c(79296),
        xt = c(94748),
        _ = c(53886),
        x = c(3012),
        P = c(77724),
        F = c(68751),
        O = c(76327),
        U = c(35878),
        W = c(17114),
        h = c(64736),
        Z = c(83358),
        Re = c(71310),
        Ne = c(30459),
        g = c(30137),
        M = c(82868),
        Ke = c(73836),
        G = c(95021),
        S = c(93617),
        Vn = c(19298),
        ge = c(58789),
        e = c(51109),
        be = c(19810),
        Ge = c(67612),
        fe = c(93130),
        jn = c(50864),
        Pt = c(25245),
        ae = c(52611),
        Un = c(58589),
        We = c(93587),
        Qn = c(27876),
        he = c(24124),
        zn = c(13355),
        Ct = c(66654),
        bt = c(83140);
      function qn(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "img", 11)(2, "img", 12),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate("src", t.token0Image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate("src", t.token1Image, e.ɵɵsanitizeUrl);
        }
      }
      function Rn(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "a", 13),
          e.ɵɵelement(1, "img", 14),
          e.ɵɵelementEnd()),
          2 & o && e.ɵɵproperty("routerLink", "../../../farming");
      }
      function Nn(o, a) {
        if ((1 & o && e.ɵɵelement(0, "app-voting-item", 15), 2 & o)) {
          const t = a.$implicit,
            n = a.index,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("color", i.colors[n])("data", i.addLinkFromTemplate(t));
        }
      }
      let Kn = (() => {
        class o {
          constructor(t, n, i, r, s, l, d, p, u, f, v, C, L, k) {
            (this.router = t),
              (this.activatedRoute = n),
              (this.matDialogService = i),
              (this.uiPoolsQuery = r),
              (this.farmingQuery = s),
              (this.walletConnectionQuery = l),
              (this.governanceTransactionService = d),
              (this.multiCallService = p),
              (this.erc20Helper = u),
              (this.walletConnectionService = f),
              (this.governanceApiService = v),
              (this.farmingPoolsService = C),
              (this.governanceQuery = L),
              (this.activeConnectionQuery = k),
              (this.colors = Vn.D),
              (this.data$ = new $e.X([])),
              (this.subscription = new me.w0()),
              (this.poolTitle = ""),
              (this.hasFarming = !1),
              (this.isFarmingEnded = !1),
              (this.stakedAmount = 0),
              (this.token0Image = ""),
              (this.token1Image = ""),
              (this.farmingBalance = ""),
              (this.walletConnected = !1);
            const Q = this.governanceQuery.currentChainVoteOnPoolCards$.pipe(
                (0, P.b)((m) => {
                  this.data$.next(m);
                })
              ),
              q = this.walletConnectionQuery.connectedWalletAddress$.pipe(
                (0, P.b)((m) => {
                  this.walletConnected = !!m;
                }),
                (0, F.h)((m) => !!m)
              ),
              oe = this.activatedRoute.params.pipe(
                (0, O.w)(
                  (m) => (
                    (this.poolAddress = null == m ? void 0 : m.poolAddress),
                    this.uiPoolsQuery.selectEntity(this.poolAddress)
                  )
                ),
                (0, G.BX)(),
                (0, U.x)((m, A) => m.address === A.address),
                (0, P.b)((m) => {
                  const [A, T] = this.uiPoolsQuery.getPoolTokens(m);
                  (this.poolTitle = `${null == A ? void 0 : A.symbol}-${
                    null == T ? void 0 : T.symbol
                  }`),
                    (this.hasFarming =
                      (null == m ? void 0 : m.hasFarming) || !1),
                    (this.token0Image = A.image),
                    (this.token1Image = T.image);
                })
              ),
              ie = this.activatedRoute.params.pipe(
                (0, P.b)((m) => {
                  this.poolAddress = null == m ? void 0 : m.poolAddress;
                }),
                (0, O.w)((m) =>
                  this.farmingPoolsService.getFarmAddressByPoolAddress(
                    (null == m ? void 0 : m.poolAddress) || ""
                  )
                ),
                (0, O.w)((m) => this.farmingQuery.selectEntity(m)),
                (0, P.b)((m) => {
                  null != m &&
                    m.poolStaked &&
                    (this.farmingBalance = (0, Fn.formatUnits)(
                      null == m ? void 0 : m.poolStaked,
                      18
                    ));
                }),
                (0, W.K)(() => xt.C)
              ),
              re = (0, _.a)([
                this.walletConnectionService.connectedWalletAddress$,
                this.activeConnectionQuery.currentChainId$,
                oe,
              ]).pipe(
                (0, O.w)(([m, A]) =>
                  this.getCurrentParamValues(m, this.poolAddress).pipe(
                    (0, h.U)((T) => ({ paramValues: T, chainId: A }))
                  )
                ),
                (0, P.b)(({ paramValues: m, chainId: A }) => {
                  (this.stakedAmount = +(0, g.kg)(
                    m.lpBalance.toString(),
                    18,
                    4
                  )),
                    this.data$.next(this.buildParamsData(m, A));
                }),
                (0, Z.q)(1),
                (0, Re.a)((m) =>
                  m.pipe(
                    (0, Ne.g)(Ke.N.refreshTime.balancesAndAllowancesDefault)
                  )
                )
              ),
              H = oe.pipe(
                (0, G.EB)(0, 6e4),
                (0, O.w)(({ address: m }) => {
                  const A = this.governanceApiService.getVotersByParam$(
                      m,
                      S.y.swapFee
                    ),
                    T = this.governanceApiService.getVotersByParam$(
                      m,
                      S.y.decayPeriod
                    ),
                    Y = this.governanceApiService.getVotersByParam$(
                      m,
                      S.y.slippageFee
                    ),
                    X = this.erc20Helper.getTotalSupply(m);
                  return (0, _.a)([
                    A,
                    T,
                    Y,
                    X,
                    this.governanceQuery.currentChainVoteOnPoolCards$,
                  ]);
                }),
                (0, P.b)(([m, A, T, Y, X]) => {
                  this.setStats(m, A, T, Y, X);
                })
              ),
              I = (0, _.a)([
                this.farmingPoolsService.getFarmingPools(),
                oe,
              ]).pipe(
                (0, P.b)(([m, A]) => {
                  const T = m.find((X) => X.poolAddress === A.address),
                    Y = new Date().getTime();
                  this.isFarmingEnded =
                    !!T &&
                    ("ended" === T.state ||
                      Y > (null == T ? void 0 : T.endTime));
                })
              );
            this.subscription.add(
              re.subscribe({ error: (m) => (0, M.eK)(m, "lc0055") })
            ),
              this.subscription.add(
                ie.subscribe({ error: (m) => (0, M.eK)(m, "lc0056") })
              ),
              this.subscription.add(
                H.subscribe({ error: (m) => (0, M.eK)(m, "lc0057") })
              ),
              this.subscription.add(
                oe.subscribe({ error: (m) => (0, M.eK)(m, "lc0058") })
              ),
              this.subscription.add(
                I.subscribe({ error: (m) => (0, M.eK)(m, "lc0059") })
              ),
              this.subscription.add(
                q.subscribe({ error: (m) => (0, M.eK)(m, "lc0060") })
              ),
              this.subscription.add(
                Q.subscribe({ error: (m) => (0, M.eK)(m, "lc0061") })
              );
          }
          onKeydownHandler() {
            this.navigateToPools();
          }
          addLinkFromTemplate(t) {
            var n;
            return (
              "string" != typeof t.linkTemplate &&
                bt.error("addLinkFromTemplate() linkTemplate is not string", t),
              Object.assign(Object.assign({}, t), {
                link:
                  (null === (n = t.linkTemplate) || void 0 === n
                    ? void 0
                    : n.replace(":poolAddress", this.poolAddress)) || "",
              })
            );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          navigateToPools() {
            this.router.navigateByUrl(
              `/${this.activeConnectionQuery.currentChainId}/earn/pools`
            );
          }
          navigateToProvideLiquidity() {
            const t = this.uiPoolsQuery.getValue().entities;
            if (!t) return;
            const [n, i] = t[this.poolAddress].tokens;
            this.router.navigate(
              [`/${this.activeConnectionQuery.currentChainId}/earn/pools`],
              {
                queryParams: { token0: n.address, token1: i.address },
                queryParamsHandling: "merge",
              }
            );
          }
          getCurrentParamValues(t, n) {
            return (0, _.a)([
              this.governanceTransactionService.getParamValuesCallData(
                n,
                S.y.decayPeriod
              ),
              this.governanceTransactionService.getParamValuesCallData(
                n,
                S.y.slippageFee
              ),
              this.governanceTransactionService.getParamValuesCallData(
                n,
                S.y.swapFee
              ),
              (0, G.p4)(this.erc20Helper.getTokenTotalSupplyCallData()).pipe(
                (0, h.U)((i) => ({ to: n, data: i }))
              ),
              (0, G.p4)(this.erc20Helper.balanceCallData(t)).pipe(
                (0, h.U)((i) => ({ to: n, data: i })),
                (0, W.K)(
                  (i) => (
                    bt.error("getCurrentParamValues pipeline error:", i),
                    (0, x.of)({ to: "", data: "" })
                  )
                )
              ),
            ]).pipe(
              (0, O.w)((i) =>
                t
                  ? this.multiCallService.call$(i).pipe(
                      (0, h.U)((r) => {
                        const s = (0, g.XU)("uint256", r[4]);
                        return {
                          [S.y.decayPeriod]: (0, g.XU)("uint256", r[0]),
                          [S.y.slippageFee]: (0, g.XU)("uint256", r[1]),
                          [S.y.swapFee]: (0, g.XU)("uint256", r[2]),
                          totalSupply: (0, g.XU)("uint256", r[3]),
                          lpBalance: s,
                        };
                      })
                    )
                  : (i.pop(),
                    this.multiCallService.viewCall$(i).pipe(
                      (0, h.U)((r) => {
                        const s = t ? (0, g.XU)("uint256", r[4]) : "0";
                        return {
                          [S.y.decayPeriod]: (0, g.XU)("uint256", r[0]),
                          [S.y.slippageFee]: (0, g.XU)("uint256", r[1]),
                          [S.y.swapFee]: (0, g.XU)("uint256", r[2]),
                          totalSupply: (0, g.XU)("uint256", r[3]),
                          lpBalance: s,
                        };
                      })
                    ))
              )
            );
          }
          setStats(t, n, i, r, s) {
            const l = s.findIndex((f) => f.id === S.y.swapFee),
              d = s.findIndex((f) => f.id === S.y.decayPeriod),
              p = s.findIndex((f) => f.id === S.y.slippageFee),
              u = this.data$.getValue();
            (u[l].totalVotes = He("0", r)),
              (u[l].addresses = t.length),
              (u[d].totalVotes = He("0", r)),
              (u[d].addresses = n.length),
              (u[p].totalVotes = He("0", r)),
              (u[p].addresses = i.length),
              this.data$.next([...u]);
          }
          buildParamsData(t, n) {
            const i = (0, ge.mm)(n),
              r = (0, ge.tp)(S.y.swapFee, +t[S.y.swapFee].toString(), i),
              s = (0, ge.tp)(
                S.y.decayPeriod,
                +t[S.y.decayPeriod].toString(),
                i
              ),
              l = (0, ge.tp)(
                S.y.slippageFee,
                +t[S.y.slippageFee].toString(),
                i
              ),
              d = this.data$.getValue();
            return [
              Object.assign(
                Object.assign(
                  {},
                  d.find((u) => u.id === S.y.swapFee)
                ),
                {
                  currentValue: (0, ge.X4)(S.y.swapFee, `${r.percent}`),
                  yourVotes: +(0, g.kg)(t.lpBalance.toString(), 18, 4),
                  value: r.percentFromMax,
                  totalSupply: t.totalSupply,
                  rawValueOld: t[S.y.defaultSwapFee],
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  d.find((u) => u.id === S.y.decayPeriod)
                ),
                {
                  currentValue: (0, ge.X4)(S.y.decayPeriod, `${s.percent}`),
                  yourVotes: +(0, g.kg)(t.lpBalance.toString(), 18, 4),
                  value: s.percentFromMax,
                  totalSupply: t.totalSupply,
                  rawValueOld: t[S.y.decayPeriod],
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  d.find((u) => u.id === S.y.slippageFee)
                ),
                {
                  currentValue: (0, ge.X4)(S.y.slippageFee, `${l.percent}`),
                  yourVotes: +(0, g.kg)(t.lpBalance.toString(), 18, 4),
                  value: l.percentFromMax,
                  totalSupply: t.totalSupply,
                  rawValueOld: t[S.y.slippageFee],
                }
              ),
            ];
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(K.F0),
              e.ɵɵdirectiveInject(K.gz),
              e.ɵɵdirectiveInject(N.uw),
              e.ɵɵdirectiveInject(be.z),
              e.ɵɵdirectiveInject(Ge.c5),
              e.ɵɵdirectiveInject(fe.r),
              e.ɵɵdirectiveInject(jn.h),
              e.ɵɵdirectiveInject(Pt.Y),
              e.ɵɵdirectiveInject(ae.ZU),
              e.ɵɵdirectiveInject(fe.r),
              e.ɵɵdirectiveInject(Un.rU),
              e.ɵɵdirectiveInject(We.R),
              e.ɵɵdirectiveInject(Qn.R),
              e.ɵɵdirectiveInject(he.r)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-pool-governance-page"]],
            hostBindings: function (t, n) {
              1 & t &&
                e.ɵɵlistener(
                  "keydown.escape",
                  function (r) {
                    return n.onKeydownHandler(r);
                  },
                  !1,
                  e.ɵɵresolveDocument
                );
            },
            decls: 17,
            vars: 11,
            consts: [
              [1, "pool-page-back", 3, "click"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              ["transloco", "button.back"],
              [1, "pool-page-title-wrap"],
              [4, "ngIf"],
              ["target", "_blank", 1, "pool-page-title", 3, "href"],
              ["class", "pool-page-title-farming", 3, "routerLink", 4, "ngIf"],
              [
                "transloco",
                "poolGovernancePage.preview",
                1,
                "pool-page-preview-text",
              ],
              [1, "votes-wrap"],
              [3, "color", "data", 4, "ngFor", "ngForOf"],
              ["alt", "token 0 symbol", 1, "token-img", 3, "src"],
              ["alt", "token 1 symbol", 1, "token-img", 3, "src"],
              [1, "pool-page-title-farming", 3, "routerLink"],
              ["src", "assets/images/farming-label/farming.svg", "alt", ""],
              [3, "color", "data"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "a", 0),
                e.ɵɵlistener("click", function () {
                  return n.navigateToPools();
                }),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(1, "svg", 1),
                e.ɵɵelement(2, "use", 2),
                e.ɵɵelementEnd(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(3, "span", 3),
                e.ɵɵtext(4, "Back"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(5, "h1", 4),
                e.ɵɵtemplate(6, qn, 3, 2, "ng-container", 5),
                e.ɵɵelementStart(7, "a", 6),
                e.ɵɵpipe(8, "async"),
                e.ɵɵpipe(9, "chainExplorerAddressLink"),
                e.ɵɵtext(10),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(11, Rn, 2, 1, "a", 7),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(12, "p", 8),
                e.ɵɵtext(
                  13,
                  " You can adjust the following pool parameters using the pool's LP tokens or staked LP tokens, if you have staked any. To vote, click on one of the items below.\n"
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(14, "div", 9),
                e.ɵɵtemplate(15, Nn, 1, 2, "app-voting-item", 10),
                e.ɵɵpipe(16, "async"),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(6),
                  e.ɵɵproperty("ngIf", n.token0Image && n.token1Image),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "href",
                    e.ɵɵpipeBind1(8, 5, e.ɵɵpipeBind1(9, 7, n.poolAddress)),
                    e.ɵɵsanitizeUrl
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(" ", n.poolTitle, " pool"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", n.hasFarming && !n.isFarmingEnded),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngForOf", e.ɵɵpipeBind1(16, 9, n.data$)));
            },
            dependencies: [y.sg, y.O5, j.KI, K.yS, zn.w, y.Ov, Ct.E],
            styles: [
              ".votes-wrap[_ngcontent-%COMP%]{display:grid;grid-gap:16px;grid-template-columns:1fr}@media (min-width: 520px){.votes-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (min-width: 800px){.votes-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}.token-img[_ngcontent-%COMP%]{width:32px;height:32px}.token-img[_ngcontent-%COMP%]:first-of-type{position:relative;margin-right:-8px}.token-img[_ngcontent-%COMP%]:last-of-type{z-index:1;margin-right:12px}.pool-page-back[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:16px;line-height:26px;text-decoration:none;margin-bottom:16px;color:var(--1inch__ui-02)}.pool-page-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:rotate(90deg);margin-right:8px;color:var(--1inch__ui-02)}.pool-page-back[_ngcontent-%COMP%]:hover{cursor:pointer}.pool-page-title[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:700;color:var(--1inch-text-01)}.pool-page-title-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:16px}.pool-page-title-farming[_ngcontent-%COMP%]{margin-left:12px}.pool-page-preview-text[_ngcontent-%COMP%]{font-size:16px;line-height:26px;margin-bottom:16px;color:var(--1inch__ui-02)}@media (min-width: 940px){.vote-page-back[_ngcontent-%COMP%]{margin-bottom:24px}.pool-page-title[_ngcontent-%COMP%]{font-size:32px;line-height:38px}.pool-page-title-wrap[_ngcontent-%COMP%], .pool-page-preview-text[_ngcontent-%COMP%]{margin-bottom:32px}}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      function He(o, a) {
        const t = o && "0" !== o ? o : a.toString();
        return +(0, g.kg)(t, 18, 4);
      }
      var Gn = c(9395),
        Wn = c(63223),
        kt = c(64074),
        Hn = c(28465);
      let Be = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.ɵɵdefineNgModule({ type: o })),
          (o.ɵinj = e.ɵɵdefineInjector({ imports: [y.ez] })),
          o
        );
      })();
      var b = c(71426),
        $ = c(69682),
        ke = c(21491),
        D = c(76219),
        w = c(95605),
        ve = c(67701),
        Le = c(5327),
        se = c(93475),
        Se = c(20654),
        V = c(45461),
        le = c(90813),
        Ye = c(15674),
        Yn = c(16353),
        _e = c(55468),
        St = c(73013),
        Xe = c(41912),
        J = c(83140);
      const Xn = b.O$.from(1e3),
        Zn = "0x" + "0".repeat(64);
      let Ze = (() => {
        class o {
          constructor(t, n, i, r) {
            (this.erc20Helper = t),
              (this.multiCallService = n),
              (this.ethContractService = i),
              (this.contractAddressService = r);
          }
          getLpUsdBalances(t, n, i) {
            var r;
            const s = {};
            for (const l in i) {
              const d = i[l];
              try {
                if (d.isZero()) {
                  s[l] = 0;
                  continue;
                }
                const p = t.get(l);
                if (!p) {
                  s[l] = 0;
                  continue;
                }
                const u = (0, g.Pz)(p.reserve0, +p.token0.decimals),
                  C = we(
                    d,
                    [u, (0, g.Pz)(p.reserve1, +p.token1.decimals)],
                    (0, g.Pz)(p.totalSupply, 18)
                  ),
                  L = b.O$.from(
                    (null === (r = n[w.xb]) || void 0 === r
                      ? void 0
                      : r.usdPriceRaw) || "0"
                  ),
                  k = p.tokens.map(
                    (q) => n[(0, V.G)(q.address) ? w.Qw.address : q.address]
                  ),
                  Q = wt(
                    p.tokens,
                    C,
                    k.map((q) =>
                      b.O$.from((null == q ? void 0 : q.ethPriceRaw) || "0")
                    ),
                    L
                  );
                s[l] = +(+Q.toString() / 1e8).toFixed(2);
              } catch (p) {
                J.log(p), (s[l] = 0);
              }
            }
            return s;
          }
          getLPBalanceByAllPools$(t, n) {
            return (0, G.p4)(this.erc20Helper.balanceCallData(t)).pipe(
              (0, h.U)((i) => n.map((r) => ({ to: r, data: i }))),
              (0, O.w)((i) =>
                this.multiCallService.call$(i, 500).pipe((0, Ye.X)(1))
              ),
              (0, h.U)((i) => {
                const r = {};
                for (const [s, l] of i.entries())
                  r[n[s]] = (0, g.XU)("uint256", "0x" === l ? Zn : l);
                return r;
              }),
              (0, W.K)((i) => (J.error(i), (0, x.of)({}))),
              (0, Z.q)(1)
            );
          }
          checkPoolApprovalsIfNeeded$(t, n, i, r) {
            if (!t || n.poolAddress === w.r_)
              return (0, x.of)({ isToken0Approved: !0, isToken1Approved: !0 });
            const s = (0, g.Pz)(i, n.token0.decimals),
              l = (0, g.Pz)(r, n.token1.decimals);
            return (0, _.a)([
              this.erc20Helper.isTokenApproved(
                n.token0.address,
                n.poolAddress,
                s
              ),
              this.erc20Helper.isTokenApproved(
                n.token1.address,
                n.poolAddress,
                l
              ),
            ]).pipe(
              (0, h.U)(([d, p]) => ({
                isToken0Approved: d,
                isToken1Approved: p,
              })),
              (0, W.K)(
                (d) => (
                  J.error("checkPoolApprovalsIfNeeded:", d),
                  (0, x.of)({ isToken0Approved: !1, isToken1Approved: !1 })
                )
              )
            );
          }
          getPoolDetails$(t, n, i) {
            return (0, _.a)([
              this.contractAddressService.getContractAddressOnce(
                _e.a4.ethBalance
              ),
              (0, G.p4)(this.erc20Helper.getTokenTotalSupplyCallData()),
              (0, G.p4)(this.erc20Helper.balanceCallData(t)),
            ]).pipe(
              (0, h.U)(([r, s, l]) => [
                { to: t, data: s },
                { to: (0, V.G)(n.address) ? r : n.address, data: l },
                { to: (0, V.G)(i.address) ? r : i.address, data: l },
              ]),
              (0, O.w)((r) => this.multiCallService.call$(r)),
              (0, Ye.X)(2),
              (0, h.U)(([r, s, l]) => ({
                token0: n,
                token1: i,
                poolAddress: t,
                totalSupply: (0, g.XU)("uint256", r),
                balance0: (0, g.XU)("uint256", s),
                balance1: (0, g.XU)("uint256", l),
              })),
              (0, W.K)(() =>
                (0, x.of)({
                  token0: n,
                  token1: i,
                  poolAddress: t,
                  totalSupply: se.Y,
                  balance0: se.Y,
                  balance1: se.Y,
                })
              ),
              (0, Z.q)(1)
            );
          }
          getPoolAddress$(t, n) {
            return this.contractAddressService
              .getContractAddressOnce(_e.a4.mooniswapFactoryV_1_1)
              .pipe(
                (0, O.w)((i) =>
                  (0, G.p4)(
                    this.ethContractService.callProviderContract(
                      Yn._.GovernanceMooniswapFactory,
                      i,
                      "pools",
                      [t, n]
                    )
                  )
                ),
                (0, W.K)((i) => (J.error(i), (0, x.of)(w.r_))),
                (0, Z.q)(1)
              );
          }
          getTokenAmountsFromPoolToken(t, n, i) {
            try {
              if (0 == +n) return ["0", "0"];
              if (t.totalSupply.isZero()) {
                const l = (0, g.Pz)(i[0], t.token0.decimals),
                  d = (0, g.Pz)(i[1], t.token1.decimals);
                return [
                  (0, g.kg)(l.toString(), t.token0.decimals),
                  (0, g.kg)(d.toString(), t.token1.decimals),
                ];
              }
              const s = we(
                (0, g.Pz)(n, 18),
                [t.balance0, t.balance1],
                t.totalSupply
              );
              return [
                (0, g.kg)(s[0].toString(), t.token0.decimals),
                (0, g.kg)(s[1].toString(), t.token1.decimals),
              ];
            } catch (r) {
              return J.log(r), ["0", "0"];
            }
          }
          getTokenAmountsFromUsd(t, n, i, r, s) {
            try {
              if (0 == +n) return t.map(() => "0");
              const l = (0, g.Pz)(n, 8),
                d = t.map(
                  (k) => s[(0, V.G)(k.address) ? w.Qw.address : k.address]
                ),
                p = s[w.Qw.address],
                u = (function Jn(o, a, t, n) {
                  const r = o.mul(g.BD).div(n).div(a.length);
                  return t.map((s, l) => {
                    const d = b.O$.from(10).pow(a[l].decimals);
                    return r.mul(d).div(s);
                  });
                })(
                  l,
                  t,
                  d.map((k) => b.O$.from(k.ethPriceRaw)),
                  b.O$.from(p.usdPriceRaw)
                ),
                f = b.O$.from(r),
                v = i.map((k) => b.O$.from(k));
              return f.isZero() || v.find((k) => k.isZero())
                ? u.map((k, Q) => (0, g.kg)(k.toString(), t[Q].decimals))
                : we(Je(u, v, f), v, f).map((k, Q) =>
                    (0, g.kg)(k.toString(), t[Q].decimals)
                  );
            } catch (l) {
              return J.log(l), t.map(() => "0");
            }
          }
          getMaxUsdAmount(t, n, i) {
            try {
              const r = this.getSubTokenUsdPriceBN(t[0], n[0], i),
                s = this.getSubTokenUsdPriceBN(t[1], n[1], i),
                d = +(0, g.VV)(r, s).toString() / 1e8;
              return (0, g.sk)((2 * +d).toString(), 2);
            } catch (r) {
              return J.log(r), "0";
            }
          }
          getSubTokenUsdPriceBN(t, n, i) {
            try {
              const r = (0, g.Pz)(n, t.decimals),
                s = b.O$.from(
                  i[(0, V.G)(t.address) ? w.Qw.address : t.address].ethPriceRaw
                ),
                l = b.O$.from(i[w.Qw.address].usdPriceRaw),
                d = b.O$.from(10).pow(t.decimals);
              return r.mul(s).div(d).mul(l).div(g.BD);
            } catch (r) {
              return J.log(r), se.Y;
            }
          }
          getTotalSubTokensUsdPrice(t, n, i) {
            try {
              const r = t.map((u, f) => (0, g.Pz)(n[f], u.decimals)),
                s = t.map(
                  (u) => i[(0, V.G)(u.address) ? w.Qw.address : u.address]
                ),
                l = i[w.Qw.address],
                p =
                  +wt(
                    t,
                    r,
                    s.map((u) =>
                      b.O$.from((null == u ? void 0 : u.ethPriceRaw) || "0")
                    ),
                    b.O$.from((null == l ? void 0 : l.usdPriceRaw) || "0")
                  ).toString() / 1e8;
              return (0, g.sk)(p.toString(), 2);
            } catch (r) {
              return J.log(r), "0";
            }
          }
          getPoolTokenAmount(t, n) {
            try {
              const i = [
                (0, g.Pz)(n[0], t.token0.decimals),
                (0, g.Pz)(n[1], t.token1.decimals),
              ];
              if (t.totalSupply.isZero()) {
                const l = Je(i, [], se.Y);
                return (0, g.kg)(l.toString(), 18);
              }
              const r = [t.balance0, t.balance1];
              if (r[0].isZero() || r[1].isZero()) return "0";
              const s = Je(i, r, t.totalSupply);
              return (0, g.kg)(s.toString(), 18);
            } catch (i) {
              return "0";
            }
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵinject(ae.ZU),
              e.ɵɵinject(Pt.Y),
              e.ɵɵinject(St.u),
              e.ɵɵinject(Xe.O)
            );
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      function Je(o, a, t) {
        if (t.isZero()) {
          let s = Xn.mul("99");
          for (const l of o) s = (0, g.Fp)(s, l);
          return s;
        }
        let n = ae.zL;
        for (const [s, l] of o.entries()) n = (0, g.VV)(n, t.mul(l).div(a[s]));
        const i = t.sub("1"),
          r = n;
        for (const s of a) {
          const l = s.mul(r).add(i).div(t);
          n = (0, g.VV)(n, t.mul(l).div(s));
        }
        return n;
      }
      function wt(o, a, t, n) {
        return a
          .reduce((r, s, l) => {
            const d = b.O$.from(10).pow(o[l].decimals),
              p = s.mul(t[l]).div(d);
            return r.add(p);
          }, se.Y)
          .mul(n)
          .div(g.BD);
      }
      function et(o, a, t) {
        return {
          totalSupply: b.O$.from(t),
          balance0: b.O$.from(a[0]),
          balance1: b.O$.from(a[1]),
          token0: o.token0,
          token1: o.token1,
          poolAddress: o.poolAddress,
        };
      }
      function we(o, a, t) {
        try {
          const n = o.toString(),
            i = b.O$.from(n);
          return [
            a[0].mul(i).add(t.sub(1)).div(t),
            a[1].mul(i).add(t.sub(1)).div(t),
          ];
        } catch (n) {
          return (
            J.error("calcPrecisionAmounts:", n), [b.O$.from(0), b.O$.from(0)]
          );
        }
      }
      var tt = c(29737),
        eo = c(25221),
        E = (() => {
          return (
            ((o = E || (E = {})).usdAmount = "usdAmount"),
            (o.poolTokenAmount = "poolTokenAmount"),
            (o.tokenAmount = "tokenAmount"),
            E
          );
          var o;
        })(),
        ee = (() => {
          return (
            ((o = ee || (ee = {})).NOT_CREATED = "NOT_CREATED"),
            (o.NEED_APPROVE = "NEED_APPROVE"),
            (o.READY = "READY"),
            ee
          );
          var o;
        })();
      const to = {
        poolAddress: w.r_,
        inputFocus: E.usdAmount,
        usdAmount: "1000",
        userAmountInput0: "0",
        userAmountInput1: "0",
        token0: Object.assign(Object.assign({}, w.Qw), { address: w.r_ }),
        token1: w.pK,
        status: ee.NOT_CREATED,
        isToken1Approved: !0,
        isToken0Approved: !0,
      };
      var xe = c(52275),
        Tt = c(48163);
      let ce = class extends xe.yh {
        constructor() {
          super(
            (function no() {
              return Object.assign({}, to);
            })()
          );
        }
      };
      (ce.ɵfac = function (a) {
        return new (a || ce)();
      }),
        (ce.ɵprov = e.ɵɵdefineInjectable({
          token: ce,
          factory: ce.ɵfac,
          providedIn: Be,
        })),
        (ce = (0, Tt.__decorate)(
          [(0, xe.yC)({ name: "create-pool-dialog", resettable: !0 })],
          ce
        ));
      let It = (() => {
          class o extends xe.AE {
            constructor(t) {
              super(t),
                (this.store = t),
                (this.inputFocus$ = this.select(["inputFocus"]).pipe(
                  (0, h.U)(({ inputFocus: n }) => n),
                  (0, U.x)()
                )),
                (this.isSetMaxPoolToken$ = this.select(
                  "isSetMaxPoolToken"
                ).pipe(
                  (0, U.x)((n, i) => n === i),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.isSetMaxUsd$ = this.select("isSetMaxUsd").pipe(
                  (0, U.x)((n, i) => n === i),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.usdAmount$ = this.select("usdAmount").pipe(
                  (0, F.h)((n) => !!n)
                )),
                (this.poolTokenAmount$ = this.select("poolTokenAmount").pipe(
                  (0, F.h)((n) => void 0 !== n)
                )),
                (this.token0$ = this.select("token0").pipe(
                  (0, F.h)((n) => !(null == n || !n.address)),
                  (0, U.x)(),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.token1$ = this.select("token1").pipe(
                  (0, F.h)((n) => !(null == n || !n.address)),
                  (0, U.x)(),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.tokens$ = (0, _.a)([this.token0$, this.token1$])),
                (this.balances$ = this.select(["balance0", "balance1"]).pipe(
                  (0, F.h)(({ balance0: n, balance1: i }) => !!n && !!i),
                  (0, U.x)(
                    (n, i) =>
                      n.balance0 === i.balance0 && n.balance1 === i.balance1
                  ),
                  (0, h.U)(({ balance0: n, balance1: i }) => [n, i]),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.amounts$ = this.select([
                  "userAmountInput0",
                  "userAmountInput1",
                ]).pipe(
                  (0, F.h)(
                    ({ userAmountInput0: n, userAmountInput1: i }) => !!n && !!i
                  ),
                  (0, U.x)(
                    (n, i) =>
                      n.userAmountInput0 === i.userAmountInput0 &&
                      n.userAmountInput1 === i.userAmountInput1
                  ),
                  (0, h.U)(({ userAmountInput0: n, userAmountInput1: i }) => [
                    n,
                    i,
                  ]),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.totalSupply$ = this.select("poolTotalSupply").pipe(
                  (0, F.h)((n) => void 0 !== n),
                  (0, U.x)(),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                ));
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(e.ɵɵinject(ce));
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: o.ɵfac,
              providedIn: Be,
            })),
            o
          );
        })(),
        At = (() => {
          class o {
            constructor(t) {
              this.createPoolDialogStore = t;
            }
            updatePoolState(t, n, i, r, s, l, d) {
              const p = {
                  isToken0Approved: s,
                  isToken1Approved: l,
                  poolAddress: t.poolAddress,
                  poolTotalSupply: t.totalSupply.toString(),
                  balance0: t.balance0.toString(),
                  balance1: t.balance1.toString(),
                  status: ee.NOT_CREATED,
                },
                { inputFocus: u, isSetMaxPoolToken: f } =
                  this.createPoolDialogStore.getValue();
              if (t.poolAddress === w.r_)
                return (
                  u === E.poolTokenAmount &&
                    !f &&
                    (p.inputFocus = d ? E.usdAmount : E.tokenAmount),
                  void this.createPoolDialogStore.update(p)
                );
              const v = t.totalSupply.isZero();
              if (
                (!v &&
                  u === E.tokenAmount &&
                  (p.inputFocus = d ? E.usdAmount : E.poolTokenAmount),
                !v &&
                  u === E.usdAmount &&
                  !d &&
                  (p.inputFocus = E.poolTokenAmount),
                !r)
              )
                return (
                  (p.status = ee.READY),
                  void this.createPoolDialogStore.update(p)
                );
              (p.status = s && l ? ee.READY : ee.NEED_APPROVE),
                this.createPoolDialogStore.update(p);
            }
            setTokens(t, n) {
              this.createPoolDialogStore.update({ token0: t, token1: n });
            }
            setToken(t, n) {
              this.createPoolDialogStore.update({
                [n ? "token0" : "token1"]: t,
              });
            }
            setAmount(t, n) {
              this.createPoolDialogStore.update(
                n ? { userAmountInput0: t } : { userAmountInput1: t }
              );
            }
            setAmounts(t, n) {
              this.createPoolDialogStore.update({
                userAmountInput0: t,
                userAmountInput1: n,
              });
            }
            setUsdAmount(t, n = !1) {
              this.createPoolDialogStore.update({
                usdAmount: t,
                isSetMaxUsd: n,
              });
            }
            setPoolTokenAmount(t, n = !1) {
              this.createPoolDialogStore.update({
                poolTokenAmount: t,
                isSetMaxPoolToken: n,
              });
            }
            updateInputFocus(t) {
              this.createPoolDialogStore.update({ inputFocus: t });
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(e.ɵɵinject(ce));
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: o.ɵfac,
              providedIn: Be,
            })),
            o
          );
        })();
      var Te = c(20803),
        nt = c(36477),
        Ot = c(36565),
        ot = c(88647),
        Mt = c(70299),
        Et = c(64057),
        oo = c(43074),
        it = c(48535),
        io = c(33246),
        ro = c(76307),
        ao = c(1146),
        Dt = c(56747);
      let $t = (() => {
        class o {
          constructor(t, n, i, r, s, l, d, p, u) {
            (this.ethContractService = t),
              (this.contractAddressService = n),
              (this.simpleSendTransactionService = i),
              (this.approveTransactionService = r),
              (this.tokenPricesQuery = s),
              (this.uiPoolsQuery = l),
              (this.twoStepApproveService = d),
              (this.createPendingTxService = p),
              (this.acceptTermsService = u);
          }
          createPool(t, n, i) {
            const r = (0, _.a)([
              this.contractAddressService
                .getContractAddressOnce(_e.a4.mooniswapFactoryV_1_1)
                .pipe(
                  (0, O.w)((s) =>
                    this.ethContractService.getContractEncodeABI(
                      it._4.GovernanceMooniswapFactory,
                      s,
                      "deploy",
                      [t.address, n.address]
                    )
                  )
                ),
              this.contractAddressService.getContractAddressOnce(
                _e.a4.mooniswapFactoryV_1_1
              ),
            ]).pipe(
              (0, O.w)(([s, l]) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: l, data: s },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "deployment",
                    subType: ve.E.deployNewPool,
                    meta: { srcToken: t, dstToken: n },
                    amount: "0",
                  })
                )
              ),
              (0, P.b)(() => {
                i();
              }),
              (0, Z.q)(1)
            );
            (0, le.O)(r, "createPool$");
          }
          provideLiquidity(t, n, i, r, s) {
            b.O$.from(n[0].address).gt(b.O$.from(n[1].address)) &&
              ((i = [i[1], i[0]]), (r = [r[1], r[0]]), (n = [n[1], n[0]]));
            const l = this.ethContractService.getContractEncodeABI(
                it._4.GovernanceMooniswap,
                t,
                "deposit",
                [i, r]
              ),
              d = ((0, V.G)(n[0].address) ? i[0] : se.Y).add(
                (0, V.G)(n[1].address) ? i[1] : se.Y
              ),
              p = this.createProvideLiquidityEvent(n, i, s, t),
              u = (0, G.p4)(l).pipe(
                (0, O.w)((f) =>
                  this.simpleSendTransactionService.sendTransaction(
                    { to: t, data: f, value: d.toString() },
                    this.createPendingTxService.getPendingTxFactory({
                      type: "deposit",
                      subType: ve.E.provideLiquidity,
                      meta: {
                        lpToken: {
                          address: t,
                          decimals: 18,
                          symbol: `LP-${n[0].symbol}-${n[1].symbol}`,
                          name: `LP-${n[0].symbol}-${n[1].symbol}`,
                          image: "/assets/images/1inch-token.svg",
                        },
                        lpTokenAmount: (0, g.yD)(s.poolTokenAmount || "0", 18),
                        token1: n[0],
                        token1Amount: s.balance0 || "0",
                        token2: n[1],
                        token2Amount: s.balance1 || "0",
                      },
                      amount: "0",
                    }),
                    ot.qP,
                    p
                  )
                )
              );
            (0, le.O)(u, "provideLiquidity$");
          }
          removeLiquidity(t, n, i, r, s) {
            b.O$.from(n[0].address).gt(b.O$.from(n[1].address)) &&
              ((r = [r[1], r[0]]), (n = [n[1], n[0]]));
            const l = this.createRemoveLiquidityEvent(n, s, t),
              d = this.ethContractService.getContractEncodeABI(
                it._4.GovernanceMooniswap,
                t,
                "withdraw",
                [i, r]
              ),
              p = (0, _.a)([
                this.acceptTermsService.checkTermsAccepting(),
                (0, G.p4)(d),
              ]).pipe(
                (0, O.w)(([, u]) =>
                  this.simpleSendTransactionService.sendTransaction(
                    { to: t, data: u },
                    this.createPendingTxService.getPendingTxFactory({
                      type: "withdraw",
                      subType: ve.E.removeLiquidity,
                      meta: {
                        lpToken: {
                          address: t,
                          decimals: 18,
                          symbol: `LP-${n[0].symbol}-${n[1].symbol}`,
                          name: `LP-${n[0].symbol}-${n[1].symbol}`,
                          image: "/assets/images/1inch-token.svg",
                        },
                        lpTokenAmount: (0, g.yD)(s.poolTokenAmount || "0", 18),
                        token1: n[0],
                        token1Amount: s.balance0 || "0",
                        token2: n[1],
                        token2Amount: s.balance1 || "0",
                      },
                      amount: "0",
                    }),
                    ot.qP,
                    l
                  )
                )
              );
            (0, le.O)(p, "removeLiquidity$");
          }
          sendApproveTransaction(t, n, i) {
            const { spenderAddress: r, amount: s } = this.getApproveData(n, i),
              l = this.approveTransactionService.contractApproveTransaction(
                {
                  txType: "authorize",
                  txSubType: ve.E.approveLiquidityPool,
                  meta: { approvedForAddress: r, asset: t },
                  contractAddress: t.address,
                  spenderAddress: r,
                  amount: s,
                },
                !0
              );
            (0, le.O)(l, "approveLiquidityTransaction$");
          }
          sendTwoStepApproveTransaction(t, n, i, r) {
            const { spenderAddress: s, amount: l } = this.getApproveData(i, r),
              d = l.eq(ae.zL),
              p = l.div(20),
              u = d ? l : l.add(p),
              f = this.twoStepApproveService.twoStepApprove(
                t,
                n,
                s,
                u,
                "authorize",
                ve.E.approveLiquidityPool,
                { approvedForAddress: s, asset: t },
                { approvedForAddress: s, asset: n }
              );
            (0, le.O)(f, "liquidityTwoApproves$");
          }
          getApproveData(t, n) {
            const i = n.eq(ae.zL),
              r = n.div(20);
            return {
              amount: i ? n : n.add(r),
              spenderAddress:
                t in _e.a4
                  ? this.contractAddressService.getContractAddress(t)
                  : t,
            };
          }
          createProvideLiquidityEvent(t, n, i, r) {
            var s;
            try {
              const l = (0, g.kg)(n[0].toString(), t[0].decimals),
                d = this.getUsdValue(t[0], l),
                p = (0, g.kg)(n[1].toString(), t[1].decimals),
                u = this.getUsdValue(t[1], p),
                f = this.uiPoolsQuery.getEntity(r.toLowerCase()),
                v = Boolean(null == f ? void 0 : f.volume),
                C = (null == f ? void 0 : f.volumeUSD) || "0",
                L = null !== (s = i.poolTokenAmount) && void 0 !== s ? s : "",
                k = i.usdAmount;
              return new Mt.Z(
                "provide_simplified",
                {
                  basicUsdValue: d,
                  quotedUsdValue: u,
                  basicAsset: t[0].symbol,
                  basicAssetAmount: +l.toString(),
                  quotedAsset: t[1].symbol,
                  quotedAssetAmount: p.toString(),
                  poolName: `${t[0].symbol}-${t[1].symbol}`,
                  existedLiquidity: v,
                  existedLiquidityUsdValue: C,
                  lpTokenAmount: +L,
                  lpTokenUsdValue: +k,
                },
                +k
              );
            } catch (l) {
              return void (0, Et.H)(
                "Error when creating GAEvent for provide liquidity event",
                l
              );
            }
          }
          createRemoveLiquidityEvent(t, n, i) {
            var r;
            try {
              const s = n.userAmountInput0 || 0,
                l = this.getUsdValue(t[0], s),
                d = n.userAmountInput1 || 0,
                p = this.getUsdValue(t[1], d),
                u = this.uiPoolsQuery.getEntity(i.toLowerCase());
              return new Mt.Z("remove_simplified", {
                basicUsdValue: l,
                quotedUsdValue: p,
                basicAsset: t[0].symbol,
                basicAssetAmount: s,
                quotedAsset: t[1].symbol,
                quotedAssetAmount: d,
                poolName: `${t[0].symbol}-${t[1].symbol}`,
                lpTokenAmount:
                  null !== (r = n.poolTokenAmount) && void 0 !== r ? r : "",
                lpTokenUsdValue: n.usdAmount,
                stayedLiquidityUsdValue:
                  ((null == u ? void 0 : u.liquidity) || 0) - +n.usdAmount,
              });
            } catch (s) {
              return void (0, Et.H)(
                "Error when creating GAEvent for remove liquidity event",
                s
              );
            }
          }
          getUsdValue(t, n) {
            const i = this.tokenPricesQuery.getTokenAmountUsdPrice(
              t.address,
              n.toString()
            );
            return (0, oo.hj)(i) ? i : 0;
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵinject(St.u),
              e.ɵɵinject(Xe.O),
              e.ɵɵinject(ot.RW),
              e.ɵɵinject(io.f),
              e.ɵɵinject(Te.u),
              e.ɵɵinject(be.z),
              e.ɵɵinject(ro.V),
              e.ɵɵinject(ao.B),
              e.ɵɵinject(Dt.N)
            );
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      var Bt = c(58913),
        Pe = c(83389),
        Ie = c(80135),
        Lt = c(78846),
        z = c(31777),
        Ft = c(67605),
        Vt = c(12733),
        jt = c(572),
        so = c(70923),
        rt = c(56472),
        lo = c(83140);
      function co(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 24),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 25),
            e.ɵɵelement(2, "use", 8),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(3, "p"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t.firstErrorText);
        }
      }
      function po(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 26),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 25),
            e.ɵɵelement(2, "use", 8),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(3, "p"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t.tokenDetailsWarn);
        }
      }
      function uo(o, a) {
        1 & o && e.ɵɵelement(0, "img", 36);
      }
      function mo(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 27)(1, "div")(2, "div", 28)(
              3,
              "span",
              29
            ),
            e.ɵɵtext(4, "Token symbol:"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "span", 30),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(7, "div", 28)(8, "span", 31),
            e.ɵɵtext(9, "Token name:"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(10, "span", 30),
            e.ɵɵtext(11),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(12, "div", 28)(13, "span", 32),
            e.ɵɵtext(14, "Token decimals:"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(15, "span", 30),
            e.ɵɵtext(16),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(17, "div", 33),
            e.ɵɵtemplate(18, uo, 1, 0, "img", 34),
            e.ɵɵelement(19, "img", 35),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(null == t.token ? null : t.token.symbol),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(null == t.token ? null : t.token.name),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(null == t.token ? null : t.token.decimals),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.isLoading),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "src",
              null == t.token ? null : t.token.image,
              e.ɵɵsanitizeUrl
            );
        }
      }
      let go = (() => {
        class o {
          constructor(t, n, i, r, s, l) {
            (this.tokensService = t),
              (this.swapService = n),
              (this.tokensQuery = i),
              (this.matDialogService = r),
              (this.dataFromDialog = s),
              (this.translocoService = l),
              (this.tokenDetailsError = ""),
              (this.tokenDetailsWarn = ""),
              (this.fetchError = ""),
              (this.isLoading = !1),
              (this.token = null),
              (this.tokenAddressControl = new z.UntypedFormControl("", [
                z.Validators.required,
                z.Validators.pattern(/0x[0-9a-fA-F]{40}$/),
              ])),
              (this.subscription = new me.w0());
            const d = this.tokenAddressControl.valueChanges.pipe(
              (0, P.b)(() => {
                (this.tokenDetailsError = ""),
                  (this.fetchError = ""),
                  (this.token = null);
              }),
              (0, F.h)(() => this.tokenAddressControl.valid),
              (0, P.b)(() => {
                this.isLoading = !0;
              }),
              (0, O.w)((p) => this.tokensService.fetchData$(p)),
              (0, P.b)((p) => {
                if (((this.isLoading = !1), null === p))
                  return void (this.fetchError =
                    this.translocoService.translate(
                      "customTokenBox.cannot-fetch-token"
                    ));
                p.symbol
                  ? (this.token = p)
                  : (this.tokenDetailsError = this.translocoService.translate(
                      "customTokenBox.can-not-find-token"
                    ));
                const u = this.tokensQuery.isTokenExistsWith(
                  "address",
                  p.address
                );
                if (
                  (u &&
                    (this.tokenDetailsError = this.translocoService.translate(
                      "customTokenBox.token-already-exists"
                    )),
                  this.tokensQuery.isTokenExistsWith("symbol", p.symbol) && !u)
                ) {
                  const v = p.symbol + "_1";
                  (this.tokenDetailsWarn = this.translocoService.translate(
                    "customTokenBox.token-with-symbol",
                    { symbol: p.symbol, newSymbol: v }
                  )),
                    (this.token = Object.assign(Object.assign({}, p), {
                      symbol: v,
                    }));
                }
              }),
              (0, $.d)({ bufferSize: 1, refCount: !0 })
            );
            this.subscription.add(
              d.subscribe({ error: (p) => (0, M.eK)(p, "a0053") })
            ),
              this.dataFromDialog &&
                this.tokenAddressControl.setValue(
                  this.dataFromDialog.InitialAddress,
                  { emitEvent: !0 }
                );
          }
          get hasErrors() {
            var t, n;
            if (this.tokenDetailsError || this.fetchError) return !0;
            const i =
              null === (t = this.tokenAddressControl) || void 0 === t
                ? void 0
                : t.errors;
            return (
              !!i &&
              (null === (n = Object.keys(i)) || void 0 === n
                ? void 0
                : n.length) > 0
            );
          }
          get firstErrorText() {
            var t;
            if (this.tokenDetailsError || this.fetchError)
              return this.tokenDetailsError || this.fetchError;
            const n =
              null === (t = this.tokenAddressControl) || void 0 === t
                ? void 0
                : t.errors;
            return n
              ? n.minlength
                ? this.translocoService.translate(
                    "customTokenBox.42-character-long"
                  )
                : n.pattern
                ? this.translocoService.translate(
                    "customTokenBox.invalid-token-address"
                  )
                : ""
              : "";
          }
          addToken() {
            null !== this.token
              ? this.tokensService.addCustomToken(this.token)
              : lo.error("addToken() this.token is null", this.token),
              this.matDialogService.closeAll();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(jt.H),
              e.ɵɵdirectiveInject(so.g),
              e.ɵɵdirectiveInject(rt.d),
              e.ɵɵdirectiveInject(N.uw),
              e.ɵɵdirectiveInject(N.WI),
              e.ɵɵdirectiveInject(j.Vn)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-custom-token-box"]],
            decls: 35,
            vars: 6,
            consts: [
              [
                "mat-dialog-content",
                "",
                1,
                "dialog-wrap",
                "custom-token-pop-up",
              ],
              ["mat-dialog-actions", "", 1, "fix-mat-dialog-close"],
              [
                "mat-icon-button",
                "",
                "mat-dialog-close",
                "",
                "aria-label",
                "close",
                "data-id",
                "add-custom-token.close-icon",
                1,
                "icon-button-gray",
              ],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              ["transloco", "customTokenBox.add-custom-token", 1, "mb-20"],
              [
                1,
                "mb-20",
                "warning-box",
                "warning-box-column",
                "warning-box-red",
                "text-center",
              ],
              ["width", "20", "height", "18", 1, "mb-16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/attention-triangle.svg#attention-triangle",
              ],
              ["transloco", "customTokenBox.warning"],
              ["transloco", "customTokenBox.this-token-is-not"],
              [
                "href",
                "https://help.1inch.io/en/articles/4878336-how-to-whitelist-a-token-on-1inch",
                "target",
                "_blank",
                "transloco",
                "customTokenBox.whitelisted",
              ],
              ["transloco", "customTokenBox.on-1inch"],
              ["transloco", "customTokenBox.by-adding"],
              [
                "transloco",
                "customTokenBox.token-address",
                1,
                "text-gray",
                "field-title",
                "token-address",
              ],
              [
                "data-id",
                "add-custom-token.address-input",
                "autocomplete",
                "off",
                "placeholder",
                "0x000...",
                "type",
                "text",
                1,
                "mb-20",
                "field",
                "field-simple",
                "form-control",
                3,
                "formControl",
                "ngClass",
              ],
              [
                "class",
                "warning-box warning-box-row warning-box-red",
                4,
                "ngIf",
              ],
              [
                "class",
                "warning-box warning-box-row warning-box-yellow",
                4,
                "ngIf",
              ],
              ["class", "custom-token-info", 4, "ngIf"],
              [1, "d-flex", "justify-content-center", "mt-20"],
              [
                "data-id",
                "add-custom-token.add-button",
                "color",
                "blue",
                3,
                "disabled",
                "clicked",
              ],
              ["width", "24", "height", "24", 1, "mr-2"],
              [0, "xlink", "href", "assets/images/icons/plus.svg#plus"],
              ["transloco", "customTokenBox.add-token"],
              [1, "warning-box", "warning-box-row", "warning-box-red"],
              ["width", "20", "height", "18"],
              [1, "warning-box", "warning-box-row", "warning-box-yellow"],
              [1, "custom-token-info"],
              [1, "custom-token-info-row"],
              ["transloco", "customTokenBox.token-symbol2", 1, "text-gray"],
              [1, "text-blue"],
              ["transloco", "customTokenBox.token-name2", 1, "text-gray"],
              ["transloco", "customTokenBox.token-decimals2", 1, "text-gray"],
              [1, "custom-token-image-wrap"],
              [
                "class",
                "loader-img",
                "src",
                "assets/images/loader3.svg",
                "alt",
                "loading",
                4,
                "ngIf",
              ],
              ["alt", "", 3, "src"],
              [
                "src",
                "assets/images/loader3.svg",
                "alt",
                "loading",
                1,
                "loader-img",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div")(2, "div", 1)(
                  3,
                  "button",
                  2
                ),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(4, "svg", 3),
                e.ɵɵelement(5, "use", 4),
                e.ɵɵelementEnd()()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(6, "h2", 5),
                e.ɵɵtext(7, "Add Custom Token"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(8, "div", 6),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(9, "svg", 7),
                e.ɵɵelement(10, "use", 8),
                e.ɵɵelementEnd(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(11, "p", 9),
                e.ɵɵtext(12, "WARNING!"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(13, "p")(14, "span", 10),
                e.ɵɵtext(15, "This token is not "),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(16, "a", 11),
                e.ɵɵtext(17, "whitelisted"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(18, "span", 12),
                e.ɵɵtext(19, " on app.1inch.io."),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(20, "p", 13),
                e.ɵɵtext(
                  21,
                  "By adding it as a custom token, you confirm that all further interactions with it are at your own risk."
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementContainerStart(22),
                e.ɵɵelementStart(23, "p", 14),
                e.ɵɵtext(24, "Token address"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(25, "input", 15),
                e.ɵɵtemplate(26, co, 5, 1, "div", 16),
                e.ɵɵtemplate(27, po, 5, 1, "div", 17),
                e.ɵɵtemplate(28, mo, 20, 5, "div", 18),
                e.ɵɵelementStart(29, "div", 19)(30, "app-button", 20),
                e.ɵɵlistener("clicked", function () {
                  return n.addToken();
                }),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(31, "svg", 21),
                e.ɵɵelement(32, "use", 22),
                e.ɵɵelementEnd(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(33, "span", 23),
                e.ɵɵtext(34, "Add Token"),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementContainerEnd(),
                e.ɵɵelementEnd()()),
                2 & t &&
                  (e.ɵɵadvance(25),
                  e.ɵɵproperty("formControl", n.tokenAddressControl)(
                    "ngClass",
                    n.hasErrors &&
                      n.firstErrorText &&
                      "token-address-input-error"
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", n.hasErrors && n.firstErrorText),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", "" != n.tokenDetailsWarn),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !n.hasErrors || n.isLoading),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "disabled",
                    n.hasErrors || n.isLoading || !n.token
                  ));
            },
            dependencies: [
              y.mk,
              y.O5,
              z.DefaultValueAccessor,
              z.NgControlStatus,
              z.FormControlDirective,
              Pe.r,
              Ee.lW,
              j.KI,
            ],
            styles: [
              ".custom-token-pop-up[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;padding:16px!important;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02)}@media (max-width: 520px){.custom-token-pop-up[_ngcontent-%COMP%]{width:100%!important}}.custom-token-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.custom-token-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:80px}.custom-token-image-wrap[_ngcontent-%COMP%]{order:-1;display:flex;margin:20px 0;height:80px;align-items:center;justify-content:center}.custom-token-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:80px;max-height:80px}.custom-token-image-wrap[_ngcontent-%COMP%]   .loader-img[_ngcontent-%COMP%]{width:48px;height:48px}.custom-token-info-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:180px 1fr;grid-column-gap:20px;margin-bottom:16px}.custom-token-info-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.token-address[_ngcontent-%COMP%]{margin-bottom:16px}.token-address-input-error[_ngcontent-%COMP%]{border-color:var(--1inch-common-bg-04);color:var(--1inch-common-bg-04)}.field-simple[_ngcontent-%COMP%]{border:none}@media (min-width: 800px){.custom-token-pop-up[_ngcontent-%COMP%]{width:800px}}@media (min-width: 480px){.custom-token-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 130px;grid-column-gap:8px;margin-top:20px}.custom-token-image-wrap[_ngcontent-%COMP%]{order:2;margin:0}}",
            ],
          })),
          o
        );
      })();
      var Ut = c(66027),
        Qt = c(85326),
        zt = c(68435),
        fo = c(5604),
        ho = c(10197),
        vo = c(45256),
        yo = c(5728),
        Ce = c(15810),
        _o = c(55231);
      let qt = (() => {
        class o {
          constructor(t) {
            (this.scrollDistance = 30),
              (this.scrollContainer = window),
              (this.onBottomReached = new e.EventEmitter()),
              (this.nativeEl = t.nativeElement);
          }
          ngAfterViewInit() {
            this.evaluateContainer(this.scrollContainer);
          }
          attachListner(t = this.nativeEl) {
            (this.scroll$ = (0, Ce.R)(t, "scroll")),
              (this.subscription = this.scroll$
                .pipe((0, _o.R)(this.stopLazyScroll))
                .subscribe(this.listen.bind(this)));
          }
          changeContainer(t) {
            this.container && this.subscription.unsubscribe(),
              (this.container = t),
              this.attachListner(t);
          }
          evaluateContainer(t) {
            let n;
            if (
              ((n =
                1 === t.nodeType
                  ? t
                  : "function" == typeof t.append
                  ? t.pop()
                  : "string" == typeof t
                  ? document.querySelector(t)
                  : t),
              !t)
            )
              throw new Error("invalid scroll-container attribute.");
            this.changeContainer(n);
          }
          height(t) {
            let n = t.offsetHeight;
            return isNaN(n) && (n = t.innerHeight), n;
          }
          pageYOffset(t) {
            let n = t.pageYOffset;
            return isNaN(n) && (n = t.ownerDocument.defaultView.pageYOffset), n;
          }
          offsetTop(t) {
            if (t && t.getBoundingClientRect)
              return t.getBoundingClientRect().top + this.pageYOffset(t);
          }
          listen() {
            let t,
              n = 0;
            const i = this.height(this.container);
            t =
              this.container === window
                ? i + this.pageYOffset(this.container)
                : this.height(this.container);
            const r = this.offsetTop(this.container);
            r && (n = r);
            const s =
              this.offsetTop(this.nativeEl) - n + this.height(this.nativeEl);
            t + this.scrollDistance >= s && this.onBottomReached.emit();
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(e.ɵɵdirectiveInject(e.ElementRef));
          }),
          (o.ɵdir = e.ɵɵdefineDirective({
            type: o,
            selectors: [["", "appLazyScroll", ""]],
            inputs: {
              scrollDistance: "scrollDistance",
              scrollContainer: "scrollContainer",
              stopLazyScroll: "stopLazyScroll",
            },
            outputs: { onBottomReached: "onBottomReached" },
          })),
          o
        );
      })();
      var xo = c(95475);
      const Po = ["tokenDropdownMenu"],
        Co = ["searchInput"];
      function bo(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "p", 10),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "currency"),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit,
            n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " \u2248 ",
              e.ɵɵpipeBind1(
                2,
                1,
                null == n.address2balance[t.address]
                  ? null
                  : n.address2balance[t.address].usdBalance
              ),
              " "
            );
        }
      }
      function ko(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 6),
            e.ɵɵlistener("click", function () {
              const r = e.ɵɵrestoreView(t).$implicit,
                s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.selectToken(r));
            })("keydown", function (i) {
              const r = e.ɵɵrestoreView(t),
                s = r.index,
                l = r.$implicit,
                d = e.ɵɵnextContext(2);
              return e.ɵɵresetView(d.keydownOnFilterItem(i, s, l));
            }),
            e.ɵɵelement(1, "token-icon", 7),
            e.ɵɵelementStart(2, "div")(3, "div", 8)(4, "p"),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "displaySymbol"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(7, "p", 9),
            e.ɵɵtext(8),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(9, "div", 8)(10, "p", 10),
            e.ɵɵtext(11),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(12, "div", 11),
            e.ɵɵtemplate(13, bo, 3, 3, "p", 12),
            e.ɵɵelementEnd()()()();
        }
        if (2 & o) {
          const t = a.$implicit,
            n = e.ɵɵnextContext(2);
          e.ɵɵattributeInterpolate1(
            "data-id",
            "tokens-list.",
            t.symbol,
            "-token"
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("token", t),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(6, 6, t)),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(t.name),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              (null == n.address2balance[t.address]
                ? null
                : n.address2balance[t.address].tokenBalance) || "",
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              null == n.address2balance[t.address]
                ? null
                : n.address2balance[t.address].usdBalance
            );
        }
      }
      function So(o, a) {
        1 & o && e.ɵɵelement(0, "img", 20);
      }
      function wo(o, a) {
        1 & o && e.ɵɵelement(0, "img", 21);
      }
      function To(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 13),
            e.ɵɵtemplate(1, So, 1, 0, "img", 14),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, wo, 1, 0, "img", 15),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementStart(5, "p", 16),
            e.ɵɵtext(6, " Nothing found. Use Custom token feature."),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(7, "app-button", 17),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2);
              return e.ɵɵresetView(
                i.openCustomTokenDialog(i.searchInput.value)
              );
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(8, "svg", 18),
            e.ɵɵelement(9, "use", 19),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(10, "span"),
            e.ɵɵtext(11, "Add Token"),
            e.ɵɵelementEnd()()();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 2, t.isDarkTheme$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !e.ɵɵpipeBind1(4, 4, t.isDarkTheme$));
        }
      }
      function Io(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 2, 3),
            e.ɵɵlistener("onBottomReached", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.loadMore());
            }),
            e.ɵɵtemplate(2, ko, 14, 8, "div", 4),
            e.ɵɵtemplate(3, To, 12, 6, "div", 5),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = a.ngIf,
            n = e.ɵɵnextContext();
          e.ɵɵpropertyInterpolate("id", n.scrollContainerId),
            e.ɵɵproperty("ngClass", n.small && "small-height")(
              "stopLazyScroll",
              n.stopLazyScroll
            )("scrollContainer", n.scrollContainerSelector)(
              "scrollDistance",
              30
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngForOf", t)("ngForTrackBy", n.trackByAddress),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.length);
        }
      }
      let Ao = (() => {
        class o {
          constructor(t, n, i, r, s, l, d) {
            (this.globalSettingsQuery = t),
              (this.walletQuery = n),
              (this.pricesService = i),
              (this.tokenBalancesService = r),
              (this.interactivityChecker = s),
              (this.tokenBalanceQuery = l),
              (this.matDialogService = d),
              (this.excludeEth = !1),
              (this.excludeOneInchLpTokens = !1),
              (this.excludeMigrationTokens = !1),
              (this.small = !1),
              (this.tokenSelected = new e.EventEmitter()),
              (this.filterCtrl = new z.UntypedFormControl()),
              (this.address2balance = {}),
              (this.subscription = new me.w0()),
              (this.stopLazyScroll = new Ft.x()),
              (this.limit$ = new $e.X(25)),
              (this.isDarkTheme$ = this.globalSettingsQuery.isDarkTheme$);
          }
          get scrollContainerSelector() {
            return `#${this.scrollContainerId}`;
          }
          trackByAddress(t, n) {
            return n.address;
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          selectToken(t) {
            this.tokenSelected.emit(t);
          }
          focus() {
            setTimeout(() => {
              this.searchInput.nativeElement.focus();
            }, 100);
          }
          ngOnInit() {
            (o.MaxId += 1),
              (this.scrollContainerId = `token-list-scroll-container-${o.MaxId}`),
              (this.filteredTokens$ = (0, _.a)([
                this.tokenBalanceQuery.allTokensWithBalancesSorted$,
                this.filterCtrl.valueChanges.pipe(
                  (0, Vt.O)(""),
                  (0, ke.b)(25),
                  (0, U.x)()
                ),
                this.limit$.pipe((0, ke.b)(25)),
              ]).pipe(
                (0, h.U)((t) => {
                  const [n, i, r] = t;
                  let s = [...n];
                  if (
                    (this.excludeEth &&
                      (s = s.filter((u) => !(0, V.M)(u.address))),
                    this.excludeOneInchLpTokens &&
                      (s = s.filter((u) => !(0, Qt.cU)(u))),
                    this.excludeMigrationTokens &&
                      (s = s.filter((u) => !(0, Qt.Wv)(u))),
                    !i)
                  )
                    return s.slice(0, r);
                  if ((null == i ? void 0 : i.length) === w.ZL) {
                    const u = s.find((f) => f.address === i.toLowerCase());
                    if (u) return [u];
                  }
                  const l = i.toLowerCase();
                  s = s.filter(
                    (u) =>
                      u.symbol.toLowerCase().includes(l) ||
                      u.name.toLowerCase().includes(l)
                  );
                  const d = (0, Ut.W)(i);
                  return s.sort((u, f) => d(u.symbol, f.symbol)).slice(0, r);
                })
              )),
              this.subscription.add(
                this.tokenBalanceQuery.balancesInfo$.subscribe(
                  (t) => {
                    this.address2balance = t;
                  },
                  (t) => (0, M.eK)(t, "lc0114")
                )
              );
          }
          stopIt() {
            this.stopLazyScroll.next(void 0);
          }
          loadMore() {
            const t = this.limit$.value;
            t < 1e4 && this.limit$.next(t + 5);
          }
          openCustomTokenDialog(t) {
            this.matDialogService.open(go, {
              data: { InitialAddress: t },
              restoreFocus: !1,
            });
          }
          keydownOnInput(t) {
            var n;
            "ArrowDown" === t.code &&
              (null ===
                (n = this.tokenDropdownMenu.nativeElement.childNodes[0]) ||
                void 0 === n ||
                n.focus(),
              t.preventDefault());
          }
          keydownOnFilterItem(t, n, i) {
            var r, s;
            const l = this.tokenDropdownMenu.nativeElement.childNodes;
            "Enter" === t.code
              ? this.selectToken(i)
              : "ArrowDown" === t.code
              ? null === (r = l[n + 1]) || void 0 === r || r.focus()
              : "ArrowUp" === t.code && n - 1 < 0
              ? this.searchInput.nativeElement.focus()
              : "ArrowUp" === t.code &&
                (null === (s = l[n - 1]) || void 0 === s || s.focus());
          }
        }
        return (
          (o.MaxId = 0),
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(zt.J),
              e.ɵɵdirectiveInject(fe.r),
              e.ɵɵdirectiveInject(fo.f),
              e.ɵɵdirectiveInject(Lt._),
              e.ɵɵdirectiveInject(ho.ic),
              e.ɵɵdirectiveInject(nt.n4),
              e.ɵɵdirectiveInject(N.uw)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-token-list"]],
            viewQuery: function (t, n) {
              if (
                (1 & t && (e.ɵɵviewQuery(Po, 5), e.ɵɵviewQuery(Co, 5)), 2 & t)
              ) {
                let i;
                e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                  (n.tokenDropdownMenu = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.searchInput = i.first);
              }
            },
            inputs: {
              excludeEth: "excludeEth",
              excludeOneInchLpTokens: "excludeOneInchLpTokens",
              excludeMigrationTokens: "excludeMigrationTokens",
              small: "small",
            },
            outputs: { tokenSelected: "tokenSelected" },
            decls: 3,
            vars: 4,
            consts: [
              [
                "placeholder",
                'Try "DAI"',
                "dataId",
                "swap-box.token-list-input",
                3,
                "formControl",
                "keydown",
              ],
              [
                "class",
                "field-dropdown-scroll",
                "data-id",
                "swap-box.token-list",
                "appLazyScroll",
                "",
                3,
                "id",
                "ngClass",
                "stopLazyScroll",
                "scrollContainer",
                "scrollDistance",
                "onBottomReached",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "swap-box.token-list",
                "appLazyScroll",
                "",
                1,
                "field-dropdown-scroll",
                3,
                "id",
                "ngClass",
                "stopLazyScroll",
                "scrollContainer",
                "scrollDistance",
                "onBottomReached",
              ],
              ["tokenDropdownMenu", ""],
              [
                "class",
                "field-dropdown-row",
                "tabindex",
                "0",
                3,
                "click",
                "keydown",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["class", "field-dropdown-empty", 4, "ngIf"],
              ["tabindex", "0", 1, "field-dropdown-row", 3, "click", "keydown"],
              [1, "field-dropdown-token-icon", 3, "token"],
              [1, "field-dropdown-sub-row"],
              [1, "text-right", "dropdown-token-name"],
              [1, "text-gray"],
              [1, "text-right", "dropdown-token-last-col"],
              ["class", "text-gray", 4, "ngIf"],
              [1, "field-dropdown-empty"],
              ["src", "/assets/images/coins.svg", "alt", "", 4, "ngIf"],
              ["src", "/assets/images/coins_white.svg", "alt", "", 4, "ngIf"],
              [1, "text-gray", "text-center"],
              ["color", "blue", 3, "clicked"],
              ["width", "24", "height", "24", 1, "mr-2"],
              [0, "xlink", "href", "assets/images/icons/plus.svg#plus"],
              ["src", "/assets/images/coins.svg", "alt", ""],
              ["src", "/assets/images/coins_white.svg", "alt", ""],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "widget-input", 0),
                e.ɵɵlistener("keydown", function (r) {
                  return n.keydownOnInput(r);
                }),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(1, Io, 4, 8, "div", 1),
                e.ɵɵpipe(2, "async")),
                2 & t &&
                  (e.ɵɵproperty("formControl", n.filterCtrl),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 2, n.filteredTokens$)));
            },
            dependencies: [
              y.mk,
              y.sg,
              y.O5,
              z.NgControlStatus,
              z.FormControlDirective,
              Pe.r,
              vo.o,
              yo.G,
              qt,
              y.Ov,
              y.H9,
              xo.s,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;padding:0 8px}.token-swap-field-wrap[_ngcontent-%COMP%]{width:100%}.token-swap-input-field[_ngcontent-%COMP%]{height:82px;padding:16px;margin:0;position:relative;z-index:20;width:100%}.field-grid[_ngcontent-%COMP%]{display:grid;align-items:center;grid-template-columns:1fr 40px;grid-column-gap:16px}.token-swap-field-row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.token-swap-field-first-row[_ngcontent-%COMP%]{width:100%;align-items:center;display:flex;justify-content:space-between}.token-swap-field-first-row[_ngcontent-%COMP%]   .token-swap-field-name[_ngcontent-%COMP%], .token-swap-field-first-row[_ngcontent-%COMP%]   .token-swap-field-usd-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.token-swap-field-first-row[_ngcontent-%COMP%]   .token-swap-field-value[_ngcontent-%COMP%]{display:flex}.token-swap-field-second-row[_ngcontent-%COMP%]{width:100%;align-items:center;display:flex;justify-content:space-between}.token-swap-select[_ngcontent-%COMP%]{line-height:32px}.token-swap-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:4px;margin-top:-2px}.token-swap-field-lock[_ngcontent-%COMP%]{height:18px;margin-top:-2px}.field-dropdown-scroll[_ngcontent-%COMP%]{margin:0 -8px;padding:0 8px;overflow:auto;height:440px}.field-dropdown-empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.field-dropdown-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:20px;margin:40px 0}.field-dropdown-row[_ngcontent-%COMP%]{border-radius:8px;padding:8px;color:var(--1inch__ui-02);transition:background-color .3s;display:grid;grid-template-columns:36px 1fr;font-size:16px;line-height:20px;grid-column-gap:8px;align-items:center;color:var(--1inch__ui-01)}.field-dropdown-row[_ngcontent-%COMP%]:hover, .field-dropdown-row[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03);outline:none!important}.field-dropdown-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.field-dropdown-token-icon[_ngcontent-%COMP%]{width:36px;height:36px}.field-dropdown-sub-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;grid-column-gap:8px}.dropdown-token-last-col[_ngcontent-%COMP%]{max-width:100%;overflow:hidden}.token-name-link[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.dropdown-token-name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.token-swap-field-progress[_ngcontent-%COMP%]{margin:0 16px}.sourceToken-dropdown-is-open[_ngcontent-%COMP%]{height:270px}.destination-dropdown-is-open[_ngcontent-%COMP%]{height:414px}.lock-btn[_ngcontent-%COMP%]{position:relative}.small-height[_ngcontent-%COMP%]{height:248px}.small-height[_ngcontent-%COMP%]   .field-dropdown-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0}.small-height[_ngcontent-%COMP%]   .field-dropdown-empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px}@media (min-width: 720px){.field-dropdown-row[_ngcontent-%COMP%]{margin:8px 0}}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      const Oo = ["tokenDropDown"],
        Mo = ["tokenList"],
        Eo = ["tokenAmountInput"];
      function Do(o, a) {
        1 & o && e.ɵɵelement(0, "img", 16);
      }
      function $o(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 6)(2, "div")(3, "div", 7)(4, "span", 8),
            e.ɵɵtext(5),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "span", 8),
            e.ɵɵtext(7),
            e.ɵɵpipe(8, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(9, "div", 9)(10, "button", 10),
            e.ɵɵelement(11, "img", 11),
            e.ɵɵelementStart(12, "span", 12),
            e.ɵɵtext(13),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(14, Do, 1, 0, "img", 13),
            e.ɵɵpipe(15, "async"),
            e.ɵɵelementStart(16, "input", 14, 15),
            e.ɵɵlistener("keypress", function (i) {
              const s = e.ɵɵrestoreView(t).ngIf,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(l.onlyNumberDotOrCommaKey(i, s.decimals));
            })("keyup", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.submitValue());
            })("blur", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.submitValue());
            })("paste", function (i) {
              const s = e.ɵɵrestoreView(t).ngIf,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(l.handlePaste(i, s.decimals));
            }),
            e.ɵɵpipe(18, "async"),
            e.ɵɵpipe(19, "async"),
            e.ɵɵpipe(20, "async"),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const t = a.ngIf,
            n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵclassProp("first-field", n.isToken0),
            e.ɵɵadvance(3),
            e.ɵɵpropertyInterpolate1(
              "id",
              "create-pool-dialog.",
              n.isToken0 ? "first" : "second",
              "-token-symbol"
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(t.symbol),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate1(
              "id",
              "create-pool-dialog.",
              n.isToken0 ? "first" : "second",
              "-token-usd-amount"
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              "\u2248 $",
              e.ɵɵpipeBind1(8, 12, n.usdAmount$),
              ""
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty("src", t.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(t.symbol),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(15, 14, n.showLock$)),
            e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate("value", e.ɵɵpipeBind1(20, 20, n.amount$)),
            e.ɵɵproperty(
              "disabled",
              e.ɵɵpipeBind1(18, 16, n.isAmountInputDisabled$)
            )(
              "ngClass",
              e.ɵɵpipeBind1(19, 18, n.isAmountInputDisabled$) &&
                "input-text-gray"
            );
        }
      }
      let Bo = (() => {
          class o {
            constructor(t, n, i, r, s) {
              (this.createPoolQuery = t),
                (this.gasPriceQuery = n),
                (this.createPoolService = i),
                (this.liquidityTransactionService = r),
                (this.priceQuery = s);
            }
            get tokenAmountInput() {
              return this.inputElementRef.nativeElement;
            }
            ngOnInit() {
              (this.selectedToken$ = this.createPoolQuery.select(
                this.isToken0 ? "token0" : "token1"
              )),
                (this.amount$ = this.createPoolQuery.select().pipe(
                  (0, h.U)(() => {
                    const { userAmountInput0: n, userAmountInput1: i } =
                      this.createPoolQuery.getValue();
                    return this.isToken0 ? n : i;
                  }),
                  (0, U.x)(),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                ));
              const t = (0, _.a)([
                this.selectedToken$,
                this.priceQuery.price2usd$,
              ]).pipe(
                (0, O.w)(([n]) =>
                  this.priceQuery.getPriceByToken$(
                    (0, V.G)(n.address) ? w.Qw.address : n.address
                  )
                )
              );
              (this.usdAmount$ = (0, _.a)([
                this.selectedToken$,
                this.amount$,
                t,
                this.priceQuery.getPriceByToken$(w.Qw.address),
              ]).pipe(
                (0, F.h)(([n, i, r, s]) => !!(n && i && r && s)),
                (0, h.U)(([n, i, r, s]) => {
                  try {
                    const l = b.O$.from(10).pow(n.decimals),
                      u =
                        +(0, g.Pz)(i, n.decimals)
                          .mul(r.ethPriceRaw)
                          .div(l)
                          .mul(s.usdPriceRaw)
                          .div(g.BD)
                          .toString() / 1e8;
                    return (0, Lt.l)(u.toString(), 2).toString();
                  } catch (l) {
                    return "0";
                  }
                }),
                (0, W.K)(() => "0")
              )),
                (this.showLock$ = (0, _.a)([
                  this.createPoolQuery.select(
                    this.isToken0 ? "isToken0Approved" : "isToken1Approved"
                  ),
                  this.createPoolQuery.select("status"),
                ]).pipe(
                  (0, h.U)(([n, i]) => !n && i !== ee.NOT_CREATED),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.isAmountInputDisabled$ = this.createPoolQuery
                  .select("poolTotalSupply")
                  .pipe((0, h.U)((n) => +n > 0)));
            }
            selectToken(t) {
              (0, V.G)(t.address)
                ? this.createPoolService.setToken(
                    Object.assign(Object.assign({}, t), { address: w.r_ }),
                    this.isToken0
                  )
                : (this.createPoolService.setToken(t, this.isToken0),
                  this.tokenDropDown.close());
            }
            handlePaste(t, n) {
              return (0, Se.nX)(t, n);
            }
            submitValue() {
              0 != +this.tokenAmountInput.value &&
                (this.createPoolService.updateInputFocus(E.tokenAmount),
                this.createPoolService.setAmount(
                  this.tokenAmountInput.value,
                  this.isToken0
                ));
            }
            onlyNumberDotOrCommaKey(t, n) {
              return (0, Se.dy)(t, this.tokenAmountInput, n);
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(
                e.ɵɵdirectiveInject(It),
                e.ɵɵdirectiveInject(Ot.j),
                e.ɵɵdirectiveInject(At),
                e.ɵɵdirectiveInject($t),
                e.ɵɵdirectiveInject(Te.u)
              );
            }),
            (o.ɵcmp = e.ɵɵdefineComponent({
              type: o,
              selectors: [["app-pool-token-input"]],
              viewQuery: function (t, n) {
                if (
                  (1 & t &&
                    (e.ɵɵviewQuery(Oo, 5),
                    e.ɵɵviewQuery(Mo, 5),
                    e.ɵɵviewQuery(Eo, 5)),
                  2 & t)
                ) {
                  let i;
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.tokenDropDown = i.first),
                    e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                      (n.tokenList = i.first),
                    e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                      (n.inputElementRef = i.first);
                }
              },
              inputs: { isToken0: "isToken0" },
              decls: 7,
              vars: 7,
              consts: [
                ["ngbDropdown", ""],
                ["tokenDropDown", "ngbDropdown"],
                [4, "ngIf"],
                [
                  "ngbDropdownMenu",
                  "",
                  "aria-labelledby",
                  "dropdownForm1",
                  1,
                  "token-field__dropdown",
                  3,
                  "ngClass",
                ],
                [
                  3,
                  "excludeOneInchLpTokens",
                  "excludeMigrationTokens",
                  "small",
                  "tokenSelected",
                ],
                ["tokenList", ""],
                [1, "field", "create-pool-input", "field-fix"],
                [1, "field-row", "mb-4"],
                [1, "ellipsis", "text-gray", 3, "id"],
                [1, "field-row"],
                [
                  "ngbDropdownToggle",
                  "",
                  1,
                  "btn",
                  "btn-link",
                  "text-decoration-none",
                  "token-select",
                ],
                ["alt", "", 1, "field-token-img", 3, "src"],
                [1, "ml-4"],
                [
                  "class",
                  "lock-icon",
                  "src",
                  "assets/images/icons/lock.svg",
                  "alt",
                  "",
                  4,
                  "ngIf",
                ],
                [
                  "autocomplete",
                  "off",
                  "inputmode",
                  "decimal",
                  "placeholder",
                  "0.0",
                  "tabindex",
                  "1",
                  1,
                  "field-input",
                  "field-input-fix",
                  3,
                  "disabled",
                  "ngClass",
                  "value",
                  "keypress",
                  "keyup",
                  "blur",
                  "paste",
                ],
                ["tokenAmountInput", ""],
                [
                  "src",
                  "assets/images/icons/lock.svg",
                  "alt",
                  "",
                  1,
                  "lock-icon",
                ],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.ɵɵelementStart(0, "div", 0, 1),
                  e.ɵɵtemplate(2, $o, 21, 22, "ng-container", 2),
                  e.ɵɵpipe(3, "async"),
                  e.ɵɵelementStart(4, "div", 3)(5, "app-token-list", 4, 5),
                  e.ɵɵlistener("tokenSelected", function (r) {
                    return n.selectToken(r);
                  }),
                  e.ɵɵelementEnd()()()),
                  2 & t &&
                    (e.ɵɵadvance(2),
                    e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(3, 5, n.selectedToken$)),
                    e.ɵɵadvance(2),
                    e.ɵɵproperty(
                      "ngClass",
                      n.isToken0 && "token-field__dropdown_first"
                    ),
                    e.ɵɵadvance(1),
                    e.ɵɵproperty("excludeOneInchLpTokens", !0)(
                      "excludeMigrationTokens",
                      !0
                    )("small", !0));
              },
              dependencies: [y.mk, y.O5, ue.jt, ue.iD, ue.Vi, Ao, y.Ov],
              styles: [
                ".field-fix[_ngcontent-%COMP%]{height:64px;padding:8px 16px;z-index:40}.field-input-fix[_ngcontent-%COMP%]{font-size:20px;padding:0!important}.token-field__dropdown[_ngcontent-%COMP%]{border-radius:12px;border:none;background:var(--1inch__ui-10-05);box-shadow:var(--1inch__shadow__dropdown);padding-top:27px;transform:translateY(45px)!important;width:100%!important;z-index:10}.token-field__dropdown_first[_ngcontent-%COMP%]{z-index:50}.token-select[_ngcontent-%COMP%]{padding:0!important;display:flex;align-items:center;color:var(--1inch-text-01)}.field-token-img[_ngcontent-%COMP%]{margin-top:-2px;width:24px}.first-field[_ngcontent-%COMP%]{z-index:60}",
              ],
            })),
            o
          );
        })(),
        Lo = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵcmp = e.ɵɵdefineComponent({
              type: o,
              selectors: [["app-svg-magic-icon"]],
              decls: 2,
              vars: 0,
              consts: [
                ["height", "24", "width", "24"],
                [0, "xlink", "href", "assets/images/icons/magic.svg#magic"],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.ɵɵnamespaceSVG(),
                  e.ɵɵelementStart(0, "svg", 0),
                  e.ɵɵelement(1, "use", 1),
                  e.ɵɵelementEnd());
              },
              styles: ["[_nghost-%COMP%]{display:contents}"],
              changeDetection: 0,
            })),
            o
          );
        })(),
        Fo = (() => {
          class o {
            transform(t) {
              return t
                ? `Insufficient ${null == t ? void 0 : t.symbol} balance`
                : "Insufficient balance";
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵpipe = e.ɵɵdefinePipe({
              name: "insufficientBalance",
              type: o,
              pure: !0,
            })),
            o
          );
        })();
      const Vo = ["usdAmountInput"],
        jo = ["poolTokenAmountInput"],
        Uo = ["firstTokenInput"],
        Qo = ["secondTokenInput"];
      function zo(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "h4", 29),
          e.ɵɵtext(1, " Enter LP token amount to mint "),
          e.ɵɵelementEnd());
      }
      function qo(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "h4", 30),
          e.ɵɵtext(1, " LP token amount "),
          e.ɵɵelementEnd());
      }
      function Ro(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 25),
            e.ɵɵtemplate(1, zo, 2, 0, "h4", 26),
            e.ɵɵtemplate(2, qo, 2, 0, "h4", 27),
            e.ɵɵelementStart(3, "span", 28),
            e.ɵɵlistener("click", function () {
              const r = e.ɵɵrestoreView(t).ngIf,
                s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.setMaxPoolTokenAmount(r));
            }),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()();
        }
        if (2 & o) {
          const t = a.ngIf,
            n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "remove-liquidity" !== n.viewMode),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "remove-liquidity" === n.viewMode),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" Max: ", t, " ");
        }
      }
      function No(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "h4", 34),
            e.ɵɵtext(2, "USD value"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span", 35),
            e.ɵɵlistener("click", function () {
              const r = e.ɵɵrestoreView(t).ngIf,
                s = e.ɵɵnextContext(4);
              return e.ɵɵresetView(s.setMaxPoolTokenAmount(r));
            }),
            e.ɵɵtext(4),
            e.ɵɵpipe(5, "currency"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(" Max: \u2248 ", e.ɵɵpipeBind1(5, 1, t), " ");
        }
      }
      function Ko(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 25),
            e.ɵɵtemplate(1, No, 6, 3, "ng-container", 24),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(2, 1, t.maxPoolTokenAmount$) || "0"
            );
        }
      }
      function Go(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 6),
            e.ɵɵtemplate(1, Ko, 3, 3, "div", 20),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementStart(3, "input", 31, 32),
            e.ɵɵlistener("keypress", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.onlyNumberDotOrCommaKeyUsdValue(i, 2));
            })("keyup", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.submitUsdValue(i));
            })("paste", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.handlePaste(i, 18));
            }),
            e.ɵɵpipe(5, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "span", 33),
            e.ɵɵtext(
              7,
              " Set value in USD to calculate tokens amount automatically "
            ),
            e.ɵɵelementEnd()();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(2, 2, t.maxUsdTokenAmount$) || "0"
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("value", e.ɵɵpipeBind1(5, 4, t.usd$));
        }
      }
      function Wo(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "div", 39),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 40),
          e.ɵɵelement(2, "use", 41),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(3, "p", 42),
          e.ɵɵtext(
            4,
            " This pool already created. You can provide liquidity to it "
          ),
          e.ɵɵelementEnd()());
      }
      function Ho(o, a) {
        1 & o &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 46),
          e.ɵɵtext(2, "Approving..."),
          e.ɵɵelementEnd(),
          e.ɵɵelement(3, "img", 47),
          e.ɵɵelementContainerEnd());
      }
      const Rt = function (o, a) {
        return { token0: o, token1: a };
      };
      function Yo(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelement(0, "span", 51),
            e.ɵɵpipe(1, "transloco"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async")),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(5);
          let n;
          e.ɵɵproperty(
            "innerText",
            e.ɵɵpipeBind2(
              1,
              1,
              "createPoolDialog.to-continue",
              e.ɵɵpureFunction2(
                8,
                Rt,
                null == (n = e.ɵɵpipeBind1(2, 4, t.token0$)) ? null : n.symbol,
                null == (n = e.ɵɵpipeBind1(3, 6, t.token1$)) ? null : n.symbol
              )
            )
          );
        }
      }
      function Xo(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 48),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵpipe(5, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(6, "tooltip", 49),
            e.ɵɵtemplate(
              7,
              Yo,
              4,
              11,
              "ng-template",
              null,
              50,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵreference(8),
            n = e.ɵɵnextContext(4);
          let i;
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                3,
                2,
                "createPoolDialog.allow-1inch-to-use",
                e.ɵɵpureFunction2(
                  9,
                  Rt,
                  null == (i = e.ɵɵpipeBind1(4, 5, n.token0$))
                    ? null
                    : i.symbol,
                  null == (i = e.ɵɵpipeBind1(5, 7, n.token1$)) ? null : i.symbol
                )
              ),
              " "
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty("tooltip", t);
        }
      }
      function Zo(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 43)(1, "div", 44)(2, "app-button", 45),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2).ngIf,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.infinityUnlock(i));
            }),
            e.ɵɵpipe(3, "async"),
            e.ɵɵtemplate(4, Ho, 4, 0, "ng-container", 24),
            e.ɵɵpipe(5, "async"),
            e.ɵɵtemplate(6, Xo, 9, 12, "ng-container", 24),
            e.ɵɵpipe(7, "async"),
            e.ɵɵelementEnd()()();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "disabled",
              e.ɵɵpipeBind1(3, 3, t.showApproveProgress$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(5, 5, t.showApproveProgress$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !e.ɵɵpipeBind1(7, 7, t.showApproveProgress$));
        }
      }
      function Jo(o, a) {
        1 & o &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 53),
          e.ɵɵelement(2, "app-svg-magic-icon"),
          e.ɵɵelementStart(3, "span", 54),
          e.ɵɵtext(4, "Enter amount"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd()),
          2 & o && (e.ɵɵadvance(1), e.ɵɵproperty("disabled", !0));
      }
      function ei(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 53),
            e.ɵɵelement(2, "app-svg-magic-icon"),
            e.ɵɵelementStart(3, "span", 54),
            e.ɵɵtext(4),
            e.ɵɵpipe(5, "insufficientBalance"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", !0),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(5, 2, t.tokenWithInsufficientBalance),
              " "
            );
        }
      }
      function ti(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 55),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(4).ngIf,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.provideLiquidity(i));
            }),
            e.ɵɵelement(2, "app-svg-magic-icon"),
            e.ɵɵelementStart(3, "span", 54),
            e.ɵɵtext(4, "Provide Liquidity"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
      }
      function ni(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 56),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(4).ngIf,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.removeLiquidity(i));
            }),
            e.ɵɵelement(2, "app-svg-magic-icon"),
            e.ɵɵelementStart(3, "span", 54),
            e.ɵɵtext(4, "Remove Liquidity"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
      }
      function oi(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Jo, 5, 1, "ng-container", 24),
            e.ɵɵtemplate(2, ei, 6, 4, "ng-container", 24),
            e.ɵɵtemplate(3, ti, 5, 0, "ng-container", 24),
            e.ɵɵtemplate(4, ni, 5, 0, "ng-container", 24),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = a.ngIf,
            n = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.needToEnterAmount),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.needToEnterAmount && !t.enough),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              !t.needToEnterAmount &&
                t.enough &&
                ("provide-liquidity" === n.viewMode || "create" === n.viewMode)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              !t.needToEnterAmount &&
                t.enough &&
                "remove-liquidity" === n.viewMode
            );
        }
      }
      function ii(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 52),
            e.ɵɵtemplate(1, oi, 5, 4, "ng-container", 24),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, t.dialogState$));
        }
      }
      function ri(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 52)(1, "app-button", 57),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2).ngIf,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.createPool(i));
            }),
            e.ɵɵelement(2, "app-svg-magic-icon"),
            e.ɵɵelementStart(3, "span", 58),
            e.ɵɵtext(4, "Create pool"),
            e.ɵɵelementEnd()()();
        }
      }
      function ai(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Wo, 5, 0, "div", 36),
            e.ɵɵtemplate(2, Zo, 8, 9, "div", 37),
            e.ɵɵtemplate(3, ii, 3, 3, "div", 38),
            e.ɵɵtemplate(4, ri, 5, 0, "div", 38),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().ngIf,
            n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              "NOT_CREATED" !== t.status && "remove-liquidity" !== n.viewMode
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "NEED_APPROVE" === t.status),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "READY" === t.status),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "NOT_CREATED" === t.status);
        }
      }
      function si(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 1)(1, "div")(2, "div", 2)(3, "button", 3),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(4, "svg", 4),
            e.ɵɵelement(5, "use", 5),
            e.ɵɵelementEnd()()(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(6, "h1", 6),
            e.ɵɵtext(7),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(8, "div", 7)(9, "p", 8),
            e.ɵɵtext(10, "50%"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(11, "p", 9),
            e.ɵɵtext(12, "50%"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(13, "div", 10)(14, "div")(15, "div", 11)(
              16,
              "div",
              12
            ),
            e.ɵɵelement(17, "app-pool-token-input", 13, 14),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(19, "div", 15)(20, "div", 11),
            e.ɵɵelement(21, "app-pool-token-input", 16, 17),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(23, "div", 18)(24, "span", 19),
            e.ɵɵtext(25, "50%"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(26, "span", 19),
            e.ɵɵtext(27, "50%"),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(28, "div", 6),
            e.ɵɵtemplate(29, Ro, 5, 3, "div", 20),
            e.ɵɵpipe(30, "async"),
            e.ɵɵelementStart(31, "input", 21, 22),
            e.ɵɵlistener("keypress", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(
                r.onlyNumberDotOrCommaKeyPoolTokenValue(i, 18)
              );
            })("keyup", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.submitPoolTokenValue(i));
            })("paste", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.handlePaste(i, 18));
            }),
            e.ɵɵpipe(33, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(34, Go, 8, 6, "div", 23),
            e.ɵɵpipe(35, "async"),
            e.ɵɵtemplate(36, ai, 5, 4, "ng-container", 24),
            e.ɵɵpipe(37, "async"),
            e.ɵɵelementEnd()();
        }
        if (2 & o) {
          const t = a.ngIf,
            n = e.ɵɵnextContext();
          e.ɵɵadvance(7),
            e.ɵɵtextInterpolate(n.title),
            e.ɵɵadvance(10),
            e.ɵɵproperty("isToken0", !0),
            e.ɵɵadvance(4),
            e.ɵɵproperty("isToken0", !1),
            e.ɵɵadvance(8),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(30, 9, n.maxPoolTokenAmount$) || "0"
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "disabled",
              "NOT_CREATED" === t.status || 0 == +t.poolTotalSupply
            )(
              "ngClass",
              ("NOT_CREATED" === t.status || 0 == +t.poolTotalSupply) &&
                "input-text-gray"
            )("value", e.ɵɵpipeBind1(33, 11, n.poolTokenAmount$)),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(35, 13, n.isBothTokensHavePrices$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(37, 15, n.walletConnectionQuery.isWalletConnected$)
            );
        }
      }
      var B = (() => {
        return (
          ((o = B || (B = {})).create = "create"),
          (o.provide = "provide-liquidity"),
          (o.remove = "remove-liquidity"),
          B
        );
        var o;
      })();
      const li = (375e3).toFixed(0);
      let Nt = (() => {
        class o {
          constructor(t, n, i, r, s, l, d, p, u, f, v, C, L, k, Q, q, oe) {
            var ie, re;
            if (
              ((this.dialogRef = n),
              (this.activeConnectionQuery = i),
              (this.walletConnectionQuery = r),
              (this.erc20Helper = s),
              (this.createPoolDialogQuery = l),
              (this.createPoolDialogService = d),
              (this.priceQuery = p),
              (this.liquidityPoolService = u),
              (this.tokenBalanceQuery = f),
              (this.gasPriceQuery = v),
              (this.liquidityTransactionService = C),
              (this.router = L),
              (this.routerNav = k),
              (this.translocoService = Q),
              (this.transactionHistoryQuery = q),
              (this.acceptTermsService = oe),
              (this.poolState$ = this.createPoolDialogQuery
                .select()
                .pipe(
                  (0, U.x)(tt.fS0),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.isBothTokensHavePrices$ = (0, _.a)([
                this.createPoolDialogQuery.tokens$,
                this.priceQuery.price2usd$,
              ]).pipe(
                (0, h.U)(([[m, A], T]) => {
                  var Y, X;
                  const R = (0, V.G)(m.address) ? w.xb : m.address,
                    ut = (0, V.G)(A.address) ? w.xb : A.address,
                    Qe =
                      null === (Y = null == T ? void 0 : T[R]) || void 0 === Y
                        ? void 0
                        : Y.ethPriceRaw,
                    Me =
                      null === (X = null == T ? void 0 : T[ut]) || void 0 === X
                        ? void 0
                        : X.ethPriceRaw;
                  return !!Qe && !!Me && 0 != +Qe && 0 != +Me;
                }),
                (0, U.x)(),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.usd$ = this.createPoolDialogQuery.usdAmount$),
              (this.poolTokenAmount$ =
                this.createPoolDialogQuery.poolTokenAmount$),
              (this.token0$ = this.createPoolDialogQuery.token0$),
              (this.token1$ = this.createPoolDialogQuery.token1$),
              (this.userToken0Balance$ = this.getTokenBalancePipe$(
                this.token0$
              )),
              (this.userToken1Balance$ = this.getTokenBalancePipe$(
                this.token1$
              )),
              (this.userBalances$ = (0, _.a)([
                this.userToken0Balance$,
                this.userToken1Balance$,
              ])),
              (this.showApproveProgress$ = this.createPoolDialogQuery
                .select(["poolAddress", "status", "token0", "token1"])
                .pipe(
                  (0, O.w)((m) => this.shouldShowApproveProgress$(m)),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.viewMode = B.create),
              (this.poolData$ = this.createPoolDialogQuery.tokens$.pipe(
                (0, O.w)(([m, A]) =>
                  this.liquidityPoolService
                    .getPoolAddress$(m.address, A.address)
                    .pipe(
                      (0, h.U)(
                        (T) => (
                          this.setActivatedRoute([m, A]),
                          { poolAddress: T, token0: m, token1: A }
                        )
                      )
                    )
                ),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.subscription = new me.w0()),
              (this.viewMode = t.viewMode),
              this.viewMode === B.create)
            ) {
              let m = Le.Ep[this.activeConnectionQuery.currentChainId];
              return (
                (0, V.M)(m.sourceToken.address) &&
                  (m = (0, tt.uhR)(["sourceToken", "address"], w.r_, m)),
                (0, V.M)(m.destinationToken.address) &&
                  (m = (0, tt.uhR)(["destinationToken", "address"], w.r_, m)),
                this.createPoolDialogService.setTokens(
                  m.sourceToken,
                  m.destinationToken
                ),
                void (this.title = this.translocoService.translate(
                  "createPoolDialog.create-liquidity-pool2"
                ))
              );
            }
            this.viewMode === B.provide
              ? (this.title = this.translocoService.translate(
                  "button.provide-liquidity2"
                ))
              : this.viewMode === B.remove &&
                (this.title = this.translocoService.translate(
                  "button.remove-liquidity2"
                ));
            let H = null === (ie = t.tokens) || void 0 === ie ? void 0 : ie[0],
              I = null === (re = t.tokens) || void 0 === re ? void 0 : re[1];
            (0, V.G)(H.address) &&
              (H = Object.assign(Object.assign({}, H), { address: w.r_ })),
              (0, V.G)(I.address) &&
                (I = Object.assign(Object.assign({}, I), { address: w.r_ })),
              this.createPoolDialogService.setTokens(H, I);
          }
          get usdAmountInput() {
            return this.usdAmountInputElementRef.nativeElement;
          }
          get poolTokenAmountInput() {
            return this.poolTokenAmountInputElementRef.nativeElement;
          }
          ngOnInit() {
            let t;
            (this.userLpTokenBalance$ = this.getPoolTokenBalancePipeLine$()),
              this.viewMode == B.create || this.viewMode == B.provide
                ? (t = this.buildProvideLiquidityDialogStatePipeline$())
                : this.viewMode === B.remove &&
                  (t = this.buildRemoveLiquidityDialogStatePipeline$()),
              (this.dialogState$ = t.pipe(
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.maxUsdTokenAmount$ = this.getMaxUsdBalancePipeLine$()),
              (this.maxPoolTokenAmount$ = this.getMaxTokenAmountPipeLine$());
            const n = (0, _.a)([
                this.walletConnectionQuery.isWalletConnected$,
                this.poolData$,
                this.createPoolDialogQuery.amounts$,
                this.isBothTokensHavePrices$,
                this.createPoolDialogQuery.inputFocus$,
              ]).pipe(
                (0, O.w)((p) => {
                  const [u, f, v, C] = p;
                  return this.refreshState$(u, f, v, C).pipe(
                    (0, Re.a)((L) =>
                      L.pipe(
                        (0, Ne.g)(Ke.N.refreshTime.balancesAndAllowancesDefault)
                      )
                    )
                  );
                })
              ),
              i = (0, _.a)([
                this.createPoolDialogQuery.inputFocus$,
                this.poolData$,
                this.createPoolDialogQuery.amounts$,
                this.priceQuery.price2usd$,
                this.isBothTokensHavePrices$,
              ]).pipe(
                (0, F.h)(([p, , , u]) => u && p !== E.usdAmount),
                (0, h.U)(([p, u, f, v]) =>
                  this.liquidityPoolService.getTotalSubTokensUsdPrice(
                    [u.token0, u.token1],
                    f,
                    v
                  )
                ),
                (0, P.b)((p) => {
                  this.createPoolDialogService.setUsdAmount(p);
                })
              ),
              r = (0, _.a)([
                this.createPoolDialogQuery.inputFocus$,
                this.isBothTokensHavePrices$,
                this.poolData$,
                this.createPoolDialogQuery.usdAmount$,
                this.priceQuery.price2usd$,
                (0, _.a)([
                  this.createPoolDialogQuery.balances$,
                  this.createPoolDialogQuery.totalSupply$,
                ]),
              ]).pipe(
                (0, F.h)(([p, u]) => p === E.usdAmount && u),
                (0, h.U)(([, , p, u, f, [v, C]]) =>
                  this.liquidityPoolService.getTokenAmountsFromUsd(
                    [p.token0, p.token1],
                    u,
                    v,
                    C,
                    f
                  )
                ),
                (0, P.b)((p) => {
                  this.createPoolDialogService.setAmounts(p[0], p[1]);
                })
              ),
              s = (0, _.a)([
                this.createPoolDialogQuery.inputFocus$,
                this.poolData$,
                this.createPoolDialogQuery.poolTokenAmount$,
                this.createPoolDialogQuery.balances$,
                this.createPoolDialogQuery.totalSupply$,
                this.userBalances$,
              ]).pipe(
                (0, F.h)(([p]) => p === E.poolTokenAmount),
                (0, h.U)((p) => {
                  const [, u, f, v, C, L] = p,
                    k = et(u, v, C);
                  return this.liquidityPoolService.getTokenAmountsFromPoolToken(
                    k,
                    f,
                    L
                  );
                }),
                (0, P.b)((p) => {
                  this.createPoolDialogService.setAmounts(p[0], p[1]);
                })
              ),
              l = (0, _.a)([
                this.createPoolDialogQuery.inputFocus$,
                this.poolData$,
                this.createPoolDialogQuery.amounts$,
                this.createPoolDialogQuery.balances$,
                this.createPoolDialogQuery.totalSupply$,
              ]).pipe(
                (0, F.h)(([p]) => p !== E.poolTokenAmount),
                (0, h.U)((p) => {
                  const [u, f, v, C, L] = p,
                    k = et(f, C, L);
                  return this.liquidityPoolService.getPoolTokenAmount(k, v);
                }),
                (0, P.b)((p) => {
                  this.createPoolDialogService.setPoolTokenAmount(p);
                })
              ),
              d = this.activeConnectionQuery.currentChainId$.pipe(
                (0, eo.T)(1),
                (0, P.b)(() => {
                  this.dialogRef.close();
                })
              );
            (0, le.O)(d, "closePoolDialogOnNetworkChanges$", this.subscription),
              this.subscription.add(
                n.subscribe({ error: (p) => (0, M.eK)(p, "av0043") })
              ),
              this.subscription.add(
                l.subscribe({ error: (p) => (0, M.eK)(p, "av0044") })
              ),
              this.subscription.add(
                s.subscribe({ error: (p) => (0, M.eK)(p, "av0045") })
              ),
              this.subscription.add(
                i.subscribe({ error: (p) => (0, M.eK)(p, "av0046") })
              ),
              this.subscription.add(
                r.subscribe({ error: (p) => (0, M.eK)(p, "av0047") })
              );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          handlePaste(t, n) {
            return (0, Se.nX)(t, n);
          }
          createPool(t) {
            const n = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, P.b)(() => {
                this.liquidityTransactionService.createPool(
                  t.token0,
                  t.token1,
                  () => {
                    this.dialogRef.close();
                  }
                );
              })
            );
            (0, le.O)(n, "createPool$");
          }
          provideLiquidity(t) {
            const n = [
                (0, g.Pz)(t.userAmountInput0, t.token0.decimals),
                (0, g.Pz)(t.userAmountInput1, t.token1.decimals),
              ],
              i = n.map((s) => s.mul(995).div(1e3)),
              r = this.acceptTermsService.checkTermsAccepting().pipe(
                (0, P.b)(() => {
                  this.liquidityTransactionService.provideLiquidity(
                    t.poolAddress,
                    [t.token0, t.token1],
                    n,
                    i,
                    t
                  );
                })
              );
            (0, le.O)(r, "provideLiquidity$");
          }
          removeLiquidity(t) {
            const i = [
                (0, g.Pz)(t.userAmountInput0, t.token0.decimals),
                (0, g.Pz)(t.userAmountInput1, t.token1.decimals),
              ].map((s) => s.mul(995).div(1e3)),
              r = (0, g.Pz)(t.poolTokenAmount, 18);
            this.liquidityTransactionService.removeLiquidity(
              t.poolAddress,
              [t.token0, t.token1],
              r,
              i,
              t
            );
          }
          infinityUnlock(t) {
            const n = this.acceptTermsService.checkTermsAccepting().pipe(
              (0, P.b)(() => {
                t.isToken0Approved || t.isToken1Approved
                  ? t.isToken0Approved
                    ? t.isToken1Approved ||
                      this.liquidityTransactionService.sendApproveTransaction(
                        t.token1,
                        t.poolAddress,
                        ae.zL
                      )
                    : this.liquidityTransactionService.sendApproveTransaction(
                        t.token0,
                        t.poolAddress,
                        ae.zL
                      )
                  : this.liquidityTransactionService.sendTwoStepApproveTransaction(
                      t.token0,
                      t.token1,
                      t.poolAddress,
                      ae.zL
                    );
              })
            );
            (0, le.O)(n, "poolInfinityUnlock$");
          }
          onlyNumberDotOrCommaKeyUsdValue(t, n) {
            return (0, Se.dy)(t, this.usdAmountInput, n);
          }
          onlyNumberDotOrCommaKeyPoolTokenValue(t, n) {
            return (0, Se.dy)(t, this.poolTokenAmountInput, n);
          }
          submitUsdValue(t) {
            this.createPoolDialogService.updateInputFocus(E.usdAmount);
            let n = this.usdAmountInput.value;
            (0 === n.indexOf(".") || 0 === n.indexOf(",")) && (n = "0" + n),
              this.createPoolDialogService.setUsdAmount(n);
          }
          submitPoolTokenValue(t) {
            this.createPoolDialogService.updateInputFocus(E.poolTokenAmount);
            let n = this.poolTokenAmountInput.value;
            (0 === n.indexOf(".") || 0 === n.indexOf(",")) && (n = "0" + n),
              this.createPoolDialogService.setPoolTokenAmount(n);
          }
          setMaxPoolTokenAmount(t) {
            this.createPoolDialogService.updateInputFocus(E.poolTokenAmount),
              this.createPoolDialogService.setPoolTokenAmount(t, !0);
          }
          setActivatedRoute(t) {
            this.routerNav.navigate([], {
              relativeTo: this.router,
              queryParams: { token0: t[0].address, token1: t[1].address },
              queryParamsHandling: "merge",
            });
          }
          getTokenBalancePipe$(t) {
            return (0, _.a)([
              t,
              this.tokenBalanceQuery.balancesInfo$,
              this.walletConnectionQuery.connectedWalletAddress$,
              this.gasPriceQuery.currentGasPrice$,
            ]).pipe(
              (0, O.w)(([n, i, r, s]) => {
                var l;
                if (!r) return (0, x.of)("0");
                const d = (0, V.G)(n.address) ? w.Qw.address : n.address,
                  p = Kt(
                    n,
                    null === (l = null == i ? void 0 : i[d]) || void 0 === l
                      ? void 0
                      : l.rawBalance,
                    s
                  );
                return p
                  ? (0, x.of)((0, g.kg)(p, n.decimals))
                  : this.erc20Helper.getErc20Balance(d, r).pipe(
                      (0, h.U)((u) => {
                        const f = Kt(n, u.toString(), s);
                        return (0, g.kg)(f, n.decimals);
                      })
                    );
              }),
              (0, U.x)(),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          refreshState$(t, n, i, r) {
            const s = this.liquidityPoolService.getPoolDetails$(
                n.poolAddress,
                n.token0,
                n.token1
              ),
              l =
                this.viewMode !== B.remove
                  ? this.liquidityPoolService.checkPoolApprovalsIfNeeded$(
                      t,
                      n,
                      i[0],
                      i[1]
                    )
                  : (0, x.of)({ isToken0Approved: !0, isToken1Approved: !0 });
            return (0, _.a)([s, l]).pipe(
              (0, P.b)(([d, { isToken0Approved: p, isToken1Approved: u }]) => {
                this.createPoolDialogService.updatePoolState(
                  d,
                  i[0],
                  i[1],
                  t,
                  p,
                  u,
                  r
                );
              })
            );
          }
          getPoolTokenBalancePipeLine$() {
            return (0, _.a)([
              this.poolData$,
              this.walletConnectionQuery.connectedWalletAddress$,
            ]).pipe(
              (0, O.w)(([{ poolAddress: t }, n]) =>
                n ? this.erc20Helper.getErc20Balance(t, n) : (0, x.of)(se.Y)
              ),
              (0, U.x)(),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          buildRemoveLiquidityDialogStatePipeline$() {
            return (0, _.a)([
              this.createPoolDialogQuery.select("poolTokenAmount"),
              this.userLpTokenBalance$,
            ]).pipe(
              (0, h.U)((t) => {
                const [n, i] = t;
                if (!n || 0 == +n)
                  return {
                    enough: !1,
                    tokenWithInsufficientBalance: void 0,
                    needToEnterAmount: !0,
                  };
                const r = (0, g.Pz)(n, 18);
                return i.gte(r)
                  ? {
                      enough: !0,
                      tokenWithInsufficientBalance: void 0,
                      needToEnterAmount: !1,
                    }
                  : {
                      enough: !1,
                      tokenWithInsufficientBalance: void 0,
                      needToEnterAmount: !1,
                    };
              })
            );
          }
          buildProvideLiquidityDialogStatePipeline$() {
            return (0, _.a)([
              this.createPoolDialogQuery.tokens$,
              this.createPoolDialogQuery.select([
                "userAmountInput0",
                "userAmountInput1",
              ]),
              this.userBalances$,
            ]).pipe(
              (0, h.U)((t) => {
                const [n, i, r] = t;
                if (
                  !(
                    (null == i ? void 0 : i.userAmountInput0) &&
                    +i.userAmountInput0 > 0 &&
                    (null == i ? void 0 : i.userAmountInput1) &&
                    +i.userAmountInput1 > 0
                  )
                )
                  return {
                    enough: !1,
                    tokenWithInsufficientBalance: void 0,
                    needToEnterAmount: !0,
                  };
                const d = [i.userAmountInput0, i.userAmountInput1].map((v, C) =>
                    (0, g.Pz)(v, n[C].decimals)
                  ),
                  p = r.map((v, C) => (0, g.Pz)(v, n[C].decimals)),
                  u = d[0].lte(p[0]),
                  f = d[1].lte(p[1]);
                return u && f
                  ? {
                      enough: !0,
                      tokenWithInsufficientBalance: void 0,
                      needToEnterAmount: !1,
                    }
                  : u || f
                  ? u
                    ? {
                        enough: !1,
                        tokenWithInsufficientBalance: n[1],
                        needToEnterAmount: !1,
                      }
                    : {
                        enough: !1,
                        tokenWithInsufficientBalance: n[0],
                        needToEnterAmount: !1,
                      }
                  : {
                      enough: !1,
                      tokenWithInsufficientBalance: void 0,
                      needToEnterAmount: !1,
                    };
              })
            );
          }
          getMaxTokenAmountPipeLine$() {
            return this.viewMode !== B.remove
              ? (0, _.a)([
                  this.poolData$,
                  this.userBalances$,
                  this.createPoolDialogQuery.balances$,
                  this.createPoolDialogQuery.totalSupply$,
                  this.createPoolDialogQuery.inputFocus$,
                  this.createPoolDialogQuery.isSetMaxPoolToken$,
                ]).pipe(
                  (0, h.U)((t) => {
                    const [n, i, r, s, l, d] = t,
                      p = et(n, r, s),
                      u = this.liquidityPoolService.getPoolTokenAmount(p, i);
                    return (
                      l === E.poolTokenAmount &&
                        d &&
                        this.createPoolDialogService.setPoolTokenAmount(u, !0),
                      u
                    );
                  })
                )
              : (0, _.a)([
                  this.userLpTokenBalance$,
                  this.createPoolDialogQuery.inputFocus$,
                  this.createPoolDialogQuery.isSetMaxPoolToken$,
                ]).pipe(
                  (0, h.U)((t) => {
                    const [n, i, r] = t,
                      s = (0, g.kg)(n.toString(), 18);
                    return (
                      i === E.poolTokenAmount &&
                        r &&
                        this.createPoolDialogService.setPoolTokenAmount(s, !0),
                      s
                    );
                  })
                );
          }
          getMaxUsdBalancePipeLine$() {
            return this.viewMode !== B.remove
              ? (0, _.a)([
                  this.poolData$,
                  this.userBalances$,
                  this.priceQuery.price2usd$,
                  this.createPoolDialogQuery.inputFocus$,
                  this.createPoolDialogQuery.isSetMaxUsd$,
                ]).pipe(
                  (0, h.U)((t) => {
                    const [n, i, r, s, l] = t,
                      d = this.liquidityPoolService.getMaxUsdAmount(
                        [n.token0, n.token1],
                        i,
                        r
                      );
                    return (
                      s === E.usdAmount &&
                        l &&
                        this.createPoolDialogService.setUsdAmount(d, !0),
                      d
                    );
                  })
                )
              : (0, _.a)([
                  this.poolData$,
                  (0, _.a)([
                    this.userLpTokenBalance$,
                    this.createPoolDialogQuery.balances$,
                    this.createPoolDialogQuery.totalSupply$,
                  ]),
                  this.priceQuery.price2usd$,
                  this.createPoolDialogQuery.inputFocus$,
                  this.createPoolDialogQuery.isSetMaxUsd$,
                ]).pipe(
                  (0, h.U)((t) => {
                    const [n, [i, r, s], l, d, p] = t;
                    try {
                      const u = b.O$.from(r[0]),
                        C = we(i, [u, b.O$.from(r[1])], b.O$.from(s)),
                        L = (0, g.kg)(C[0].toString(), n.token0.decimals),
                        k = (0, g.kg)(C[1].toString(), n.token1.decimals),
                        Q = this.liquidityPoolService.getMaxUsdAmount(
                          [n.token0, n.token1],
                          [L, k],
                          l
                        );
                      return (
                        d === E.usdAmount &&
                          p &&
                          this.createPoolDialogService.setUsdAmount(Q, !0),
                        Q
                      );
                    } catch (u) {
                      return "0";
                    }
                  })
                );
          }
          shouldShowApproveProgress$({ status: t }) {
            return t !== ee.NEED_APPROVE
              ? (0, x.of)(!1)
              : this.transactionHistoryQuery
                  .pendingTransactionsByType(ve.E.approveLiquidityPool)
                  .pipe((0, h.U)((n) => n.length > 0));
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(N.WI),
              e.ɵɵdirectiveInject(N.so),
              e.ɵɵdirectiveInject(he.r),
              e.ɵɵdirectiveInject(fe.r),
              e.ɵɵdirectiveInject(ae.ZU),
              e.ɵɵdirectiveInject(It),
              e.ɵɵdirectiveInject(At),
              e.ɵɵdirectiveInject(Te.u),
              e.ɵɵdirectiveInject(Ze),
              e.ɵɵdirectiveInject(nt.n4),
              e.ɵɵdirectiveInject(Ot.j),
              e.ɵɵdirectiveInject($t),
              e.ɵɵdirectiveInject(K.gz),
              e.ɵɵdirectiveInject(K.F0),
              e.ɵɵdirectiveInject(j.Vn),
              e.ɵɵdirectiveInject(Bt.x),
              e.ɵɵdirectiveInject(Dt.N)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-create-pool-dialog"]],
            viewQuery: function (t, n) {
              if (
                (1 & t &&
                  (e.ɵɵviewQuery(Vo, 5),
                  e.ɵɵviewQuery(jo, 5),
                  e.ɵɵviewQuery(Uo, 5),
                  e.ɵɵviewQuery(Qo, 5)),
                2 & t)
              ) {
                let i;
                e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                  (n.usdAmountInputElementRef = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.poolTokenAmountInputElementRef = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.firstTokenInput = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.secondTokenInput = i.first);
              }
            },
            decls: 2,
            vars: 3,
            consts: [
              [
                "class",
                "card create-pool-card",
                "mat-dialog-content",
                "",
                4,
                "ngIf",
              ],
              ["mat-dialog-content", "", 1, "card", "create-pool-card"],
              ["mat-dialog-actions", "", 1, "fix-mat-dialog-close"],
              [
                "data-id",
                "create-pool-dialog.close-icon",
                "aria-label",
                "close",
                "mat-dialog-close",
                "",
                "mat-icon-button",
                "",
                1,
                "icon-button-gray",
              ],
              ["height", "24", "width", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [1, "mb-20"],
              [1, "mb-20", "liquidity-pool-parts-mobile"],
              [1, "first-part", "create-pool-dialog__text_white"],
              [1, "second-part", "create-pool-dialog__text_white"],
              [1, "mb-20", "create-pool-row"],
              [1, "mb-8"],
              [1, "first-token-input"],
              [
                "data-id",
                "create-pool-dialog.first-token-input",
                3,
                "isToken0",
              ],
              ["firstTokenInput", ""],
              [1, "mt-20"],
              [
                "data-id",
                "create-pool-dialog.second-token-input",
                3,
                "isToken0",
              ],
              ["secondTokenInput", ""],
              [1, "liquidity-pool-parts-desktop"],
              [1, "create-pool-dialog__text_white"],
              ["class", "field-header", 4, "ngIf"],
              [
                "data-id",
                "create-pool-dialog.lp-token-input",
                "autocomplete",
                "off",
                "inputmode",
                "decimal",
                "placeholder",
                "0.0",
                "tabindex",
                "1",
                1,
                "field",
                "field-simple",
                "create-pool-input",
                "mb-8",
                3,
                "disabled",
                "ngClass",
                "value",
                "keypress",
                "keyup",
                "paste",
              ],
              ["poolTokenAmountInput", ""],
              ["class", "mb-20", 4, "ngIf"],
              [4, "ngIf"],
              [1, "field-header"],
              [
                "class",
                "text-gray",
                "transloco",
                "createPoolDialog.enter-lp-token-amount-to-mint",
                4,
                "ngIf",
              ],
              ["class", "text-gray", 4, "ngIf"],
              [
                "data-id",
                "create-pool-dialog.token-set-max",
                1,
                "text-gray",
                "pool-token-max-amount",
                3,
                "click",
              ],
              [
                "transloco",
                "createPoolDialog.enter-lp-token-amount-to-mint",
                1,
                "text-gray",
              ],
              [1, "text-gray"],
              [
                "data-id",
                "create-pool-dialog.usd-input",
                "autocomplete",
                "off",
                "inputmode",
                "decimal",
                "placeholder",
                "0.0",
                "tabindex",
                "1",
                1,
                "field",
                "field-simple",
                "create-pool-input",
                "mb-8",
                3,
                "value",
                "keypress",
                "keyup",
                "paste",
              ],
              ["usdAmountInput", ""],
              [
                "transloco",
                "createPoolDialog.set-value-in-usd",
                1,
                "text-gray",
                "mb-40",
              ],
              ["transloco", "value.usd2", 1, "text-gray"],
              [
                "data-id",
                "create-pool-dialog.usd-set-max",
                1,
                "text-gray",
                "pool-token-max-amount",
                3,
                "click",
              ],
              ["class", "mt-20 pool-already-created", 4, "ngIf"],
              ["class", "d-flex justify-content-center mt-32", 4, "ngIf"],
              ["class", "mt-40 d-flex justify-content-center", 4, "ngIf"],
              [1, "mt-20", "pool-already-created"],
              ["height", "16", "width", "16", 1, "text-gray"],
              [0, "xlink", "href", "assets/images/icons/info.svg#info"],
              [
                "transloco",
                "createPoolDialog.pool-already-created",
                1,
                "text-gray",
              ],
              [1, "d-flex", "justify-content-center", "mt-32"],
              [1, "buttons-grid-single-btn"],
              [
                "data-id",
                "create-pool-dialog.unlock-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                1,
                "token-swap-button",
                "mb-12",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "button.approving", 1, "approving-title"],
              [
                "src",
                "assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "approving-img",
              ],
              [1, "button-with-long-title"],
              [
                "direction",
                "right",
                "contentType",
                "question",
                "iconColor",
                "white",
                "data-id",
                "synth-token-locked-icon",
                3,
                "tooltip",
              ],
              ["tooltip", ""],
              [3, "innerText"],
              [1, "mt-40", "d-flex", "justify-content-center"],
              ["color", "blue", 3, "disabled"],
              [1, "ml-8"],
              [
                "data-id",
                "create-pool-dialog.provide-liquidity-button",
                "color",
                "blue",
                3,
                "clicked",
              ],
              [
                "data-id",
                "create-pool-dialog.remove-liquidity-button",
                "color",
                "blue",
                3,
                "clicked",
              ],
              [
                "data-id",
                "create-pool-dialog.create-pool-button",
                "color",
                "blue",
                3,
                "clicked",
              ],
              ["transloco", "button.create-pool2", 1, "ml-8"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵtemplate(0, si, 38, 17, "div", 0), e.ɵɵpipe(1, "async")),
                2 & t &&
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 1, n.poolState$));
            },
            dependencies: [
              y.mk,
              y.O5,
              j.KI,
              Pe.r,
              N.ZT,
              N.xY,
              N.H8,
              Ee.lW,
              Ie.K,
              Bo,
              Lo,
              y.Ov,
              y.H9,
              j.Ot,
              Fo,
            ],
            styles: [
              ".create-pool-card[_ngcontent-%COMP%]{width:800px;overflow:auto!important;background:var(--1inch-bg-02)}@media (max-width: 800px){.create-pool-card[_ngcontent-%COMP%]{width:auto}}.create-pool-input[_ngcontent-%COMP%]{border:none;width:100%}.create-pool-red-border[_ngcontent-%COMP%]{border:1px solid #c13d54}.info-image[_ngcontent-%COMP%]{color:var(--1inch-common-bg-04)}.buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}@media (max-width: 480px){.buttons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-row-gap:16px}}.buttons-grid-single-btn[_ngcontent-%COMP%]{min-width:50%}@media (max-width: 480px){.buttons-grid-single-btn[_ngcontent-%COMP%]{min-width:100%}}.pool-already-created[_ngcontent-%COMP%]{padding:16px;border-radius:16px;display:grid;grid-template-columns:16px 1fr;grid-column-gap:8px;align-items:center;background:rgba(75,96,126,.1)}.pool-token-max-amount[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--1inch-common-btn-bg-01)}.create-pool-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 140px;grid-column-gap:32px}@media (max-width: 800px){.create-pool-row[_ngcontent-%COMP%]{display:block}}.liquidity-pool-parts-desktop[_ngcontent-%COMP%]{background-image:url(/../../../../assets/images/liquidity-pool-parts.svg);height:140px;width:140px;display:flex;justify-content:space-around;align-items:center}@media (max-width: 800px){.liquidity-pool-parts-desktop[_ngcontent-%COMP%]{display:none}}.liquidity-pool-parts-mobile[_ngcontent-%COMP%]{display:none}@media (max-width: 800px){.liquidity-pool-parts-mobile[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr;border-radius:15px;overflow:hidden;font-size:20px}.liquidity-pool-parts-mobile[_ngcontent-%COMP%]   .first-part[_ngcontent-%COMP%]{text-align:center;display:block;background:#5599ff;padding:5px 0}.liquidity-pool-parts-mobile[_ngcontent-%COMP%]   .second-part[_ngcontent-%COMP%]{text-align:center;display:block;background:#23c68b;padding:5px 0}}@media (max-width: 480px){.liquidity-pool-parts-mobile[_ngcontent-%COMP%]{font-size:16px}}.button-with-long-title[_ngcontent-%COMP%]{white-space:break-spaces;line-height:22px}.approving-img[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:4px}.approving-title[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.create-pool-dialog__text_white[_ngcontent-%COMP%]{color:var(--1inch-common-text-01)}",
            ],
          })),
          o
        );
      })();
      function Kt(o, a, t) {
        if (!a) return;
        if (!(0, V.G)(o.address)) return a;
        const n = b.O$.from(li).mul(t);
        return b.O$.from(a).sub(n).toString();
      }
      var ci = c(18084);
      const Gt = "0x17f2ec2158c56e609fc4312b796add2574bb4202",
        Wt = "0x8f2f549a762e45aad7192f1865dc500245975690",
        Ht = "0x168926cd2b2559c8359a7c0ffd2be7ad56e1f2a4",
        Yt = "0xfe58247b3c88e8e4e5e8fafb1be79797fb7351b0",
        Xt = "0x70be481c104772263d74af4302cae9c4d39e27ce",
        Zt = {
          symbol: "ATOM",
          address: "0x0eb3a705fc54725037cc9e008bdede697f62f335",
          decimal: 18,
        },
        Jt = {
          symbol: "BNB",
          address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          decimal: 18,
        },
        pi = {
          symbol: "TIP",
          address: "0x326a302f4a1dc49513cc16b9fd02c5cdb2222297",
          decimal: 18,
        },
        di = {
          symbol: "LINK",
          address: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
          decimal: 18,
        },
        ui = {
          symbol: "FOX",
          address: "0xfad8e46123d7b4e77496491769c167ff894d2acb",
          decimal: 9,
        },
        mi = {
          symbol: "LTC",
          address: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
          decimal: 18,
        },
        en = {
          symbol: "WBNB",
          address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          decimal: 18,
        };
      function Ae(o, a, t) {
        return {
          apy: "-",
          createdAtBlockNumber: "",
          pair: o,
          reserve0: "0",
          reserve1: "0",
          reserveUSD: "0",
          swapEarningsPercent24h: "0",
          swapEarningsUSD24h: "0.00",
          token0: { address: a.address, symbol: a.symbol, decimals: a.decimal },
          token1: { address: t.address, symbol: t.symbol, decimals: t.decimal },
          totalSupply: "0",
          volumeUSD: "0",
          volumeUSD24h: "0",
        };
      }
      var tn = c(78336),
        fi = c(83140);
      let nn = (() => {
        class o {
          constructor(t, n) {
            (this.http = t), (this.activeConnectionQuery = n);
          }
          getPairs$() {
            return this.getPairsOfProtocolVersion$(
              this.activeConnectionQuery.currentChainId
            );
          }
          getPairsOfProtocolVersion$(t) {
            if (this.activeConnectionQuery.isRestrainedNetwork) return xt.C;
            const i = `${this.activeConnectionQuery.getApiEndpoint(
              "liquidityProtocolGraphApiEndpoint"
            )}/pairs`;
            return this.http.get(i).pipe(
              (0, ci.V)(3e3),
              (0, Ye.X)(2),
              (0, W.K)((r) => (fi.error(r), (0, x.of)([]))),
              (0, h.U)(
                (r) => (
                  t === Le.$L.binanceMainnet &&
                    (function gi(o) {
                      const a = (t) =>
                        o.find((n) => {
                          var i;
                          return (
                            (null === (i = n.pair) || void 0 === i
                              ? void 0
                              : i.toLowerCase()) === t
                          );
                        });
                      if (!a(Gt)) {
                        const t = Ae(Gt, Jt, pi);
                        o.push(t);
                      }
                      if (!a(Wt)) {
                        const t = Ae(Wt, Zt, di);
                        o.push(t);
                      }
                      if (!a(Ht)) {
                        const t = Ae(Ht, Jt, ui);
                        o.push(t);
                      }
                      if (!a(Yt)) {
                        const t = Ae(Yt, mi, en);
                        o.push(t);
                      }
                      if (!a(Xt)) {
                        const t = Ae(Xt, Zt, en);
                        o.push(t);
                      }
                    })(r),
                  r.map((s) =>
                    Object.assign(Object.assign({}, s), { chain: t })
                  )
                )
              ),
              (0, Z.q)(1)
            );
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(e.ɵɵinject(tn.eN), e.ɵɵinject(he.r));
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      var Fe = (() => {
        return (
          ((o = Fe || (Fe = {})).liquidity = "liquidity"),
          (o.myLiquidity = "myLiquidity"),
          (o.apy = "apy"),
          Fe
        );
        var o;
      })();
      const hi = {
        sortBy: Fe.liquidity,
        pageIndex: 0,
        pageSize: 25,
        sortingOrder: "desc",
      };
      let te = class extends xe.yh {
        constructor() {
          super(
            (function vi() {
              return Object.assign({}, hi);
            })()
          );
        }
      };
      (te.ɵfac = function (a) {
        return new (a || te)();
      }),
        (te.ɵprov = e.ɵɵdefineInjectable({ token: te, factory: te.ɵfac })),
        (te = (0, Tt.__decorate)([(0, xe.yC)({ name: "pools-page" })], te));
      var yi = c(65106);
      const on = "earn/pools";
      let Ve = (() => {
        class o {
          constructor(t, n, i, r, s, l, d) {
            (this.poolsPageStore = t),
              (this.router = n),
              (this.tokensQuery = i),
              (this.activatedRoute = r),
              (this.matDialogService = s),
              (this.activeConnectionQuery = l),
              (this.resetOnNetworkChangesService = d),
              (this.poolsFilterFromQueryParams$ =
                this.activatedRoute.queryParams.pipe(
                  (0, h.U)((p) => (p.filter ? p.filter.split(",") : [])),
                  (0, h.U)((p) =>
                    p
                      .map((u) => this.tokensQuery.findTokenWith("symbol", u))
                      .filter((u) => !!u)
                  ),
                  (0, $.d)({ refCount: !0, bufferSize: 1 })
                )),
              this.resetPoolsFilterOnNetworkChanges();
          }
          addTokenToFilter(t) {
            return this.poolsFilterFromQueryParams$.pipe(
              (0, P.b)((n) => {
                const r = n.find(
                  (s) => s.symbol.toLowerCase() === t.symbol.toLowerCase()
                )
                  ? n
                  : [...n, t];
                this.navigateToPoolsPageWithFilters(r);
              }),
              (0, Z.q)(1)
            );
          }
          removeTokenFromFilter(t) {
            return this.poolsFilterFromQueryParams$.pipe(
              (0, P.b)((n) => {
                const i = n.filter(
                  (r) => r.symbol.toLowerCase() !== t.symbol.toLowerCase()
                );
                this.navigateToPoolsPageWithFilters(i);
              }),
              (0, Z.q)(1)
            );
          }
          resetPoolsFilter() {
            !this.router.url.includes(on) ||
              this.navigateToPoolsPageWithFilters([]);
          }
          sortPools(t, n) {
            this.poolsPageStore.update({ sortBy: t, sortingOrder: n });
          }
          selectPage(t) {
            var n;
            const { pageIndex: i, pageSize: r } = t;
            this.poolsPageStore.update({
              pageIndex: i,
              pageSize:
                r ||
                (null === (n = this.poolsPageStore.getValue()) || void 0 === n
                  ? void 0
                  : n.pageSize),
            });
          }
          openLiquidityPoolModal(t, n) {
            const i = { viewMode: n, tokens: t };
            t && t.length > 1 && this.setActivatedRoute(t, n),
              this.matDialogService
                .open(Nt, { data: i })
                .afterClosed()
                .subscribe(
                  () => {
                    this.removeQueryParams();
                  },
                  (r) => (0, M.eK)(r, "is0001")
                );
          }
          removeQueryParams() {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: { token0: null, token1: null, action: null },
              queryParamsHandling: "merge",
            });
          }
          navigateToPoolsPageWithFilters(t) {
            this.router.navigate(
              [`${this.activeConnectionQuery.currentChainId}/${on}`],
              {
                queryParams: { filter: t.map((r) => r.symbol).join(",") },
                queryParamsHandling: "merge",
              }
            );
          }
          setActivatedRoute(t, n) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                token0: t[0].address,
                token1: t[1].address,
                action: n === B.remove ? "remove" : null,
              },
              queryParamsHandling: "merge",
            });
          }
          resetPoolsFilterOnNetworkChanges() {
            this.resetOnNetworkChangesService.onNetworkChangeReset$
              .pipe(
                (0, P.b)(() => {
                  this.resetPoolsFilter();
                })
              )
              .subscribe({
                error: (t) => (0, M.eK)(t, "resetPoolsFilterOnNetworkChanges"),
              });
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵinject(te),
              e.ɵɵinject(K.F0),
              e.ɵɵinject(rt.d),
              e.ɵɵinject(K.gz),
              e.ɵɵinject(N.uw),
              e.ɵɵinject(he.r),
              e.ɵɵinject(yi.a)
            );
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({ token: o, factory: o.ɵfac })),
          o
        );
      })();
      const xi = (o, a) => (t, n) => (+n[o] - +t[o]) * ("asc" === a ? -1 : 1);
      let at = (() => {
        class o extends xe.AE {
          constructor(t, n, i) {
            super(t),
              (this.store = t),
              (this.uiPoolQuery = n),
              (this.poolsPageService = i),
              (this.visiblePools$ = (0, _.a)([
                this.select([
                  "sortBy",
                  "sortingOrder",
                  "pageIndex",
                  "pageSize",
                ]),
                this.poolsPageService.poolsFilterFromQueryParams$,
              ]).pipe(
                (0, O.w)((r) => {
                  const [s, l] = r,
                    {
                      sortBy: d,
                      sortingOrder: p,
                      pageIndex: u,
                      pageSize: f,
                    } = s;
                  return this.uiPoolQuery
                    .selectAll({
                      filterBy: [
                        (v) =>
                          ((o, a) => {
                            const t = [o.token0.address, o.token1.address];
                            if (
                              (t.includes(w.Ox) || t.includes(w.pc)) &&
                              !o.myLiquidity
                            )
                              return !1;
                            if (null == a || !a.length) return !0;
                            const i = o.tokens.map((r) => r.address);
                            for (const r of a)
                              if (!i.includes(r.address)) return !1;
                            return !0;
                          })(v, l),
                      ],
                      sortBy: xi(d, p),
                      limitTo: f + u * f,
                    })
                    .pipe(
                      (0, h.U)((v) =>
                        v.map((C) =>
                          Object.assign(Object.assign({}, C), {
                            hasFarming: C.hasFarming,
                          })
                        )
                      ),
                      (0, h.U)((v) => v.slice(u * f, v.length))
                    );
                }),
                (0, $.d)({ refCount: !0, bufferSize: 1 })
              ));
          }
          selectPoolsCount() {
            return this.uiPoolQuery.selectAll().pipe(
              (0, h.U)((t) => t.length),
              (0, $.d)({ refCount: !0, bufferSize: 1 })
            );
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵinject(te),
              e.ɵɵinject(be.z),
              e.ɵɵinject(Ve)
            );
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({ token: o, factory: o.ɵfac })),
          o
        );
      })();
      var Pi = c(70167),
        Ci = c(77971),
        bi = c(61721);
      const ki = function (o, a, t, n, i, r, s) {
        return {
          "icon-button-white": o,
          "blue-button-enabled": a,
          "yellow-button-enabled": t,
          "red-button-enabled": n,
          "large-btn": i,
          "small-btn": r,
          "icon-button-disabled": s,
        };
      };
      function Si(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 2),
            e.ɵɵlistener("click", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.onBtnClick(i));
            }),
            e.ɵɵprojection(1),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("disabled", t.disabled)(
            "ngClass",
            e.ɵɵpureFunction7(
              2,
              ki,
              "white" === t.color,
              "blue" === t.color,
              "yellow" === t.color,
              "red" === t.color,
              "large" === t.size,
              "small" === t.size,
              t.disabled
            )
          );
        }
      }
      const wi = ["*"];
      let Ti = (() => {
        class o {
          constructor() {
            this.clicked = new e.EventEmitter();
          }
          onBtnClick(t) {
            t.stopPropagation(), !this.disabled && this.clicked.emit();
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-icon-button"]],
            inputs: {
              icon: "icon",
              color: "color",
              size: "size",
              disabled: "disabled",
              tooltip: "tooltip",
            },
            outputs: { clicked: "clicked" },
            ngContentSelectors: wi,
            decls: 3,
            vars: 2,
            consts: [
              [
                "direction",
                "top",
                "contentType",
                "custom",
                3,
                "tooltip",
                "customElement",
              ],
              ["button", ""],
              [
                "mat-icon-button",
                "",
                1,
                "icon-button",
                3,
                "disabled",
                "ngClass",
                "click",
              ],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.ɵɵprojectionDef(),
                  e.ɵɵelement(0, "tooltip", 0),
                  e.ɵɵtemplate(
                    1,
                    Si,
                    2,
                    10,
                    "ng-template",
                    null,
                    1,
                    e.ɵɵtemplateRefExtractor
                  )),
                2 & t)
              ) {
                const i = e.ɵɵreference(2);
                e.ɵɵproperty("tooltip", n.tooltip)("customElement", i);
              }
            },
            dependencies: [y.mk, Ee.lW, Ie.K],
            styles: [
              ".large-btn[_ngcontent-%COMP%]{height:50px;width:50px}.small-btn[_ngcontent-%COMP%]{height:30px;width:30px;border-radius:10px!important;line-height:30px}",
            ],
          })),
          o
        );
      })();
      var rn = c(94288),
        Oe = c(63287);
      const Ii = ["filterInput"],
        Ai = ["filterDropdownMenu"],
        Oi = ["filterDropdown"];
      function Mi(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-chip", 9),
            e.ɵɵlistener("removed", function () {
              const r = e.ɵɵrestoreView(t).$implicit,
                s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.remove(r));
            }),
            e.ɵɵelement(1, "img", 10),
            e.ɵɵtext(2),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(3, "svg", 11),
            e.ɵɵelement(4, "use", 12),
            e.ɵɵelementEnd()();
        }
        if (2 & o) {
          const t = a.$implicit;
          e.ɵɵproperty("selectable", !0)("removable", !0),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate(
              "src",
              null == t ? null : t.image,
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", null == t ? null : t.symbol, " ");
        }
      }
      function Ei(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-button", 13),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.clearAllFilters());
            }),
            e.ɵɵelementStart(1, "span", 14),
            e.ɵɵtext(2, "Clear All"),
            e.ɵɵelementEnd()();
        }
      }
      function Di(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "div", 19),
          e.ɵɵelement(1, "span", 20),
          e.ɵɵelementStart(2, "span", 21),
          e.ɵɵtext(3, "Nothing found"),
          e.ɵɵelementEnd()());
      }
      function $i(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 22),
            e.ɵɵlistener("click", function () {
              const r = e.ɵɵrestoreView(t).$implicit,
                s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.selected(r));
            })("keydown", function (i) {
              const r = e.ɵɵrestoreView(t),
                s = r.index,
                l = r.$implicit,
                d = e.ɵɵnextContext(2);
              return e.ɵɵresetView(d.keydownOnFilterItem(i, s, l));
            }),
            e.ɵɵelement(1, "img", 23),
            e.ɵɵelementStart(2, "div")(3, "p"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "p"),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()()();
        }
        if (2 & o) {
          const t = a.$implicit,
            n = a.index;
          e.ɵɵattributeInterpolate1("data-id", "filter.", t.symbol, "-token"),
            e.ɵɵpropertyInterpolate1("id", "filter-item-", n, ""),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate("src", t.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(t.symbol),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(t.name);
        }
      }
      function Bi(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 15, 16),
            e.ɵɵlistener("onBottomReached", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.loadMore());
            }),
            e.ɵɵtemplate(2, Di, 4, 0, "div", 17),
            e.ɵɵtemplate(3, $i, 7, 5, "div", 18),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = a.ngIf,
            n = e.ɵɵnextContext();
          e.ɵɵpropertyInterpolate("id", n.scrollContainerId),
            e.ɵɵproperty("stopLazyScroll", n.stopLazyScroll)(
              "scrollContainer",
              n.scrollContainerSelector
            )("scrollDistance", 30),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !t.length),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngForOf", t)("ngForTrackBy", n.trackByAddress);
        }
      }
      let Li = (() => {
        class o {
          constructor(t, n, i) {
            (this.tokenBalanceQuery = t),
              (this.poolsPageQuery = n),
              (this.poolsPageService = i),
              (this.separatorKeysCodes = [rn.K5, rn.OC]),
              (this.filters = []),
              (this.filterCtrl = new z.UntypedFormControl()),
              (this.allTokensWithBalancesSorted$ =
                this.tokenBalanceQuery.allTokensWithBalancesSorted$),
              (this.limit$ = new $e.X(10)),
              (this.stopLazyScroll = new Ft.x()),
              (this.subscription = new me.w0());
            const r = this.poolsPageService.poolsFilterFromQueryParams$.pipe(
              (0, P.b)((s) => {
                this.filters = s || [];
              })
            );
            this.subscription.add(
              r.subscribe({ error: (s) => (0, M.eK)(s, "mk0002") })
            );
          }
          get scrollContainerSelector() {
            return `#${this.scrollContainerId}`;
          }
          trackByAddress(t, n) {
            return n.address;
          }
          ngOnInit() {
            (o.MaxId += 1),
              (this.scrollContainerId = `token-filters-container-${o.MaxId}`),
              (this.filteredTokens$ = (0, _.a)([
                this.tokenBalanceQuery.allTokensWithBalancesSorted$.pipe(
                  (0, h.U)((t) => t)
                ),
                this.filterCtrl.valueChanges.pipe(
                  (0, Vt.O)(""),
                  (0, ke.b)(25),
                  (0, U.x)()
                ),
                this.limit$.pipe((0, ke.b)(25)),
              ]).pipe(
                (0, h.U)((t) => {
                  const [n, i, r] = t,
                    s = n.filter((f) => {
                      if (
                        -1 ===
                        this.filters.findIndex(
                          (C) =>
                            C.symbol.toLocaleLowerCase() ===
                            f.symbol.toLocaleLowerCase()
                        )
                      )
                        return f.symbol;
                    });
                  if (!i) return s.slice(0, r);
                  const l = i.toLowerCase(),
                    d = s.filter((f) => f.symbol.toLowerCase().includes(l)),
                    p = (0, Ut.W)(i);
                  return d.sort((f, v) => p(f.symbol, v.symbol)).slice(0, r);
                })
              ));
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          add(t) {
            const n = t.input,
              i = t.value;
            i &&
              this.allTokensWithBalancesSorted$
                .pipe(
                  (0, Z.q)(1),
                  (0, P.b)((r) => {
                    if (
                      -1 ===
                      this.filters.findIndex(
                        (l) =>
                          l.symbol.toLocaleLowerCase() === i.toLocaleLowerCase()
                      )
                    ) {
                      const l = r.find(
                        (d) =>
                          d.symbol.toLocaleLowerCase() === i.toLocaleLowerCase()
                      );
                      l &&
                        this.poolsPageService
                          .addTokenToFilter(l)
                          .subscribe({ error: (d) => (0, M.eK)(d, "mk0004") });
                    }
                  })
                )
                .subscribe({ error: (r) => (0, M.eK)(r, "lc0007") }),
              n && (n.value = ""),
              this.filterCtrl.setValue(null);
          }
          remove(t) {
            this.poolsPageService
              .removeTokenFromFilter(t)
              .subscribe({ error: (n) => (0, M.eK)(n, "mk0005") });
          }
          selected(t) {
            this.poolsPageService
              .addTokenToFilter(t)
              .subscribe({ error: (n) => (0, M.eK)(n, "mk0006") }),
              (this.filterInput.nativeElement.value = ""),
              this.filterCtrl.setValue(null),
              this.filterDropdown.close();
          }
          clearAllFilters() {
            this.poolsPageService.resetPoolsFilter();
          }
          loadMore() {
            const t = this.limit$.value;
            t < 1e4 && this.limit$.next(t + 5);
          }
          inputClick() {
            this.filterDropdown.isOpen() || this.filterDropdown.open();
          }
          keydownOnInput(t) {
            var n;
            "ArrowDown" === t.code &&
              (null ===
                (n = this.filterDropdownMenu.nativeElement.childNodes[0]) ||
                void 0 === n ||
                n.focus());
          }
          keydownOnFilterItem(t, n, i) {
            var r, s;
            const l = this.filterDropdownMenu.nativeElement.childNodes;
            "Enter" === t.code
              ? (this.selected(i), this.filterInput.nativeElement.focus())
              : "ArrowDown" === t.code
              ? null === (r = l[n + 1]) || void 0 === r || r.focus()
              : "ArrowUp" === t.code && n - 1 < 0
              ? this.filterInput.nativeElement.focus()
              : "ArrowUp" === t.code &&
                (null === (s = l[n - 1]) || void 0 === s || s.focus());
          }
        }
        return (
          (o.MaxId = 0),
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(nt.n4),
              e.ɵɵdirectiveInject(at),
              e.ɵɵdirectiveInject(Ve)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["token-filter"]],
            viewQuery: function (t, n) {
              if (
                (1 & t &&
                  (e.ɵɵviewQuery(Ii, 5),
                  e.ɵɵviewQuery(Ai, 5),
                  e.ɵɵviewQuery(Oi, 5)),
                2 & t)
              ) {
                let i;
                e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                  (n.filterInput = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.filterDropdownMenu = i.first),
                  e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                    (n.filterDropdown = i.first);
              }
            },
            decls: 12,
            vars: 11,
            consts: [
              ["ngbDropdown", "", 1, "filter-field"],
              ["filterDropdown", "ngbDropdown"],
              ["filterList", ""],
              [1, "token-input-field"],
              [
                "class",
                "chip-item",
                3,
                "selectable",
                "removable",
                "removed",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "ngbDropdownToggle",
                "",
                "autocomplete",
                "off",
                1,
                "field-input",
                "field-input-fix",
                3,
                "placeholder",
                "formControl",
                "matChipInputFor",
                "matChipInputSeparatorKeyCodes",
                "matChipInputTokenEnd",
                "keydown",
                "click",
              ],
              ["filterInput", ""],
              [
                "size",
                "small",
                "color",
                "red",
                "transparent",
                "true",
                "class",
                "clear-all-button mobile-hidden",
                3,
                "clicked",
                4,
                "ngIf",
              ],
              [
                "ngbDropdownMenu",
                "",
                "class",
                "filter-dropdown",
                "appLazyScroll",
                "",
                3,
                "id",
                "stopLazyScroll",
                "scrollContainer",
                "scrollDistance",
                "onBottomReached",
                4,
                "ngIf",
              ],
              [1, "chip-item", 3, "selectable", "removable", "removed"],
              ["alt", "", "width", "28", "loading", "lazy", 3, "src"],
              [
                "matChipRemove",
                "",
                "width",
                "8",
                "height",
                "8",
                1,
                "text-gray",
              ],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [
                "size",
                "small",
                "color",
                "red",
                "transparent",
                "true",
                1,
                "clear-all-button",
                "mobile-hidden",
                3,
                "clicked",
              ],
              ["transloco", "tokenFilter.clear-all"],
              [
                "ngbDropdownMenu",
                "",
                "appLazyScroll",
                "",
                1,
                "filter-dropdown",
                3,
                "id",
                "stopLazyScroll",
                "scrollContainer",
                "scrollDistance",
                "onBottomReached",
              ],
              ["filterDropdownMenu", ""],
              ["class", "nothing-found-screen", 4, "ngIf"],
              [
                "tabindex",
                "0",
                "class",
                "filter-dropdown__row",
                3,
                "id",
                "click",
                "keydown",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [1, "nothing-found-screen"],
              [1, "nothing-found__image"],
              [
                "transloco",
                "uni.selectToken.nothing-found",
                1,
                "nothing-found__text",
              ],
              [
                "tabindex",
                "0",
                1,
                "filter-dropdown__row",
                3,
                "id",
                "click",
                "keydown",
              ],
              ["alt", "", "loading", "lazy", 3, "src"],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.ɵɵelementStart(0, "div", 0, 1)(
                    2,
                    "mat-chip-list",
                    null,
                    2
                  )(4, "div", 3),
                  e.ɵɵtemplate(5, Mi, 5, 4, "mat-chip", 4),
                  e.ɵɵelementStart(6, "input", 5, 6),
                  e.ɵɵlistener("matChipInputTokenEnd", function (r) {
                    return n.add(r);
                  })("keydown", function (r) {
                    return n.keydownOnInput(r);
                  })("click", function () {
                    return n.inputClick();
                  }),
                  e.ɵɵpipe(8, "transloco"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(9, Ei, 3, 0, "app-button", 7),
                  e.ɵɵelementEnd()(),
                  e.ɵɵtemplate(10, Bi, 4, 7, "div", 8),
                  e.ɵɵpipe(11, "async"),
                  e.ɵɵelementEnd()),
                2 & t)
              ) {
                const i = e.ɵɵreference(3);
                e.ɵɵadvance(5),
                  e.ɵɵproperty("ngForOf", n.filters),
                  e.ɵɵadvance(1),
                  e.ɵɵpropertyInterpolate(
                    "placeholder",
                    e.ɵɵpipeBind1(8, 7, "tokenFilter.enter-token-name2")
                  ),
                  e.ɵɵproperty("formControl", n.filterCtrl)(
                    "matChipInputFor",
                    i
                  )("matChipInputSeparatorKeyCodes", n.separatorKeysCodes),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", n.filters.length),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(11, 9, n.filteredTokens$));
              }
            },
            dependencies: [
              y.sg,
              y.O5,
              ue.jt,
              ue.iD,
              ue.Vi,
              Oe.qn,
              Oe.HS,
              Oe.oH,
              Oe.qH,
              z.DefaultValueAccessor,
              z.NgControlStatus,
              z.FormControlDirective,
              j.KI,
              Pe.r,
              qt,
              y.Ov,
              j.Ot,
            ],
            styles: [
              ".filter-field[_ngcontent-%COMP%]{width:100%;position:relative}.token-input-field[_ngcontent-%COMP%]{display:flex;align-items:center;height:48px;border-radius:12px;color:var(--1inch__ui-01);width:100%;position:relative;background:var(--1inch__ui-07-05);z-index:100}.clear-all-button[_ngcontent-%COMP%]{position:absolute;right:0}.field-input-fix[_ngcontent-%COMP%]{text-align:left;padding:11px 16px;margin:4px 0!important;font-size:16px}.field-input-fix[_ngcontent-%COMP%]::placeholder{font-size:16px;color:var(--1inch__ui-03)}.filter-dropdown[_ngcontent-%COMP%]{border:none;background:var(--1inch__ui-10-05);box-shadow:var(--1inch__shadow__dropdown);border-radius:0 0 12px 12px;max-height:400px;overflow:auto;left:-14px!important;right:6px!important;z-index:20;padding:24px 8px 8px;transform:translate(10px,24px)!important;color:var(--1inch__ui-01)}@media (max-width: 320px){.filter-dropdown[_ngcontent-%COMP%]{max-height:350px}}.chip-item[_ngcontent-%COMP%]{border-radius:8px;display:inline-flex;align-items:center;font-weight:400;font-size:16px;padding:4px!important;margin:4px 2px!important;background:var(--1inch__ui-10-09)}.chip-item[_ngcontent-%COMP%]:first-child{margin-left:8px!important}.chip-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:4px}.filter-dropdown__row[_ngcontent-%COMP%]{border-radius:8px;padding:8px;transition:background-color .3s;display:grid;grid-column-gap:12px;grid-template-columns:32px 1fr;align-items:center;color:var(--1inch__ui-02)}.filter-dropdown__row[_ngcontent-%COMP%]:hover, .filter-dropdown__row[_ngcontent-%COMP%]:focus{background:var(--1inch-bg-03);outline:none!important}.filter-dropdown__row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px}.filter-dropdown__row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;height:16px;line-height:16px}.filter-dropdown__row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{color:var(--1inch__ui-01);margin-bottom:4px}.nothing-found-screen[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px 0 20px}.nothing-found__image[_ngcontent-%COMP%]{height:160px;width:160px;background-image:url(/../../assets/images/empty-states/nothing-found.png);background-size:contain}.light-theme[_nghost-%COMP%]   .nothing-found__image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .nothing-found__image[_ngcontent-%COMP%]{background-image:url(/../../assets/images/empty-states/nothing-found-light-theme.png)}.nothing-found__text[_ngcontent-%COMP%]{color:var(--1inch__ui-02);font-size:16px;margin-top:16px;line-height:26px}",
            ],
          })),
          o
        );
      })();
      var Fi = c(66110),
        Vi = c(98182);
      function ji(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "tooltip", 4),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵtext(3, " / "),
            e.ɵɵelement(4, "tooltip", 4),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(6),
            n = e.ɵɵreference(8);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(2, 4, "poolLiquidity.available")
            )("customElement", t),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(5, 6, "poolLiquidity.staked")
            )("customElement", n);
        }
      }
      function Ui(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "tooltip", 4),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(6);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(2, 2, "poolLiquidity.available")
            )("customElement", t);
        }
      }
      function Qi(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "tooltip", 4),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵtext(3, " / "),
            e.ɵɵelement(4, "tooltip", 4),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          e.ɵɵnextContext();
          const t = e.ɵɵreference(10),
            n = e.ɵɵreference(8);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(2, 4, "poolLiquidity.available")
            )("customElement", t),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(5, 6, "poolLiquidity.staked")
            )("customElement", n);
        }
      }
      function zi(o, a) {
        1 & o &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span"),
          e.ɵɵtext(2, "- "),
          e.ɵɵelementEnd(),
          e.ɵɵelementContainerEnd());
      }
      function qi(o, a) {
        if ((1 & o && (e.ɵɵtext(0), e.ɵɵpipe(1, "currency")), 2 & o)) {
          const t = e.ɵɵnextContext();
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind4(1, 1, t.pool.myLiquidity, "USD", "symbol", "1.0-0"),
            "\n"
          );
        }
      }
      function Ri(o, a) {
        if ((1 & o && (e.ɵɵtext(0), e.ɵɵpipe(1, "currency")), 2 & o)) {
          const t = e.ɵɵnextContext();
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind4(
              1,
              1,
              t.pool.stakedInFarming,
              "USD",
              "symbol",
              "1.0-0"
            ),
            "\n"
          );
        }
      }
      function Ni(o, a) {
        1 & o && e.ɵɵtext(0, " 0\n");
      }
      let Ki = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-pool-liquidity"]],
            inputs: { pool: "pool" },
            decls: 11,
            vars: 4,
            consts: [
              [4, "ngIf"],
              ["tooltipElement1", ""],
              ["tooltipElement2", ""],
              ["tooltipElement3", ""],
              ["contentType", "custom", 3, "tooltip", "customElement"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "div"),
                e.ɵɵtemplate(1, ji, 6, 8, "ng-container", 0),
                e.ɵɵtemplate(2, Ui, 3, 4, "ng-container", 0),
                e.ɵɵtemplate(3, Qi, 6, 8, "ng-container", 0),
                e.ɵɵtemplate(4, zi, 3, 0, "ng-container", 0),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(
                  5,
                  qi,
                  2,
                  6,
                  "ng-template",
                  null,
                  1,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(
                  7,
                  Ri,
                  2,
                  6,
                  "ng-template",
                  null,
                  2,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(
                  9,
                  Ni,
                  1,
                  0,
                  "ng-template",
                  null,
                  3,
                  e.ɵɵtemplateRefExtractor
                )),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    n.pool.myLiquidity && n.pool.stakedInFarming
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    n.pool.myLiquidity && !n.pool.stakedInFarming
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !n.pool.myLiquidity && n.pool.stakedInFarming
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    !n.pool.myLiquidity && !n.pool.stakedInFarming
                  ));
            },
            dependencies: [y.O5, Ie.K, y.H9, j.Ot],
            styles: [
              ".buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}",
            ],
          })),
          o
        );
      })();
      var an = c(43676),
        sn = c(5372),
        Gi = c(27612);
      let Wi = (() => {
        class o {
          constructor(t, n) {
            (this.http = t), (this.activeConnectionQuery = n);
          }
          fetchChartsData(t) {
            const i = `${this.activeConnectionQuery.getApiEndpoint(
              "liquidityProtocolGraphApiEndpoint"
            )}/stats/${t}`;
            return this.http.get(i);
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(e.ɵɵinject(tn.eN), e.ɵɵinject(he.r));
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      var Hi = c(83140);
      function Yi(o, a) {
        1 & o &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelement(1, "img", 4),
          e.ɵɵelementContainerEnd());
      }
      function Xi(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 7),
            e.ɵɵelement(1, "canvas", 8),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().ngIf,
            n = e.ɵɵnextContext(2).$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("data", t[n].chartData)("options", t[n].options)(
              "plugins",
              t[n].plugins
            )("type", t[n].type);
        }
      }
      function Zi(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "div", 9),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 10),
          e.ɵɵelement(2, "use", 11),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(3, "span", 12),
          e.ɵɵtext(4, "There is not enough data yet. Try later"),
          e.ɵɵelementEnd()());
      }
      function Ji(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Xi, 2, 4, "div", 5),
            e.ɵɵtemplate(2, Zi, 5, 0, "div", 6),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = a.ngIf;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.empty),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.empty);
        }
      }
      function er(o, a) {
        if (
          (1 & o &&
            (e.ɵɵtemplate(0, Yi, 2, 0, "ng-container", 3),
            e.ɵɵpipe(1, "async"),
            e.ɵɵtemplate(2, Ji, 3, 2, "ng-container", 3),
            e.ɵɵpipe(3, "async")),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵproperty("ngIf", !e.ɵɵpipeBind1(1, 2, t.chartData$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(3, 4, t.chartData$));
        }
      }
      function tr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "mat-tab", 1),
          e.ɵɵtemplate(1, er, 4, 6, "ng-template", 2),
          e.ɵɵelementEnd()),
          2 & o && e.ɵɵproperty("label", a.$implicit);
      }
      sn.kL.registry.plugins.get("annotation") || sn.kL.register(Gi.Z);
      let or = (() => {
        class o {
          constructor(t, n) {
            (this.poolsChartService = t),
              (this.globalSettingsQuery = n),
              (this.pool = null),
              (this.charts = ["volume", "liquidity", "earning"]),
              (this.chartsInfo = {});
          }
          ngOnInit() {
            var t;
            null === (t = this.pool) ||
              void 0 === t ||
              !t.address ||
              (this.chartData$ = this.poolsChartService
                .fetchChartsData(this.pool.address)
                .pipe(
                  (0, h.U)((n) => {
                    if (
                      ((n = n.sort((i, r) =>
                        i.timestamp > r.timestamp ? 1 : -1
                      )),
                      (n = (n = this.accumulateValuesByDay(n)).filter(
                        (i, r) => r > n.length - 150
                      )).length < an.Cw)
                    )
                      return !0;
                    for (const i of this.charts)
                      this.chartsInfo[i] = n.map((r) => ({
                        time: r.timestamp,
                        value: +(+r["earning" === i ? i + "s" : i]).toFixed(0),
                      }));
                  }),
                  (0, O.w)((n) =>
                    n
                      ? (0, x.of)({ empty: !0 })
                      : this.globalSettingsQuery.select(["themeMode"]).pipe(
                          (0, h.U)(({ themeMode: i }) => {
                            const r = {};
                            for (const s of this.charts)
                              r[s] = (0, an.Ej)(
                                this.chartsInfo[s],
                                "liquidity" === s,
                                i
                              );
                            return r;
                          })
                        )
                  ),
                  (0, W.K)((n) => (Hi.error(n), (0, x.of)({ empty: !0 })))
                ));
          }
          accumulateValuesByDay(t) {
            const n = [Object.assign(Object.assign({}, t[0]), { count: 1 })];
            for (let i = 1; i < t.length; ++i) {
              const r = n[n.length - 1],
                s = new Date(1e3 * r.timestamp),
                l = new Date(1e3 * t[i].timestamp);
              s.getDate() === l.getDate() && s.getFullYear() === l.getFullYear()
                ? (n[n.length - 1] = {
                    timestamp: t[i].timestamp,
                    liquidity: +r.liquidity + +t[i].liquidity,
                    volume: +r.volume + +t[i].volume,
                    earnings: +r.earnings + +t[i].earnings,
                    count: r.count + 1,
                  })
                : n.push(Object.assign(Object.assign({}, t[i]), { count: 1 }));
            }
            return n.map((i) =>
              Object.assign(Object.assign({}, i), {
                liquidity: +i.liquidity / i.count,
                count: void 0,
              })
            );
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(Wi),
              e.ɵɵdirectiveInject(zt.J)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-pool-charts"]],
            inputs: { pool: "pool" },
            decls: 2,
            vars: 1,
            consts: [
              [3, "label", 4, "ngFor", "ngForOf"],
              [3, "label"],
              ["matTabContent", ""],
              [4, "ngIf"],
              ["src", "assets/images/chart-plug-animate.svg", "alt", ""],
              ["class", "pool-chart", 4, "ngIf"],
              ["class", "pool-warning", 4, "ngIf"],
              [1, "pool-chart"],
              ["baseChart", "", 3, "data", "options", "plugins", "type"],
              [1, "pool-warning"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/graphic.svg#graphic"],
              ["transloco", "analyticsCharts.not-data-yet"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "mat-tab-group"),
                e.ɵɵtemplate(1, tr, 2, 1, "mat-tab", 0),
                e.ɵɵelementEnd()),
                2 & t && (e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", n.charts));
            },
            dependencies: [y.sg, y.O5, j.KI, De.SP, De.uX, De.Vc, yt.jh, y.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block;height:100%;margin-top:-12px}[_nghost-%COMP%]     .mat-tab-label-content{text-transform:capitalize}[_nghost-%COMP%]     .mat-tab-group{height:100%}[_nghost-%COMP%]     .mat-tab-body-wrapper{height:100%;margin-bottom:-16px}[_nghost-%COMP%]     .mat-tab-labels{padding-bottom:2px}.pool-warning[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center;border-radius:12px;border:1px solid;padding:16px;text-align:center;line-height:18px;color:var(--1inch__text-and-icons__warning)}.pool-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:8px}.pool-chart[_ngcontent-%COMP%]{margin-top:-44px;height:350px}",
            ],
          })),
          o
        );
      })();
      function ir(o, a) {
        if ((1 & o && e.ɵɵelement(0, "tooltip", 2), 2 & o)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("tooltip", t.getTooltipContent());
        }
      }
      let rr = (() => {
        class o {
          getSumApy() {
            const {
              apy: t,
              address: n,
              hasFarming: i,
              farmingApy: r,
              extraFarmingApy: s,
            } = this.pool;
            if (
              "-" === t &&
              n !== D.pA &&
              n !== D.tP &&
              n !== D.qS &&
              n !== D.gf
            )
              return "";
            const p = (+t || 0) + (i ? 100 * (r || 0) : 0) + ((s && s) || 0);
            return p ? this.formatNumberAsPercent(+p.toFixed(2)) : "0%";
          }
          formatNumberAsPercent(t) {
            return +t > 1e3 ? "> 1000%" : `${t}%`;
          }
          formatApy(t) {
            return "-" === t
              ? this.pool.farmingApy
                ? "N/A"
                : t
              : this.formatNumberAsPercent(+t);
          }
          getTooltipContent() {
            const {
              apy: t,
              hasFarming: n,
              farmingApy: i,
              extraFarmingApy: r,
              address: s,
            } = this.pool;
            let d = `${this.formatApy(t)} - Pool APY`;
            return (
              n &&
                (i > 0 &&
                  (d = `${d}\n                    ${(100 * i).toFixed(
                    2
                  )}% - BUBBLE Farming APY`),
                r &&
                  [D.ER, D.bu].includes(s) &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - OPIUM Farming APY`),
                r &&
                  s === D.tP &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - ICHI Farming APY`),
                r &&
                  s === D.oc &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - VSP Farming APY`),
                r &&
                  s === D.RU &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - WXT Farming APY`),
                r &&
                  s === D.u7 &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - BLES Farming APY`),
                r &&
                  s === D.X5 &&
                  (d = `${d}\n                    ${r.toFixed(
                    2
                  )}% - LDO Farming APY`)),
              d
            );
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-pool-apy"]],
            inputs: { pool: "pool" },
            decls: 4,
            vars: 2,
            consts: [
              ["data-id", "pool-APY-value"],
              [
                "class",
                "info-icon",
                "direction",
                "top",
                "data-id",
                "pool-APY-tooltip",
                3,
                "tooltip",
                4,
                "ngIf",
              ],
              [
                "direction",
                "top",
                "data-id",
                "pool-APY-tooltip",
                1,
                "info-icon",
                3,
                "tooltip",
              ],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "div")(1, "span", 0),
                e.ɵɵtext(2),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(3, ir, 1, 1, "tooltip", 1),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate1("", n.getSumApy(), "\xa0"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    "-" !== n.pool.apy ||
                      (n.pool.hasFarming && n.pool.extraFarmingApy)
                  ));
            },
            dependencies: [y.O5, Ie.K],
            styles: [
              ".buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}.info-icon[_ngcontent-%COMP%]{margin-top:-2px}",
            ],
          })),
          o
        );
      })();
      var ar = c(78612),
        st = c(20088);
      function sr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 6)(1, "span", 7),
            e.ɵɵtext(2, "Total APY"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span", 8),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t.getSumApy());
        }
      }
      function lr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1, "\xa0\xa0\xa0\u2013\xa0"),
          e.ɵɵelementEnd());
      }
      function cr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1, "\xa0\xa0\xa0\u2013\xa0"),
          e.ɵɵelementEnd());
      }
      function pr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 1)(1, "span", 2),
            e.ɵɵtemplate(2, cr, 2, 0, "span", 3),
            e.ɵɵelementStart(3, "span"),
            e.ɵɵtext(4, "BUBBLE Farming APY"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "percent"),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.pool.hasFarming),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(7, 2, t.pool.farmingApy, "1.1-2")
            );
        }
      }
      function dr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1, "\xa0\xa0\xa0\u2013\xa0"),
          e.ɵɵelementEnd());
      }
      function ur(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "span", 2),
            e.ɵɵtemplate(1, dr, 2, 0, "span", 3),
            e.ɵɵelementStart(2, "span"),
            e.ɵɵtext(3),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.pool.hasFarming),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              "",
              t.getExtraApyTokenSymbol(t.pool.address),
              " Farming APY"
            );
        }
      }
      function mr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 1),
            e.ɵɵtemplate(1, ur, 4, 2, "span", 9),
            e.ɵɵelementStart(2, "span"),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "number"),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !!t.getExtraApyTokenSymbol(t.pool.address)),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              "",
              e.ɵɵpipeBind2(4, 2, t.pool.extraFarmingApy, "1.1-2"),
              "%"
            );
        }
      }
      function gr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 1)(1, "span", 2)(2, "span"),
            e.ɵɵtext(3, "\xa0\xa0\xa0\u2013\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5),
            e.ɵɵelementEnd()(),
            e.ɵɵtext(6, " \xa0 "),
            e.ɵɵelementStart(7, "span"),
            e.ɵɵtext(8),
            e.ɵɵpipe(9, "number"),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate1(
              "",
              null == t.pool.tokens[0] ? null : t.pool.tokens[0].symbol,
              " balance"
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              "",
              e.ɵɵpipeBind2(9, 3, t.pool.myLiquidityToken0, "1.1-5"),
              "\xa0",
              null == t.pool.tokens[0] ? null : t.pool.tokens[0].symbol,
              ""
            );
        }
      }
      function fr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "div", 1)(1, "span", 2)(2, "span"),
            e.ɵɵtext(3, "\xa0\xa0\xa0\u2013\xa0"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5),
            e.ɵɵelementEnd()(),
            e.ɵɵtext(6, " \xa0 "),
            e.ɵɵelementStart(7, "span"),
            e.ɵɵtext(8),
            e.ɵɵpipe(9, "number"),
            e.ɵɵelementEnd()()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate1(
              "",
              null == t.pool.tokens[1] ? null : t.pool.tokens[1].symbol,
              " balance"
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              "",
              e.ɵɵpipeBind2(9, 3, t.pool.myLiquidityToken1, "1.1-5"),
              "\xa0",
              null == t.pool.tokens[1] ? null : t.pool.tokens[1].symbol,
              ""
            );
        }
      }
      function hr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 10)(2, "span", 11),
            e.ɵɵtext(3, "My liquidity"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span", 12),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "formatUsd"),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(7, gr, 10, 6, "div", 5),
            e.ɵɵtemplate(8, fr, 10, 6, "div", 5),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(6, 3, t.pool.myLiquidity + t.pool.stakedInFarming)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.pool.myLiquidityToken0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.pool.myLiquidityToken1);
        }
      }
      let ln = (() => {
        class o {
          formatApy(t) {
            return "-" === t
              ? this.pool.farmingApy
                ? "N/A"
                : t
              : this.formatNumberAsPercent(+t);
          }
          formatNumberAsPercent(t) {
            return +t > 1e3 ? "> 1000%" : `${t}%`;
          }
          getSumApy() {
            const {
              apy: t,
              hasFarming: n,
              farmingApy: i,
              extraFarmingApy: r,
            } = this.pool;
            let d = 0;
            return (
              (d += +t || 0),
              (d += +(n ? 100 * i : 0) || 0),
              (d += +(r || 0) || 0),
              d ? this.formatNumberAsPercent(+d.toFixed(2)) : "0%"
            );
          }
          getExtraApyTokenSymbol(t) {
            switch (t) {
              case D.ER:
              case D.bu:
                return "OPIUM";
              case D.tP:
                return "ICHI";
              case D.oc:
                return "VSP";
              case D.oX:
                return "renDGB";
              case D.GY:
                return "renBTC";
              case D.qS:
                return "SWISE";
              case D.RU:
                return "WXT";
              case D.u7:
                return "BLES";
              case D.X5:
                return "LDO";
              default:
                return "";
            }
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-apy-values"]],
            inputs: { pool: "pool", walletConnected: "walletConnected" },
            decls: 11,
            vars: 6,
            consts: [
              [
                "class",
                "d-flex justify-content-between",
                "data-id",
                "stats-total-APY",
                4,
                "ngIf",
              ],
              [1, "d-flex", "justify-content-between"],
              [1, "text-gray"],
              [4, "ngIf"],
              ["transloco", "apyValues.pool-apy"],
              ["class", "d-flex justify-content-between", 4, "ngIf"],
              [
                "data-id",
                "stats-total-APY",
                1,
                "d-flex",
                "justify-content-between",
              ],
              ["transloco", "apyValues.total-apy", 1, "text-gray"],
              ["data-id", "stats-total-APY-value"],
              ["class", "text-gray", 4, "ngIf"],
              [
                "data-id",
                "stats-my-liquidity",
                1,
                "d-flex",
                "justify-content-between",
                "group-title",
              ],
              ["transloco", "apyValues.my-liquidity2", 1, "text-gray"],
              ["data-id", "stats-my-liquidity-value"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵtemplate(0, sr, 5, 1, "div", 0),
                e.ɵɵelementStart(1, "div", 1)(2, "span", 2),
                e.ɵɵtemplate(3, lr, 2, 0, "span", 3),
                e.ɵɵelementStart(4, "span", 4),
                e.ɵɵtext(5, "Pool APY"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(6, "span"),
                e.ɵɵtext(7),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(8, pr, 8, 5, "div", 5),
                e.ɵɵtemplate(9, mr, 5, 5, "div", 5),
                e.ɵɵtemplate(10, hr, 9, 5, "ng-container", 3)),
                2 & t &&
                  (e.ɵɵproperty("ngIf", n.pool.hasFarming),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", n.pool.hasFarming),
                  e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate(n.formatApy(n.pool.apy)),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    n.pool.hasFarming && n.pool.farmingApy > 0
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    n.pool.hasFarming && n.pool.extraFarmingApy > 0
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", n.walletConnected));
            },
            dependencies: [y.O5, j.KI, y.JJ, y.Zx, st.V],
            styles: [
              "[_nghost-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:12px}@media (max-width: 1024px){[_nghost-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:8px}}[_nghost-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.group-title[_ngcontent-%COMP%]{margin-top:24px}@media (max-width: 1024px){.group-title[_ngcontent-%COMP%]{margin-top:0}}",
            ],
          })),
          o
        );
      })();
      function vr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 13),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "formatUsd"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                3,
                1,
                (null == t.stat ? null : t.stat.swapEarningsUSD24h) || 0
              )
            );
        }
      }
      function yr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 13),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "percent"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                3,
                1,
                (null == t.stat ? null : t.stat.swapEarningsPercent24h) || 0,
                "1.1-3"
              )
            );
        }
      }
      function _r(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "div", 14)(1, "app-button", 15)(2, "span", 16),
          e.ɵɵtext(3, "Connect Wallet"),
          e.ɵɵelementEnd()()());
      }
      function xr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-button", 22),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2);
              return e.ɵɵresetView(i.openProvideLiquidityDialog());
            }),
            e.ɵɵelementStart(1, "span", 23),
            e.ɵɵtext(2, "Provide liquidity"),
            e.ɵɵelementEnd()();
        }
      }
      function Pr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 17)(2, "app-button", 18),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.openRemoveLiquidityDialog());
            }),
            e.ɵɵelementStart(3, "span", 19),
            e.ɵɵtext(4, "Remove liquidity"),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(5, "tooltip", 20),
            e.ɵɵpipe(6, "transloco"),
            e.ɵɵtemplate(
              7,
              xr,
              3,
              0,
              "ng-template",
              null,
              21,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const t = e.ɵɵreference(8),
            n = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "disabled",
              0 === (null == n.stat ? null : n.stat.myLiquidityRaw)
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(6, 3, "button.provide-liquidity2")
            )("customElement", t);
        }
      }
      let Cr = (() => {
        class o {
          constructor(t, n, i) {
            (this.matDialogService = t),
              (this.poolQuery = n),
              (this.walletConnectionQuery = i),
              (this.stat = {
                liquidity: 0,
                myLiquidity: 0,
                myLiquidityRaw: 0,
                myLiquidityTotal: 0,
                volume: 0,
                apy: "",
                swapEarningsUSD24h: 0,
                swapEarningsPercent24h: 0,
              }),
              (this.earningsDisplayMode = !0),
              (this.walletConnected = !1),
              (this.subscription = new me.w0());
            const r = this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, P.b)((s) => {
                this.walletConnected = !!s;
              }),
              (0, F.h)((s) => !!s)
            );
            this.subscription = r.subscribe({
              error: (s) => (0, M.eK)(s, "lc0034"),
            });
          }
          ngOnInit() {
            var t, n, i, r;
            (this.stat.apy =
              null === (t = this.pool) || void 0 === t ? void 0 : t.apy),
              (this.stat.liquidity = +(0, g.sk)(
                (null ===
                  (i =
                    null === (n = this.pool) || void 0 === n
                      ? void 0
                      : n.liquidity) || void 0 === i
                  ? void 0
                  : i.toString()) || "",
                2
              )),
              (this.stat.volume = +(0, g.sk)(
                (null === (r = this.pool) || void 0 === r
                  ? void 0
                  : r.volumeUSD24h) || "",
                2
              )),
              (this.stat.myLiquidity =
                (this.userLiquidity || 0) + (this.pool.stakedInFarming || 0)),
              (this.stat.myLiquidityRaw = this.userLiquidityRaw || 0),
              (this.stat.swapEarningsUSD24h =
                +this.pool.swapEarningsUSD24h || 0),
              (this.stat.swapEarningsPercent24h =
                +this.pool.swapEarningsPercent24h / 100 || 0);
          }
          openProvideLiquidityDialog() {
            this.openDialog(B.provide);
          }
          openRemoveLiquidityDialog() {
            this.openDialog(B.remove);
          }
          openDialog(t) {
            const n = {
              viewMode: t,
              poolAddress: this.pool.pair,
              tokens: this.poolQuery.getPoolTokens(this.pool),
            };
            this.matDialogService.open(Nt, { data: n });
          }
          formatApy(t) {
            const n = (null == t ? void 0 : t.apy) || 0;
            return "-" === n ? n : +n > 1e3 ? "> 1000%" : `${n}%`;
          }
          toggleEarnings() {
            this.earningsDisplayMode = !this.earningsDisplayMode;
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(N.uw),
              e.ɵɵdirectiveInject(be.z),
              e.ɵɵdirectiveInject(fe.r)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-liquidity-pool-stats"]],
            inputs: {
              pool: "pool",
              userLiquidity: "userLiquidity",
              userLiquidityRaw: "userLiquidityRaw",
            },
            decls: 22,
            vars: 12,
            consts: [
              [1, "fs-14"],
              [
                "data-id",
                "stats-total-liquidity",
                1,
                "d-flex",
                "justify-content-between",
                "mb-12",
              ],
              ["transloco", "liquidityPoolStats.liquidity", 1, "text-gray"],
              ["data-id", "stats-total-liquidity-value"],
              [
                "data-id",
                "stats-24h-volume",
                1,
                "d-flex",
                "justify-content-between",
                "mb-12",
              ],
              ["transloco", "liquidityPoolStats.volume-24-h", 1, "text-gray"],
              ["data-id", "stats-24h-volume-value"],
              [
                "data-id",
                "stats-24h-earnings",
                1,
                "d-flex",
                "justify-content-between",
                "mb-24",
              ],
              ["transloco", "liquidityPoolStats.earnings-24-h", 1, "text-gray"],
              [2, "cursor", "pointer", 3, "click"],
              [4, "ngIf"],
              [3, "pool", "walletConnected"],
              ["class", "mt-24", 4, "ngIf"],
              ["data-id", "stats-24h-earnings-value"],
              [1, "mt-24"],
              ["walletConnect", "", "color", "blue", "fullWidth", "true"],
              [1, "fs-16"],
              ["data-id", "stats-actions", 1, "mt-24", "buttons-grid"],
              [
                "data-id",
                "stats-actions-remove-liquidity",
                "color",
                "red",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "button.remove-liquidity2"],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "stats-tooltip",
                3,
                "tooltip",
                "customElement",
              ],
              ["button", ""],
              [
                "color",
                "blue",
                "data-id",
                "stats-actions-provide-liquidity",
                "fullWidth",
                "true",
                3,
                "clicked",
              ],
              ["transloco", "button.provide-liquidity2"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2),
                e.ɵɵtext(3, "Liquidity"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(4, "span", 3),
                e.ɵɵtext(5),
                e.ɵɵpipe(6, "formatUsd"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(7, "div", 4)(8, "span", 5),
                e.ɵɵtext(9, "Volume (24h)"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(10, "span", 6),
                e.ɵɵtext(11),
                e.ɵɵpipe(12, "formatUsd"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(13, "div", 7)(14, "span", 8),
                e.ɵɵtext(15, "Earnings (24h)"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(16, "span", 9),
                e.ɵɵlistener("click", function () {
                  return n.toggleEarnings();
                }),
                e.ɵɵtemplate(17, vr, 4, 3, "ng-container", 10),
                e.ɵɵtemplate(18, yr, 4, 4, "ng-container", 10),
                e.ɵɵelementEnd()(),
                e.ɵɵelement(19, "app-apy-values", 11),
                e.ɵɵtemplate(20, _r, 4, 0, "div", 12),
                e.ɵɵtemplate(21, Pr, 9, 5, "ng-container", 10),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(5),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(
                      6,
                      8,
                      (null == n.stat ? null : n.stat.liquidity) || 0
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(
                      12,
                      10,
                      (null == n.stat ? null : n.stat.volume) || 0
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty("ngIf", n.earningsDisplayMode),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !n.earningsDisplayMode),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("pool", n.pool)(
                    "walletConnected",
                    n.walletConnected
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !n.walletConnected),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", n.walletConnected));
            },
            dependencies: [y.O5, j.KI, Pe.r, ar.M, Ie.K, ln, y.Zx, j.Ot, st.V],
            styles: [
              ".buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:8px}.stats-tooltip[_ngcontent-%COMP%]{margin-left:0}",
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var br = c(4069),
        kr = c(22221),
        Sr = c(83140);
      let wr = (() => {
          class o {
            transform(t, n) {
              return (
                (null != t && t.address) || Sr.error("Missing pool address"),
                `/${n}/earn/pools/${null == t ? void 0 : t.address}/governance`
              );
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵpipe = e.ɵɵdefinePipe({
              name: "poolGovernanceNavLink",
              type: o,
              pure: !0,
            })),
            o
          );
        })(),
        Tr = (() => {
          class o {
            constructor(t) {
              this.contractAddressService = t;
            }
            transform(t) {
              if (!t || 0 === t.filter(G.RF).length) return (0, x.of)([]);
              const [n, i] = t;
              return this.contractAddressService
                .getContractAddressOnce(_e.a4.oneInchToken)
                .pipe((0, h.U)((r) => (i.address === r ? [i, n] : [n, i])));
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(e.ɵɵdirectiveInject(Xe.O, 16));
            }),
            (o.ɵpipe = e.ɵɵdefinePipe({
              name: "tokenPriority",
              type: o,
              pure: !0,
            })),
            o
          );
        })();
      function Ir(o, a) {
        if ((1 & o && e.ɵɵelement(0, "div", 23), 2 & o)) {
          const t = a.ngIf;
          e.ɵɵproperty("ngClass", "pools-warning_" + t.type)(
            "innerText",
            t.text
          );
        }
      }
      function Ar(o, a) {
        1 & o && e.ɵɵelement(0, "app-lp-version-switch", 24);
      }
      function Or(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "span", 25),
          e.ɵɵtext(1, " My liquidity "),
          e.ɵɵelementEnd());
      }
      function Mr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "img", 43),
            e.ɵɵelementStart(2, "a", 44),
            e.ɵɵpipe(3, "async"),
            e.ɵɵpipe(4, "chainExplorerTxLink"),
            e.ɵɵtext(5, "Deploying"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate(
              "href",
              e.ɵɵpipeBind1(3, 1, e.ɵɵpipeBind1(4, 3, t.address)),
              e.ɵɵsanitizeUrl
            );
        }
      }
      function Er(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "img", 45),
            e.ɵɵelementStart(2, "a", 46),
            e.ɵɵlistener("click", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.linkStopPropagation(i));
            }),
            e.ɵɵpipe(3, "async"),
            e.ɵɵpipe(4, "chainExplorerAddressLink"),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "prettyHash"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate(
              "href",
              e.ɵɵpipeBind1(3, 2, e.ɵɵpipeBind1(4, 4, t.address)),
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(" ", e.ɵɵpipeBind1(6, 6, t.address), " ");
        }
      }
      function Dr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 47),
            e.ɵɵelement(1, "img", 48),
            e.ɵɵelementStart(2, "div", 49)(3, "a", 50),
            e.ɵɵlistener("click", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.linkStopPropagation(i));
            }),
            e.ɵɵpipe(4, "async"),
            e.ɵɵpipe(5, "chainExplorerAddressLink"),
            e.ɵɵtext(6),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(7, "p", 51),
            e.ɵɵtext(8, "50%"),
            e.ɵɵelementEnd()()();
        }
        if (2 & o) {
          const t = a.$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("src", t.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate(
              "href",
              e.ɵɵpipeBind1(4, 3, e.ɵɵpipeBind1(5, 5, t.address)),
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(" ", t.symbol, " ");
        }
      }
      function $r(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "div", 52),
          e.ɵɵelement(1, "span")(2, "span")(3, "span")(4, "span")(5, "span")(
            6,
            "span"
          )(7, "span")(8, "span")(9, "span")(10, "span")(11, "span")(
            12,
            "span"
          ),
          e.ɵɵelementEnd());
      }
      function Br(o, a) {
        if ((1 & o && e.ɵɵelement(0, "app-apy-values", 58), 2 & o)) {
          const t = e.ɵɵnextContext(2).$implicit,
            n = e.ɵɵnextContext();
          e.ɵɵproperty("pool", t)("walletConnected", n.walletConnected);
        }
      }
      function Lr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "app-icon-button", 65),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 66),
          e.ɵɵelement(2, "use", 67),
          e.ɵɵelementEnd()());
      }
      function Fr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 59),
            e.ɵɵtemplate(1, Lr, 3, 0, "app-icon-button", 60),
            e.ɵɵelementStart(2, "app-button", 61),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2).$implicit,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.openRemoveLiquidityPoolModal(i));
            }),
            e.ɵɵelement(3, "span", 62),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "app-button", 63),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2).$implicit,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.openProvideLiquidityPoolModal(i));
            }),
            e.ɵɵelement(5, "span", 64),
            e.ɵɵelementEnd()();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext(2).$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !1),
            e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", 0 === t.myLiquidityRaw);
        }
      }
      const cn = function () {
        return { showDecimals: !1 };
      };
      function Vr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 53)(2, "div", 54)(3, "span", 55),
            e.ɵɵtext(4, "Liquidity"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "formatUsd"),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(8, Br, 1, 2, "app-apy-values", 56),
            e.ɵɵpipe(9, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(10, Fr, 6, 2, "div", 57),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit,
            n = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵtextInterpolate1(
              " ",
              t.liquidity
                ? e.ɵɵpipeBind2(7, 3, t.liquidity, e.ɵɵpureFunction0(8, cn))
                : "-",
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(9, 6, n.screenWidth$) < 1025),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", n.walletConnected);
        }
      }
      function jr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "span", 68),
            e.ɵɵelement(1, "app-pool-liquidity", 69),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("pool", t);
        }
      }
      function Ur(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementStart(0, "span", 70),
            e.ɵɵelement(1, "app-pool-apy", 69),
            e.ɵɵelementEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("pool", t);
        }
      }
      function Qr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "span", 71), e.ɵɵtext(1, "-"), e.ɵɵelementEnd());
      }
      function zr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 72),
            e.ɵɵpipe(2, "poolGovernanceNavLink"),
            e.ɵɵelement(3, "use", 73),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = a.ngIf,
            n = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("routerLink", e.ɵɵpipeBind2(2, 1, n, t));
        }
      }
      function qr(o, a) {
        1 & o &&
          (e.ɵɵelementStart(0, "app-icon-button", 79),
          e.ɵɵpipe(1, "transloco"),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(2, "svg", 80),
          e.ɵɵelement(3, "use", 67),
          e.ɵɵelementEnd()()),
          2 & o &&
            e.ɵɵpropertyInterpolate(
              "tooltip",
              e.ɵɵpipeBind1(1, 1, "poolsPage.exit-farming")
            );
      }
      function Rr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-icon-button", 81),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(3).$implicit,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.openRemoveLiquidityPoolModal(i));
            }),
            e.ɵɵpipe(1, "transloco"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(2, "svg", 80),
            e.ɵɵelement(3, "use", 82),
            e.ɵɵelementEnd()();
        }
        2 & o &&
          e.ɵɵpropertyInterpolate(
            "tooltip",
            e.ɵɵpipeBind1(1, 1, "button.remove-liquidity2")
          );
      }
      function Nr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, qr, 4, 3, "app-icon-button", 74),
            e.ɵɵtemplate(2, Rr, 4, 3, "app-icon-button", 75),
            e.ɵɵelementStart(3, "app-icon-button", 76),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext(2).$implicit,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.openProvideLiquidityPoolModal(i));
            }),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(5, "svg", 77),
            e.ɵɵelement(6, "use", 78),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext(2).$implicit;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !1),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.myLiquidityRaw > 0),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(4, 3, "button.provide-liquidity2")
            );
        }
      }
      function Kr(o, a) {
        if (
          (1 & o &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Nr, 7, 5, "ng-container", 28),
            e.ɵɵelementContainerEnd()),
          2 & o)
        ) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", !t.isPendingDeployment);
        }
      }
      function Gr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-icon-button", 83),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext().$implicit,
                r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.poolGovernanceNav(i));
            }),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(3, "svg", 84),
            e.ɵɵelement(4, "use", 73),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        2 & o &&
          (e.ɵɵadvance(1),
          e.ɵɵproperty(
            "tooltip",
            e.ɵɵpipeBind1(2, 1, "poolsPage.pool-governance2")
          ));
      }
      function Wr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵnamespaceSVG(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(0, "div", 85),
            e.ɵɵlistener("click", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.linkStopPropagation(i));
            }),
            e.ɵɵelementStart(1, "div", 86),
            e.ɵɵelement(2, "app-pool-charts", 69),
            e.ɵɵelementEnd(),
            e.ɵɵelement(3, "app-liquidity-pool-stats", 87),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(2),
            e.ɵɵproperty("pool", t),
            e.ɵɵadvance(1),
            e.ɵɵproperty("pool", t)("userLiquidity", t.myLiquidity)(
              "userLiquidityRaw",
              t.myLiquidityRaw
            );
        }
      }
      const Hr = function (o, a, t, n, i) {
        return {
          "lp-table": o,
          "lp-table-disconnected": a,
          "pool-token-open": t,
          "is-deploying": n,
          "pool-token-hover": i,
        };
      };
      function Yr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 26),
            e.ɵɵlistener("click", function (i) {
              const s = e.ɵɵrestoreView(t).$implicit,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(l.togglePoolDetails(i, s));
            }),
            e.ɵɵelementStart(1, "div", 27),
            e.ɵɵtemplate(2, Mr, 6, 5, "ng-container", 28),
            e.ɵɵtemplate(3, Er, 7, 8, "ng-container", 28),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "div", 29),
            e.ɵɵtemplate(5, Dr, 9, 7, "div", 30),
            e.ɵɵpipe(6, "async"),
            e.ɵɵpipe(7, "tokenPriority"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(8, $r, 13, 0, "div", 31),
            e.ɵɵtemplate(9, Vr, 11, 9, "ng-container", 28),
            e.ɵɵelementStart(10, "span", 32),
            e.ɵɵtext(11),
            e.ɵɵpipe(12, "formatUsd"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(13, jr, 2, 1, "span", 33),
            e.ɵɵpipe(14, "async"),
            e.ɵɵtemplate(15, Ur, 2, 1, "span", 34),
            e.ɵɵtemplate(16, Qr, 2, 0, "span", 35),
            e.ɵɵtemplate(17, zr, 4, 4, "ng-container", 28),
            e.ɵɵpipe(18, "async"),
            e.ɵɵelementStart(19, "div", 36)(20, "a", 37),
            e.ɵɵelement(21, "img", 38),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(22, Kr, 2, 1, "ng-container", 28),
            e.ɵɵtemplate(23, Gr, 5, 3, "ng-container", 28),
            e.ɵɵelementStart(24, "div", 39),
            e.ɵɵlistener("click", function (i) {
              const s = e.ɵɵrestoreView(t).$implicit,
                l = e.ɵɵnextContext();
              return e.ɵɵresetView(l.togglePoolDetails(i, s));
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(25, "svg", 40),
            e.ɵɵelement(26, "use", 41),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(27, Wr, 4, 4, "div", 42),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = a.$implicit,
            n = e.ɵɵnextContext();
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction5(
              28,
              Hr,
              n.walletConnected,
              !n.walletConnected,
              n.isOpen[t.address],
              null == t ? null : t.isPendingDeployment,
              !(null != t && t.isPendingDeployment)
            )
          ),
            e.ɵɵattribute(
              "data-id",
              "pool-row-" + t.tokens[0].symbol + "-" + t.tokens[1].symbol
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", null == t ? null : t.isPendingDeployment),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !(null != t && t.isPendingDeployment)),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngForOf",
              e.ɵɵpipeBind1(6, 17, e.ɵɵpipeBind1(7, 19, t.tokens))
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", null == t ? null : t.isPendingDeployment),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !(null != t && t.isPendingDeployment)),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              t.liquidity
                ? e.ɵɵpipeBind2(12, 21, t.liquidity, e.ɵɵpureFunction0(34, cn))
                : "-",
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              n.walletConnected && e.ɵɵpipeBind1(14, 24, n.screenWidth$) > 1024
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !(null != t && t.isPendingDeployment)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", null == t ? null : t.isPendingDeployment),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(18, 26, n.currentChainId$)),
            e.ɵɵadvance(5),
            e.ɵɵproperty("ngIf", n.walletConnected),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.isPendingDeployment),
            e.ɵɵadvance(1),
            e.ɵɵattribute("data-is-open", n.isOpen[t.address]),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngClass", n.isOpen[t.address] && "lp-arrow-open"),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", n.isOpen[null == t ? null : t.address]);
        }
      }
      function Xr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 88),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 89),
            e.ɵɵelement(2, "use", 90),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(3, "div")(4, "app-button", 63),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const i = e.ɵɵnextContext();
              return e.ɵɵresetView(i.openCreateLiquidityPoolModal());
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(5, "svg", 9),
            e.ɵɵelement(6, "use", 91),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(7, "span", 13),
            e.ɵɵtext(8, "Create pool"),
            e.ɵɵelementEnd()()()();
        }
      }
      const Zr = function () {
        return [5, 10, 25, 100];
      };
      function Jr(o, a) {
        if (1 & o) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-paginator", 92),
            e.ɵɵlistener("page", function (i) {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.onPageChange(i));
            }),
            e.ɵɵpipe(1, "async"),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & o) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("length", e.ɵɵpipeBind1(1, 4, t.poolsCount$))(
            "pageIndex",
            e.ɵɵpipeBind1(2, 6, t.pageIndex$)
          )("pageSize", e.ɵɵpipeBind1(3, 8, t.pageSize$))(
            "pageSizeOptions",
            e.ɵɵpureFunction0(10, Zr)
          );
        }
      }
      const ea = function (o, a) {
        return { "lp-table": o, "lp-table-disconnected": a };
      };
      let ta = (() => {
        class o {
          constructor(t, n, i, r, s, l, d, p, u, f, v, C, L, k, Q, q, oe, ie) {
            (this.matDialogService = t),
              (this.liquidityProtocolApiService = n),
              (this.walletConnectionQuery = i),
              (this.liquidityPoolService = r),
              (this.poolsPageService = s),
              (this.tokensQuery = l),
              (this.pricesQuery = d),
              (this.poolsPageQuery = p),
              (this.router = u),
              (this.tokenService = f),
              (this.transactionHistoryQuery = v),
              (this.farmingQuery = C),
              (this.webAnalyticsService = L),
              (this.routerNav = k),
              (this.activeConnectionQuery = Q),
              (this.resizeSvc = q),
              (this.farmingPoolsService = oe),
              (this.staticConfigFeaturesService = ie),
              (this.isOpen = {}),
              (this.pendingPools$ = new $e.X([])),
              (this.isEthereumTypeNetwork$ =
                this.activeConnectionQuery.isEthereumMainnet$),
              (this.currentChainId$ =
                this.activeConnectionQuery.currentUiChain$.pipe(
                  (0, h.U)((I) => I.id)
                )),
              (this.visiblePools$ = (0, _.a)([
                this.poolsPageQuery.visiblePools$,
                this.pendingPools$,
                this.farmingQuery.selectAll(),
                this.farmingPoolsService.getFarmingPools(),
              ]).pipe(
                (0, h.U)((I) => {
                  const [m, A, T, Y] = I;
                  return [
                    ...A,
                    ...m.map((R) => {
                      const ut = [
                          (0, g.Pz)(R.reserve0, R.token0.decimals),
                          (0, g.Pz)(R.reserve1, R.token1.decimals),
                        ],
                        Qe = (0, g.Pz)(R.totalSupply, 18);
                      let Me, mt, kn, Sn, gt;
                      const ze = T.filter(
                        (ye) => !D.Fv.includes(ye.farmingAddress)
                      ).find((ye) => ye.poolAddress === R.address);
                      if (ze) {
                        const { yourStakeUsd: ye, yourStakeRaw: ft } = (0,
                        Ge.tX)(ze);
                        (Sn = ft),
                          (Me = ye),
                          (mt = ze.apy || 0),
                          (kn = ze.extraApy);
                        const In = Y.find((ba) => ba.poolAddress === R.address),
                          Ca = new Date().getTime();
                        (gt = !!In && Ca > In.endTime), gt && (mt = 0);
                      }
                      let wn = 0,
                        Tn = 0;
                      if (R.myLiquidityPoolToken) {
                        const [ye, ft] = we(
                          b.O$.from(R.myLiquidityPoolToken).add(
                            (0, g.Pz)(Sn || "0", 18)
                          ),
                          ut,
                          Qe
                        );
                        (wn = +(0, g.kg)(ye.toString(), R.token0.decimals)),
                          (Tn = +(0, g.kg)(ft.toString(), R.token1.decimals));
                      }
                      return Object.assign(Object.assign({}, R), {
                        myLiquidityToken0: wn,
                        myLiquidityToken1: Tn,
                        stakedInFarming: Me,
                        farmingApy: mt,
                        extraFarmingApy: kn,
                        isFarmingEnded: gt,
                      });
                    }),
                  ];
                }),
                (0, $.d)({ bufferSize: 1, refCount: !0 })
              )),
              (this.pageIndex$ = this.poolsPageQuery.select("pageIndex")),
              (this.pageSize$ = this.poolsPageQuery.select("pageSize")),
              (this.poolsCount$ = this.poolsPageQuery.selectPoolsCount()),
              (this.walletConnected = !1),
              (this.screenWidth$ = this.resizeSvc.windowResize$.pipe(
                (0, ke.b)(25),
                (0, U.x)()
              )),
              (this.daoPoolsBanner$ =
                this.staticConfigFeaturesService.daoPoolsBanner$),
              (this.subscription = new me.w0());
            const re = this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, P.b)((I) => {
                this.walletConnected = !!I;
              }),
              (0, F.h)((I) => !!I)
            );
            this.subscription.add(
              re.subscribe({ error: (I) => (0, M.eK)(I, "lc0050") })
            );
            const H = this.transactionHistoryQuery
              .pendingTransactionsByType(ve.E.deployNewPool)
              .pipe(
                (0, P.b)((I) => {
                  const m = I.map((A) => {
                    const T = A.meta || {};
                    return {
                      address: A.hash,
                      tokens: [T.token0, T.token1],
                      isPendingDeployment: !0,
                    };
                  });
                  this.pendingPools$.next(m);
                })
              );
            this.subscription.add(
              H.subscribe({ error: (I) => (0, M.eK)(I, "lc0052") })
            );
          }
          ngOnInit() {
            this.webAnalyticsService.pageView(
              "/pools",
              "DAO / Liquidity Pools"
            ),
              this.poolsPageService.selectPage({ pageIndex: 0 });
            const {
              token0: t,
              token1: n,
              action: i,
            } = this.router.snapshot.queryParams;
            t && n
              ? this.getTokens(t, n)
                  .pipe(
                    (0, P.b)((r) => {
                      null !== r[0] && null !== r[1]
                        ? this.poolsPageService.openLiquidityPoolModal(
                            r,
                            this.getPoolDialogViewModeFromString(i)
                          )
                        : this.poolsPageService.removeQueryParams();
                    }),
                    (0, Z.q)(1)
                  )
                  .subscribe({ error: (r) => (0, M.eK)(r, "lc0053") })
              : this.poolsPageService.removeQueryParams();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          openCreateLiquidityPoolModal() {
            this.poolsPageService.openLiquidityPoolModal([], B.create);
          }
          openRemoveLiquidityPoolModal(t) {
            this.poolsPageService.openLiquidityPoolModal(t.tokens, B.remove);
          }
          openProvideLiquidityPoolModal(t) {
            this.poolsPageService.openLiquidityPoolModal(t.tokens, B.provide);
          }
          poolGovernanceNav(t) {
            this.routerNav.navigateByUrl(
              `${this.activeConnectionQuery.currentChainId}/earn/pools/${
                null == t ? void 0 : t.address
              }/governance`
            );
          }
          togglePoolDetails(t, n) {
            if (n.isPendingDeployment) return;
            t.stopPropagation();
            const i = this.isOpen[n.address];
            this.isOpen = Object.assign(Object.assign({}, this.isOpen), {
              [n.address]: !i,
            });
          }
          linkStopPropagation(t) {
            t.stopPropagation();
          }
          trackByAddress(t, n) {
            return n.address;
          }
          sortData(t) {
            this.poolsPageService.sortPools(t.active, t.direction);
          }
          onPageChange(t) {
            this.poolsPageService.selectPage(t);
          }
          getTokens(t, n) {
            const i = this.getToken(t.toLowerCase()),
              r = this.getToken(n.toLowerCase());
            if (i && r) return (0, x.of)([i, r]);
            const s = [];
            if (!i) {
              const l = this.tokenService.fetchData$(t);
              s.push(l);
            }
            if (!r) {
              const l = this.tokenService.fetchData$(n);
              s.push(l);
            }
            return (0, _.a)(s).pipe(
              (0, h.U)((l) =>
                i || r ? (i ? [i, l[0]] : [l[0], r]) : [l[0], l[1]]
              )
            );
          }
          getToken(t) {
            return this.tokensQuery.getByAddress((t = t === w.r_ ? w.xb : t));
          }
          getPoolDialogViewModeFromString(t) {
            return { remove: B.remove }[t] || B.provide;
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵdirectiveInject(N.uw),
              e.ɵɵdirectiveInject(nn),
              e.ɵɵdirectiveInject(fe.r),
              e.ɵɵdirectiveInject(Ze),
              e.ɵɵdirectiveInject(Ve),
              e.ɵɵdirectiveInject(rt.d),
              e.ɵɵdirectiveInject(Te.u),
              e.ɵɵdirectiveInject(at),
              e.ɵɵdirectiveInject(K.gz),
              e.ɵɵdirectiveInject(jt.H),
              e.ɵɵdirectiveInject(Bt.x),
              e.ɵɵdirectiveInject(Ge.c5),
              e.ɵɵdirectiveInject(Pi.y),
              e.ɵɵdirectiveInject(K.F0),
              e.ɵɵdirectiveInject(he.r),
              e.ɵɵdirectiveInject(Ci._),
              e.ɵɵdirectiveInject(We.R),
              e.ɵɵdirectiveInject(bi.Y)
            );
          }),
          (o.ɵcmp = e.ɵɵdefineComponent({
            type: o,
            selectors: [["app-pools-page"]],
            decls: 39,
            vars: 29,
            consts: [
              ["class", "pools-warning", 3, "ngClass", "innerText", 4, "ngIf"],
              [1, "d-flex", "mb-32", "justify-content-between"],
              [1, "mr-20"],
              ["data-id", "pools-page.version-switch", 4, "ngIf"],
              ["transloco", "poolsPage.filter", 1, "field-header"],
              [1, "mb-20", "filter-wrap"],
              ["data-id", "pools-page.token-filter"],
              [1, "desktop-hidden"],
              ["color", "blue", 3, "disabled", "clicked"],
              ["width", "24", "height", "24"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/simple-plus.svg#simple-plus",
              ],
              [1, "mobile-hidden"],
              ["color", "light-blue", 3, "disabled", "click"],
              ["transloco", "button.create-pool2", 1, "ml-8"],
              [
                "matSort",
                "",
                1,
                "lp-table-header",
                "mb-32",
                3,
                "ngClass",
                "matSortChange",
              ],
              [
                "transloco",
                "poolsPage.pool",
                1,
                "fs-12",
                "text-gray",
                "text-left",
              ],
              ["mat-sort-header", "liquidity", 1, "fs-12", "text-gray"],
              [
                "class",
                "fs-12 text-gray",
                "mat-sort-header",
                "myLiquidity",
                4,
                "ngIf",
              ],
              ["mat-sort-header", "apy", 1, "fs-12", "text-gray"],
              [1, "pools-table-content"],
              [
                "class",
                "lp-table-disconnected gray-border mb-24",
                3,
                "ngClass",
                "click",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              ["class", "no-such-pool-wrap", 4, "ngIf"],
              [
                "class",
                "pools-page-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
                4,
                "ngIf",
              ],
              [1, "pools-warning", 3, "ngClass", "innerText"],
              ["data-id", "pools-page.version-switch"],
              ["mat-sort-header", "myLiquidity", 1, "fs-12", "text-gray"],
              [
                1,
                "lp-table-disconnected",
                "gray-border",
                "mb-24",
                3,
                "ngClass",
                "click",
              ],
              ["data-id", "pool-contract", 1, "pool-hash"],
              [4, "ngIf"],
              ["data-id", "pool-tokens-pair", 1, "d-flex", "pool-tokens"],
              ["class", "fs-12 d-flex mr-20 lp-token", 4, "ngFor", "ngForOf"],
              ["class", "deployment-mobile", 4, "ngIf"],
              ["data-id", "pool-total-liquidity", 1, "pool-info-desktop"],
              ["data-id", "pool-my-liquidity", 4, "ngIf"],
              ["class", "pool-info-desktop", "data-id", "pool-APY", 4, "ngIf"],
              ["class", "pool-info-desktop", 4, "ngIf"],
              ["data-id", "pool-actions", 1, "pool-actions-desktop"],
              ["href", "", 1, "d-none", "mr-20", "text-gray"],
              ["src", "assets/images/icons/graphic2.svg"],
              ["data-id", "pool-actions-details-expander", 3, "click"],
              [
                "width",
                "24",
                "height",
                "24",
                1,
                "text-gray",
                "lp-arrow",
                3,
                "ngClass",
              ],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              [
                "class",
                "mt-20 gray-border pool-info-wrap",
                "data-id",
                "pool-details",
                3,
                "click",
                4,
                "ngIf",
              ],
              ["src", "assets/images/loader_blue.svg", "alt", ""],
              [
                "target",
                "_blank",
                "transloco",
                "poolsPage.deploying",
                1,
                "fs-12",
                "pools-table_current-color",
                3,
                "href",
              ],
              [
                "width",
                "24",
                "height",
                "24",
                "src",
                "assets/images/liquidity-pool-parts.svg",
                "alt",
                "",
              ],
              [
                "target",
                "_blank",
                1,
                "fs-12",
                "pools-table_current-color",
                3,
                "href",
                "click",
              ],
              [1, "fs-12", "d-flex", "mr-20", "lp-token"],
              ["loading", "lazy", "alt", "token logo", 1, "mr-4", 3, "src"],
              [1, "text-left"],
              [
                "target",
                "_blank",
                1,
                "pools-table_current-color",
                3,
                "href",
                "click",
              ],
              [1, "text-gray", "mt-4"],
              [1, "deployment-mobile"],
              [1, "pool-info-mobile"],
              [1, "mb-8", "d-flex", "justify-content-between"],
              ["transloco", "dao.liquidity", 1, "text-gray"],
              [3, "pool", "walletConnected", 4, "ngIf"],
              ["class", "pool-actions-mobile", 4, "ngIf"],
              [3, "pool", "walletConnected"],
              [1, "pool-actions-mobile"],
              ["class", "mr-8", "color", "red", 4, "ngIf"],
              ["color", "red", 3, "disabled", "clicked"],
              [1, "pool-action-btn-label", "pool-action-btn-label-remove"],
              ["color", "blue", 3, "clicked"],
              [1, "pool-action-btn-label", "pool-action-btn-label-provide"],
              ["color", "red", 1, "mr-8"],
              ["width", "19", "height", "18", 1, "exit-icon"],
              [0, "xlink", "href", "assets/images/icons/exit.svg#exit"],
              ["data-id", "pool-my-liquidity"],
              [3, "pool"],
              ["data-id", "pool-APY", 1, "pool-info-desktop"],
              [1, "pool-info-desktop"],
              [
                "width",
                "24",
                "height",
                "24",
                1,
                "settings-icon",
                "text-gray",
                "pool-btn-more",
                3,
                "routerLink",
              ],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/settings2.svg#settings2",
              ],
              [
                "size",
                "small",
                "class",
                "mr-8",
                "color",
                "red",
                3,
                "tooltip",
                4,
                "ngIf",
              ],
              [
                "size",
                "small",
                "class",
                "mr-8",
                "color",
                "red",
                "data-id",
                "pool-actions-remove-liquidity",
                3,
                "tooltip",
                "clicked",
                4,
                "ngIf",
              ],
              [
                "size",
                "small",
                "color",
                "blue",
                "data-id",
                "pool-actions-provide-liquidity",
                1,
                "mr-8",
                3,
                "tooltip",
                "clicked",
              ],
              ["width", "20", "height", "20", 1, "exit-icon", "icon-btn-img"],
              [0, "xlink", "href", "assets/images/icons/plus_2.svg#plus_2"],
              ["size", "small", "color", "red", 1, "mr-8", 3, "tooltip"],
              ["width", "20", "height", "20", 1, "icon-btn-img"],
              [
                "size",
                "small",
                "color",
                "red",
                "data-id",
                "pool-actions-remove-liquidity",
                1,
                "mr-8",
                3,
                "tooltip",
                "clicked",
              ],
              [0, "xlink", "href", "assets/images/icons/minus.svg#minus"],
              [
                "size",
                "small",
                "color",
                "white",
                "data-id",
                "pool-actions-governance-settings",
                1,
                "mr-8",
                3,
                "tooltip",
                "clicked",
              ],
              ["width", "20", "height", "20"],
              [
                "data-id",
                "pool-details",
                1,
                "mt-20",
                "gray-border",
                "pool-info-wrap",
                3,
                "click",
              ],
              ["data-id", "pool-details-charts", 1, "stays-charts"],
              [
                "data-id",
                "pool-details-stats",
                3,
                "pool",
                "userLiquidity",
                "userLiquidityRaw",
              ],
              [1, "no-such-pool-wrap"],
              ["width", "304", "height", "255", 1, "mb-16", "text-gray"],
              [
                0,
                "xlink",
                "href",
                "assets/images/no-such-pool.svg#no-such-pool",
              ],
              [0, "xlink", "href", "assets/images/icons/plus.svg#plus"],
              [
                1,
                "pools-page-paginator",
                3,
                "length",
                "pageIndex",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
            ],
            template: function (t, n) {
              if (
                (1 & t &&
                  (e.ɵɵtemplate(0, Ir, 1, 2, "div", 0),
                  e.ɵɵpipe(1, "async"),
                  e.ɵɵelementStart(2, "div", 1)(3, "h1", 2),
                  e.ɵɵtext(4),
                  e.ɵɵpipe(5, "transloco"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(6, Ar, 1, 0, "app-lp-version-switch", 3),
                  e.ɵɵpipe(7, "async"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(8, "p", 4),
                  e.ɵɵtext(9, "Filter"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(10, "div", 5),
                  e.ɵɵelement(11, "token-filter", 6),
                  e.ɵɵelementStart(12, "div", 7)(13, "app-icon-button", 8),
                  e.ɵɵlistener("clicked", function () {
                    return n.openCreateLiquidityPoolModal();
                  }),
                  e.ɵɵnamespaceSVG(),
                  e.ɵɵelementStart(14, "svg", 9),
                  e.ɵɵelement(15, "use", 10),
                  e.ɵɵelementEnd()()(),
                  e.ɵɵnamespaceHTML(),
                  e.ɵɵelementStart(16, "div", 11)(17, "simple-button", 12),
                  e.ɵɵlistener("click", function () {
                    return n.openCreateLiquidityPoolModal();
                  }),
                  e.ɵɵnamespaceSVG(),
                  e.ɵɵelementStart(18, "svg", 9),
                  e.ɵɵelement(19, "use", 10),
                  e.ɵɵelementEnd(),
                  e.ɵɵnamespaceHTML(),
                  e.ɵɵelementStart(20, "span", 13),
                  e.ɵɵtext(21, "Create pool"),
                  e.ɵɵelementEnd()()()(),
                  e.ɵɵelementStart(22, "div", 14),
                  e.ɵɵlistener("matSortChange", function (r) {
                    return n.sortData(r);
                  }),
                  e.ɵɵelementStart(23, "span", 15),
                  e.ɵɵtext(24, "Pool"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelement(25, "span"),
                  e.ɵɵelementStart(26, "span", 16),
                  e.ɵɵtext(27),
                  e.ɵɵpipe(28, "transloco"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(29, Or, 2, 0, "span", 17),
                  e.ɵɵelementStart(30, "span", 18),
                  e.ɵɵtext(31, "APY"),
                  e.ɵɵelementEnd()(),
                  e.ɵɵelementStart(32, "div", 19),
                  e.ɵɵtemplate(33, Yr, 28, 35, "div", 20),
                  e.ɵɵpipe(34, "async"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(35, Xr, 9, 0, "div", 21),
                  e.ɵɵpipe(36, "async"),
                  e.ɵɵtemplate(37, Jr, 4, 11, "mat-paginator", 22),
                  e.ɵɵpipe(38, "async")),
                2 & t)
              ) {
                let i;
                e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 12, n.daoPoolsBanner$)),
                  e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate(e.ɵɵpipeBind1(5, 14, "dao.pools")),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(7, 16, n.isEthereumTypeNetwork$)
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty("disabled", !n.walletConnected),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("disabled", !n.walletConnected),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty(
                    "ngClass",
                    e.ɵɵpureFunction2(
                      26,
                      ea,
                      n.walletConnected,
                      !n.walletConnected
                    )
                  ),
                  e.ɵɵadvance(5),
                  e.ɵɵtextInterpolate(e.ɵɵpipeBind1(28, 18, "dao.liquidity")),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", n.walletConnected),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    "ngForOf",
                    e.ɵɵpipeBind1(34, 20, n.visiblePools$)
                  )("ngForTrackBy", n.trackByAddress),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    !(
                      null != (i = e.ɵɵpipeBind1(36, 22, n.visiblePools$)) &&
                      i.length
                    )
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(38, 24, n.poolsCount$));
              }
            },
            dependencies: [
              y.mk,
              y.sg,
              y.O5,
              j.KI,
              Ti,
              Pe.r,
              vt.NW,
              K.rH,
              qe.YE,
              qe.nU,
              Li,
              Fi.q,
              Vi.q,
              Ki,
              or,
              rr,
              Cr,
              ln,
              y.Ov,
              br.V,
              Ct.E,
              kr.b,
              j.Ot,
              st.V,
              wr,
              Tr,
            ],
            styles: [
              '.pools-warning[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:24px;border-radius:8px;padding:8px 0;text-align:center;background:#ec9a1f;color:var(--1inch__ui-11-05);line-height:18px}.filter-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 180px;grid-column-gap:16px;align-items:center}@media (max-width: 940px){.filter-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 40px}}.lp-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:110px 200fr 60fr 50fr 170fr 140px;grid-column-gap:16px;align-items:center;padding:8px;border-radius:10px;position:relative}.lp-table[_ngcontent-%COMP%]:hover{cursor:pointer}@media (max-width: 1024px){.lp-table[_ngcontent-%COMP%]{font-size:12px;display:block;border:1px solid;border-radius:16px;padding:16px}}.lp-table-disconnected[_ngcontent-%COMP%]{display:grid;grid-template-columns:110px 3fr 1fr 2fr 140px;grid-column-gap:16px;align-items:center;padding:30px;border-radius:30px;position:relative}.lp-table-disconnected[_ngcontent-%COMP%]:hover{cursor:pointer}@media (max-width: 1024px){.lp-table-disconnected[_ngcontent-%COMP%]{font-size:12px;display:block;border:1px solid;border-radius:30px;padding:16px}}.is-deploying[_ngcontent-%COMP%]:hover{cursor:auto}.lp-arrow[_ngcontent-%COMP%]{transform:rotate(-90deg);margin-top:4px}.lp-arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.lp-arrow-open[_ngcontent-%COMP%]{transform:rotate(0)}.pool-info-wrap[_ngcontent-%COMP%]{padding:16px;grid-column:1/7;display:grid;grid-template-columns:1fr 380px;grid-column-gap:16px;border-radius:0 0 10px 10px;border-top:0}@media (max-width: 1024px){.pool-info-wrap[_ngcontent-%COMP%]{display:none}.pool-info-wrap[_ngcontent-%COMP%]   .stays-charts[_ngcontent-%COMP%]{margin-bottom:8px}}.lp-token[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.no-such-pool-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;height:70%;align-items:center;flex-direction:column}.no-such-pool-wrap[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{max-width:100%;opacity:.5}.pool-hash[_ngcontent-%COMP%]{display:flex;align-items:center}.pool-hash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;margin-right:8px}.pool-hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--1inch__ui-02)}.shortcut-title[_ngcontent-%COMP%]{font-size:24px;line-height:24px;font-weight:300;display:block}.mat-sort-header-fix[_ngcontent-%COMP%]{grid-column-gap:0}@media (min-width: 480px){.pools-table-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}}@media (min-width: 600px){.pools-table-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}}@media (min-width: 1025px){.pools-table-content[_ngcontent-%COMP%]{display:block}}.pool-hash[_ngcontent-%COMP%]{margin-bottom:4px}@media (max-width: 1024px){.pool-hash[_ngcontent-%COMP%]{margin-bottom:16px}}@media (max-width: 1024px){.pool-tokens[_ngcontent-%COMP%]{margin-bottom:16px}}.lp-table-header[_ngcontent-%COMP%]{display:none}@media (min-width: 1025px){.lp-table-header[_ngcontent-%COMP%]{display:grid}}.pool-info-desktop[_ngcontent-%COMP%]{display:none;font-size:14px}@media (min-width: 1025px){.pool-info-desktop[_ngcontent-%COMP%]{display:block}}.pool-actions-desktop[_ngcontent-%COMP%]{display:none}.pool-actions-desktop[_ngcontent-%COMP%]   .icon-btn-img[_ngcontent-%COMP%]{margin-top:-2px}@media (min-width: 1025px){.pool-actions-desktop[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}}.pool-info-mobile[_ngcontent-%COMP%]{padding:16px;border-radius:12px;margin-bottom:16px;background:var(--1inch-bg-02)}@media (min-width: 1025px){.pool-info-mobile[_ngcontent-%COMP%]{display:none}}.pool-actions-mobile[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}@media (min-width: 1025px){.pool-actions-mobile[_ngcontent-%COMP%]{display:none}}.pool-actions-mobile-with-exit[_ngcontent-%COMP%]{grid-template-columns:40px 1fr 1fr}.pool-action-btn-label-remove[_ngcontent-%COMP%]{display:block;margin:0 auto}.pool-action-btn-label-remove[_ngcontent-%COMP%]:before{content:"Remove"}@media (min-width: 480px){.pool-action-btn-label-remove[_ngcontent-%COMP%]:before{content:"Remove Liquidity"}}@media (min-width: 600px){.pool-action-btn-label-remove[_ngcontent-%COMP%]:before{content:"Remove"}}@media (min-width: 860px){.pool-action-btn-label-remove[_ngcontent-%COMP%]:before{content:"Remove Liquidity"}}.pool-action-btn-label-provide[_ngcontent-%COMP%]{display:block;margin:0 auto}.pool-action-btn-label-provide[_ngcontent-%COMP%]:before{content:"Provide"}@media (min-width: 480px){.pool-action-btn-label-provide[_ngcontent-%COMP%]:before{content:"Provide Liquidity"}}@media (min-width: 600px){.pool-action-btn-label-provide[_ngcontent-%COMP%]:before{content:"Provide"}}@media (min-width: 860px){.pool-action-btn-label-provide[_ngcontent-%COMP%]:before{content:"Provide Liquidity"}}.pool-btn-more[_ngcontent-%COMP%]{display:none}@media (max-width: 1024px){.pool-btn-more[_ngcontent-%COMP%]{display:block;position:absolute;right:16px;top:24px}}.deployment-mobile[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 3fr 1fr;grid-gap:10px;padding:20px;border-radius:12px;background:var(--1inch-bg-02)}.deployment-mobile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:12px;border-radius:20px;background:var(--1inch-btn-bg-03);opacity:.5}@media (min-width: 1025px){.deployment-mobile[_ngcontent-%COMP%]{display:none}}.icon-desktop[_ngcontent-%COMP%]{display:none;align-items:center}@media (min-width: 390px){.icon-desktop[_ngcontent-%COMP%]{display:flex}}@media (min-width: 600px){.icon-desktop[_ngcontent-%COMP%]{display:none}}@media (min-width: 790px){.icon-desktop[_ngcontent-%COMP%]{display:flex}}@media (min-width: 1025px){.icon-desktop[_ngcontent-%COMP%]{display:none}}@media (min-width: 1320px){.icon-desktop[_ngcontent-%COMP%]{display:flex}}.icon-mobile[_ngcontent-%COMP%]{display:flex;align-items:center}@media (min-width: 390px){.icon-mobile[_ngcontent-%COMP%]{display:none}}@media (min-width: 600px){.icon-mobile[_ngcontent-%COMP%]{display:flex}}@media (min-width: 790px){.icon-mobile[_ngcontent-%COMP%]{display:none}}@media (min-width: 1025px){.icon-mobile[_ngcontent-%COMP%]{display:flex}}@media (min-width: 1320px){.icon-mobile[_ngcontent-%COMP%]{display:none}}.pools-page-paginator[_ngcontent-%COMP%]{margin-top:16px}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.pools-page-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.pools-page-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .pools-page-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.pools-page-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}.pools-table_current-color[_ngcontent-%COMP%]{color:var(--1inch-text-01)}',
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var oa = c(28695),
        pn = c(80849),
        lt = c(7913),
        pe = c(71909),
        ia = c(3918),
        ra = c(84154),
        aa = c(87390),
        ne = c(54185),
        de = c(3571),
        ct = c(7722),
        sa = c(17031),
        la = c(76277);
      let dn = (() => {
        class o {
          validate(t, n) {
            switch (n.type) {
              case "string":
                return this.validateString(t, n);
              case "number":
              case "integer":
                return this.validateNumber(t, n);
              case "boolean":
                return this.validateBoolean(t, n);
              case "array":
                return this.validateArray(t, n);
              case "object":
                return this.validateObject(t, n);
            }
          }
          validateString(t, n) {
            if (
              "string" != typeof t ||
              !this.validateConst(t, n) ||
              !this.validateEnum(t, n) ||
              (void 0 !== n.maxLength && t.length > n.maxLength) ||
              (void 0 !== n.minLength && t.length < n.minLength)
            )
              return !1;
            if (n.pattern) {
              let i = null;
              try {
                i = new RegExp(n.pattern);
              } catch (r) {}
              if (i && !i.test(t)) return !1;
            }
            return !0;
          }
          validateNumber(t, n) {
            return !(
              "number" != typeof t ||
              ("integer" === n.type && !Number.isInteger(t)) ||
              !this.validateConst(t, n) ||
              !this.validateEnum(t, n) ||
              (n.multipleOf && !Number.isInteger(t / n.multipleOf)) ||
              (void 0 !== n.maximum && t > n.maximum) ||
              (void 0 !== n.exclusiveMaximum && t >= n.exclusiveMaximum) ||
              (void 0 !== n.minimum && t < n.minimum) ||
              (void 0 !== n.exclusiveMinimum && t <= n.exclusiveMinimum)
            );
          }
          validateBoolean(t, n) {
            return !("boolean" != typeof t || !this.validateConst(t, n));
          }
          validateArray(t, n) {
            if (
              !Array.isArray(t) ||
              (void 0 !== n.maxItems && t.length > n.maxItems) ||
              (void 0 !== n.minItems && t.length < n.minItems)
            )
              return !1;
            if (n.uniqueItems) {
              const i = new Set(t);
              if (t.length !== i.size) return !1;
            }
            if (Array.isArray(n.items)) return this.validateTuple(t, n.items);
            for (const i of t) if (!this.validate(i, n.items)) return !1;
            return !0;
          }
          validateTuple(t, n) {
            if (t.length !== n.length) return !1;
            for (let i = 0; i < n.length; i += 1)
              if (!this.validate(t[i], n[i])) return !1;
            return !0;
          }
          validateObject(t, n) {
            if (
              "object" != typeof t ||
              null === t ||
              Object.keys(n.properties).length < Object.keys(t).length
            )
              return !1;
            if (n.required)
              for (const i of n.required)
                if (!Object.prototype.hasOwnProperty.call(t, i)) return !1;
            for (const i in n.properties)
              if (
                Object.prototype.hasOwnProperty.call(n.properties, i) &&
                Object.prototype.hasOwnProperty.call(t, i) &&
                !this.validate(t[i], n.properties[i])
              )
                return !1;
            return !0;
          }
          validateConst(t, n) {
            return !n.const || t === n.const;
          }
          validateEnum(t, n) {
            return !n.enum || n.enum.includes(t);
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      const pt = new e.InjectionToken("localStoragePrefix", {
          providedIn: "root",
          factory: () => "",
        }),
        un = "ngStorage",
        mn = new e.InjectionToken("localStorageIDBDBName", {
          providedIn: "root",
          factory: () => un,
        }),
        fn = new e.InjectionToken("localStorageIDBDBVersion", {
          providedIn: "root",
          factory: () => 1,
        }),
        hn = "localStorage",
        vn = new e.InjectionToken("localStorageIDBStoreName", {
          providedIn: "root",
          factory: () => hn,
        }),
        _n = new e.InjectionToken("localStorageIDBWrap", {
          providedIn: "root",
          factory: () => !0,
        }),
        xn = "indexedDB is not working";
      class Pn extends Error {
        constructor() {
          super(...arguments), (this.message = xn);
        }
      }
      class pa extends Error {
        constructor() {
          super(...arguments),
            (this.message =
              "The storage is currently localStorage,\nwhere data must be serialized, and the provided data can't be serialized.");
        }
      }
      let dt = (() => {
          class o {
            constructor(t = un, n = hn, i = 1, r = !0) {
              (this.database = new pn.t(1)),
                (this.wrapIndex = "value"),
                (this.dbName = t),
                (this.storeName = n),
                (this.dbVersion = i),
                (this.noWrap = r),
                this.connect();
            }
            get backingStore() {
              return {
                database: this.dbName,
                store: this.storeName,
                version: this.dbVersion,
              };
            }
            get size() {
              return this.transaction("readonly").pipe(
                (0, ne.z)((t) => {
                  const { store: n, events: i } = t,
                    r = n.count();
                  return i.pipe((0, h.U)(() => r.result));
                }),
                (0, de.P)()
              );
            }
            get(t) {
              return this.transaction("readonly").pipe(
                (0, ne.z)((n) => {
                  const { store: i, events: r } = n,
                    s = i.get(t);
                  return r.pipe(
                    (0, h.U)(() => {
                      if (null != s.result)
                        return !this.noWrap &&
                          "object" == typeof s.result &&
                          this.wrapIndex in s.result &&
                          null != s.result[this.wrapIndex]
                          ? s.result[this.wrapIndex]
                          : s.result;
                    })
                  );
                }),
                (0, de.P)()
              );
            }
            set(t, n) {
              return void 0 === n
                ? this.delete(t)
                : this.transaction("readwrite").pipe(
                    (0, ne.z)((i) => {
                      const { store: r, events: s } = i;
                      return (
                        r.put(this.noWrap ? n : { [this.wrapIndex]: n }, t),
                        s.pipe((0, ct.h)(void 0))
                      );
                    }),
                    (0, de.P)()
                  );
            }
            delete(t) {
              return this.transaction("readwrite").pipe(
                (0, ne.z)((n) => {
                  const { store: i, events: r } = n;
                  return i.delete(t), r.pipe((0, ct.h)(void 0));
                }),
                (0, de.P)()
              );
            }
            clear() {
              return this.transaction("readwrite").pipe(
                (0, ne.z)((t) => {
                  const { store: n, events: i } = t;
                  return n.clear(), i.pipe((0, ct.h)(void 0));
                }),
                (0, de.P)()
              );
            }
            keys() {
              return this.transaction("readonly").pipe(
                (0, de.P)(),
                (0, ne.z)((t) => {
                  const { store: n } = t,
                    i = n.openKeyCursor(),
                    r = (0, Ce.R)(i, "success").pipe(
                      (0, sa.o)(() => null !== i.result),
                      (0, h.U)(() => i.result.key.toString()),
                      (0, P.b)(() => {
                        i.result.continue();
                      })
                    ),
                    s = this.listenError(i);
                  return (0, lt.S)([r, s]);
                })
              );
            }
            has(t) {
              return this.transaction("readonly").pipe(
                (0, ne.z)((n) => {
                  const { store: i, events: r } = n,
                    s = i.getKey(t);
                  return r.pipe((0, h.U)(() => void 0 !== s.result));
                }),
                (0, de.P)()
              );
            }
            connect() {
              let t;
              try {
                t = indexedDB.open(this.dbName, this.dbVersion);
              } catch (r) {
                return void this.database.error(new Pn());
              }
              this.createStore(t);
              const n = (0, Ce.R)(t, "success"),
                i = this.listenError(t);
              (0, lt.S)([n, i])
                .pipe((0, de.P)())
                .subscribe({
                  next: () => {
                    this.database.next(t.result);
                  },
                  error: () => {
                    this.database.error(new Pn());
                  },
                });
            }
            createStore(t) {
              (0, Ce.R)(t, "upgradeneeded")
                .pipe((0, de.P)())
                .subscribe({
                  next: () => {
                    t.result.objectStoreNames.contains(this.storeName) ||
                      t.result.createObjectStore(this.storeName);
                  },
                });
            }
            transaction(t) {
              return this.database.pipe(
                (0, ne.z)((n) => {
                  let i;
                  try {
                    i = n.transaction([this.storeName], t);
                  } catch (l) {
                    return (0, pe._)(l);
                  }
                  const r = i.objectStore(this.storeName),
                    s = this.listenTransactionEvents(i);
                  return (0, x.of)({ store: r, events: s });
                })
              );
            }
            listenError(t) {
              return (0, Ce.R)(t, "error").pipe(
                (0, ne.z)((n) => (0, pe._)(n.target.error))
              );
            }
            listenTransactionEvents(t) {
              const n = (0, Ce.R)(t, "complete"),
                i = this.listenError(t);
              return (0, lt.S)([n, i]);
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(
                e.ɵɵinject(mn),
                e.ɵɵinject(vn),
                e.ɵɵinject(fn),
                e.ɵɵinject(_n)
              );
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: o.ɵfac,
              providedIn: "root",
            })),
            o
          );
        })(),
        je = (() => {
          class o {
            constructor(t = "") {
              this.prefix = t || "";
            }
            get size() {
              return (0, x.of)(localStorage.length);
            }
            get(t) {
              const n = localStorage.getItem(this.prefixKey(t));
              let i;
              if (null != n)
                try {
                  i = JSON.parse(n);
                } catch (r) {
                  return (0, pe._)(r);
                }
              return (0, x.of)(i);
            }
            set(t, n) {
              let i = null;
              const r = Object.getPrototypeOf(n);
              if (
                "object" == typeof n &&
                null !== n &&
                !Array.isArray(n) &&
                r !== Object.prototype &&
                null !== r
              )
                return (0, pe._)(new pa());
              try {
                i = JSON.stringify(n);
              } catch (s) {
                return (0, pe._)(s);
              }
              try {
                localStorage.setItem(this.prefixKey(t), i);
              } catch (s) {
                return (0, pe._)(s);
              }
              return (0, x.of)(void 0);
            }
            delete(t) {
              return (
                localStorage.removeItem(this.prefixKey(t)), (0, x.of)(void 0)
              );
            }
            clear() {
              return localStorage.clear(), (0, x.of)(void 0);
            }
            keys() {
              return new ia.y((t) => {
                for (let n = 0; n < localStorage.length; n += 1)
                  t.next(this.getUnprefixedKey(n));
                t.complete();
              }).pipe((0, la.Q)(ra.z));
            }
            has(t) {
              for (let n = 0; n < localStorage.length; n += 1)
                if (t === this.getUnprefixedKey(n)) return (0, x.of)(!0);
              return (0, x.of)(!1);
            }
            getUnprefixedKey(t) {
              const n = localStorage.key(t);
              return null !== n
                ? this.prefix
                  ? n.substr(this.prefix.length)
                  : n
                : null;
            }
            prefixKey(t) {
              return `${this.prefix}${t}`;
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(e.ɵɵinject(pt));
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: o.ɵfac,
              providedIn: "root",
            })),
            o
          );
        })(),
        Ue = (() => {
          class o {
            constructor() {
              this.memoryStorage = new Map();
            }
            get size() {
              return (0, x.of)(this.memoryStorage.size);
            }
            get(t) {
              return (0, x.of)(this.memoryStorage.get(t));
            }
            set(t, n) {
              return this.memoryStorage.set(t, n), (0, x.of)(void 0);
            }
            delete(t) {
              return this.memoryStorage.delete(t), (0, x.of)(void 0);
            }
            clear() {
              return this.memoryStorage.clear(), (0, x.of)(void 0);
            }
            keys() {
              return (0, aa.D)(this.memoryStorage.keys());
            }
            has(t) {
              return (0, x.of)(this.memoryStorage.has(t));
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: o.ɵfac,
              providedIn: "root",
            })),
            o
          );
        })(),
        ua = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵprov = e.ɵɵdefineInjectable({
              token: o,
              factory: function (t) {
                let n = null;
                return (
                  (n = t
                    ? new t()
                    : (function da(o, a, t, n, i, r) {
                        try {
                          if (
                            (0, y.NF)(o) &&
                            void 0 !== indexedDB &&
                            null !== indexedDB &&
                            "open" in indexedDB
                          )
                            return new dt(t, n, i, r);
                          if (
                            (0, y.NF)(o) &&
                            void 0 !== localStorage &&
                            null !== localStorage &&
                            "getItem" in localStorage
                          )
                            return new je(a);
                        } catch (s) {}
                        return new Ue();
                      })(
                        e.ɵɵinject(e.PLATFORM_ID),
                        e.ɵɵinject(pt),
                        e.ɵɵinject(mn),
                        e.ɵɵinject(vn),
                        e.ɵɵinject(fn),
                        e.ɵɵinject(_n)
                      )),
                  n
                );
              },
              providedIn: "root",
            })),
            o
          );
        })();
      class Cn extends Error {
        constructor() {
          super(...arguments),
            (this.message =
              "Data stored is not valid against the provided JSON schema.\nCheck your JSON schema, otherwise it means data has been corrupted.");
        }
      }
      let ga = (() => {
        class o {
          constructor(t, n = new dn(), i = "") {
            (this.database = t),
              (this.jsonValidator = n),
              (this.LSPrefix = i),
              (this.notifiers = new Map());
          }
          get size() {
            return this.database.size.pipe(
              this.catchIDBBroken(() => this.database.size)
            );
          }
          get backingEngine() {
            return this.database instanceof dt
              ? "indexedDB"
              : this.database instanceof je
              ? "localStorage"
              : this.database instanceof Ue
              ? "memory"
              : "unknown";
          }
          get backingStore() {
            return this.database instanceof dt
              ? this.database.backingStore
              : { database: "", store: "", version: 0 };
          }
          get fallbackBackingStore() {
            return this.database instanceof je
              ? { prefix: this.database.prefix }
              : { prefix: "" };
          }
          get(t, n) {
            return this.database.get(t).pipe(
              this.catchIDBBroken(() => this.database.get(t)),
              (0, ne.z)((i) =>
                null == i
                  ? (0, x.of)(void 0)
                  : n
                  ? this.jsonValidator.validate(i, n)
                    ? (0, x.of)(i)
                    : (0, pe._)(new Cn())
                  : (0, x.of)(i)
              )
            );
          }
          set(t, n, i) {
            return null == n
              ? this.delete(t)
              : i && !this.jsonValidator.validate(n, i)
              ? (0, pe._)(new Cn())
              : this.database.set(t, n).pipe(
                  this.catchIDBBroken(() => this.database.set(t, n)),
                  (0, P.b)(() => {
                    this.notify(t, n);
                  })
                );
          }
          delete(t) {
            return this.database.delete(t).pipe(
              this.catchIDBBroken(() => this.database.delete(t)),
              (0, P.b)(() => {
                this.notify(t, void 0);
              })
            );
          }
          clear() {
            return this.database.clear().pipe(
              this.catchIDBBroken(() => this.database.clear()),
              (0, P.b)(() => {
                for (const t of this.notifiers.keys()) this.notify(t, void 0);
              })
            );
          }
          keys() {
            return this.database
              .keys()
              .pipe(this.catchIDBBroken(() => this.database.keys()));
          }
          has(t) {
            return this.database
              .has(t)
              .pipe(this.catchIDBBroken(() => this.database.has(t)));
          }
          watch(t, n) {
            this.notifiers.has(t) || this.notifiers.set(t, new pn.t(1));
            const i = this.notifiers.get(t);
            return (
              (n ? this.get(t, n) : this.get(t)).subscribe({
                next: (r) => i.next(r),
                error: (r) => i.error(r),
              }),
              i.asObservable()
            );
          }
          notify(t, n) {
            const i = this.notifiers.get(t);
            i && i.next(n);
          }
          catchIDBBroken(t) {
            return (0, W.K)((n) => {
              if (
                null != n &&
                "object" == typeof n &&
                "message" in n &&
                n.message === xn
              ) {
                try {
                  this.database =
                    "getItem" in localStorage
                      ? new je(this.LSPrefix)
                      : new Ue();
                } catch (i) {
                  this.database = new Ue();
                }
                return t();
              }
              return (0, pe._)(n);
            });
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(e.ɵɵinject(ua), e.ɵɵinject(dn), e.ɵɵinject(pt));
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      var fa = c(83140);
      let ha = (() => {
        class o {
          constructor(t, n, i, r, s, l, d, p, u) {
            (this.uiPoolsStore = t),
              (this.uiPoolsQuery = n),
              (this.liquidityPoolService = i),
              (this.liquidityProtocolApiService = r),
              (this.walletConnectionQuery = s),
              (this.activeConnectionQuery = l),
              (this.pricesQuery = d),
              (this.storage = p),
              (this.farmingPoolsService = u),
              (this.userLiquidityByPoolUsd$ = (0, _.a)([
                this.activeConnectionQuery.isRestrainedNetwork$,
                this.walletConnectionQuery.connectedWalletAddress$,
              ]).pipe(
                (0, O.w)(([f, v]) =>
                  !v || f
                    ? (0, x.of)({ balancesMap: {}, usdBalancesMap: {} })
                    : (0, _.a)([
                        this.uiPoolsQuery
                          .selectUniquePoolsIds()
                          .pipe((0, F.h)((C) => !!C.length)),
                        this.pricesQuery.price2usd$,
                      ]).pipe(
                        (0, O.w)((C) => {
                          const [L, k] = C;
                          return this.liquidityPoolService
                            .getLPBalanceByAllPools$(v, L)
                            .pipe(
                              (0, h.U)((Q) => {
                                const q = this.uiPoolsQuery.getAll(),
                                  oe = new Map(q.map((I) => [I.address, I])),
                                  ie =
                                    this.liquidityPoolService.getLpUsdBalances(
                                      oe,
                                      k,
                                      Q
                                    ),
                                  re = {},
                                  H = {};
                                for (const I in ie)
                                  (H[I] = ie[I]), (re[I] = Q[I].toString());
                                return { balancesMap: re, usdBalancesMap: H };
                              })
                            );
                        })
                      )
                )
              )),
              (this.isWatching = !1);
          }
          watch() {
            this.isWatching ||
              (this.initPoolsFromStorage()
                .pipe((0, O.w)(() => this.poolsPoling$()))
                .subscribe({ error: (t) => (0, M.eK)(t, "lc0030") }),
              (0, _.a)([
                this.activeConnectionQuery.isRestrainedNetwork$,
                this.userLiquidityByPoolUsd$,
              ])
                .pipe(
                  (0, F.h)(([t]) => !t),
                  (0, h.U)(([t, { usdBalancesMap: n, balancesMap: i }]) =>
                    this.uiPoolsQuery.getAll().map((s) => {
                      const l = i[s.address];
                      return {
                        address: s.address,
                        myLiquidityRaw: +l,
                        myLiquidity: n[s.address] || 0,
                        myLiquidityPoolToken: l || "0",
                      };
                    })
                  ),
                  (0, P.b)((t) => {
                    this.uiPoolsStore.upsertMany(t);
                  })
                )
                .subscribe({ error: (t) => (0, M.eK)(t, "lc0035") }),
              (this.isWatching = !0));
          }
          poolsPoling$() {
            return (0, _.a)([
              this.pricesQuery.price2usd$,
              this.activeConnectionQuery.currentChainId$,
            ]).pipe(
              (0, F.h)(([t, n]) =>
                [Le.$L.etherumMainnet, Le.$L.binanceMainnet].includes(n)
              ),
              (0, h.U)(([t]) => t),
              (0, G.BX)(),
              (0, O.w)((t) =>
                (0, _.a)([
                  this.liquidityProtocolApiService.getPairs$(),
                  this.farmingPoolsService.getFarmingPoolsAddressesSet(),
                ]).pipe(
                  (0, O.w)(([n, i]) => {
                    const r = (function na(o) {
                        return o.reduce((a, t) => ((a[t.pair] = t), a), {});
                      })(n),
                      s = this.findOutdatedPoolsInStore(r);
                    this.uiPoolsStore.remove(s);
                    const l = n.map((d) => this.processGraphResponse(d, t, i));
                    return (
                      this.uiPoolsStore.upsertMany(l),
                      this.savePoolsToStorage(l)
                    );
                  }),
                  (0, W.K)(
                    (n) => (
                      fa.error("Error on pools request", n), (0, x.of)([])
                    )
                  ),
                  (0, Re.a)((n) => n.pipe((0, Ne.g)(Ke.N.refreshTime.pools)))
                )
              )
            );
          }
          processGraphResponse(t, n, i) {
            var r, s, l;
            const d = this.uiPoolsQuery.getPoolTokens(t);
            let p = +(0, g.sk)(null == t ? void 0 : t.reserveUSD, 2);
            if (t && "0" === t.reserveUSD) {
              const f =
                  null === (r = n[d[0].address]) || void 0 === r
                    ? void 0
                    : r.usdPrice,
                v =
                  null === (s = n[d[1].address]) || void 0 === s
                    ? void 0
                    : s.usdPrice;
              f && v && (p = +t.reserve0 * f + +t.reserve1 * v);
            }
            const u =
              null === (l = null == t ? void 0 : t.fee) || void 0 === l
                ? void 0
                : l.toString();
            return Object.assign(Object.assign({}, t), {
              tokens: d,
              address: t.pair,
              volume: +(0, g.sk)(null == t ? void 0 : t.volumeUSD24h, 2),
              swapFee: u ? +(0, g.sk)(u, 4) : NaN,
              liquidity: p,
              apy: t.apy,
              hasFarming: i.has(t.pair),
            });
          }
          findOutdatedPoolsInStore(t) {
            return this.uiPoolsQuery
              .getAll()
              .map((r) => r.address)
              .filter((r) => !t[r]);
          }
          initPoolsFromStorage() {
            return this.storage
              .get("pools")
              .pipe(
                (0, h.U)((t) => (t && this.uiPoolsStore.upsertMany(t), t || []))
              );
          }
          savePoolsToStorage(t) {
            return this.storage.set("pools", t);
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)(
              e.ɵɵinject(oa.a),
              e.ɵɵinject(be.z),
              e.ɵɵinject(Ze),
              e.ɵɵinject(nn),
              e.ɵɵinject(fe.r),
              e.ɵɵinject(he.r),
              e.ɵɵinject(Te.u),
              e.ɵɵinject(ga),
              e.ɵɵinject(We.R)
            );
          }),
          (o.ɵprov = e.ɵɵdefineInjectable({
            token: o,
            factory: o.ɵfac,
            providedIn: "root",
          })),
          o
        );
      })();
      var va = c(76006);
      let ya = (() => {
          class o {
            constructor(t, n) {
              (this.uiPoolsService = t),
                (this.farmingTransactionService = n),
                this.uiPoolsService.watch(),
                this.farmingTransactionService.startPipelines();
            }
          }
          return (
            (o.ɵfac = function (t) {
              return new (t || o)(
                e.ɵɵdirectiveInject(ha),
                e.ɵɵdirectiveInject(va.M)
              );
            }),
            (o.ɵcmp = e.ɵɵdefineComponent({
              type: o,
              selectors: [["pools-root"]],
              decls: 1,
              vars: 0,
              template: function (t, n) {
                1 & t && e.ɵɵelement(0, "router-outlet");
              },
              dependencies: [K.lC],
              styles: [
                "[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:1180px;margin:0 auto}",
              ],
              changeDetection: 0,
            })),
            o
          );
        })(),
        _a = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = e.ɵɵdefineNgModule({ type: o })),
            (o.ɵinj = e.ɵɵdefineInjector({
              imports: [
                y.ez,
                ue.XC,
                Oe.Hi,
                z.ReactiveFormsModule,
                j.y4,
                _t.h,
                kt.M,
              ],
            })),
            o
          );
        })();
      const xa = [
        {
          path: "",
          canActivateChild: [Dn.G],
          component: ya,
          children: [
            { path: "", component: ta },
            { path: ":poolAddress/governance", component: Kn },
            { path: ":poolAddress/vote/:votingFor", component: Gn.V },
          ],
        },
      ];
      let Pa = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.ɵɵdefineNgModule({ type: o })),
          (o.ɵinj = e.ɵɵdefineInjector({
            providers: [at, Ve, te],
            imports: [
              y.ez,
              En.r,
              Mn.A,
              j.y4,
              $n.v,
              _t.h,
              vt.TU,
              K.Bz,
              qe.JX,
              _a,
              On.H,
              Ln.n,
              K.Bz.forChild(xa),
              N.Is,
              Be,
              ue.XC,
              kt.M,
              Ee.ot,
              De.Nh,
              yt.vQ,
              Bn.S,
              An.z,
              Wn._,
              Hn.l,
            ],
          })),
          o
        );
      })();
    },
  },
]);
