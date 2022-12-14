"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [1918],
  {
    43676: (Pt, nt, n) => {
      n.d(nt, { Cw: () => O, Ej: () => _ });
      var o = n(32388),
        c = n(85514),
        I = n(18704);
      const O = 3,
        b = {
          0: "Jan",
          1: "Feb",
          2: "Mar",
          3: "Apr",
          4: "May",
          5: "Jun",
          6: "Jul",
          7: "Aug",
          8: "Sep",
          9: "Oct",
          10: "Nov",
          11: "Dec",
        };
      function f(y) {
        return {
          color: { [c.eE.light]: "#486CBE", [c.eE.dark]: "#86B6FF" }[y],
          font: {
            family: "",
            style: "normal",
            weight: null,
            lineHeight: 10,
            size: 10,
          },
        };
      }
      function E(y, P, S) {
        return P || 0 === S.index
          ? I.n.positive.mainColor
          : y[S.index - 1].value > S.raw
          ? I.n.negative.mainColor
          : I.n.positive.mainColor;
      }
      function _(y, P, S) {
        const T = (function k(y, P) {
            return Object.assign(
              { data: y.map((S) => S.value) },
              (function z(y, P) {
                return {
                  borderColor: (S) => E(y, P, S),
                  borderWidth: 2,
                  backgroundColor: (S) => {
                    const T = S.chart.ctx.createLinearGradient(
                      0,
                      0,
                      0,
                      S.chart.height
                    );
                    T.addColorStop(0, I.n.positive.gradientStart),
                      T.addColorStop(0.5, I.n.positive.gradientMiddle),
                      T.addColorStop(1, I.n.positive.gradientEnd);
                    const $ = E(y, P, S);
                    return P ? T : $;
                  },
                  hoverBorderColor: (S) => E(y, P, S),
                  hoverBackgroundColor: (S) => E(y, P, S),
                  pointRadius: 0,
                  pointHoverBackgroundColor: I.n.positive.mainColor,
                  pointHoverBorderColor: I.n.positive.mainColor,
                  fill: !0,
                };
              })(y, P)
            );
          })(y, P),
          $ = [(0, o.S)({ drawHorizontal: !0 })];
        return {
          type: P ? "line" : "bar",
          options: Q(y, P, S),
          plugins: $,
          chartData: {
            labels: y.map((B) => {
              const L = new Date(1e3 * B.time);
              return b[L.getMonth()] + " " + L.getDate();
            }),
            datasets: [T],
          },
        };
      }
      function Q(y, P, S) {
        return {
          animation: { duration: 300 },
          maintainAspectRatio: !1,
          interaction: { intersect: !1, mode: "index" },
          scales: {
            x: {
              ticks: Object.assign({ padding: -35 }, f(S)),
              grid: {
                borderColor: "rgba(58, 67, 94, 0.7)",
                tickColor: "rgba(58, 67, 94, 0.7)",
                drawOnChartArea: !1,
              },
            },
            y: {
              ticks: Object.assign({ autoSkip: !1 }, f(S)),
              grid: {
                borderColor: "rgba(58, 67, 94, 0.7)",
                tickColor: "rgba(58, 67, 94, 0.7)",
                drawOnChartArea: !1,
              },
            },
          },
          plugins: {
            legend: { display: !1 },
            annotation: { annotations: [w(y, P)] },
            tooltip: it(y, P, S),
          },
        };
      }
      function w(y, P) {
        const T =
          y[y.length - 1].value >= y[y.length - 2].value || P
            ? I.n.positive.mainColor
            : I.n.negative.mainColor;
        return {
          type: "line",
          borderColor: T,
          borderWidth: 1,
          borderDash: [5, 5],
          label: {
            font: {
              size: 12,
              lineHeight: 1,
              weight: "normal",
              style: "normal",
              family: "",
            },
            color: "#ffffff",
            backgroundColor: T,
            content: y[y.length - 1].value.toString(),
            enabled: !0,
            position: "start",
            borderRadius: 2,
            yPadding: 5,
            xPadding: 7,
            xAdjust: -24,
          },
          scaleID: "y",
          value: y[y.length - 1].value,
        };
      }
      function it(y, P, S) {
        return Object.assign(
          Object.assign(
            {
              mode: "index",
              usePointStyle: !0,
              bodySpacing: 2,
              titleMarginBottom: -12,
              displayColors: !P,
            },
            S === c.eE.dark
              ? null
              : {
                  backgroundColor: "#D5E5F9",
                  titleColor: "black",
                  bodyColor: "black",
                  footerColor: "black",
                }
          ),
          {
            callbacks: {
              title: () => " ",
              labelPointStyle: () => ({
                pointStyle: "rectRounded",
                rotation: 0,
              }),
              label: (T) => [T.label, T.formattedValue],
              labelColor: (T) => {
                let $;
                return (
                  ($ =
                    0 === T.dataIndex
                      ? I.n.positive.mainColor
                      : +y[T.dataIndex - 1].value > T.raw
                      ? I.n.negative.mainColor
                      : I.n.positive.mainColor),
                  {
                    borderColor: P ? I.n.positive.mainColor : $,
                    backgroundColor: P ? I.n.positive.mainColor : $,
                    borderWidth: 0,
                  }
                );
              },
            },
          }
        );
      }
    },
    19298: (Pt, nt, n) => {
      n.d(nt, { D: () => o });
      const o = ["#C241FF", "#FF9C08", "#F55F2F", "#23C68B", "#3181FA"];
    },
    52260: (Pt, nt, n) => {
      n.d(nt, { n: () => dt });
      var o = n(31777),
        c = n(92872),
        I = n(5131),
        O = n(77370),
        b = n(54510),
        f = n(16944),
        d = n(96791),
        E = n(74578),
        _ = n(5945),
        k = n(32594),
        z = n(65687),
        Q = n(26341),
        w = n(35950),
        it = n(4987),
        y = n(36037),
        P = n(74004),
        S = n(4461),
        T = n(62139),
        $ = n(32770),
        B = n(41852),
        L = n(58589),
        C = n(50864),
        m = n(74217),
        G = n(35804),
        D = n(52292),
        R = n(29152),
        Z = n(51109);
      let dt = (() => {
        class h {}
        return (
          (h.??fac = function (p) {
            return new (p || h)();
          }),
          (h.??mod = Z.????defineNgModule({ type: h })),
          (h.??inj = Z.????defineInjector({
            providers: [C.h, L.rU, m.P, D.h, G.L],
            imports: [
              z.m,
              b.Bz,
              Q.Q,
              c.ot,
              o.ReactiveFormsModule,
              I.c,
              O.TU,
              $.Z,
              w.S,
              P.l,
              E.WD,
              R.q,
              _.$$,
              f.z,
              k.iK,
              S.M,
              d.Z,
              it.M,
              y.n,
              B.a,
              T.G,
            ],
          })),
          h
        );
      })();
    },
    16236: (Pt, nt, n) => {
      n.d(nt, { V: () => O });
      var o = n(51109);
      let O = (() => {
        class b {
          constructor() {
            (this.value = 0), (this.additionalValue = 0);
          }
          convertToCircleStrokeParams(d) {
            return (d / 100) * 226 + ", 452";
          }
        }
        return (
          (b.??fac = function (d) {
            return new (d || b)();
          }),
          (b.??cmp = o.????defineComponent({
            type: b,
            selectors: [["app-radial-gauge"]],
            inputs: {
              value: "value",
              additionalValue: "additionalValue",
              color: "color",
            },
            decls: 7,
            vars: 4,
            consts: [
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "width",
                "160",
                "height",
                "80",
                "viewBox",
                "0 0 160 80",
                1,
                "token-circle",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke",
                "rgba(136, 163, 200, 0.2)",
                "stroke-width",
                "14",
                "stroke-dasharray",
                "3, 5",
                "transform",
                "rotate(180 80 80)",
              ],
              ["id", "myMask"],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke",
                "#fff",
                "stroke-width",
                "14",
                "stroke-dasharray",
                "3, 5",
                "transform",
                "rotate(182 80 80)",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke-width",
                "14",
                "stroke-dashoffset",
                "0",
                "opacity",
                "0.3",
                "transform",
                "rotate(180 80 80)",
                "mask",
                "url(#myMask)",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke-width",
                "14",
                "stroke-dashoffset",
                "0",
                "transform",
                "rotate(180 80 80)",
                "mask",
                "url(#myMask)",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "60",
                "fill",
                "none",
                "stroke-width",
                "1",
                "stroke-dashoffset",
                "0",
                "stroke",
                "rgba(136, 163, 200, 0.2)",
                "stroke-dasharray",
                "377",
                "transform",
                "rotate(180 80 80)",
              ],
            ],
            template: function (d, E) {
              1 & d &&
                (o.????namespaceSVG(),
                o.????elementStart(0, "svg", 0),
                o.????element(1, "circle", 1),
                o.????elementStart(2, "mask", 2),
                o.????element(3, "circle", 3),
                o.????elementEnd(),
                o.????element(4, "circle", 4)(5, "circle", 5)(6, "circle", 6),
                o.????elementEnd()),
                2 & d &&
                  (o.????advance(4),
                  o.????attribute(
                    "stroke-dasharray",
                    E.convertToCircleStrokeParams(E.additionalValue)
                  )("stroke", E.color),
                  o.????advance(1),
                  o.????attribute(
                    "stroke-dasharray",
                    E.convertToCircleStrokeParams(E.value)
                  )("stroke", E.color));
            },
            styles: ["[_nghost-%COMP%]{display:block}"],
          })),
          b
        );
      })();
    },
    58589: (Pt, nt, n) => {
      n.d(nt, { pH: () => S, rU: () => $ });
      var o = n(71426),
        c = n(67605),
        I = n(94748),
        O = n(3012),
        b = n(18128),
        f = n(64736),
        d = n(76327),
        E = n(69682),
        _ = n(18084),
        k = n(15674),
        z = n(17114),
        Q = n(73836),
        w = n(51109),
        it = n(78336),
        y = n(24124),
        P = n(83140),
        S = (() => {
          return (
            ((L = S || (S = {})).day = "day"),
            (L.now = "now"),
            (L.week = "week"),
            S
          );
          var L;
        })();
      const T = {
        pairsCount: "0",
        defaultDecayPeriod: { totalVoters: "0", totalVotes: "0" },
        defaultSlippageFee: { totalVoters: "0", totalVotes: "0" },
        defaultSwapFee: { totalVoters: "0", totalVotes: "0" },
        governanceShare: { totalVoters: "0", totalVotes: "0" },
        referralShare: { totalVoters: "0", totalVotes: "0" },
        leftoverReferralShare: { totalVoters: "0", totalVotes: "0" },
        totalStaked: "0",
        totalStakers: "0",
      };
      let $ = (() => {
        class L {
          constructor(m, G) {
            (this.http = m),
              (this.activeConnectionQuery = G),
              (this.refreshGovernanceDetails$ = new c.x()),
              (this.governanceDetails$ = this.refreshGovernanceDetails$.pipe(
                (0, b.p)(5e3),
                (0, f.U)(() => this.activeConnectionQuery.isRestrainedNetwork),
                (0, d.w)((D) => (D ? I.C : this.getParamsValues$())),
                (0, E.d)({ refCount: !1, bufferSize: 1 })
              ));
          }
          getGovernanceDetails() {
            return (
              this.refreshGovernanceDetails$.next(), this.governanceDetails$
            );
          }
          getPoolParamsValues$(m) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((G) =>
                  this.http.get(`${G}/params/values/` + m).pipe(
                    (0, _.V)(3e3),
                    (0, k.X)(2),
                    (0, f.U)(
                      (R) => (
                        (R.virtualSwapFee = B(R.virtualSwapFee)),
                        (R.virtualSlippageFee = B(R.virtualSlippageFee)),
                        (R.virtualDecayPeriod = B(R.virtualDecayPeriod)),
                        R
                      )
                    )
                  )
                )
              );
          }
          getParamsValues$() {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((m) =>
                  this.http.get(`${m}/params/values`).pipe(
                    (0, _.V)(3e3),
                    (0, k.X)(2),
                    (0, f.U)(
                      (D) => (
                        (D.virtualDefaultDecayPeriod = B(
                          D.virtualDefaultDecayPeriod
                        )),
                        (D.virtualDefaultFee = B(D.virtualDefaultFee)),
                        (D.virtualDefaultSlippageFee = B(
                          D.virtualDefaultSlippageFee
                        )),
                        D
                      )
                    )
                  )
                )
              );
          }
          getFactoryParamsStat$(m = S.now) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((G) =>
                  this.http.get(`${G}/factory/${m}`).pipe(
                    (0, _.V)(3e3),
                    (0, k.X)(2),
                    (0, z.K)(() => (0, O.of)(T))
                  )
                )
              );
          }
          getOldUsers$(m = S.now) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((G) =>
                  this.http
                    .get(`${G}/users/${m}`)
                    .pipe((0, _.V)(3e3), (0, k.X)(2))
                )
              );
          }
          getUsers$(m = S.now) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((G) =>
                  this.http
                    .get(`${G}/users/${m}`)
                    .pipe((0, _.V)(3e3), (0, k.X)(2))
                )
              );
          }
          getUser$(m) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((G) =>
                  this.http.get(`${G}/user/${m}`).pipe(
                    (0, _.V)(3e3),
                    (0, k.X)(2),
                    (0, z.K)(() =>
                      (0, O.of)({
                        id: m,
                        currentStake: "0",
                        votes: [],
                        defaultDecayPeriodHasVote: !1,
                        defaultSlippageFeeHasVote: !1,
                        defaultSwapFeeHasVote: !1,
                        governanceShareHasVote: !1,
                        referralShareHasVote: !1,
                        leftoverReferralShareHasVote: !1,
                        defaultDecayPeriodVoteAmount: "0",
                        defaultSlippageFeeVoteAmount: "0",
                        defaultSwapFeeVoteAmount: "0",
                        governanceShareVoteAmount: "0",
                        referralShareVoteAmount: "0",
                        leftoverReferralShareVoteAmount: "0",
                      })
                    )
                  )
                )
              );
          }
          getVotersByParam$(m, G, D = S.now) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)(
                  (R) => (
                    (R = R.includes("56") ? R : Q.N.governanceGraphApiEndpoint),
                    this.http.get(`${R}/voters/${m}/${G}/${D}`).pipe(
                      (0, k.X)(2),
                      (0, z.K)(
                        (dt) => (
                          P.error(
                            `votes by param request for ${m} is failed `,
                            dt
                          ),
                          (0, O.of)([])
                        )
                      )
                    )
                  )
                )
              );
          }
          getOldVotersByParam$(m, G, D = S.now) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)((R) =>
                  this.http.get(`${R}/voters/${m}/${G}/${D}`).pipe(
                    (0, _.V)(3e3),
                    (0, k.X)(2),
                    (0, z.K)(() => (0, O.of)([]))
                  )
                )
              );
          }
          getParamData$(m, G) {
            return this.activeConnectionQuery
              .getApiEndpointOnce("governanceGraphApiEndpoint")
              .pipe(
                (0, d.w)(
                  (D) => (
                    (D = D.includes("56") ? D : Q.N.governanceGraphApiEndpoint),
                    this.http.get(`${D}/param/${m}/${G}`).pipe(
                      (0, _.V)(3e3),
                      (0, k.X)(2),
                      (0, z.K)(() =>
                        (0, O.of)({ totalVoters: "0", totalVotes: "0" })
                      )
                    )
                  )
                )
              );
          }
        }
        return (
          (L.??fac = function (m) {
            return new (m || L)(w.????inject(it.eN), w.????inject(y.r));
          }),
          (L.??prov = w.????defineInjectable({
            token: L,
            factory: L.??fac,
            providedIn: "root",
          })),
          L
        );
      })();
      function B(L) {
        return {
          oldValue: o.O$.from(L.oldValue),
          newValue: o.O$.from(L.newValue),
          storeTimestamp: L.storeTimestamp,
        };
      }
    },
    50864: (Pt, nt, n) => {
      n.d(nt, { h: () => t });
      var o = n(55468),
        c = n(30137),
        I = n(93475),
        O = n(88647),
        b = n(82868),
        f = n(70299),
        d = n(90813),
        E = n(95605),
        _ = n(95021),
        k = n(64057),
        z = n(93617),
        Q = n(71426),
        w = n(79296),
        it = n(30606),
        y = n(53886),
        P = n(1753),
        S = n(3012),
        T = n(71909),
        $ = n(77724),
        B = n(68751),
        L = n(83358),
        C = n(76327),
        m = n(64736),
        G = n(17114),
        D = n(15674),
        R = n(48535),
        Z = n(67701),
        dt = n(58789),
        h = n(51109),
        tt = n(41977),
        p = n(52611),
        H = n(93130),
        ot = n(24124),
        pt = n(25245),
        ft = n(58913),
        ht = n(36477),
        M = n(58589),
        W = n(73013),
        i = n(41912),
        l = n(70912),
        F = n(33246),
        X = n(56747),
        Mt = n(20803),
        wt = n(1146),
        bt = n(83140);
      let t = (() => {
        class Ot {
          constructor(
            v,
            A,
            U,
            K,
            et,
            N,
            at,
            lt,
            Et,
            Bt,
            Rt,
            Kt,
            jt,
            mt,
            At,
            Gt
          ) {
            (this.governanceStore = v),
              (this.erc20Helper = A),
              (this.walletConnectionQuery = U),
              (this.activeConnectionQuery = K),
              (this.multiCallService = et),
              (this.transactionHistoryQuery = N),
              (this.tokenBalanceQuery = at),
              (this.governanceApiService = lt),
              (this.ethContractService = Et),
              (this.contractAddressService = Bt),
              (this.governanceGeneralService = Rt),
              (this.simpleSendTransactionService = Kt),
              (this.approveTransactionService = jt),
              (this.acceptTermsService = mt),
              (this.tokenPricesQuery = At),
              (this.createPendingTxService = Gt),
              (this.subscription = new w.w0());
          }
          stopPipelines() {
            this.subscription.unsubscribe();
          }
          startPipelines() {
            this.subscription.unsubscribe(),
              (this.subscription = new w.w0()),
              this.tokenBalanceQuery
                .getBalance$(E.UU)
                .pipe(
                  (0, $.b)((N) => {
                    const at = N.toString();
                    this.governanceStore.update({ balanceWei: at });
                  })
                )
                .subscribe({ error: (N) => (0, b.eK)(N, "lc0032") });
            const A = this.transactionHistoryQuery.newTransactionMined$,
              U = (0, it.H)(0, 15e3),
              K = (0, y.a)([
                this.walletConnectionQuery.isWalletConnected$,
                this.activeConnectionQuery.isRestrainedNetwork$,
              ]).pipe(
                (0, B.h)(([N, at]) => N && !at),
                (0, L.q)(1),
                (0, C.w)(() => (0, P.T)(U, A)),
                (0, B.h)(() => !this.activeConnectionQuery.isRestrainedNetwork),
                (0, C.w)(() => this.getApprovedAmount("latest")),
                (0, $.b)((N) => {
                  this.governanceStore.update({ allowanceWei: N.toString() });
                })
              ),
              et = (0, y.a)([
                this.activeConnectionQuery.isRestrainedNetwork$,
                this.walletConnectionQuery.connectedWalletAddress$,
              ]).pipe(
                (0, B.h)(([N]) => !N),
                (0, C.w)(() =>
                  this.contractAddressService.getContractsAddressesOnce(
                    o.a4.exchangeGovernance,
                    o.a4.mooniswapFactoryV_1_1
                  )
                ),
                (0, C.w)(([N, at]) =>
                  (0, P.T)(A, U).pipe(
                    (0, C.w)(() =>
                      this.contractAddressService.getContractAddressOnce(
                        o.a4.mooniswapFactoryV_1_1
                      )
                    ),
                    (0, C.w)((lt) => {
                      const Et = this.walletConnectionQuery.walletAddress;
                      return (0, y.a)([
                        Et
                          ? this.getExchangeGovernanceBalance$([N, at], Et)
                          : (0, S.of)(null),
                        this.governanceApiService.getGovernanceDetails(),
                        Et
                          ? this.getStakedAmount$(lt, Et, !1)
                          : (0, S.of)(null),
                      ]);
                    }),
                    (0, $.b)(([lt, Et, Bt]) => {
                      const Rt = Object.assign(
                        Object.assign(
                          {
                            exchangeDetails: {
                              teamShare: Et.leftoverTeamShare,
                              governanceShare: Et.leftoverGovernanceShare,
                              referrerShare: Et.leftoverReferralShare,
                            },
                          },
                          lt
                            ? { exchangeBalance: lt[N], factoryBalance: lt[at] }
                            : null
                        ),
                        Bt ? { userStakedWei: Bt.toString() } : null
                      );
                      this.updateData(Rt);
                    })
                  )
                )
              );
            (0, d.O)(et, "governanceExchangePipeline$", this.subscription),
              (0, d.O)(K, "allowancePipeline$", this.subscription);
          }
          setUserStaked(v) {
            this.governanceStore.update({ userStakedWei: v });
          }
          updateData(v) {
            this.governanceStore.update(v);
          }
          getOneInchTokenBalance() {
            return this.erc20Helper.getErc20Balance(
              E.sx,
              this.walletConnectionQuery.walletAddress
            );
          }
          getApprovedAmount(v) {
            return this.contractAddressService
              .getContractsAddressesOnce(
                o.a4.oneInchToken,
                o.a4.governanceMothership
              )
              .pipe(
                (0, C.w)(([A, U]) =>
                  this.erc20Helper.getApprovedAmount(A, U, v)
                )
              );
          }
          approveToGovernanceContract(v) {
            const A = this.contractAddressService.getContractAddress(
                o.a4.governanceMothership
              ),
              U = this.acceptTermsService.checkTermsAccepting().pipe(
                (0, C.w)(() =>
                  this.approveTransactionService.contractApproveTransaction({
                    txType: "authorize",
                    meta: { approvedForAddress: A, asset: E.UU },
                    txSubType: Z.E.approveGovernance,
                    contractAddress: E.UU.address,
                    spenderAddress: A,
                    amount: v,
                  })
                )
              );
            (0, d.O)(U, "approveToGovernanceContract$");
          }
          voteForFactoryParam(v, A, U, K) {
            this.voteForFactoryParam$(v, A, U, K);
          }
          discardVoteForFactoryParam(v, A, U) {
            const K = this.discardVoteForFactoryParam$(v, A, U);
            (0, d.O)(K, "discardVoteForFactoryParam$");
          }
          stake(v, A) {
            const U = this.createStakeGAEvent(A),
              K = this.acceptTermsService
                .checkTermsAccepting()
                .pipe(
                  (0, C.w)(() =>
                    this.callGovernanceContract$(
                      "stake",
                      [v],
                      "stake",
                      Z.E.stakeGovernance,
                      v,
                      { asset: E.UU },
                      U
                    )
                  )
                );
            (0, d.O)(K, "stake$");
          }
          notify() {
            const v = this.callGovernanceContract$(
              "notify",
              [],
              "vote",
              Z.E.notifyGovernance,
              I.Y,
              { votingParam: z.y.governanceShare }
            );
            (0, d.O)(v, "notify$");
          }
          unStake(v, A) {
            const U = this.createUnstakeGAEvent(A),
              K = this.callGovernanceContract$(
                "unstake",
                [v],
                "unstake",
                Z.E.unstakeGovernance,
                v,
                { asset: E.UU },
                U
              );
            (0, d.O)(K, "unStake$");
          }
          leftoverShareVote(v) {
            const A = this.contractAddressService.getContractAddress(
                o.a4.exchangeGovernance
              ),
              U = this.leftoverShareVote$(A, v);
            (0, d.O)(U, "leftoverShareVote$");
          }
          discardLeftoverShareVote() {
            const v = this.contractAddressService.getContractAddress(
                o.a4.exchangeGovernance
              ),
              A = this.discardLeftoverShareVote$(v);
            (0, d.O)(A, "discardLeftoverShareVote$");
          }
          getStakedAmount$(v, A, U) {
            return this.governanceGeneralService.getStakedAmount$(v, A, U);
          }
          getUserVoteFor$(v, A, U, K) {
            return this.getContractInstance$(v, K).pipe(
              (0, C.w)((N) => {
                const at = (0, dt.HS)(A);
                return (0, _.p4)(
                  this.ethContractService.callCustomContract(N, at, [U])
                );
              }),
              (0, m.U)((N) => Q.O$.from(N)),
              (0, G.K)((N) => (bt.error("getUserVoteFor$:", N), (0, S.of)(I.Y)))
            );
          }
          getParamValuesCallData(v, A) {
            return this.getContractInstanceNoNetwork(v).pipe(
              (0, C.w)((U) =>
                this.ethContractService.getContractEncodeABI(
                  U,
                  null,
                  (0, dt.pF)(A)
                )
              ),
              (0, m.U)((U) => ({ to: v, data: U }))
            );
          }
          getParamValue$(v, A, U) {
            return this.getContractInstanceView$(v, U).pipe(
              (0, C.w)((et) => {
                const N = (0, dt.pF)(A);
                return (0, _.p4)(
                  this.ethContractService.callCustomContract(et, N)
                );
              }),
              (0, G.K)((et) => (bt.log(et), (0, S.of)(I.Y)))
            );
          }
          getExchangeGovernanceBalance$(v, A) {
            const U = Promise.all(
              v.map((K) =>
                this.ethContractService
                  .getContractEncodeABI(
                    R._4.ExchangeGovernance,
                    K,
                    "balanceOf",
                    [A]
                  )
                  .then((et) => ({ to: K, data: et }))
              )
            );
            return (0, y.a)([
              this.activeConnectionQuery.isRestrainedNetwork$,
              (0, _.p4)(U),
            ]).pipe(
              (0, B.h)(([K]) => !K),
              (0, C.w)(([K, et]) => this.multiCallService.call$(et)),
              (0, D.X)(2),
              (0, m.U)((K) => {
                K.length !== v.length &&
                  (0, T._)(() => "not enough balances for such pools");
                const et = {};
                return (
                  K.map((N, at) => {
                    et[v[at]] =
                      "0x" !== N
                        ? (0, c.XU)("uint256", N).toString()
                        : I.Y.toString();
                  }),
                  et
                );
              }),
              (0, G.K)(() => (0, S.of)({})),
              (0, L.q)(1)
            );
          }
          leftoverShareVote$(v, A) {
            return (0, _.p4)(
              this.ethContractService.getContractEncodeABI(
                R._4.ExchangeGovernance,
                v,
                "leftoverShareVote",
                [A]
              )
            ).pipe(
              (0, C.w)((U) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: v, data: U },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "vote",
                    subType: Z.E.leftoverVoteGovernance,
                    meta: { votingParam: z.y.leftoverGovernanceShare },
                    amount: "0",
                  })
                )
              )
            );
          }
          discardLeftoverShareVote$(v) {
            return (0, _.p4)(
              this.ethContractService.getContractEncodeABI(
                R._4.ExchangeGovernance,
                v,
                "discardLeftoverShareVote"
              )
            ).pipe(
              (0, C.w)((A) =>
                this.simpleSendTransactionService.sendTransaction(
                  { to: v, data: A },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "discard-vote",
                    subType: Z.E.discardLeftoverVoteGovernance,
                    meta: { votingParam: z.y.leftoverGovernanceShare },
                    amount: "0",
                  })
                )
              )
            );
          }
          voteForFactoryParam$(v, A, U, K) {
            const et = this.getContractInstance$(v, K).pipe(
              (0, L.q)(1),
              (0, C.w)((N) => {
                const at = (0, dt.mq)(A),
                  lt = this.ethContractService.getCustomContractEncodeABI(
                    N,
                    at,
                    [U]
                  );
                return this.simpleSendTransactionService.sendTransaction(
                  { to: v, data: lt },
                  this.createPendingTxService.getPendingTxFactory({
                    amount: U.toString(),
                    type: "vote",
                    subType: Z.E.voteGovernance,
                    meta: { votingParam: A },
                  })
                );
              })
            );
            (0, d.O)(et, "voteForFactoryParam$");
          }
          discardVoteForFactoryParam$(v, A, U) {
            return this.getContractInstance$(v, U).pipe(
              (0, L.q)(1),
              (0, C.w)((K) => {
                const et = (0, dt.Wg)(A),
                  N = this.ethContractService.getCustomContractEncodeABI(K, et);
                return this.simpleSendTransactionService.sendTransaction(
                  { to: v, data: N },
                  this.createPendingTxService.getPendingTxFactory({
                    type: "discard-vote",
                    subType: Z.E.discardVoteGovernance,
                    meta: { votingParam: A },
                    amount: "0",
                  })
                );
              })
            );
          }
          callGovernanceContract$(v, A, U, K, et, N, at) {
            return this.contractAddressService
              .getContractAddressOnce(o.a4.governanceMothership)
              .pipe(
                (0, C.w)((lt) =>
                  (0, y.a)([
                    (0, S.of)(lt),
                    this.ethContractService.getContractEncodeABI(
                      R._4.GovernanceMothership,
                      lt,
                      v,
                      A
                    ),
                  ])
                ),
                (0, C.w)(([lt, Et]) =>
                  this.simpleSendTransactionService.sendTransaction(
                    { to: lt, data: Et },
                    this.createPendingTxService.getPendingTxFactory({
                      type: U,
                      subType: K,
                      amount: et.toString(),
                      meta: N,
                    }),
                    O.qP,
                    at
                  )
                )
              );
          }
          getContractInstance$(v, A, U = !1) {
            return (0, y.a)([
              this.activeConnectionQuery.isRestrainedNetwork$,
              this.governanceGeneralService.getContractInstance$(v, A, U),
            ]).pipe(
              (0, B.h)(([K]) => !K),
              (0, m.U)(([K, et]) => et)
            );
          }
          getContractInstanceView$(v, A, U = !1) {
            return A
              ? (0, _.p4)(
                  this.ethContractService.getViewContract(
                    R._4.FarmingRewardsABI,
                    v
                  )
                )
              : this.contractAddressService
                  .getContractsAddressesOnce(
                    o.a4.mooniswapFactoryV_1_1,
                    o.a4.governanceMothership,
                    o.a4.exchangeGovernance
                  )
                  .pipe(
                    (0, C.w)((K) => {
                      const [et, N, at] = K,
                        lt = v.toLowerCase();
                      return lt === et
                        ? U
                          ? this.ethContractService.getViewContract(
                              R._4.GovernanceMothership,
                              N
                            )
                          : this.contractAddressService
                              .getContractAddressOnce(
                                o.a4.mooniswapFactoryV_1_1
                              )
                              .pipe(
                                (0, C.w)((Et) =>
                                  this.ethContractService.getViewContract(
                                    R._4.GovernanceMooniswapFactory,
                                    Et
                                  )
                                ),
                                (0, L.q)(1)
                              )
                        : lt === at
                        ? this.ethContractService.getViewContract(
                            R._4.ExchangeGovernance,
                            at
                          )
                        : this.ethContractService.getViewContract(
                            R._4.GovernanceMooniswap,
                            v
                          );
                    })
                  );
          }
          getContractInstanceNoNetwork(v) {
            return this.contractAddressService
              .getContractsAddressesOnce(
                o.a4.mooniswapFactoryV_1_1,
                o.a4.exchangeGovernance
              )
              .pipe(
                (0, m.U)(([A, U]) => {
                  const K = v.toLowerCase();
                  return K === A
                    ? R._4.GovernanceMooniswapFactory
                    : K === U
                    ? R._4.ExchangeGovernance
                    : R._4.GovernanceMooniswap;
                })
              );
          }
          createStakeGAEvent(v) {
            try {
              const { staking: A, alreadyStaked: U } = v,
                K = (0, c.kg)(`${A}`, E.UU.decimals),
                et = (0, c.kg)(`${U}`, E.UU.decimals),
                N = this.tokenPricesQuery.getTokenAmountUsdPrice(
                  E.UU.address,
                  et
                ),
                at = this.tokenPricesQuery.getTokenAmountUsdPrice(
                  E.UU.address,
                  K
                );
              return new f.Z("stake_simplified", {
                AssetAmount: K,
                UsdValue: null == at ? void 0 : at.toFixed(2),
                existedStaking: +U > 0,
                existedStakingAssetAmount: et,
                existedStakingUsdValue: null == N ? void 0 : N.toFixed(2),
              });
            } catch (A) {
              return void (0, k.H)("Error when tracking staking", A);
            }
          }
          createUnstakeGAEvent(v) {
            try {
              const { unstaking: A, alreadyStaked: U } = v,
                K = (0, c.kg)(`${A}`, E.UU.decimals),
                N = +(0, c.kg)(`${U}`, E.UU.decimals) - +K,
                at = this.tokenPricesQuery.getTokenAmountUsdPrice(
                  E.UU.address,
                  N
                ),
                lt = this.tokenPricesQuery.getTokenAmountUsdPrice(
                  E.UU.address,
                  K
                );
              return new f.Z("unstake_simplified", {
                AssetAmount: K,
                UsdValue: null == lt ? void 0 : lt.toFixed(2),
                stayedStaking: +N.toFixed(2) > 0,
                stayedStakingAssetAmount: N,
                stayedStakingUsdValue: null == at ? void 0 : at.toFixed(2),
              });
            } catch (A) {
              return void (0, k.H)("Error when tracking staking", A);
            }
          }
        }
        return (
          (Ot.??fac = function (v) {
            return new (v || Ot)(
              h.????inject(tt.W),
              h.????inject(p.ZU),
              h.????inject(H.r),
              h.????inject(ot.r),
              h.????inject(pt.Y),
              h.????inject(ft.x),
              h.????inject(ht.n4),
              h.????inject(M.rU),
              h.????inject(W.u),
              h.????inject(i.O),
              h.????inject(l.L),
              h.????inject(O.RW),
              h.????inject(F.f),
              h.????inject(X.N),
              h.????inject(Mt.u),
              h.????inject(wt.B)
            );
          }),
          (Ot.??prov = h.????defineInjectable({ token: Ot, factory: Ot.??fac })),
          Ot
        );
      })();
    },
    74217: (Pt, nt, n) => {
      n.d(nt, { P: () => S });
      var o = n(53886),
        c = n(64736),
        I = n(69682),
        O = n(30137),
        b = n(73836),
        f = n(95021),
        d = n(58589),
        E = n(51109),
        _ = n(93130),
        k = n(3757),
        z = n(50864),
        Q = n(27876),
        w = n(25245),
        it = n(54510),
        y = n(24124);
      function P(T, $) {
        if (0 === T || 0 === $) return 0;
        const B = (100 * (T / $ - 1)).toFixed(2);
        return +(0, O.sk)(B, 2);
      }
      let S = (() => {
        class T {
          constructor(B, L, C, m, G, D, R, Z) {
            (this.walletConnectionQuery = B),
              (this.governanceApiService = L),
              (this.governanceService = C),
              (this.governanceTransactionService = m),
              (this.governanceQuery = G),
              (this.multiCallService = D),
              (this.activatedRoute = R),
              (this.activeConnectionQuery = Z),
              (this.governanceDetails$ = (0, o.a)([
                this.governanceApiService.getGovernanceDetails(),
                this.activeConnectionQuery.currentChainId$,
              ]).pipe(
                (0, f.EB)(0, b.N.refreshTime.graphData),
                (0, c.U)(([dt]) => dt),
                (0, I.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.governanceParams$ = (0, o.a)([
                this.governanceApiService.getFactoryParamsStat$(),
                this.governanceApiService.getFactoryParamsStat$(d.pH.week),
              ]).pipe(
                (0, f.EB)(0, b.N.refreshTime.graphData),
                (0, I.d)({ refCount: !0, bufferSize: 1 })
              )),
              m.startPipelines(),
              (this.stackedTokens$ = this.initStakedTokens()),
              (this.votingAddresses$ = this.initVotingAddresses()),
              (this.votersPercentChange$ = this.initVotersPercentChange()),
              (this.stakedPercentChange$ = this.initStakedPercentChange());
          }
          initStakedTokens() {
            return this.governanceDetails$.pipe(
              (0, c.U)((B) => +(0, O.kg)(B.totalSupply.toString(), 18, 4)),
              (0, f.i4)(0),
              (0, I.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          initVotingAddresses() {
            return this.governanceParams$.pipe(
              (0, c.U)(([B]) => +B.totalStakers),
              (0, f.i4)(0),
              (0, I.d)({ refCount: !0, bufferSize: 1 })
            );
          }
          initVotersPercentChange() {
            return this.governanceParams$.pipe(
              (0, c.U)(([B, L]) => P(+B.totalStakers, +L.totalStakers)),
              (0, f.i4)(0)
            );
          }
          initStakedPercentChange() {
            return this.governanceParams$.pipe(
              (0, c.U)(([B, L]) =>
                P(+B.totalStaked, +(null == L ? void 0 : L.totalStaked))
              ),
              (0, f.i4)(0),
              (0, I.d)({ refCount: !0, bufferSize: 1 })
            );
          }
        }
        return (
          (T.??fac = function (B) {
            return new (B || T)(
              E.????inject(_.r),
              E.????inject(d.rU),
              E.????inject(k.n),
              E.????inject(z.h),
              E.????inject(Q.R),
              E.????inject(w.Y),
              E.????inject(it.gz),
              E.????inject(y.r)
            );
          }),
          (T.??prov = E.????defineInjectable({ token: T, factory: T.??fac })),
          T
        );
      })();
    },
    35804: (Pt, nt, n) => {
      n.d(nt, { L: () => R });
      var o = n(71426),
        c = n(53886),
        I = n(3012),
        O = n(35878),
        b = n(76327),
        f = n(69682),
        d = n(64736),
        E = n(83358),
        _ = n(17114),
        k = n(16353),
        z = n(55468),
        Q = n(52611),
        w = n(95605),
        it = n(95021),
        y = n(51109),
        P = n(73013),
        S = n(41912),
        T = n(27876),
        $ = n(50875),
        B = n(93130),
        L = n(97093),
        C = n(36565),
        m = n(24124),
        G = n(27604),
        D = n(83140);
      let R = (() => {
        class Z {
          constructor(h, tt, p, H, ot, pt, ft, ht, M) {
            (this.ethContractService = h),
              (this.contractAddressQuery = tt),
              (this.governanceQuery = p),
              (this.estimateTransactionService = H),
              (this.walletConnectionQuery = ot),
              (this.txFeeService = pt),
              (this.gasPriceQuery = ft),
              (this.activeConnectionQuery = ht),
              (this.approveEstimateService = M),
              (this.stakeGasLimit$ = (0, c.a)({
                tokenBalance: this.governanceQuery
                  .select("balanceWei")
                  .pipe((0, O.x)()),
                chainId: this.activeConnectionQuery.currentChainId$,
                isApproved:
                  this.governanceQuery.isOneInchTokenApprovedForStaking$,
              }).pipe(
                (0, b.w)(({ tokenBalance: W, chainId: i, isApproved: l }) => {
                  const F = o.O$.from(W);
                  if (!l) return this.tokenApproveGasLimit$(i);
                  if (F.isZero()) return (0, I.of)(0);
                  const X = this.contractAddressQuery.getContractAddress(
                      z.a4.governanceMothership
                    ),
                    Mt = this.stakeCallData(F, X);
                  return this.getGasLimit(Mt, X);
                }),
                (0, O.x)(),
                (0, f.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.unstakeGasLimit$ = (0, c.a)({
                stakedBalance: this.governanceQuery
                  .select("userStakedWei")
                  .pipe((0, O.x)()),
                chainId: this.activeConnectionQuery.currentChainId$,
              }).pipe(
                (0, b.w)(({ stakedBalance: W }) => {
                  const i = o.O$.from(W);
                  if (i.isZero()) return (0, I.of)(0);
                  const l = this.contractAddressQuery.getContractAddress(
                      z.a4.governanceMothership
                    ),
                    F = this.unstakeCallData(i, l);
                  return this.getGasLimit(F, l);
                }),
                (0, O.x)(),
                (0, f.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.stakeTxFeeAmount$ = (0, c.a)([
                this.stakeGasLimit$,
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, d.U)(([W]) =>
                  this.txFeeService.calculateRegularTxFee((W || 0).toString())
                ),
                (0, O.x)(),
                (0, f.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.unstakeTxFeeAmount$ = (0, c.a)([
                this.unstakeGasLimit$,
                this.gasPriceQuery.currentGasPrice$,
              ]).pipe(
                (0, d.U)(([W]) =>
                  this.txFeeService.calculateRegularTxFee((W || 0).toString())
                ),
                (0, O.x)(),
                (0, f.d)({ refCount: !0, bufferSize: 1 })
              ));
          }
          stakeCallData(h, tt) {
            return (0, it.p4)(
              this.ethContractService.getContractEncodeABI(
                k._.GovernanceMothership,
                tt,
                "stake",
                [h]
              )
            );
          }
          unstakeCallData(h, tt) {
            return (0, it.p4)(
              this.ethContractService.getContractEncodeABI(
                k._.GovernanceMothership,
                tt,
                "unstake",
                [h]
              )
            );
          }
          getGasLimit(h, tt) {
            return h.pipe(
              (0, b.w)((p) =>
                this.estimateTransactionService.estimateTransactionWithWeb3Connector(
                  {
                    from: this.walletConnectionQuery.walletAddress,
                    to: tt,
                    data: p,
                  }
                )
              ),
              (0, E.q)(1),
              (0, d.U)((p) => p.gasLimit || 0),
              (0, _.K)(
                (p) => (
                  D.error("GovernanceMothership stake estimation fail", p),
                  (0, I.of)(0)
                )
              )
            );
          }
          tokenApproveGasLimit$(h) {
            const tt = this.contractAddressQuery.getContractAddress(
              z.a4.governanceMothership
            );
            return (0, it.p4)(
              this.approveEstimateService.estimateApprove({
                amount: Q.zL,
                contractAddress: w.UU.address,
                spenderAddress: tt,
                chainId: h,
                walletAddress: this.walletConnectionQuery.walletAddress,
              })
            ).pipe(
              (0, d.U)(({ gasLimit: H }) => H),
              (0, _.K)(
                (H) => (
                  D.error("Approve BUBBLE for stake estimation fail", H),
                  (0, I.of)(0)
                )
              )
            );
          }
        }
        return (
          (Z.??fac = function (h) {
            return new (h || Z)(
              y.????inject(P.u),
              y.????inject(S.O),
              y.????inject(T.R),
              y.????inject($.Z),
              y.????inject(B.r),
              y.????inject(L.V),
              y.????inject(C.j),
              y.????inject(m.r),
              y.????inject(G.J)
            );
          }),
          (Z.??prov = y.????defineInjectable({ token: Z, factory: Z.??fac })),
          Z
        );
      })();
    },
    52292: (Pt, nt, n) => {
      n.d(nt, { h: () => $ });
      var o = n(71426),
        c = n(47384),
        O = n(53886),
        b = n(3012),
        f = n(76327),
        d = n(64736),
        E = n(93475),
        _ = n(95021),
        k = n(51109),
        z = n(24124),
        Q = n(36565),
        w = n(93130),
        it = n(27876),
        y = n(3757),
        P = n(50864),
        S = n(58589),
        T = n(41912);
      let $ = (() => {
        class B {
          constructor(C, m, G, D, R, Z, dt, h) {
            (this.activeConnectionQuery = C),
              (this.gasPriceQuery = m),
              (this.walletQuery = G),
              (this.governanceQuery = D),
              (this.governanceService = R),
              (this.governanceTransactionService = Z),
              (this.governanceApiService = dt),
              (this.contractAddressService = h),
              (this.isWalletConnected$ = this.walletQuery.isWalletConnected$);
          }
          getVotingStats(C) {
            return (0, O.a)([
              this.getTotalSupplyBN(),
              this.activeConnectionQuery.currentChainId$,
            ]).pipe(
              (0, f.w)(([m]) =>
                this.getVotingBalanceBN(C).pipe(
                  (0, d.U)((G) => {
                    const D = +(0, c.formatEther)(G),
                      R = +(0, c.formatEther)(m);
                    return {
                      votingBalance: D,
                      votingPower: 0 !== R ? D / R : 0,
                    };
                  })
                )
              )
            );
          }
          countVotingPower(C, m) {
            return this.getTotalSupplyBN().pipe(
              (0, d.U)((G) => {
                const D = +(0, c.formatEther)(m),
                  R = +(0, c.formatEther)(G);
                return 0 !== R ? D / R : 0;
              })
            );
          }
          getVotingBalanceBN(C) {
            return this.isWalletConnected$.pipe(
              (0, f.w)((m) => (m ? this.takeVotingBalance(C) : (0, b.of)(E.Y)))
            );
          }
          getTotalSupplyBN() {
            return this.isWalletConnected$.pipe(
              (0, f.w)((C) =>
                C
                  ? this.governanceApiService
                      .getGovernanceDetails()
                      .pipe((0, d.U)(({ totalSupply: m }) => m))
                  : (0, b.of)("0")
              ),
              (0, d.U)((C) => o.O$.from(C))
            );
          }
          takeVotingBalance(C) {
            return this.walletQuery.connectedWalletAddress$.pipe(
              (0, _.BX)(),
              (0, f.w)((m) => this.getStakedAmount(m, C))
            );
          }
          getStakedAmount(C, m) {
            return this.contractAddressService
              .getContractAddressOnce(m)
              .pipe(
                (0, f.w)((G) =>
                  this.governanceTransactionService.getStakedAmount$(G, C, !1)
                )
              );
          }
        }
        return (
          (B.??fac = function (C) {
            return new (C || B)(
              k.????inject(z.r),
              k.????inject(Q.j),
              k.????inject(w.r),
              k.????inject(it.R),
              k.????inject(y.n),
              k.????inject(P.h),
              k.????inject(S.rU),
              k.????inject(T.O)
            );
          }),
          (B.??prov = k.????defineInjectable({ token: B, factory: B.??fac })),
          B
        );
      })();
    },
    9395: (Pt, nt, n) => {
      n.d(nt, { V: () => en });
      var o = n(31777),
        c = n(71426),
        I = n(47384),
        O = n(76027),
        b = n(53886),
        f = n(3012),
        d = n(79296),
        E = n(94748),
        _ = n(30606),
        k = n(33646),
        z = n(68751),
        Q = n(64736),
        w = n(76327),
        it = n(35878),
        y = n(69682),
        P = n(77724),
        S = n(71310),
        T = n(30459),
        $ = n(83358),
        B = n(55231),
        L = n(17114),
        C = n(55468),
        m = n(30137),
        G = n(93475),
        D = n(82868),
        R = n(20654),
        Z = n(73836),
        dt = n(95021),
        h = n(93617),
        tt = n(12292),
        p = n(69926),
        H = n(67701),
        ot = n(19298);
      function pt(s, g) {
        return +g + +((1e8 * +s) / 60 / 1e8).toFixed(2);
      }
      function ft(s) {
        const e = s.toFixed(2).toString().split(".");
        return e[1] ? Math.trunc((Number(e[1]) / 100) * 60).toFixed(0) : "0";
      }
      function ht(s) {
        return s.toString().split(".")[0];
      }
      function W(s, g) {
        return g - s < 1 ? ft(s) : "0";
      }
      var bt = n(42163),
        st = n(58789),
        t = n(51109),
        Ot = n(93130),
        Ft = n(54510),
        v = n(58589),
        A = n(50864),
        U = n(3757),
        K = n(27876),
        et = n(36565),
        N = n(67612),
        at = n(77065),
        lt = n(52611),
        Et = n(58913),
        Bt = n(70167),
        Rt = n(41912),
        Kt = n(93587),
        jt = n(24124),
        mt = n(38143),
        At = n(12725),
        Gt = n(24476),
        qt = n(83389),
        te = n(78612),
        ee = n(16236),
        ne = n(77370),
        ie = n(4069),
        oe = n(66654);
      function ae(s, g) {
        1 & s &&
          (t.????namespaceSVG(),
          t.????namespaceHTML(),
          t.????elementStart(0, "span", 15),
          t.????text(1, "You"),
          t.????elementEnd());
      }
      const re = function () {
        return { width: 125 };
      };
      function se(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????elementStart(1, "div", 8),
            t.????element(2, "img", 9),
            t.????elementStart(3, "a", 10),
            t.????pipe(4, "async"),
            t.????pipe(5, "chainExplorerAddressLink"),
            t.????elementStart(6, "span"),
            t.????text(7),
            t.????pipe(8, "prettyHash"),
            t.????elementEnd(),
            t.????namespaceSVG(),
            t.????elementStart(9, "svg", 11),
            t.????element(10, "use", 12),
            t.????elementEnd()(),
            t.????template(11, ae, 2, 0, "span", 13),
            t.????pipe(12, "async"),
            t.????elementEnd(),
            t.????namespaceHTML(),
            t.????elementStart(13, "span", 14),
            t.????text(14),
            t.????elementEnd(),
            t.????elementStart(15, "span", 14),
            t.????text(16),
            t.????pipe(17, "number"),
            t.????pipe(18, "transloco"),
            t.????elementEnd(),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = g.$implicit,
            a = t.????nextContext(2);
          t.????advance(3),
            t.????property(
              "href",
              t.????pipeBind1(4, 5, t.????pipeBind1(5, 7, e.address)),
              t.????sanitizeUrl
            ),
            t.????advance(4),
            t.????textInterpolate(
              t.????pipeBind2(8, 9, e.address, t.????pureFunction0(19, re))
            ),
            t.????advance(4),
            t.????property(
              "ngIf",
              t.????pipeBind1(12, 12, a.walletAddress$) === e.address
            ),
            t.????advance(3),
            t.????textInterpolate(a.formatValue(a.param, e.voteFor)),
            t.????advance(2),
            t.????textInterpolate(
              e.vote > 1
                ? t.????pipeBind2(17, 14, e.vote, "1.0-0")
                : t.????pipeBind1(18, 17, "votePage.less-than-1")
            );
        }
      }
      const ce = function () {
        return [5, 10, 25, 100];
      };
      function le(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementContainerStart(0),
            t.????elementStart(1, "h3", 1),
            t.????text(2, "Votes"),
            t.????elementEnd(),
            t.????elementStart(3, "div", 2)(4, "span", 3),
            t.????text(5, "Address"),
            t.????elementEnd(),
            t.????elementStart(6, "span", 4),
            t.????text(7, "Vote for"),
            t.????elementEnd(),
            t.????elementStart(8, "span", 5),
            t.????text(9, "Votes"),
            t.????elementEnd()(),
            t.????elementStart(10, "div", 2),
            t.????template(11, se, 19, 20, "ng-container", 6),
            t.????elementEnd(),
            t.????elementStart(12, "mat-paginator", 7),
            t.????listener("page", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext();
              return t.????resetView(u.onPageSelect(r));
            }),
            t.????elementEnd(),
            t.????elementContainerEnd();
        }
        if (2 & s) {
          const e = t.????nextContext();
          t.????advance(11),
            t.????property("ngForOf", e.page),
            t.????advance(1),
            t.????property("length", e.addresses.length)("pageSize", e.pageSize)(
              "pageSizeOptions",
              t.????pureFunction0(4, ce)
            );
        }
      }
      let he = (() => {
        class s {
          constructor(e, a, r, u) {
            (this.governanceApiService = e),
              (this.walletQuery = a),
              (this.ref = r),
              (this.contractAddressService = u),
              (this.addresses = []),
              (this.page = []),
              (this.pageSize = 10),
              (this.pageIndex = 0),
              (this.walletAddress$ =
                this.walletQuery.connectedWalletAddressSafe$),
              (this.subscription = new d.w0());
          }
          ngOnInit() {
            const e = this.syncAddresses$().pipe(
              (0, S.a)((a) => a.pipe((0, T.g)(Z.N.refreshTime.graphData)))
            );
            this.subscription.add(
              e.subscribe({ error: (a) => (0, D.eK)(a, "av0056") })
            );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          syncAddresses$() {
            return this.getPoolAddress().pipe(
              (0, w.w)((e) => {
                if (this.param instanceof Array) {
                  const a = this.param.map((r) =>
                    this.governanceApiService.getVotersByParam$(e, r)
                  );
                  return (0, b.a)(a).pipe(
                    (0, Q.U)((r) => {
                      const u = r[0].map((V, Y) =>
                        (function pe(s, g, e, a) {
                          return {
                            address: g,
                            voteFor: e.map((r, u) => (0, st.gj)(s[u], +r)),
                            vote: +(0, m.kg)(a, 18, 4),
                          };
                        })(
                          this.param,
                          V.id,
                          r.map((ut) => {
                            var j, vt, Vt;
                            return (
                              (null ===
                                (Vt =
                                  null ===
                                    (vt =
                                      null === (j = ut[Y]) || void 0 === j
                                        ? void 0
                                        : j.votes) || void 0 === vt
                                    ? void 0
                                    : vt[0]) || void 0 === Vt
                                ? void 0
                                : Vt.value) || "0"
                            );
                          }),
                          V.currentStake
                        )
                      );
                      (this.addresses = u),
                        this.showPage(this.pageIndex, this.pageSize);
                    }),
                    (0, L.K)(() => (0, f.of)(!0)),
                    (0, $.q)(1)
                  );
                }
                return this.governanceApiService
                  .getVotersByParam$(e, this.param)
                  .pipe(
                    (0, P.b)((a) => {
                      const r = a.map((u) => {
                        var V, Y;
                        return (function de(s, g, e, a) {
                          return {
                            address: g,
                            voteFor: (0, st.gj)(s, +e),
                            vote: +(0, m.kg)(a, 18, 4),
                          };
                        })(
                          this.param,
                          u.id,
                          (null ===
                            (Y =
                              null === (V = null == u ? void 0 : u.votes) ||
                              void 0 === V
                                ? void 0
                                : V[0]) || void 0 === Y
                            ? void 0
                            : Y.value) || "0",
                          u.currentStake
                        );
                      });
                      (this.addresses = r),
                        this.showPage(this.pageIndex, this.pageSize);
                    }),
                    (0, L.K)(() => (0, f.of)(!0)),
                    (0, $.q)(1)
                  );
              })
            );
          }
          showPage(e, a) {
            const r = e * a;
            (this.pageSize = a),
              (this.page = this.addresses.slice(r, r + a)),
              this.ref.markForCheck();
          }
          onPageSelect(e) {
            const { pageIndex: a, pageSize: r } = e;
            (this.pageIndex = a), this.showPage(a, r);
          }
          formatValue(e, a) {
            return a instanceof Array
              ? a.reduce(
                  (r, u, V) =>
                    V === a.length - 1
                      ? r + (0, st.X4)(e[V], u)
                      : r + (0, st.X4)(e[V], u) + " / ",
                  ""
                )
              : (0, st.X4)(e, a);
          }
          getPoolAddress() {
            return this.contractAddressService
              .getContractsAddressesOnce(
                C.a4.exchangeGovernance,
                C.a4.mooniswapFactoryV_1_1
              )
              .pipe(
                (0, Q.U)(([e, a]) => (this.poolAddress ? this.poolAddress : a))
              );
          }
        }
        return (
          (s.??fac = function (e) {
            return new (e || s)(
              t.????directiveInject(v.rU),
              t.????directiveInject(Ot.r),
              t.????directiveInject(t.ChangeDetectorRef),
              t.????directiveInject(Rt.O)
            );
          }),
          (s.??cmp = t.????defineComponent({
            type: s,
            selectors: [["app-votes-table"]],
            inputs: { param: "param", poolAddress: "poolAddress" },
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngIf"],
              ["transloco", "governance.votes", 1, "votes-table-title"],
              [1, "votes-table"],
              ["transloco", "governance.address"],
              ["transloco", "votePage.vote-for", 1, "right-align"],
              ["transloco", "governance.votes", 1, "right-align"],
              [4, "ngFor", "ngForOf"],
              [
                1,
                "votes-table-paginator",
                3,
                "length",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
              [1, "votes-table-address"],
              ["src", "assets/images/wallet-logo-new.svg", "alt", ""],
              ["target", "_blank", 1, "votes-table-address-link", 3, "href"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link.svg#arrow-link",
              ],
              [
                "class",
                "you-label",
                "transloco",
                "topAddresses.you",
                4,
                "ngIf",
              ],
              [1, "right-align"],
              ["transloco", "topAddresses.you", 1, "you-label"],
            ],
            template: function (e, a) {
              1 & e && t.????template(0, le, 13, 5, "ng-container", 0),
                2 & e && t.????property("ngIf", a.addresses.length);
            },
            dependencies: [
              mt.sg,
              mt.O5,
              At.KI,
              ne.NW,
              mt.Ov,
              mt.JJ,
              At.Ot,
              ie.V,
              oe.E,
            ],
            styles: [
              ".votes-table-title[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:500;margin-bottom:22px}@media (min-width: 480px){.votes-table-title[_ngcontent-%COMP%]{font-size:24px;line-height:28px}}.votes-table[_ngcontent-%COMP%]{display:grid;grid-template-columns:5fr 1.5fr 1.5fr;grid-gap:26px 8px;align-items:center;font-size:16px;line-height:26px}.votes-table[_ngcontent-%COMP%]:first-of-type{font-size:13px;line-height:15px;margin-bottom:32px;color:var(--1inch__ui-02)}.votes-table[_ngcontent-%COMP%]   .right-align[_ngcontent-%COMP%]{text-align:right}.votes-table-address[_ngcontent-%COMP%]{display:flex;align-items:center}.votes-table-address[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;margin-right:16px}.votes-table-address-link[_ngcontent-%COMP%]{text-decoration:none;font-family:Roboto Mono,monospace;color:var(--1inch-text-01)}.votes-table-address-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-2px 0 0 8px;color:var(--1inch__ui-02)}.you-label[_ngcontent-%COMP%]{margin-left:20px;padding:4px 16px;border-radius:16px;background:rgba(35,198,139,.5)}.votes-table-paginator[_ngcontent-%COMP%]{margin-top:16px}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.votes-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.votes-table-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .votes-table-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.votes-table-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}",
            ],
            changeDetection: 0,
          })),
          s
        );
      })();
      var Xt = n(25460);
      let ue = (() => {
        class s {
          constructor(e, a) {
            (this.governanceQuery = e),
              (this.governanceService = a),
              (this.value$ = this.governanceQuery.select("votingPowerType"));
          }
          setVotingSwitchValue(e) {
            this.governanceService.changeVotingPowerType(e.value);
          }
        }
        return (
          (s.??fac = function (e) {
            return new (e || s)(
              t.????directiveInject(K.R),
              t.????directiveInject(U.n)
            );
          }),
          (s.??cmp = t.????defineComponent({
            type: s,
            selectors: [["app-voting-mode-switch"]],
            decls: 14,
            vars: 3,
            consts: [
              [
                "aria-label",
                "Voting switch",
                "name",
                "quickSwitch",
                1,
                "voting-switch",
                3,
                "value",
                "change",
              ],
              ["value", "VoteUsingPoolToken", 1, "voting-switch-value"],
              [1, "voting-switch-btn-content"],
              ["width", "24", "height", "24"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/lp-token-new.svg#lp-token-new",
              ],
              ["transloco", "votingModeSwitch.lp-token"],
              ["value", "VoteUsingFarmingContract", 1, "voting-switch-value"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/header/farming.svg#farming",
              ],
              ["transloco", "votingModeSwitch.farming-lp"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.????elementStart(0, "mat-button-toggle-group", 0),
                t.????listener("change", function (u) {
                  return a.setVotingSwitchValue(u);
                }),
                t.????pipe(1, "async"),
                t.????elementStart(2, "mat-button-toggle", 1)(3, "span", 2),
                t.????namespaceSVG(),
                t.????elementStart(4, "svg", 3),
                t.????element(5, "use", 4),
                t.????elementEnd(),
                t.????namespaceHTML(),
                t.????elementStart(6, "span", 5),
                t.????text(7, "LP token"),
                t.????elementEnd()()(),
                t.????elementStart(8, "mat-button-toggle", 6)(9, "span", 2),
                t.????namespaceSVG(),
                t.????elementStart(10, "svg", 3),
                t.????element(11, "use", 7),
                t.????elementEnd(),
                t.????namespaceHTML(),
                t.????elementStart(12, "span", 8),
                t.????text(13, "Farming LP"),
                t.????elementEnd()()()()),
                2 & e && t.????property("value", t.????pipeBind1(1, 1, a.value$));
            },
            dependencies: [At.KI, Xt.A9, Xt.Yi, mt.Ov],
            styles: [
              ".voting-switch[_ngcontent-%COMP%]{border-radius:12px;width:100%;background:var(--1inch-bg-01)}.voting-switch-value[_ngcontent-%COMP%]{width:50%;padding:4px 0}.voting-switch-btn-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;line-height:26px}.voting-switch-btn-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:4px}",
            ],
          })),
          s
        );
      })();
      var ge = n(89092);
      function _e(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????text(1),
            t.????pipe(2, "percent"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext();
          t.????advance(1),
            t.????textInterpolate1(
              " ",
              t.????pipeBind2(2, 1, e.votingPower / 100, "1.1-4"),
              " "
            );
        }
      }
      function ve(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????text(1),
            t.????pipe(2, "percent"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext();
          t.????advance(1),
            t.????textInterpolate1(
              " ",
              t.????pipeBind2(2, 1, e.farmingVotingPower / 100, "1.1-4"),
              " "
            );
        }
      }
      let me = (() => {
        class s {
          constructor(e, a) {
            (this.governanceQuery = e),
              (this.governanceService = a),
              (this.votingPower = 0),
              (this.votingBalance = 0),
              (this.stakedBalance = 0),
              (this.farmingVotingPower = 0),
              (this.votingPowerType$ =
                this.governanceQuery.select("votingPowerType"));
          }
          setVotingSwitchValue(e) {
            this.governanceService.changeVotingPowerType(e);
          }
        }
        return (
          (s.??fac = function (e) {
            return new (e || s)(
              t.????directiveInject(K.R),
              t.????directiveInject(U.n)
            );
          }),
          (s.??cmp = t.????defineComponent({
            type: s,
            selectors: [["app-voting-mode-preview"]],
            inputs: {
              votingPower: "votingPower",
              votingBalance: "votingBalance",
              stakedBalance: "stakedBalance",
              farmingVotingPower: "farmingVotingPower",
            },
            decls: 23,
            vars: 22,
            consts: [
              [1, "voting-info"],
              [1, "voting-balance-row"],
              [
                "transloco",
                "governance.voting-power-new",
                1,
                "voting-balance-row-title",
              ],
              [4, "ngIf"],
              [1, "voting-balance-row", "clicked-row", 3, "ngClass", "click"],
              ["transloco", "votingModePreview.lp-token-balance-new"],
              [1, "value"],
              ["transloco", "votingModePreview.farming-lp-balance-new"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.????elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2),
                t.????text(3, "Voting power"),
                t.????elementEnd(),
                t.????elementStart(4, "span"),
                t.????template(5, _e, 3, 4, "ng-container", 3),
                t.????pipe(6, "async"),
                t.????template(7, ve, 3, 4, "ng-container", 3),
                t.????pipe(8, "async"),
                t.????elementEnd()(),
                t.????elementStart(9, "div", 4),
                t.????listener("click", function () {
                  return a.setVotingSwitchValue("VoteUsingPoolToken");
                }),
                t.????pipe(10, "async"),
                t.????elementStart(11, "span", 5),
                t.????text(12, "LP token balance"),
                t.????elementEnd(),
                t.????elementStart(13, "span", 6),
                t.????text(14),
                t.????pipe(15, "formatTokenAmount"),
                t.????elementEnd()(),
                t.????elementStart(16, "div", 4),
                t.????listener("click", function () {
                  return a.setVotingSwitchValue("VoteUsingFarmingContract");
                }),
                t.????pipe(17, "async"),
                t.????elementStart(18, "span", 7),
                t.????text(19, "Farming LP balance"),
                t.????elementEnd(),
                t.????elementStart(20, "span", 6),
                t.????text(21),
                t.????pipe(22, "formatTokenAmount"),
                t.????elementEnd()()()),
                2 & e &&
                  (t.????advance(5),
                  t.????property(
                    "ngIf",
                    "VoteUsingPoolToken" ===
                      t.????pipeBind1(6, 6, a.votingPowerType$)
                  ),
                  t.????advance(2),
                  t.????property(
                    "ngIf",
                    "VoteUsingPoolToken" !==
                      t.????pipeBind1(8, 8, a.votingPowerType$)
                  ),
                  t.????advance(2),
                  t.????property(
                    "ngClass",
                    "VoteUsingPoolToken" ===
                      t.????pipeBind1(10, 10, a.votingPowerType$) &&
                      "selected-voting-balance"
                  ),
                  t.????advance(5),
                  t.????textInterpolate(
                    t.????pipeBind3(15, 12, a.votingBalance, 18, "1.0-4") || 0
                  ),
                  t.????advance(2),
                  t.????property(
                    "ngClass",
                    "VoteUsingFarmingContract" ===
                      t.????pipeBind1(17, 16, a.votingPowerType$) &&
                      "selected-voting-balance"
                  ),
                  t.????advance(5),
                  t.????textInterpolate(
                    t.????pipeBind3(22, 18, a.stakedBalance, 18, "1.0-4") || 0
                  ));
            },
            dependencies: [mt.mk, mt.O5, At.KI, mt.Ov, mt.Zx, ge.l],
            styles: [
              ".voting-info[_ngcontent-%COMP%]{padding:12px 8px;border-radius:12px;margin-bottom:24px;border:1px solid var(--1inch-border-01)}.voting-balance-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px;border-radius:8px;font-size:13px;line-height:15px;margin-bottom:4px}.voting-balance-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.voting-balance-row[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.voting-balance-row-title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.clicked-row[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.clicked-row[_ngcontent-%COMP%]:hover{cursor:pointer}.selected-voting-balance[_ngcontent-%COMP%]{background:var(--1inch-btn-bg-03);color:var(--1inch-common-text-03)}",
            ],
          })),
          s
        );
      })();
      var fe = n(24608);
      let Ce = (() => {
        class s {
          transform(e) {
            var a, r;
            return e &&
              null !== (a = null == e ? void 0 : e.token0) &&
              void 0 !== a &&
              a.symbol &&
              null !== (r = null == e ? void 0 : e.token1) &&
              void 0 !== r &&
              r.symbol
              ? `${e.token0.symbol}-${e.token1.symbol}`
              : "";
          }
        }
        return (
          (s.??fac = function (e) {
            return new (e || s)();
          }),
          (s.??pipe = t.????definePipe({ name: "poolTitle", type: s, pure: !0 })),
          s
        );
      })();
      var Ht = n(83140);
      const Ee = ["customAmountInput"],
        Pe = ["customAmountInputMinutes"],
        xe = ["customAmountInputSeconds"];
      function ye(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????elementStart(1, "span", 41),
            t.????text(2, "Voting for"),
            t.????elementEnd(),
            t.????elementStart(3, "span"),
            t.????text(4, "\xa0"),
            t.????elementEnd(),
            t.????elementStart(5, "span"),
            t.????text(6),
            t.????pipe(7, "poolTitle"),
            t.????elementEnd(),
            t.????elementStart(8, "span"),
            t.????text(9, "\xa0"),
            t.????elementEnd(),
            t.????elementStart(10, "span", 42),
            t.????text(11, "pool"),
            t.????elementEnd(),
            t.????elementStart(12, "span"),
            t.????text(13, "\xa0"),
            t.????elementEnd(),
            t.????elementStart(14, "span"),
            t.????text(15),
            t.????elementEnd(),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf,
            a = t.????nextContext();
          t.????advance(6),
            t.????textInterpolate(t.????pipeBind1(7, 2, a.pool)),
            t.????advance(9),
            t.????textInterpolate(e.title);
        }
      }
      function Se(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????elementStart(1, "span", 41),
            t.????text(2, "Voting for"),
            t.????elementEnd(),
            t.????elementStart(3, "span"),
            t.????text(4, "\xa0"),
            t.????elementEnd(),
            t.????elementStart(5, "span", 43),
            t.????text(6),
            t.????pipe(7, "transloco"),
            t.????elementEnd(),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf;
          t.????advance(6), t.????textInterpolate(t.????pipeBind1(7, 1, e.title));
        }
      }
      function Me(s, g) {
        if (
          (1 & s &&
            (t.????elementStart(0, "div", 14)(1, "p", 44),
            t.????text(4),
            t.????elementEnd()()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf;
          t.????advance(4), t.????textInterpolate(e.yourVotes);
        }
      }
      function Oe(s, g) {
        1 & s && t.????elementContainer(0);
      }
      function De(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????elementStart(1, "p", 28),
            t.????text(2),
            t.????pipe(3, "async"),
            t.????elementEnd(),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2);
          t.????advance(2), t.????textInterpolate(t.????pipeBind1(3, 1, e.newValue$));
        }
      }
      function Ve(s, g) {
        1 & s && t.????element(0, "img", 47);
      }
      function Ie(s, g) {
        1 & s &&
          (t.????elementStart(0, "p", 28), t.????text(1, "-"), t.????elementEnd());
      }
      function be(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????template(1, Ve, 1, 0, "img", 45),
            t.????pipe(2, "async"),
            t.????template(3, Ie, 2, 0, "p", 46),
            t.????pipe(4, "async"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2);
          t.????advance(1),
            t.????property("ngIf", t.????pipeBind1(2, 2, e.isWalletConnected$)),
            t.????advance(2),
            t.????property("ngIf", !t.????pipeBind1(4, 4, e.isWalletConnected$));
        }
      }
      const Ae = function (s) {
        return { "field-simple-input-warning": s };
      };
      function Te(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementStart(0, "div", 34)(1, "input", 49, 50),
            t.????listener("keypress", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.onlyNumberDotOrCommaKey(r));
            })("keyup", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.submitValue());
            })("input", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.handleInput());
            })("paste", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.handlePaste(r));
            }),
            t.????pipe(3, "transloco"),
            t.????pipe(4, "async"),
            t.????elementEnd(),
            t.????elementStart(5, "span", 51),
            t.????text(6, "%"),
            t.????elementEnd()();
        }
        if (2 & s) {
          const e = t.????nextContext(2).ngIf,
            a = t.????nextContext();
          t.????advance(1),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".percents-input"
            ),
            t.????propertyInterpolate(
              "placeholder",
              t.????pipeBind1(3, 5, "advancedSettings.custom")
            ),
            t.????property(
              "ngClass",
              t.????pureFunction1(9, Ae, a.hasAmountWarning)
            )("value", t.????pipeBind1(4, 7, a.selectedValue$))(
              "formControl",
              a.customAmountControl
            );
        }
      }
      function we(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementContainerStart(0),
            t.????elementStart(1, "div", 52)(2, "div", 34)(3, "input", 53, 54),
            t.????listener("keypress", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.onlyNumberAndMinutes(r));
            })("input", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.handleInputMinutes());
            })("keyup", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.submitValueMinutes());
            })("paste", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.handlePasteTime(r));
            }),
            t.????pipe(5, "transloco"),
            t.????pipe(6, "async"),
            t.????elementEnd(),
            t.????elementStart(7, "span", 55),
            t.????text(8, "minutes"),
            t.????elementEnd()(),
            t.????elementStart(9, "div", 34)(10, "input", 53, 56),
            t.????listener("keypress", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.onlyNumberAndSeconds(r));
            })("input", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.handleInputSeconds());
            })("keyup", function () {
              t.????restoreView(e);
              const r = t.????nextContext(3);
              return t.????resetView(r.submitValueSeconds());
            })("paste", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext(3);
              return t.????resetView(u.handlePasteTime(r));
            }),
            t.????pipe(12, "transloco"),
            t.????pipe(13, "async"),
            t.????elementEnd(),
            t.????elementStart(14, "span", 57),
            t.????text(15, "seconds"),
            t.????elementEnd()()(),
            t.????elementContainerEnd();
        }
        if (2 & s) {
          const e = t.????nextContext(2).ngIf,
            a = t.????nextContext();
          t.????advance(3),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".minutes-input"
            ),
            t.????propertyInterpolate(
              "placeholder",
              t.????pipeBind1(5, 8, "advancedSettings.custom")
            ),
            t.????property(
              "value",
              t.????pipeBind1(6, 10, a.valueByTimeType$("minutes"))
            )("formControl", a.customMinutesControl),
            t.????advance(7),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".seconds-input"
            ),
            t.????propertyInterpolate(
              "placeholder",
              t.????pipeBind1(12, 12, "advancedSettings.custom")
            ),
            t.????property(
              "value",
              t.????pipeBind1(13, 14, a.valueByTimeType$("seconds"))
            )("formControl", a.customSecondsControl);
        }
      }
      function Be(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????template(1, Te, 7, 11, "div", 48),
            t.????template(2, we, 16, 16, "ng-container", 0),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf;
          t.????advance(1),
            t.????property("ngIf", -1 === e.id.indexOf("Period")),
            t.????advance(1),
            t.????property("ngIf", -1 !== e.id.indexOf("Period"));
        }
      }
      function Re(s, g) {
        if (
          (1 & s &&
            (t.????namespaceSVG(),
            t.????namespaceHTML(),
            t.????elementStart(0, "span", 63),
            t.????text(1),
            t.????pipe(2, "transloco"),
            t.????elementEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2).ngIf;
          t.????advance(1),
            t.????textInterpolate(t.????pipeBind1(2, 1, e.warningTextLow));
        }
      }
      function $e(s, g) {
        if (
          (1 & s &&
            (t.????namespaceSVG(),
            t.????namespaceHTML(),
            t.????elementStart(0, "span", 64),
            t.????text(1),
            t.????pipe(2, "transloco"),
            t.????elementEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2).ngIf;
          t.????advance(1),
            t.????textInterpolate(t.????pipeBind1(2, 1, e.warningTextHigh));
        }
      }
      function Ue(s, g) {
        if (
          (1 & s &&
            (t.????elementStart(0, "div", 58),
            t.????namespaceSVG(),
            t.????elementStart(1, "svg", 59),
            t.????element(2, "use", 60),
            t.????elementEnd(),
            t.????template(3, Re, 3, 3, "span", 61),
            t.????template(4, $e, 3, 3, "span", 62),
            t.????elementEnd()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf;
          t.????advance(3),
            t.????property("ngIf", e.warningTextLow),
            t.????advance(1),
            t.????property("ngIf", e.warningTextHigh);
        }
      }
      function Le(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????element(1, "app-voting-mode-preview", 65),
            t.????pipe(2, "async"),
            t.????element(3, "app-voting-mode-switch", 66),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2);
          t.????advance(1),
            t.????property("votingPower", e.votingPower)(
              "votingBalance",
              e.votingBalance
            )("farmingVotingPower", e.farmingVotingPower)(
              "stakedBalance",
              t.????pipeBind1(2, 4, e.stakedFarmAmount$)
            );
        }
      }
      function Fe(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????elementStart(1, "app-button", 67)(2, "span", 68),
            t.????text(3, "Connect wallet"),
            t.????elementEnd()(),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext().ngIf;
          t.????advance(1),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".connect-wallet-button"
            );
        }
      }
      function ke(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementContainerStart(0),
            t.????elementStart(1, "app-button", 69),
            t.????listener("clicked", function () {
              t.????restoreView(e);
              const r = t.????nextContext(2);
              return t.????resetView(r.notify());
            }),
            t.????namespaceSVG(),
            t.????elementStart(2, "svg", 70),
            t.????element(3, "use", 71),
            t.????elementEnd(),
            t.????namespaceHTML(),
            t.????elementStart(4, "span", 72),
            t.????text(5, "Migrate module"),
            t.????elementEnd()(),
            t.????elementContainerEnd();
        }
        if (2 & s) {
          const e = t.????nextContext().ngIf;
          t.????advance(1),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".migrate-module-button"
            );
        }
      }
      function We(s, g) {
        1 & s &&
          (t.????elementContainerStart(0),
          t.????elementStart(1, "app-button", 73),
          t.????namespaceSVG(),
          t.????elementStart(2, "svg", 70),
          t.????element(3, "use", 71),
          t.????elementEnd(),
          t.????namespaceHTML(),
          t.????elementStart(4, "span", 74),
          t.????text(5, "Insufficient balance"),
          t.????elementEnd()(),
          t.????elementContainerEnd()),
          2 & s && (t.????advance(1), t.????property("disabled", !0));
      }
      function Ke(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementStart(0, "div", 76)(1, "app-button", 77),
            t.????listener("clicked", function () {
              t.????restoreView(e);
              const r = t.????nextContext(2).ngIf,
                u = t.????nextContext();
              return t.????resetView(u.removeVote(r.id));
            }),
            t.????pipe(2, "async"),
            t.????elementStart(3, "span", 78),
            t.????text(4, "Remove votes"),
            t.????elementEnd()(),
            t.????elementStart(5, "app-button", 79),
            t.????listener("clicked", function () {
              t.????restoreView(e);
              const r = t.????nextContext(2).ngIf,
                u = t.????nextContext();
              return t.????resetView(u.vote(r.id));
            }),
            t.????pipe(6, "async"),
            t.????elementStart(7, "span", 80),
            t.????text(8, "Vote"),
            t.????elementEnd()()();
        }
        if (2 & s) {
          const e = t.????nextContext(3);
          t.????advance(1),
            t.????property("disabled", !t.????pipeBind1(2, 2, e.isValidAmount$)),
            t.????advance(4),
            t.????property("disabled", !t.????pipeBind1(6, 4, e.isValidAmount$));
        }
      }
      function je(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementStart(0, "app-button", 83),
            t.????listener("clicked", function () {
              t.????restoreView(e);
              const r = t.????nextContext(4).ngIf,
                u = t.????nextContext();
              return t.????resetView(u.removeVote(r.id));
            }),
            t.????pipe(1, "async"),
            t.????elementStart(2, "span", 78),
            t.????text(3, "Remove votes"),
            t.????elementEnd()();
        }
        if (2 & s) {
          const e = t.????nextContext(5);
          t.????property("disabled", !t.????pipeBind1(1, 1, e.isValidAmount$));
        }
      }
      function Ge(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementStart(0, "app-button", 79),
            t.????listener("clicked", function () {
              t.????restoreView(e);
              const r = t.????nextContext(4).ngIf,
                u = t.????nextContext();
              return t.????resetView(u.vote(r.id));
            }),
            t.????pipe(1, "async"),
            t.????elementStart(2, "span", 80),
            t.????text(3, "Vote"),
            t.????elementEnd()();
        }
        if (2 & s) {
          const e = t.????nextContext(5);
          t.????property("disabled", !t.????pipeBind1(1, 1, e.isValidAmount$));
        }
      }
      function He(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????template(1, je, 4, 3, "app-button", 81),
            t.????pipe(2, "async"),
            t.????template(3, Ge, 4, 3, "app-button", 82),
            t.????pipe(4, "async"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(4);
          t.????advance(1),
            t.????property("ngIf", t.????pipeBind1(2, 2, e.needToDecline$)),
            t.????advance(2),
            t.????property("ngIf", !t.????pipeBind1(4, 4, e.needToDecline$));
        }
      }
      function Qe(s, g) {
        1 & s &&
          (t.????elementStart(0, "app-button", 86)(1, "span", 87),
          t.????text(2, "Pending..."),
          t.????elementEnd()()),
          2 & s && t.????property("disabled", !0);
      }
      function Ne(s, g) {
        1 & s &&
          (t.????elementStart(0, "app-button", 88)(1, "span", 87),
          t.????text(2, "Pending..."),
          t.????elementEnd()()),
          2 & s && t.????property("disabled", !0);
      }
      function ze(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????template(1, Qe, 3, 1, "app-button", 84),
            t.????pipe(2, "async"),
            t.????template(3, Ne, 3, 1, "app-button", 85),
            t.????pipe(4, "async"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(4);
          t.????advance(1),
            t.????property("ngIf", t.????pipeBind1(2, 2, e.needToDecline$)),
            t.????advance(2),
            t.????property("ngIf", !t.????pipeBind1(4, 4, e.needToDecline$));
        }
      }
      function Xe(s, g) {
        if (
          (1 & s &&
            (t.????elementStart(0, "div"),
            t.????template(1, He, 5, 6, "ng-container", 0),
            t.????pipe(2, "async"),
            t.????template(3, ze, 5, 6, "ng-container", 0),
            t.????pipe(4, "async"),
            t.????elementEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(3);
          t.????advance(1),
            t.????property("ngIf", !t.????pipeBind1(2, 2, e.hasPendingVoteTx$)),
            t.????advance(2),
            t.????property("ngIf", t.????pipeBind1(4, 4, e.hasPendingVoteTx$));
        }
      }
      function Ye(s, g) {
        if (
          (1 & s &&
            (t.????elementContainerStart(0),
            t.????template(1, Ke, 9, 6, "div", 75),
            t.????template(2, Xe, 5, 6, "div", 0),
            t.????pipe(3, "async"),
            t.????pipe(4, "async"),
            t.????elementContainerEnd()),
          2 & s)
        ) {
          const e = t.????nextContext(2);
          t.????advance(1),
            t.????property("ngIf", e.isPoolGovernance),
            t.????advance(1),
            t.????property(
              "ngIf",
              e.isFactoryGovernance &&
                (!0 === t.????pipeBind1(3, 2, e.needToDecline$) ||
                  !1 === t.????pipeBind1(4, 4, e.needToDecline$))
            );
        }
      }
      function Ze(s, g) {
        1 & s && t.????elementContainer(0);
      }
      const Yt = function (s) {
        return { data: s };
      };
      function Je(s, g) {
        if (1 & s) {
          const e = t.????getCurrentView();
          t.????elementContainerStart(0),
            t.????elementStart(1, "a", 2),
            t.????listener("click", function () {
              t.????restoreView(e);
              const r = t.????nextContext();
              return t.????resetView(r.navigateBack());
            }),
            t.????namespaceSVG(),
            t.????elementStart(2, "svg", 3),
            t.????element(3, "use", 4),
            t.????elementEnd(),
            t.????namespaceHTML(),
            t.????elementStart(4, "span", 5),
            t.????text(5, "Back"),
            t.????elementEnd()(),
            t.????elementStart(6, "h1", 6),
            t.????template(7, ye, 16, 4, "ng-container", 0),
            t.????template(8, Se, 8, 3, "ng-container", 0),
            t.????elementEnd(),
            t.????elementStart(9, "div", 7)(10, "div")(11, "div", 8)(
              12,
              "div",
              9
            )(13, "p", 10),
            t.????text(14),
            t.????elementEnd(),
            t.????elementStart(15, "p", 11),
            t.????text(16, "Current result"),
            t.????elementEnd(),
            t.????element(17, "app-radial-gauge", 12),
            t.????elementEnd(),
            t.????elementStart(18, "div", 13)(19, "div", 14)(20, "p", 15),
            t.????text(21, "Total votes"),
            t.????elementEnd(),
            t.????elementStart(22, "p", 16),
            t.????text(23),
            t.????elementEnd()(),
            t.????template(24, Me, 5, 1, "div", 17),
            t.????pipe(25, "async"),
            t.????elementStart(26, "div", 14)(27, "p", 18),
            t.????text(28, "Addresses"),
            t.????elementEnd(),
            t.????elementStart(29, "p", 16),
            t.????text(30),
            t.????elementEnd()()()(),
            t.????elementStart(31, "div", 19),
            t.????template(32, Oe, 1, 0, "ng-container", 20),
            t.????elementEnd()(),
            t.????elementStart(33, "div")(34, "div", 21)(35, "div", 22)(
              36,
              "span",
              23
            ),
            t.????text(37, "Voting"),
            t.????elementEnd(),
            t.????elementStart(38, "span", 24),
            t.????listener("click", function () {
              t.????restoreView(e);
              const r = t.????nextContext();
              return t.????resetView(r.reset());
            }),
            t.????text(39, "Reset"),
            t.????elementEnd()(),
            t.????elementStart(40, "div", 25)(41, "div", 26)(42, "p", 27),
            t.????text(43, "Current value"),
            t.????elementEnd(),
            t.????elementStart(44, "p", 28),
            t.????text(45),
            t.????elementEnd()(),
            t.????elementStart(46, "div", 29)(47, "div", 30),
            t.????namespaceSVG(),
            t.????elementStart(48, "svg", 31),
            t.????element(49, "use", 32),
            t.????elementEnd()()(),
            t.????namespaceHTML(),
            t.????elementStart(50, "div", 26)(51, "p", 33),
            t.????text(52, "New value (applied in 24h)"),
            t.????elementEnd(),
            t.????template(53, De, 4, 3, "ng-container", 0),
            t.????pipe(54, "async"),
            t.????template(55, be, 5, 6, "ng-container", 0),
            t.????pipe(56, "async"),
            t.????elementEnd()(),
            t.????elementStart(57, "div", 34)(58, "mat-slider", 35),
            t.????listener("change", function (r) {
              t.????restoreView(e);
              const u = t.????nextContext();
              return t.????resetView(u.onVoteValueSliderChange(r));
            }),
            t.????pipe(59, "async"),
            t.????elementEnd(),
            t.????elementStart(60, "div", 36)(61, "span"),
            t.????text(62),
            t.????elementEnd(),
            t.????elementStart(63, "span"),
            t.????text(64),
            t.????elementEnd()()(),
            t.????template(65, Be, 3, 2, "ng-container", 0),
            t.????template(66, Ue, 5, 2, "div", 37),
            t.????template(67, Le, 4, 6, "ng-container", 0),
            t.????pipe(68, "async"),
            t.????elementContainerStart(69, 38),
            t.????template(70, Fe, 4, 1, "ng-container", 39),
            t.????template(71, ke, 6, 1, "ng-container", 39),
            t.????template(72, We, 6, 1, "ng-container", 39),
            t.????template(73, Ye, 5, 6, "ng-container", 39),
            t.????elementContainerEnd(),
            t.????elementEnd(),
            t.????elementStart(74, "div", 40),
            t.????template(75, Ze, 1, 0, "ng-container", 20),
            t.????elementEnd()()(),
            t.????elementContainerEnd();
        }
        if (2 & s) {
          const e = g.ngIf,
            a = t.????nextContext(),
            r = t.????reference(3);
          t.????advance(7),
            t.????property("ngIf", a.poolAddress),
            t.????advance(1),
            t.????property("ngIf", !a.poolAddress),
            t.????advance(6),
            t.????textInterpolate(a.formatValue(e.id, e.currentValue)),
            t.????advance(3),
            t.????property("value", e.value)("color", a.getColor(e.id)),
            t.????advance(6),
            t.????textInterpolate(e.totalVotes),
            t.????advance(1),
            t.????property("ngIf", t.????pipeBind1(25, 31, a.isWalletConnected$)),
            t.????advance(6),
            t.????textInterpolate(e.addresses),
            t.????advance(2),
            t.????property("ngTemplateOutlet", r)(
              "ngTemplateOutletContext",
              t.????pureFunction1(41, Yt, e)
            ),
            t.????advance(6),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".reset-button"
            ),
            t.????advance(7),
            t.????textInterpolate(a.formatValue(e.id, e.currentValue)),
            t.????advance(8),
            t.????property("ngIf", t.????pipeBind1(54, 33, a.newValue$)),
            t.????advance(2),
            t.????property("ngIf", !t.????pipeBind1(56, 35, a.newValue$)),
            t.????advance(3),
            t.????attributeInterpolate1(
              "data-id",
              "liquidity-protocol.",
              e.title,
              ".slider"
            ),
            t.????property("max", e.maxValue)("min", e.minValue)(
              "value",
              t.????pipeBind1(59, 37, a.selectedValue$)
            )("displayWith", a.formatLabel(e)),
            t.????advance(4),
            t.????textInterpolate(a.formatValue(e.id, e.minValue.toString())),
            t.????advance(2),
            t.????textInterpolate(a.formatValue(e.id, e.maxValue.toString())),
            t.????advance(1),
            t.????property("ngIf", a.defaultVotingValue),
            t.????advance(1),
            t.????property(
              "ngIf",
              a.hasAmountLowWarning || a.hasAmountHighWarning
            ),
            t.????advance(1),
            t.????property(
              "ngIf",
              t.????pipeBind1(68, 39, a.isWalletConnected$) &&
                !a.isFactoryGovernance
            ),
            t.????advance(2),
            t.????property("ngSwitch", a.buttonState),
            t.????advance(1),
            t.????property("ngSwitchCase", "wallet_disconnected"),
            t.????advance(1),
            t.????property("ngSwitchCase", "need_notify"),
            t.????advance(1),
            t.????property("ngSwitchCase", "not_enough_balance"),
            t.????advance(1),
            t.????property("ngSwitchCase", "vote"),
            t.????advance(2),
            t.????property("ngTemplateOutlet", r)(
              "ngTemplateOutletContext",
              t.????pureFunction1(43, Yt, e)
            );
        }
      }
      function qe(s, g) {
        if ((1 & s && t.????element(0, "voting-stats", 93), 2 & s)) {
          const e = t.????nextContext(2);
          t.????property("contractName", e.contractName);
        }
      }
      function tn(s, g) {
        if (
          (1 & s &&
            (t.????template(0, qe, 1, 1, "voting-stats", 89),
            t.????pipe(1, "async"),
            t.????elementStart(2, "div", 90)(3, "p"),
            t.????text(4),
            t.????pipe(5, "transloco"),
            t.????pipe(6, "async"),
            t.????elementEnd(),
            t.????elementStart(7, "p", 91),
            t.????text(
              8,
              " Votes are counted, and a parameter\u2019s value is changed gradually during decay time after voting. LP\u2019s can change Default values separately for each pool. They are determined by liquidity providers using a similar voting system. You can vote or change your vote at any time. "
            ),
            t.????elementEnd()(),
            t.????element(9, "app-votes-table", 92)),
          2 & s)
        ) {
          const e = g.data,
            a = t.????nextContext();
          t.????property(
            "ngIf",
            t.????pipeBind1(1, 4, a.isWalletConnected$) && a.isFactoryGovernance
          ),
            t.????advance(4),
            t.????textInterpolate(
              t.????pipeBind1(5, 6, t.????pipeBind1(6, 8, a.data$).description)
            ),
            t.????advance(5),
            t.????property("param", e.id)("poolAddress", a.poolAddress);
        }
      }
      var Dt = (() => {
        return (
          ((s = Dt || (Dt = {})).walletDisconnected = "wallet_disconnected"),
          (s.notEnoughBalance = "not_enough_balance"),
          (s.needNotify = "need_notify"),
          (s.vote = "vote"),
          Dt
        );
        var s;
      })();
      let en = (() => {
        class s {
          constructor(
            e,
            a,
            r,
            u,
            V,
            Y,
            ut,
            j,
            vt,
            Vt,
            Qt,
            Ut,
            Nt,
            nn,
            on,
            an,
            rn
          ) {
            (this.walletConnectionQuery = e),
              (this.route = a),
              (this.governanceApiService = r),
              (this.governanceTransactionService = u),
              (this.governanceService = V),
              (this.governanceQuery = Y),
              (this.gasPriceQuery = ut),
              (this.farmingQuery = j),
              (this.matDialogService = vt),
              (this.router = Vt),
              (this.erc20Helper = Qt),
              (this.transactionHistoryQuery = Ut),
              (this.webAnalyticsService = Nt),
              (this.contractAddressQuery = nn),
              (this.farmingPoolsService = on),
              (this.activeConnectionQuery = an),
              (this.location = rn),
              (this.contractName = C.a4.mooniswapFactoryV_1_1),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              (this.defaultVotingValue = !0),
              (this.data$ = new O.X(st.Tu)),
              (this.votingBalance = "0"),
              (this.votingBalanceRaw = new O.X("0")),
              (this.votingPower = 0),
              (this.selectedValue = new O.X(null)),
              (this.selectedValue$ = this.selectedValue.pipe(
                (0, z.h)((x) => null !== x)
              )),
              (this.farmingVotingPower = 0),
              (this.votingPowerType$ =
                this.governanceQuery.select("votingPowerType")),
              (this.newValue = new O.X(null)),
              (this.newValue$ = this.newValue.pipe(
                (0, dt.BX)(),
                (0, Q.U)((x) => {
                  const J = this.data$.getValue();
                  return J ? this.formatValue(J.id, x.toString()) : "loading";
                })
              )),
              (this.stakedAmount$ =
                this.governanceQuery.select("userStakedWei")),
              (this.stakedFarmAmount$ = (0, b.a)([
                this.walletConnectionQuery.connectedWalletAddress$,
                this.farmingQuery.selectAll(),
                this.route.params.pipe(
                  (0, Q.U)((x) => x.poolAddress),
                  (0, w.w)((x) =>
                    (0, b.a)([
                      (0, f.of)(x),
                      this.farmingPoolsService.getFarmAddressByPoolAddress(x),
                    ])
                  )
                ),
              ]).pipe(
                (0, Q.U)(([x, J, [q, rt]]) => {
                  var ct;
                  if (!x || !q || !rt) return;
                  const gt =
                    null === (ct = J.find((_t) => _t.poolAddress === q)) ||
                    void 0 === ct
                      ? void 0
                      : ct.poolStaked;
                  return gt ? (0, I.formatUnits)(gt, 18) : void 0;
                })
              )),
              (this.isValidAmount = new O.X(!0)),
              (this.isValidAmount$ = this.isValidAmount.pipe(
                (0, z.h)((x) => null !== x)
              )),
              (this.selectedMinutes = new O.X(null)),
              (this.selectedSeconds = new O.X(null)),
              (this.needToNotifyFactory$ =
                this.governanceQuery.needToNotifyFactory$),
              (this.hasPendingVoteTx = !1),
              (this.forceRefresh$ = new O.X(!0)),
              (this.hasPendingVoteTx$ = this.route.params.pipe(
                (0, w.w)(({ votingFor: x }) =>
                  this.transactionHistoryQuery.transactionsByFilter(() => [
                    (J) => {
                      const rt = J.meta;
                      return (
                        [
                          H.E.voteGovernance,
                          H.E.discardVoteGovernance,
                        ].includes((0, tt.jb)(J)) &&
                        "pending" === J.status &&
                        !!rt &&
                        p.T[rt.voteFor] === x
                      );
                    },
                  ])
                ),
                (0, Q.U)((x) => {
                  this.hasPendingVoteTx = x.length > 0;
                })
              )),
              (this.user$ =
                this.walletConnectionQuery.connectedWalletAddress$.pipe(
                  (0, w.w)(
                    (x) => (
                      x && this.governanceApiService.getUser$(x),
                      (0, f.of)(st._Z)
                    )
                  )
                )),
              (this.subscription = new d.w0()),
              (this.isUserVoted$ = new O.X(!1)),
              (this.lastSuccessVoteTx$ = new O.X({ timestamp: 0, type: "" })),
              (this.needToDecline$ = (0, b.a)([
                this.isUserVoted$.pipe((0, it.x)()),
                this.lastSuccessVoteTx$,
              ]).pipe(
                (0, Q.U)((x) => {
                  const [J, q] = x,
                    rt = null == q ? void 0 : q.timestamp;
                  if (0 === rt) return J;
                  if (Math.floor(Date.now() / 1e3) - rt < 90) {
                    if (q.type === H.E.voteGovernance) return !0;
                    if (q.type === H.E.discardVoteGovernance) return !1;
                  }
                  return J;
                }),
                (0, it.x)(),
                (0, y.d)({ refCount: !0, bufferSize: 1 })
              ));
            const sn = this.route.params.pipe(
                (0, w.w)((x) =>
                  x.poolAddress
                    ? (0, f.of)()
                    : this.transactionHistoryQuery
                        .transactionsByFilter(() => [
                          (q) => {
                            const ct = q.meta;
                            return (
                              [
                                H.E.voteGovernance,
                                H.E.discardVoteGovernance,
                              ].includes((0, tt.jb)(q)) &&
                              "confirmed" === q.status &&
                              !!ct &&
                              p.T[ct.voteFor] === x.votingFor
                            );
                          },
                        ])
                        .pipe(
                          (0, P.b)((q) => {
                            const rt = q.sort(
                                (gt, _t) => _t.mined_at - gt.mined_at
                              ),
                              ct = rt.length ? rt[0] : null;
                            ct &&
                              this.lastSuccessVoteTx$.next({
                                type: (0, tt.jb)(ct),
                                timestamp: ct.mined_at,
                              });
                          })
                        )
                )
              ),
              cn = (0, b.a)([
                this.votingPowerType$,
                this.route.params.pipe(
                  (0, w.w)((x) => {
                    const J = x.poolAddress;
                    return (0, b.a)([
                      (0, f.of)(J),
                      (0, f.of)(x.votingFor),
                      this.farmingPoolsService.getFarmAddressByPoolAddress(J),
                    ]);
                  })
                ),
                this.selectedValue$,
                this.walletConnectionQuery.connectedWalletAddress$,
                this.contractAddressQuery.getContractAddressOnce(
                  C.a4.mooniswapFactoryV_1_1
                ),
                this.contractAddressQuery.getContractAddressOnce(
                  C.a4.exchangeGovernance
                ),
              ]).pipe(
                (0, w.w)((x) => {
                  const [J, [q, rt, ct], gt, _t, xt, Ct] = x;
                  return _t &&
                    q !== xt &&
                    q !== Ct &&
                    ct &&
                    "VoteUsingFarmingContract" === J
                    ? (0, b.a)([
                        (0, f.of)({ selectedValue: gt, votingFor: rt }),
                        this.farmingQuery.selectEntity(ct),
                        this.governanceTransactionService.getUserVoteFor$(
                          ct,
                          rt,
                          _t,
                          !0
                        ),
                        this.activeConnectionQuery.currentChainId$,
                      ])
                    : E.C;
                }),
                (0, P.b)((x) => {
                  const [{ selectedValue: J, votingFor: q }, rt, ct, gt] = x;
                  if (!rt) return E.C;
                  const xt = c.O$.from(rt.poolStaked),
                    Ct = (0, st.ch)(q, J),
                    It = this.isUserVoted$.getValue(),
                    yt = this.data$.getValue(),
                    Lt = (0, m.Pz)(yt.totalVotes.toString(), 18),
                    zt = yt.virtualDetails.newValue,
                    $t = (0, st.mm)(gt);
                  let St;
                  xt.gt(0) && (St = (0, st.tp)(q, +Ct, $t).percent.toString()),
                    Lt.gt(0) &&
                      ((St = (0, st.tp)(
                        q,
                        +Zt(ct, Ct, zt, xt, Lt, It, !1),
                        $t
                      ).percent.toString()),
                      +St > yt.maxValue && (St = yt.maxValue.toString()),
                      +St < yt.minValue && (St = yt.minValue.toString())),
                    this.newValue.next(St);
                })
              ),
              ln = (0, b.a)([
                this.walletConnectionQuery.connectedWalletAddress$,
                this.votingPowerType$,
                this.route.params.pipe(
                  (0, w.w)((x) => {
                    const J = x.poolAddress;
                    return (0, b.a)([
                      (0, f.of)(J),
                      (0, f.of)(x.votingFor),
                      this.farmingPoolsService.getFarmAddressByPoolAddress(J),
                    ]);
                  })
                ),
                this.contractAddressQuery.getContractAddressOnce(
                  C.a4.mooniswapFactoryV_1_1
                ),
                this.contractAddressQuery.getContractAddressOnce(
                  C.a4.exchangeGovernance
                ),
              ]).pipe(
                (0, w.w)((x) => {
                  const [J, q, [rt, ct, gt], _t, xt] = x;
                  return J &&
                    rt !== _t &&
                    rt !== xt &&
                    gt &&
                    "VoteUsingFarmingContract" === q
                    ? (0, b.a)([
                        (0, f.of)(ct),
                        this.farmingQuery.selectEntity(gt),
                      ])
                    : E.C;
                }),
                (0, P.b)(([x, J]) => {
                  if (!J) return;
                  const {
                    poolStaked: q,
                    totalStaked: rt,
                    farmingPoolData: ct,
                    poolsTotalSupply: gt,
                  } = J;
                  if (!q || !rt || !gt) return;
                  const _t = c.O$.from(q),
                    xt = c.O$.from(rt);
                  if (!(0, st.z7)(x, ct)) return;
                  const It = c.O$.from(gt),
                    yt = _t.mul(m.BD).div(xt).mul(xt.mul(m.BD).div(It));
                  (this.farmingVotingPower = (+yt.toString() / 1e36) * 100),
                    (this.buttonState = _t.lte(c.O$.from(0))
                      ? Dt.notEnoughBalance
                      : Dt.vote);
                })
              ),
              kt = (0, b.a)([
                this.contractAddressQuery.getContractAddressOnce(
                  C.a4.exchangeGovernance
                ),
                this.route.params,
                this.governanceQuery.currentChainVoteOnPoolCards$,
                this.governanceQuery.currentChainVoteOnFactoryCards$,
              ]).pipe(
                (0, Q.U)((x) => {
                  const [J, q, rt, ct] = x,
                    gt = q.votingFor,
                    _t = q.poolAddress;
                  let xt;
                  xt = _t && _t !== J ? rt : ct;
                  const Ct = xt.find((It) => It.id === gt);
                  return { votingFor: gt, poolAddress: _t, cardData: Ct };
                }),
                (0, z.h)(({ cardData: x }) => !!x),
                (0, y.d)({ refCount: !0, bufferSize: 1 })
              );
            this.pageParams$ = kt;
            const dn = kt.pipe(
                (0, P.b)((x) => {
                  this.data$.next(x.cardData);
                })
              ),
              Jt = (0, b.a)([
                kt,
                this.walletConnectionQuery.isWalletConnected$,
                this.forceRefresh$,
              ]).pipe(
                (0, w.w)(([x]) =>
                  this.syncData(x).pipe(
                    (0, S.a)((J) =>
                      J.pipe(
                        (0, T.g)(Z.N.refreshTime.balancesAndAllowancesDefault)
                      )
                    )
                  )
                )
              ),
              pn = (0, b.a)([
                (0, b.a)([
                  this.walletConnectionQuery.connectedWalletAddress$,
                  Jt,
                ]),
                (0, b.a)([
                  this.votingPowerType$,
                  this.stakedAmount$,
                  this.selectedValue$,
                  this.isUserVoted$.pipe((0, it.x)()),
                ]),
                kt,
                this.activeConnectionQuery.currentChainId$,
              ]).pipe(
                (0, P.b)((x) => {
                  const [[J], [q, rt, ct, gt], _t, xt] = x;
                  if (J) {
                    const Ct = this.data$.getValue();
                    if (!this.isFactoryGovernance && "VoteUsingPoolToken" !== q)
                      return;
                    const It = this.isFactoryGovernance
                        ? c.O$.from(rt)
                        : Ct.votingBalance,
                      yt = c.O$.from(Ct.virtualDetails.newValue),
                      Lt = (0, st.ch)(_t.votingFor, ct),
                      zt = Ct.rawValueOld,
                      $t = (0, m.Pz)(Ct.totalVotes.toString(), 18),
                      St = _t.votingFor,
                      Wt = (0, st.mm)(xt);
                    let Tt;
                    It.gt(0) &&
                      (Tt = (0, st.tp)(
                        St,
                        +ct.toString(),
                        Wt
                      ).percent.toString());
                    const un = +Zt(
                      zt,
                      Lt,
                      yt,
                      It,
                      $t,
                      gt,
                      this.isFactoryGovernance
                    );
                    $t.gt(0) &&
                      ((Tt = (0, st.tp)(St, un, Wt).percent.toString()),
                      +Tt > Ct.maxValue && (Tt = Ct.maxValue.toString()),
                      +Tt < Ct.minValue && (Tt = Ct.minValue.toString())),
                      $t.eq(0) && It.eq(0) && (Tt = Ct.currentValue),
                      this.newValue.next(Tt);
                  }
                })
              ),
              hn = (0, b.a)([
                this.needToNotifyFactory$,
                this.walletConnectionQuery.connectedWalletAddress$,
                this.votingBalanceRaw.asObservable(),
                this.votingPowerType$,
              ]).pipe(
                (0, P.b)((x) => {
                  const [J, q, rt, ct] = x;
                  if (!q)
                    return (
                      this.governanceService.setState(bt.Y.walletDisconnected),
                      void (this.buttonState = Dt.walletDisconnected)
                    );
                  J
                    ? (this.buttonState = Dt.needNotify)
                    : (this.isPoolGovernance &&
                        "VoteUsingFarmingContract" == ct) ||
                      (this.buttonState = c.O$.from(rt).lte(c.O$.from(0))
                        ? Dt.notEnoughBalance
                        : Dt.vote);
                })
              );
            this.governanceTransactionService.startPipelines(),
              this.subscription.add(
                sn.subscribe({ error: (x) => (0, D.eK)(x, "av0010") })
              ),
              this.subscription.add(
                dn.subscribe({ error: (x) => (0, D.eK)(x, "av0012") })
              ),
              this.subscription.add(
                Jt.subscribe({ error: (x) => (0, D.eK)(x, "av0013") })
              ),
              this.subscription.add(
                hn.subscribe({ error: (x) => (0, D.eK)(x, "av0014") })
              ),
              this.subscription.add(
                pn.subscribe({ error: (x) => (0, D.eK)(x, "av0015") })
              ),
              this.subscription.add(
                ln.subscribe({ error: (x) => (0, D.eK)(x, "av0016") })
              ),
              this.subscription.add(
                cn.subscribe({ error: (x) => (0, D.eK)(x, "av0018") })
              ),
              (this.customAmountControl = new o.UntypedFormControl("", [
                o.Validators.required,
              ])),
              (this.customSecondsControl = new o.UntypedFormControl("", [
                o.Validators.required,
              ])),
              (this.customMinutesControl = new o.UntypedFormControl("", [
                o.Validators.required,
              ]));
          }
          get hasAmountWarning() {
            return this.hasAmountLowWarning || this.hasAmountHighWarning;
          }
          get hasAmountLowWarning() {
            var e;
            try {
              const a =
                  null === (e = this.data$.getValue()) || void 0 === e
                    ? void 0
                    : e.warningTextLow,
                r = this.selectedValue.getValue();
              if (null === r) return !1;
              const u = parseFloat(r.toString()),
                V = this.data$.getValue();
              return u <= V.minValueForWarning && u != V.defaultValue && !!a;
            } catch (a) {
              Ht.error(a);
            }
            return !1;
          }
          get hasAmountHighWarning() {
            var e;
            try {
              const a =
                  null === (e = this.data$.getValue()) || void 0 === e
                    ? void 0
                    : e.warningTextHigh,
                r = this.selectedValue.getValue();
              if (null === r) return !1;
              const u = parseFloat(r.toString()),
                V = this.data$.getValue();
              return u >= V.maxValueForWarning && u !== V.defaultValue && !!a;
            } catch (a) {
              Ht.error(a);
            }
            return !1;
          }
          get isFactoryGovernance() {
            return !this.route.snapshot.params.poolAddress;
          }
          get isPoolGovernance() {
            var e;
            return (
              (null === (e = this.route.snapshot.params.poolAddress) ||
              void 0 === e
                ? void 0
                : e.length) > 0
            );
          }
          get customAmountInput() {
            return this.inputElementRef.nativeElement;
          }
          get customAmountInputMinutes() {
            return this.inputElementRefMin.nativeElement;
          }
          get customAmountInputSeconds() {
            return this.inputElementRefSec.nativeElement;
          }
          navigateBack() {
            this.location.back();
          }
          ngOnInit() {
            this.data$
              .pipe(
                (0, $.q)(1),
                (0, P.b)((e) => {
                  this.webAnalyticsService.pageView(
                    `/${e.link}`,
                    `DAO / Governance / Voting For: ${e.title}`
                  );
                }),
                (0, it.x)()
              )
              .subscribe({ error: (e) => (0, D.eK)(e, "av0008") });
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          onVoteValueSliderChange(e) {
            const a = e.value;
            this.selectedValue.next(a),
              this.selectedMinutes.next(+ht(a)),
              this.selectedSeconds.next(+ft(a)),
              a >= this.data$.getValue().minValue &&
                this.isValidAmount.next(!0);
          }
          reset() {
            const e = this.data$.getValue().defaultValue;
            this.selectedValue.next(+e),
              this.customAmountControl.setValue(e),
              this.selectedMinutes.next(+ht(+e)),
              this.selectedSeconds.next(+ft(+e)),
              this.isValidAmount.next(!0);
          }
          vote(e) {
            (0, b.a)([
              this.pageParams$,
              this.selectedValue$,
              this.votingPowerType$,
            ])
              .pipe(
                (0, $.q)(1),
                (0, B.R)((0, _.H)(500)),
                (0, P.b)(([a, r, u]) => {
                  this.getPoolAddress(a)
                    .pipe(
                      (0, w.w)((V) =>
                        (0, b.a)([
                          (0, f.of)(V),
                          this.farmingPoolsService.getFarmAddressByPoolAddress(
                            V
                          ),
                        ])
                      )
                    )
                    .subscribe(
                      ([V, Y]) => {
                        const ut = !(
                          "VoteUsingFarmingContract" !== u ||
                          !this.isPoolGovernance
                        );
                        this.governanceTransactionService.voteForFactoryParam(
                          ut ? Y : V,
                          e,
                          (0, st.ch)(e, r),
                          ut
                        );
                      },
                      (V) => (0, D.eK)(V, "av0003")
                    );
                })
              )
              .subscribe({ error: (a) => (0, D.eK)(a, "av0004") });
          }
          removeVote(e) {
            (0, b.a)([this.pageParams$, this.votingPowerType$])
              .pipe(
                (0, $.q)(1),
                (0, B.R)((0, _.H)(500)),
                (0, P.b)(([a, r]) => {
                  this.getPoolAddress(a)
                    .pipe(
                      (0, w.w)((u) =>
                        (0, b.a)([
                          (0, f.of)(u),
                          this.farmingPoolsService.getFarmAddressByPoolAddress(
                            u
                          ),
                        ])
                      )
                    )
                    .subscribe(
                      ([u, V]) => {
                        const Y = !(
                          "VoteUsingFarmingContract" !== r ||
                          !this.isPoolGovernance
                        );
                        this.governanceTransactionService.discardVoteForFactoryParam(
                          Y ? V : u,
                          e,
                          Y
                        );
                      },
                      (u) => (0, D.eK)(u, "av0005")
                    );
                })
              )
              .subscribe({ error: (a) => (0, D.eK)(a, "av0006") });
          }
          valueByTimeType$(e) {
            return this.selectedValue$.pipe(
              (0, Q.U)(() => {
                var a, r, u, V;
                return "minutes" === e
                  ? null ===
                      (r =
                        null === (a = this.selectedMinutes) || void 0 === a
                          ? void 0
                          : a.getValue()) || void 0 === r
                    ? void 0
                    : r.toString()
                  : null ===
                      (V =
                        null === (u = this.selectedSeconds) || void 0 === u
                          ? void 0
                          : u.getValue()) || void 0 === V
                  ? void 0
                  : V.toString();
              })
            );
          }
          formatValue(e, a) {
            return (0, st.X4)(e, a);
          }
          handlePasteTime(e) {
            return (0, R.nX)(e, 0);
          }
          handlePaste(e) {
            return (0, R.nX)(e, 2);
          }
          handleInputMinutes() {
            const e = this.data$.getValue().minValue,
              a = this.data$.getValue().maxValue,
              r = this.selectedValue.getValue(),
              V = W(e, r),
              Y = (function l(s, g) {
                return ht(s);
              })(a),
              ut = ft(this.selectedValue.getValue());
            let j = this.customAmountInputMinutes.value;
            if (!j && ((j = this.customMinutesControl.value), !j))
              return (
                this.isValidAmount.next(!1),
                void (
                  r < e &&
                  (this.customMinutesControl.setValue(+ht(e)),
                  this.customSecondsControl.setValue(+ft(e)),
                  this.selectedValue.next(e),
                  this.selectedMinutes.next(+ht(e)))
                )
              );
            if ((r >= e && this.isValidAmount.next(!0), +j >= +Y))
              return (
                this.customSecondsControl.setValue(V),
                this.customMinutesControl.setValue(Y),
                this.selectedSeconds.next(+V),
                this.selectedMinutes.next(+Y),
                void this.selectedValue.next(pt(V, Y))
              );
            if (
              (1 === j.length &&
                "0" === j[0] &&
                +this.selectedMinutes.getValue() < +V &&
                (this.customSecondsControl.setValue(V),
                this.selectedSeconds.next(+V)),
              "0" === j[0] && j.length > 1 && (j = j.slice(1, j.length)),
              +j < 0)
            )
              return (
                this.customMinutesControl.setValue("0"),
                this.selectedValue.next(pt(ut, "0")),
                void this.selectedMinutes.next(0)
              );
            if (+j > +Y)
              return (
                this.customMinutesControl.setValue(Y),
                this.selectedValue.next(pt("0", Y)),
                void this.selectedMinutes.next(+Y)
              );
            this.customMinutesControl.setValue(j),
              this.selectedMinutes.next(+j);
            const vt = pt(ut, j);
            this.selectedValue.next(vt), vt < e && this.isValidAmount.next(!1);
          }
          handleInputSeconds() {
            const e = this.data$.getValue().minValue,
              a = this.data$.getValue().maxValue,
              r = this.selectedValue.getValue(),
              u = W(e, r),
              Y = ht(this.selectedValue.getValue()),
              ut = ht(a);
            let j = this.customAmountInputSeconds.value;
            if (!+j && ((j = this.customSecondsControl.value), !+j))
              return (
                r < e &&
                  (this.customMinutesControl.setValue(+ht(e)),
                  this.customSecondsControl.setValue(+ft(e)),
                  this.selectedSeconds.next(+ft(e)),
                  this.selectedValue.next(e)),
                void this.isValidAmount.next(!1)
              );
            if (
              (r >= e && this.isValidAmount.next(!0),
              "0" === j[0] && 2 === j.length && (j = j.slice(1, j.length)),
              +Y >= +ut)
            )
              return (
                this.customSecondsControl.setValue(u),
                this.selectedSeconds.next(+u),
                void this.selectedValue.next(pt(u, Y))
              );
            if (+j < +u) return void this.isValidAmount.next(!1);
            if (+j > 59)
              return (
                this.customSecondsControl.setValue("59"),
                this.selectedSeconds.next(59),
                void this.selectedValue.next(pt("59", Y))
              );
            this.customSecondsControl.setValue(j),
              this.selectedSeconds.next(+j);
            const vt = pt(j, Y);
            this.selectedValue.next(vt), vt < e && this.isValidAmount.next(!1);
          }
          submitValueMinutes() {
            this.handleInputMinutes();
          }
          submitValueSeconds() {
            this.handleInputSeconds();
          }
          submitValue() {
            this.handleInput();
          }
          handleInput() {
            const e = this.data$.getValue().minValue,
              a = this.data$.getValue().maxValue;
            let r = this.customAmountInput.value;
            if (!r && ((r = this.customAmountControl.value), !r))
              return void this.isValidAmount.next(!1);
            if (((r = r.toString().replace(",", ".")), isNaN(+r)))
              return (
                this.customAmountControl.setValue(e),
                void this.selectedValue.next(e)
              );
            if ((+r >= e && this.isValidAmount.next(!0), +r > a))
              return (
                this.customAmountControl.setValue(a),
                void this.selectedValue.next(a)
              );
            if (+r < e && 0 === e)
              return (
                this.customAmountControl.setValue(e),
                void this.selectedValue.next(e)
              );
            if (+r < e && 0 !== e) return void this.isValidAmount.next(!1);
            r.length >= 2 &&
              "0" === r[0] &&
              "." !== r[1] &&
              (r = r.slice(1, r.length));
            const u = r.indexOf(".");
            u > 0 &&
              u + 1 <= r.length - 1 &&
              r.slice(u + 1).length > 2 &&
              (r = (+r).toFixed(2)),
              "." === r[0] &&
                r.slice(1).length > 2 &&
                ((r = (+("0" + r)).toFixed(2)), (r = r.slice(1))),
              this.customAmountControl.setValue(r),
              this.selectedValue.next(+r);
          }
          onlyNumberDotOrCommaKey(e) {
            const a = e.key;
            if (!R.SH.test(a)) return !1;
            let r = this.customAmountInput.value;
            if (!r) {
              if (
                ((r = this.customAmountControl.value),
                !r && ("." === a || "," === a))
              )
                return !1;
              if (!r) return;
            }
            r = r.toString().replace(",", ".");
            const u = r.includes(".");
            return (
              !(
                (("." === e.key || "," === e.key) && u) ||
                (1 === r.length && "." === r[0])
              ) && void 0
            );
          }
          onlyNumberAndMinutes(e) {
            if (!R.U.test(e.key)) return !1;
          }
          onlyNumberAndSeconds(e) {
            const r = this.customAmountInputSeconds.value;
            if (!R.U.test(e.key) || 2 === r.toString().length) return !1;
          }
          getColor(e) {
            switch (e) {
              case h.y.defaultSwapFee:
              case h.y.swapFee:
                return ot.D[0];
              case h.y.defaultDecayPeriod:
              case h.y.decayPeriod:
                return ot.D[1];
              case h.y.referralShare:
              case h.y.slippageFee:
                return ot.D[2];
              case h.y.governanceShare:
                return ot.D[3];
              case h.y.defaultSlippageFee:
                return ot.D[4];
              default:
                return ot.D[1];
            }
          }
          notify() {
            this.governanceTransactionService.notify();
          }
          formatLabel(e) {
            return (a) => (0, st.X4)(e.id, null == a ? void 0 : a.toString());
          }
          syncData(e) {
            return (0, b.a)([
              this.walletConnectionQuery.connectedWalletAddress$,
              this.getPoolAddress(e),
            ]).pipe(
              (0, w.w)(([a, r]) => {
                const u = e.votingFor;
                return this.getDataByWallet(r, u, a).pipe(
                  (0, w.w)(({ votingBalance$: V, yourValue$: Y }) => {
                    const ut = this.governanceTransactionService
                        .getParamValue$(r, u, !1)
                        .pipe((0, $.q)(1)),
                      j =
                        e.poolAddress !== r
                          ? this.governanceApiService
                              .getGovernanceDetails()
                              .pipe((0, $.q)(1))
                          : this.governanceApiService
                              .getPoolParamsValues$(r)
                              .pipe((0, $.q)(1));
                    return (0, k.D)({
                      votingBalance: V,
                      yourValue: Y,
                      currentValue: ut,
                      governanceDetails: j,
                      chainId: this.activeConnectionQuery.currentChainId$.pipe(
                        (0, $.q)(1)
                      ),
                    });
                  })
                );
              }),
              (0, P.b)(
                ({
                  currentValue: a,
                  votingBalance: r,
                  yourValue: u,
                  governanceDetails: V,
                  chainId: Y,
                }) => {
                  const ut = (0, st.mm)(Y),
                    { percentFromMax: j, percent: vt } = (0, st.tp)(
                      e.votingFor,
                      +a.toString(),
                      ut
                    ),
                    Vt = V.totalSupply.toString(),
                    Qt = (function X(s, g) {
                      const e = (function Mt(s, g) {
                        switch (s) {
                          case h.y.defaultSwapFee:
                            return g.virtualDefaultFee;
                          case h.y.defaultSlippageFee:
                            return g.virtualDefaultSlippageFee;
                          case h.y.defaultDecayPeriod:
                            return g.virtualDefaultDecayPeriod;
                          case h.y.governanceShare:
                            return g.virtualGovernanceShare;
                          case h.y.referralShare:
                            return g.virtualReferralShare;
                        }
                        return null;
                      })(s, g);
                      if (e) return e;
                      const a = (function wt(s, g) {
                        switch (s) {
                          case h.y.decayPeriod:
                            return g.virtualDecayPeriod;
                          case h.y.slippageFee:
                            return g.virtualSlippageFee;
                          case h.y.swapFee:
                            return g.virtualSwapFee;
                        }
                        return null;
                      })(s, g);
                      if (a) return a;
                      throw new Error("unknown param " + s);
                    })(e.votingFor, V);
                  null === this.selectedValue.value &&
                    (this.selectedValue.next(e.cardData.defaultValue),
                    this.selectedSeconds.next(+ft(e.cardData.defaultValue)),
                    this.selectedMinutes.next(+ht(e.cardData.defaultValue)));
                  const Ut = Object.assign(
                    Object.assign({}, this.data$.value),
                    {
                      currentValue: vt.toString(),
                      value: j,
                      virtualDetails: Qt,
                      votingBalance: r,
                      totalSupply: c.O$.from(V.totalSupply),
                      rawValueOld: u,
                    }
                  );
                  e.poolAddress &&
                    ((Ut.yourVotes = +(0, m.kg)(r.toString(), 18, 4)),
                    (Ut.totalVotes = +(0, m.kg)(Vt, 18, 4))),
                    this.data$.next(Ut),
                    (this.votingBalance = (0, m.kg)(r.toString(), 18, 4)),
                    this.votingBalanceRaw.next(r.toString());
                  const Nt = r.mul(m.BD).div(Vt);
                  this.votingPower = +Nt.toString() / 1e18;
                }
              ),
              (0, w.w)(() =>
                this.getPoolAddress(e).pipe(
                  (0, w.w)((a) => {
                    const r = this.governanceApiService.getParamData$(
                        a,
                        e.votingFor
                      ),
                      u = this.walletConnectionQuery.walletAddress,
                      V = u
                        ? this.governanceApiService.getUser$(u)
                        : (0, f.of)(st._Z),
                      Y = this.isPoolGovernance ? (0, f.of)(!0) : V;
                    return (0, b.a)([r, Y]);
                  })
                )
              ),
              (0, P.b)(([{ totalVoters: a, totalVotes: r }, u]) => {
                const V = Object.assign(Object.assign({}, this.data$.value), {
                  addresses: +a,
                  totalVotes: +(0, m.kg)(r, 18, 4),
                });
                this.isPoolGovernance ||
                  (this.isUserVoted$.next(u[e.votingFor + "HasVote"]),
                  (V.yourVotes = +(0, m.kg)(
                    u[e.votingFor + "VoteAmount"],
                    18,
                    4
                  ))),
                  this.data$.next(V);
              }),
              (0, L.K)((a) => (Ht.log(a), (0, f.of)(""))),
              (0, $.q)(1)
            );
          }
          getDataByWallet(e, a, r) {
            return r
              ? this.contractAddressQuery
                  .getContractsAddressesOnce(
                    C.a4.mooniswapFactoryV_1_1,
                    C.a4.exchangeGovernance
                  )
                  .pipe(
                    (0, Q.U)(([u, V]) => {
                      const ut =
                        e === V || e === u
                          ? this.governanceTransactionService.getStakedAmount$(
                              e,
                              r,
                              !1
                            )
                          : this.erc20Helper.getErc20Balance(e, r);
                      return {
                        yourValue$: this.governanceTransactionService
                          .getUserVoteFor$(e, a, r, !1)
                          .pipe((0, $.q)(1)),
                        votingBalance$: ut.pipe((0, $.q)(1)),
                      };
                    })
                  )
              : (0, f.of)({
                  votingBalance$: (0, f.of)(G.Y),
                  yourValue$: (0, f.of)(G.Y),
                });
          }
          getPoolAddress(e) {
            return e.poolAddress
              ? (0, f.of)(e.poolAddress)
              : this.contractAddressQuery.getContractAddressOnce(
                  C.a4.mooniswapFactoryV_1_1
                );
          }
        }
        return (
          (s.??fac = function (e) {
            return new (e || s)(
              t.????directiveInject(Ot.r),
              t.????directiveInject(Ft.gz),
              t.????directiveInject(v.rU),
              t.????directiveInject(A.h),
              t.????directiveInject(U.n),
              t.????directiveInject(K.R),
              t.????directiveInject(et.j),
              t.????directiveInject(N.c5),
              t.????directiveInject(at.uw),
              t.????directiveInject(Ft.F0),
              t.????directiveInject(lt.ZU),
              t.????directiveInject(Et.x),
              t.????directiveInject(Bt.y),
              t.????directiveInject(Rt.O),
              t.????directiveInject(Kt.R),
              t.????directiveInject(jt.r),
              t.????directiveInject(mt.Ye)
            );
          }),
          (s.??cmp = t.????defineComponent({
            type: s,
            selectors: [["app-vote-page"]],
            viewQuery: function (e, a) {
              if (
                (1 & e &&
                  (t.????viewQuery(Ee, 5),
                  t.????viewQuery(Pe, 5),
                  t.????viewQuery(xe, 5)),
                2 & e)
              ) {
                let r;
                t.????queryRefresh((r = t.????loadQuery())) &&
                  (a.inputElementRef = r.first),
                  t.????queryRefresh((r = t.????loadQuery())) &&
                    (a.inputElementRefMin = r.first),
                  t.????queryRefresh((r = t.????loadQuery())) &&
                    (a.inputElementRefSec = r.first);
              }
            },
            decls: 4,
            vars: 3,
            consts: [
              [4, "ngIf"],
              ["info", ""],
              [1, "vote-page-back", 3, "click"],
              ["width", "16", "height", "16"],
              [0, "xlink", "href", "assets/images/icons/arrow.svg#arrow"],
              ["transloco", "button.back"],
              [1, "vote-page-title"],
              [1, "vote-page-align"],
              [1, "vote-info"],
              [1, "vote-info-radial-gauge"],
              [1, "vote-info-percents-time"],
              [
                "transloco",
                "governance.current-result-new",
                1,
                "vote-info-current-result",
              ],
              [1, "radial-gauge", 3, "value", "color"],
              [1, "votes-block"],
              [1, "votes-block-row"],
              ["transloco", "votingItem.total-votes", 1, "votes-block-title"],
              [1, "votes-block-value"],
              ["class", "votes-block-row", 4, "ngIf"],
              ["transloco", "votePage.addresses", 1, "votes-block-title"],
              [1, "vote-page-info-desktop"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [1, "voting-card"],
              [1, "voting-card-header"],
              ["transloco", "votePage.voting", 1, "title"],
              ["transloco", "button.reset", 1, "reset-button", 3, "click"],
              [1, "field-header-fix"],
              [1, "info-block"],
              ["transloco", "votePage.current-value", 1, "value-title"],
              [1, "info-value"],
              [1, "value-separator"],
              [1, "direction-icon"],
              ["width", "16", "height", "18"],
              [0, "xlink", "href", "assets/images/icons/tx-arrow.svg#tx-arrow"],
              ["transloco", "votePage.new-value", 1, "value-title"],
              [1, "vote-block-wrap"],
              [
                "step",
                "0.01",
                "thumbLabel",
                "true",
                "tickInterval",
                "0.1",
                1,
                "vote-default-slider",
                3,
                "max",
                "min",
                "value",
                "displayWith",
                "change",
              ],
              [1, "slider-limits"],
              ["class", "vote-page-warning-box", 4, "ngIf"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [1, "vote-page-info-mobile"],
              ["transloco", "votePage.voting-for"],
              ["transloco", "votePage.pool"],
              [1, "vote-page-title-type"],
              ["transloco", "votingItem.your-votes", 1, "votes-block-title"],
              [
                "class",
                "field-header-fix-loader",
                "src",
                "assets/images/loader_gray.svg",
                "alt",
                "loading",
                4,
                "ngIf",
              ],
              ["class", "info-value", 4, "ngIf"],
              [
                "src",
                "assets/images/loader_gray.svg",
                "alt",
                "loading",
                1,
                "field-header-fix-loader",
              ],
              ["class", "vote-block-wrap", 4, "ngIf"],
              [
                "inputmode",
                "decimal",
                "autocomplete",
                "off",
                1,
                "vote-custom-input",
                3,
                "placeholder",
                "ngClass",
                "value",
                "formControl",
                "keypress",
                "keyup",
                "input",
                "paste",
              ],
              ["customAmountInput", ""],
              [1, "vote-custom-input-units"],
              [1, "vote-input-wrap-grid"],
              [
                "inputmode",
                "number",
                "autocomplete",
                "off",
                1,
                "vote-custom-input",
                3,
                "placeholder",
                "value",
                "formControl",
                "keypress",
                "input",
                "keyup",
                "paste",
              ],
              ["customAmountInputMinutes", ""],
              ["transloco", "votePage.minutes", 1, "vote-custom-input-units"],
              ["customAmountInputSeconds", ""],
              ["transloco", "votePage.seconds", 1, "vote-custom-input-units"],
              [1, "vote-page-warning-box"],
              ["width", "20", "height", "18"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/attention-triangle.svg#attention-triangle",
              ],
              ["data-id", "voting-warning-box-amount-low", 4, "ngIf"],
              ["data-id", "voting-warning-box-amount-high", 4, "ngIf"],
              ["data-id", "voting-warning-box-amount-low"],
              ["data-id", "voting-warning-box-amount-high"],
              [
                3,
                "votingPower",
                "votingBalance",
                "farmingVotingPower",
                "stakedBalance",
              ],
              [1, "voting-mode-switch"],
              ["walletConnect", "", "color", "blue", "fullWidth", "true"],
              ["transloco", "button.connect-wallet2"],
              ["color", "blue", "fullWidth", "true", 3, "clicked"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/magic.svg#magic"],
              ["transloco", "votePage.migrate-module2"],
              ["color", "blue", "fullWidth", "true", 3, "disabled"],
              ["transloco", "button.insufficient-balance"],
              ["class", "voting-buttons-two-column", 4, "ngIf"],
              [1, "voting-buttons-two-column"],
              [
                "data-id",
                "liquidity-protocol.remove-votes-button",
                "color",
                "red",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "votePage.remove-votes2"],
              [
                "data-id",
                "liquidity-protocol.vote-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "votePage.vote"],
              [
                "color",
                "red",
                "data-id",
                "liquidity-protocol.remove-votes-button",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "liquidity-protocol.vote-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
                4,
                "ngIf",
              ],
              [
                "color",
                "red",
                "data-id",
                "liquidity-protocol.remove-votes-button",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["color", "red", "fullWidth", "true", 3, "disabled", 4, "ngIf"],
              [
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                4,
                "ngIf",
              ],
              ["color", "red", "fullWidth", "true", 3, "disabled"],
              ["transloco", "votePage.pending"],
              ["color", "accentBlue", "fullWidth", "true", 3, "disabled"],
              ["class", "voting-stats", 3, "contractName", 4, "ngIf"],
              [1, "vote-info-text"],
              ["transloco", "votePage.vote-page-text2"],
              [3, "param", "poolAddress"],
              [1, "voting-stats", 3, "contractName"],
            ],
            template: function (e, a) {
              1 & e &&
                (t.????template(0, Je, 76, 45, "ng-container", 0),
                t.????pipe(1, "async"),
                t.????template(
                  2,
                  tn,
                  10,
                  10,
                  "ng-template",
                  null,
                  1,
                  t.????templateRefExtractor
                )),
                2 & e && t.????property("ngIf", t.????pipeBind1(1, 1, a.data$));
            },
            dependencies: [
              mt.mk,
              mt.O5,
              mt.tP,
              mt.RF,
              mt.n9,
              At.KI,
              Gt.pH,
              o.DefaultValueAccessor,
              o.NgControlStatus,
              o.FormControlDirective,
              qt.r,
              te.M,
              ee.V,
              he,
              ue,
              me,
              fe.E,
              mt.Ov,
              At.Ot,
              Ce,
            ],
            styles: [
              "[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:1180px;margin:0 auto}.vote-info[_ngcontent-%COMP%]{padding:16px 32px;border-radius:16px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:16px;border:1px solid var(--1inch-border-10)}.votes-block[_ngcontent-%COMP%]{width:100%;margin-top:24px}.votes-block-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:16px}.votes-block-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.votes-block-title[_ngcontent-%COMP%]{font-size:13px;line-height:15px;color:var(--1inch__ui-02)}.vote-page-title-type[_ngcontent-%COMP%]{text-transform:lowercase}.votes-block-value[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.vote-page-align[_ngcontent-%COMP%]{display:block}.vote-page-warning-box[_ngcontent-%COMP%]{display:grid;grid-column-gap:16px;grid-template-columns:20px 1fr;align-items:center;margin-bottom:24px;border-radius:16px;padding:16px;line-height:20px;background:var(--1inch__background__warning);color:var(--1inch__text-and-icons__warning)}.vote-page-back[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:16px;line-height:26px;text-decoration:none;margin-bottom:16px;color:var(--1inch__ui-02)}.vote-page-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:rotate(90deg);margin-right:8px;color:var(--1inch__ui-02)}.vote-page-back[_ngcontent-%COMP%]:hover{cursor:pointer}.vote-page-title[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:700;margin-bottom:16px}.vote-page-info-desktop[_ngcontent-%COMP%]{display:none}.vote-page-info-mobile[_ngcontent-%COMP%]{display:block}.voting-stats[_ngcontent-%COMP%]{display:block;margin-top:16px}app-button[_ngcontent-%COMP%]{display:flex;height:48px}app-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:8px}.vote-info-radial-gauge[_ngcontent-%COMP%]{height:80px;position:relative;align-items:center;display:flex;flex-direction:column;justify-content:flex-end;margin:0 40px}.vote-info-radial-gauge[_ngcontent-%COMP%]   .radial-gauge[_ngcontent-%COMP%]{position:absolute;bottom:0}.vote-info-current-result[_ngcontent-%COMP%]{font-size:11px;line-height:14px;white-space:nowrap;color:var(--1inch__ui-02)}.vote-info-percents-time[_ngcontent-%COMP%]{font-size:24px;line-height:28px;font-weight:300;white-space:nowrap;color:var(--1inch__ui-01)}.vote-info-text[_ngcontent-%COMP%]{font-size:16px;line-height:26px;margin:16px 0;color:var(--1inch__ui-02)}.vote-info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{margin-bottom:20px}.voting-buttons-one-column[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-column-gap:16px}.voting-buttons-two-column[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}.vote-block-wrap[_ngcontent-%COMP%]{position:relative;margin-bottom:24px}.vote-input-wrap-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}.vote-custom-input[_ngcontent-%COMP%]{font-size:13px;line-height:15px;padding:12px 44px 12px 12px;border-radius:12px;border:none;width:100%;color:var(--1inch-text-01);background:var(--1inch-bg-06)}.vote-custom-input-units[_ngcontent-%COMP%]{position:absolute;right:12px;top:12px;color:var(--1inch__ui-02)}.vote-default-slider[_ngcontent-%COMP%]{width:100%}.slider-limits[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 6px;font-size:13px;line-height:15px;margin-top:-10px;color:var(--1inch__ui-02)}.voting-card[_ngcontent-%COMP%]{padding:24px;border-radius:20px;max-width:480px;margin:auto -16px;background:var(--1inch-bg-02)}.voting-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;font-size:16px;line-height:26px}.voting-card-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:500}.voting-card-header[_ngcontent-%COMP%]   .reset-button[_ngcontent-%COMP%]{color:var(--1inch-common-text-03);cursor:pointer}.field-header-fix[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 8px 1fr;margin-bottom:10px}.field-header-fix-loader[_ngcontent-%COMP%]{float:right;height:24px}.value-separator[_ngcontent-%COMP%]{position:relative}.value-separator[_ngcontent-%COMP%]   .direction-icon[_ngcontent-%COMP%]{position:absolute;width:24px;height:24px;top:calc(50% - 12px);left:calc(50% - 12px);display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:var(--1inch-btn-bg-03);z-index:10}.info-block[_ngcontent-%COMP%]{border-radius:16px;padding:10px 16px;border:1px solid var(--1inch-border-01)}.info-block[_ngcontent-%COMP%]   .value-title[_ngcontent-%COMP%]{font-size:12px;line-height:16px;margin-bottom:4px;color:var(--1inch__ui-02)}.info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]{font-size:24px;line-height:28px}.info-block[_ngcontent-%COMP%]:last-of-type   .value-title[_ngcontent-%COMP%], .info-block[_ngcontent-%COMP%]:last-of-type   .info-value[_ngcontent-%COMP%]{text-align:right}.voting-mode-switch[_ngcontent-%COMP%]{display:block;border-radius:10px;overflow:hidden;margin-bottom:24px}@media (min-width: 418px){.voting-card[_ngcontent-%COMP%]{margin:auto}}@media (min-width: 520px){.vote-info[_ngcontent-%COMP%]{flex-direction:row}.votes-block[_ngcontent-%COMP%]{margin:0 0 0 40px}}@media (min-width: 700px){.votes-block[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.votes-block-row[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:0}.votes-block-value[_ngcontent-%COMP%]{margin-top:8px}}@media (min-width: 940px){.vote-info[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:32px}.vote-info-text[_ngcontent-%COMP%]{margin-bottom:48px}.voting-stats[_ngcontent-%COMP%], .vote-page-info-mobile[_ngcontent-%COMP%]{display:none}.vote-page-info-desktop[_ngcontent-%COMP%]{display:block}.votes-block[_ngcontent-%COMP%]{display:block;margin:24px 0 0}.votes-block-row[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;margin-bottom:16px}.votes-block-value[_ngcontent-%COMP%]{margin-top:0}.vote-page-align[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 418px;grid-column-gap:40px}.vote-page-back[_ngcontent-%COMP%]{margin-bottom:24px}.vote-page-title[_ngcontent-%COMP%]{font-size:32px;line-height:38px;margin-bottom:32px}}@media (min-width: 1300px){.vote-info[_ngcontent-%COMP%]{flex-direction:row}.votes-block[_ngcontent-%COMP%]{display:flex;margin:0 0 0 30px}.votes-block-row[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:0}.votes-block-value[_ngcontent-%COMP%]{font-size:20px;line-height:23px;margin-top:8px}}",
            ],
            changeDetection: 0,
          })),
          s
        );
      })();
      function Zt(s, g, e, a, r, u, V) {
        if (r.lte(0)) return "0";
        const Y = e.mul(r),
          ut = s.mul(a),
          j = g.mul(a);
        let vt = r;
        return (
          V && (vt = u ? r : r.add(a)), Y.sub(ut).add(j).div(vt).toString()
        );
      }
    },
    13355: (Pt, nt, n) => {
      n.d(nt, { w: () => _ });
      var o = n(51109),
        c = n(54510),
        I = n(93130),
        O = n(24124),
        b = n(38143),
        f = n(12725),
        d = n(16236);
      function E(k, z) {
        if (
          (1 & k &&
            (o.????elementStart(0, "div", 7)(1, "p", 11),
            o.????text(2, "Your votes"),
            o.????elementEnd(),
            o.????elementStart(3, "p"),
            o.????text(4),
            o.????pipe(5, "number"),
            o.????elementEnd()()),
          2 & k)
        ) {
          const Q = o.????nextContext();
          o.????advance(4),
            o.????textInterpolate(o.????pipeBind1(5, 1, Q.data.yourVotes));
        }
      }
      let _ = (() => {
        class k {
          constructor(Q, w, it) {
            (this.router = Q),
              (this.walletConnectionQuery = w),
              (this.activeConnectionQuery = it),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$);
          }
          navigateToVote() {
            this.router.navigateByUrl(
              `/${this.activeConnectionQuery.currentChainId}/${this.data.link}`
            );
          }
        }
        return (
          (k.??fac = function (Q) {
            return new (Q || k)(
              o.????directiveInject(c.F0),
              o.????directiveInject(I.r),
              o.????directiveInject(O.r)
            );
          }),
          (k.??cmp = o.????defineComponent({
            type: k,
            selectors: [["app-voting-item"]],
            inputs: { data: "data", color: "color" },
            decls: 24,
            vars: 16,
            consts: [
              [1, "voting-item", 3, "id", "click"],
              [1, "voting-item-title"],
              ["width", "24", "height", "24", 1, "settings-icon"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-back.svg#arrow-back",
              ],
              [1, "current-result-wrap"],
              [
                "data-id",
                "governance.current-result-value",
                1,
                "voting-item-percents-time",
              ],
              [1, "radial-gauge", 3, "value", "color"],
              [1, "voting-item-row"],
              ["transloco", "votingItem.total-votes", 1, "title"],
              ["class", "voting-item-row", 4, "ngIf"],
              ["transloco", "votingItem.addresses", 1, "title"],
              ["transloco", "votingItem.your-votes", 1, "title"],
            ],
            template: function (Q, w) {
              1 & Q &&
                (o.????elementStart(0, "div", 0),
                o.????listener("click", function () {
                  return w.navigateToVote();
                }),
                o.????elementStart(1, "p", 1),
                o.????text(2),
                o.????pipe(3, "transloco"),
                o.????elementEnd(),
                o.????namespaceSVG(),
                o.????elementStart(4, "svg", 2),
                o.????element(5, "use", 3),
                o.????elementEnd(),
                o.????namespaceHTML(),
                o.????elementStart(6, "div", 4)(7, "p", 5),
                o.????text(8),
                o.????elementEnd(),
                o.????element(9, "app-radial-gauge", 6),
                o.????elementEnd(),
                o.????elementStart(10, "div", 7)(11, "p", 8),
                o.????text(12, "Total votes"),
                o.????elementEnd(),
                o.????elementStart(13, "p"),
                o.????text(14),
                o.????pipe(15, "number"),
                o.????elementEnd()(),
                o.????template(16, E, 6, 3, "div", 9),
                o.????pipe(17, "async"),
                o.????elementStart(18, "div", 7)(19, "p", 10),
                o.????text(20, "Addresses"),
                o.????elementEnd(),
                o.????elementStart(21, "p"),
                o.????text(22),
                o.????pipe(23, "number"),
                o.????elementEnd()()()),
                2 & Q &&
                  (o.????propertyInterpolate1(
                    "id",
                    "liquidity-protocol.",
                    w.data.title,
                    ".card"
                  ),
                  o.????advance(2),
                  o.????textInterpolate1(
                    " ",
                    o.????pipeBind1(3, 8, w.data.title),
                    " "
                  ),
                  o.????advance(6),
                  o.????textInterpolate(w.data.currentValue),
                  o.????advance(1),
                  o.????property("value", w.data.value)("color", w.color),
                  o.????advance(5),
                  o.????textInterpolate(o.????pipeBind1(15, 10, w.data.totalVotes)),
                  o.????advance(2),
                  o.????property(
                    "ngIf",
                    o.????pipeBind1(17, 12, w.isWalletConnected$)
                  ),
                  o.????advance(6),
                  o.????textInterpolate(o.????pipeBind1(23, 14, w.data.addresses)));
            },
            dependencies: [b.O5, f.KI, d.V, b.Ov, b.JJ, f.Ot],
            styles: [
              "[_nghost-%COMP%]{color:var(--1inch__ui-01)}.voting-item[_ngcontent-%COMP%]{border-radius:16px;padding:16px;position:relative;cursor:pointer;height:100%;background:var(--1inch-bg-02)}.voting-item-title[_ngcontent-%COMP%]{margin-bottom:16px;font-weight:500;font-size:20px;line-height:23px;text-align:left;max-width:calc(100% - 24px)}.current-result-wrap[_ngcontent-%COMP%]{height:80px;position:relative;align-items:center;display:flex;flex-direction:column;justify-content:flex-end;margin-bottom:16px}.current-result-wrap[_ngcontent-%COMP%]   .radial-gauge[_ngcontent-%COMP%]{position:absolute;bottom:0}.voting-item-percents-time[_ngcontent-%COMP%]{font-size:24px;line-height:28px;font-weight:300;text-align:center;white-space:nowrap;margin-bottom:4px}.voting-item-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:13px;line-height:15px;margin-bottom:8px}.voting-item-row[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.voting-item-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.settings-icon[_ngcontent-%COMP%]{position:absolute;right:16px;top:16px;transform:rotate(180deg);color:var(--1inch__ui-02)}",
            ],
            changeDetection: 0,
          })),
          k
        );
      })();
    },
    24608: (Pt, nt, n) => {
      n.d(nt, { E: () => y });
      var o = n(76027),
        c = n(3012),
        I = n(71909),
        O = n(76327),
        b = n(69682),
        f = n(64736),
        d = n(73836),
        E = n(95021),
        _ = n(51109),
        k = n(93130),
        z = n(52292),
        Q = n(12725),
        w = n(38143);
      let it = (() => {
          class P {
            constructor() {
              (this.showPlaceholder = !1),
                (this.votingBalance = 0),
                (this.votingPower = 0);
            }
          }
          return (
            (P.??fac = function (T) {
              return new (T || P)();
            }),
            (P.??cmp = _.????defineComponent({
              type: P,
              selectors: [["user-voting-stats"]],
              inputs: {
                showPlaceholder: "showPlaceholder",
                votingBalance: "votingBalance",
                votingPower: "votingPower",
              },
              decls: 12,
              vars: 8,
              consts: [
                [
                  "transloco",
                  "votePage.your-voting-balance",
                  1,
                  "voting-title",
                ],
                [1, "voting-value"],
                ["transloco", "votePage.your-voting-power", 1, "voting-title"],
              ],
              template: function (T, $) {
                1 & T &&
                  (_.????elementStart(0, "div")(1, "span", 0),
                  _.????text(2, "Your voting balance"),
                  _.????elementEnd(),
                  _.????elementStart(3, "p", 1),
                  _.????text(4),
                  _.????pipe(5, "number"),
                  _.????elementEnd()(),
                  _.????elementStart(6, "div")(7, "span", 2),
                  _.????text(8, "Your voting power"),
                  _.????elementEnd(),
                  _.????elementStart(9, "p", 1),
                  _.????text(10),
                  _.????pipe(11, "percent"),
                  _.????elementEnd()()),
                  2 & T &&
                    (_.????advance(4),
                    _.????textInterpolate(
                      $.showPlaceholder
                        ? "..."
                        : _.????pipeBind2(5, 2, $.votingBalance, "1.0-3")
                    ),
                    _.????advance(6),
                    _.????textInterpolate(
                      $.showPlaceholder
                        ? "..."
                        : _.????pipeBind2(11, 5, $.votingPower, "1.1-4")
                    ));
              },
              dependencies: [Q.KI, w.JJ, w.Zx],
              styles: [
                "[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr;padding:16px;border-radius:16px;border:1px solid rgba(85,153,255,.2)}.voting-title[_ngcontent-%COMP%]{font-size:13px;line-height:15px;color:var(--1inch__ui-02)}.voting-value[_ngcontent-%COMP%]{font-size:20px;margin-top:8px}@media (max-width: 418px){.voting-value[_ngcontent-%COMP%]{font-size:16px}}",
              ],
              changeDetection: 0,
            })),
            P
          );
        })(),
        y = (() => {
          class P {
            constructor(T, $) {
              (this.walletQuery = T),
                (this.votingStatsService = $),
                (this.contractName$ = new o.X(null)),
                (this.isWalletConnected$ = this.walletQuery.isWalletConnected$),
                (this.votingStats$ = this.contractName$.pipe(
                  (0, O.w)((B) =>
                    B
                      ? (0, c.of)(B)
                      : (0, I._)(() => "Contract name is undefined")
                  ),
                  (0, O.w)((B) => this.votingStatsService.getVotingStats(B)),
                  (0, E.EB)(0, d.N.refreshTime.balancesAndAllowancesDefault),
                  (0, E.i4)({ votingBalance: 0, votingPower: 0 }),
                  (0, b.d)({ refCount: !0, bufferSize: 1 })
                )),
                (this.votingBalance$ = this.votingStats$.pipe(
                  (0, f.U)(({ votingBalance: B }) => B)
                )),
                (this.votingPower$ = this.votingStats$.pipe(
                  (0, f.U)(({ votingPower: B }) => B)
                ));
            }
            set contractName(T) {
              this.contractName$.next(T);
            }
          }
          return (
            (P.??fac = function (T) {
              return new (T || P)(
                _.????directiveInject(k.r),
                _.????directiveInject(z.h)
              );
            }),
            (P.??cmp = _.????defineComponent({
              type: P,
              selectors: [["voting-stats"]],
              inputs: { contractName: "contractName" },
              decls: 4,
              vars: 9,
              consts: [[3, "votingBalance", "showPlaceholder", "votingPower"]],
              template: function (T, $) {
                1 & T &&
                  (_.????element(0, "user-voting-stats", 0),
                  _.????pipe(1, "async"),
                  _.????pipe(2, "async"),
                  _.????pipe(3, "async")),
                  2 & T &&
                    _.????property(
                      "votingBalance",
                      _.????pipeBind1(1, 3, $.votingBalance$)
                    )(
                      "showPlaceholder",
                      !_.????pipeBind1(2, 5, $.isWalletConnected$)
                    )("votingPower", _.????pipeBind1(3, 7, $.votingPower$));
              },
              dependencies: [it, w.Ov],
              changeDetection: 0,
            })),
            P
          );
        })();
    },
    64074: (Pt, nt, n) => {
      n.d(nt, { M: () => k });
      var o = n(38143),
        c = n(31777),
        I = n(92872),
        O = n(56739),
        b = n(65687),
        f = n(64925),
        d = n(24022),
        E = n(91066),
        _ = n(51109);
      let k = (() => {
        class z {}
        return (
          (z.??fac = function (w) {
            return new (w || z)();
          }),
          (z.??mod = _.????defineNgModule({ type: z })),
          (z.??inj = _.????defineInjector({
            imports: [
              o.ez,
              c.ReactiveFormsModule,
              f.h,
              I.ot,
              E.E,
              b.m,
              d.Z,
              O.U,
            ],
          })),
          z
        );
      })();
    },
    18704: (Pt, nt, n) => {
      n.d(nt, { n: () => o, v: () => c });
      const o = {
          negative: {
            mainColor: "rgb(245,47,47, 0.8)",
            gradientStart: "rgba(245,47,64,0.7)",
            gradientMiddle: "rgba(245,47,64,0.3)",
            gradientEnd: "rgba(245,47,47,0.03)",
          },
          positive: {
            mainColor: "rgba(33, 193, 135, 1)",
            gradientStart: "rgba(33, 193, 135, 0.7)",
            gradientMiddle: "rgba(33, 193, 135, 0.2)",
            gradientEnd: "rgba(33, 193, 135, 0.03)",
          },
        },
        c = {
          color: {
            up: o.positive.mainColor,
            down: o.negative.mainColor,
            unchanged: "rgba(141,174,194,0.4)",
          },
          borderWidth: 0,
          borderColor: "rgba(141,174,194,0.4)",
        };
    },
    63287: (Pt, nt, n) => {
      n.d(nt, {
        HS: () => R,
        Hi: () => ht,
        oH: () => tt,
        qH: () => Z,
        qn: () => pt,
      });
      var o = n(94288),
        c = n(51109),
        I = n(31065),
        O = n(40526),
        b = n(38143),
        f = n(67605),
        d = n(1753),
        E = n(83358),
        _ = n(55231),
        k = n(12733),
        z = n(44168),
        Q = n(10197),
        w = n(19913),
        it = n(31777),
        y = n(37551),
        P = n(96142);
      const S = ["*"],
        $ = new c.InjectionToken("MatChipRemove"),
        B = new c.InjectionToken("MatChipAvatar"),
        L = new c.InjectionToken("MatChipTrailingIcon");
      class C {
        constructor(W) {
          this._elementRef = W;
        }
      }
      const m = (0, I.sb)((0, I.pj)((0, I.Kr)(C), "primary"), -1);
      let R = (() => {
          class M extends m {
            constructor(i, l, F, X, Mt, wt, bt, st) {
              super(i),
                (this._ngZone = l),
                (this._changeDetectorRef = Mt),
                (this._hasFocus = !1),
                (this.chipListSelectable = !0),
                (this._chipListMultiple = !1),
                (this._chipListDisabled = !1),
                (this.role = "option"),
                (this._selected = !1),
                (this._selectable = !0),
                (this._disabled = !1),
                (this._removable = !0),
                (this._onFocus = new f.x()),
                (this._onBlur = new f.x()),
                (this.selectionChange = new c.EventEmitter()),
                (this.destroyed = new c.EventEmitter()),
                (this.removed = new c.EventEmitter()),
                this._addHostClassName(),
                (this._chipRippleTarget = wt.createElement("div")),
                this._chipRippleTarget.classList.add("mat-chip-ripple"),
                this._elementRef.nativeElement.appendChild(
                  this._chipRippleTarget
                ),
                (this._chipRipple = new I.IR(
                  this,
                  l,
                  this._chipRippleTarget,
                  F
                )),
                this._chipRipple.setupTriggerEvents(i),
                (this.rippleConfig = X || {}),
                (this._animationsDisabled = "NoopAnimations" === bt),
                (this.tabIndex = (null != st && parseInt(st)) || -1);
            }
            get rippleDisabled() {
              return (
                this.disabled ||
                this.disableRipple ||
                this._animationsDisabled ||
                !!this.rippleConfig.disabled
              );
            }
            get selected() {
              return this._selected;
            }
            set selected(i) {
              const l = (0, O.Ig)(i);
              l !== this._selected &&
                ((this._selected = l), this._dispatchSelectionChange());
            }
            get value() {
              return void 0 !== this._value
                ? this._value
                : this._elementRef.nativeElement.textContent;
            }
            set value(i) {
              this._value = i;
            }
            get selectable() {
              return this._selectable && this.chipListSelectable;
            }
            set selectable(i) {
              this._selectable = (0, O.Ig)(i);
            }
            get disabled() {
              return this._chipListDisabled || this._disabled;
            }
            set disabled(i) {
              this._disabled = (0, O.Ig)(i);
            }
            get removable() {
              return this._removable;
            }
            set removable(i) {
              this._removable = (0, O.Ig)(i);
            }
            get ariaSelected() {
              return this.selectable &&
                (this._chipListMultiple || this.selected)
                ? this.selected.toString()
                : null;
            }
            _addHostClassName() {
              const i = "mat-basic-chip",
                l = this._elementRef.nativeElement;
              l.hasAttribute(i) || l.tagName.toLowerCase() === i
                ? l.classList.add(i)
                : l.classList.add("mat-standard-chip");
            }
            ngOnDestroy() {
              this.destroyed.emit({ chip: this }),
                this._chipRipple._removeTriggerEvents();
            }
            select() {
              this._selected ||
                ((this._selected = !0),
                this._dispatchSelectionChange(),
                this._changeDetectorRef.markForCheck());
            }
            deselect() {
              this._selected &&
                ((this._selected = !1),
                this._dispatchSelectionChange(),
                this._changeDetectorRef.markForCheck());
            }
            selectViaInteraction() {
              this._selected ||
                ((this._selected = !0),
                this._dispatchSelectionChange(!0),
                this._changeDetectorRef.markForCheck());
            }
            toggleSelected(i = !1) {
              return (
                (this._selected = !this.selected),
                this._dispatchSelectionChange(i),
                this._changeDetectorRef.markForCheck(),
                this.selected
              );
            }
            focus() {
              this._hasFocus ||
                (this._elementRef.nativeElement.focus(),
                this._onFocus.next({ chip: this })),
                (this._hasFocus = !0);
            }
            remove() {
              this.removable && this.removed.emit({ chip: this });
            }
            _handleClick(i) {
              this.disabled && i.preventDefault();
            }
            _handleKeydown(i) {
              if (!this.disabled)
                switch (i.keyCode) {
                  case o.yY:
                  case o.ZH:
                    this.remove(), i.preventDefault();
                    break;
                  case o.L_:
                    this.selectable && this.toggleSelected(!0),
                      i.preventDefault();
                }
            }
            _blur() {
              this._ngZone.onStable.pipe((0, E.q)(1)).subscribe(() => {
                this._ngZone.run(() => {
                  (this._hasFocus = !1), this._onBlur.next({ chip: this });
                });
              });
            }
            _dispatchSelectionChange(i = !1) {
              this.selectionChange.emit({
                source: this,
                isUserInput: i,
                selected: this._selected,
              });
            }
          }
          return (
            (M.??fac = function (i) {
              return new (i || M)(
                c.????directiveInject(c.ElementRef),
                c.????directiveInject(c.NgZone),
                c.????directiveInject(z.t4),
                c.????directiveInject(I.Y2, 8),
                c.????directiveInject(c.ChangeDetectorRef),
                c.????directiveInject(b.K0),
                c.????directiveInject(c.ANIMATION_MODULE_TYPE, 8),
                c.????injectAttribute("tabindex")
              );
            }),
            (M.??dir = c.????defineDirective({
              type: M,
              selectors: [
                ["mat-basic-chip"],
                ["", "mat-basic-chip", ""],
                ["mat-chip"],
                ["", "mat-chip", ""],
              ],
              contentQueries: function (i, l, F) {
                if (
                  (1 & i &&
                    (c.????contentQuery(F, B, 5),
                    c.????contentQuery(F, L, 5),
                    c.????contentQuery(F, $, 5)),
                  2 & i)
                ) {
                  let X;
                  c.????queryRefresh((X = c.????loadQuery())) &&
                    (l.avatar = X.first),
                    c.????queryRefresh((X = c.????loadQuery())) &&
                      (l.trailingIcon = X.first),
                    c.????queryRefresh((X = c.????loadQuery())) &&
                      (l.removeIcon = X.first);
                }
              },
              hostAttrs: [1, "mat-chip", "mat-focus-indicator"],
              hostVars: 15,
              hostBindings: function (i, l) {
                1 & i &&
                  c.????listener("click", function (X) {
                    return l._handleClick(X);
                  })("keydown", function (X) {
                    return l._handleKeydown(X);
                  })("focus", function () {
                    return l.focus();
                  })("blur", function () {
                    return l._blur();
                  }),
                  2 & i &&
                    (c.????attribute("tabindex", l.disabled ? null : l.tabIndex)(
                      "role",
                      l.role
                    )("disabled", l.disabled || null)(
                      "aria-disabled",
                      l.disabled.toString()
                    )("aria-selected", l.ariaSelected),
                    c.????classProp("mat-chip-selected", l.selected)(
                      "mat-chip-with-avatar",
                      l.avatar
                    )(
                      "mat-chip-with-trailing-icon",
                      l.trailingIcon || l.removeIcon
                    )("mat-chip-disabled", l.disabled)(
                      "_mat-animation-noopable",
                      l._animationsDisabled
                    ));
              },
              inputs: {
                color: "color",
                disableRipple: "disableRipple",
                tabIndex: "tabIndex",
                role: "role",
                selected: "selected",
                value: "value",
                selectable: "selectable",
                disabled: "disabled",
                removable: "removable",
              },
              outputs: {
                selectionChange: "selectionChange",
                destroyed: "destroyed",
                removed: "removed",
              },
              exportAs: ["matChip"],
              features: [c.????InheritDefinitionFeature],
            })),
            M
          );
        })(),
        Z = (() => {
          class M {
            constructor(i, l) {
              (this._parentChip = i),
                "BUTTON" === l.nativeElement.nodeName &&
                  l.nativeElement.setAttribute("type", "button");
            }
            _handleClick(i) {
              const l = this._parentChip;
              l.removable && !l.disabled && l.remove(),
                i.stopPropagation(),
                i.preventDefault();
            }
          }
          return (
            (M.??fac = function (i) {
              return new (i || M)(
                c.????directiveInject(R),
                c.????directiveInject(c.ElementRef)
              );
            }),
            (M.??dir = c.????defineDirective({
              type: M,
              selectors: [["", "matChipRemove", ""]],
              hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
              hostBindings: function (i, l) {
                1 & i &&
                  c.????listener("click", function (X) {
                    return l._handleClick(X);
                  });
              },
              features: [
                c.????ProvidersFeature([{ provide: $, useExisting: M }]),
              ],
            })),
            M
          );
        })();
      const dt = new c.InjectionToken("mat-chips-default-options");
      let h = 0,
        tt = (() => {
          class M {
            constructor(i, l) {
              (this._elementRef = i),
                (this._defaultOptions = l),
                (this.focused = !1),
                (this._addOnBlur = !1),
                (this.separatorKeyCodes =
                  this._defaultOptions.separatorKeyCodes),
                (this.chipEnd = new c.EventEmitter()),
                (this.placeholder = ""),
                (this.id = "mat-chip-list-input-" + h++),
                (this._disabled = !1),
                (this.inputElement = this._elementRef.nativeElement);
            }
            set chipList(i) {
              i && ((this._chipList = i), this._chipList.registerInput(this));
            }
            get addOnBlur() {
              return this._addOnBlur;
            }
            set addOnBlur(i) {
              this._addOnBlur = (0, O.Ig)(i);
            }
            get disabled() {
              return (
                this._disabled || (this._chipList && this._chipList.disabled)
              );
            }
            set disabled(i) {
              this._disabled = (0, O.Ig)(i);
            }
            get empty() {
              return !this.inputElement.value;
            }
            ngOnChanges() {
              this._chipList.stateChanges.next();
            }
            ngOnDestroy() {
              this.chipEnd.complete();
            }
            ngAfterContentInit() {
              this._focusLastChipOnBackspace = this.empty;
            }
            _keydown(i) {
              if (i) {
                if (
                  (i.keyCode === o.Mf &&
                    !(0, o.Vb)(i, "shiftKey") &&
                    this._chipList._allowFocusEscape(),
                  i.keyCode === o.ZH && this._focusLastChipOnBackspace)
                )
                  return (
                    this._chipList._keyManager.setLastItemActive(),
                    void i.preventDefault()
                  );
                this._focusLastChipOnBackspace = !1;
              }
              this._emitChipEnd(i);
            }
            _keyup(i) {
              !this._focusLastChipOnBackspace &&
                i.keyCode === o.ZH &&
                this.empty &&
                ((this._focusLastChipOnBackspace = !0), i.preventDefault());
            }
            _blur() {
              this.addOnBlur && this._emitChipEnd(),
                (this.focused = !1),
                this._chipList.focused || this._chipList._blur(),
                this._chipList.stateChanges.next();
            }
            _focus() {
              (this.focused = !0),
                (this._focusLastChipOnBackspace = this.empty),
                this._chipList.stateChanges.next();
            }
            _emitChipEnd(i) {
              !this.inputElement.value && !!i && this._chipList._keydown(i),
                (!i || this._isSeparatorKey(i)) &&
                  (this.chipEnd.emit({
                    input: this.inputElement,
                    value: this.inputElement.value,
                    chipInput: this,
                  }),
                  null == i || i.preventDefault());
            }
            _onInput() {
              this._chipList.stateChanges.next();
            }
            focus(i) {
              this.inputElement.focus(i);
            }
            clear() {
              (this.inputElement.value = ""),
                (this._focusLastChipOnBackspace = !0);
            }
            _isSeparatorKey(i) {
              return (
                !(0, o.Vb)(i) && new Set(this.separatorKeyCodes).has(i.keyCode)
              );
            }
          }
          return (
            (M.??fac = function (i) {
              return new (i || M)(
                c.????directiveInject(c.ElementRef),
                c.????directiveInject(dt)
              );
            }),
            (M.??dir = c.????defineDirective({
              type: M,
              selectors: [["input", "matChipInputFor", ""]],
              hostAttrs: [1, "mat-chip-input", "mat-input-element"],
              hostVars: 5,
              hostBindings: function (i, l) {
                1 & i &&
                  c.????listener("keydown", function (X) {
                    return l._keydown(X);
                  })("keyup", function (X) {
                    return l._keyup(X);
                  })("blur", function () {
                    return l._blur();
                  })("focus", function () {
                    return l._focus();
                  })("input", function () {
                    return l._onInput();
                  }),
                  2 & i &&
                    (c.????hostProperty("id", l.id),
                    c.????attribute("disabled", l.disabled || null)(
                      "placeholder",
                      l.placeholder || null
                    )(
                      "aria-invalid",
                      l._chipList && l._chipList.ngControl
                        ? l._chipList.ngControl.invalid
                        : null
                    )(
                      "aria-required",
                      (l._chipList && l._chipList.required) || null
                    ));
              },
              inputs: {
                chipList: ["matChipInputFor", "chipList"],
                addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
                separatorKeyCodes: [
                  "matChipInputSeparatorKeyCodes",
                  "separatorKeyCodes",
                ],
                placeholder: "placeholder",
                id: "id",
                disabled: "disabled",
              },
              outputs: { chipEnd: "matChipInputTokenEnd" },
              exportAs: ["matChipInput", "matChipInputFor"],
              features: [c.????NgOnChangesFeature],
            })),
            M
          );
        })();
      const p = (0, I.FD)(
        class {
          constructor(M, W, i, l) {
            (this._defaultErrorStateMatcher = M),
              (this._parentForm = W),
              (this._parentFormGroup = i),
              (this.ngControl = l),
              (this.stateChanges = new f.x());
          }
        }
      );
      let H = 0;
      class ot {
        constructor(W, i) {
          (this.source = W), (this.value = i);
        }
      }
      let pt = (() => {
          class M extends p {
            constructor(i, l, F, X, Mt, wt, bt) {
              super(wt, X, Mt, bt),
                (this._elementRef = i),
                (this._changeDetectorRef = l),
                (this._dir = F),
                (this.controlType = "mat-chip-list"),
                (this._lastDestroyedChipIndex = null),
                (this._destroyed = new f.x()),
                (this._uid = "mat-chip-list-" + H++),
                (this._tabIndex = 0),
                (this._userTabIndex = null),
                (this._onTouched = () => {}),
                (this._onChange = () => {}),
                (this._multiple = !1),
                (this._compareWith = (st, t) => st === t),
                (this._disabled = !1),
                (this.ariaOrientation = "horizontal"),
                (this._selectable = !0),
                (this.change = new c.EventEmitter()),
                (this.valueChange = new c.EventEmitter()),
                this.ngControl && (this.ngControl.valueAccessor = this);
            }
            get selected() {
              var i, l;
              return this.multiple
                ? (null === (i = this._selectionModel) || void 0 === i
                    ? void 0
                    : i.selected) || []
                : null === (l = this._selectionModel) || void 0 === l
                ? void 0
                : l.selected[0];
            }
            get role() {
              return this._explicitRole
                ? this._explicitRole
                : this.empty
                ? null
                : "listbox";
            }
            set role(i) {
              this._explicitRole = i;
            }
            get multiple() {
              return this._multiple;
            }
            set multiple(i) {
              (this._multiple = (0, O.Ig)(i)), this._syncChipsState();
            }
            get compareWith() {
              return this._compareWith;
            }
            set compareWith(i) {
              (this._compareWith = i),
                this._selectionModel && this._initializeSelection();
            }
            get value() {
              return this._value;
            }
            set value(i) {
              this.writeValue(i), (this._value = i);
            }
            get id() {
              return this._chipInput ? this._chipInput.id : this._uid;
            }
            get required() {
              var i, l, F, X;
              return (
                null !==
                  (X =
                    null !== (i = this._required) && void 0 !== i
                      ? i
                      : null ===
                          (F =
                            null === (l = this.ngControl) || void 0 === l
                              ? void 0
                              : l.control) || void 0 === F
                      ? void 0
                      : F.hasValidator(it.Validators.required)) &&
                void 0 !== X &&
                X
              );
            }
            set required(i) {
              (this._required = (0, O.Ig)(i)), this.stateChanges.next();
            }
            get placeholder() {
              return this._chipInput
                ? this._chipInput.placeholder
                : this._placeholder;
            }
            set placeholder(i) {
              (this._placeholder = i), this.stateChanges.next();
            }
            get focused() {
              return (
                (this._chipInput && this._chipInput.focused) ||
                this._hasFocusedChip()
              );
            }
            get empty() {
              return (
                (!this._chipInput || this._chipInput.empty) &&
                (!this.chips || 0 === this.chips.length)
              );
            }
            get shouldLabelFloat() {
              return !this.empty || this.focused;
            }
            get disabled() {
              return this.ngControl
                ? !!this.ngControl.disabled
                : this._disabled;
            }
            set disabled(i) {
              (this._disabled = (0, O.Ig)(i)), this._syncChipsState();
            }
            get selectable() {
              return this._selectable;
            }
            set selectable(i) {
              (this._selectable = (0, O.Ig)(i)),
                this.chips &&
                  this.chips.forEach(
                    (l) => (l.chipListSelectable = this._selectable)
                  );
            }
            set tabIndex(i) {
              (this._userTabIndex = i), (this._tabIndex = i);
            }
            get chipSelectionChanges() {
              return (0, d.T)(...this.chips.map((i) => i.selectionChange));
            }
            get chipFocusChanges() {
              return (0, d.T)(...this.chips.map((i) => i._onFocus));
            }
            get chipBlurChanges() {
              return (0, d.T)(...this.chips.map((i) => i._onBlur));
            }
            get chipRemoveChanges() {
              return (0, d.T)(...this.chips.map((i) => i.destroyed));
            }
            ngAfterContentInit() {
              (this._keyManager = new Q.Em(this.chips)
                .withWrap()
                .withVerticalOrientation()
                .withHomeAndEnd()
                .withHorizontalOrientation(
                  this._dir ? this._dir.value : "ltr"
                )),
                this._dir &&
                  this._dir.change
                    .pipe((0, _.R)(this._destroyed))
                    .subscribe((i) =>
                      this._keyManager.withHorizontalOrientation(i)
                    ),
                this._keyManager.tabOut
                  .pipe((0, _.R)(this._destroyed))
                  .subscribe(() => {
                    this._allowFocusEscape();
                  }),
                this.chips.changes
                  .pipe((0, k.O)(null), (0, _.R)(this._destroyed))
                  .subscribe(() => {
                    this.disabled &&
                      Promise.resolve().then(() => {
                        this._syncChipsState();
                      }),
                      this._resetChips(),
                      this._initializeSelection(),
                      this._updateTabIndex(),
                      this._updateFocusForDestroyedChips(),
                      this.stateChanges.next();
                  });
            }
            ngOnInit() {
              (this._selectionModel = new w.Ov(this.multiple, void 0, !1)),
                this.stateChanges.next();
            }
            ngDoCheck() {
              this.ngControl &&
                (this.updateErrorState(),
                this.ngControl.disabled !== this._disabled &&
                  (this.disabled = !!this.ngControl.disabled));
            }
            ngOnDestroy() {
              this._destroyed.next(),
                this._destroyed.complete(),
                this.stateChanges.complete(),
                this._dropSubscriptions();
            }
            registerInput(i) {
              (this._chipInput = i),
                this._elementRef.nativeElement.setAttribute(
                  "data-mat-chip-input",
                  i.id
                );
            }
            setDescribedByIds(i) {
              i.length
                ? this._elementRef.nativeElement.setAttribute(
                    "aria-describedby",
                    i.join(" ")
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    "aria-describedby"
                  );
            }
            writeValue(i) {
              this.chips && this._setSelectionByValue(i, !1);
            }
            registerOnChange(i) {
              this._onChange = i;
            }
            registerOnTouched(i) {
              this._onTouched = i;
            }
            setDisabledState(i) {
              (this.disabled = i), this.stateChanges.next();
            }
            onContainerClick(i) {
              this._originatesFromChip(i) || this.focus();
            }
            focus(i) {
              this.disabled ||
                (this._chipInput && this._chipInput.focused) ||
                (this.chips.length > 0
                  ? (this._keyManager.setFirstItemActive(),
                    this.stateChanges.next())
                  : (this._focusInput(i), this.stateChanges.next()));
            }
            _focusInput(i) {
              this._chipInput && this._chipInput.focus(i);
            }
            _keydown(i) {
              const l = i.target;
              l &&
                l.classList.contains("mat-chip") &&
                (this._keyManager.onKeydown(i), this.stateChanges.next());
            }
            _updateTabIndex() {
              this._tabIndex =
                this._userTabIndex || (0 === this.chips.length ? -1 : 0);
            }
            _updateFocusForDestroyedChips() {
              if (null != this._lastDestroyedChipIndex)
                if (this.chips.length) {
                  const i = Math.min(
                    this._lastDestroyedChipIndex,
                    this.chips.length - 1
                  );
                  this._keyManager.setActiveItem(i);
                } else this.focus();
              this._lastDestroyedChipIndex = null;
            }
            _isValidIndex(i) {
              return i >= 0 && i < this.chips.length;
            }
            _setSelectionByValue(i, l = !0) {
              if (
                (this._clearSelection(),
                this.chips.forEach((F) => F.deselect()),
                Array.isArray(i))
              )
                i.forEach((F) => this._selectValue(F, l)), this._sortValues();
              else {
                const F = this._selectValue(i, l);
                F && l && this._keyManager.setActiveItem(F);
              }
            }
            _selectValue(i, l = !0) {
              const F = this.chips.find(
                (X) => null != X.value && this._compareWith(X.value, i)
              );
              return (
                F &&
                  (l ? F.selectViaInteraction() : F.select(),
                  this._selectionModel.select(F)),
                F
              );
            }
            _initializeSelection() {
              Promise.resolve().then(() => {
                (this.ngControl || this._value) &&
                  (this._setSelectionByValue(
                    this.ngControl ? this.ngControl.value : this._value,
                    !1
                  ),
                  this.stateChanges.next());
              });
            }
            _clearSelection(i) {
              this._selectionModel.clear(),
                this.chips.forEach((l) => {
                  l !== i && l.deselect();
                }),
                this.stateChanges.next();
            }
            _sortValues() {
              this._multiple &&
                (this._selectionModel.clear(),
                this.chips.forEach((i) => {
                  i.selected && this._selectionModel.select(i);
                }),
                this.stateChanges.next());
            }
            _propagateChanges(i) {
              let l = null;
              (l = Array.isArray(this.selected)
                ? this.selected.map((F) => F.value)
                : this.selected
                ? this.selected.value
                : i),
                (this._value = l),
                this.change.emit(new ot(this, l)),
                this.valueChange.emit(l),
                this._onChange(l),
                this._changeDetectorRef.markForCheck();
            }
            _blur() {
              this._hasFocusedChip() || this._keyManager.setActiveItem(-1),
                this.disabled ||
                  (this._chipInput
                    ? setTimeout(() => {
                        this.focused || this._markAsTouched();
                      })
                    : this._markAsTouched());
            }
            _markAsTouched() {
              this._onTouched(),
                this._changeDetectorRef.markForCheck(),
                this.stateChanges.next();
            }
            _allowFocusEscape() {
              -1 !== this._tabIndex &&
                ((this._tabIndex = -1),
                setTimeout(() => {
                  (this._tabIndex = this._userTabIndex || 0),
                    this._changeDetectorRef.markForCheck();
                }));
            }
            _resetChips() {
              this._dropSubscriptions(),
                this._listenToChipsFocus(),
                this._listenToChipsSelection(),
                this._listenToChipsRemoved();
            }
            _dropSubscriptions() {
              this._chipFocusSubscription &&
                (this._chipFocusSubscription.unsubscribe(),
                (this._chipFocusSubscription = null)),
                this._chipBlurSubscription &&
                  (this._chipBlurSubscription.unsubscribe(),
                  (this._chipBlurSubscription = null)),
                this._chipSelectionSubscription &&
                  (this._chipSelectionSubscription.unsubscribe(),
                  (this._chipSelectionSubscription = null)),
                this._chipRemoveSubscription &&
                  (this._chipRemoveSubscription.unsubscribe(),
                  (this._chipRemoveSubscription = null));
            }
            _listenToChipsSelection() {
              this._chipSelectionSubscription =
                this.chipSelectionChanges.subscribe((i) => {
                  i.source.selected
                    ? this._selectionModel.select(i.source)
                    : this._selectionModel.deselect(i.source),
                    this.multiple ||
                      this.chips.forEach((l) => {
                        !this._selectionModel.isSelected(l) &&
                          l.selected &&
                          l.deselect();
                      }),
                    i.isUserInput && this._propagateChanges();
                });
            }
            _listenToChipsFocus() {
              (this._chipFocusSubscription = this.chipFocusChanges.subscribe(
                (i) => {
                  let l = this.chips.toArray().indexOf(i.chip);
                  this._isValidIndex(l) && this._keyManager.updateActiveItem(l),
                    this.stateChanges.next();
                }
              )),
                (this._chipBlurSubscription = this.chipBlurChanges.subscribe(
                  () => {
                    this._blur(), this.stateChanges.next();
                  }
                ));
            }
            _listenToChipsRemoved() {
              this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(
                (i) => {
                  const l = i.chip,
                    F = this.chips.toArray().indexOf(i.chip);
                  this._isValidIndex(F) &&
                    l._hasFocus &&
                    (this._lastDestroyedChipIndex = F);
                }
              );
            }
            _originatesFromChip(i) {
              let l = i.target;
              for (; l && l !== this._elementRef.nativeElement; ) {
                if (l.classList.contains("mat-chip")) return !0;
                l = l.parentElement;
              }
              return !1;
            }
            _hasFocusedChip() {
              return this.chips && this.chips.some((i) => i._hasFocus);
            }
            _syncChipsState() {
              this.chips &&
                this.chips.forEach((i) => {
                  (i._chipListDisabled = this._disabled),
                    (i._chipListMultiple = this.multiple);
                });
            }
          }
          return (
            (M.??fac = function (i) {
              return new (i || M)(
                c.????directiveInject(c.ElementRef),
                c.????directiveInject(c.ChangeDetectorRef),
                c.????directiveInject(P.Is, 8),
                c.????directiveInject(it.NgForm, 8),
                c.????directiveInject(it.FormGroupDirective, 8),
                c.????directiveInject(I.rD),
                c.????directiveInject(it.NgControl, 10)
              );
            }),
            (M.??cmp = c.????defineComponent({
              type: M,
              selectors: [["mat-chip-list"]],
              contentQueries: function (i, l, F) {
                if ((1 & i && c.????contentQuery(F, R, 5), 2 & i)) {
                  let X;
                  c.????queryRefresh((X = c.????loadQuery())) && (l.chips = X);
                }
              },
              hostAttrs: [1, "mat-chip-list"],
              hostVars: 14,
              hostBindings: function (i, l) {
                1 & i &&
                  c.????listener("focus", function () {
                    return l.focus();
                  })("blur", function () {
                    return l._blur();
                  })("keydown", function (X) {
                    return l._keydown(X);
                  }),
                  2 & i &&
                    (c.????hostProperty("id", l._uid),
                    c.????attribute("tabindex", l.disabled ? null : l._tabIndex)(
                      "aria-required",
                      l.role ? l.required : null
                    )("aria-disabled", l.disabled.toString())(
                      "aria-invalid",
                      l.errorState
                    )("aria-multiselectable", l.multiple)("role", l.role)(
                      "aria-orientation",
                      l.ariaOrientation
                    ),
                    c.????classProp("mat-chip-list-disabled", l.disabled)(
                      "mat-chip-list-invalid",
                      l.errorState
                    )("mat-chip-list-required", l.required));
              },
              inputs: {
                role: "role",
                userAriaDescribedBy: [
                  "aria-describedby",
                  "userAriaDescribedBy",
                ],
                errorStateMatcher: "errorStateMatcher",
                multiple: "multiple",
                compareWith: "compareWith",
                value: "value",
                required: "required",
                placeholder: "placeholder",
                disabled: "disabled",
                ariaOrientation: ["aria-orientation", "ariaOrientation"],
                selectable: "selectable",
                tabIndex: "tabIndex",
              },
              outputs: { change: "change", valueChange: "valueChange" },
              exportAs: ["matChipList"],
              features: [
                c.????ProvidersFeature([{ provide: y.Eo, useExisting: M }]),
                c.????InheritDefinitionFeature,
              ],
              ngContentSelectors: S,
              decls: 2,
              vars: 0,
              consts: [[1, "mat-chip-list-wrapper"]],
              template: function (i, l) {
                1 & i &&
                  (c.????projectionDef(),
                  c.????elementStart(0, "div", 0),
                  c.????projection(1),
                  c.????elementEnd());
              },
              styles: [
                '.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip._mat-animation-noopable{transition:none !important;animation:none !important}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            M
          );
        })(),
        ht = (() => {
          class M {}
          return (
            (M.??fac = function (i) {
              return new (i || M)();
            }),
            (M.??mod = c.????defineNgModule({ type: M })),
            (M.??inj = c.????defineInjector({
              providers: [
                I.rD,
                { provide: dt, useValue: { separatorKeyCodes: [o.K5] } },
              ],
              imports: [I.BQ],
            })),
            M
          );
        })();
    },
    83156: (Pt, nt, n) => {
      n.d(nt, { JX: () => dt, YE: () => $, nU: () => Z });
      var o = n(51109),
        c = n(40526),
        I = n(94288),
        O = n(31065),
        b = n(67605),
        f = n(1753),
        d = n(74117),
        E = n(10197),
        _ = n(38143);
      const k = ["mat-sort-header", ""];
      function z(h, tt) {
        if (1 & h) {
          const p = o.????getCurrentView();
          o.????elementStart(0, "div", 3),
            o.????listener("@arrowPosition.start", function () {
              o.????restoreView(p);
              const ot = o.????nextContext();
              return o.????resetView((ot._disableViewStateAnimation = !0));
            })("@arrowPosition.done", function () {
              o.????restoreView(p);
              const ot = o.????nextContext();
              return o.????resetView((ot._disableViewStateAnimation = !1));
            }),
            o.????element(1, "div", 4),
            o.????elementStart(2, "div", 5),
            o.????element(3, "div", 6)(4, "div", 7)(5, "div", 8),
            o.????elementEnd()();
        }
        if (2 & h) {
          const p = o.????nextContext();
          o.????property("@arrowOpacity", p._getArrowViewState())(
            "@arrowPosition",
            p._getArrowViewState()
          )("@allowChildren", p._getArrowDirectionState()),
            o.????advance(2),
            o.????property("@indicator", p._getArrowDirectionState()),
            o.????advance(1),
            o.????property("@leftPointer", p._getArrowDirectionState()),
            o.????advance(1),
            o.????property("@rightPointer", p._getArrowDirectionState());
        }
      }
      const Q = ["*"],
        S = new o.InjectionToken("MAT_SORT_DEFAULT_OPTIONS"),
        T = (0, O.dB)((0, O.Id)(class {}));
      let $ = (() => {
        class h extends T {
          constructor(p) {
            super(),
              (this._defaultOptions = p),
              (this.sortables = new Map()),
              (this._stateChanges = new b.x()),
              (this.start = "asc"),
              (this._direction = ""),
              (this.sortChange = new o.EventEmitter());
          }
          get direction() {
            return this._direction;
          }
          set direction(p) {
            this._direction = p;
          }
          get disableClear() {
            return this._disableClear;
          }
          set disableClear(p) {
            this._disableClear = (0, c.Ig)(p);
          }
          register(p) {
            this.sortables.set(p.id, p);
          }
          deregister(p) {
            this.sortables.delete(p.id);
          }
          sort(p) {
            this.active != p.id
              ? ((this.active = p.id),
                (this.direction = p.start ? p.start : this.start))
              : (this.direction = this.getNextSortDirection(p)),
              this.sortChange.emit({
                active: this.active,
                direction: this.direction,
              });
          }
          getNextSortDirection(p) {
            var H, ot, pt;
            if (!p) return "";
            const ft =
              null !==
                (ot =
                  null !== (H = null == p ? void 0 : p.disableClear) &&
                  void 0 !== H
                    ? H
                    : this.disableClear) && void 0 !== ot
                ? ot
                : !(
                    null === (pt = this._defaultOptions) ||
                    void 0 === pt ||
                    !pt.disableClear
                  );
            let ht = (function B(h, tt) {
                let p = ["asc", "desc"];
                return "desc" == h && p.reverse(), tt || p.push(""), p;
              })(p.start || this.start, ft),
              M = ht.indexOf(this.direction) + 1;
            return M >= ht.length && (M = 0), ht[M];
          }
          ngOnInit() {
            this._markInitialized();
          }
          ngOnChanges() {
            this._stateChanges.next();
          }
          ngOnDestroy() {
            this._stateChanges.complete();
          }
        }
        return (
          (h.??fac = function (p) {
            return new (p || h)(o.????directiveInject(S, 8));
          }),
          (h.??dir = o.????defineDirective({
            type: h,
            selectors: [["", "matSort", ""]],
            hostAttrs: [1, "mat-sort"],
            inputs: {
              disabled: ["matSortDisabled", "disabled"],
              active: ["matSortActive", "active"],
              start: ["matSortStart", "start"],
              direction: ["matSortDirection", "direction"],
              disableClear: ["matSortDisableClear", "disableClear"],
            },
            outputs: { sortChange: "matSortChange" },
            exportAs: ["matSort"],
            features: [o.????InheritDefinitionFeature, o.????NgOnChangesFeature],
          })),
          h
        );
      })();
      const L = O.mZ.ENTERING + " " + O.yN.STANDARD_CURVE,
        C = {
          indicator: (0, d.X$)("indicator", [
            (0, d.SB)(
              "active-asc, asc",
              (0, d.oB)({ transform: "translateY(0px)" })
            ),
            (0, d.SB)(
              "active-desc, desc",
              (0, d.oB)({ transform: "translateY(10px)" })
            ),
            (0, d.eR)("active-asc <=> active-desc", (0, d.jt)(L)),
          ]),
          leftPointer: (0, d.X$)("leftPointer", [
            (0, d.SB)(
              "active-asc, asc",
              (0, d.oB)({ transform: "rotate(-45deg)" })
            ),
            (0, d.SB)(
              "active-desc, desc",
              (0, d.oB)({ transform: "rotate(45deg)" })
            ),
            (0, d.eR)("active-asc <=> active-desc", (0, d.jt)(L)),
          ]),
          rightPointer: (0, d.X$)("rightPointer", [
            (0, d.SB)(
              "active-asc, asc",
              (0, d.oB)({ transform: "rotate(45deg)" })
            ),
            (0, d.SB)(
              "active-desc, desc",
              (0, d.oB)({ transform: "rotate(-45deg)" })
            ),
            (0, d.eR)("active-asc <=> active-desc", (0, d.jt)(L)),
          ]),
          arrowOpacity: (0, d.X$)("arrowOpacity", [
            (0, d.SB)(
              "desc-to-active, asc-to-active, active",
              (0, d.oB)({ opacity: 1 })
            ),
            (0, d.SB)(
              "desc-to-hint, asc-to-hint, hint",
              (0, d.oB)({ opacity: 0.54 })
            ),
            (0, d.SB)(
              "hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",
              (0, d.oB)({ opacity: 0 })
            ),
            (0, d.eR)(
              "* => asc, * => desc, * => active, * => hint, * => void",
              (0, d.jt)("0ms")
            ),
            (0, d.eR)("* <=> *", (0, d.jt)(L)),
          ]),
          arrowPosition: (0, d.X$)("arrowPosition", [
            (0, d.eR)(
              "* => desc-to-hint, * => desc-to-active",
              (0, d.jt)(
                L,
                (0, d.F4)([
                  (0, d.oB)({ transform: "translateY(-25%)" }),
                  (0, d.oB)({ transform: "translateY(0)" }),
                ])
              )
            ),
            (0, d.eR)(
              "* => hint-to-desc, * => active-to-desc",
              (0, d.jt)(
                L,
                (0, d.F4)([
                  (0, d.oB)({ transform: "translateY(0)" }),
                  (0, d.oB)({ transform: "translateY(25%)" }),
                ])
              )
            ),
            (0, d.eR)(
              "* => asc-to-hint, * => asc-to-active",
              (0, d.jt)(
                L,
                (0, d.F4)([
                  (0, d.oB)({ transform: "translateY(25%)" }),
                  (0, d.oB)({ transform: "translateY(0)" }),
                ])
              )
            ),
            (0, d.eR)(
              "* => hint-to-asc, * => active-to-asc",
              (0, d.jt)(
                L,
                (0, d.F4)([
                  (0, d.oB)({ transform: "translateY(0)" }),
                  (0, d.oB)({ transform: "translateY(-25%)" }),
                ])
              )
            ),
            (0, d.SB)(
              "desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",
              (0, d.oB)({ transform: "translateY(0)" })
            ),
            (0, d.SB)(
              "hint-to-desc, active-to-desc, desc",
              (0, d.oB)({ transform: "translateY(-25%)" })
            ),
            (0, d.SB)(
              "hint-to-asc, active-to-asc, asc",
              (0, d.oB)({ transform: "translateY(25%)" })
            ),
          ]),
          allowChildren: (0, d.X$)("allowChildren", [
            (0, d.eR)("* <=> *", [
              (0, d.IO)("@*", (0, d.pV)(), { optional: !0 }),
            ]),
          ]),
        };
      let m = (() => {
        class h {
          constructor() {
            this.changes = new b.x();
          }
        }
        return (
          (h.??fac = function (p) {
            return new (p || h)();
          }),
          (h.??prov = o.????defineInjectable({
            token: h,
            factory: h.??fac,
            providedIn: "root",
          })),
          h
        );
      })();
      const D = {
          provide: m,
          deps: [[new o.Optional(), new o.SkipSelf(), m]],
          useFactory: function G(h) {
            return h || new m();
          },
        },
        R = (0, O.Id)(class {});
      let Z = (() => {
          class h extends R {
            constructor(p, H, ot, pt, ft, ht, M, W) {
              super(),
                (this._intl = p),
                (this._changeDetectorRef = H),
                (this._sort = ot),
                (this._columnDef = pt),
                (this._focusMonitor = ft),
                (this._elementRef = ht),
                (this._ariaDescriber = M),
                (this._showIndicatorHint = !1),
                (this._viewState = {}),
                (this._arrowDirection = ""),
                (this._disableViewStateAnimation = !1),
                (this.arrowPosition = "after"),
                (this._sortActionDescription = "Sort"),
                null != W &&
                  W.arrowPosition &&
                  (this.arrowPosition = null == W ? void 0 : W.arrowPosition),
                this._handleStateChanges();
            }
            get sortActionDescription() {
              return this._sortActionDescription;
            }
            set sortActionDescription(p) {
              this._updateSortActionDescription(p);
            }
            get disableClear() {
              return this._disableClear;
            }
            set disableClear(p) {
              this._disableClear = (0, c.Ig)(p);
            }
            ngOnInit() {
              !this.id && this._columnDef && (this.id = this._columnDef.name),
                this._updateArrowDirection(),
                this._setAnimationTransitionState({
                  toState: this._isSorted() ? "active" : this._arrowDirection,
                }),
                this._sort.register(this),
                (this._sortButton =
                  this._elementRef.nativeElement.querySelector(
                    ".mat-sort-header-container"
                  )),
                this._updateSortActionDescription(this._sortActionDescription);
            }
            ngAfterViewInit() {
              this._focusMonitor
                .monitor(this._elementRef, !0)
                .subscribe((p) => {
                  const H = !!p;
                  H !== this._showIndicatorHint &&
                    (this._setIndicatorHintVisible(H),
                    this._changeDetectorRef.markForCheck());
                });
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef),
                this._sort.deregister(this),
                this._rerenderSubscription.unsubscribe();
            }
            _setIndicatorHintVisible(p) {
              (this._isDisabled() && p) ||
                ((this._showIndicatorHint = p),
                this._isSorted() ||
                  (this._updateArrowDirection(),
                  this._setAnimationTransitionState(
                    this._showIndicatorHint
                      ? { fromState: this._arrowDirection, toState: "hint" }
                      : { fromState: "hint", toState: this._arrowDirection }
                  )));
            }
            _setAnimationTransitionState(p) {
              (this._viewState = p || {}),
                this._disableViewStateAnimation &&
                  (this._viewState = { toState: p.toState });
            }
            _toggleOnInteraction() {
              this._sort.sort(this),
                ("hint" === this._viewState.toState ||
                  "active" === this._viewState.toState) &&
                  (this._disableViewStateAnimation = !0);
            }
            _handleClick() {
              this._isDisabled() || this._sort.sort(this);
            }
            _handleKeydown(p) {
              !this._isDisabled() &&
                (p.keyCode === I.L_ || p.keyCode === I.K5) &&
                (p.preventDefault(), this._toggleOnInteraction());
            }
            _isSorted() {
              return (
                this._sort.active == this.id &&
                ("asc" === this._sort.direction ||
                  "desc" === this._sort.direction)
              );
            }
            _getArrowDirectionState() {
              return `${this._isSorted() ? "active-" : ""}${
                this._arrowDirection
              }`;
            }
            _getArrowViewState() {
              const p = this._viewState.fromState;
              return (p ? `${p}-to-` : "") + this._viewState.toState;
            }
            _updateArrowDirection() {
              this._arrowDirection = this._isSorted()
                ? this._sort.direction
                : this.start || this._sort.start;
            }
            _isDisabled() {
              return this._sort.disabled || this.disabled;
            }
            _getAriaSortAttribute() {
              return this._isSorted()
                ? "asc" == this._sort.direction
                  ? "ascending"
                  : "descending"
                : "none";
            }
            _renderArrow() {
              return !this._isDisabled() || this._isSorted();
            }
            _updateSortActionDescription(p) {
              var H, ot;
              this._sortButton &&
                (null === (H = this._ariaDescriber) ||
                  void 0 === H ||
                  H.removeDescription(
                    this._sortButton,
                    this._sortActionDescription
                  ),
                null === (ot = this._ariaDescriber) ||
                  void 0 === ot ||
                  ot.describe(this._sortButton, p)),
                (this._sortActionDescription = p);
            }
            _handleStateChanges() {
              this._rerenderSubscription = (0, f.T)(
                this._sort.sortChange,
                this._sort._stateChanges,
                this._intl.changes
              ).subscribe(() => {
                this._isSorted() &&
                  (this._updateArrowDirection(),
                  ("hint" === this._viewState.toState ||
                    "active" === this._viewState.toState) &&
                    (this._disableViewStateAnimation = !0),
                  this._setAnimationTransitionState({
                    fromState: this._arrowDirection,
                    toState: "active",
                  }),
                  (this._showIndicatorHint = !1)),
                  !this._isSorted() &&
                    this._viewState &&
                    "active" === this._viewState.toState &&
                    ((this._disableViewStateAnimation = !1),
                    this._setAnimationTransitionState({
                      fromState: "active",
                      toState: this._arrowDirection,
                    })),
                  this._changeDetectorRef.markForCheck();
              });
            }
          }
          return (
            (h.??fac = function (p) {
              return new (p || h)(
                o.????directiveInject(m),
                o.????directiveInject(o.ChangeDetectorRef),
                o.????directiveInject($, 8),
                o.????directiveInject("MAT_SORT_HEADER_COLUMN_DEF", 8),
                o.????directiveInject(E.tE),
                o.????directiveInject(o.ElementRef),
                o.????directiveInject(E.$s, 8),
                o.????directiveInject(S, 8)
              );
            }),
            (h.??cmp = o.????defineComponent({
              type: h,
              selectors: [["", "mat-sort-header", ""]],
              hostAttrs: [1, "mat-sort-header"],
              hostVars: 3,
              hostBindings: function (p, H) {
                1 & p &&
                  o.????listener("click", function () {
                    return H._handleClick();
                  })("keydown", function (pt) {
                    return H._handleKeydown(pt);
                  })("mouseenter", function () {
                    return H._setIndicatorHintVisible(!0);
                  })("mouseleave", function () {
                    return H._setIndicatorHintVisible(!1);
                  }),
                  2 & p &&
                    (o.????attribute("aria-sort", H._getAriaSortAttribute()),
                    o.????classProp("mat-sort-header-disabled", H._isDisabled()));
              },
              inputs: {
                disabled: "disabled",
                id: ["mat-sort-header", "id"],
                arrowPosition: "arrowPosition",
                start: "start",
                sortActionDescription: "sortActionDescription",
                disableClear: "disableClear",
              },
              exportAs: ["matSortHeader"],
              features: [o.????InheritDefinitionFeature],
              attrs: k,
              ngContentSelectors: Q,
              decls: 4,
              vars: 7,
              consts: [
                [1, "mat-sort-header-container", "mat-focus-indicator"],
                [1, "mat-sort-header-content"],
                ["class", "mat-sort-header-arrow", 4, "ngIf"],
                [1, "mat-sort-header-arrow"],
                [1, "mat-sort-header-stem"],
                [1, "mat-sort-header-indicator"],
                [1, "mat-sort-header-pointer-left"],
                [1, "mat-sort-header-pointer-right"],
                [1, "mat-sort-header-pointer-middle"],
              ],
              template: function (p, H) {
                1 & p &&
                  (o.????projectionDef(),
                  o.????elementStart(0, "div", 0)(1, "div", 1),
                  o.????projection(2),
                  o.????elementEnd(),
                  o.????template(3, z, 6, 6, "div", 2),
                  o.????elementEnd()),
                  2 & p &&
                    (o.????classProp("mat-sort-header-sorted", H._isSorted())(
                      "mat-sort-header-position-before",
                      "before" === H.arrowPosition
                    ),
                    o.????attribute("tabindex", H._isDisabled() ? null : 0)(
                      "role",
                      H._isDisabled() ? null : "button"
                    ),
                    o.????advance(3),
                    o.????property("ngIf", H._renderArrow()));
              },
              dependencies: [_.O5],
              styles: [
                ".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}",
              ],
              encapsulation: 2,
              data: {
                animation: [
                  C.indicator,
                  C.leftPointer,
                  C.rightPointer,
                  C.arrowOpacity,
                  C.arrowPosition,
                  C.allowChildren,
                ],
              },
              changeDetection: 0,
            })),
            h
          );
        })(),
        dt = (() => {
          class h {}
          return (
            (h.??fac = function (p) {
              return new (p || h)();
            }),
            (h.??mod = o.????defineNgModule({ type: h })),
            (h.??inj = o.????defineInjector({
              providers: [D],
              imports: [_.ez, O.BQ],
            })),
            h
          );
        })();
    },
  },
]);
