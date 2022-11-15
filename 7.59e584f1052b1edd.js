"use strict";
var zo = Object.defineProperty,
  Wo = Object.defineProperties,
  Ho = Object.getOwnPropertyDescriptors,
  Fo = Object.getOwnPropertySymbols,
  No = Object.prototype.hasOwnProperty,
  Vo = Object.prototype.propertyIsEnumerable,
  jo = (ee, Mt, q) =>
    Mt in ee
      ? zo(ee, Mt, { enumerable: !0, configurable: !0, writable: !0, value: q })
      : (ee[Mt] = q),
  lo = (ee, Mt) => {
    for (var q in Mt || (Mt = {})) No.call(Mt, q) && jo(ee, q, Mt[q]);
    if (Fo) for (var q of Fo(Mt)) Vo.call(Mt, q) && jo(ee, q, Mt[q]);
    return ee;
  },
  co = (ee, Mt) => Wo(ee, Ho(Mt));
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [7],
  {
    33246: (ee, Mt, q) => {
      q.d(Mt, { f: () => It });
      var d = q(90813),
        U = q(33646),
        $t = q(94748),
        Pt = q(71909),
        zt = q(76327),
        ie = q(17114),
        Qt = q(77724),
        xe = q(64736),
        ne = q(83358),
        yt = q(67701),
        Ut = q(57817),
        Ct = q(55468),
        Ot = q(16289),
        De = q(52611),
        Tt = q(51109),
        Zt = q(41912),
        si = q(42462),
        Ye = q(93130),
        wi = q(68534),
        ae = q(95707),
        ye = q(24124),
        fe = q(60358),
        oi = q(37847),
        ri = q(98066),
        le = q(56747),
        ve = q(69064),
        Mi = q(36477),
        Bi = q(1146),
        ge = q(68043),
        we = q(83140),
        Rt = (() => {
          return (
            ((xt = Rt || (Rt = {}))[(xt.tokenSwap = 0)] = "tokenSwap"),
            (xt[(xt.limitOrder = 1)] = "limitOrder"),
            Rt
          );
          var xt;
        })();
      let It = (() => {
        class xt {
          constructor(ot, gt, bt, dt, Dt, at, Et, jt, Vt, Bt, Se, ai, pe, Ae) {
            (this.contractAddressQuery = ot),
              (this.transactionsCountService = gt),
              (this.walletConnectionQuery = bt),
              (this.web3ProvidersService = dt),
              (this.tokenAllowanceService = Dt),
              (this.activeConnectionQuery = at),
              (this.transactionHistoryService = Et),
              (this.approveService = jt),
              (this.txStatusDialogService = Vt),
              (this.acceptTermsService = Bt),
              (this.swapSettingsQuery = Se),
              (this.tokenBalanceQuery = ai),
              (this.createPendingTxService = pe),
              (this.orderApproveCheckerService = Ae);
          }
          approveInfinitySwapTransaction$(ot) {
            return this.acceptTermsService
              .checkTermsAccepting()
              .pipe(
                (0, zt.w)(() => this.approveTxForMaxAmount(Rt.tokenSwap, ot))
              );
          }
          approveLimitOrderTransaction$(ot) {
            return this.acceptTermsService.checkTermsAccepting().pipe(
              (0, zt.w)(() =>
                this.orderApproveCheckerService.checkUnapprovedBadPriceOrders(
                  ot
                )
              ),
              (0, zt.w)(() => this.approveTxForMaxAmount(Rt.limitOrder, ot))
            );
          }
          contractApproveTransaction(
            {
              txType: ot,
              txSubType: gt,
              contractAddress: bt,
              spenderAddress: dt,
              amount: Dt,
              meta: at,
            },
            Et = !0
          ) {
            let jt = null;
            return (
              Et &&
                (jt = this.txStatusDialogService.open({
                  status: Ut._.pending,
                })),
              (0, U.D)({
                hash: this.approveService.approve(bt, dt, Dt),
                nonce:
                  this.transactionsCountService.getCurrentWalletTransactionsCount(),
              }).pipe(
                (0, ie.K)(
                  (Vt) => (
                    we.error(Vt),
                    Et ? (null == jt || jt.close(), $t.C) : (0, Pt._)(() => Vt)
                  )
                ),
                (0, Qt.b)(({ hash: Vt, nonce: Bt }) => {
                  const Se = this.createPendingTxService.getPendingTxFactory({
                    type: ot,
                    subType: gt,
                    amount: Dt.toString(),
                    meta: at,
                  })(Vt, Bt);
                  this.transactionHistoryService.addHistoryItem(Se),
                    Et &&
                      this.txStatusDialogService.changeTo({
                        status: Ut._.success,
                        link: this.txStatusDialogService.txStatusDialogLink(Vt),
                      });
                }),
                (0, xe.U)(({ hash: Vt }) => Vt),
                (0, ne.q)(1)
              )
            );
          }
          approveTxForMaxAmount(ot, gt) {
            return this.tokenApproveTransaction(ot, gt, De.zL).pipe(
              (0, ie.K)((bt) =>
                bt instanceof Ot.fl
                  ? this.tokenBalanceQuery
                      .getBalanceOnce$(gt)
                      .pipe(
                        (0, zt.w)((dt) =>
                          this.tokenApproveTransaction(ot, gt, dt)
                        )
                      )
                  : (0, Pt._)(() => bt)
              )
            );
          }
          tokenApproveTransaction(ot, gt, bt) {
            const dt = this.contractAddressQuery.getContractAddress(
                (function Nt(xt, se = !1) {
                  switch (xt) {
                    case Rt.limitOrder:
                      return Ct.a4.limitOrder;
                    case Rt.tokenSwap:
                      return se ? Ct.a4.tokenSwapV4 : Ct.a4.tokenSwapV3;
                  }
                  throw new Error("unknown approve contract type");
                })(ot, this.swapSettingsQuery.enableSwapRouterV4)
              ),
              Dt = this.txStatusDialogService.open({ status: Ut._.pending });
            return (0, U.D)({
              hash: this.approveService.approve(gt.address, dt, bt),
              nonce:
                this.transactionsCountService.getCurrentWalletTransactionsCount(),
            }).pipe(
              (0, ie.K)(
                (at) => (we.error(at), Dt.close(), (0, Pt._)(() => at))
              ),
              (0, Qt.b)(({ hash: at, nonce: Et }) => {
                this.walletConnectionQuery.isCurrentWalletGnosis ||
                  this.addTxToHistory({
                    approveType: ot,
                    amount: bt,
                    hash: at,
                    nonce: Et,
                    sourceToken: gt,
                    spenderAddress: dt,
                  }),
                  this.txStatusDialogService.changeTo({
                    status: Ut._.approveSuccess,
                    metaInfo: { token: gt.symbol },
                    link: this.txStatusDialogService.txStatusDialogLink(at),
                  }),
                  this.watchForPriorityAllowance(gt, dt, bt, at);
              }),
              (0, xe.U)(({ hash: at }) => at),
              (0, ne.q)(1)
            );
          }
          addTxToHistory({
            approveType: ot,
            amount: gt,
            hash: bt,
            nonce: dt,
            sourceToken: Dt,
            spenderAddress: at,
          }) {
            const Et = (function Me(xt) {
                switch (xt) {
                  case Rt.limitOrder:
                    return yt.E.approveLimitOrder;
                  case Rt.tokenSwap:
                    return yt.E.approve;
                }
                throw new Error("unknown approve history type");
              })(ot),
              jt = this.createPendingTxService.getPendingTxFactory({
                type: "authorize",
                subType: Et,
                amount: gt.toString(),
                meta: {
                  tradeApproveToken: Dt,
                  tradeApproveContract: at,
                  asset: Dt,
                },
              })(bt, dt);
            this.transactionHistoryService.addHistoryItem(jt);
          }
          watchForPriorityAllowance(ot, gt, bt, dt) {
            const Dt = this.web3ProvidersService
              .defaultEtherProviderOnce()
              .pipe(
                (0, zt.w)((at) => at.waitForTransaction(dt)),
                (0, Qt.b)((at) => {
                  1 === (null == at ? void 0 : at.status) &&
                    this.tokenAllowanceService.setPriorityAllowance(
                      ot.address,
                      gt,
                      bt.toString()
                    );
                }),
                (0, ne.q)(1)
              );
            (0, d.O)(Dt, "watchForPriorityAllowance$");
          }
        }
        return (
          (xt.ɵfac = function (ot) {
            return new (ot || xt)(
              Tt.ɵɵinject(Zt.O),
              Tt.ɵɵinject(si.K),
              Tt.ɵɵinject(Ye.r),
              Tt.ɵɵinject(wi.v),
              Tt.ɵɵinject(ae.a),
              Tt.ɵɵinject(ye.r),
              Tt.ɵɵinject(fe.d),
              Tt.ɵɵinject(oi.Z),
              Tt.ɵɵinject(ri.i),
              Tt.ɵɵinject(le.N),
              Tt.ɵɵinject(ve.G),
              Tt.ɵɵinject(Mi.n4),
              Tt.ɵɵinject(Bi.B),
              Tt.ɵɵinject(ge.I)
            );
          }),
          (xt.ɵprov = Tt.ɵɵdefineInjectable({
            token: xt,
            factory: xt.ɵfac,
            providedIn: "root",
          })),
          xt
        );
      })();
    },
    32388: (ee, Mt, q) => {
      function d(U) {
        return {
          id: "VerticalHighlightPlugin",
          beforeDatasetsDraw: ($t) => {
            var Pt, zt;
            if (
              null ===
                (zt =
                  null === (Pt = $t.tooltip) || void 0 === Pt
                    ? void 0
                    : Pt.getActiveElements()) ||
              void 0 === zt ||
              !zt.length
            )
              return;
            const { x: ie, y: Qt } = $t.tooltip.getActiveElements()[0].element,
              xe = $t.scales.y,
              ne = $t.scales.x,
              yt = $t.ctx;
            yt.save(),
              yt.beginPath(),
              yt.moveTo(ie, xe.top),
              yt.lineTo(ie, xe.bottom),
              (yt.lineWidth = 1),
              (yt.strokeStyle = "rgba(72,87,114,0.8)"),
              yt.setLineDash([10, 10]),
              yt.stroke(),
              U.drawHorizontal &&
                (yt.beginPath(),
                yt.moveTo(0, Qt),
                yt.lineTo(ne.right, Qt),
                (yt.lineWidth = 1),
                (yt.strokeStyle = "rgba(72,87,114,0.8)"),
                yt.setLineDash([10, 10]),
                yt.stroke(),
                yt.restore());
          },
        };
      }
      q.d(Mt, { S: () => d });
    },
    5372: (ee, Mt, q) => {
      q.d(Mt, {
        CV: () => li,
        De: () => $s,
        Dx: () => Us,
        FK: () => Ut,
        Gu: () => Zn,
        IQ: () => Ci,
        N0: () => Ae,
        RM: () => rt,
        ST: () => ce,
        W_: () => _,
        Xi: () => Si,
        ZL: () => xi,
        ce: () => d.d,
        f$: () => ns,
        ho: () => Ft,
        jI: () => Ce,
        jn: () => de,
        kL: () => Qi,
        l7: () => en,
        od: () => Un,
        qi: () => He,
        tt: () => Te,
        u: () => qs,
        uw: () => An,
        vn: () => pe,
      });
      var d = q(43),
        U = q(83140),
        Pt = new (class $t {
          constructor() {
            (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          _notify(e, t, i, n) {
            const r = t.duration;
            t.listeners[n].forEach((l) =>
              l({
                chart: e,
                initial: t.initial,
                numSteps: r,
                currentStep: Math.min(i - t.start, r),
              })
            );
          }
          _refresh() {
            this._request ||
              ((this._running = !0),
              (this._request = d.r.call(window, () => {
                this._update(),
                  (this._request = null),
                  this._running && this._refresh();
              })));
          }
          _update(e = Date.now()) {
            let t = 0;
            this._charts.forEach((i, n) => {
              if (!i.running || !i.items.length) return;
              const o = i.items;
              let c,
                r = o.length - 1,
                l = !1;
              for (; r >= 0; --r)
                (c = o[r]),
                  c._active
                    ? (c._total > i.duration && (i.duration = c._total),
                      c.tick(e),
                      (l = !0))
                    : ((o[r] = o[o.length - 1]), o.pop());
              l && (n.draw(), this._notify(n, i, e, "progress")),
                o.length ||
                  ((i.running = !1),
                  this._notify(n, i, e, "complete"),
                  (i.initial = !1)),
                (t += o.length);
            }),
              (this._lastDate = e),
              0 === t && (this._running = !1);
          }
          _getAnims(e) {
            const t = this._charts;
            let i = t.get(e);
            return (
              i ||
                ((i = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                t.set(e, i)),
              i
            );
          }
          listen(e, t, i) {
            this._getAnims(e).listeners[t].push(i);
          }
          add(e, t) {
            !t || !t.length || this._getAnims(e).items.push(...t);
          }
          has(e) {
            return this._getAnims(e).items.length > 0;
          }
          start(e) {
            const t = this._charts.get(e);
            !t ||
              ((t.running = !0),
              (t.start = Date.now()),
              (t.duration = t.items.reduce(
                (i, n) => Math.max(i, n._duration),
                0
              )),
              this._refresh());
          }
          running(e) {
            if (!this._running) return !1;
            const t = this._charts.get(e);
            return !(!t || !t.running || !t.items.length);
          }
          stop(e) {
            const t = this._charts.get(e);
            if (!t || !t.items.length) return;
            const i = t.items;
            let n = i.length - 1;
            for (; n >= 0; --n) i[n].cancel();
            (t.items = []), this._notify(e, t, Date.now(), "complete");
          }
          remove(e) {
            return this._charts.delete(e);
          }
        })();
      const zt = "transparent",
        ie = {
          boolean: (s, e, t) => (t > 0.5 ? e : s),
          color(s, e, t) {
            const i = (0, d.c)(s || zt),
              n = i.valid && (0, d.c)(e || zt);
            return n && n.valid ? n.mix(i, t).hexString() : e;
          },
          number: (s, e, t) => s + (e - s) * t,
        };
      class Qt {
        constructor(e, t, i, n) {
          const o = t[i];
          n = (0, d.a)([e.to, n, o, e.from]);
          const r = (0, d.a)([e.from, o, n]);
          (this._active = !0),
            (this._fn = e.fn || ie[e.type || typeof r]),
            (this._easing = d.e[e.easing] || d.e.linear),
            (this._start = Math.floor(Date.now() + (e.delay || 0))),
            (this._duration = this._total = Math.floor(e.duration)),
            (this._loop = !!e.loop),
            (this._target = t),
            (this._prop = i),
            (this._from = r),
            (this._to = n),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(e, t, i) {
          if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop],
              o = i - this._start,
              r = this._duration - o;
            (this._start = i),
              (this._duration = Math.floor(Math.max(r, e.duration))),
              (this._total += o),
              (this._loop = !!e.loop),
              (this._to = (0, d.a)([e.to, t, n, e.from])),
              (this._from = (0, d.a)([e.from, n, t]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(e) {
          const t = e - this._start,
            i = this._duration,
            n = this._prop,
            o = this._from,
            r = this._loop,
            l = this._to;
          let c;
          if (((this._active = o !== l && (r || t < i)), !this._active))
            return (this._target[n] = l), void this._notify(!0);
          t < 0
            ? (this._target[n] = o)
            : ((c = (t / i) % 2),
              (c = r && c > 1 ? 2 - c : c),
              (c = this._easing(Math.min(1, Math.max(0, c)))),
              (this._target[n] = this._fn(o, l, c)));
        }
        wait() {
          const e = this._promises || (this._promises = []);
          return new Promise((t, i) => {
            e.push({ res: t, rej: i });
          });
        }
        _notify(e) {
          const t = e ? "res" : "rej",
            i = this._promises || [];
          for (let n = 0; n < i.length; n++) i[n][t]();
        }
      }
      d.d.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      const yt = Object.keys(d.d.animation);
      d.d.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (s) =>
          "onProgress" !== s && "onComplete" !== s && "fn" !== s,
      }),
        d.d.set("animations", {
          colors: {
            type: "color",
            properties: ["color", "borderColor", "backgroundColor"],
          },
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius", "tension"],
          },
        }),
        d.d.describe("animations", { _fallback: "animation" }),
        d.d.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: { type: "boolean", easing: "linear", fn: (s) => 0 | s },
            },
          },
        });
      class Ut {
        constructor(e, t) {
          (this._chart = e), (this._properties = new Map()), this.configure(t);
        }
        configure(e) {
          if (!(0, d.i)(e)) return;
          const t = this._properties;
          Object.getOwnPropertyNames(e).forEach((i) => {
            const n = e[i];
            if (!(0, d.i)(n)) return;
            const o = {};
            for (const r of yt) o[r] = n[r];
            (((0, d.b)(n.properties) && n.properties) || [i]).forEach((r) => {
              (r === i || !t.has(r)) && t.set(r, o);
            });
          });
        }
        _animateOptions(e, t) {
          const i = t.options,
            n = (function Ot(s, e) {
              if (!e) return;
              let t = s.options;
              if (t)
                return (
                  t.$shared &&
                    (s.options = t =
                      Object.assign({}, t, { $shared: !1, $animations: {} })),
                  t
                );
              s.options = e;
            })(e, i);
          if (!n) return [];
          const o = this._createAnimations(n, i);
          return (
            i.$shared &&
              (function Ct(s, e) {
                const t = [],
                  i = Object.keys(e);
                for (let n = 0; n < i.length; n++) {
                  const o = s[i[n]];
                  o && o.active() && t.push(o.wait());
                }
                return Promise.all(t);
              })(e.options.$animations, i).then(
                () => {
                  e.options = i;
                },
                () => {}
              ),
            o
          );
        }
        _createAnimations(e, t) {
          const i = this._properties,
            n = [],
            o = e.$animations || (e.$animations = {}),
            r = Object.keys(t),
            l = Date.now();
          let c;
          for (c = r.length - 1; c >= 0; --c) {
            const u = r[c];
            if ("$" === u.charAt(0)) continue;
            if ("options" === u) {
              n.push(...this._animateOptions(e, t));
              continue;
            }
            const p = t[u];
            let x = o[u];
            const S = i.get(u);
            if (x) {
              if (S && x.active()) {
                x.update(S, p, l);
                continue;
              }
              x.cancel();
            }
            S && S.duration
              ? ((o[u] = x = new Qt(S, e, u, p)), n.push(x))
              : (e[u] = p);
          }
          return n;
        }
        update(e, t) {
          if (0 === this._properties.size) return void Object.assign(e, t);
          const i = this._createAnimations(e, t);
          return i.length ? (Pt.add(this._chart, i), !0) : void 0;
        }
      }
      function De(s, e) {
        const t = (s && s.options) || {},
          i = t.reverse,
          n = void 0 === t.min ? e : 0,
          o = void 0 === t.max ? e : 0;
        return { start: i ? o : n, end: i ? n : o };
      }
      function si(s, e) {
        const t = [],
          i = s._getSortedDatasetMetas(e);
        let n, o;
        for (n = 0, o = i.length; n < o; ++n) t.push(i[n].index);
        return t;
      }
      function Ye(s, e, t, i = {}) {
        const n = s.keys,
          o = "single" === i.mode;
        let r, l, c, u;
        if (null !== e) {
          for (r = 0, l = n.length; r < l; ++r) {
            if (((c = +n[r]), c === t)) {
              if (i.all) continue;
              break;
            }
            (u = s.values[c]),
              (0, d.g)(u) &&
                (o || 0 === e || (0, d.s)(e) === (0, d.s)(u)) &&
                (e += u);
          }
          return e;
        }
      }
      function ae(s, e) {
        const t = s && s.options.stacked;
        return t || (void 0 === t && void 0 !== e.stack);
      }
      function oi(s, e, t) {
        const i = s[e] || (s[e] = {});
        return i[t] || (i[t] = {});
      }
      function ri(s, e, t, i) {
        for (const n of e.getMatchingVisibleMetas(i).reverse()) {
          const o = s[n.index];
          if ((t && o > 0) || (!t && o < 0)) return n.index;
        }
        return null;
      }
      function le(s, e) {
        const { chart: t, _cachedMeta: i } = s,
          n = t._stacks || (t._stacks = {}),
          { iScale: o, vScale: r, index: l } = i,
          c = o.axis,
          u = r.axis,
          p = (function ye(s, e, t) {
            return `${s.id}.${e.id}.${t.stack || t.type}`;
          })(o, r, i),
          x = e.length;
        let S;
        for (let k = 0; k < x; ++k) {
          const O = e[k],
            { [c]: T, [u]: I } = O;
          (S = (O._stacks || (O._stacks = {}))[u] = oi(n, p, T)),
            (S[l] = I),
            (S._top = ri(S, r, !0, i.type)),
            (S._bottom = ri(S, r, !1, i.type));
        }
      }
      function ve(s, e) {
        const t = s.scales;
        return Object.keys(t)
          .filter((i) => t[i].axis === e)
          .shift();
      }
      function ge(s, e) {
        const t = s.controller.index,
          i = s.vScale && s.vScale.axis;
        if (i) {
          e = e || s._parsed;
          for (const n of e) {
            const o = n._stacks;
            if (!o || void 0 === o[i] || void 0 === o[i][t]) return;
            delete o[i][t];
          }
        }
      }
      const we = (s) => "reset" === s || "none" === s,
        Rt = (s, e) => (e ? s : Object.assign({}, s));
      let Nt = (() => {
        class s {
          constructor(t, i) {
            (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = i),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize();
          }
          initialize() {
            const t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = ae(t.vScale, t)),
              this.addElements();
          }
          updateIndex(t) {
            this.index !== t && ge(this._cachedMeta), (this.index = t);
          }
          linkScales() {
            const t = this.chart,
              i = this._cachedMeta,
              n = this.getDataset(),
              o = (S, k, O, T) => ("x" === S ? k : "r" === S ? T : O),
              r = (i.xAxisID = (0, d.v)(n.xAxisID, ve(t, "x"))),
              l = (i.yAxisID = (0, d.v)(n.yAxisID, ve(t, "y"))),
              c = (i.rAxisID = (0, d.v)(n.rAxisID, ve(t, "r"))),
              u = i.indexAxis,
              p = (i.iAxisID = o(u, r, l, c)),
              x = (i.vAxisID = o(u, l, r, c));
            (i.xScale = this.getScaleForId(r)),
              (i.yScale = this.getScaleForId(l)),
              (i.rScale = this.getScaleForId(c)),
              (i.iScale = this.getScaleForId(p)),
              (i.vScale = this.getScaleForId(x));
          }
          getDataset() {
            return this.chart.data.datasets[this.index];
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
          getScaleForId(t) {
            return this.chart.scales[t];
          }
          _getOtherScale(t) {
            const i = this._cachedMeta;
            return t === i.iScale ? i.vScale : i.iScale;
          }
          reset() {
            this._update("reset");
          }
          _destroy() {
            const t = this._cachedMeta;
            this._data && (0, d.u)(this._data, this), t._stacked && ge(t);
          }
          _dataCheck() {
            const t = this.getDataset(),
              i = t.data || (t.data = []),
              n = this._data;
            if ((0, d.i)(i))
              this._data = (function wi(s) {
                const e = Object.keys(s),
                  t = new Array(e.length);
                let i, n, o;
                for (i = 0, n = e.length; i < n; ++i)
                  (o = e[i]), (t[i] = { x: o, y: s[o] });
                return t;
              })(i);
            else if (n !== i) {
              if (n) {
                (0, d.u)(n, this);
                const o = this._cachedMeta;
                ge(o), (o._parsed = []);
              }
              i && Object.isExtensible(i) && (0, d.l)(i, this),
                (this._syncList = []),
                (this._data = i);
            }
          }
          addElements() {
            const t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          }
          buildOrUpdateElements(t) {
            const i = this._cachedMeta,
              n = this.getDataset();
            let o = !1;
            this._dataCheck();
            const r = i._stacked;
            (i._stacked = ae(i.vScale, i)),
              i.stack !== n.stack && ((o = !0), ge(i), (i.stack = n.stack)),
              this._resyncElements(t),
              (o || r !== i._stacked) && le(this, i._parsed);
          }
          configure() {
            const t = this.chart.config,
              i = t.datasetScopeKeys(this._type),
              n = t.getOptionScopes(this.getDataset(), i, !0);
            (this.options = t.createResolver(n, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          }
          parse(t, i) {
            const { _cachedMeta: n, _data: o } = this,
              { iScale: r, _stacked: l } = n,
              c = r.axis;
            let x,
              S,
              k,
              u = (0 === t && i === o.length) || n._sorted,
              p = t > 0 && n._parsed[t - 1];
            if (!1 === this._parsing)
              (n._parsed = o), (n._sorted = !0), (k = o);
            else {
              k = (0, d.b)(o[t])
                ? this.parseArrayData(n, o, t, i)
                : (0, d.i)(o[t])
                ? this.parseObjectData(n, o, t, i)
                : this.parsePrimitiveData(n, o, t, i);
              const O = () => null === S[c] || (p && S[c] < p[c]);
              for (x = 0; x < i; ++x)
                (n._parsed[x + t] = S = k[x]), u && (O() && (u = !1), (p = S));
              n._sorted = u;
            }
            l && le(this, k);
          }
          parsePrimitiveData(t, i, n, o) {
            const { iScale: r, vScale: l } = t,
              c = r.axis,
              u = l.axis,
              p = r.getLabels(),
              x = r === l,
              S = new Array(o);
            let k, O, T;
            for (k = 0, O = o; k < O; ++k)
              (T = k + n),
                (S[k] = { [c]: x || r.parse(p[T], T), [u]: l.parse(i[T], T) });
            return S;
          }
          parseArrayData(t, i, n, o) {
            const { xScale: r, yScale: l } = t,
              c = new Array(o);
            let u, p, x, S;
            for (u = 0, p = o; u < p; ++u)
              (x = u + n),
                (S = i[x]),
                (c[u] = { x: r.parse(S[0], x), y: l.parse(S[1], x) });
            return c;
          }
          parseObjectData(t, i, n, o) {
            const { xScale: r, yScale: l } = t,
              { xAxisKey: c = "x", yAxisKey: u = "y" } = this._parsing,
              p = new Array(o);
            let x, S, k, O;
            for (x = 0, S = o; x < S; ++x)
              (k = x + n),
                (O = i[k]),
                (p[x] = {
                  x: r.parse((0, d.f)(O, c), k),
                  y: l.parse((0, d.f)(O, u), k),
                });
            return p;
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t];
          }
          getDataElement(t) {
            return this._cachedMeta.data[t];
          }
          applyStack(t, i, n) {
            const r = this._cachedMeta,
              l = i[t.axis];
            return Ye(
              { keys: si(this.chart, !0), values: i._stacks[t.axis] },
              l,
              r.index,
              { mode: n }
            );
          }
          updateRangeFromParsed(t, i, n, o) {
            const r = n[i.axis];
            let l = null === r ? NaN : r;
            const c = o && n._stacks[i.axis];
            o && c && ((o.values = c), (l = Ye(o, r, this._cachedMeta.index))),
              (t.min = Math.min(t.min, l)),
              (t.max = Math.max(t.max, l));
          }
          getMinMax(t, i) {
            const n = this._cachedMeta,
              o = n._parsed,
              r = n._sorted && t === n.iScale,
              l = o.length,
              c = this._getOtherScale(t),
              u = ((s, e, t) =>
                s &&
                !e.hidden &&
                e._stacked && { keys: si(this.chart, !0), values: null })(i, n),
              p = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
              },
              { min: x, max: S } = (function fe(s) {
                const {
                  min: e,
                  max: t,
                  minDefined: i,
                  maxDefined: n,
                } = s.getUserBounds();
                return {
                  min: i ? e : Number.NEGATIVE_INFINITY,
                  max: n ? t : Number.POSITIVE_INFINITY,
                };
              })(c);
            let k, O;
            function T() {
              O = o[k];
              const I = O[c.axis];
              return !(0, d.g)(O[t.axis]) || x > I || S < I;
            }
            for (
              k = 0;
              k < l && (T() || (this.updateRangeFromParsed(p, t, O, u), !r));
              ++k
            );
            if (r)
              for (k = l - 1; k >= 0; --k)
                if (!T()) {
                  this.updateRangeFromParsed(p, t, O, u);
                  break;
                }
            return p;
          }
          getAllParsedValues(t) {
            const i = this._cachedMeta._parsed,
              n = [];
            let o, r, l;
            for (o = 0, r = i.length; o < r; ++o)
              (l = i[o][t.axis]), (0, d.g)(l) && n.push(l);
            return n;
          }
          getMaxOverflow() {
            return !1;
          }
          getLabelAndValue(t) {
            const i = this._cachedMeta,
              n = i.iScale,
              o = i.vScale,
              r = this.getParsed(t);
            return {
              label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
              value: o ? "" + o.getLabelForValue(r[o.axis]) : "",
            };
          }
          _update(t) {
            const i = this._cachedMeta;
            this.update(t || "default"),
              (i._clip = (function Zt(s) {
                let e, t, i, n;
                return (
                  (0, d.i)(s)
                    ? ((e = s.top), (t = s.right), (i = s.bottom), (n = s.left))
                    : (e = t = i = n = s),
                  { top: e, right: t, bottom: i, left: n, disabled: !1 === s }
                );
              })(
                (0, d.v)(
                  this.options.clip,
                  (function Tt(s, e, t) {
                    if (!1 === t) return !1;
                    const i = De(s, t),
                      n = De(e, t);
                    return {
                      top: n.end,
                      right: i.end,
                      bottom: n.start,
                      left: i.start,
                    };
                  })(i.xScale, i.yScale, this.getMaxOverflow())
                )
              ));
          }
          update(t) {}
          draw() {
            const t = this._ctx,
              n = this._cachedMeta,
              o = n.data || [],
              r = this.chart.chartArea,
              l = [],
              c = this._drawStart || 0,
              u = this._drawCount || o.length - c;
            let p;
            for (
              n.dataset && n.dataset.draw(t, r, c, u), p = c;
              p < c + u;
              ++p
            ) {
              const x = o[p];
              x.hidden || (x.active ? l.push(x) : x.draw(t, r));
            }
            for (p = 0; p < l.length; ++p) l[p].draw(t, r);
          }
          getStyle(t, i) {
            const n = i ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(n)
              : this.resolveDataElementOptions(t || 0, n);
          }
          getContext(t, i, n) {
            const o = this.getDataset();
            let r;
            if (t >= 0 && t < this._cachedMeta.data.length) {
              const l = this._cachedMeta.data[t];
              (r =
                l.$context ||
                (l.$context = (function Bi(s, e, t) {
                  return (0, d.h)(s, {
                    active: !1,
                    dataIndex: e,
                    parsed: void 0,
                    raw: void 0,
                    element: t,
                    index: e,
                    mode: "default",
                    type: "data",
                  });
                })(this.getContext(), t, l))),
                (r.parsed = this.getParsed(t)),
                (r.raw = o.data[t]),
                (r.index = r.dataIndex = t);
            } else
              (r =
                this.$context ||
                (this.$context = (function Mi(s, e) {
                  return (0, d.h)(s, {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset",
                  });
                })(this.chart.getContext(), this.index))),
                (r.dataset = o),
                (r.index = r.datasetIndex = this.index);
            return (r.active = !!i), (r.mode = n), r;
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          }
          resolveDataElementOptions(t, i) {
            return this._resolveElementOptions(this.dataElementType.id, i, t);
          }
          _resolveElementOptions(t, i = "default", n) {
            const o = "active" === i,
              r = this._cachedDataOpts,
              l = t + "-" + i,
              c = r[l],
              u = this.enableOptionSharing && (0, d.j)(n);
            if (c) return Rt(c, u);
            const p = this.chart.config,
              x = p.datasetElementScopeKeys(this._type, t),
              S = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
              k = p.getOptionScopes(this.getDataset(), x),
              O = Object.keys(d.d.elements[t]),
              I = p.resolveNamedOptions(k, O, () => this.getContext(n, o), S);
            return (
              I.$shared && ((I.$shared = u), (r[l] = Object.freeze(Rt(I, u)))),
              I
            );
          }
          _resolveAnimations(t, i, n) {
            const o = this.chart,
              r = this._cachedDataOpts,
              l = `animation-${i}`,
              c = r[l];
            if (c) return c;
            let u;
            if (!1 !== o.options.animation) {
              const x = this.chart.config,
                S = x.datasetAnimationScopeKeys(this._type, i),
                k = x.getOptionScopes(this.getDataset(), S);
              u = x.createResolver(k, this.getContext(t, n, i));
            }
            const p = new Ut(o, u && u.animations);
            return u && u._cacheable && (r[l] = Object.freeze(p)), p;
          }
          getSharedOptions(t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          }
          includeOptions(t, i) {
            return !i || we(t) || this.chart._animationsDisabled;
          }
          updateElement(t, i, n, o) {
            we(o)
              ? Object.assign(t, n)
              : this._resolveAnimations(i, o).update(t, n);
          }
          updateSharedOptions(t, i, n) {
            t && !we(i) && this._resolveAnimations(void 0, i).update(t, n);
          }
          _setStyle(t, i, n, o) {
            t.active = o;
            const r = this.getStyle(i, o);
            this._resolveAnimations(i, n, o).update(t, {
              options: (!o && this.getSharedOptions(r)) || r,
            });
          }
          removeHoverStyle(t, i, n) {
            this._setStyle(t, n, "active", !1);
          }
          setHoverStyle(t, i, n) {
            this._setStyle(t, n, "active", !0);
          }
          _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
          }
          _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
          }
          _resyncElements(t) {
            const i = this._data,
              n = this._cachedMeta.data;
            for (const [c, u, p] of this._syncList) this[c](u, p);
            this._syncList = [];
            const o = n.length,
              r = i.length,
              l = Math.min(r, o);
            l && this.parse(0, l),
              r > o
                ? this._insertElements(o, r - o, t)
                : r < o && this._removeElements(r, o - r);
          }
          _insertElements(t, i, n = !0) {
            const o = this._cachedMeta,
              r = o.data,
              l = t + i;
            let c;
            const u = (p) => {
              for (p.length += i, c = p.length - 1; c >= l; c--)
                p[c] = p[c - i];
            };
            for (u(r), c = t; c < l; ++c) r[c] = new this.dataElementType();
            this._parsing && u(o._parsed),
              this.parse(t, i),
              n && this.updateElements(r, t, i, "reset");
          }
          updateElements(t, i, n, o) {}
          _removeElements(t, i) {
            const n = this._cachedMeta;
            if (this._parsing) {
              const o = n._parsed.splice(t, i);
              n._stacked && ge(n, o);
            }
            n.data.splice(t, i);
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
              const [i, n, o] = t;
              this[i](n, o);
            }
            this.chart._dataChanges.push([this.index, ...t]);
          }
          _onDataPush() {
            const t = arguments.length;
            this._sync([
              "_insertElements",
              this.getDataset().data.length - t,
              t,
            ]);
          }
          _onDataPop() {
            this._sync([
              "_removeElements",
              this._cachedMeta.data.length - 1,
              1,
            ]);
          }
          _onDataShift() {
            this._sync(["_removeElements", 0, 1]);
          }
          _onDataSplice(t, i) {
            i && this._sync(["_removeElements", t, i]);
            const n = arguments.length - 2;
            n && this._sync(["_insertElements", t, n]);
          }
          _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length]);
          }
        }
        return (s.defaults = {}), s;
      })();
      function xt(s) {
        const e = s.iScale,
          t = (function It(s, e) {
            if (!s._cache.$bar) {
              const t = s.getMatchingVisibleMetas(e);
              let i = [];
              for (let n = 0, o = t.length; n < o; n++)
                i = i.concat(t[n].controller.getAllParsedValues(s));
              s._cache.$bar = (0, d._)(i.sort((n, o) => n - o));
            }
            return s._cache.$bar;
          })(e, s.type);
        let n,
          o,
          r,
          l,
          i = e._length;
        const c = () => {
          32767 === r ||
            -32768 === r ||
            ((0, d.j)(l) && (i = Math.min(i, Math.abs(r - l) || i)), (l = r));
        };
        for (n = 0, o = t.length; n < o; ++n)
          (r = e.getPixelForValue(t[n])), c();
        for (l = void 0, n = 0, o = e.ticks.length; n < o; ++n)
          (r = e.getPixelForTick(n)), c();
        return i;
      }
      function bt(s, e, t, i) {
        return (
          (0, d.b)(s)
            ? (function gt(s, e, t, i) {
                const n = t.parse(s[0], i),
                  o = t.parse(s[1], i),
                  r = Math.min(n, o),
                  l = Math.max(n, o);
                let c = r,
                  u = l;
                Math.abs(r) > Math.abs(l) && ((c = l), (u = r)),
                  (e[t.axis] = u),
                  (e._custom = {
                    barStart: c,
                    barEnd: u,
                    start: n,
                    end: o,
                    min: r,
                    max: l,
                  });
              })(s, e, t, i)
            : (e[t.axis] = t.parse(s, i)),
          e
        );
      }
      function dt(s, e, t, i) {
        const n = s.iScale,
          o = s.vScale,
          r = n.getLabels(),
          l = n === o,
          c = [];
        let u, p, x, S;
        for (u = t, p = t + i; u < p; ++u)
          (S = e[u]),
            (x = {}),
            (x[n.axis] = l || n.parse(r[u], u)),
            c.push(bt(S, x, o, u));
        return c;
      }
      function Dt(s) {
        return s && void 0 !== s.barStart && void 0 !== s.barEnd;
      }
      function jt(s, e, t, i) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void (s.borderSkipped = o);
        const {
          start: r,
          end: l,
          reverse: c,
          top: u,
          bottom: p,
        } = (function Et(s) {
          let e, t, i, n, o;
          return (
            s.horizontal
              ? ((e = s.base > s.x), (t = "left"), (i = "right"))
              : ((e = s.base < s.y), (t = "bottom"), (i = "top")),
            e ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
            { start: t, end: i, reverse: e, top: n, bottom: o }
          );
        })(s);
        "middle" === n &&
          t &&
          ((s.enableBorderRadius = !0),
          (t._top || 0) === i
            ? (n = u)
            : (t._bottom || 0) === i
            ? (n = p)
            : ((o[Vt(p, r, l, c)] = !0), (n = u))),
          (o[Vt(n, r, l, c)] = !0),
          (s.borderSkipped = o);
      }
      function Vt(s, e, t, i) {
        return (
          i
            ? ((s = (function Bt(s, e, t) {
                return s === e ? t : s === t ? e : s;
              })(s, e, t)),
              (s = Se(s, t, e)))
            : (s = Se(s, e, t)),
          s
        );
      }
      function Se(s, e, t) {
        return "start" === s ? e : "end" === s ? t : s;
      }
      function ai(s, { inflateAmount: e }, t) {
        s.inflateAmount = "auto" === e ? (1 === t ? 0.33 : 0) : e;
      }
      (Nt.prototype.datasetElementType = null),
        (Nt.prototype.dataElementType = null);
      let pe = (() => {
          class s extends Nt {
            parsePrimitiveData(t, i, n, o) {
              return dt(t, i, n, o);
            }
            parseArrayData(t, i, n, o) {
              return dt(t, i, n, o);
            }
            parseObjectData(t, i, n, o) {
              const { iScale: r, vScale: l } = t,
                { xAxisKey: c = "x", yAxisKey: u = "y" } = this._parsing,
                p = "x" === r.axis ? c : u,
                x = "x" === l.axis ? c : u,
                S = [];
              let k, O, T, I;
              for (k = n, O = n + o; k < O; ++k)
                (I = i[k]),
                  (T = {}),
                  (T[r.axis] = r.parse((0, d.f)(I, p), k)),
                  S.push(bt((0, d.f)(I, x), T, l, k));
              return S;
            }
            updateRangeFromParsed(t, i, n, o) {
              super.updateRangeFromParsed(t, i, n, o);
              const r = n._custom;
              r &&
                i === this._cachedMeta.vScale &&
                ((t.min = Math.min(t.min, r.min)),
                (t.max = Math.max(t.max, r.max)));
            }
            getMaxOverflow() {
              return 0;
            }
            getLabelAndValue(t) {
              const i = this._cachedMeta,
                { iScale: n, vScale: o } = i,
                r = this.getParsed(t),
                l = r._custom,
                c = Dt(l)
                  ? "[" + l.start + ", " + l.end + "]"
                  : "" + o.getLabelForValue(r[o.axis]);
              return { label: "" + n.getLabelForValue(r[n.axis]), value: c };
            }
            initialize() {
              (this.enableOptionSharing = !0),
                super.initialize(),
                (this._cachedMeta.stack = this.getDataset().stack);
            }
            update(t) {
              const i = this._cachedMeta;
              this.updateElements(i.data, 0, i.data.length, t);
            }
            updateElements(t, i, n, o) {
              const r = "reset" === o,
                {
                  index: l,
                  _cachedMeta: { vScale: c },
                } = this,
                u = c.getBasePixel(),
                p = c.isHorizontal(),
                x = this._getRuler(),
                S = this.resolveDataElementOptions(i, o),
                k = this.getSharedOptions(S),
                O = this.includeOptions(o, k);
              this.updateSharedOptions(k, o, S);
              for (let T = i; T < i + n; T++) {
                const I = this.getParsed(T),
                  F =
                    r || (0, d.k)(I[c.axis])
                      ? { base: u, head: u }
                      : this._calculateBarValuePixels(T),
                  H = this._calculateBarIndexPixels(T, x),
                  K = (I._stacks || {})[c.axis],
                  N = {
                    horizontal: p,
                    base: F.base,
                    enableBorderRadius:
                      !K || Dt(I._custom) || l === K._top || l === K._bottom,
                    x: p ? F.head : H.center,
                    y: p ? H.center : F.head,
                    height: p ? H.size : Math.abs(F.size),
                    width: p ? Math.abs(F.size) : H.size,
                  };
                O &&
                  (N.options =
                    k ||
                    this.resolveDataElementOptions(
                      T,
                      t[T].active ? "active" : o
                    ));
                const W = N.options || t[T].options;
                jt(N, W, K, l),
                  ai(N, W, x.ratio),
                  this.updateElement(t[T], T, N, o);
              }
            }
            _getStacks(t, i) {
              const o = this._cachedMeta.iScale,
                r = o.getMatchingVisibleMetas(this._type),
                l = o.options.stacked,
                c = r.length,
                u = [];
              let p, x;
              for (p = 0; p < c; ++p)
                if (((x = r[p]), x.controller.options.grouped)) {
                  if (void 0 !== i) {
                    const S =
                      x.controller.getParsed(i)[
                        x.controller._cachedMeta.vScale.axis
                      ];
                    if ((0, d.k)(S) || isNaN(S)) continue;
                  }
                  if (
                    ((!1 === l ||
                      -1 === u.indexOf(x.stack) ||
                      (void 0 === l && void 0 === x.stack)) &&
                      u.push(x.stack),
                    x.index === t)
                  )
                    break;
                }
              return u.length || u.push(void 0), u;
            }
            _getStackCount(t) {
              return this._getStacks(void 0, t).length;
            }
            _getStackIndex(t, i, n) {
              const o = this._getStacks(t, n),
                r = void 0 !== i ? o.indexOf(i) : -1;
              return -1 === r ? o.length - 1 : r;
            }
            _getRuler() {
              const t = this.options,
                i = this._cachedMeta,
                n = i.iScale,
                o = [];
              let r, l;
              for (r = 0, l = i.data.length; r < l; ++r)
                o.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
              const c = t.barThickness;
              return {
                min: c || xt(i),
                pixels: o,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: this._getStackCount(),
                scale: n,
                grouped: t.grouped,
                ratio: c ? 1 : t.categoryPercentage * t.barPercentage,
              };
            }
            _calculateBarValuePixels(t) {
              const {
                  _cachedMeta: { vScale: i, _stacked: n },
                  options: { base: o, minBarLength: r },
                } = this,
                l = o || 0,
                c = this.getParsed(t),
                u = c._custom,
                p = Dt(u);
              let O,
                T,
                x = c[i.axis],
                S = 0,
                k = n ? this.applyStack(i, c, n) : x;
              k !== x && ((S = k - x), (k = x)),
                p &&
                  ((x = u.barStart),
                  (k = u.barEnd - u.barStart),
                  0 !== x && (0, d.s)(x) !== (0, d.s)(u.barEnd) && (S = 0),
                  (S += x));
              const I = (0, d.k)(o) || p ? S : o;
              let F = i.getPixelForValue(I);
              if (
                ((O = this.chart.getDataVisibility(t)
                  ? i.getPixelForValue(S + k)
                  : F),
                (T = O - F),
                Math.abs(T) < r &&
                  ((T =
                    (function at(s, e, t) {
                      return 0 !== s
                        ? (0, d.s)(s)
                        : (e.isHorizontal() ? 1 : -1) * (e.min >= t ? 1 : -1);
                    })(T, i, l) * r),
                  x === l && (F -= T / 2),
                  (O = F + T)),
                F === i.getPixelForValue(l))
              ) {
                const H = ((0, d.s)(T) * i.getLineWidthForValue(l)) / 2;
                (F += H), (T -= H);
              }
              return { size: T, base: F, head: O, center: O + T / 2 };
            }
            _calculateBarIndexPixels(t, i) {
              const n = i.scale,
                o = this.options,
                r = o.skipNull,
                l = (0, d.v)(o.maxBarThickness, 1 / 0);
              let c, u;
              if (i.grouped) {
                const p = r ? this._getStackCount(t) : i.stackCount,
                  x =
                    "flex" === o.barThickness
                      ? (function ot(s, e, t, i) {
                          const n = e.pixels,
                            o = n[s];
                          let r = s > 0 ? n[s - 1] : null,
                            l = s < n.length - 1 ? n[s + 1] : null;
                          const c = t.categoryPercentage;
                          null === r &&
                            (r = o - (null === l ? e.end - e.start : l - o)),
                            null === l && (l = o + o - r);
                          const u = o - ((o - Math.min(r, l)) / 2) * c;
                          return {
                            chunk: ((Math.abs(l - r) / 2) * c) / i,
                            ratio: t.barPercentage,
                            start: u,
                          };
                        })(t, i, o, p)
                      : (function se(s, e, t, i) {
                          const n = t.barThickness;
                          let o, r;
                          return (
                            (0, d.k)(n)
                              ? ((o = e.min * t.categoryPercentage),
                                (r = t.barPercentage))
                              : ((o = n * i), (r = 1)),
                            {
                              chunk: o / i,
                              ratio: r,
                              start: e.pixels[s] - o / 2,
                            }
                          );
                        })(t, i, o, p),
                  S = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? t : void 0
                  );
                (c = x.start + x.chunk * S + x.chunk / 2),
                  (u = Math.min(l, x.chunk * x.ratio));
              } else
                (c = n.getPixelForValue(this.getParsed(t)[n.axis], t)),
                  (u = Math.min(l, i.min * i.ratio));
              return { base: c - u / 2, head: c + u / 2, center: c, size: u };
            }
            draw() {
              const t = this._cachedMeta,
                i = t.vScale,
                n = t.data,
                o = n.length;
              let r = 0;
              for (; r < o; ++r)
                null !== this.getParsed(r)[i.axis] && n[r].draw(this._ctx);
            }
          }
          return (
            (s.id = "bar"),
            (s.defaults = {
              datasetElementType: !1,
              dataElementType: "bar",
              categoryPercentage: 0.8,
              barPercentage: 0.9,
              grouped: !0,
              animations: {
                numbers: {
                  type: "number",
                  properties: ["x", "y", "base", "width", "height"],
                },
              },
            }),
            (s.overrides = {
              scales: {
                _index_: { type: "category", offset: !0, grid: { offset: !0 } },
                _value_: { type: "linear", beginAtZero: !0 },
              },
            }),
            s
          );
        })(),
        Ae = (() => {
          class s extends Nt {
            initialize() {
              (this.enableOptionSharing = !0), super.initialize();
            }
            parsePrimitiveData(t, i, n, o) {
              const r = super.parsePrimitiveData(t, i, n, o);
              for (let l = 0; l < r.length; l++)
                r[l]._custom = this.resolveDataElementOptions(l + n).radius;
              return r;
            }
            parseArrayData(t, i, n, o) {
              const r = super.parseArrayData(t, i, n, o);
              for (let l = 0; l < r.length; l++)
                r[l]._custom = (0, d.v)(
                  i[n + l][2],
                  this.resolveDataElementOptions(l + n).radius
                );
              return r;
            }
            parseObjectData(t, i, n, o) {
              const r = super.parseObjectData(t, i, n, o);
              for (let l = 0; l < r.length; l++) {
                const c = i[n + l];
                r[l]._custom = (0, d.v)(
                  c && c.r && +c.r,
                  this.resolveDataElementOptions(l + n).radius
                );
              }
              return r;
            }
            getMaxOverflow() {
              const t = this._cachedMeta.data;
              let i = 0;
              for (let n = t.length - 1; n >= 0; --n)
                i = Math.max(
                  i,
                  t[n].size(this.resolveDataElementOptions(n)) / 2
                );
              return i > 0 && i;
            }
            getLabelAndValue(t) {
              const i = this._cachedMeta,
                { xScale: n, yScale: o } = i,
                r = this.getParsed(t),
                l = n.getLabelForValue(r.x),
                c = o.getLabelForValue(r.y),
                u = r._custom;
              return {
                label: i.label,
                value: "(" + l + ", " + c + (u ? ", " + u : "") + ")",
              };
            }
            update(t) {
              const i = this._cachedMeta.data;
              this.updateElements(i, 0, i.length, t);
            }
            updateElements(t, i, n, o) {
              const r = "reset" === o,
                { iScale: l, vScale: c } = this._cachedMeta,
                u = this.resolveDataElementOptions(i, o),
                p = this.getSharedOptions(u),
                x = this.includeOptions(o, p),
                S = l.axis,
                k = c.axis;
              for (let O = i; O < i + n; O++) {
                const T = t[O],
                  I = !r && this.getParsed(O),
                  F = {},
                  H = (F[S] = r
                    ? l.getPixelForDecimal(0.5)
                    : l.getPixelForValue(I[S])),
                  K = (F[k] = r ? c.getBasePixel() : c.getPixelForValue(I[k]));
                (F.skip = isNaN(H) || isNaN(K)),
                  x &&
                    ((F.options = this.resolveDataElementOptions(
                      O,
                      T.active ? "active" : o
                    )),
                    r && (F.options.radius = 0)),
                  this.updateElement(T, O, F, o);
              }
              this.updateSharedOptions(p, o, u);
            }
            resolveDataElementOptions(t, i) {
              const n = this.getParsed(t);
              let o = super.resolveDataElementOptions(t, i);
              o.$shared && (o = Object.assign({}, o, { $shared: !1 }));
              const r = o.radius;
              return (
                "active" !== i && (o.radius = 0),
                (o.radius += (0, d.v)(n && n._custom, r)),
                o
              );
            }
          }
          return (
            (s.id = "bubble"),
            (s.defaults = {
              datasetElementType: !1,
              dataElementType: "point",
              animations: {
                numbers: {
                  type: "number",
                  properties: ["x", "y", "borderWidth", "radius"],
                },
              },
            }),
            (s.overrides = {
              scales: { x: { type: "linear" }, y: { type: "linear" } },
              plugins: { tooltip: { callbacks: { title: () => "" } } },
            }),
            s
          );
        })(),
        Ce = (() => {
          class s extends Nt {
            constructor(t, i) {
              super(t, i),
                (this.enableOptionSharing = !0),
                (this.innerRadius = void 0),
                (this.outerRadius = void 0),
                (this.offsetX = void 0),
                (this.offsetY = void 0);
            }
            linkScales() {}
            parse(t, i) {
              const n = this.getDataset().data,
                o = this._cachedMeta;
              if (!1 === this._parsing) o._parsed = n;
              else {
                let l,
                  c,
                  r = (u) => +n[u];
                if ((0, d.i)(n[t])) {
                  const { key: u = "value" } = this._parsing;
                  r = (p) => +(0, d.f)(n[p], u);
                }
                for (l = t, c = t + i; l < c; ++l) o._parsed[l] = r(l);
              }
            }
            _getRotation() {
              return (0, d.t)(this.options.rotation - 90);
            }
            _getCircumference() {
              return (0, d.t)(this.options.circumference);
            }
            _getRotationExtents() {
              let t = d.T,
                i = -d.T;
              for (let n = 0; n < this.chart.data.datasets.length; ++n)
                if (this.chart.isDatasetVisible(n)) {
                  const o = this.chart.getDatasetMeta(n).controller,
                    r = o._getRotation(),
                    l = o._getCircumference();
                  (t = Math.min(t, r)), (i = Math.max(i, r + l));
                }
              return { rotation: t, circumference: i - t };
            }
            update(t) {
              const i = this.chart,
                { chartArea: n } = i,
                o = this._cachedMeta,
                r = o.data,
                l =
                  this.getMaxBorderWidth() +
                  this.getMaxOffset(r) +
                  this.options.spacing,
                c = Math.max((Math.min(n.width, n.height) - l) / 2, 0),
                u = Math.min((0, d.m)(this.options.cutout, c), 1),
                p = this._getRingWeight(this.index),
                { circumference: x, rotation: S } = this._getRotationExtents(),
                {
                  ratioX: k,
                  ratioY: O,
                  offsetX: T,
                  offsetY: I,
                } = (function $e(s, e, t) {
                  let i = 1,
                    n = 1,
                    o = 0,
                    r = 0;
                  if (e < d.T) {
                    const l = s,
                      c = l + e,
                      u = Math.cos(l),
                      p = Math.sin(l),
                      x = Math.cos(c),
                      S = Math.sin(c),
                      k = (K, N, W) =>
                        (0, d.p)(K, l, c, !0)
                          ? 1
                          : Math.max(N, N * t, W, W * t),
                      O = (K, N, W) =>
                        (0, d.p)(K, l, c, !0)
                          ? -1
                          : Math.min(N, N * t, W, W * t),
                      T = k(0, u, x),
                      I = k(d.H, p, S),
                      F = O(d.P, u, x),
                      H = O(d.P + d.H, p, S);
                    (i = (T - F) / 2),
                      (n = (I - H) / 2),
                      (o = -(T + F) / 2),
                      (r = -(I + H) / 2);
                  }
                  return { ratioX: i, ratioY: n, offsetX: o, offsetY: r };
                })(S, x, u),
                K = Math.max(
                  Math.min((n.width - l) / k, (n.height - l) / O) / 2,
                  0
                ),
                N = (0, d.n)(this.options.radius, K),
                G =
                  (N - Math.max(N * u, 0)) /
                  this._getVisibleDatasetWeightTotal();
              (this.offsetX = T * N),
                (this.offsetY = I * N),
                (o.total = this.calculateTotal()),
                (this.outerRadius =
                  N - G * this._getRingWeightOffset(this.index)),
                (this.innerRadius = Math.max(this.outerRadius - G * p, 0)),
                this.updateElements(r, 0, r.length, t);
            }
            _circumference(t, i) {
              const n = this.options,
                o = this._cachedMeta,
                r = this._getCircumference();
              return (i && n.animation.animateRotate) ||
                !this.chart.getDataVisibility(t) ||
                null === o._parsed[t] ||
                o.data[t].hidden
                ? 0
                : this.calculateCircumference((o._parsed[t] * r) / d.T);
            }
            updateElements(t, i, n, o) {
              const r = "reset" === o,
                l = this.chart,
                c = l.chartArea,
                x = (c.left + c.right) / 2,
                S = (c.top + c.bottom) / 2,
                k = r && l.options.animation.animateScale,
                O = k ? 0 : this.innerRadius,
                T = k ? 0 : this.outerRadius,
                I = this.resolveDataElementOptions(i, o),
                F = this.getSharedOptions(I),
                H = this.includeOptions(o, F);
              let N,
                K = this._getRotation();
              for (N = 0; N < i; ++N) K += this._circumference(N, r);
              for (N = i; N < i + n; ++N) {
                const W = this._circumference(N, r),
                  G = t[N],
                  Q = {
                    x: x + this.offsetX,
                    y: S + this.offsetY,
                    startAngle: K,
                    endAngle: K + W,
                    circumference: W,
                    outerRadius: T,
                    innerRadius: O,
                  };
                H &&
                  (Q.options =
                    F ||
                    this.resolveDataElementOptions(N, G.active ? "active" : o)),
                  (K += W),
                  this.updateElement(G, N, Q, o);
              }
              this.updateSharedOptions(F, o, I);
            }
            calculateTotal() {
              const t = this._cachedMeta,
                i = t.data;
              let o,
                n = 0;
              for (o = 0; o < i.length; o++) {
                const r = t._parsed[o];
                null !== r &&
                  !isNaN(r) &&
                  this.chart.getDataVisibility(o) &&
                  !i[o].hidden &&
                  (n += Math.abs(r));
              }
              return n;
            }
            calculateCircumference(t) {
              const i = this._cachedMeta.total;
              return i > 0 && !isNaN(t) ? d.T * (Math.abs(t) / i) : 0;
            }
            getLabelAndValue(t) {
              const n = this.chart,
                o = n.data.labels || [],
                r = (0, d.o)(this._cachedMeta._parsed[t], n.options.locale);
              return { label: o[t] || "", value: r };
            }
            getMaxBorderWidth(t) {
              let i = 0;
              const n = this.chart;
              let o, r, l, c, u;
              if (!t)
                for (o = 0, r = n.data.datasets.length; o < r; ++o)
                  if (n.isDatasetVisible(o)) {
                    (l = n.getDatasetMeta(o)), (t = l.data), (c = l.controller);
                    break;
                  }
              if (!t) return 0;
              for (o = 0, r = t.length; o < r; ++o)
                (u = c.resolveDataElementOptions(o)),
                  "inner" !== u.borderAlign &&
                    (i = Math.max(
                      i,
                      u.borderWidth || 0,
                      u.hoverBorderWidth || 0
                    ));
              return i;
            }
            getMaxOffset(t) {
              let i = 0;
              for (let n = 0, o = t.length; n < o; ++n) {
                const r = this.resolveDataElementOptions(n);
                i = Math.max(i, r.offset || 0, r.hoverOffset || 0);
              }
              return i;
            }
            _getRingWeightOffset(t) {
              let i = 0;
              for (let n = 0; n < t; ++n)
                this.chart.isDatasetVisible(n) && (i += this._getRingWeight(n));
              return i;
            }
            _getRingWeight(t) {
              return Math.max(
                (0, d.v)(this.chart.data.datasets[t].weight, 1),
                0
              );
            }
            _getVisibleDatasetWeightTotal() {
              return (
                this._getRingWeightOffset(this.chart.data.datasets.length) || 1
              );
            }
          }
          return (
            (s.id = "doughnut"),
            (s.defaults = {
              datasetElementType: !1,
              dataElementType: "arc",
              animation: { animateRotate: !0, animateScale: !1 },
              animations: {
                numbers: {
                  type: "number",
                  properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth",
                    "spacing",
                  ],
                },
              },
              cutout: "50%",
              rotation: 0,
              circumference: 360,
              radius: "100%",
              spacing: 0,
              indexAxis: "r",
            }),
            (s.descriptors = {
              _scriptable: (e) => "spacing" !== e,
              _indexable: (e) => "spacing" !== e,
            }),
            (s.overrides = {
              aspectRatio: 1,
              plugins: {
                legend: {
                  labels: {
                    generateLabels(e) {
                      const t = e.data;
                      if (t.labels.length && t.datasets.length) {
                        const {
                          labels: { pointStyle: i },
                        } = e.legend.options;
                        return t.labels.map((n, o) => {
                          const l = e.getDatasetMeta(0).controller.getStyle(o);
                          return {
                            text: n,
                            fillStyle: l.backgroundColor,
                            strokeStyle: l.borderColor,
                            lineWidth: l.borderWidth,
                            pointStyle: i,
                            hidden: !e.getDataVisibility(o),
                            index: o,
                          };
                        });
                      }
                      return [];
                    },
                  },
                  onClick(e, t, i) {
                    i.chart.toggleDataVisibility(t.index), i.chart.update();
                  },
                },
                tooltip: {
                  callbacks: {
                    title: () => "",
                    label(e) {
                      let t = e.label;
                      const i = ": " + e.formattedValue;
                      return (
                        (0, d.b)(t) ? ((t = t.slice()), (t[0] += i)) : (t += i),
                        t
                      );
                    },
                  },
                },
              },
            }),
            s
          );
        })(),
        ce = (() => {
          class s extends Nt {
            initialize() {
              (this.enableOptionSharing = !0), super.initialize();
            }
            update(t) {
              const i = this._cachedMeta,
                { dataset: n, data: o = [], _dataset: r } = i,
                l = this.chart._animationsDisabled;
              let { start: c, count: u } = (function nn(s, e, t) {
                const i = e.length;
                let n = 0,
                  o = i;
                if (s._sorted) {
                  const { iScale: r, _parsed: l } = s,
                    c = r.axis,
                    {
                      min: u,
                      max: p,
                      minDefined: x,
                      maxDefined: S,
                    } = r.getUserBounds();
                  x &&
                    (n = (0, d.w)(
                      Math.min(
                        (0, d.x)(l, r.axis, u).lo,
                        t ? i : (0, d.x)(e, c, r.getPixelForValue(u)).lo
                      ),
                      0,
                      i - 1
                    )),
                    (o = S
                      ? (0, d.w)(
                          Math.max(
                            (0, d.x)(l, r.axis, p).hi + 1,
                            t ? 0 : (0, d.x)(e, c, r.getPixelForValue(p)).hi + 1
                          ),
                          n,
                          i
                        ) - n
                      : i - n);
                }
                return { start: n, count: o };
              })(i, o, l);
              (this._drawStart = c),
                (this._drawCount = u),
                (function Fi(s) {
                  const { xScale: e, yScale: t, _scaleRanges: i } = s,
                    n = { xmin: e.min, xmax: e.max, ymin: t.min, ymax: t.max };
                  if (!i) return (s._scaleRanges = n), !0;
                  const o =
                    i.xmin !== e.min ||
                    i.xmax !== e.max ||
                    i.ymin !== t.min ||
                    i.ymax !== t.max;
                  return Object.assign(i, n), o;
                })(i) && ((c = 0), (u = o.length)),
                (n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!r._decimated),
                (n.points = o);
              const p = this.resolveDatasetElementOptions(t);
              this.options.showLine || (p.borderWidth = 0),
                (p.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !l, options: p }, t),
                this.updateElements(o, c, u, t);
            }
            updateElements(t, i, n, o) {
              const r = "reset" === o,
                {
                  iScale: l,
                  vScale: c,
                  _stacked: u,
                  _dataset: p,
                } = this._cachedMeta,
                x = this.resolveDataElementOptions(i, o),
                S = this.getSharedOptions(x),
                k = this.includeOptions(o, S),
                O = l.axis,
                T = c.axis,
                { spanGaps: I, segment: F } = this.options,
                H = (0, d.q)(I) ? I : Number.POSITIVE_INFINITY,
                K = this.chart._animationsDisabled || r || "none" === o;
              let N = i > 0 && this.getParsed(i - 1);
              for (let W = i; W < i + n; ++W) {
                const G = t[W],
                  Q = this.getParsed(W),
                  nt = K ? G : {},
                  it = (0, d.k)(Q[T]),
                  _t = (nt[O] = l.getPixelForValue(Q[O], W)),
                  ut = (nt[T] =
                    r || it
                      ? c.getBasePixel()
                      : c.getPixelForValue(
                          u ? this.applyStack(c, Q, u) : Q[T],
                          W
                        ));
                (nt.skip = isNaN(_t) || isNaN(ut) || it),
                  (nt.stop = W > 0 && Q[O] - N[O] > H),
                  F && ((nt.parsed = Q), (nt.raw = p.data[W])),
                  k &&
                    (nt.options =
                      S ||
                      this.resolveDataElementOptions(
                        W,
                        G.active ? "active" : o
                      )),
                  K || this.updateElement(G, W, nt, o),
                  (N = Q);
              }
              this.updateSharedOptions(S, o, x);
            }
            getMaxOverflow() {
              const t = this._cachedMeta,
                i = t.dataset,
                n = (i.options && i.options.borderWidth) || 0,
                o = t.data || [];
              if (!o.length) return n;
              const r = o[0].size(this.resolveDataElementOptions(0)),
                l = o[o.length - 1].size(
                  this.resolveDataElementOptions(o.length - 1)
                );
              return Math.max(n, r, l) / 2;
            }
            draw() {
              const t = this._cachedMeta;
              t.dataset.updateControlPoints(
                this.chart.chartArea,
                t.iScale.axis
              ),
                super.draw();
            }
          }
          return (
            (s.id = "line"),
            (s.defaults = {
              datasetElementType: "line",
              dataElementType: "point",
              showLine: !0,
              spanGaps: !1,
            }),
            (s.overrides = {
              scales: {
                _index_: { type: "category" },
                _value_: { type: "linear" },
              },
            }),
            s
          );
        })(),
        li = (() => {
          class s extends Nt {
            constructor(t, i) {
              super(t, i),
                (this.innerRadius = void 0),
                (this.outerRadius = void 0);
            }
            getLabelAndValue(t) {
              const n = this.chart,
                o = n.data.labels || [],
                r = (0, d.o)(this._cachedMeta._parsed[t].r, n.options.locale);
              return { label: o[t] || "", value: r };
            }
            update(t) {
              const i = this._cachedMeta.data;
              this._updateRadius(), this.updateElements(i, 0, i.length, t);
            }
            _updateRadius() {
              const t = this.chart,
                i = t.chartArea,
                n = t.options,
                o = Math.min(i.right - i.left, i.bottom - i.top),
                r = Math.max(o / 2, 0),
                c =
                  (r -
                    Math.max(
                      n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1,
                      0
                    )) /
                  t.getVisibleDatasetCount();
              (this.outerRadius = r - c * this.index),
                (this.innerRadius = this.outerRadius - c);
            }
            updateElements(t, i, n, o) {
              const r = "reset" === o,
                l = this.chart,
                c = this.getDataset(),
                p = l.options.animation,
                x = this._cachedMeta.rScale,
                S = x.xCenter,
                k = x.yCenter,
                O = x.getIndexAngle(0) - 0.5 * d.P;
              let I,
                T = O;
              const F = 360 / this.countVisibleElements();
              for (I = 0; I < i; ++I) T += this._computeAngle(I, o, F);
              for (I = i; I < i + n; I++) {
                const H = t[I];
                let K = T,
                  N = T + this._computeAngle(I, o, F),
                  W = l.getDataVisibility(I)
                    ? x.getDistanceFromCenterForValue(c.data[I])
                    : 0;
                (T = N),
                  r &&
                    (p.animateScale && (W = 0), p.animateRotate && (K = N = O));
                const G = {
                  x: S,
                  y: k,
                  innerRadius: 0,
                  outerRadius: W,
                  startAngle: K,
                  endAngle: N,
                  options: this.resolveDataElementOptions(
                    I,
                    H.active ? "active" : o
                  ),
                };
                this.updateElement(H, I, G, o);
              }
            }
            countVisibleElements() {
              const t = this.getDataset();
              let n = 0;
              return (
                this._cachedMeta.data.forEach((o, r) => {
                  !isNaN(t.data[r]) && this.chart.getDataVisibility(r) && n++;
                }),
                n
              );
            }
            _computeAngle(t, i, n) {
              return this.chart.getDataVisibility(t)
                ? (0, d.t)(this.resolveDataElementOptions(t, i).angle || n)
                : 0;
            }
          }
          return (
            (s.id = "polarArea"),
            (s.defaults = {
              dataElementType: "arc",
              animation: { animateRotate: !0, animateScale: !0 },
              animations: {
                numbers: {
                  type: "number",
                  properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                  ],
                },
              },
              indexAxis: "r",
              startAngle: 0,
            }),
            (s.overrides = {
              aspectRatio: 1,
              plugins: {
                legend: {
                  labels: {
                    generateLabels(e) {
                      const t = e.data;
                      if (t.labels.length && t.datasets.length) {
                        const {
                          labels: { pointStyle: i },
                        } = e.legend.options;
                        return t.labels.map((n, o) => {
                          const l = e.getDatasetMeta(0).controller.getStyle(o);
                          return {
                            text: n,
                            fillStyle: l.backgroundColor,
                            strokeStyle: l.borderColor,
                            lineWidth: l.borderWidth,
                            pointStyle: i,
                            hidden: !e.getDataVisibility(o),
                            index: o,
                          };
                        });
                      }
                      return [];
                    },
                  },
                  onClick(e, t, i) {
                    i.chart.toggleDataVisibility(t.index), i.chart.update();
                  },
                },
                tooltip: {
                  callbacks: {
                    title: () => "",
                    label: (e) =>
                      e.chart.data.labels[e.dataIndex] +
                      ": " +
                      e.formattedValue,
                  },
                },
              },
              scales: {
                r: {
                  type: "radialLinear",
                  angleLines: { display: !1 },
                  beginAtZero: !0,
                  grid: { circular: !0 },
                  pointLabels: { display: !1 },
                  startAngle: 0,
                },
              },
            }),
            s
          );
        })(),
        Te = (() => {
          class s extends Ce {}
          return (
            (s.id = "pie"),
            (s.defaults = {
              cutout: 0,
              rotation: 0,
              circumference: 360,
              radius: "100%",
            }),
            s
          );
        })(),
        Si = (() => {
          class s extends Nt {
            getLabelAndValue(t) {
              const i = this._cachedMeta.vScale,
                n = this.getParsed(t);
              return {
                label: i.getLabels()[t],
                value: "" + i.getLabelForValue(n[i.axis]),
              };
            }
            update(t) {
              const i = this._cachedMeta,
                n = i.dataset,
                o = i.data || [],
                r = i.iScale.getLabels();
              if (((n.points = o), "resize" !== t)) {
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0),
                  this.updateElement(
                    n,
                    void 0,
                    { _loop: !0, _fullLoop: r.length === o.length, options: l },
                    t
                  );
              }
              this.updateElements(o, 0, o.length, t);
            }
            updateElements(t, i, n, o) {
              const r = this.getDataset(),
                l = this._cachedMeta.rScale,
                c = "reset" === o;
              for (let u = i; u < i + n; u++) {
                const p = t[u],
                  x = this.resolveDataElementOptions(
                    u,
                    p.active ? "active" : o
                  ),
                  S = l.getPointPositionForValue(u, r.data[u]),
                  k = c ? l.xCenter : S.x,
                  O = c ? l.yCenter : S.y,
                  T = {
                    x: k,
                    y: O,
                    angle: S.angle,
                    skip: isNaN(k) || isNaN(O),
                    options: x,
                  };
                this.updateElement(p, u, T, o);
              }
            }
          }
          return (
            (s.id = "radar"),
            (s.defaults = {
              datasetElementType: "line",
              dataElementType: "point",
              indexAxis: "r",
              showLine: !0,
              elements: { line: { fill: "start" } },
            }),
            (s.overrides = {
              aspectRatio: 1,
              scales: { r: { type: "radialLinear" } },
            }),
            s
          );
        })(),
        Ft = (() => {
          class s extends ce {}
          return (
            (s.id = "scatter"),
            (s.defaults = { showLine: !1, fill: !1 }),
            (s.overrides = {
              interaction: { mode: "point" },
              plugins: {
                tooltip: {
                  callbacks: {
                    title: () => "",
                    label: (e) => "(" + e.label + ", " + e.formattedValue + ")",
                  },
                },
              },
              scales: { x: { type: "linear" }, y: { type: "linear" } },
            }),
            s
          );
        })();
      function qt() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      var Ci = {
        _date: (() => {
          class s {
            constructor(t) {
              this.options = t || {};
            }
            formats() {
              return qt();
            }
            parse(t, i) {
              return qt();
            }
            format(t, i) {
              return qt();
            }
            add(t, i, n) {
              return qt();
            }
            diff(t, i, n) {
              return qt();
            }
            startOf(t, i, n) {
              return qt();
            }
            endOf(t, i) {
              return qt();
            }
          }
          return (
            (s.override = function (e) {
              Object.assign(s.prototype, e);
            }),
            s
          );
        })(),
      };
      function te(s, e) {
        return "native" in s ? { x: s.x, y: s.y } : (0, d.y)(s, e);
      }
      function zi(s, e, t, i) {
        const { controller: n, data: o, _sorted: r } = s,
          l = n._cachedMeta.iScale;
        if (l && e === l.axis && r && o.length) {
          const c = l._reversePixels ? d.A : d.x;
          if (!i) return c(o, e, t);
          if (n._sharedOptions) {
            const u = o[0],
              p = "function" == typeof u.getRange && u.getRange(e);
            if (p) {
              const x = c(o, e, t - p),
                S = c(o, e, t + p);
              return { lo: x.lo, hi: S.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function Ue(s, e, t, i, n) {
        const o = s.getSortedVisibleDatasetMetas(),
          r = t[e];
        for (let l = 0, c = o.length; l < c; ++l) {
          const { index: u, data: p } = o[l],
            { lo: x, hi: S } = zi(o[l], e, r, n);
          for (let k = x; k <= S; ++k) {
            const O = p[k];
            O.skip || i(O, u, k);
          }
        }
      }
      function Xe(s, e, t, i) {
        const n = [];
        return (
          (0, d.z)(e, s.chartArea, s._minPadding) &&
            Ue(
              s,
              t,
              e,
              function (r, l, c) {
                r.inRange(e.x, e.y, i) &&
                  n.push({ element: r, datasetIndex: l, index: c });
              },
              !0
            ),
          n
        );
      }
      function Pi(s, e, t, i, n) {
        const o = (function Xt(s) {
          const e = -1 !== s.indexOf("x"),
            t = -1 !== s.indexOf("y");
          return function (i, n) {
            const o = e ? Math.abs(i.x - n.x) : 0,
              r = t ? Math.abs(i.y - n.y) : 0;
            return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
          };
        })(t);
        let r = Number.POSITIVE_INFINITY,
          l = [];
        return (
          (0, d.z)(e, s.chartArea, s._minPadding) &&
            Ue(s, t, e, function (u, p, x) {
              if (i && !u.inRange(e.x, e.y, n)) return;
              const S = u.getCenterPoint(n);
              if (
                !(0, d.z)(S, s.chartArea, s._minPadding) &&
                !u.inRange(e.x, e.y, n)
              )
                return;
              const k = o(e, S);
              k < r
                ? ((l = [{ element: u, datasetIndex: p, index: x }]), (r = k))
                : k === r && l.push({ element: u, datasetIndex: p, index: x });
            }),
          l
        );
      }
      function Wi(s, e, t, i) {
        const n = te(e, s),
          o = [],
          r = t.axis,
          l = "x" === r ? "inXRange" : "inYRange";
        let c = !1;
        return (
          (function ki(s, e) {
            const t = s.getSortedVisibleDatasetMetas();
            let i, n, o;
            for (let r = 0, l = t.length; r < l; ++r) {
              ({ index: i, data: n } = t[r]);
              for (let c = 0, u = n.length; c < u; ++c)
                (o = n[c]), o.skip || e(o, i, c);
            }
          })(s, (u, p, x) => {
            u[l](n[r], i) && o.push({ element: u, datasetIndex: p, index: x }),
              u.inRange(n.x, n.y, i) && (c = !0);
          }),
          t.intersect && !c ? [] : o
        );
      }
      var Ke = {
        modes: {
          index(s, e, t, i) {
            const n = te(e, s),
              o = t.axis || "x",
              r = t.intersect ? Xe(s, n, o, i) : Pi(s, n, o, !1, i),
              l = [];
            return r.length
              ? (s.getSortedVisibleDatasetMetas().forEach((c) => {
                  const u = r[0].index,
                    p = c.data[u];
                  p &&
                    !p.skip &&
                    l.push({ element: p, datasetIndex: c.index, index: u });
                }),
                l)
              : [];
          },
          dataset(s, e, t, i) {
            const n = te(e, s),
              o = t.axis || "xy";
            let r = t.intersect ? Xe(s, n, o, i) : Pi(s, n, o, !1, i);
            if (r.length > 0) {
              const l = r[0].datasetIndex,
                c = s.getDatasetMeta(l).data;
              r = [];
              for (let u = 0; u < c.length; ++u)
                r.push({ element: c[u], datasetIndex: l, index: u });
            }
            return r;
          },
          point: (s, e, t, i) => Xe(s, te(e, s), t.axis || "xy", i),
          nearest: (s, e, t, i) =>
            Pi(s, te(e, s), t.axis || "xy", t.intersect, i),
          x: (s, e, t, i) => Wi(s, e, { axis: "x", intersect: t.intersect }, i),
          y: (s, e, t, i) => Wi(s, e, { axis: "y", intersect: t.intersect }, i),
        },
      };
      const Hi = ["left", "top", "right", "bottom"];
      function Le(s, e) {
        return s.filter((t) => t.pos === e);
      }
      function Ni(s, e) {
        return s.filter((t) => -1 === Hi.indexOf(t.pos) && t.box.axis === e);
      }
      function oe(s, e) {
        return s.sort((t, i) => {
          const n = e ? i : t,
            o = e ? t : i;
          return n.weight === o.weight
            ? n.index - o.index
            : n.weight - o.weight;
        });
      }
      function Qe(s, e, t, i) {
        return Math.max(s[t], e[t]) + Math.max(s[i], e[i]);
      }
      function Oi(s, e) {
        (s.top = Math.max(s.top, e.top)),
          (s.left = Math.max(s.left, e.left)),
          (s.bottom = Math.max(s.bottom, e.bottom)),
          (s.right = Math.max(s.right, e.right));
      }
      function Vi(s, e, t, i) {
        const { pos: n, box: o } = t,
          r = s.maxPadding;
        if (!(0, d.i)(n)) {
          t.size && (s[n] -= t.size);
          const x = i[t.stack] || { size: 0, count: 1 };
          (x.size = Math.max(x.size, t.horizontal ? o.height : o.width)),
            (t.size = x.size / x.count),
            (s[n] += t.size);
        }
        o.getPadding && Oi(r, o.getPadding());
        const l = Math.max(0, e.outerWidth - Qe(r, s, "left", "right")),
          c = Math.max(0, e.outerHeight - Qe(r, s, "top", "bottom")),
          u = l !== s.w,
          p = c !== s.h;
        return (
          (s.w = l),
          (s.h = c),
          t.horizontal ? { same: u, other: p } : { same: p, other: u }
        );
      }
      function Ze(s, e) {
        const t = e.maxPadding;
        return (function i(n) {
          const o = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            n.forEach((r) => {
              o[r] = Math.max(e[r], t[r]);
            }),
            o
          );
        })(s ? ["left", "right"] : ["top", "bottom"]);
      }
      function Ie(s, e, t, i) {
        const n = [];
        let o, r, l, c, u, p;
        for (o = 0, r = s.length, u = 0; o < r; ++o) {
          (l = s[o]),
            (c = l.box),
            c.update(l.width || e.w, l.height || e.h, Ze(l.horizontal, e));
          const { same: x, other: S } = Vi(e, t, l, i);
          (u |= x && n.length), (p = p || S), c.fullSize || n.push(l);
        }
        return (u && Ie(n, e, t, i)) || p;
      }
      function ci(s, e, t, i, n) {
        (s.top = t),
          (s.left = e),
          (s.right = e + i),
          (s.bottom = t + n),
          (s.width = i),
          (s.height = n);
      }
      function Yi(s, e, t, i) {
        const n = t.padding;
        let { x: o, y: r } = e;
        for (const l of s) {
          const c = l.box,
            u = i[l.stack] || { count: 1, placed: 0, weight: 1 },
            p = l.stackWeight / u.weight || 1;
          if (l.horizontal) {
            const x = e.w * p,
              S = u.size || c.height;
            (0, d.j)(u.start) && (r = u.start),
              c.fullSize
                ? ci(c, n.left, r, t.outerWidth - n.right - n.left, S)
                : ci(c, e.left + u.placed, r, x, S),
              (u.start = r),
              (u.placed += x),
              (r = c.bottom);
          } else {
            const x = e.h * p,
              S = u.size || c.width;
            (0, d.j)(u.start) && (o = u.start),
              c.fullSize
                ? ci(c, o, n.top, S, t.outerHeight - n.bottom - n.top)
                : ci(c, o, e.top + u.placed, S, x),
              (u.start = o),
              (u.placed += x),
              (o = c.right);
          }
        }
        (e.x = o), (e.y = r);
      }
      d.d.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var At = {
        addBox(s, e) {
          s.boxes || (s.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            s.boxes.push(e);
        },
        removeBox(s, e) {
          const t = s.boxes ? s.boxes.indexOf(e) : -1;
          -1 !== t && s.boxes.splice(t, 1);
        },
        configure(s, e, t) {
          (e.fullSize = t.fullSize),
            (e.position = t.position),
            (e.weight = t.weight);
        },
        update(s, e, t, i) {
          if (!s) return;
          const n = (0, d.B)(s.options.layout.padding),
            o = Math.max(e - n.width, 0),
            r = Math.max(t - n.height, 0),
            l = (function Re(s) {
              const e = (function Ge(s) {
                  const e = [];
                  let t, i, n, o, r, l;
                  for (t = 0, i = (s || []).length; t < i; ++t)
                    (n = s[t]),
                      ({
                        position: o,
                        options: { stack: r, stackWeight: l = 1 },
                      } = n),
                      e.push({
                        index: t,
                        box: n,
                        pos: o,
                        horizontal: n.isHorizontal(),
                        weight: n.weight,
                        stack: r && o + r,
                        stackWeight: l,
                      });
                  return e;
                })(s),
                t = oe(
                  e.filter((u) => u.box.fullSize),
                  !0
                ),
                i = oe(Le(e, "left"), !0),
                n = oe(Le(e, "right")),
                o = oe(Le(e, "top"), !0),
                r = oe(Le(e, "bottom")),
                l = Ni(e, "x"),
                c = Ni(e, "y");
              return {
                fullSize: t,
                leftAndTop: i.concat(o),
                rightAndBottom: n.concat(c).concat(r).concat(l),
                chartArea: Le(e, "chartArea"),
                vertical: i.concat(n).concat(c),
                horizontal: o.concat(r).concat(l),
              };
            })(s.boxes),
            c = l.vertical,
            u = l.horizontal;
          (0, d.C)(s.boxes, (T) => {
            "function" == typeof T.beforeLayout && T.beforeLayout();
          });
          const p =
              c.reduce(
                (T, I) =>
                  I.box.options && !1 === I.box.options.display ? T : T + 1,
                0
              ) || 1,
            x = Object.freeze({
              outerWidth: e,
              outerHeight: t,
              padding: n,
              availableWidth: o,
              availableHeight: r,
              vBoxMaxWidth: o / 2 / p,
              hBoxMaxHeight: r / 2,
            }),
            S = Object.assign({}, n);
          Oi(S, (0, d.B)(i));
          const k = Object.assign(
              { maxPadding: S, w: o, h: r, x: n.left, y: n.top },
              n
            ),
            O = (function Je(s, e) {
              const t = (function me(s) {
                  const e = {};
                  for (const t of s) {
                    const { stack: i, pos: n, stackWeight: o } = t;
                    if (!i || !Hi.includes(n)) continue;
                    const r =
                      e[i] ||
                      (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
                    r.count++, (r.weight += o);
                  }
                  return e;
                })(s),
                { vBoxMaxWidth: i, hBoxMaxHeight: n } = e;
              let o, r, l;
              for (o = 0, r = s.length; o < r; ++o) {
                l = s[o];
                const { fullSize: c } = l.box,
                  u = t[l.stack],
                  p = u && l.stackWeight / u.weight;
                l.horizontal
                  ? ((l.width = p ? p * i : c && e.availableWidth),
                    (l.height = n))
                  : ((l.width = i),
                    (l.height = p ? p * n : c && e.availableHeight));
              }
              return t;
            })(c.concat(u), x);
          Ie(l.fullSize, k, x, O),
            Ie(c, k, x, O),
            Ie(u, k, x, O) && Ie(c, k, x, O),
            (function sn(s) {
              const e = s.maxPadding;
              function t(i) {
                const n = Math.max(e[i] - s[i], 0);
                return (s[i] += n), n;
              }
              (s.y += t("top")), (s.x += t("left")), t("right"), t("bottom");
            })(k),
            Yi(l.leftAndTop, k, x, O),
            (k.x += k.w),
            (k.y += k.h),
            Yi(l.rightAndBottom, k, x, O),
            (s.chartArea = {
              left: k.left,
              top: k.top,
              right: k.left + k.w,
              bottom: k.top + k.h,
              height: k.h,
              width: k.w,
            }),
            (0, d.C)(l.chartArea, (T) => {
              const I = T.box;
              Object.assign(I, s.chartArea),
                I.update(k.w, k.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class ke {
        acquireContext(e, t) {}
        releaseContext(e) {
          return !1;
        }
        addEventListener(e, t, i) {}
        removeEventListener(e, t, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(e, t, i, n) {
          return (
            (t = Math.max(0, t || e.width)),
            (i = i || e.height),
            { width: t, height: Math.max(0, n ? Math.floor(t / n) : i) }
          );
        }
        isAttached(e) {
          return !0;
        }
        updateConfig(e) {}
      }
      class Be extends ke {
        acquireContext(e) {
          return (e && e.getContext && e.getContext("2d")) || null;
        }
        updateConfig(e) {
          e.options.animation = !1;
        }
      }
      const hi = "$chartjs",
        be = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Di = (s) => null === s || "" === s,
        he = !!d.I && { passive: !0 };
      function $i(s, e, t) {
        s.canvas.removeEventListener(e, t, he);
      }
      function Fe(s, e) {
        for (const t of s) if (t === e || t.contains(e)) return !0;
      }
      function di(s, e, t) {
        const i = s.canvas,
          n = new MutationObserver((o) => {
            let r = !1;
            for (const l of o)
              (r = r || Fe(l.addedNodes, i)), (r = r && !Fe(l.removedNodes, i));
            r && t();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      function je(s, e, t) {
        const i = s.canvas,
          n = new MutationObserver((o) => {
            let r = !1;
            for (const l of o)
              (r = r || Fe(l.removedNodes, i)), (r = r && !Fe(l.addedNodes, i));
            r && t();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      const re = new Map();
      let ui = 0;
      function qe() {
        const s = window.devicePixelRatio;
        s !== ui &&
          ((ui = s),
          re.forEach((e, t) => {
            t.currentDevicePixelRatio !== s && e();
          }));
      }
      function ti(s, e, t) {
        const i = s.canvas,
          n = i && (0, d.E)(i);
        if (!n) return;
        const o = (0, d.G)((l, c) => {
            const u = n.clientWidth;
            t(l, c), u < n.clientWidth && t();
          }, window),
          r = new ResizeObserver((l) => {
            const c = l[0],
              u = c.contentRect.width,
              p = c.contentRect.height;
            (0 === u && 0 === p) || o(u, p);
          });
        return (
          r.observe(n),
          (function an(s, e) {
            re.size || window.addEventListener("resize", qe), re.set(s, e);
          })(s, o),
          r
        );
      }
      function _e(s, e, t) {
        t && t.disconnect(),
          "resize" === e &&
            (function fi(s) {
              re.delete(s), re.size || window.removeEventListener("resize", qe);
            })(s);
      }
      function ln(s, e, t) {
        const i = s.canvas,
          n = (0, d.G)(
            (o) => {
              null !== s.ctx &&
                t(
                  (function Ui(s, e) {
                    const t = be[s.type] || s.type,
                      { x: i, y: n } = (0, d.y)(s, e);
                    return {
                      type: t,
                      chart: e,
                      native: s,
                      x: void 0 !== i ? i : null,
                      y: void 0 !== n ? n : null,
                    };
                  })(o, s)
                );
            },
            s,
            (o) => {
              const r = o[0];
              return [r, r.offsetX, r.offsetY];
            }
          );
        return (
          (function rn(s, e, t) {
            s.addEventListener(e, t, he);
          })(i, e, n),
          n
        );
      }
      class m extends ke {
        acquireContext(e, t) {
          const i = e && e.getContext && e.getContext("2d");
          return i && i.canvas === e
            ? ((function on(s, e) {
                const t = s.style,
                  i = s.getAttribute("height"),
                  n = s.getAttribute("width");
                if (
                  ((s[hi] = {
                    initial: {
                      height: i,
                      width: n,
                      style: {
                        display: t.display,
                        height: t.height,
                        width: t.width,
                      },
                    },
                  }),
                  (t.display = t.display || "block"),
                  (t.boxSizing = t.boxSizing || "border-box"),
                  Di(n))
                ) {
                  const o = (0, d.F)(s, "width");
                  void 0 !== o && (s.width = o);
                }
                if (Di(i))
                  if ("" === s.style.height) s.height = s.width / (e || 2);
                  else {
                    const o = (0, d.F)(s, "height");
                    void 0 !== o && (s.height = o);
                  }
              })(e, t),
              i)
            : null;
        }
        releaseContext(e) {
          const t = e.canvas;
          if (!t[hi]) return !1;
          const i = t[hi].initial;
          ["height", "width"].forEach((o) => {
            const r = i[o];
            (0, d.k)(r) ? t.removeAttribute(o) : t.setAttribute(o, r);
          });
          const n = i.style || {};
          return (
            Object.keys(n).forEach((o) => {
              t.style[o] = n[o];
            }),
            (t.width = t.width),
            delete t[hi],
            !0
          );
        }
        addEventListener(e, t, i) {
          this.removeEventListener(e, t),
            ((e.$proxies || (e.$proxies = {}))[t] = (
              { attach: di, detach: je, resize: ti }[t] || ln
            )(e, t, i));
        }
        removeEventListener(e, t) {
          const i = e.$proxies || (e.$proxies = {}),
            n = i[t];
          n &&
            (({ attach: _e, detach: _e, resize: _e }[t] || $i)(e, t, n),
            (i[t] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(e, t, i, n) {
          return (0, d.D)(e, t, i, n);
        }
        isAttached(e) {
          const t = (0, d.E)(e);
          return !(!t || !t.isConnected);
        }
      }
      class _ {
        constructor() {
          (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        tooltipPosition(e) {
          const { x: t, y: i } = this.getProps(["x", "y"], e);
          return { x: t, y: i };
        }
        hasValue() {
          return (0, d.q)(this.x) && (0, d.q)(this.y);
        }
        getProps(e, t) {
          const i = this.$animations;
          if (!t || !i) return this;
          const n = {};
          return (
            e.forEach((o) => {
              n[o] = i[o] && i[o].active() ? i[o]._to : this[o];
            }),
            n
          );
        }
      }
      (_.defaults = {}), (_.defaultRoutes = void 0);
      const w = {
        values: (s) => ((0, d.b)(s) ? s : "" + s),
        numeric(s, e, t) {
          if (0 === s) return "0";
          const i = this.chart.options.locale;
          let n,
            o = s;
          if (t.length > 1) {
            const u = Math.max(
              Math.abs(t[0].value),
              Math.abs(t[t.length - 1].value)
            );
            (u < 1e-4 || u > 1e15) && (n = "scientific"),
              (o = (function P(s, e) {
                let t =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                return (
                  Math.abs(t) >= 1 &&
                    s !== Math.floor(s) &&
                    (t = s - Math.floor(s)),
                  t
                );
              })(s, t));
          }
          const r = (0, d.K)(Math.abs(o)),
            l = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            c = {
              notation: n,
              minimumFractionDigits: l,
              maximumFractionDigits: l,
            };
          return Object.assign(c, this.options.ticks.format), (0, d.o)(s, i, c);
        },
        logarithmic(s, e, t) {
          if (0 === s) return "0";
          const i = s / Math.pow(10, Math.floor((0, d.K)(s)));
          return 1 === i || 2 === i || 5 === i
            ? w.numeric.call(this, s, e, t)
            : "";
        },
      };
      var E = { formatters: w };
      function tt(s, e, t, i, n) {
        const o = (0, d.v)(i, 0),
          r = Math.min((0, d.v)(n, s.length), s.length);
        let c,
          u,
          p,
          l = 0;
        for (
          t = Math.ceil(t),
            n && ((c = n - i), (t = c / Math.floor(c / t))),
            p = o;
          p < 0;

        )
          l++, (p = Math.round(o + l * t));
        for (u = Math.max(o, 0); u < r; u++)
          u === p && (e.push(s[u]), l++, (p = Math.round(o + l * t)));
      }
      d.d.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (s, e) => e.lineWidth,
          tickColor: (s, e) => e.color,
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: E.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        d.d.route("scale.ticks", "color", "", "color"),
        d.d.route("scale.grid", "color", "", "borderColor"),
        d.d.route("scale.grid", "borderColor", "", "borderColor"),
        d.d.route("scale.title", "color", "", "color"),
        d.d.describe("scale", {
          _fallback: !1,
          _scriptable: (s) =>
            !s.startsWith("before") &&
            !s.startsWith("after") &&
            "callback" !== s &&
            "parser" !== s,
          _indexable: (s) => "borderDash" !== s && "tickBorderDash" !== s,
        }),
        d.d.describe("scales", { _fallback: "scale" }),
        d.d.describe("scale.ticks", {
          _scriptable: (s) => "backdropPadding" !== s && "callback" !== s,
          _indexable: (s) => "backdropPadding" !== s,
        });
      const vt = (s, e, t) =>
        "top" === e || "left" === e ? s[e] + t : s[e] - t;
      function Lt(s, e) {
        const t = [],
          i = s.length / e,
          n = s.length;
        let o = 0;
        for (; o < n; o += i) t.push(s[Math.floor(o)]);
        return t;
      }
      function gi(s, e, t) {
        const i = s.ticks.length,
          n = Math.min(e, i - 1),
          o = s._startPixel,
          r = s._endPixel,
          l = 1e-6;
        let u,
          c = s.getPixelForTick(n);
        if (
          !(
            t &&
            ((u =
              1 === i
                ? Math.max(c - o, r - c)
                : 0 === e
                ? (s.getPixelForTick(1) - c) / 2
                : (c - s.getPixelForTick(n - 1)) / 2),
            (c += n < e ? u : -u),
            c < o - l || c > r + l)
          )
        )
          return c;
      }
      function Ai(s) {
        return s.drawTicks ? s.tickLength : 0;
      }
      function Xi(s, e) {
        if (!s.display) return 0;
        const t = (0, d.Y)(s.font, e),
          i = (0, d.B)(s.padding);
        return ((0, d.b)(s.text) ? s.text.length : 1) * t.lineHeight + i.height;
      }
      function ls(s, e, t) {
        let i = (0, d.Z)(s);
        return (
          ((t && "right" !== e) || (!t && "right" === e)) &&
            (i = ((s) => ("left" === s ? "right" : "right" === s ? "left" : s))(
              i
            )),
          i
        );
      }
      class ze extends _ {
        constructor(e) {
          super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.options = void 0),
            (this.ctx = e.ctx),
            (this.chart = e.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(e) {
          (this.options = e.setContext(this.getContext())),
            (this.axis = e.axis),
            (this._userMin = this.parse(e.min)),
            (this._userMax = this.parse(e.max)),
            (this._suggestedMin = this.parse(e.suggestedMin)),
            (this._suggestedMax = this.parse(e.suggestedMax));
        }
        parse(e, t) {
          return e;
        }
        getUserBounds() {
          let {
            _userMin: e,
            _userMax: t,
            _suggestedMin: i,
            _suggestedMax: n,
          } = this;
          return (
            (e = (0, d.M)(e, Number.POSITIVE_INFINITY)),
            (t = (0, d.M)(t, Number.NEGATIVE_INFINITY)),
            (i = (0, d.M)(i, Number.POSITIVE_INFINITY)),
            (n = (0, d.M)(n, Number.NEGATIVE_INFINITY)),
            {
              min: (0, d.M)(e, i),
              max: (0, d.M)(t, n),
              minDefined: (0, d.g)(e),
              maxDefined: (0, d.g)(t),
            }
          );
        }
        getMinMax(e) {
          let r,
            {
              min: t,
              max: i,
              minDefined: n,
              maxDefined: o,
            } = this.getUserBounds();
          if (n && o) return { min: t, max: i };
          const l = this.getMatchingVisibleMetas();
          for (let c = 0, u = l.length; c < u; ++c)
            (r = l[c].controller.getMinMax(this, e)),
              n || (t = Math.min(t, r.min)),
              o || (i = Math.max(i, r.max));
          return (
            (t = o && t > i ? i : t),
            (i = n && t > i ? t : i),
            {
              min: (0, d.M)(t, (0, d.M)(i, t)),
              max: (0, d.M)(i, (0, d.M)(t, i)),
            }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const e = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? e.xLabels : e.yLabels) ||
            e.labels ||
            []
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          (0, d.N)(this.options.beforeUpdate, [this]);
        }
        update(e, t, i) {
          const { beginAtZero: n, grace: o, ticks: r } = this.options,
            l = r.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = e),
            (this.maxHeight = t),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (0, d.O)(this, o, n)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const c = l < this.ticks.length;
          this._convertTicksToLabels(c ? Lt(this.ticks, l) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            r.display &&
              (r.autoSkip || "auto" === r.source) &&
              ((this.ticks = (function R(s, e) {
                const t = s.options.ticks,
                  i =
                    t.maxTicksLimit ||
                    (function B(s) {
                      const e = s.options.offset,
                        t = s._tickSize();
                      return Math.floor(
                        Math.min(s._length / t + (e ? 0 : 1), s._maxLength / t)
                      );
                    })(s),
                  n = t.major.enabled
                    ? (function X(s) {
                        const e = [];
                        let t, i;
                        for (t = 0, i = s.length; t < i; t++)
                          s[t].major && e.push(t);
                        return e;
                      })(e)
                    : [],
                  o = n.length,
                  r = n[0],
                  l = n[o - 1],
                  c = [];
                if (o > i)
                  return (
                    (function et(s, e, t, i) {
                      let r,
                        n = 0,
                        o = t[0];
                      for (i = Math.ceil(i), r = 0; r < s.length; r++)
                        r === o && (e.push(s[r]), n++, (o = t[n * i]));
                    })(e, c, n, o / i),
                    c
                  );
                const u = (function $(s, e, t) {
                  const i = (function lt(s) {
                      const e = s.length;
                      let t, i;
                      if (e < 2) return !1;
                      for (i = s[0], t = 1; t < e; ++t)
                        if (s[t] - s[t - 1] !== i) return !1;
                      return i;
                    })(s),
                    n = e.length / t;
                  if (!i) return Math.max(n, 1);
                  const o = (0, d.L)(i);
                  for (let r = 0, l = o.length - 1; r < l; r++) {
                    const c = o[r];
                    if (c > n) return c;
                  }
                  return Math.max(n, 1);
                })(n, e, i);
                if (o > 0) {
                  let p, x;
                  const S = o > 1 ? Math.round((l - r) / (o - 1)) : null;
                  for (
                    tt(e, c, u, (0, d.k)(S) ? 0 : r - S, r), p = 0, x = o - 1;
                    p < x;
                    p++
                  )
                    tt(e, c, u, n[p], n[p + 1]);
                  return tt(e, c, u, l, (0, d.k)(S) ? e.length : l + S), c;
                }
                return tt(e, c, u), c;
              })(this, this.ticks)),
              (this._labelSizes = null)),
            c && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            i,
            e = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (i = this.right))
            : ((t = this.top), (i = this.bottom), (e = !e)),
            (this._startPixel = t),
            (this._endPixel = i),
            (this._reversePixels = e),
            (this._length = i - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          (0, d.N)(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          (0, d.N)(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          (0, d.N)(this.options.afterSetDimensions, [this]);
        }
        _callHooks(e) {
          this.chart.notifyPlugins(e, this.getContext()),
            (0, d.N)(this.options[e], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          (0, d.N)(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(e) {
          const t = this.options.ticks;
          let i, n, o;
          for (i = 0, n = e.length; i < n; i++)
            (o = e[i]), (o.label = (0, d.N)(t.callback, [o.value, i, e], this));
        }
        afterTickToLabelConversion() {
          (0, d.N)(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          (0, d.N)(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const e = this.options,
            t = e.ticks,
            i = this.ticks.length,
            n = t.minRotation || 0,
            o = t.maxRotation;
          let l,
            c,
            u,
            r = n;
          if (
            !this._isVisible() ||
            !t.display ||
            n >= o ||
            i <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = n);
          const p = this._getLabelSizes(),
            x = p.widest.width,
            S = p.highest.height,
            k = (0, d.w)(this.chart.width - x, 0, this.maxWidth);
          (l = e.offset ? this.maxWidth / i : k / (i - 1)),
            x + 6 > l &&
              ((l = k / (i - (e.offset ? 0.5 : 1))),
              (c =
                this.maxHeight -
                Ai(e.grid) -
                t.padding -
                Xi(e.title, this.chart.options.font)),
              (u = Math.sqrt(x * x + S * S)),
              (r = (0, d.Q)(
                Math.min(
                  Math.asin((0, d.w)((p.highest.height + 6) / l, -1, 1)),
                  Math.asin((0, d.w)(c / u, -1, 1)) -
                    Math.asin((0, d.w)(S / u, -1, 1))
                )
              )),
              (r = Math.max(n, Math.min(o, r)))),
            (this.labelRotation = r);
        }
        afterCalculateLabelRotation() {
          (0, d.N)(this.options.afterCalculateLabelRotation, [this]);
        }
        beforeFit() {
          (0, d.N)(this.options.beforeFit, [this]);
        }
        fit() {
          const e = { width: 0, height: 0 },
            {
              chart: t,
              options: { ticks: i, title: n, grid: o },
            } = this,
            r = this._isVisible(),
            l = this.isHorizontal();
          if (r) {
            const c = Xi(n, t.options.font);
            if (
              (l
                ? ((e.width = this.maxWidth), (e.height = Ai(o) + c))
                : ((e.height = this.maxHeight), (e.width = Ai(o) + c)),
              i.display && this.ticks.length)
            ) {
              const {
                  first: u,
                  last: p,
                  widest: x,
                  highest: S,
                } = this._getLabelSizes(),
                k = 2 * i.padding,
                O = (0, d.t)(this.labelRotation),
                T = Math.cos(O),
                I = Math.sin(O);
              l
                ? (e.height = Math.min(
                    this.maxHeight,
                    e.height + (i.mirror ? 0 : I * x.width + T * S.height) + k
                  ))
                : (e.width = Math.min(
                    this.maxWidth,
                    e.width + (i.mirror ? 0 : T * x.width + I * S.height) + k
                  )),
                this._calculatePadding(u, p, I, T);
            }
          }
          this._handleMargins(),
            l
              ? ((this.width = this._length =
                  t.width - this._margins.left - this._margins.right),
                (this.height = e.height))
              : ((this.width = e.width),
                (this.height = this._length =
                  t.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(e, t, i, n) {
          const {
              ticks: { align: o, padding: r },
              position: l,
            } = this.options,
            c = 0 !== this.labelRotation,
            u = "top" !== l && "x" === this.axis;
          if (this.isHorizontal()) {
            const p = this.getPixelForTick(0) - this.left,
              x = this.right - this.getPixelForTick(this.ticks.length - 1);
            let S = 0,
              k = 0;
            c
              ? u
                ? ((S = n * e.width), (k = i * t.height))
                : ((S = i * e.height), (k = n * t.width))
              : "start" === o
              ? (k = t.width)
              : "end" === o
              ? (S = e.width)
              : ((S = e.width / 2), (k = t.width / 2)),
              (this.paddingLeft = Math.max(
                ((S - p + r) * this.width) / (this.width - p),
                0
              )),
              (this.paddingRight = Math.max(
                ((k - x + r) * this.width) / (this.width - x),
                0
              ));
          } else {
            let p = t.height / 2,
              x = e.height / 2;
            "start" === o
              ? ((p = 0), (x = e.height))
              : "end" === o && ((p = t.height), (x = 0)),
              (this.paddingTop = p + r),
              (this.paddingBottom = x + r);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          (0, d.N)(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: e, position: t } = this.options;
          return "top" === t || "bottom" === t || "x" === e;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(e) {
          let t, i;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(e),
              t = 0,
              i = e.length;
            t < i;
            t++
          )
            (0, d.k)(e[t].label) && (e.splice(t, 1), i--, t--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let e = this._labelSizes;
          if (!e) {
            const t = this.options.ticks.sampleSize;
            let i = this.ticks;
            t < i.length && (i = Lt(i, t)),
              (this._labelSizes = e = this._computeLabelSizes(i, i.length));
          }
          return e;
        }
        _computeLabelSizes(e, t) {
          const { ctx: i, _longestTextCache: n } = this,
            o = [],
            r = [];
          let u,
            p,
            x,
            S,
            k,
            O,
            T,
            I,
            F,
            H,
            K,
            l = 0,
            c = 0;
          for (u = 0; u < t; ++u) {
            if (
              ((S = e[u].label),
              (k = this._resolveTickFontOptions(u)),
              (i.font = O = k.string),
              (T = n[O] = n[O] || { data: {}, gc: [] }),
              (I = k.lineHeight),
              (F = H = 0),
              (0, d.k)(S) || (0, d.b)(S))
            ) {
              if ((0, d.b)(S))
                for (p = 0, x = S.length; p < x; ++p)
                  (K = S[p]),
                    !(0, d.k)(K) &&
                      !(0, d.b)(K) &&
                      ((F = (0, d.R)(i, T.data, T.gc, F, K)), (H += I));
            } else (F = (0, d.R)(i, T.data, T.gc, F, S)), (H = I);
            o.push(F), r.push(H), (l = Math.max(F, l)), (c = Math.max(H, c));
          }
          !(function pi(s, e) {
            (0, d.C)(s, (t) => {
              const i = t.gc,
                n = i.length / 2;
              let o;
              if (n > e) {
                for (o = 0; o < n; ++o) delete t.data[i[o]];
                i.splice(0, n);
              }
            });
          })(n, t);
          const N = o.indexOf(l),
            W = r.indexOf(c),
            G = (Q) => ({ width: o[Q] || 0, height: r[Q] || 0 });
          return {
            first: G(0),
            last: G(t - 1),
            widest: G(N),
            highest: G(W),
            widths: o,
            heights: r,
          };
        }
        getLabelForValue(e) {
          return e;
        }
        getPixelForValue(e, t) {
          return NaN;
        }
        getValueForPixel(e) {}
        getPixelForTick(e) {
          const t = this.ticks;
          return e < 0 || e > t.length - 1
            ? null
            : this.getPixelForValue(t[e].value);
        }
        getPixelForDecimal(e) {
          this._reversePixels && (e = 1 - e);
          const t = this._startPixel + e * this._length;
          return (0, d.S)(this._alignToPixels ? (0, d.U)(this.chart, t, 0) : t);
        }
        getDecimalForPixel(e) {
          const t = (e - this._startPixel) / this._length;
          return this._reversePixels ? 1 - t : t;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: e, max: t } = this;
          return e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
        }
        getContext(e) {
          const t = this.ticks || [];
          if (e >= 0 && e < t.length) {
            const i = t[e];
            return (
              i.$context ||
              (i.$context = (function Ys(s, e, t) {
                return (0, d.h)(s, { tick: t, index: e, type: "tick" });
              })(this.getContext(), e, i))
            );
          }
          return (
            this.$context ||
            (this.$context = (function as(s, e) {
              return (0, d.h)(s, { scale: e, type: "scale" });
            })(this.chart.getContext(), this))
          );
        }
        _tickSize() {
          const e = this.options.ticks,
            t = (0, d.t)(this.labelRotation),
            i = Math.abs(Math.cos(t)),
            n = Math.abs(Math.sin(t)),
            o = this._getLabelSizes(),
            r = e.autoSkipPadding || 0,
            l = o ? o.widest.width + r : 0,
            c = o ? o.highest.height + r : 0;
          return this.isHorizontal()
            ? c * i > l * n
              ? l / i
              : c / n
            : c * n < l * i
            ? c / i
            : l / n;
        }
        _isVisible() {
          const e = this.options.display;
          return "auto" !== e ? !!e : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(e) {
          const t = this.axis,
            i = this.chart,
            n = this.options,
            { grid: o, position: r } = n,
            l = o.offset,
            c = this.isHorizontal(),
            p = this.ticks.length + (l ? 1 : 0),
            x = Ai(o),
            S = [],
            k = o.setContext(this.getContext()),
            O = k.drawBorder ? k.borderWidth : 0,
            T = O / 2,
            I = function (ct) {
              return (0, d.U)(i, ct, O);
            };
          let F, H, K, N, W, G, Q, nt, it, _t, ut, ft;
          if ("top" === r)
            (F = I(this.bottom)),
              (G = this.bottom - x),
              (nt = F - T),
              (_t = I(e.top) + T),
              (ft = e.bottom);
          else if ("bottom" === r)
            (F = I(this.top)),
              (_t = e.top),
              (ft = I(e.bottom) - T),
              (G = F + T),
              (nt = this.top + x);
          else if ("left" === r)
            (F = I(this.right)),
              (W = this.right - x),
              (Q = F - T),
              (it = I(e.left) + T),
              (ut = e.right);
          else if ("right" === r)
            (F = I(this.left)),
              (it = e.left),
              (ut = I(e.right) - T),
              (W = F + T),
              (Q = this.left + x);
          else if ("x" === t) {
            if ("center" === r) F = I((e.top + e.bottom) / 2 + 0.5);
            else if ((0, d.i)(r)) {
              const ct = Object.keys(r)[0];
              F = I(this.chart.scales[ct].getPixelForValue(r[ct]));
            }
            (_t = e.top), (ft = e.bottom), (G = F + T), (nt = G + x);
          } else if ("y" === t) {
            if ("center" === r) F = I((e.left + e.right) / 2);
            else if ((0, d.i)(r)) {
              const ct = Object.keys(r)[0];
              F = I(this.chart.scales[ct].getPixelForValue(r[ct]));
            }
            (W = F - T), (Q = W - x), (it = e.left), (ut = e.right);
          }
          const Ht = (0, d.v)(n.ticks.maxTicksLimit, p),
            ue = Math.max(1, Math.ceil(p / Ht));
          for (H = 0; H < p; H += ue) {
            const ct = o.setContext(this.getContext(H)),
              wt = ct.lineWidth,
              Ws = ct.color,
              Tn = o.borderDash || [],
              Hs = ct.borderDashOffset,
              ao = ct.tickWidth,
              rs = ct.tickColor,
              Ns = ct.tickBorderDash || [],
              Vs = ct.tickBorderDashOffset;
            (K = gi(this, H, l)),
              void 0 !== K &&
                ((N = (0, d.U)(i, K, wt)),
                c ? (W = Q = it = ut = N) : (G = nt = _t = ft = N),
                S.push({
                  tx1: W,
                  ty1: G,
                  tx2: Q,
                  ty2: nt,
                  x1: it,
                  y1: _t,
                  x2: ut,
                  y2: ft,
                  width: wt,
                  color: Ws,
                  borderDash: Tn,
                  borderDashOffset: Hs,
                  tickWidth: ao,
                  tickColor: rs,
                  tickBorderDash: Ns,
                  tickBorderDashOffset: Vs,
                }));
          }
          return (this._ticksLength = p), (this._borderValue = F), S;
        }
        _computeLabelItems(e) {
          const t = this.axis,
            i = this.options,
            { position: n, ticks: o } = i,
            r = this.isHorizontal(),
            l = this.ticks,
            { align: c, crossAlign: u, padding: p, mirror: x } = o,
            S = Ai(i.grid),
            k = S + p,
            O = x ? -p : k,
            T = -(0, d.t)(this.labelRotation),
            I = [];
          let F,
            H,
            K,
            N,
            W,
            G,
            Q,
            nt,
            it,
            _t,
            ut,
            ft,
            Ht = "middle";
          if ("top" === n)
            (G = this.bottom - O), (Q = this._getXAxisLabelAlignment());
          else if ("bottom" === n)
            (G = this.top + O), (Q = this._getXAxisLabelAlignment());
          else if ("left" === n) {
            const ct = this._getYAxisLabelAlignment(S);
            (Q = ct.textAlign), (W = ct.x);
          } else if ("right" === n) {
            const ct = this._getYAxisLabelAlignment(S);
            (Q = ct.textAlign), (W = ct.x);
          } else if ("x" === t) {
            if ("center" === n) G = (e.top + e.bottom) / 2 + k;
            else if ((0, d.i)(n)) {
              const ct = Object.keys(n)[0];
              G = this.chart.scales[ct].getPixelForValue(n[ct]) + k;
            }
            Q = this._getXAxisLabelAlignment();
          } else if ("y" === t) {
            if ("center" === n) W = (e.left + e.right) / 2 - k;
            else if ((0, d.i)(n)) {
              const ct = Object.keys(n)[0];
              W = this.chart.scales[ct].getPixelForValue(n[ct]);
            }
            Q = this._getYAxisLabelAlignment(S).textAlign;
          }
          "y" === t &&
            ("start" === c ? (Ht = "top") : "end" === c && (Ht = "bottom"));
          const ue = this._getLabelSizes();
          for (F = 0, H = l.length; F < H; ++F) {
            (K = l[F]), (N = K.label);
            const ct = o.setContext(this.getContext(F));
            (nt = this.getPixelForTick(F) + o.labelOffset),
              (it = this._resolveTickFontOptions(F)),
              (_t = it.lineHeight),
              (ut = (0, d.b)(N) ? N.length : 1);
            const wt = ut / 2,
              Ws = ct.color,
              Tn = ct.textStrokeColor,
              Hs = ct.textStrokeWidth;
            let ao;
            if (
              (r
                ? ((W = nt),
                  (ft =
                    "top" === n
                      ? "near" === u || 0 !== T
                        ? -ut * _t + _t / 2
                        : "center" === u
                        ? -ue.highest.height / 2 - wt * _t + _t
                        : _t / 2 - ue.highest.height
                      : "near" === u || 0 !== T
                      ? _t / 2
                      : "center" === u
                      ? ue.highest.height / 2 - wt * _t
                      : ue.highest.height - ut * _t),
                  x && (ft *= -1))
                : ((G = nt), (ft = ((1 - ut) * _t) / 2)),
              ct.showLabelBackdrop)
            ) {
              const rs = (0, d.B)(ct.backdropPadding),
                Ns = ue.heights[F],
                Vs = ue.widths[F];
              let Ro = G + ft - rs.top,
                Io = W - rs.left;
              switch (Ht) {
                case "middle":
                  Ro -= Ns / 2;
                  break;
                case "bottom":
                  Ro -= Ns;
              }
              switch (Q) {
                case "center":
                  Io -= Vs / 2;
                  break;
                case "right":
                  Io -= Vs;
              }
              ao = {
                left: Io,
                top: Ro,
                width: Vs + rs.width,
                height: Ns + rs.height,
                color: ct.backdropColor,
              };
            }
            I.push({
              rotation: T,
              label: N,
              font: it,
              color: Ws,
              strokeColor: Tn,
              strokeWidth: Hs,
              textOffset: ft,
              textAlign: Q,
              textBaseline: Ht,
              translation: [W, G],
              backdrop: ao,
            });
          }
          return I;
        }
        _getXAxisLabelAlignment() {
          const { position: e, ticks: t } = this.options;
          if (-(0, d.t)(this.labelRotation))
            return "top" === e ? "left" : "right";
          let n = "center";
          return (
            "start" === t.align
              ? (n = "left")
              : "end" === t.align && (n = "right"),
            n
          );
        }
        _getYAxisLabelAlignment(e) {
          const {
              position: t,
              ticks: { crossAlign: i, mirror: n, padding: o },
            } = this.options,
            l = e + o,
            c = this._getLabelSizes().widest.width;
          let u, p;
          return (
            "left" === t
              ? n
                ? ((p = this.right + o),
                  "near" === i
                    ? (u = "left")
                    : "center" === i
                    ? ((u = "center"), (p += c / 2))
                    : ((u = "right"), (p += c)))
                : ((p = this.right - l),
                  "near" === i
                    ? (u = "right")
                    : "center" === i
                    ? ((u = "center"), (p -= c / 2))
                    : ((u = "left"), (p = this.left)))
              : "right" === t
              ? n
                ? ((p = this.left + o),
                  "near" === i
                    ? (u = "right")
                    : "center" === i
                    ? ((u = "center"), (p -= c / 2))
                    : ((u = "left"), (p -= c)))
                : ((p = this.left + l),
                  "near" === i
                    ? (u = "left")
                    : "center" === i
                    ? ((u = "center"), (p += c / 2))
                    : ((u = "right"), (p = this.right)))
              : (u = "right"),
            { textAlign: u, x: p }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const e = this.chart,
            t = this.options.position;
          return "left" === t || "right" === t
            ? { top: 0, left: this.left, bottom: e.height, right: this.right }
            : "top" === t || "bottom" === t
            ? { top: this.top, left: 0, bottom: this.bottom, right: e.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: e,
            options: { backgroundColor: t },
            left: i,
            top: n,
            width: o,
            height: r,
          } = this;
          t &&
            (e.save(), (e.fillStyle = t), e.fillRect(i, n, o, r), e.restore());
        }
        getLineWidthForValue(e) {
          const t = this.options.grid;
          if (!this._isVisible() || !t.display) return 0;
          const n = this.ticks.findIndex((o) => o.value === e);
          return n >= 0 ? t.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(e) {
          const t = this.options.grid,
            i = this.ctx,
            n =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(e));
          let o, r;
          const l = (c, u, p) => {
            !p.width ||
              !p.color ||
              (i.save(),
              (i.lineWidth = p.width),
              (i.strokeStyle = p.color),
              i.setLineDash(p.borderDash || []),
              (i.lineDashOffset = p.borderDashOffset),
              i.beginPath(),
              i.moveTo(c.x, c.y),
              i.lineTo(u.x, u.y),
              i.stroke(),
              i.restore());
          };
          if (t.display)
            for (o = 0, r = n.length; o < r; ++o) {
              const c = n[o];
              t.drawOnChartArea &&
                l({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
                t.drawTicks &&
                  l(
                    { x: c.tx1, y: c.ty1 },
                    { x: c.tx2, y: c.ty2 },
                    {
                      color: c.tickColor,
                      width: c.tickWidth,
                      borderDash: c.tickBorderDash,
                      borderDashOffset: c.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const {
              chart: e,
              ctx: t,
              options: { grid: i },
            } = this,
            n = i.setContext(this.getContext()),
            o = i.drawBorder ? n.borderWidth : 0;
          if (!o) return;
          const r = i.setContext(this.getContext(0)).lineWidth,
            l = this._borderValue;
          let c, u, p, x;
          this.isHorizontal()
            ? ((c = (0, d.U)(e, this.left, o) - o / 2),
              (u = (0, d.U)(e, this.right, r) + r / 2),
              (p = x = l))
            : ((p = (0, d.U)(e, this.top, o) - o / 2),
              (x = (0, d.U)(e, this.bottom, r) + r / 2),
              (c = u = l)),
            t.save(),
            (t.lineWidth = n.borderWidth),
            (t.strokeStyle = n.borderColor),
            t.beginPath(),
            t.moveTo(c, p),
            t.lineTo(u, x),
            t.stroke(),
            t.restore();
        }
        drawLabels(e) {
          if (!this.options.ticks.display) return;
          const i = this.ctx,
            n = this._computeLabelArea();
          n && (0, d.V)(i, n);
          const o =
            this._labelItems || (this._labelItems = this._computeLabelItems(e));
          let r, l;
          for (r = 0, l = o.length; r < l; ++r) {
            const c = o[r],
              u = c.font,
              p = c.label;
            c.backdrop &&
              ((i.fillStyle = c.backdrop.color),
              i.fillRect(
                c.backdrop.left,
                c.backdrop.top,
                c.backdrop.width,
                c.backdrop.height
              )),
              (0, d.W)(i, p, 0, c.textOffset, u, c);
          }
          n && (0, d.X)(i);
        }
        drawTitle() {
          const {
            ctx: e,
            options: { position: t, title: i, reverse: n },
          } = this;
          if (!i.display) return;
          const o = (0, d.Y)(i.font),
            r = (0, d.B)(i.padding),
            l = i.align;
          let c = o.lineHeight / 2;
          "bottom" === t || "center" === t || (0, d.i)(t)
            ? ((c += r.bottom),
              (0, d.b)(i.text) && (c += o.lineHeight * (i.text.length - 1)))
            : (c += r.top);
          const {
            titleX: u,
            titleY: p,
            maxWidth: x,
            rotation: S,
          } = (function cs(s, e, t, i) {
            const { top: n, left: o, bottom: r, right: l, chart: c } = s,
              { chartArea: u, scales: p } = c;
            let S,
              k,
              O,
              x = 0;
            const T = r - n,
              I = l - o;
            if (s.isHorizontal()) {
              if (((k = (0, d.$)(i, o, l)), (0, d.i)(t))) {
                const F = Object.keys(t)[0];
                O = p[F].getPixelForValue(t[F]) + T - e;
              } else
                O =
                  "center" === t ? (u.bottom + u.top) / 2 + T - e : vt(s, t, e);
              S = l - o;
            } else {
              if ((0, d.i)(t)) {
                const F = Object.keys(t)[0];
                k = p[F].getPixelForValue(t[F]) - I + e;
              } else
                k =
                  "center" === t ? (u.left + u.right) / 2 - I + e : vt(s, t, e);
              (O = (0, d.$)(i, r, n)), (x = "left" === t ? -d.H : d.H);
            }
            return { titleX: k, titleY: O, maxWidth: S, rotation: x };
          })(this, c, t, l);
          (0, d.W)(e, i.text, 0, 0, o, {
            color: i.color,
            maxWidth: x,
            rotation: S,
            textAlign: ls(l, t, n),
            textBaseline: "middle",
            translation: [u, p],
          });
        }
        draw(e) {
          !this._isVisible() ||
            (this.drawBackground(),
            this.drawGrid(e),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(e));
        }
        _layers() {
          const e = this.options,
            t = (e.ticks && e.ticks.z) || 0,
            i = (0, d.v)(e.grid && e.grid.z, -1);
          return this._isVisible() && this.draw === ze.prototype.draw
            ? [
                {
                  z: i,
                  draw: (n) => {
                    this.drawBackground(), this.drawGrid(n), this.drawTitle();
                  },
                },
                {
                  z: i + 1,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: t,
                  draw: (n) => {
                    this.drawLabels(n);
                  },
                },
              ]
            : [
                {
                  z: t,
                  draw: (n) => {
                    this.draw(n);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(e) {
          const t = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            n = [];
          let o, r;
          for (o = 0, r = t.length; o < r; ++o) {
            const l = t[o];
            l[i] === this.id && (!e || l.type === e) && n.push(l);
          }
          return n;
        }
        _resolveTickFontOptions(e) {
          const t = this.options.ticks.setContext(this.getContext(e));
          return (0, d.Y)(t.font);
        }
        _maxDigits() {
          const e = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / e;
        }
      }
      class Ti {
        constructor(e, t, i) {
          (this.type = e),
            (this.scope = t),
            (this.override = i),
            (this.items = Object.create(null));
        }
        isForType(e) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            e.prototype
          );
        }
        register(e) {
          const t = Object.getPrototypeOf(e);
          let i;
          (function En(s) {
            return "id" in s && "defaults" in s;
          })(t) && (i = this.register(t));
          const n = this.items,
            o = e.id,
            r = this.scope + "." + o;
          if (!o) throw new Error("class does not have id: " + e);
          return (
            o in n ||
              ((n[o] = e),
              (function cn(s, e, t) {
                const i = (0, d.a1)(Object.create(null), [
                  t ? d.d.get(t) : {},
                  d.d.get(e),
                  s.defaults,
                ]);
                d.d.set(e, i),
                  s.defaultRoutes &&
                    (function hn(s, e) {
                      Object.keys(e).forEach((t) => {
                        const i = t.split("."),
                          n = i.pop(),
                          o = [s].concat(i).join("."),
                          r = e[t].split("."),
                          l = r.pop(),
                          c = r.join(".");
                        d.d.route(o, n, c, l);
                      });
                    })(e, s.defaultRoutes),
                  s.descriptors && d.d.describe(e, s.descriptors);
              })(e, r, i),
              this.override && d.d.override(e.id, e.overrides)),
            r
          );
        }
        get(e) {
          return this.items[e];
        }
        unregister(e) {
          const t = this.items,
            i = e.id,
            n = this.scope;
          i in t && delete t[i],
            n &&
              i in d.d[n] &&
              (delete d.d[n][i], this.override && delete d.a0[i]);
        }
      }
      var Pe = new (class hs {
        constructor() {
          (this.controllers = new Ti(Nt, "datasets", !0)),
            (this.elements = new Ti(_, "elements")),
            (this.plugins = new Ti(Object, "plugins")),
            (this.scales = new Ti(ze, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...e) {
          this._each("register", e);
        }
        remove(...e) {
          this._each("unregister", e);
        }
        addControllers(...e) {
          this._each("register", e, this.controllers);
        }
        addElements(...e) {
          this._each("register", e, this.elements);
        }
        addPlugins(...e) {
          this._each("register", e, this.plugins);
        }
        addScales(...e) {
          this._each("register", e, this.scales);
        }
        getController(e) {
          return this._get(e, this.controllers, "controller");
        }
        getElement(e) {
          return this._get(e, this.elements, "element");
        }
        getPlugin(e) {
          return this._get(e, this.plugins, "plugin");
        }
        getScale(e) {
          return this._get(e, this.scales, "scale");
        }
        removeControllers(...e) {
          this._each("unregister", e, this.controllers);
        }
        removeElements(...e) {
          this._each("unregister", e, this.elements);
        }
        removePlugins(...e) {
          this._each("unregister", e, this.plugins);
        }
        removeScales(...e) {
          this._each("unregister", e, this.scales);
        }
        _each(e, t, i) {
          [...t].forEach((n) => {
            const o = i || this._getRegistryForType(n);
            i || o.isForType(n) || (o === this.plugins && n.id)
              ? this._exec(e, o, n)
              : (0, d.C)(n, (r) => {
                  const l = i || this._getRegistryForType(r);
                  this._exec(e, l, r);
                });
          });
        }
        _exec(e, t, i) {
          const n = (0, d.a2)(e);
          (0, d.N)(i["before" + n], [], i),
            t[e](i),
            (0, d.N)(i["after" + n], [], i);
        }
        _getRegistryForType(e) {
          for (let t = 0; t < this._typedRegistries.length; t++) {
            const i = this._typedRegistries[t];
            if (i.isForType(e)) return i;
          }
          return this.plugins;
        }
        _get(e, t, i) {
          const n = t.get(e);
          if (void 0 === n)
            throw new Error('"' + e + '" is not a registered ' + i + ".");
          return n;
        }
      })();
      class ds {
        constructor() {
          this._init = [];
        }
        notify(e, t, i, n) {
          "beforeInit" === t &&
            ((this._init = this._createDescriptors(e, !0)),
            this._notify(this._init, e, "install"));
          const o = n ? this._descriptors(e).filter(n) : this._descriptors(e),
            r = this._notify(o, e, t, i);
          return (
            "destroy" === t &&
              (this._notify(o, e, "stop"),
              this._notify(this._init, e, "uninstall")),
            r
          );
        }
        _notify(e, t, i, n) {
          n = n || {};
          for (const o of e) {
            const r = o.plugin;
            if (!1 === (0, d.N)(r[i], [t, n, o.options], r) && n.cancelable)
              return !1;
          }
          return !0;
        }
        invalidate() {
          (0, d.k)(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(e) {
          if (this._cache) return this._cache;
          const t = (this._cache = this._createDescriptors(e));
          return this._notifyStateChanges(e), t;
        }
        _createDescriptors(e, t) {
          const i = e && e.config,
            n = (0, d.v)(i.options && i.options.plugins, {}),
            o = (function Ln(s) {
              const e = [],
                t = Object.keys(Pe.plugins.items);
              for (let n = 0; n < t.length; n++) e.push(Pe.getPlugin(t[n]));
              const i = s.plugins || [];
              for (let n = 0; n < i.length; n++) {
                const o = i[n];
                -1 === e.indexOf(o) && e.push(o);
              }
              return e;
            })(i);
          return !1 !== n || t
            ? (function dn(s, e, t, i) {
                const n = [],
                  o = s.getContext();
                for (let r = 0; r < e.length; r++) {
                  const l = e[r],
                    u = Rn(t[l.id], i);
                  null !== u &&
                    n.push({ plugin: l, options: us(s.config, l, u, o) });
                }
                return n;
              })(e, o, n, t)
            : [];
        }
        _notifyStateChanges(e) {
          const t = this._oldCache || [],
            i = this._cache,
            n = (o, r) =>
              o.filter((l) => !r.some((c) => l.plugin.id === c.plugin.id));
          this._notify(n(t, i), e, "stop"), this._notify(n(i, t), e, "start");
        }
      }
      function Rn(s, e) {
        return e || !1 !== s ? (!0 === s ? {} : s) : null;
      }
      function us(s, e, t, i) {
        const n = s.pluginScopeKeys(e),
          o = s.getOptionScopes(t, n);
        return s.createResolver(o, i, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        });
      }
      function un(s, e) {
        return (
          ((e.datasets || {})[s] || {}).indexAxis ||
          e.indexAxis ||
          (d.d.datasets[s] || {}).indexAxis ||
          "x"
        );
      }
      function fn(s, e) {
        return "x" === s || "y" === s
          ? s
          : e.axis ||
              (function Bn(s) {
                return "top" === s || "bottom" === s
                  ? "x"
                  : "left" === s || "right" === s
                  ? "y"
                  : void 0;
              })(e.position) ||
              s.charAt(0).toLowerCase();
      }
      function Ki(s) {
        const e = s.options || (s.options = {});
        (e.plugins = (0, d.v)(e.plugins, {})),
          (e.scales = (function gs(s, e) {
            const t = d.a0[s.type] || { scales: {} },
              i = e.scales || {},
              n = un(s.type, e),
              o = Object.create(null),
              r = Object.create(null);
            return (
              Object.keys(i).forEach((l) => {
                const c = i[l];
                if (!(0, d.i)(c))
                  return U.error(`Invalid scale configuration for scale: ${l}`);
                if (c._proxy)
                  return U.warn(
                    `Ignoring resolver passed as options for scale: ${l}`
                  );
                const u = fn(l, c),
                  p = (function In(s, e) {
                    return s === e ? "_index_" : "_value_";
                  })(u, n),
                  x = t.scales || {};
                (o[u] = o[u] || l),
                  (r[l] = (0, d.a8)(Object.create(null), [
                    { axis: u },
                    c,
                    x[u],
                    x[p],
                  ]));
              }),
              s.data.datasets.forEach((l) => {
                const c = l.type || s.type,
                  u = l.indexAxis || un(c, e),
                  x = (d.a0[c] || {}).scales || {};
                Object.keys(x).forEach((S) => {
                  const k = (function fs(s, e) {
                      let t = s;
                      return (
                        "_index_" === s
                          ? (t = e)
                          : "_value_" === s && (t = "x" === e ? "y" : "x"),
                        t
                      );
                    })(S, u),
                    O = l[k + "AxisID"] || o[k] || k;
                  (r[O] = r[O] || Object.create(null)),
                    (0, d.a8)(r[O], [{ axis: k }, i[O], x[S]]);
                });
              }),
              Object.keys(r).forEach((l) => {
                const c = r[l];
                (0, d.a8)(c, [d.d.scales[c.type], d.d.scale]);
              }),
              r
            );
          })(s, e));
      }
      function Ei(s) {
        return (
          ((s = s || {}).datasets = s.datasets || []),
          (s.labels = s.labels || []),
          s
        );
      }
      const gn = new Map(),
        Gi = new Set();
      function Li(s, e) {
        let t = gn.get(s);
        return t || ((t = e()), gn.set(s, t), Gi.add(t)), t;
      }
      const mi = (s, e, t) => {
        const i = (0, d.f)(e, t);
        void 0 !== i && s.add(i);
      };
      class ps {
        constructor(e) {
          (this._config = (function Fn(s) {
            return ((s = s || {}).data = Ei(s.data)), Ki(s), s;
          })(e)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(e) {
          this._config.type = e;
        }
        get data() {
          return this._config.data;
        }
        set data(e) {
          this._config.data = Ei(e);
        }
        get options() {
          return this._config.options;
        }
        set options(e) {
          this._config.options = e;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const e = this._config;
          this.clearCache(), Ki(e);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(e) {
          return Li(e, () => [[`datasets.${e}`, ""]]);
        }
        datasetAnimationScopeKeys(e, t) {
          return Li(`${e}.transition.${t}`, () => [
            [`datasets.${e}.transitions.${t}`, `transitions.${t}`],
            [`datasets.${e}`, ""],
          ]);
        }
        datasetElementScopeKeys(e, t) {
          return Li(`${e}-${t}`, () => [
            [
              `datasets.${e}.elements.${t}`,
              `datasets.${e}`,
              `elements.${t}`,
              "",
            ],
          ]);
        }
        pluginScopeKeys(e) {
          const t = e.id;
          return Li(`${this.type}-plugin-${t}`, () => [
            [`plugins.${t}`, ...(e.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(e, t) {
          const i = this._scopeCache;
          let n = i.get(e);
          return (!n || t) && ((n = new Map()), i.set(e, n)), n;
        }
        getOptionScopes(e, t, i) {
          const { options: n, type: o } = this,
            r = this._cachedScopes(e, i),
            l = r.get(t);
          if (l) return l;
          const c = new Set();
          t.forEach((p) => {
            e && (c.add(e), p.forEach((x) => mi(c, e, x))),
              p.forEach((x) => mi(c, n, x)),
              p.forEach((x) => mi(c, d.a0[o] || {}, x)),
              p.forEach((x) => mi(c, d.d, x)),
              p.forEach((x) => mi(c, d.a3, x));
          });
          const u = Array.from(c);
          return (
            0 === u.length && u.push(Object.create(null)),
            Gi.has(t) && r.set(t, u),
            u
          );
        }
        chartOptionScopes() {
          const { options: e, type: t } = this;
          return [
            e,
            d.a0[t] || {},
            d.d.datasets[t] || {},
            { type: t },
            d.d,
            d.a3,
          ];
        }
        resolveNamedOptions(e, t, i, n = [""]) {
          const o = { $shared: !0 },
            { resolver: r, subPrefixes: l } = jn(this._resolverCache, e, n);
          let c = r;
          if (
            (function Ri(s, e) {
              const { isScriptable: t, isIndexable: i } = (0, d.a7)(s);
              for (const n of e) {
                const o = t(n),
                  r = i(n),
                  l = (r || o) && s[n];
                if ((o && ((0, d.a4)(l) || zn(l))) || (r && (0, d.b)(l)))
                  return !0;
              }
              return !1;
            })(r, t)
          ) {
            (o.$shared = !1), (i = (0, d.a4)(i) ? i() : i);
            const u = this.createResolver(e, i, l);
            c = (0, d.a5)(r, i, u);
          }
          for (const u of t) o[u] = c[u];
          return o;
        }
        createResolver(e, t, i = [""], n) {
          const { resolver: o } = jn(this._resolverCache, e, i);
          return (0, d.i)(t) ? (0, d.a5)(o, t, void 0, n) : o;
        }
      }
      function jn(s, e, t) {
        let i = s.get(e);
        i || ((i = new Map()), s.set(e, i));
        const n = t.join();
        let o = i.get(n);
        return (
          o ||
            ((o = {
              resolver: (0, d.a6)(e, t),
              subPrefixes: t.filter((l) => !l.toLowerCase().includes("hover")),
            }),
            i.set(n, o)),
          o
        );
      }
      const zn = (s) =>
          (0, d.i)(s) &&
          Object.getOwnPropertyNames(s).reduce(
            (e, t) => e || (0, d.a4)(s[t]),
            !1
          ),
        pn = ["top", "bottom", "left", "right", "chartArea"];
      function Ji(s, e) {
        return (
          "top" === s || "bottom" === s || (-1 === pn.indexOf(s) && "x" === e)
        );
      }
      function mn(s, e) {
        return function (t, i) {
          return t[s] === i[s] ? t[e] - i[e] : t[s] - i[s];
        };
      }
      function Wn(s) {
        const e = s.chart,
          t = e.options.animation;
        e.notifyPlugins("afterRender"), (0, d.N)(t && t.onComplete, [s], e);
      }
      function Hn(s) {
        const e = s.chart,
          t = e.options.animation;
        (0, d.N)(t && t.onProgress, [s], e);
      }
      function bn(s) {
        return (
          (0, d.J)() && "string" == typeof s
            ? (s = document.getElementById(s))
            : s && s.length && (s = s[0]),
          s && s.canvas && (s = s.canvas),
          s
        );
      }
      const bi = {},
        Nn = (s) => {
          const e = bn(s);
          return Object.values(bi)
            .filter((t) => t.canvas === e)
            .pop();
        };
      function We(s, e, t) {
        const i = Object.keys(s);
        for (const n of i) {
          const o = +n;
          if (o >= e) {
            const r = s[n];
            delete s[n], (t > 0 || o > e) && (s[o + t] = r);
          }
        }
      }
      class Qi {
        constructor(e, t) {
          const i = (this.config = new ps(t)),
            n = bn(e),
            o = Nn(n);
          if (o)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                o.id +
                "' must be destroyed before the canvas can be reused."
            );
          const r = i.createResolver(i.chartOptionScopes(), this.getContext());
          (this.platform = new (i.platform ||
            (function g(s) {
              return !(0, d.J)() ||
                ("undefined" != typeof OffscreenCanvas &&
                  s instanceof OffscreenCanvas)
                ? Be
                : m;
            })(n))()),
            this.platform.updateConfig(i);
          const l = this.platform.acquireContext(n, r.aspectRatio),
            c = l && l.canvas,
            u = c && c.height,
            p = c && c.width;
          (this.id = (0, d.a9)()),
            (this.ctx = l),
            (this.canvas = c),
            (this.width = p),
            (this.height = u),
            (this._options = r),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new ds()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (0, d.aa)(
              (x) => this.update(x),
              r.resizeDelay || 0
            )),
            (this._dataChanges = []),
            (bi[this.id] = this),
            l && c
              ? (Pt.listen(this, "complete", Wn),
                Pt.listen(this, "progress", Hn),
                this._initialize(),
                this.attached && this.update())
              : U.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: e, maintainAspectRatio: t },
            width: i,
            height: n,
            _aspectRatio: o,
          } = this;
          return (0, d.k)(e) ? (t && o ? o : n ? i / n : null) : e;
        }
        get data() {
          return this.config.data;
        }
        set data(e) {
          this.config.data = e;
        }
        get options() {
          return this._options;
        }
        set options(e) {
          this.config.options = e;
        }
        _initialize() {
          return (
            this.notifyPlugins("beforeInit"),
            this.options.responsive
              ? this.resize()
              : (0, d.ab)(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins("afterInit"),
            this
          );
        }
        clear() {
          return (0, d.ac)(this.canvas, this.ctx), this;
        }
        stop() {
          return Pt.stop(this), this;
        }
        resize(e, t) {
          Pt.running(this)
            ? (this._resizeBeforeDraw = { width: e, height: t })
            : this._resize(e, t);
        }
        _resize(e, t) {
          const i = this.options,
            r = this.platform.getMaximumSize(
              this.canvas,
              e,
              t,
              i.maintainAspectRatio && this.aspectRatio
            ),
            l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            c = this.width ? "resize" : "attach";
          (this.width = r.width),
            (this.height = r.height),
            (this._aspectRatio = this.aspectRatio),
            (0, d.ab)(this, l, !0) &&
              (this.notifyPlugins("resize", { size: r }),
              (0, d.N)(i.onResize, [this, r], this),
              this.attached && this._doResize(c) && this.render());
        }
        ensureScalesHaveIDs() {
          (0, d.C)(this.options.scales || {}, (i, n) => {
            i.id = n;
          });
        }
        buildOrUpdateScales() {
          const e = this.options,
            t = e.scales,
            i = this.scales,
            n = Object.keys(i).reduce((r, l) => ((r[l] = !1), r), {});
          let o = [];
          t &&
            (o = o.concat(
              Object.keys(t).map((r) => {
                const l = t[r],
                  c = fn(r, l),
                  u = "r" === c,
                  p = "x" === c;
                return {
                  options: l,
                  dposition: u ? "chartArea" : p ? "bottom" : "left",
                  dtype: u ? "radialLinear" : p ? "category" : "linear",
                };
              })
            )),
            (0, d.C)(o, (r) => {
              const l = r.options,
                c = l.id,
                u = fn(c, l),
                p = (0, d.v)(l.type, r.dtype);
              (void 0 === l.position ||
                Ji(l.position, u) !== Ji(r.dposition)) &&
                (l.position = r.dposition),
                (n[c] = !0);
              let x = null;
              c in i && i[c].type === p
                ? (x = i[c])
                : ((x = new (Pe.getScale(p))({
                    id: c,
                    type: p,
                    ctx: this.ctx,
                    chart: this,
                  })),
                  (i[x.id] = x)),
                x.init(l, e);
            }),
            (0, d.C)(n, (r, l) => {
              r || delete i[l];
            }),
            (0, d.C)(i, (r) => {
              At.configure(this, r, r.options), At.addBox(this, r);
            });
        }
        _updateMetasets() {
          const e = this._metasets,
            t = this.data.datasets.length,
            i = e.length;
          if ((e.sort((n, o) => n.index - o.index), i > t)) {
            for (let n = t; n < i; ++n) this._destroyDatasetMeta(n);
            e.splice(t, i - t);
          }
          this._sortedMetasets = e.slice(0).sort(mn("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: e,
            data: { datasets: t },
          } = this;
          e.length > t.length && delete this._stacks,
            e.forEach((i, n) => {
              0 === t.filter((o) => o === i._dataset).length &&
                this._destroyDatasetMeta(n);
            });
        }
        buildOrUpdateControllers() {
          const e = [],
            t = this.data.datasets;
          let i, n;
          for (
            this._removeUnreferencedMetasets(), i = 0, n = t.length;
            i < n;
            i++
          ) {
            const o = t[i];
            let r = this.getDatasetMeta(i);
            const l = o.type || this.config.type;
            if (
              (r.type &&
                r.type !== l &&
                (this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
              (r.type = l),
              (r.indexAxis = o.indexAxis || un(l, this.options)),
              (r.order = o.order || 0),
              (r.index = i),
              (r.label = "" + o.label),
              (r.visible = this.isDatasetVisible(i)),
              r.controller)
            )
              r.controller.updateIndex(i), r.controller.linkScales();
            else {
              const c = Pe.getController(l),
                { datasetElementType: u, dataElementType: p } = d.d.datasets[l];
              Object.assign(c.prototype, {
                dataElementType: Pe.getElement(p),
                datasetElementType: u && Pe.getElement(u),
              }),
                (r.controller = new c(this, i)),
                e.push(r.controller);
            }
          }
          return this._updateMetasets(), e;
        }
        _resetElements() {
          (0, d.C)(
            this.data.datasets,
            (e, t) => {
              this.getDatasetMeta(t).controller.reset();
            },
            this
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
        update(e) {
          const t = this.config;
          t.update();
          const i = (this._options = t.createResolver(
              t.chartOptionScopes(),
              this.getContext()
            )),
            n = (this._animationsDisabled = !i.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 ===
              this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }))
          )
            return;
          const o = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let r = 0;
          for (let l = 0, c = this.data.datasets.length; l < c; l++) {
            const { controller: u } = this.getDatasetMeta(l),
              p = !n && -1 === o.indexOf(u);
            u.buildOrUpdateElements(p), (r = Math.max(+u.getMaxOverflow(), r));
          }
          (r = this._minPadding = i.layout.autoPadding ? r : 0),
            this._updateLayout(r),
            n ||
              (0, d.C)(o, (l) => {
                l.reset();
              }),
            this._updateDatasets(e),
            this.notifyPlugins("afterUpdate", { mode: e }),
            this._layers.sort(mn("z", "_idx")),
            this._lastEvent && this._eventHandler(this._lastEvent, !0),
            this.render();
        }
        _updateScales() {
          (0, d.C)(this.scales, (e) => {
            At.removeBox(this, e);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const e = this.options,
            t = new Set(Object.keys(this._listeners)),
            i = new Set(e.events);
          (!(0, d.ad)(t, i) || !!this._responsiveListeners !== e.responsive) &&
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: e } = this,
            t = this._getUniformDataChanges() || [];
          for (const { method: i, start: n, count: o } of t)
            We(e, n, "_removeElements" === i ? -o : o);
        }
        _getUniformDataChanges() {
          const e = this._dataChanges;
          if (!e || !e.length) return;
          this._dataChanges = [];
          const t = this.data.datasets.length,
            i = (o) =>
              new Set(
                e
                  .filter((r) => r[0] === o)
                  .map((r, l) => l + "," + r.splice(1).join(","))
              ),
            n = i(0);
          for (let o = 1; o < t; o++) if (!(0, d.ad)(n, i(o))) return;
          return Array.from(n)
            .map((o) => o.split(","))
            .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
        }
        _updateLayout(e) {
          if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
            return;
          At.update(this, this.width, this.height, e);
          const t = this.chartArea,
            i = t.width <= 0 || t.height <= 0;
          (this._layers = []),
            (0, d.C)(
              this.boxes,
              (n) => {
                (i && "chartArea" === n.position) ||
                  (n.configure && n.configure(),
                  this._layers.push(...n._layers()));
              },
              this
            ),
            this._layers.forEach((n, o) => {
              n._idx = o;
            }),
            this.notifyPlugins("afterLayout");
        }
        _updateDatasets(e) {
          if (
            !1 !==
            this.notifyPlugins("beforeDatasetsUpdate", {
              mode: e,
              cancelable: !0,
            })
          ) {
            for (let t = 0, i = this.data.datasets.length; t < i; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let t = 0, i = this.data.datasets.length; t < i; ++t)
              this._updateDataset(t, (0, d.a4)(e) ? e({ datasetIndex: t }) : e);
            this.notifyPlugins("afterDatasetsUpdate", { mode: e });
          }
        }
        _updateDataset(e, t) {
          const i = this.getDatasetMeta(e),
            n = { meta: i, index: e, mode: t, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", n) &&
            (i.controller._update(t),
            (n.cancelable = !1),
            this.notifyPlugins("afterDatasetUpdate", n));
        }
        render() {
          !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
            (Pt.has(this)
              ? this.attached && !Pt.running(this) && Pt.start(this)
              : (this.draw(), Wn({ chart: this })));
        }
        draw() {
          let e;
          if (this._resizeBeforeDraw) {
            const { width: i, height: n } = this._resizeBeforeDraw;
            this._resize(i, n), (this._resizeBeforeDraw = null);
          }
          if (
            (this.clear(),
            this.width <= 0 ||
              this.height <= 0 ||
              !1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
          )
            return;
          const t = this._layers;
          for (e = 0; e < t.length && t[e].z <= 0; ++e)
            t[e].draw(this.chartArea);
          for (this._drawDatasets(); e < t.length; ++e)
            t[e].draw(this.chartArea);
          this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(e) {
          const t = this._sortedMetasets,
            i = [];
          let n, o;
          for (n = 0, o = t.length; n < o; ++n) {
            const r = t[n];
            (!e || r.visible) && i.push(r);
          }
          return i;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (
            !1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
          )
            return;
          const e = this.getSortedVisibleDatasetMetas();
          for (let t = e.length - 1; t >= 0; --t) this._drawDataset(e[t]);
          this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(e) {
          const t = this.ctx,
            i = e._clip,
            n = !i.disabled,
            o = this.chartArea,
            r = { meta: e, index: e.index, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetDraw", r) &&
            (n &&
              (0, d.V)(t, {
                left: !1 === i.left ? 0 : o.left - i.left,
                right: !1 === i.right ? this.width : o.right + i.right,
                top: !1 === i.top ? 0 : o.top - i.top,
                bottom: !1 === i.bottom ? this.height : o.bottom + i.bottom,
              }),
            e.controller.draw(),
            n && (0, d.X)(t),
            (r.cancelable = !1),
            this.notifyPlugins("afterDatasetDraw", r));
        }
        getElementsAtEventForMode(e, t, i, n) {
          const o = Ke.modes[t];
          return "function" == typeof o ? o(this, e, i, n) : [];
        }
        getDatasetMeta(e) {
          const t = this.data.datasets[e],
            i = this._metasets;
          let n = i.filter((o) => o && o._dataset === t).pop();
          return (
            n ||
              ((n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (t && t.order) || 0,
                index: e,
                _dataset: t,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(n)),
            n
          );
        }
        getContext() {
          return (
            this.$context ||
            (this.$context = (0, d.h)(null, { chart: this, type: "chart" }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(e) {
          const t = this.data.datasets[e];
          if (!t) return !1;
          const i = this.getDatasetMeta(e);
          return "boolean" == typeof i.hidden ? !i.hidden : !t.hidden;
        }
        setDatasetVisibility(e, t) {
          this.getDatasetMeta(e).hidden = !t;
        }
        toggleDataVisibility(e) {
          this._hiddenIndices[e] = !this._hiddenIndices[e];
        }
        getDataVisibility(e) {
          return !this._hiddenIndices[e];
        }
        _updateVisibility(e, t, i) {
          const n = i ? "show" : "hide",
            o = this.getDatasetMeta(e),
            r = o.controller._resolveAnimations(void 0, n);
          (0, d.j)(t)
            ? ((o.data[t].hidden = !i), this.update())
            : (this.setDatasetVisibility(e, i),
              r.update(o, { visible: i }),
              this.update((l) => (l.datasetIndex === e ? n : void 0)));
        }
        hide(e, t) {
          this._updateVisibility(e, t, !1);
        }
        show(e, t) {
          this._updateVisibility(e, t, !0);
        }
        _destroyDatasetMeta(e) {
          const t = this._metasets[e];
          t && t.controller && t.controller._destroy(),
            delete this._metasets[e];
        }
        _stop() {
          let e, t;
          for (
            this.stop(), Pt.remove(this), e = 0, t = this.data.datasets.length;
            e < t;
            ++e
          )
            this._destroyDatasetMeta(e);
        }
        destroy() {
          const { canvas: e, ctx: t } = this;
          this._stop(),
            this.config.clearCache(),
            e &&
              (this.unbindEvents(),
              (0, d.ac)(e, t),
              this.platform.releaseContext(t),
              (this.canvas = null),
              (this.ctx = null)),
            this.notifyPlugins("destroy"),
            delete bi[this.id];
        }
        toBase64Image(...e) {
          return this.canvas.toDataURL(...e);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const e = this._listeners,
            t = this.platform,
            i = (o, r) => {
              t.addEventListener(this, o, r), (e[o] = r);
            },
            n = (o, r, l) => {
              (o.offsetX = r), (o.offsetY = l), this._eventHandler(o);
            };
          (0, d.C)(this.options.events, (o) => i(o, n));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const e = this._responsiveListeners,
            t = this.platform,
            i = (c, u) => {
              t.addEventListener(this, c, u), (e[c] = u);
            },
            n = (c, u) => {
              e[c] && (t.removeEventListener(this, c, u), delete e[c]);
            },
            o = (c, u) => {
              this.canvas && this.resize(c, u);
            };
          let r;
          const l = () => {
            n("attach", l),
              (this.attached = !0),
              this.resize(),
              i("resize", o),
              i("detach", r);
          };
          (r = () => {
            (this.attached = !1),
              n("resize", o),
              this._stop(),
              this._resize(0, 0),
              i("attach", l);
          }),
            t.isAttached(this.canvas) ? l() : r();
        }
        unbindEvents() {
          (0, d.C)(this._listeners, (e, t) => {
            this.platform.removeEventListener(this, t, e);
          }),
            (this._listeners = {}),
            (0, d.C)(this._responsiveListeners, (e, t) => {
              this.platform.removeEventListener(this, t, e);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(e, t, i) {
          const n = i ? "set" : "remove";
          let o, r, l, c;
          for (
            "dataset" === t &&
              ((o = this.getDatasetMeta(e[0].datasetIndex)),
              o.controller["_" + n + "DatasetHoverStyle"]()),
              l = 0,
              c = e.length;
            l < c;
            ++l
          ) {
            r = e[l];
            const u = r && this.getDatasetMeta(r.datasetIndex).controller;
            u && u[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(e) {
          const t = this._active || [],
            i = e.map(({ datasetIndex: o, index: r }) => {
              const l = this.getDatasetMeta(o);
              if (!l) throw new Error("No dataset found at index " + o);
              return { datasetIndex: o, element: l.data[r], index: r };
            });
          !(0, d.ae)(i, t) &&
            ((this._active = i), this._updateHoverStyles(i, t));
        }
        notifyPlugins(e, t, i) {
          return this._plugins.notify(this, e, t, i);
        }
        _updateHoverStyles(e, t, i) {
          const n = this.options.hover,
            o = (c, u) =>
              c.filter(
                (p) =>
                  !u.some(
                    (x) =>
                      p.datasetIndex === x.datasetIndex && p.index === x.index
                  )
              ),
            r = o(t, e),
            l = i ? e : o(e, t);
          r.length && this.updateHoverStyle(r, n.mode, !1),
            l.length && n.mode && this.updateHoverStyle(l, n.mode, !0);
        }
        _eventHandler(e, t) {
          const i = { event: e, replay: t, cancelable: !0 },
            n = (r) =>
              (r.options.events || this.options.events).includes(e.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", i, n)) return;
          const o = this._handleEvent(e, t);
          return (
            (i.cancelable = !1),
            this.notifyPlugins("afterEvent", i, n),
            (o || i.changed) && this.render(),
            this
          );
        }
        _handleEvent(e, t) {
          const { _active: i = [], options: n } = this,
            o = n.hover;
          let l = [],
            c = !1,
            u = null;
          return (
            "mouseout" !== e.type &&
              ((l = this.getElementsAtEventForMode(e, o.mode, o, t)),
              (u = "click" === e.type ? this._lastEvent : e)),
            (this._lastEvent = null),
            (0, d.z)(e, this.chartArea, this._minPadding) &&
              ((0, d.N)(n.onHover, [e, l, this], this),
              ("mouseup" === e.type ||
                "click" === e.type ||
                "contextmenu" === e.type) &&
                (0, d.N)(n.onClick, [e, l, this], this)),
            (c = !(0, d.ae)(l, i)),
            (c || t) && ((this._active = l), this._updateHoverStyles(l, i, t)),
            (this._lastEvent = u),
            c
          );
        }
      }
      const Vn = () => (0, d.C)(Qi.instances, (s) => s._plugins.invalidate()),
        Oe = !0;
      function Yn(s, e, t) {
        const {
          startAngle: i,
          pixelMargin: n,
          x: o,
          y: r,
          outerRadius: l,
          innerRadius: c,
        } = e;
        let u = n / l;
        s.beginPath(),
          s.arc(o, r, l, i - u, t + u),
          c > n
            ? ((u = n / c), s.arc(o, r, c, t + u, i - u, !0))
            : s.arc(o, r, n, t + d.H, i - d.H),
          s.closePath(),
          s.clip();
      }
      function _i(s, e, t, i) {
        return { x: t + s * Math.cos(e), y: i + s * Math.sin(e) };
      }
      function xn(s, e, t, i, n) {
        const { x: o, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = e,
          p = Math.max(e.outerRadius + i + t - c, 0),
          x = u > 0 ? u + i + t + c : 0;
        let S = 0;
        const k = n - l;
        if (i) {
          const Tn = ((u > 0 ? u - i : 0) + (p > 0 ? p - i : 0)) / 2;
          S = (k - (0 !== Tn ? (k * Tn) / (Tn + i) : k)) / 2;
        }
        const T = (k - Math.max(0.001, k * p - t / d.P) / p) / 2,
          I = l + T + S,
          F = n - T - S,
          {
            outerStart: H,
            outerEnd: K,
            innerStart: N,
            innerEnd: W,
          } = (function Zi(s, e, t, i) {
            const n = (function _n(s) {
                return (0, d.ah)(s, [
                  "outerStart",
                  "outerEnd",
                  "innerStart",
                  "innerEnd",
                ]);
              })(s.options.borderRadius),
              o = (t - e) / 2,
              r = Math.min(o, (i * e) / 2),
              l = (c) => {
                const u = ((t - Math.min(o, c)) * i) / 2;
                return (0, d.w)(c, 0, Math.min(o, u));
              };
            return {
              outerStart: l(n.outerStart),
              outerEnd: l(n.outerEnd),
              innerStart: (0, d.w)(n.innerStart, 0, r),
              innerEnd: (0, d.w)(n.innerEnd, 0, r),
            };
          })(e, x, p, F - I),
          G = p - H,
          Q = p - K,
          nt = I + H / G,
          it = F - K / Q,
          _t = x + N,
          ut = x + W,
          ft = I + N / _t,
          Ht = F - W / ut;
        if ((s.beginPath(), s.arc(o, r, p, nt, it), K > 0)) {
          const wt = _i(Q, it, o, r);
          s.arc(wt.x, wt.y, K, it, F + d.H);
        }
        const ue = _i(ut, F, o, r);
        if ((s.lineTo(ue.x, ue.y), W > 0)) {
          const wt = _i(ut, Ht, o, r);
          s.arc(wt.x, wt.y, W, F + d.H, Ht + Math.PI);
        }
        if ((s.arc(o, r, x, F - W / x, I + N / x, !0), N > 0)) {
          const wt = _i(_t, ft, o, r);
          s.arc(wt.x, wt.y, N, ft + Math.PI, I - d.H);
        }
        const ct = _i(G, I, o, r);
        if ((s.lineTo(ct.x, ct.y), H > 0)) {
          const wt = _i(G, nt, o, r);
          s.arc(wt.x, wt.y, H, I - d.H, nt);
        }
        s.closePath();
      }
      Object.defineProperties(Qi, {
        defaults: { enumerable: Oe, value: d.d },
        instances: { enumerable: Oe, value: bi },
        overrides: { enumerable: Oe, value: d.a0 },
        registry: { enumerable: Oe, value: Pe },
        version: { enumerable: Oe, value: "3.6.2" },
        getChart: { enumerable: Oe, value: Nn },
        register: {
          enumerable: Oe,
          value: (...s) => {
            Pe.add(...s), Vn();
          },
        },
        unregister: {
          enumerable: Oe,
          value: (...s) => {
            Pe.remove(...s), Vn();
          },
        },
      });
      class He extends _ {
        constructor(e) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            e && Object.assign(this, e);
        }
        inRange(e, t, i) {
          const n = this.getProps(["x", "y"], i),
            { angle: o, distance: r } = (0, d.af)(n, { x: e, y: t }),
            {
              startAngle: l,
              endAngle: c,
              innerRadius: u,
              outerRadius: p,
              circumference: x,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              i
            ),
            S = this.options.spacing / 2,
            O = (0, d.v)(x, c - l) >= d.T || (0, d.p)(o, l, c),
            T = (0, d.ag)(r, u + S, p + S);
          return O && T;
        }
        getCenterPoint(e) {
          const {
              x: t,
              y: i,
              startAngle: n,
              endAngle: o,
              innerRadius: r,
              outerRadius: l,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              e
            ),
            { offset: c, spacing: u } = this.options,
            p = (n + o) / 2,
            x = (r + l + u + c) / 2;
          return { x: t + Math.cos(p) * x, y: i + Math.sin(p) * x };
        }
        tooltipPosition(e) {
          return this.getCenterPoint(e);
        }
        draw(e) {
          const { options: t, circumference: i } = this,
            n = (t.offset || 0) / 2,
            o = (t.spacing || 0) / 2;
          if (
            ((this.pixelMargin = "inner" === t.borderAlign ? 0.33 : 0),
            (this.fullCircles = i > d.T ? Math.floor(i / d.T) : 0),
            0 === i || this.innerRadius < 0 || this.outerRadius < 0)
          )
            return;
          e.save();
          let r = 0;
          if (n) {
            r = n / 2;
            const c = (this.startAngle + this.endAngle) / 2;
            e.translate(Math.cos(c) * r, Math.sin(c) * r),
              this.circumference >= d.P && (r = n);
          }
          (e.fillStyle = t.backgroundColor), (e.strokeStyle = t.borderColor);
          const l = (function bs(s, e, t, i) {
            const { fullCircles: n, startAngle: o, circumference: r } = e;
            let l = e.endAngle;
            if (n) {
              xn(s, e, t, i, o + d.T);
              for (let c = 0; c < n; ++c) s.fill();
              isNaN(r) || ((l = o + (r % d.T)), r % d.T == 0 && (l += d.T));
            }
            return xn(s, e, t, i, l), s.fill(), l;
          })(e, this, r, o);
          (function Ii(s, e, t, i, n) {
            const { options: o } = e,
              r = "inner" === o.borderAlign;
            !o.borderWidth ||
              (r
                ? ((s.lineWidth = 2 * o.borderWidth), (s.lineJoin = "round"))
                : ((s.lineWidth = o.borderWidth), (s.lineJoin = "bevel")),
              e.fullCircles &&
                (function yn(s, e, t) {
                  const {
                      x: i,
                      y: n,
                      startAngle: o,
                      pixelMargin: r,
                      fullCircles: l,
                    } = e,
                    c = Math.max(e.outerRadius - r, 0),
                    u = e.innerRadius + r;
                  let p;
                  for (
                    t && Yn(s, e, o + d.T),
                      s.beginPath(),
                      s.arc(i, n, u, o + d.T, o, !0),
                      p = 0;
                    p < l;
                    ++p
                  )
                    s.stroke();
                  for (
                    s.beginPath(), s.arc(i, n, c, o, o + d.T), p = 0;
                    p < l;
                    ++p
                  )
                    s.stroke();
                })(s, e, r),
              r && Yn(s, e, n),
              xn(s, e, t, i, n),
              s.stroke());
          })(e, this, r, o, l),
            e.restore();
        }
      }
      function vn(s, e, t = e) {
        (s.lineCap = (0, d.v)(t.borderCapStyle, e.borderCapStyle)),
          s.setLineDash((0, d.v)(t.borderDash, e.borderDash)),
          (s.lineDashOffset = (0, d.v)(t.borderDashOffset, e.borderDashOffset)),
          (s.lineJoin = (0, d.v)(t.borderJoinStyle, e.borderJoinStyle)),
          (s.lineWidth = (0, d.v)(t.borderWidth, e.borderWidth)),
          (s.strokeStyle = (0, d.v)(t.borderColor, e.borderColor));
      }
      function _s(s, e, t) {
        s.lineTo(t.x, t.y);
      }
      function wn(s, e, t = {}) {
        const i = s.length,
          { start: n = 0, end: o = i - 1 } = t,
          { start: r, end: l } = e,
          c = Math.max(n, r),
          u = Math.min(o, l);
        return {
          count: i,
          start: c,
          loop: e.loop,
          ilen:
            u < c && !((n < r && o < r) || (n > l && o > l))
              ? i + u - c
              : u - c,
        };
      }
      function xs(s, e, t, i) {
        const { points: n, options: o } = e,
          { count: r, start: l, loop: c, ilen: u } = wn(n, t, i),
          p = (function ei(s) {
            return s.stepped
              ? d.ao
              : s.tension || "monotone" === s.cubicInterpolationMode
              ? d.ap
              : _s;
          })(o);
        let k,
          O,
          T,
          { move: x = !0, reverse: S } = i || {};
        for (k = 0; k <= u; ++k)
          (O = n[(l + (S ? u - k : k)) % r]),
            !O.skip &&
              (x ? (s.moveTo(O.x, O.y), (x = !1)) : p(s, T, O, S, o.stepped),
              (T = O));
        return (
          c && ((O = n[(l + (S ? u : 0)) % r]), p(s, T, O, S, o.stepped)), !!c
        );
      }
      function ys(s, e, t, i) {
        const n = e.points,
          { count: o, start: r, ilen: l } = wn(n, t, i),
          { move: c = !0, reverse: u } = i || {};
        let S,
          k,
          O,
          T,
          I,
          F,
          p = 0,
          x = 0;
        const H = (N) => (r + (u ? l - N : N)) % o,
          K = () => {
            T !== I && (s.lineTo(p, I), s.lineTo(p, T), s.lineTo(p, F));
          };
        for (c && ((k = n[H(0)]), s.moveTo(k.x, k.y)), S = 0; S <= l; ++S) {
          if (((k = n[H(S)]), k.skip)) continue;
          const N = k.x,
            W = k.y,
            G = 0 | N;
          G === O
            ? (W < T ? (T = W) : W > I && (I = W), (p = (x * p + N) / ++x))
            : (K(), s.lineTo(N, W), (O = G), (x = 0), (T = I = W)),
            (F = W);
        }
        K();
      }
      function Mn(s) {
        const e = s.options;
        return s._decimated ||
          s._loop ||
          e.tension ||
          "monotone" === e.cubicInterpolationMode ||
          e.stepped ||
          (e.borderDash && e.borderDash.length)
          ? xs
          : ys;
      }
      (He.id = "arc"),
        (He.defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
        }),
        (He.defaultRoutes = { backgroundColor: "backgroundColor" });
      const Ms = "function" == typeof Path2D;
      let de = (() => {
        class s extends _ {
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._chart = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t);
          }
          updateControlPoints(t, i) {
            const n = this.options;
            (!n.tension && "monotone" !== n.cubicInterpolationMode) ||
              n.stepped ||
              this._pointsUpdated ||
              ((0, d.ai)(
                this._points,
                n,
                t,
                n.spanGaps ? this._loop : this._fullLoop,
                i
              ),
              (this._pointsUpdated = !0));
          }
          set points(t) {
            (this._points = t),
              delete this._segments,
              delete this._path,
              (this._pointsUpdated = !1);
          }
          get points() {
            return this._points;
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (0, d.aj)(this, this.options.segment))
            );
          }
          first() {
            const t = this.segments;
            return t.length && this.points[t[0].start];
          }
          last() {
            const t = this.segments,
              n = t.length;
            return n && this.points[t[n - 1].end];
          }
          interpolate(t, i) {
            const n = this.options,
              o = t[i],
              r = this.points,
              l = (0, d.ak)(this, { property: i, start: o, end: o });
            if (!l.length) return;
            const c = [],
              u = (function qi(s) {
                return s.stepped
                  ? d.al
                  : s.tension || "monotone" === s.cubicInterpolationMode
                  ? d.am
                  : d.an;
              })(n);
            let p, x;
            for (p = 0, x = l.length; p < x; ++p) {
              const { start: S, end: k } = l[p],
                O = r[S],
                T = r[k];
              if (O === T) {
                c.push(O);
                continue;
              }
              const F = u(
                O,
                T,
                Math.abs((o - O[i]) / (T[i] - O[i])),
                n.stepped
              );
              (F[i] = t[i]), c.push(F);
            }
            return 1 === c.length ? c[0] : c;
          }
          pathSegment(t, i, n) {
            return Mn(this)(t, this, i, n);
          }
          path(t, i, n) {
            const o = this.segments,
              r = Mn(this);
            let l = this._loop;
            (i = i || 0), (n = n || this.points.length - i);
            for (const c of o) l &= r(t, this, c, { start: i, end: i + n - 1 });
            return !!l;
          }
          draw(t, i, n, o) {
            (this.points || []).length &&
              (this.options || {}).borderWidth &&
              (t.save(),
              (function Ss(s, e, t, i) {
                Ms && !e.options.segment
                  ? (function vs(s, e, t, i) {
                      let n = e._path;
                      n ||
                        ((n = e._path = new Path2D()),
                        e.path(n, t, i) && n.closePath()),
                        vn(s, e.options),
                        s.stroke(n);
                    })(s, e, t, i)
                  : (function ws(s, e, t, i) {
                      const { segments: n, options: o } = e,
                        r = Mn(e);
                      for (const l of n)
                        vn(s, o, l.style),
                          s.beginPath(),
                          r(s, e, l, { start: t, end: t + i - 1 }) &&
                            s.closePath(),
                          s.stroke();
                    })(s, e, t, i);
              })(t, this, n, o),
              t.restore()),
              this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
          }
        }
        return (
          (s.id = "line"),
          (s.defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          }),
          (s.defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          }),
          (s.descriptors = {
            _scriptable: !0,
            _indexable: (e) => "borderDash" !== e && "fill" !== e,
          }),
          s
        );
      })();
      function $n(s, e, t, i) {
        const n = s.options,
          { [t]: o } = s.getProps([t], i);
        return Math.abs(e - o) < n.radius + n.hitRadius;
      }
      let Un = (() => {
        class s extends _ {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
          inRange(t, i, n) {
            const o = this.options,
              { x: r, y: l } = this.getProps(["x", "y"], n);
            return (
              Math.pow(t - r, 2) + Math.pow(i - l, 2) <
              Math.pow(o.hitRadius + o.radius, 2)
            );
          }
          inXRange(t, i) {
            return $n(this, t, "x", i);
          }
          inYRange(t, i) {
            return $n(this, t, "y", i);
          }
          getCenterPoint(t) {
            const { x: i, y: n } = this.getProps(["x", "y"], t);
            return { x: i, y: n };
          }
          size(t) {
            let i = (t = t || this.options || {}).radius || 0;
            return (
              (i = Math.max(i, (i && t.hoverRadius) || 0)),
              2 * (i + ((i && t.borderWidth) || 0))
            );
          }
          draw(t, i) {
            const n = this.options;
            this.skip ||
              n.radius < 0.1 ||
              !(0, d.z)(this, i, this.size(n) / 2) ||
              ((t.strokeStyle = n.borderColor),
              (t.lineWidth = n.borderWidth),
              (t.fillStyle = n.backgroundColor),
              (0, d.aq)(t, n, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        }
        return (
          (s.id = "point"),
          (s.defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0,
          }),
          (s.defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          }),
          s
        );
      })();
      function Sn(s, e) {
        const {
          x: t,
          y: i,
          base: n,
          width: o,
          height: r,
        } = s.getProps(["x", "y", "base", "width", "height"], e);
        let l, c, u, p, x;
        return (
          s.horizontal
            ? ((x = r / 2),
              (l = Math.min(t, n)),
              (c = Math.max(t, n)),
              (u = i - x),
              (p = i + x))
            : ((x = o / 2),
              (l = t - x),
              (c = t + x),
              (u = Math.min(i, n)),
              (p = Math.max(i, n))),
          { left: l, top: u, right: c, bottom: p }
        );
      }
      function Ne(s, e, t, i) {
        return s ? 0 : (0, d.w)(e, t, i);
      }
      function Cn(s, e, t, i) {
        const n = null === e,
          o = null === t,
          l = s && !(n && o) && Sn(s, i);
        return (
          l &&
          (n || (0, d.ag)(e, l.left, l.right)) &&
          (o || (0, d.ag)(t, l.top, l.bottom))
        );
      }
      function Ds(s, e) {
        s.rect(e.x, e.y, e.w, e.h);
      }
      function tn(s, e, t = {}) {
        const i = s.x !== t.x ? -e : 0,
          n = s.y !== t.y ? -e : 0;
        return {
          x: s.x + i,
          y: s.y + n,
          w: s.w + ((s.x + s.w !== t.x + t.w ? e : 0) - i),
          h: s.h + ((s.y + s.h !== t.y + t.h ? e : 0) - n),
          radius: s.radius,
        };
      }
      class xi extends _ {
        constructor(e) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            e && Object.assign(this, e);
        }
        draw(e) {
          const {
              inflateAmount: t,
              options: { borderColor: i, backgroundColor: n },
            } = this,
            { inner: o, outer: r } = (function Ps(s) {
              const e = Sn(s),
                t = e.right - e.left,
                i = e.bottom - e.top,
                n = (function Cs(s, e, t) {
                  const n = s.borderSkipped,
                    o = (0, d.as)(s.options.borderWidth);
                  return {
                    t: Ne(n.top, o.top, 0, t),
                    r: Ne(n.right, o.right, 0, e),
                    b: Ne(n.bottom, o.bottom, 0, t),
                    l: Ne(n.left, o.left, 0, e),
                  };
                })(s, t / 2, i / 2),
                o = (function ks(s, e, t) {
                  const { enableBorderRadius: i } = s.getProps([
                      "enableBorderRadius",
                    ]),
                    n = s.options.borderRadius,
                    o = (0, d.at)(n),
                    r = Math.min(e, t),
                    l = s.borderSkipped,
                    c = i || (0, d.i)(n);
                  return {
                    topLeft: Ne(!c || l.top || l.left, o.topLeft, 0, r),
                    topRight: Ne(!c || l.top || l.right, o.topRight, 0, r),
                    bottomLeft: Ne(
                      !c || l.bottom || l.left,
                      o.bottomLeft,
                      0,
                      r
                    ),
                    bottomRight: Ne(
                      !c || l.bottom || l.right,
                      o.bottomRight,
                      0,
                      r
                    ),
                  };
                })(s, t / 2, i / 2);
              return {
                outer: { x: e.left, y: e.top, w: t, h: i, radius: o },
                inner: {
                  x: e.left + n.l,
                  y: e.top + n.t,
                  w: t - n.l - n.r,
                  h: i - n.t - n.b,
                  radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                    topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                    bottomRight: Math.max(
                      0,
                      o.bottomRight - Math.max(n.b, n.r)
                    ),
                  },
                },
              };
            })(this),
            l = (function Os(s) {
              return s.topLeft || s.topRight || s.bottomLeft || s.bottomRight;
            })(r.radius)
              ? d.ar
              : Ds;
          e.save(),
            (r.w !== o.w || r.h !== o.h) &&
              (e.beginPath(),
              l(e, tn(r, t, o)),
              e.clip(),
              l(e, tn(o, -t, r)),
              (e.fillStyle = i),
              e.fill("evenodd")),
            e.beginPath(),
            l(e, tn(o, t)),
            (e.fillStyle = n),
            e.fill(),
            e.restore();
        }
        inRange(e, t, i) {
          return Cn(this, e, t, i);
        }
        inXRange(e, t) {
          return Cn(this, e, null, t);
        }
        inYRange(e, t) {
          return Cn(this, null, e, t);
        }
        getCenterPoint(e) {
          const {
            x: t,
            y: i,
            base: n,
            horizontal: o,
          } = this.getProps(["x", "y", "base", "horizontal"], e);
          return { x: o ? (t + n) / 2 : t, y: o ? i : (i + n) / 2 };
        }
        getRange(e) {
          return "x" === e ? this.width / 2 : this.height / 2;
        }
      }
      function Rs(s, e, t) {
        const i = (function Qn(s) {
          const e = s.options,
            t = e.fill;
          let i = (0, d.v)(t && t.target, t);
          return (
            void 0 === i && (i = !!e.backgroundColor),
            !1 !== i && null !== i && (!0 === i ? "origin" : i)
          );
        })(s);
        if ((0, d.i)(i)) return !isNaN(i.value) && i;
        let n = parseFloat(i);
        return (0, d.g)(n) && Math.floor(n) === n
          ? (("-" === i[0] || "+" === i[0]) && (n = e + n),
            !(n === e || n < 0 || n >= t) && n)
          : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
      }
      (xi.id = "bar"),
        (xi.defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        }),
        (xi.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      class h {
        constructor(e) {
          (this.x = e.x), (this.y = e.y), (this.radius = e.radius);
        }
        pathSegment(e, t, i) {
          const { x: n, y: o, radius: r } = this;
          return (
            e.arc(n, o, r, (t = t || { start: 0, end: d.T }).end, t.start, !0),
            !i.bounds
          );
        }
        interpolate(e) {
          const { x: t, y: i, radius: n } = this,
            o = e.angle;
          return { x: t + Math.cos(o) * n, y: i + Math.sin(o) * n, angle: o };
        }
      }
      function v(s, e, t) {
        for (; e > s; e--) {
          const i = t[e];
          if (!isNaN(i.x) && !isNaN(i.y)) break;
        }
        return e;
      }
      function j(s, e, t) {
        const i = [];
        for (let n = 0; n < t.length; n++) {
          const o = t[n],
            { first: r, last: l, point: c } = z(o, e, "x");
          if (!(!c || (r && l)))
            if (r) i.unshift(c);
            else if ((s.push(c), !l)) break;
        }
        s.push(...i);
      }
      function z(s, e, t) {
        const i = s.interpolate(e, t);
        if (!i) return {};
        const n = i[t],
          o = s.segments,
          r = s.points;
        let l = !1,
          c = !1;
        for (let u = 0; u < o.length; u++) {
          const p = o[u],
            x = r[p.start][t],
            S = r[p.end][t];
          if ((0, d.ag)(n, x, S)) {
            (l = n === x), (c = n === S);
            break;
          }
        }
        return { first: l, last: c, point: i };
      }
      function V(s) {
        const { chart: e, fill: t, line: i } = s;
        if ((0, d.g)(t))
          return (function Ls(s, e) {
            const t = s.getDatasetMeta(e);
            return t && s.isDatasetVisible(e) ? t.dataset : null;
          })(e, t);
        if ("stack" === t)
          return (function C(s) {
            const { scale: e, index: t, line: i } = s,
              n = [],
              o = i.segments,
              r = i.points,
              l = (function L(s, e) {
                const t = [],
                  i = s.getMatchingVisibleMetas("line");
                for (let n = 0; n < i.length; n++) {
                  const o = i[n];
                  if (o.index === e) break;
                  o.hidden || t.unshift(o.dataset);
                }
                return t;
              })(e, t);
            l.push(Z({ x: null, y: e.bottom }, i));
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              for (let p = u.start; p <= u.end; p++) j(n, r[p], l);
            }
            return new de({ points: n, options: {} });
          })(s);
        if ("shape" === t) return !0;
        const n = (function b(s) {
          return (s.scale || {}).getPointPositionForValue
            ? (function f(s) {
                const { scale: e, fill: t } = s,
                  i = e.options,
                  n = e.getLabels().length,
                  o = [],
                  r = i.reverse ? e.max : e.min;
                let c, u, p;
                if (
                  ((p =
                    "start" === t
                      ? r
                      : "end" === t
                      ? i.reverse
                        ? e.min
                        : e.max
                      : (0, d.i)(t)
                      ? t.value
                      : e.getBaseValue()),
                  i.grid.circular)
                )
                  return (
                    (u = e.getPointPositionForValue(0, r)),
                    new h({
                      x: u.x,
                      y: u.y,
                      radius: e.getDistanceFromCenterForValue(p),
                    })
                  );
                for (c = 0; c < n; ++c)
                  o.push(e.getPointPositionForValue(c, p));
                return o;
              })(s)
            : (function a(s) {
                const { scale: e = {}, fill: t } = s;
                let n,
                  i = null;
                return (
                  "start" === t
                    ? (i = e.bottom)
                    : "end" === t
                    ? (i = e.top)
                    : (0, d.i)(t)
                    ? (i = e.getPixelForValue(t.value))
                    : e.getBasePixel && (i = e.getBasePixel()),
                  (0, d.g)(i)
                    ? ((n = e.isHorizontal()),
                      { x: n ? i : null, y: n ? null : i })
                    : null
                );
              })(s);
        })(s);
        return n instanceof h ? n : Z(n, i);
      }
      function Z(s, e) {
        let t = [],
          i = !1;
        return (
          (0, d.b)(s)
            ? ((i = !0), (t = s))
            : (t = (function M(s, e) {
                const { x: t = null, y: i = null } = s || {},
                  n = e.points,
                  o = [];
                return (
                  e.segments.forEach(({ start: r, end: l }) => {
                    l = v(r, l, n);
                    const c = n[r],
                      u = n[l];
                    null !== i
                      ? (o.push({ x: c.x, y: i }), o.push({ x: u.x, y: i }))
                      : null !== t &&
                        (o.push({ x: t, y: c.y }), o.push({ x: t, y: u.y }));
                  }),
                  o
                );
              })(s, e)),
          t.length
            ? new de({
                points: t,
                options: { tension: 0 },
                _loop: i,
                _fullLoop: i,
              })
            : null
        );
      }
      function J(s, e, t) {
        let n = s[e].fill;
        const o = [e];
        let r;
        if (!t) return n;
        for (; !1 !== n && -1 === o.indexOf(n); ) {
          if (!(0, d.g)(n)) return n;
          if (((r = s[n]), !r)) return !1;
          if (r.visible) return n;
          o.push(n), (n = r.fill);
        }
        return !1;
      }
      function Wt(s, e, t) {
        s.beginPath(),
          e.path(s),
          s.lineTo(e.last().x, t),
          s.lineTo(e.first().x, t),
          s.closePath(),
          s.clip();
      }
      function kt(s, e, t, i) {
        if (i) return;
        let n = e[s],
          o = t[s];
        return (
          "angle" === s && ((n = (0, d.av)(n)), (o = (0, d.av)(o))),
          { property: s, start: n, end: o }
        );
      }
      function Kt(s, e, t, i) {
        return s && e ? i(s[t], e[t]) : s ? s[t] : e ? e[t] : 0;
      }
      function Gt(s, e, t) {
        const { top: i, bottom: n } = e.chart.chartArea,
          { property: o, start: r, end: l } = t || {};
        "x" === o && (s.beginPath(), s.rect(r, i, l - r, n - i), s.clip());
      }
      function ii(s, e, t, i) {
        const n = e.interpolate(t, i);
        n && s.lineTo(n.x, n.y);
      }
      function yi(s, e) {
        const { line: t, target: i, property: n, color: o, scale: r } = e,
          l = (function Yt(s, e, t) {
            const i = s.segments,
              n = s.points,
              o = e.points,
              r = [];
            for (const l of i) {
              let { start: c, end: u } = l;
              u = v(c, u, n);
              const p = kt(t, n[c], n[u], l.loop);
              if (!e.segments) {
                r.push({ source: l, target: p, start: n[c], end: n[u] });
                continue;
              }
              const x = (0, d.ak)(e, p);
              for (const S of x) {
                const k = kt(t, o[S.start], o[S.end], S.loop),
                  O = (0, d.au)(l, n, k);
                for (const T of O)
                  r.push({
                    source: T,
                    target: S,
                    start: { [t]: Kt(p, k, "start", Math.max) },
                    end: { [t]: Kt(p, k, "end", Math.min) },
                  });
              }
            }
            return r;
          })(t, i, n);
        for (const { source: c, target: u, start: p, end: x } of l) {
          const { style: { backgroundColor: S = o } = {} } = c,
            k = !0 !== i;
          s.save(),
            (s.fillStyle = S),
            Gt(s, r, k && kt(n, p, x)),
            s.beginPath();
          const O = !!t.pathSegment(s, c);
          let T;
          if (k) {
            O ? s.closePath() : ii(s, i, x, n);
            const I = !!i.pathSegment(s, u, { move: O, reverse: !0 });
            (T = O && I), T || ii(s, i, p, n);
          }
          s.closePath(), s.fill(T ? "evenodd" : "nonzero"), s.restore();
        }
      }
      function kn(s, e, t) {
        const i = V(e),
          { line: n, scale: o, axis: r } = e,
          l = n.options,
          c = l.fill,
          u = l.backgroundColor,
          { above: p = u, below: x = u } = c || {};
        i &&
          n.points.length &&
          ((0, d.V)(s, t),
          (function Is(s, e) {
            const {
                line: t,
                target: i,
                above: n,
                below: o,
                area: r,
                scale: l,
              } = e,
              c = t._loop ? "angle" : e.axis;
            s.save(),
              "x" === c &&
                o !== n &&
                (Wt(s, i, r.top),
                yi(s, { line: t, target: i, color: n, scale: l, property: c }),
                s.restore(),
                s.save(),
                Wt(s, i, r.bottom)),
              yi(s, { line: t, target: i, color: o, scale: l, property: c }),
              s.restore();
          })(s, {
            line: n,
            target: i,
            above: p,
            below: x,
            area: t,
            scale: o,
            axis: r,
          }),
          (0, d.X)(s));
      }
      var Zn = {
        id: "filler",
        afterDatasetsUpdate(s, e, t) {
          const i = (s.data.datasets || []).length,
            n = [];
          let o, r, l, c;
          for (r = 0; r < i; ++r)
            (o = s.getDatasetMeta(r)),
              (l = o.dataset),
              (c = null),
              l &&
                l.options &&
                l instanceof de &&
                (c = {
                  visible: s.isDatasetVisible(r),
                  index: r,
                  fill: Rs(l, r, i),
                  chart: s,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: l,
                }),
              (o.$filler = c),
              n.push(c);
          for (r = 0; r < i; ++r)
            (c = n[r]), c && !1 !== c.fill && (c.fill = J(n, r, t.propagate));
        },
        beforeDraw(s, e, t) {
          const i = "beforeDraw" === t.drawTime,
            n = s.getSortedVisibleDatasetMetas(),
            o = s.chartArea;
          for (let r = n.length - 1; r >= 0; --r) {
            const l = n[r].$filler;
            !l || (l.line.updateControlPoints(o, l.axis), i && kn(s.ctx, l, o));
          }
        },
        beforeDatasetsDraw(s, e, t) {
          if ("beforeDatasetsDraw" !== t.drawTime) return;
          const i = s.getSortedVisibleDatasetMetas();
          for (let n = i.length - 1; n >= 0; --n) {
            const o = i[n].$filler;
            o && kn(s.ctx, o, s.chartArea);
          }
        },
        beforeDatasetDraw(s, e, t) {
          const i = e.meta.$filler;
          !i ||
            !1 === i.fill ||
            "beforeDatasetDraw" !== t.drawTime ||
            kn(s.ctx, i, s.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      };
      const qn = (s, e) => {
        let { boxHeight: t = e, boxWidth: i = e } = s;
        return (
          s.usePointStyle && ((t = Math.min(t, e)), (i = Math.min(i, e))),
          { boxWidth: i, boxHeight: t, itemHeight: Math.max(e, t) }
        );
      };
      class Pn extends _ {
        constructor(e) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(e, t, i) {
          (this.maxWidth = e),
            (this.maxHeight = t),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const e = this.options.labels || {};
          let t = (0, d.N)(e.generateLabels, [this.chart], this) || [];
          e.filter && (t = t.filter((i) => e.filter(i, this.chart.data))),
            e.sort && (t = t.sort((i, n) => e.sort(i, n, this.chart.data))),
            this.options.reverse && t.reverse(),
            (this.legendItems = t);
        }
        fit() {
          const { options: e, ctx: t } = this;
          if (!e.display) return void (this.width = this.height = 0);
          const i = e.labels,
            n = (0, d.Y)(i.font),
            o = n.size,
            r = this._computeTitleHeight(),
            { boxWidth: l, itemHeight: c } = qn(i, o);
          let u, p;
          (t.font = n.string),
            this.isHorizontal()
              ? ((u = this.maxWidth), (p = this._fitRows(r, o, l, c) + 10))
              : ((p = this.maxHeight), (u = this._fitCols(r, o, l, c) + 10)),
            (this.width = Math.min(u, e.maxWidth || this.maxWidth)),
            (this.height = Math.min(p, e.maxHeight || this.maxHeight));
        }
        _fitRows(e, t, i, n) {
          const {
              ctx: o,
              maxWidth: r,
              options: {
                labels: { padding: l },
              },
            } = this,
            c = (this.legendHitBoxes = []),
            u = (this.lineWidths = [0]),
            p = n + l;
          let x = e;
          (o.textAlign = "left"), (o.textBaseline = "middle");
          let S = -1,
            k = -p;
          return (
            this.legendItems.forEach((O, T) => {
              const I = i + t / 2 + o.measureText(O.text).width;
              (0 === T || u[u.length - 1] + I + 2 * l > r) &&
                ((x += p), (u[u.length - (T > 0 ? 0 : 1)] = 0), (k += p), S++),
                (c[T] = { left: 0, top: k, row: S, width: I, height: n }),
                (u[u.length - 1] += I + l);
            }),
            x
          );
        }
        _fitCols(e, t, i, n) {
          const {
              ctx: o,
              maxHeight: r,
              options: {
                labels: { padding: l },
              },
            } = this,
            c = (this.legendHitBoxes = []),
            u = (this.columnSizes = []),
            p = r - e;
          let x = l,
            S = 0,
            k = 0,
            O = 0,
            T = 0;
          return (
            this.legendItems.forEach((I, F) => {
              const H = i + t / 2 + o.measureText(I.text).width;
              F > 0 &&
                k + n + 2 * l > p &&
                ((x += S + l),
                u.push({ width: S, height: k }),
                (O += S + l),
                T++,
                (S = k = 0)),
                (c[F] = { left: O, top: k, col: T, width: H, height: n }),
                (S = Math.max(S, H)),
                (k += n + l);
            }),
            (x += S),
            u.push({ width: S, height: k }),
            x
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const e = this._computeTitleHeight(),
            {
              legendHitBoxes: t,
              options: {
                align: i,
                labels: { padding: n },
                rtl: o,
              },
            } = this,
            r = (0, d.aw)(o, this.left, this.width);
          if (this.isHorizontal()) {
            let l = 0,
              c = (0, d.$)(i, this.left + n, this.right - this.lineWidths[l]);
            for (const u of t)
              l !== u.row &&
                ((l = u.row),
                (c = (0, d.$)(
                  i,
                  this.left + n,
                  this.right - this.lineWidths[l]
                ))),
                (u.top += this.top + e + n),
                (u.left = r.leftForLtr(r.x(c), u.width)),
                (c += u.width + n);
          } else {
            let l = 0,
              c = (0, d.$)(
                i,
                this.top + e + n,
                this.bottom - this.columnSizes[l].height
              );
            for (const u of t)
              u.col !== l &&
                ((l = u.col),
                (c = (0, d.$)(
                  i,
                  this.top + e + n,
                  this.bottom - this.columnSizes[l].height
                ))),
                (u.top = c),
                (u.left += this.left + n),
                (u.left = r.leftForLtr(r.x(u.left), u.width)),
                (c += u.height + n);
          }
        }
        isHorizontal() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const e = this.ctx;
            (0, d.V)(e, this), this._draw(), (0, d.X)(e);
          }
        }
        _draw() {
          const { options: e, columnSizes: t, lineWidths: i, ctx: n } = this,
            { align: o, labels: r } = e,
            l = d.d.color,
            c = (0, d.aw)(e.rtl, this.left, this.width),
            u = (0, d.Y)(r.font),
            { color: p, padding: x } = r,
            S = u.size,
            k = S / 2;
          let O;
          this.drawTitle(),
            (n.textAlign = c.textAlign("left")),
            (n.textBaseline = "middle"),
            (n.lineWidth = 0.5),
            (n.font = u.string);
          const { boxWidth: T, boxHeight: I, itemHeight: F } = qn(r, S),
            N = this.isHorizontal(),
            W = this._computeTitleHeight();
          (O = N
            ? {
                x: (0, d.$)(o, this.left + x, this.right - i[0]),
                y: this.top + x + W,
                line: 0,
              }
            : {
                x: this.left + x,
                y: (0, d.$)(o, this.top + W + x, this.bottom - t[0].height),
                line: 0,
              }),
            (0, d.ax)(this.ctx, e.textDirection);
          const G = F + x;
          this.legendItems.forEach((Q, nt) => {
            (n.strokeStyle = Q.fontColor || p),
              (n.fillStyle = Q.fontColor || p);
            const it = n.measureText(Q.text).width,
              _t = c.textAlign(Q.textAlign || (Q.textAlign = r.textAlign)),
              ut = T + k + it;
            let ft = O.x,
              Ht = O.y;
            c.setWidth(this.width),
              N
                ? nt > 0 &&
                  ft + ut + x > this.right &&
                  ((Ht = O.y += G),
                  O.line++,
                  (ft = O.x =
                    (0, d.$)(o, this.left + x, this.right - i[O.line])))
                : nt > 0 &&
                  Ht + G > this.bottom &&
                  ((ft = O.x = ft + t[O.line].width + x),
                  O.line++,
                  (Ht = O.y =
                    (0, d.$)(
                      o,
                      this.top + W + x,
                      this.bottom - t[O.line].height
                    ))),
              (function (Q, nt, it) {
                if (isNaN(T) || T <= 0 || isNaN(I) || I < 0) return;
                n.save();
                const _t = (0, d.v)(it.lineWidth, 1);
                if (
                  ((n.fillStyle = (0, d.v)(it.fillStyle, l)),
                  (n.lineCap = (0, d.v)(it.lineCap, "butt")),
                  (n.lineDashOffset = (0, d.v)(it.lineDashOffset, 0)),
                  (n.lineJoin = (0, d.v)(it.lineJoin, "miter")),
                  (n.lineWidth = _t),
                  (n.strokeStyle = (0, d.v)(it.strokeStyle, l)),
                  n.setLineDash((0, d.v)(it.lineDash, [])),
                  r.usePointStyle)
                ) {
                  const ut = {
                      radius: (T * Math.SQRT2) / 2,
                      pointStyle: it.pointStyle,
                      rotation: it.rotation,
                      borderWidth: _t,
                    },
                    ft = c.xPlus(Q, T / 2);
                  (0, d.aq)(n, ut, ft, nt + k);
                } else {
                  const ut = nt + Math.max((S - I) / 2, 0),
                    ft = c.leftForLtr(Q, T),
                    Ht = (0, d.at)(it.borderRadius);
                  n.beginPath(),
                    Object.values(Ht).some((ue) => 0 !== ue)
                      ? (0, d.ar)(n, { x: ft, y: ut, w: T, h: I, radius: Ht })
                      : n.rect(ft, ut, T, I),
                    n.fill(),
                    0 !== _t && n.stroke();
                }
                n.restore();
              })(c.x(ft), Ht, Q),
              (ft = (0, d.ay)(_t, ft + T + k, N ? ft + ut : this.right, e.rtl)),
              (function (Q, nt, it) {
                (0, d.W)(n, it.text, Q, nt + F / 2, u, {
                  strikethrough: it.hidden,
                  textAlign: c.textAlign(it.textAlign),
                });
              })(c.x(ft), Ht, Q),
              N ? (O.x += ut + x) : (O.y += G);
          }),
            (0, d.az)(this.ctx, e.textDirection);
        }
        drawTitle() {
          const e = this.options,
            t = e.title,
            i = (0, d.Y)(t.font),
            n = (0, d.B)(t.padding);
          if (!t.display) return;
          const o = (0, d.aw)(e.rtl, this.left, this.width),
            r = this.ctx,
            l = t.position,
            u = n.top + i.size / 2;
          let p,
            x = this.left,
            S = this.width;
          if (this.isHorizontal())
            (S = Math.max(...this.lineWidths)),
              (p = this.top + u),
              (x = (0, d.$)(e.align, x, this.right - S));
          else {
            const O = this.columnSizes.reduce(
              (T, I) => Math.max(T, I.height),
              0
            );
            p =
              u +
              (0, d.$)(
                e.align,
                this.top,
                this.bottom - O - e.labels.padding - this._computeTitleHeight()
              );
          }
          const k = (0, d.$)(l, x, x + S);
          (r.textAlign = o.textAlign((0, d.Z)(l))),
            (r.textBaseline = "middle"),
            (r.strokeStyle = t.color),
            (r.fillStyle = t.color),
            (r.font = i.string),
            (0, d.W)(r, t.text, k, p, i);
        }
        _computeTitleHeight() {
          const e = this.options.title,
            t = (0, d.Y)(e.font),
            i = (0, d.B)(e.padding);
          return e.display ? t.lineHeight + i.height : 0;
        }
        _getLegendItemAt(e, t) {
          let i, n, o;
          if (
            (0, d.ag)(e, this.left, this.right) &&
            (0, d.ag)(t, this.top, this.bottom)
          )
            for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
              if (
                ((n = o[i]),
                (0, d.ag)(e, n.left, n.left + n.width) &&
                  (0, d.ag)(t, n.top, n.top + n.height))
              )
                return this.legendItems[i];
          return null;
        }
        handleEvent(e) {
          const t = this.options;
          if (
            !(function ho(s, e) {
              return !!(
                ("mousemove" === s && (e.onHover || e.onLeave)) ||
                (e.onClick && ("click" === s || "mouseup" === s))
              );
            })(e.type, t)
          )
            return;
          const i = this._getLegendItemAt(e.x, e.y);
          if ("mousemove" === e.type) {
            const n = this._hoveredItem,
              o = ((s, e) =>
                null !== s &&
                null !== e &&
                s.datasetIndex === e.datasetIndex &&
                s.index === e.index)(n, i);
            n && !o && (0, d.N)(t.onLeave, [e, n, this], this),
              (this._hoveredItem = i),
              i && !o && (0, d.N)(t.onHover, [e, i, this], this);
          } else i && (0, d.N)(t.onClick, [e, i, this], this);
        }
      }
      var $s = {
        id: "legend",
        _element: Pn,
        start(s, e, t) {
          const i = (s.legend = new Pn({ ctx: s.ctx, options: t, chart: s }));
          At.configure(s, i, t), At.addBox(s, i);
        },
        stop(s) {
          At.removeBox(s, s.legend), delete s.legend;
        },
        beforeUpdate(s, e, t) {
          const i = s.legend;
          At.configure(s, i, t), (i.options = t);
        },
        afterUpdate(s) {
          const e = s.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(s, e) {
          e.replay || s.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(s, e, t) {
            const i = e.datasetIndex,
              n = t.chart;
            n.isDatasetVisible(i)
              ? (n.hide(i), (e.hidden = !0))
              : (n.show(i), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (s) => s.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(s) {
              const e = s.data.datasets,
                {
                  labels: {
                    usePointStyle: t,
                    pointStyle: i,
                    textAlign: n,
                    color: o,
                  },
                } = s.legend.options;
              return s._getSortedDatasetMetas().map((r) => {
                const l = r.controller.getStyle(t ? 0 : void 0),
                  c = (0, d.B)(l.borderWidth);
                return {
                  text: e[r.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: o,
                  hidden: !r.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (c.width + c.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: i || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: n || l.textAlign,
                  borderRadius: 0,
                  datasetIndex: r.index,
                };
              }, this);
            },
          },
          title: {
            color: (s) => s.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (s) => !s.startsWith("on"),
          labels: {
            _scriptable: (s) =>
              !["generateLabels", "filter", "sort"].includes(s),
          },
        },
      };
      class ts extends _ {
        constructor(e) {
          super(),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(e, t) {
          const i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width =
              this.height =
              this.right =
              this.bottom =
                0);
          (this.width = this.right = e), (this.height = this.bottom = t);
          const n = (0, d.b)(i.text) ? i.text.length : 1;
          this._padding = (0, d.B)(i.padding);
          const o = n * (0, d.Y)(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = o) : (this.width = o);
        }
        isHorizontal() {
          const e = this.options.position;
          return "top" === e || "bottom" === e;
        }
        _drawArgs(e) {
          const { top: t, left: i, bottom: n, right: o, options: r } = this,
            l = r.align;
          let u,
            p,
            x,
            c = 0;
          return (
            this.isHorizontal()
              ? ((p = (0, d.$)(l, i, o)), (x = t + e), (u = o - i))
              : ("left" === r.position
                  ? ((p = i + e), (x = (0, d.$)(l, n, t)), (c = -0.5 * d.P))
                  : ((p = o - e), (x = (0, d.$)(l, t, n)), (c = 0.5 * d.P)),
                (u = n - t)),
            { titleX: p, titleY: x, maxWidth: u, rotation: c }
          );
        }
        draw() {
          const e = this.ctx,
            t = this.options;
          if (!t.display) return;
          const i = (0, d.Y)(t.font),
            o = i.lineHeight / 2 + this._padding.top,
            {
              titleX: r,
              titleY: l,
              maxWidth: c,
              rotation: u,
            } = this._drawArgs(o);
          (0, d.W)(e, t.text, 0, 0, i, {
            color: t.color,
            maxWidth: c,
            rotation: u,
            textAlign: (0, d.Z)(t.align),
            textBaseline: "middle",
            translation: [r, l],
          });
        }
      }
      var Us = {
        id: "title",
        _element: ts,
        start(s, e, t) {
          !(function uo(s, e) {
            const t = new ts({ ctx: s.ctx, options: e, chart: s });
            At.configure(s, t, e), At.addBox(s, t), (s.titleBlock = t);
          })(s, t);
        },
        stop(s) {
          At.removeBox(s, s.titleBlock), delete s.titleBlock;
        },
        beforeUpdate(s, e, t) {
          const i = s.titleBlock;
          At.configure(s, i, t), (i.options = t);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const On = {
        average(s) {
          if (!s.length) return !1;
          let e,
            t,
            i = 0,
            n = 0,
            o = 0;
          for (e = 0, t = s.length; e < t; ++e) {
            const r = s[e].element;
            if (r && r.hasValue()) {
              const l = r.tooltipPosition();
              (i += l.x), (n += l.y), ++o;
            }
          }
          return { x: i / o, y: n / o };
        },
        nearest(s, e) {
          if (!s.length) return !1;
          let o,
            r,
            l,
            t = e.x,
            i = e.y,
            n = Number.POSITIVE_INFINITY;
          for (o = 0, r = s.length; o < r; ++o) {
            const c = s[o].element;
            if (c && c.hasValue()) {
              const u = c.getCenterPoint(),
                p = (0, d.aB)(e, u);
              p < n && ((n = p), (l = c));
            }
          }
          if (l) {
            const c = l.tooltipPosition();
            (t = c.x), (i = c.y);
          }
          return { x: t, y: i };
        },
      };
      function Ve(s, e) {
        return (
          e && ((0, d.b)(e) ? Array.prototype.push.apply(s, e) : s.push(e)), s
        );
      }
      function ni(s) {
        return ("string" == typeof s || s instanceof String) &&
          s.indexOf("\n") > -1
          ? s.split("\n")
          : s;
      }
      function go(s, e) {
        const { element: t, datasetIndex: i, index: n } = e,
          o = s.getDatasetMeta(i).controller,
          { label: r, value: l } = o.getLabelAndValue(n);
        return {
          chart: s,
          label: r,
          parsed: o.getParsed(n),
          raw: s.data.datasets[i].data[n],
          formattedValue: l,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: i,
          element: t,
        };
      }
      function Xs(s, e) {
        const t = s._chart.ctx,
          { body: i, footer: n, title: o } = s,
          { boxWidth: r, boxHeight: l } = e,
          c = (0, d.Y)(e.bodyFont),
          u = (0, d.Y)(e.titleFont),
          p = (0, d.Y)(e.footerFont),
          x = o.length,
          S = n.length,
          k = i.length,
          O = (0, d.B)(e.padding);
        let T = O.height,
          I = 0,
          F = i.reduce(
            (N, W) => N + W.before.length + W.lines.length + W.after.length,
            0
          );
        (F += s.beforeBody.length + s.afterBody.length),
          x &&
            (T +=
              x * u.lineHeight +
              (x - 1) * e.titleSpacing +
              e.titleMarginBottom),
          F &&
            (T +=
              k * (e.displayColors ? Math.max(l, c.lineHeight) : c.lineHeight) +
              (F - k) * c.lineHeight +
              (F - 1) * e.bodySpacing),
          S &&
            (T +=
              e.footerMarginTop + S * p.lineHeight + (S - 1) * e.footerSpacing);
        let H = 0;
        const K = function (N) {
          I = Math.max(I, t.measureText(N).width + H);
        };
        return (
          t.save(),
          (t.font = u.string),
          (0, d.C)(s.title, K),
          (t.font = c.string),
          (0, d.C)(s.beforeBody.concat(s.afterBody), K),
          (H = e.displayColors ? r + 2 + e.boxPadding : 0),
          (0, d.C)(i, (N) => {
            (0, d.C)(N.before, K), (0, d.C)(N.lines, K), (0, d.C)(N.after, K);
          }),
          (H = 0),
          (t.font = p.string),
          (0, d.C)(s.footer, K),
          t.restore(),
          (I += O.width),
          { width: I, height: T }
        );
      }
      function Ks(s, e, t, i) {
        const { x: n, width: o } = t,
          {
            width: r,
            chartArea: { left: l, right: c },
          } = s;
        let u = "center";
        return (
          "center" === i
            ? (u = n <= (l + c) / 2 ? "left" : "right")
            : n <= o / 2
            ? (u = "left")
            : n >= r - o / 2 && (u = "right"),
          (function mo(s, e, t, i) {
            const { x: n, width: o } = i,
              r = t.caretSize + t.caretPadding;
            if (
              ("left" === s && n + o + r > e.width) ||
              ("right" === s && n - o - r < 0)
            )
              return !0;
          })(u, s, e, t) && (u = "center"),
          u
        );
      }
      function Gs(s, e, t) {
        const i =
          e.yAlign ||
          (function po(s, e) {
            const { y: t, height: i } = e;
            return t < i / 2
              ? "top"
              : t > s.height - i / 2
              ? "bottom"
              : "center";
          })(s, t);
        return { xAlign: e.xAlign || Ks(s, e, t, i), yAlign: i };
      }
      function Js(s, e, t, i) {
        const { caretSize: n, caretPadding: o, cornerRadius: r } = s,
          { xAlign: l, yAlign: c } = t,
          u = n + o,
          {
            topLeft: p,
            topRight: x,
            bottomLeft: S,
            bottomRight: k,
          } = (0, d.at)(r);
        let O = (function bo(s, e) {
          let { x: t, width: i } = s;
          return "right" === e ? (t -= i) : "center" === e && (t -= i / 2), t;
        })(e, l);
        const T = (function _o(s, e, t) {
          let { y: i, height: n } = s;
          return (
            "top" === e ? (i += t) : (i -= "bottom" === e ? n + t : n / 2), i
          );
        })(e, c, u);
        return (
          "center" === c
            ? "left" === l
              ? (O += u)
              : "right" === l && (O -= u)
            : "left" === l
            ? (O -= Math.max(p, S) + n)
            : "right" === l && (O += Math.max(x, k) + n),
          {
            x: (0, d.w)(O, 0, i.width - e.width),
            y: (0, d.w)(T, 0, i.height - e.height),
          }
        );
      }
      function Dn(s, e, t) {
        const i = (0, d.B)(t.padding);
        return "center" === e
          ? s.x + s.width / 2
          : "right" === e
          ? s.x + s.width - i.right
          : s.x + i.left;
      }
      function Qs(s) {
        return Ve([], ni(s));
      }
      function Bs(s, e) {
        const t =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return t ? s.override(t) : s;
      }
      let Zs = (() => {
        class s extends _ {
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._chart = t._chart),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0);
          }
          initialize(t) {
            (this.options = t),
              (this._cachedAnimations = void 0),
              (this.$context = void 0);
          }
          _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const i = this._chart,
              n = this.options.setContext(this.getContext()),
              o = n.enabled && i.options.animation && n.animations,
              r = new Ut(this._chart, o);
            return (
              o._cacheable && (this._cachedAnimations = Object.freeze(r)), r
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = (function xo(s, e, t) {
                return (0, d.h)(s, {
                  tooltip: e,
                  tooltipItems: t,
                  type: "tooltip",
                });
              })(this._chart.getContext(), this, this._tooltipItems))
            );
          }
          getTitle(t, i) {
            const { callbacks: n } = i,
              o = n.beforeTitle.apply(this, [t]),
              r = n.title.apply(this, [t]),
              l = n.afterTitle.apply(this, [t]);
            let c = [];
            return (
              (c = Ve(c, ni(o))), (c = Ve(c, ni(r))), (c = Ve(c, ni(l))), c
            );
          }
          getBeforeBody(t, i) {
            return Qs(i.callbacks.beforeBody.apply(this, [t]));
          }
          getBody(t, i) {
            const { callbacks: n } = i,
              o = [];
            return (
              (0, d.C)(t, (r) => {
                const l = { before: [], lines: [], after: [] },
                  c = Bs(n, r);
                Ve(l.before, ni(c.beforeLabel.call(this, r))),
                  Ve(l.lines, c.label.call(this, r)),
                  Ve(l.after, ni(c.afterLabel.call(this, r))),
                  o.push(l);
              }),
              o
            );
          }
          getAfterBody(t, i) {
            return Qs(i.callbacks.afterBody.apply(this, [t]));
          }
          getFooter(t, i) {
            const { callbacks: n } = i,
              o = n.beforeFooter.apply(this, [t]),
              r = n.footer.apply(this, [t]),
              l = n.afterFooter.apply(this, [t]);
            let c = [];
            return (
              (c = Ve(c, ni(o))), (c = Ve(c, ni(r))), (c = Ve(c, ni(l))), c
            );
          }
          _createItems(t) {
            const i = this._active,
              n = this._chart.data,
              o = [],
              r = [],
              l = [];
            let u,
              p,
              c = [];
            for (u = 0, p = i.length; u < p; ++u) c.push(go(this._chart, i[u]));
            return (
              t.filter && (c = c.filter((x, S, k) => t.filter(x, S, k, n))),
              t.itemSort && (c = c.sort((x, S) => t.itemSort(x, S, n))),
              (0, d.C)(c, (x) => {
                const S = Bs(t.callbacks, x);
                o.push(S.labelColor.call(this, x)),
                  r.push(S.labelPointStyle.call(this, x)),
                  l.push(S.labelTextColor.call(this, x));
              }),
              (this.labelColors = o),
              (this.labelPointStyles = r),
              (this.labelTextColors = l),
              (this.dataPoints = c),
              c
            );
          }
          update(t, i) {
            const n = this.options.setContext(this.getContext()),
              o = this._active;
            let r,
              l = [];
            if (o.length) {
              const c = On[n.position].call(this, o, this._eventPosition);
              (l = this._createItems(n)),
                (this.title = this.getTitle(l, n)),
                (this.beforeBody = this.getBeforeBody(l, n)),
                (this.body = this.getBody(l, n)),
                (this.afterBody = this.getAfterBody(l, n)),
                (this.footer = this.getFooter(l, n));
              const u = (this._size = Xs(this, n)),
                p = Object.assign({}, c, u),
                x = Gs(this._chart, n, p),
                S = Js(n, p, x, this._chart);
              (this.xAlign = x.xAlign),
                (this.yAlign = x.yAlign),
                (r = {
                  opacity: 1,
                  x: S.x,
                  y: S.y,
                  width: u.width,
                  height: u.height,
                  caretX: c.x,
                  caretY: c.y,
                });
            } else 0 !== this.opacity && (r = { opacity: 0 });
            (this._tooltipItems = l),
              (this.$context = void 0),
              r && this._resolveAnimations().update(this, r),
              t &&
                n.external &&
                n.external.call(this, {
                  chart: this._chart,
                  tooltip: this,
                  replay: i,
                });
          }
          drawCaret(t, i, n, o) {
            const r = this.getCaretPosition(t, n, o);
            i.lineTo(r.x1, r.y1), i.lineTo(r.x2, r.y2), i.lineTo(r.x3, r.y3);
          }
          getCaretPosition(t, i, n) {
            const { xAlign: o, yAlign: r } = this,
              { caretSize: l, cornerRadius: c } = n,
              {
                topLeft: u,
                topRight: p,
                bottomLeft: x,
                bottomRight: S,
              } = (0, d.at)(c),
              { x: k, y: O } = t,
              { width: T, height: I } = i;
            let F, H, K, N, W, G;
            return (
              "center" === r
                ? ((W = O + I / 2),
                  "left" === o
                    ? ((F = k), (H = F - l), (N = W + l), (G = W - l))
                    : ((F = k + T), (H = F + l), (N = W - l), (G = W + l)),
                  (K = F))
                : ((H =
                    "left" === o
                      ? k + Math.max(u, x) + l
                      : "right" === o
                      ? k + T - Math.max(p, S) - l
                      : this.caretX),
                  "top" === r
                    ? ((N = O), (W = N - l), (F = H - l), (K = H + l))
                    : ((N = O + I), (W = N + l), (F = H + l), (K = H - l)),
                  (G = N)),
              { x1: F, x2: H, x3: K, y1: N, y2: W, y3: G }
            );
          }
          drawTitle(t, i, n) {
            const o = this.title,
              r = o.length;
            let l, c, u;
            if (r) {
              const p = (0, d.aw)(n.rtl, this.x, this.width);
              for (
                t.x = Dn(this, n.titleAlign, n),
                  i.textAlign = p.textAlign(n.titleAlign),
                  i.textBaseline = "middle",
                  l = (0, d.Y)(n.titleFont),
                  c = n.titleSpacing,
                  i.fillStyle = n.titleColor,
                  i.font = l.string,
                  u = 0;
                u < r;
                ++u
              )
                i.fillText(o[u], p.x(t.x), t.y + l.lineHeight / 2),
                  (t.y += l.lineHeight + c),
                  u + 1 === r && (t.y += n.titleMarginBottom - c);
            }
          }
          _drawColorBox(t, i, n, o, r) {
            const l = this.labelColors[n],
              c = this.labelPointStyles[n],
              { boxHeight: u, boxWidth: p, boxPadding: x } = r,
              S = (0, d.Y)(r.bodyFont),
              k = Dn(this, "left", r),
              O = o.x(k),
              I = i.y + (u < S.lineHeight ? (S.lineHeight - u) / 2 : 0);
            if (r.usePointStyle) {
              const F = {
                  radius: Math.min(p, u) / 2,
                  pointStyle: c.pointStyle,
                  rotation: c.rotation,
                  borderWidth: 1,
                },
                H = o.leftForLtr(O, p) + p / 2,
                K = I + u / 2;
              (t.strokeStyle = r.multiKeyBackground),
                (t.fillStyle = r.multiKeyBackground),
                (0, d.aq)(t, F, H, K),
                (t.strokeStyle = l.borderColor),
                (t.fillStyle = l.backgroundColor),
                (0, d.aq)(t, F, H, K);
            } else {
              (t.lineWidth = l.borderWidth || 1),
                (t.strokeStyle = l.borderColor),
                t.setLineDash(l.borderDash || []),
                (t.lineDashOffset = l.borderDashOffset || 0);
              const F = o.leftForLtr(O, p - x),
                H = o.leftForLtr(o.xPlus(O, 1), p - x - 2),
                K = (0, d.at)(l.borderRadius);
              Object.values(K).some((N) => 0 !== N)
                ? (t.beginPath(),
                  (t.fillStyle = r.multiKeyBackground),
                  (0, d.ar)(t, { x: F, y: I, w: p, h: u, radius: K }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = l.backgroundColor),
                  t.beginPath(),
                  (0, d.ar)(t, {
                    x: H,
                    y: I + 1,
                    w: p - 2,
                    h: u - 2,
                    radius: K,
                  }),
                  t.fill())
                : ((t.fillStyle = r.multiKeyBackground),
                  t.fillRect(F, I, p, u),
                  t.strokeRect(F, I, p, u),
                  (t.fillStyle = l.backgroundColor),
                  t.fillRect(H, I + 1, p - 2, u - 2));
            }
            t.fillStyle = this.labelTextColors[n];
          }
          drawBody(t, i, n) {
            const { body: o } = this,
              {
                bodySpacing: r,
                bodyAlign: l,
                displayColors: c,
                boxHeight: u,
                boxWidth: p,
                boxPadding: x,
              } = n,
              S = (0, d.Y)(n.bodyFont);
            let k = S.lineHeight,
              O = 0;
            const T = (0, d.aw)(n.rtl, this.x, this.width),
              I = function (it) {
                i.fillText(it, T.x(t.x + O), t.y + k / 2), (t.y += k + r);
              },
              F = T.textAlign(l);
            let H, K, N, W, G, Q, nt;
            for (
              i.textAlign = l,
                i.textBaseline = "middle",
                i.font = S.string,
                t.x = Dn(this, F, n),
                i.fillStyle = n.bodyColor,
                (0, d.C)(this.beforeBody, I),
                O =
                  c && "right" !== F
                    ? "center" === l
                      ? p / 2 + x
                      : p + 2 + x
                    : 0,
                W = 0,
                Q = o.length;
              W < Q;
              ++W
            ) {
              for (
                H = o[W],
                  K = this.labelTextColors[W],
                  i.fillStyle = K,
                  (0, d.C)(H.before, I),
                  N = H.lines,
                  c &&
                    N.length &&
                    (this._drawColorBox(i, t, W, T, n),
                    (k = Math.max(S.lineHeight, u))),
                  G = 0,
                  nt = N.length;
                G < nt;
                ++G
              )
                I(N[G]), (k = S.lineHeight);
              (0, d.C)(H.after, I);
            }
            (O = 0),
              (k = S.lineHeight),
              (0, d.C)(this.afterBody, I),
              (t.y -= r);
          }
          drawFooter(t, i, n) {
            const o = this.footer,
              r = o.length;
            let l, c;
            if (r) {
              const u = (0, d.aw)(n.rtl, this.x, this.width);
              for (
                t.x = Dn(this, n.footerAlign, n),
                  t.y += n.footerMarginTop,
                  i.textAlign = u.textAlign(n.footerAlign),
                  i.textBaseline = "middle",
                  l = (0, d.Y)(n.footerFont),
                  i.fillStyle = n.footerColor,
                  i.font = l.string,
                  c = 0;
                c < r;
                ++c
              )
                i.fillText(o[c], u.x(t.x), t.y + l.lineHeight / 2),
                  (t.y += l.lineHeight + n.footerSpacing);
            }
          }
          drawBackground(t, i, n, o) {
            const { xAlign: r, yAlign: l } = this,
              { x: c, y: u } = t,
              { width: p, height: x } = n,
              {
                topLeft: S,
                topRight: k,
                bottomLeft: O,
                bottomRight: T,
              } = (0, d.at)(o.cornerRadius);
            (i.fillStyle = o.backgroundColor),
              (i.strokeStyle = o.borderColor),
              (i.lineWidth = o.borderWidth),
              i.beginPath(),
              i.moveTo(c + S, u),
              "top" === l && this.drawCaret(t, i, n, o),
              i.lineTo(c + p - k, u),
              i.quadraticCurveTo(c + p, u, c + p, u + k),
              "center" === l && "right" === r && this.drawCaret(t, i, n, o),
              i.lineTo(c + p, u + x - T),
              i.quadraticCurveTo(c + p, u + x, c + p - T, u + x),
              "bottom" === l && this.drawCaret(t, i, n, o),
              i.lineTo(c + O, u + x),
              i.quadraticCurveTo(c, u + x, c, u + x - O),
              "center" === l && "left" === r && this.drawCaret(t, i, n, o),
              i.lineTo(c, u + S),
              i.quadraticCurveTo(c, u, c + S, u),
              i.closePath(),
              i.fill(),
              o.borderWidth > 0 && i.stroke();
          }
          _updateAnimationTarget(t) {
            const i = this._chart,
              n = this.$animations,
              o = n && n.x,
              r = n && n.y;
            if (o || r) {
              const l = On[t.position].call(
                this,
                this._active,
                this._eventPosition
              );
              if (!l) return;
              const c = (this._size = Xs(this, t)),
                u = Object.assign({}, l, this._size),
                p = Gs(i, t, u),
                x = Js(t, u, p, i);
              (o._to !== x.x || r._to !== x.y) &&
                ((this.xAlign = p.xAlign),
                (this.yAlign = p.yAlign),
                (this.width = c.width),
                (this.height = c.height),
                (this.caretX = l.x),
                (this.caretY = l.y),
                this._resolveAnimations().update(this, x));
            }
          }
          draw(t) {
            const i = this.options.setContext(this.getContext());
            let n = this.opacity;
            if (!n) return;
            this._updateAnimationTarget(i);
            const o = { width: this.width, height: this.height },
              r = { x: this.x, y: this.y };
            n = Math.abs(n) < 0.001 ? 0 : n;
            const l = (0, d.B)(i.padding);
            i.enabled &&
              (this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length) &&
              (t.save(),
              (t.globalAlpha = n),
              this.drawBackground(r, t, o, i),
              (0, d.ax)(t, i.textDirection),
              (r.y += l.top),
              this.drawTitle(r, t, i),
              this.drawBody(r, t, i),
              this.drawFooter(r, t, i),
              (0, d.az)(t, i.textDirection),
              t.restore());
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t, i) {
            const n = this._active,
              o = t.map(({ datasetIndex: c, index: u }) => {
                const p = this._chart.getDatasetMeta(c);
                if (!p) throw new Error("Cannot find a dataset at index " + c);
                return { datasetIndex: c, element: p.data[u], index: u };
              }),
              r = !(0, d.ae)(n, o),
              l = this._positionChanged(o, i);
            (r || l) &&
              ((this._active = o), (this._eventPosition = i), this.update(!0));
          }
          handleEvent(t, i) {
            const n = this.options,
              o = this._active || [];
            let r = !1,
              l = [];
            "mouseout" !== t.type &&
              ((l = this._chart.getElementsAtEventForMode(t, n.mode, n, i)),
              n.reverse && l.reverse());
            const c = this._positionChanged(l, t);
            return (
              (r = i || !(0, d.ae)(l, o) || c),
              r &&
                ((this._active = l),
                (n.enabled || n.external) &&
                  ((this._eventPosition = { x: t.x, y: t.y }),
                  this.update(!0, i))),
              r
            );
          }
          _positionChanged(t, i) {
            const { caretX: n, caretY: o, options: r } = this,
              l = On[r.position].call(this, t, i);
            return !1 !== l && (n !== l.x || o !== l.y);
          }
        }
        return (s.positioners = On), s;
      })();
      var qs = {
        id: "tooltip",
        _element: Zs,
        positioners: On,
        afterInit(s, e, t) {
          t && (s.tooltip = new Zs({ _chart: s, options: t }));
        },
        beforeUpdate(s, e, t) {
          s.tooltip && s.tooltip.initialize(t);
        },
        reset(s, e, t) {
          s.tooltip && s.tooltip.initialize(t);
        },
        afterDraw(s) {
          const e = s.tooltip,
            t = { tooltip: e };
          !1 !== s.notifyPlugins("beforeTooltipDraw", t) &&
            (e && e.draw(s.ctx), s.notifyPlugins("afterTooltipDraw", t));
        },
        afterEvent(s, e) {
          s.tooltip &&
            s.tooltip.handleEvent(e.event, e.replay) &&
            (e.changed = !0);
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (s, e) => e.bodyFont.size,
          boxWidth: (s, e) => e.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: {
            beforeTitle: d.aA,
            title(s) {
              if (s.length > 0) {
                const e = s[0],
                  t = e.chart.data.labels,
                  i = t ? t.length : 0;
                if (this && this.options && "dataset" === this.options.mode)
                  return e.dataset.label || "";
                if (e.label) return e.label;
                if (i > 0 && e.dataIndex < i) return t[e.dataIndex];
              }
              return "";
            },
            afterTitle: d.aA,
            beforeBody: d.aA,
            beforeLabel: d.aA,
            label(s) {
              if (this && this.options && "dataset" === this.options.mode)
                return s.label + ": " + s.formattedValue || s.formattedValue;
              let e = s.dataset.label || "";
              e && (e += ": ");
              const t = s.formattedValue;
              return (0, d.k)(t) || (e += t), e;
            },
            labelColor(s) {
              const t = s.chart
                .getDatasetMeta(s.datasetIndex)
                .controller.getStyle(s.dataIndex);
              return {
                borderColor: t.borderColor,
                backgroundColor: t.backgroundColor,
                borderWidth: t.borderWidth,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderRadius: 0,
              };
            },
            labelTextColor() {
              return this.options.bodyColor;
            },
            labelPointStyle(s) {
              const t = s.chart
                .getDatasetMeta(s.datasetIndex)
                .controller.getStyle(s.dataIndex);
              return { pointStyle: t.pointStyle, rotation: t.rotation };
            },
            afterLabel: d.aA,
            afterBody: d.aA,
            beforeFooter: d.aA,
            footer: d.aA,
            afterFooter: d.aA,
          },
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: (s) =>
            "filter" !== s && "itemSort" !== s && "external" !== s,
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      };
      class An extends ze {
        constructor(e) {
          super(e),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(e) {
          const t = this._addedLabels;
          if (t.length) {
            const i = this.getLabels();
            for (const { index: n, label: o } of t)
              i[n] === o && i.splice(n, 1);
            this._addedLabels = [];
          }
          super.init(e);
        }
        parse(e, t) {
          if ((0, d.k)(e)) return null;
          const i = this.getLabels();
          return ((s, e) =>
            null === s ? null : (0, d.w)(Math.round(s), 0, e))(
            (t =
              isFinite(t) && i[t] === e
                ? t
                : (function vo(s, e, t, i) {
                    const n = s.indexOf(e);
                    return -1 === n
                      ? ((s, e, t, i) => (
                          "string" == typeof e
                            ? ((t = s.push(e) - 1),
                              i.unshift({ index: t, label: e }))
                            : isNaN(e) && (t = null),
                          t
                        ))(s, e, t, i)
                      : n !== s.lastIndexOf(e)
                      ? t
                      : n;
                  })(i, e, (0, d.v)(t, e), this._addedLabels)),
            i.length - 1
          );
        }
        determineDataLimits() {
          const { minDefined: e, maxDefined: t } = this.getUserBounds();
          let { min: i, max: n } = this.getMinMax(!0);
          "ticks" === this.options.bounds &&
            (e || (i = 0), t || (n = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = n);
        }
        buildTicks() {
          const e = this.min,
            t = this.max,
            i = this.options.offset,
            n = [];
          let o = this.getLabels();
          (o = 0 === e && t === o.length - 1 ? o : o.slice(e, t + 1)),
            (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
          for (let r = e; r <= t; r++) n.push({ value: r });
          return n;
        }
        getLabelForValue(e) {
          const t = this.getLabels();
          return e >= 0 && e < t.length ? t[e] : e;
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(e) {
          return (
            "number" != typeof e && (e = this.parse(e)),
            null === e
              ? NaN
              : this.getPixelForDecimal(
                  (e - this._startValue) / this._valueRange
                )
          );
        }
        getPixelForTick(e) {
          const t = this.ticks;
          return e < 0 || e > t.length - 1
            ? null
            : this.getPixelForValue(t[e].value);
        }
        getValueForPixel(e) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function eo(s, e, { horizontal: t, minRotation: i }) {
        const n = (0, d.t)(i),
          o = (t ? Math.sin(n) : Math.cos(n)) || 0.001;
        return Math.min(e / o, 0.75 * e * ("" + s).length);
      }
      (An.id = "category"),
        (An.defaults = { ticks: { callback: An.prototype.getLabelForValue } });
      class is extends ze {
        constructor(e) {
          super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(e, t) {
          return (0, d.k)(e) ||
            (("number" == typeof e || e instanceof Number) && !isFinite(+e))
            ? null
            : +e;
        }
        handleTickRangeOptions() {
          const { beginAtZero: e } = this.options,
            { minDefined: t, maxDefined: i } = this.getUserBounds();
          let { min: n, max: o } = this;
          const r = (c) => (n = t ? n : c),
            l = (c) => (o = i ? o : c);
          if (e) {
            const c = (0, d.s)(n),
              u = (0, d.s)(o);
            c < 0 && u < 0 ? l(0) : c > 0 && u > 0 && r(0);
          }
          if (n === o) {
            let c = 1;
            (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) &&
              (c = Math.abs(0.05 * o)),
              l(o + c),
              e || r(n - c);
          }
          (this.min = n), (this.max = o);
        }
        getTickLimit() {
          const e = this.options.ticks;
          let n,
            { maxTicksLimit: t, stepSize: i } = e;
          return (
            i
              ? ((n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                n > 1e3 &&
                  (U.warn(
                    `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`
                  ),
                  (n = 1e3)))
              : ((n = this.computeTickLimit()), (t = t || 11)),
            t && (n = Math.min(t, n)),
            n
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const e = this.options,
            t = e.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const r = (function Mo(s, e) {
            const t = [],
              {
                bounds: n,
                step: o,
                min: r,
                max: l,
                precision: c,
                count: u,
                maxTicks: p,
                maxDigits: x,
                includeBounds: S,
              } = s,
              k = o || 1,
              O = p - 1,
              { min: T, max: I } = e,
              F = !(0, d.k)(r),
              H = !(0, d.k)(l),
              K = !(0, d.k)(u),
              N = (I - T) / (x + 1);
            let G,
              Q,
              nt,
              it,
              W = (0, d.aD)((I - T) / O / k) * k;
            if (W < 1e-14 && !F && !H) return [{ value: T }, { value: I }];
            (it = Math.ceil(I / W) - Math.floor(T / W)),
              it > O && (W = (0, d.aD)((it * W) / O / k) * k),
              (0, d.k)(c) ||
                ((G = Math.pow(10, c)), (W = Math.ceil(W * G) / G)),
              "ticks" === n
                ? ((Q = Math.floor(T / W) * W), (nt = Math.ceil(I / W) * W))
                : ((Q = T), (nt = I)),
              F && H && o && (0, d.aE)((l - r) / o, W / 1e3)
                ? ((it = Math.round(Math.min((l - r) / W, p))),
                  (W = (l - r) / it),
                  (Q = r),
                  (nt = l))
                : K
                ? ((Q = F ? r : Q),
                  (nt = H ? l : nt),
                  (it = u - 1),
                  (W = (nt - Q) / it))
                : ((it = (nt - Q) / W),
                  (it = (0, d.aF)(it, Math.round(it), W / 1e3)
                    ? Math.round(it)
                    : Math.ceil(it)));
            const _t = Math.max((0, d.aG)(W), (0, d.aG)(Q));
            (G = Math.pow(10, (0, d.k)(c) ? _t : c)),
              (Q = Math.round(Q * G) / G),
              (nt = Math.round(nt * G) / G);
            let ut = 0;
            for (
              F &&
              (S && Q !== r
                ? (t.push({ value: r }),
                  Q < r && ut++,
                  (0, d.aF)(Math.round((Q + ut * W) * G) / G, r, eo(r, N, s)) &&
                    ut++)
                : Q < r && ut++);
              ut < it;
              ++ut
            )
              t.push({ value: Math.round((Q + ut * W) * G) / G });
            return (
              H && S && nt !== l
                ? t.length && (0, d.aF)(t[t.length - 1].value, l, eo(l, N, s))
                  ? (t[t.length - 1].value = l)
                  : t.push({ value: l })
                : (!H || nt === l) && t.push({ value: nt }),
              t
            );
          })(
            {
              maxTicks: i,
              bounds: e.bounds,
              min: e.min,
              max: e.max,
              precision: t.precision,
              step: t.stepSize,
              count: t.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: t.minRotation || 0,
              includeBounds: !1 !== t.includeBounds,
            },
            this._range || this
          );
          return (
            "ticks" === e.bounds && (0, d.aC)(r, this, "value"),
            e.reverse
              ? (r.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            r
          );
        }
        configure() {
          const e = this.ticks;
          let t = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && e.length)) {
            const n = (i - t) / Math.max(e.length - 1, 1) / 2;
            (t -= n), (i += n);
          }
          (this._startValue = t),
            (this._endValue = i),
            (this._valueRange = i - t);
        }
        getLabelForValue(e) {
          return (0, d.o)(
            e,
            this.chart.options.locale,
            this.options.ticks.format
          );
        }
      }
      class ns extends is {
        determineDataLimits() {
          const { min: e, max: t } = this.getMinMax(!0);
          (this.min = (0, d.g)(e) ? e : 0),
            (this.max = (0, d.g)(t) ? t : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const e = this.isHorizontal(),
            t = e ? this.width : this.height,
            i = (0, d.t)(this.options.ticks.minRotation),
            n = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
            o = this._resolveTickFontOptions(0);
          return Math.ceil(t / Math.min(40, o.lineHeight / n));
        }
        getPixelForValue(e) {
          return null === e
            ? NaN
            : this.getPixelForDecimal(
                (e - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(e) {
          return (
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
          );
        }
      }
      function io(s) {
        return s / Math.pow(10, Math.floor((0, d.K)(s))) == 1;
      }
      (ns.id = "linear"),
        (ns.defaults = { ticks: { callback: E.formatters.numeric } });
      class no extends ze {
        constructor(e) {
          super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(e, t) {
          const i = is.prototype.parse.apply(this, [e, t]);
          if (0 !== i) return (0, d.g)(i) && i > 0 ? i : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: e, max: t } = this.getMinMax(!0);
          (this.min = (0, d.g)(e) ? Math.max(0, e) : null),
            (this.max = (0, d.g)(t) ? Math.max(0, t) : null),
            this.options.beginAtZero && (this._zero = !0),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: e, maxDefined: t } = this.getUserBounds();
          let i = this.min,
            n = this.max;
          const o = (c) => (i = e ? i : c),
            r = (c) => (n = t ? n : c),
            l = (c, u) => Math.pow(10, Math.floor((0, d.K)(c)) + u);
          i === n && (i <= 0 ? (o(1), r(10)) : (o(l(i, -1)), r(l(n, 1)))),
            i <= 0 && o(l(n, -1)),
            n <= 0 && r(l(i, 1)),
            this._zero &&
              this.min !== this._suggestedMin &&
              i === l(this.min, 0) &&
              o(l(i, -1)),
            (this.min = i),
            (this.max = n);
        }
        buildTicks() {
          const e = this.options,
            i = (function So(s, e) {
              const t = Math.floor((0, d.K)(e.max)),
                i = Math.ceil(e.max / Math.pow(10, t)),
                n = [];
              let o = (0, d.M)(
                  s.min,
                  Math.pow(10, Math.floor((0, d.K)(e.min)))
                ),
                r = Math.floor((0, d.K)(o)),
                l = Math.floor(o / Math.pow(10, r)),
                c = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
              do {
                n.push({ value: o, major: io(o) }),
                  ++l,
                  10 === l && ((l = 1), ++r, (c = r >= 0 ? 1 : c)),
                  (o = Math.round(l * Math.pow(10, r) * c) / c);
              } while (r < t || (r === t && l < i));
              const u = (0, d.M)(s.max, o);
              return n.push({ value: u, major: io(o) }), n;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === e.bounds && (0, d.aC)(i, this, "value"),
            e.reverse
              ? (i.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            i
          );
        }
        getLabelForValue(e) {
          return void 0 === e
            ? "0"
            : (0, d.o)(e, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const e = this.min;
          super.configure(),
            (this._startValue = (0, d.K)(e)),
            (this._valueRange = (0, d.K)(this.max) - (0, d.K)(e));
        }
        getPixelForValue(e) {
          return (
            (void 0 === e || 0 === e) && (e = this.min),
            null === e || isNaN(e)
              ? NaN
              : this.getPixelForDecimal(
                  e === this.min
                    ? 0
                    : ((0, d.K)(e) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(e) {
          const t = this.getDecimalForPixel(e);
          return Math.pow(10, this._startValue + t * this._valueRange);
        }
      }
      function Fs(s) {
        const e = s.ticks;
        if (e.display && s.display) {
          const t = (0, d.B)(e.backdropPadding);
          return (0, d.v)(e.font && e.font.size, d.d.font.size) + t.height;
        }
        return 0;
      }
      function Co(s, e, t) {
        return (
          (t = (0, d.b)(t) ? t : [t]),
          { w: (0, d.aH)(s, e.string, t), h: t.length * e.lineHeight }
        );
      }
      function so(s, e, t, i, n) {
        return s === i || s === n
          ? { start: e - t / 2, end: e + t / 2 }
          : s < i || s > n
          ? { start: e - t, end: e }
          : { start: e, end: e + t };
      }
      function Oo(s) {
        return 0 === s || 180 === s ? "center" : s < 180 ? "left" : "right";
      }
      function Do(s, e, t) {
        return "right" === t ? (s -= e) : "center" === t && (s -= e / 2), s;
      }
      function Bo(s, e, t) {
        return (
          90 === t || 270 === t
            ? (s -= e / 2)
            : (t > 270 || t < 90) && (s -= e),
          s
        );
      }
      function js(s, e, t, i) {
        const { ctx: n } = s;
        if (t) n.arc(s.xCenter, s.yCenter, e, 0, d.T);
        else {
          let o = s.getPointPosition(0, e);
          n.moveTo(o.x, o.y);
          for (let r = 1; r < i; r++)
            (o = s.getPointPosition(r, e)), n.lineTo(o.x, o.y);
        }
      }
      function ss(s) {
        return (0, d.q)(s) ? s : 0;
      }
      (no.id = "logarithmic"),
        (no.defaults = {
          ticks: { callback: E.formatters.logarithmic, major: { enabled: !0 } },
        });
      class en extends is {
        constructor(e) {
          super(e),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          (this.width = this.maxWidth),
            (this.height = this.maxHeight),
            (this.paddingTop = Fs(this.options) / 2),
            (this.xCenter = Math.floor(this.width / 2)),
            (this.yCenter = Math.floor((this.height - this.paddingTop) / 2)),
            (this.drawingArea =
              Math.min(this.height - this.paddingTop, this.width) / 2);
        }
        determineDataLimits() {
          const { min: e, max: t } = this.getMinMax(!1);
          (this.min = (0, d.g)(e) && !isNaN(e) ? e : 0),
            (this.max = (0, d.g)(t) && !isNaN(t) ? t : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / Fs(this.options));
        }
        generateTickLabels(e) {
          is.prototype.generateTickLabels.call(this, e),
            (this._pointLabels = this.getLabels().map((t, i) => {
              const n = (0, d.N)(
                this.options.pointLabels.callback,
                [t, i],
                this
              );
              return n || 0 === n ? n : "";
            }));
        }
        fit() {
          const e = this.options;
          e.display && e.pointLabels.display
            ? (function ko(s) {
                const e = {
                    l: 0,
                    r: s.width,
                    t: 0,
                    b: s.height - s.paddingTop,
                  },
                  t = {},
                  i = [],
                  n = [],
                  o = s.getLabels().length;
                for (let r = 0; r < o; r++) {
                  const l = s.options.pointLabels.setContext(
                    s.getPointLabelContext(r)
                  );
                  n[r] = l.padding;
                  const c = s.getPointPosition(r, s.drawingArea + n[r]),
                    u = (0, d.Y)(l.font),
                    p = Co(s.ctx, u, s._pointLabels[r]);
                  i[r] = p;
                  const x = s.getIndexAngle(r),
                    S = (0, d.Q)(x),
                    k = so(S, c.x, p.w, 0, 180),
                    O = so(S, c.y, p.h, 90, 270);
                  k.start < e.l && ((e.l = k.start), (t.l = x)),
                    k.end > e.r && ((e.r = k.end), (t.r = x)),
                    O.start < e.t && ((e.t = O.start), (t.t = x)),
                    O.end > e.b && ((e.b = O.end), (t.b = x));
                }
                s._setReductions(s.drawingArea, e, t),
                  (s._pointLabelItems = (function Po(s, e, t) {
                    const i = [],
                      n = s.getLabels().length,
                      o = s.options,
                      r = Fs(o),
                      l = s.getDistanceFromCenterForValue(
                        o.ticks.reverse ? s.min : s.max
                      );
                    for (let c = 0; c < n; c++) {
                      const p = s.getPointPosition(
                          c,
                          l + (0 === c ? r / 2 : 0) + t[c]
                        ),
                        x = (0, d.Q)(s.getIndexAngle(c)),
                        S = e[c],
                        k = Bo(p.y, S.h, x),
                        O = Oo(x),
                        T = Do(p.x, S.w, O);
                      i.push({
                        x: p.x,
                        y: k,
                        textAlign: O,
                        left: T,
                        top: k,
                        right: T + S.w,
                        bottom: k + S.h,
                      });
                    }
                    return i;
                  })(s, i, n));
              })(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        _setReductions(e, t, i) {
          let n = t.l / Math.sin(i.l),
            o = Math.max(t.r - this.width, 0) / Math.sin(i.r),
            r = -t.t / Math.cos(i.t),
            l =
              -Math.max(t.b - (this.height - this.paddingTop), 0) /
              Math.cos(i.b);
          (n = ss(n)),
            (o = ss(o)),
            (r = ss(r)),
            (l = ss(l)),
            (this.drawingArea = Math.max(
              e / 2,
              Math.min(Math.floor(e - (n + o) / 2), Math.floor(e - (r + l) / 2))
            )),
            this.setCenterPoint(n, o, r, l);
        }
        setCenterPoint(e, t, i, n) {
          const l = i + this.drawingArea,
            c = this.height - this.paddingTop - n - this.drawingArea;
          (this.xCenter = Math.floor(
            (e + this.drawingArea + (this.width - t - this.drawingArea)) / 2 +
              this.left
          )),
            (this.yCenter = Math.floor(
              (l + c) / 2 + this.top + this.paddingTop
            ));
        }
        getIndexAngle(e) {
          const t = d.T / this.getLabels().length;
          return (0, d.av)(e * t + (0, d.t)(this.options.startAngle || 0));
        }
        getDistanceFromCenterForValue(e) {
          if ((0, d.k)(e)) return NaN;
          const t = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - e) * t : (e - this.min) * t;
        }
        getValueForDistanceFromCenter(e) {
          if ((0, d.k)(e)) return NaN;
          const t = e / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - t : this.min + t;
        }
        getPointLabelContext(e) {
          const t = this._pointLabels || [];
          if (e >= 0 && e < t.length) {
            const i = t[e];
            return (function Eo(s, e, t) {
              return (0, d.h)(s, { label: t, index: e, type: "pointLabel" });
            })(this.getContext(), e, i);
          }
        }
        getPointPosition(e, t) {
          const i = this.getIndexAngle(e) - d.H;
          return {
            x: Math.cos(i) * t + this.xCenter,
            y: Math.sin(i) * t + this.yCenter,
            angle: i,
          };
        }
        getPointPositionForValue(e, t) {
          return this.getPointPosition(
            e,
            this.getDistanceFromCenterForValue(t)
          );
        }
        getBasePosition(e) {
          return this.getPointPositionForValue(e || 0, this.getBaseValue());
        }
        getPointLabelPosition(e) {
          const {
            left: t,
            top: i,
            right: n,
            bottom: o,
          } = this._pointLabelItems[e];
          return { left: t, top: i, right: n, bottom: o };
        }
        drawBackground() {
          const {
            backgroundColor: e,
            grid: { circular: t },
          } = this.options;
          if (e) {
            const i = this.ctx;
            i.save(),
              i.beginPath(),
              js(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                t,
                this.getLabels().length
              ),
              i.closePath(),
              (i.fillStyle = e),
              i.fill(),
              i.restore();
          }
        }
        drawGrid() {
          const e = this.ctx,
            t = this.options,
            { angleLines: i, grid: n } = t,
            o = this.getLabels().length;
          let r, l, c;
          if (
            (t.pointLabels.display &&
              (function Ao(s, e) {
                const {
                  ctx: t,
                  options: { pointLabels: i },
                } = s;
                for (let n = e - 1; n >= 0; n--) {
                  const o = i.setContext(s.getPointLabelContext(n)),
                    r = (0, d.Y)(o.font),
                    {
                      x: l,
                      y: c,
                      textAlign: u,
                      left: p,
                      top: x,
                      right: S,
                      bottom: k,
                    } = s._pointLabelItems[n],
                    { backdropColor: O } = o;
                  if (!(0, d.k)(O)) {
                    const T = (0, d.B)(o.backdropPadding);
                    (t.fillStyle = O),
                      t.fillRect(
                        p - T.left,
                        x - T.top,
                        S - p + T.width,
                        k - x + T.height
                      );
                  }
                  (0, d.W)(t, s._pointLabels[n], l, c + r.lineHeight / 2, r, {
                    color: o.color,
                    textAlign: u,
                    textBaseline: "middle",
                  });
                }
              })(this, o),
            n.display &&
              this.ticks.forEach((u, p) => {
                0 !== p &&
                  ((l = this.getDistanceFromCenterForValue(u.value)),
                  (function To(s, e, t, i) {
                    const n = s.ctx,
                      o = e.circular,
                      { color: r, lineWidth: l } = e;
                    (!o && !i) ||
                      !r ||
                      !l ||
                      t < 0 ||
                      (n.save(),
                      (n.strokeStyle = r),
                      (n.lineWidth = l),
                      n.setLineDash(e.borderDash),
                      (n.lineDashOffset = e.borderDashOffset),
                      n.beginPath(),
                      js(s, t, o, i),
                      n.closePath(),
                      n.stroke(),
                      n.restore());
                  })(this, n.setContext(this.getContext(p - 1)), l, o));
              }),
            i.display)
          ) {
            for (e.save(), r = this.getLabels().length - 1; r >= 0; r--) {
              const u = i.setContext(this.getPointLabelContext(r)),
                { color: p, lineWidth: x } = u;
              !x ||
                !p ||
                ((e.lineWidth = x),
                (e.strokeStyle = p),
                e.setLineDash(u.borderDash),
                (e.lineDashOffset = u.borderDashOffset),
                (l = this.getDistanceFromCenterForValue(
                  t.ticks.reverse ? this.min : this.max
                )),
                (c = this.getPointPosition(r, l)),
                e.beginPath(),
                e.moveTo(this.xCenter, this.yCenter),
                e.lineTo(c.x, c.y),
                e.stroke());
            }
            e.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const e = this.ctx,
            t = this.options,
            i = t.ticks;
          if (!i.display) return;
          const n = this.getIndexAngle(0);
          let o, r;
          e.save(),
            e.translate(this.xCenter, this.yCenter),
            e.rotate(n),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"),
            this.ticks.forEach((l, c) => {
              if (0 === c && !t.reverse) return;
              const u = i.setContext(this.getContext(c)),
                p = (0, d.Y)(u.font);
              if (
                ((o = this.getDistanceFromCenterForValue(this.ticks[c].value)),
                u.showLabelBackdrop)
              ) {
                (e.font = p.string),
                  (r = e.measureText(l.label).width),
                  (e.fillStyle = u.backdropColor);
                const x = (0, d.B)(u.backdropPadding);
                e.fillRect(
                  -r / 2 - x.left,
                  -o - p.size / 2 - x.top,
                  r + x.width,
                  p.size + x.height
                );
              }
              (0, d.W)(e, l.label, 0, -o, p, { color: u.color });
            }),
            e.restore();
        }
        drawTitle() {}
      }
      (en.id = "radialLinear"),
        (en.defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: E.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (s) => s,
            padding: 5,
          },
        }),
        (en.defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (en.descriptors = { angleLines: { _fallback: "grid" } });
      const os = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        mt = Object.keys(os);
      function zs(s, e) {
        return s - e;
      }
      function oo(s, e) {
        if ((0, d.k)(e)) return null;
        const t = s._adapter,
          { parser: i, round: n, isoWeekday: o } = s._parseOpts;
        let r = e;
        return (
          "function" == typeof i && (r = i(r)),
          (0, d.g)(r) ||
            (r = "string" == typeof i ? t.parse(r, i) : t.parse(r)),
          null === r
            ? null
            : (n &&
                (r =
                  "week" !== n || (!(0, d.q)(o) && !0 !== o)
                    ? t.startOf(r, n)
                    : t.startOf(r, "isoWeek", o)),
              +r)
        );
      }
      function Jt(s, e, t, i) {
        const n = mt.length;
        for (let o = mt.indexOf(s); o < n - 1; ++o) {
          const r = os[mt[o]],
            l = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
          if (r.common && Math.ceil((t - e) / (l * r.size)) <= i) return mt[o];
        }
        return mt[n - 1];
      }
      function y(s, e, t) {
        if (t) {
          if (t.length) {
            const { lo: i, hi: n } = (0, d.aJ)(t, e);
            s[t[i] >= e ? t[i] : t[n]] = !0;
          }
        } else s[e] = !0;
      }
      function A(s, e, t) {
        const i = [],
          n = {},
          o = e.length;
        let r, l;
        for (r = 0; r < o; ++r)
          (l = e[r]), (n[l] = r), i.push({ value: l, major: !1 });
        return 0 !== o && t
          ? (function D(s, e, t, i) {
              const n = s._adapter,
                o = +n.startOf(e[0].value, i),
                r = e[e.length - 1].value;
              let l, c;
              for (l = o; l <= r; l = +n.add(l, 1, i))
                (c = t[l]), c >= 0 && (e[c].major = !0);
              return e;
            })(s, i, n, t)
          : i;
      }
      let Y = (() => {
        class s extends ze {
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = "day"),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0);
          }
          init(t, i) {
            const n = t.time || (t.time = {}),
              o = (this._adapter = new Ci._date(t.adapters.date));
            (0, d.a8)(n.displayFormats, o.formats()),
              (this._parseOpts = {
                parser: n.parser,
                round: n.round,
                isoWeekday: n.isoWeekday,
              }),
              super.init(t),
              (this._normalized = i.normalized);
          }
          parse(t, i) {
            return void 0 === t ? null : oo(this, t);
          }
          beforeLayout() {
            super.beforeLayout(),
              (this._cache = { data: [], labels: [], all: [] });
          }
          determineDataLimits() {
            const t = this.options,
              i = this._adapter,
              n = t.time.unit || "day";
            let {
              min: o,
              max: r,
              minDefined: l,
              maxDefined: c,
            } = this.getUserBounds();
            function u(p) {
              !l && !isNaN(p.min) && (o = Math.min(o, p.min)),
                !c && !isNaN(p.max) && (r = Math.max(r, p.max));
            }
            (!l || !c) &&
              (u(this._getLabelBounds()),
              ("ticks" !== t.bounds || "labels" !== t.ticks.source) &&
                u(this.getMinMax(!1))),
              (o = (0, d.g)(o) && !isNaN(o) ? o : +i.startOf(Date.now(), n)),
              (r = (0, d.g)(r) && !isNaN(r) ? r : +i.endOf(Date.now(), n) + 1),
              (this.min = Math.min(o, r - 1)),
              (this.max = Math.max(o + 1, r));
          }
          _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let i = Number.POSITIVE_INFINITY,
              n = Number.NEGATIVE_INFINITY;
            return (
              t.length && ((i = t[0]), (n = t[t.length - 1])),
              { min: i, max: n }
            );
          }
          buildTicks() {
            const t = this.options,
              i = t.time,
              n = t.ticks,
              o =
                "labels" === n.source
                  ? this.getLabelTimestamps()
                  : this._generate();
            "ticks" === t.bounds &&
              o.length &&
              ((this.min = this._userMin || o[0]),
              (this.max = this._userMax || o[o.length - 1]));
            const r = this.min,
              c = (0, d.aI)(o, r, this.max);
            return (
              (this._unit =
                i.unit ||
                (n.autoSkip
                  ? Jt(i.minUnit, this.min, this.max, this._getLabelCapacity(r))
                  : (function Lo(s, e, t, i, n) {
                      for (let o = mt.length - 1; o >= mt.indexOf(t); o--) {
                        const r = mt[o];
                        if (os[r].common && s._adapter.diff(n, i, r) >= e - 1)
                          return r;
                      }
                      return mt[t ? mt.indexOf(t) : 0];
                    })(this, c.length, i.minUnit, this.min, this.max))),
              (this._majorUnit =
                n.major.enabled && "year" !== this._unit
                  ? (function ro(s) {
                      for (let e = mt.indexOf(s) + 1, t = mt.length; e < t; ++e)
                        if (os[mt[e]].common) return mt[e];
                    })(this._unit)
                  : void 0),
              this.initOffsets(o),
              t.reverse && c.reverse(),
              A(this, c, this._majorUnit)
            );
          }
          initOffsets(t) {
            let o,
              r,
              i = 0,
              n = 0;
            this.options.offset &&
              t.length &&
              ((o = this.getDecimalForValue(t[0])),
              (i =
                1 === t.length
                  ? 1 - o
                  : (this.getDecimalForValue(t[1]) - o) / 2),
              (r = this.getDecimalForValue(t[t.length - 1])),
              (n =
                1 === t.length
                  ? r
                  : (r - this.getDecimalForValue(t[t.length - 2])) / 2));
            const l = t.length < 3 ? 0.5 : 0.25;
            (i = (0, d.w)(i, 0, l)),
              (n = (0, d.w)(n, 0, l)),
              (this._offsets = { start: i, end: n, factor: 1 / (i + 1 + n) });
          }
          _generate() {
            const t = this._adapter,
              i = this.min,
              n = this.max,
              o = this.options,
              r = o.time,
              l = r.unit || Jt(r.minUnit, i, n, this._getLabelCapacity(i)),
              c = (0, d.v)(r.stepSize, 1),
              u = "week" === l && r.isoWeekday,
              p = (0, d.q)(u) || !0 === u,
              x = {};
            let k,
              O,
              S = i;
            if (
              (p && (S = +t.startOf(S, "isoWeek", u)),
              (S = +t.startOf(S, p ? "day" : l)),
              t.diff(n, i, l) > 1e5 * c)
            )
              throw new Error(
                i +
                  " and " +
                  n +
                  " are too far apart with stepSize of " +
                  c +
                  " " +
                  l
              );
            const T = "data" === o.ticks.source && this.getDataTimestamps();
            for (k = S, O = 0; k < n; k = +t.add(k, c, l), O++) y(x, k, T);
            return (
              (k === n || "ticks" === o.bounds || 1 === O) && y(x, k, T),
              Object.keys(x)
                .sort((I, F) => I - F)
                .map((I) => +I)
            );
          }
          getLabelForValue(t) {
            const n = this.options.time;
            return this._adapter.format(
              t,
              n.tooltipFormat ? n.tooltipFormat : n.displayFormats.datetime
            );
          }
          _tickFormatFunction(t, i, n, o) {
            const r = this.options,
              l = r.time.displayFormats,
              c = this._unit,
              u = this._majorUnit,
              x = u && l[u],
              S = n[i],
              O = this._adapter.format(
                t,
                o || (u && x && S && S.major ? x : c && l[c])
              ),
              T = r.ticks.callback;
            return T ? (0, d.N)(T, [O, i, n], this) : O;
          }
          generateTickLabels(t) {
            let i, n, o;
            for (i = 0, n = t.length; i < n; ++i)
              (o = t[i]), (o.label = this._tickFormatFunction(o.value, i, t));
          }
          getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min);
          }
          getPixelForValue(t) {
            const i = this._offsets,
              n = this.getDecimalForValue(t);
            return this.getPixelForDecimal((i.start + n) * i.factor);
          }
          getValueForPixel(t) {
            const i = this._offsets,
              n = this.getDecimalForPixel(t) / i.factor - i.end;
            return this.min + n * (this.max - this.min);
          }
          _getLabelSize(t) {
            const i = this.options.ticks,
              n = this.ctx.measureText(t).width,
              o = (0, d.t)(this.isHorizontal() ? i.maxRotation : i.minRotation),
              r = Math.cos(o),
              l = Math.sin(o),
              c = this._resolveTickFontOptions(0).size;
            return { w: n * r + c * l, h: n * l + c * r };
          }
          _getLabelCapacity(t) {
            const i = this.options.time,
              n = i.displayFormats,
              o = n[i.unit] || n.millisecond,
              r = this._tickFormatFunction(
                t,
                0,
                A(this, [t], this._majorUnit),
                o
              ),
              l = this._getLabelSize(r),
              c =
                Math.floor(
                  this.isHorizontal() ? this.width / l.w : this.height / l.h
                ) - 1;
            return c > 0 ? c : 1;
          }
          getDataTimestamps() {
            let i,
              n,
              t = this._cache.data || [];
            if (t.length) return t;
            const o = this.getMatchingVisibleMetas();
            if (this._normalized && o.length)
              return (this._cache.data =
                o[0].controller.getAllParsedValues(this));
            for (i = 0, n = o.length; i < n; ++i)
              t = t.concat(o[i].controller.getAllParsedValues(this));
            return (this._cache.data = this.normalize(t));
          }
          getLabelTimestamps() {
            const t = this._cache.labels || [];
            let i, n;
            if (t.length) return t;
            const o = this.getLabels();
            for (i = 0, n = o.length; i < n; ++i) t.push(oo(this, o[i]));
            return (this._cache.labels = this._normalized
              ? t
              : this.normalize(t));
          }
          normalize(t) {
            return (0, d._)(t.sort(zs));
          }
        }
        return (
          (s.id = "time"),
          (s.defaults = {
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { source: "auto", major: { enabled: !1 } },
          }),
          s
        );
      })();
      function st(s, e, t) {
        let o,
          r,
          l,
          c,
          i = 0,
          n = s.length - 1;
        t
          ? (e >= s[i].pos &&
              e <= s[n].pos &&
              ({ lo: i, hi: n } = (0, d.x)(s, "pos", e)),
            ({ pos: o, time: l } = s[i]),
            ({ pos: r, time: c } = s[n]))
          : (e >= s[i].time &&
              e <= s[n].time &&
              ({ lo: i, hi: n } = (0, d.x)(s, "time", e)),
            ({ time: o, pos: l } = s[i]),
            ({ time: r, pos: c } = s[n]));
        const u = r - o;
        return u ? l + ((c - l) * (e - o)) / u : l;
      }
      class rt extends Y {
        constructor(e) {
          super(e),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          const e = this._getTimestampsForTable(),
            t = (this._table = this.buildLookupTable(e));
          (this._minPos = st(t, this.min)),
            (this._tableRange = st(t, this.max) - this._minPos),
            super.initOffsets(e);
        }
        buildLookupTable(e) {
          const { min: t, max: i } = this,
            n = [],
            o = [];
          let r, l, c, u, p;
          for (r = 0, l = e.length; r < l; ++r)
            (u = e[r]), u >= t && u <= i && n.push(u);
          if (n.length < 2)
            return [
              { time: t, pos: 0 },
              { time: i, pos: 1 },
            ];
          for (r = 0, l = n.length; r < l; ++r)
            (p = n[r + 1]),
              (c = n[r - 1]),
              (u = n[r]),
              Math.round((p + c) / 2) !== u &&
                o.push({ time: u, pos: r / (l - 1) });
          return o;
        }
        _getTimestampsForTable() {
          let e = this._cache.all || [];
          if (e.length) return e;
          const t = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return (
            (e =
              t.length && i.length
                ? this.normalize(t.concat(i))
                : t.length
                ? t
                : i),
            (e = this._cache.all = e),
            e
          );
        }
        getDecimalForValue(e) {
          return (st(this._table, e) - this._minPos) / this._tableRange;
        }
        getValueForPixel(e) {
          const t = this._offsets,
            i = this.getDecimalForPixel(e) / t.factor - t.end;
          return st(this._table, i * this._tableRange + this._minPos, !0);
        }
      }
      (rt.id = "timeseries"), (rt.defaults = Y.defaults);
    },
    43: (ee, Mt, q) => {
      q.d(Mt, {
        $: () => Qt,
        A: () => un,
        B: () => hs,
        C: () => ae,
        D: () => vs,
        E: () => yn,
        F: () => Ss,
        G: () => Pt,
        H: () => at,
        I: () => Ms,
        J: () => bs,
        K: () => Vt,
        L: () => ai,
        M: () => Tt,
        N: () => wi,
        O: () => Ln,
        P: () => ot,
        Q: () => nn,
        R: () => $,
        S: () => ji,
        T: () => gt,
        U: () => et,
        V: () => vt,
        W: () => Ai,
        X: () => Lt,
        Y: () => Pe,
        Z: () => ie,
        _: () => gs,
        a: () => ds,
        a0: () => g,
        a1: () => le,
        a2: () => Nt,
        a3: () => _,
        a4: () => xt,
        a5: () => Ei,
        a6: () => Ki,
        a7: () => Fn,
        a8: () => ve,
        a9: () => yt,
        aA: () => ne,
        aB: () => Te,
        aC: () => Ce,
        aD: () => Se,
        aE: () => $e,
        aF: () => Ae,
        aG: () => Fi,
        aH: () => X,
        aI: () => fs,
        aJ: () => dn,
        aX: () => Dt,
        aa: () => zt,
        ab: () => ws,
        ac: () => tt,
        ad: () => se,
        ae: () => ye,
        af: () => li,
        ag: () => Ci,
        ah: () => cn,
        ai: () => xn,
        aj: () => Es,
        ak: () => Ts,
        al: () => $n,
        am: () => Un,
        an: () => de,
        ao: () => gi,
        ap: () => pi,
        aq: () => lt,
        ar: () => Ys,
        as: () => hn,
        at: () => En,
        au: () => Xn,
        av: () => Ft,
        aw: () => Cn,
        ax: () => Os,
        ay: () => xe,
        az: () => Ds,
        b: () => Ct,
        c: () => ln,
        d: () => R,
        e: () => Ue,
        f: () => Me,
        g: () => De,
        h: () => Rn,
        i: () => Ot,
        j: () => It,
        k: () => Ut,
        l: () => Bn,
        m: () => si,
        n: () => Ye,
        o: () => Cs,
        p: () => Ee,
        q: () => pe,
        r: () => $t,
        s: () => Bt,
        t: () => ce,
        u: () => fn,
        v: () => Zt,
        w: () => qt,
        x: () => us,
        y: () => ys,
        z: () => pt,
      });
      var d = q(83140);
      const $t =
        "undefined" == typeof window
          ? function (a) {
              return a();
            }
          : window.requestAnimationFrame;
      function Pt(a, h, f) {
        const b = f || ((C) => Array.prototype.slice.call(C));
        let v = !1,
          M = [];
        return function (...C) {
          (M = b(C)),
            v ||
              ((v = !0),
              $t.call(window, () => {
                (v = !1), a.apply(h, M);
              }));
        };
      }
      function zt(a, h) {
        let f;
        return function (...b) {
          return (
            h ? (clearTimeout(f), (f = setTimeout(a, h, b))) : a.apply(this, b),
            h
          );
        };
      }
      const ie = (a) =>
          "start" === a ? "left" : "end" === a ? "right" : "center",
        Qt = (a, h, f) => ("start" === a ? h : "end" === a ? f : (h + f) / 2),
        xe = (a, h, f, b) =>
          a === (b ? "left" : "right") ? f : "center" === a ? (h + f) / 2 : h;
      function ne() {}
      const yt = (function () {
        let a = 0;
        return function () {
          return a++;
        };
      })();
      function Ut(a) {
        return null == a;
      }
      function Ct(a) {
        if (Array.isArray && Array.isArray(a)) return !0;
        const h = Object.prototype.toString.call(a);
        return "[object" === h.substr(0, 7) && "Array]" === h.substr(-6);
      }
      function Ot(a) {
        return (
          null !== a && "[object Object]" === Object.prototype.toString.call(a)
        );
      }
      const De = (a) =>
        ("number" == typeof a || a instanceof Number) && isFinite(+a);
      function Tt(a, h) {
        return De(a) ? a : h;
      }
      function Zt(a, h) {
        return void 0 === a ? h : a;
      }
      const si = (a, h) =>
          "string" == typeof a && a.endsWith("%") ? parseFloat(a) / 100 : a / h,
        Ye = (a, h) =>
          "string" == typeof a && a.endsWith("%")
            ? (parseFloat(a) / 100) * h
            : +a;
      function wi(a, h, f) {
        if (a && "function" == typeof a.call) return a.apply(f, h);
      }
      function ae(a, h, f, b) {
        let v, M, C;
        if (Ct(a))
          if (((M = a.length), b))
            for (v = M - 1; v >= 0; v--) h.call(f, a[v], v);
          else for (v = 0; v < M; v++) h.call(f, a[v], v);
        else if (Ot(a))
          for (C = Object.keys(a), M = C.length, v = 0; v < M; v++)
            h.call(f, a[C[v]], C[v]);
      }
      function ye(a, h) {
        let f, b, v, M;
        if (!a || !h || a.length !== h.length) return !1;
        for (f = 0, b = a.length; f < b; ++f)
          if (
            ((v = a[f]),
            (M = h[f]),
            v.datasetIndex !== M.datasetIndex || v.index !== M.index)
          )
            return !1;
        return !0;
      }
      function fe(a) {
        if (Ct(a)) return a.map(fe);
        if (Ot(a)) {
          const h = Object.create(null),
            f = Object.keys(a),
            b = f.length;
          let v = 0;
          for (; v < b; ++v) h[f[v]] = fe(a[f[v]]);
          return h;
        }
        return a;
      }
      function oi(a) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(a);
      }
      function ri(a, h, f, b) {
        if (!oi(a)) return;
        const v = h[a],
          M = f[a];
        Ot(v) && Ot(M) ? le(v, M, b) : (h[a] = fe(M));
      }
      function le(a, h, f) {
        const b = Ct(h) ? h : [h],
          v = b.length;
        if (!Ot(a)) return a;
        const M = (f = f || {}).merger || ri;
        for (let C = 0; C < v; ++C) {
          if (!Ot((h = b[C]))) continue;
          const L = Object.keys(h);
          for (let j = 0, z = L.length; j < z; ++j) M(L[j], a, h, f);
        }
        return a;
      }
      function ve(a, h) {
        return le(a, h, { merger: Mi });
      }
      function Mi(a, h, f) {
        if (!oi(a)) return;
        const b = h[a],
          v = f[a];
        Ot(b) && Ot(v)
          ? ve(b, v)
          : Object.prototype.hasOwnProperty.call(h, a) || (h[a] = fe(v));
      }
      function Rt(a, h) {
        const f = a.indexOf(".", h);
        return -1 === f ? a.length : f;
      }
      function Me(a, h) {
        if ("" === h) return a;
        let f = 0,
          b = Rt(h, f);
        for (; a && b > f; )
          (a = a[h.substr(f, b - f)]), (f = b + 1), (b = Rt(h, f));
        return a;
      }
      function Nt(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }
      const It = (a) => void 0 !== a,
        xt = (a) => "function" == typeof a,
        se = (a, h) => {
          if (a.size !== h.size) return !1;
          for (const f of a) if (!h.has(f)) return !1;
          return !0;
        },
        ot = Math.PI,
        gt = 2 * ot,
        bt = gt + ot,
        dt = Number.POSITIVE_INFINITY,
        Dt = ot / 180,
        at = ot / 2,
        Et = ot / 4,
        jt = (2 * ot) / 3,
        Vt = Math.log10,
        Bt = Math.sign;
      function Se(a) {
        const h = Math.round(a);
        a = Ae(a, h, a / 1e3) ? h : a;
        const f = Math.pow(10, Math.floor(Vt(a))),
          b = a / f;
        return (b <= 1 ? 1 : b <= 2 ? 2 : b <= 5 ? 5 : 10) * f;
      }
      function ai(a) {
        const h = [],
          f = Math.sqrt(a);
        let b;
        for (b = 1; b < f; b++) a % b == 0 && (h.push(b), h.push(a / b));
        return f === (0 | f) && h.push(f), h.sort((v, M) => v - M).pop(), h;
      }
      function pe(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      }
      function Ae(a, h, f) {
        return Math.abs(a - h) < f;
      }
      function $e(a, h) {
        const f = Math.round(a);
        return f - h <= a && f + h >= a;
      }
      function Ce(a, h, f) {
        let b, v, M;
        for (b = 0, v = a.length; b < v; b++)
          (M = a[b][f]),
            isNaN(M) ||
              ((h.min = Math.min(h.min, M)), (h.max = Math.max(h.max, M)));
      }
      function ce(a) {
        return a * (ot / 180);
      }
      function nn(a) {
        return a * (180 / ot);
      }
      function Fi(a) {
        if (!De(a)) return;
        let h = 1,
          f = 0;
        for (; Math.round(a * h) / h !== a; ) (h *= 10), f++;
        return f;
      }
      function li(a, h) {
        const f = h.x - a.x,
          b = h.y - a.y,
          v = Math.sqrt(f * f + b * b);
        let M = Math.atan2(b, f);
        return M < -0.5 * ot && (M += gt), { angle: M, distance: v };
      }
      function Te(a, h) {
        return Math.sqrt(Math.pow(h.x - a.x, 2) + Math.pow(h.y - a.y, 2));
      }
      function Si(a, h) {
        return ((a - h + bt) % gt) - ot;
      }
      function Ft(a) {
        return ((a % gt) + gt) % gt;
      }
      function Ee(a, h, f, b) {
        const v = Ft(a),
          M = Ft(h),
          C = Ft(f),
          L = Ft(M - v),
          j = Ft(C - v),
          z = Ft(v - M),
          V = Ft(v - C);
        return v === M || v === C || (b && M === C) || (L > j && z < V);
      }
      function qt(a, h, f) {
        return Math.max(h, Math.min(f, a));
      }
      function ji(a) {
        return qt(a, -32768, 32767);
      }
      function Ci(a, h, f, b = 1e-6) {
        return a >= Math.min(h, f) - b && a <= Math.max(h, f) + b;
      }
      const te = (a) => 0 === a || 1 === a,
        ki = (a, h, f) =>
          -Math.pow(2, 10 * (a -= 1)) * Math.sin(((a - h) * gt) / f),
        zi = (a, h, f) =>
          Math.pow(2, -10 * a) * Math.sin(((a - h) * gt) / f) + 1,
        Ue = {
          linear: (a) => a,
          easeInQuad: (a) => a * a,
          easeOutQuad: (a) => -a * (a - 2),
          easeInOutQuad: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1),
          easeInCubic: (a) => a * a * a,
          easeOutCubic: (a) => (a -= 1) * a * a + 1,
          easeInOutCubic: (a) =>
            (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2),
          easeInQuart: (a) => a * a * a * a,
          easeOutQuart: (a) => -((a -= 1) * a * a * a - 1),
          easeInOutQuart: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a
              : -0.5 * ((a -= 2) * a * a * a - 2),
          easeInQuint: (a) => a * a * a * a * a,
          easeOutQuint: (a) => (a -= 1) * a * a * a * a + 1,
          easeInOutQuint: (a) =>
            (a /= 0.5) < 1
              ? 0.5 * a * a * a * a * a
              : 0.5 * ((a -= 2) * a * a * a * a + 2),
          easeInSine: (a) => 1 - Math.cos(a * at),
          easeOutSine: (a) => Math.sin(a * at),
          easeInOutSine: (a) => -0.5 * (Math.cos(ot * a) - 1),
          easeInExpo: (a) => (0 === a ? 0 : Math.pow(2, 10 * (a - 1))),
          easeOutExpo: (a) => (1 === a ? 1 : 1 - Math.pow(2, -10 * a)),
          easeInOutExpo: (a) =>
            te(a)
              ? a
              : a < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * a - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * a - 1))),
          easeInCirc: (a) => (a >= 1 ? a : -(Math.sqrt(1 - a * a) - 1)),
          easeOutCirc: (a) => Math.sqrt(1 - (a -= 1) * a),
          easeInOutCirc: (a) =>
            (a /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - a * a) - 1)
              : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1),
          easeInElastic: (a) => (te(a) ? a : ki(a, 0.075, 0.3)),
          easeOutElastic: (a) => (te(a) ? a : zi(a, 0.075, 0.3)),
          easeInOutElastic: (a) =>
            te(a)
              ? a
              : a < 0.5
              ? 0.5 * ki(2 * a, 0.1125, 0.45)
              : 0.5 + 0.5 * zi(2 * a - 1, 0.1125, 0.45),
          easeInBack: (a) => a * a * (2.70158 * a - 1.70158),
          easeOutBack: (a) => (a -= 1) * a * (2.70158 * a + 1.70158) + 1,
          easeInOutBack(a) {
            let h = 1.70158;
            return (a /= 0.5) < 1
              ? a * a * ((1 + (h *= 1.525)) * a - h) * 0.5
              : 0.5 * ((a -= 2) * a * ((1 + (h *= 1.525)) * a + h) + 2);
          },
          easeInBounce: (a) => 1 - Ue.easeOutBounce(1 - a),
          easeOutBounce: (a) =>
            a < 1 / 2.75
              ? 7.5625 * a * a
              : a < 2 / 2.75
              ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
              : a < 2.5 / 2.75
              ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
              : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375,
          easeInOutBounce: (a) =>
            a < 0.5
              ? 0.5 * Ue.easeInBounce(2 * a)
              : 0.5 * Ue.easeOutBounce(2 * a - 1) + 0.5,
        },
        Xt = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        Xe = "0123456789ABCDEF",
        Pi = (a) => Xe[15 & a],
        Wi = (a) => Xe[(240 & a) >> 4] + Xe[15 & a],
        Ke = (a) => (240 & a) >> 4 == (15 & a);
      function oe(a) {
        return (a + 0.5) | 0;
      }
      const Ge = (a, h, f) => Math.max(Math.min(a, f), h);
      function me(a) {
        return Ge(oe(2.55 * a), 0, 255);
      }
      function Je(a) {
        return Ge(oe(255 * a), 0, 255);
      }
      function Re(a) {
        return Ge(oe(a / 2.55) / 100, 0, 1);
      }
      function Qe(a) {
        return Ge(oe(100 * a), 0, 100);
      }
      const Oi =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        Ze =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Ie(a, h, f) {
        const b = h * Math.min(f, 1 - f),
          v = (M, C = (M + a / 30) % 12) =>
            f - b * Math.max(Math.min(C - 3, 9 - C, 1), -1);
        return [v(0), v(8), v(4)];
      }
      function ci(a, h, f) {
        const b = (v, M = (v + a / 60) % 6) =>
          f - f * h * Math.max(Math.min(M, 4 - M, 1), 0);
        return [b(5), b(3), b(1)];
      }
      function Yi(a, h, f) {
        const b = Ie(a, 1, 0.5);
        let v;
        for (
          h + f > 1 && ((v = 1 / (h + f)), (h *= v), (f *= v)), v = 0;
          v < 3;
          v++
        )
          (b[v] *= 1 - h - f), (b[v] += h);
        return b;
      }
      function At(a) {
        const f = a.r / 255,
          b = a.g / 255,
          v = a.b / 255,
          M = Math.max(f, b, v),
          C = Math.min(f, b, v),
          L = (M + C) / 2;
        let j, z, V;
        return (
          M !== C &&
            ((V = M - C),
            (z = L > 0.5 ? V / (2 - M - C) : V / (M + C)),
            (j =
              M === f
                ? (b - v) / V + (b < v ? 6 : 0)
                : M === b
                ? (v - f) / V + 2
                : (f - b) / V + 4),
            (j = 60 * j + 0.5)),
          [0 | j, z || 0, L]
        );
      }
      function ke(a, h, f, b) {
        return (Array.isArray(h) ? a(h[0], h[1], h[2]) : a(h, f, b)).map(Je);
      }
      function Be(a, h, f) {
        return ke(Ie, a, h, f);
      }
      function Di(a) {
        return ((a % 360) + 360) % 360;
      }
      const $i = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Ui = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let di;
      function re(a, h, f) {
        if (a) {
          let b = At(a);
          (b[h] = Math.max(0, Math.min(b[h] + b[h] * f, 0 === h ? 360 : 1))),
            (b = Be(b)),
            (a.r = b[0]),
            (a.g = b[1]),
            (a.b = b[2]);
        }
      }
      function ui(a, h) {
        return a && Object.assign(h || {}, a);
      }
      function qe(a) {
        var h = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(a)
            ? a.length >= 3 &&
              ((h = { r: a[0], g: a[1], b: a[2], a: 255 }),
              a.length > 3 && (h.a = Je(a[3])))
            : ((h = ui(a, { r: 0, g: 0, b: 0, a: 1 })).a = Je(h.a)),
          h
        );
      }
      function an(a) {
        return "r" === a.charAt(0)
          ? (function Vi(a) {
              const h = Oi.exec(a);
              let b,
                v,
                M,
                f = 255;
              if (h) {
                if (h[7] !== b) {
                  const C = +h[7];
                  f = 255 & (h[8] ? me(C) : 255 * C);
                }
                return (
                  (b = +h[1]),
                  (v = +h[3]),
                  (M = +h[5]),
                  (b = 255 & (h[2] ? me(b) : b)),
                  (v = 255 & (h[4] ? me(v) : v)),
                  (M = 255 & (h[6] ? me(M) : M)),
                  { r: b, g: v, b: M, a: f }
                );
              }
            })(a)
          : (function on(a) {
              const h = Ze.exec(a);
              let b,
                f = 255;
              if (!h) return;
              h[5] !== b && (f = h[6] ? me(+h[5]) : Je(+h[5]));
              const v = Di(+h[2]),
                M = +h[3] / 100,
                C = +h[4] / 100;
              return (
                (b =
                  "hwb" === h[1]
                    ? (function hi(a, h, f) {
                        return ke(Yi, a, h, f);
                      })(v, M, C)
                    : "hsv" === h[1]
                    ? (function be(a, h, f) {
                        return ke(ci, a, h, f);
                      })(v, M, C)
                    : Be(v, M, C)),
                { r: b[0], g: b[1], b: b[2], a: f }
              );
            })(a);
      }
      class fi {
        constructor(h) {
          if (h instanceof fi) return h;
          const f = typeof h;
          let b;
          "object" === f
            ? (b = qe(h))
            : "string" === f &&
              (b =
                (function Le(a) {
                  var f,
                    h = a.length;
                  return (
                    "#" === a[0] &&
                      (4 === h || 5 === h
                        ? (f = {
                            r: 255 & (17 * Xt[a[1]]),
                            g: 255 & (17 * Xt[a[2]]),
                            b: 255 & (17 * Xt[a[3]]),
                            a: 5 === h ? 17 * Xt[a[4]] : 255,
                          })
                        : (7 === h || 9 === h) &&
                          (f = {
                            r: (Xt[a[1]] << 4) | Xt[a[2]],
                            g: (Xt[a[3]] << 4) | Xt[a[4]],
                            b: (Xt[a[5]] << 4) | Xt[a[6]],
                            a: 9 === h ? (Xt[a[7]] << 4) | Xt[a[8]] : 255,
                          })),
                    f
                  );
                })(h) ||
                (function je(a) {
                  di ||
                    ((di = (function Fe() {
                      const a = {},
                        h = Object.keys(Ui),
                        f = Object.keys($i);
                      let b, v, M, C, L;
                      for (b = 0; b < h.length; b++) {
                        for (C = L = h[b], v = 0; v < f.length; v++)
                          (M = f[v]), (L = L.replace(M, $i[M]));
                        (M = parseInt(Ui[C], 16)),
                          (a[L] = [(M >> 16) & 255, (M >> 8) & 255, 255 & M]);
                      }
                      return a;
                    })()),
                    (di.transparent = [0, 0, 0, 0]));
                  const h = di[a.toLowerCase()];
                  return (
                    h && {
                      r: h[0],
                      g: h[1],
                      b: h[2],
                      a: 4 === h.length ? h[3] : 255,
                    }
                  );
                })(h) ||
                an(h)),
            (this._rgb = b),
            (this._valid = !!b);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var h = ui(this._rgb);
          return h && (h.a = Re(h.a)), h;
        }
        set rgb(h) {
          this._rgb = qe(h);
        }
        rgbString() {
          return this._valid
            ? (function sn(a) {
                return (
                  a &&
                  (a.a < 255
                    ? `rgba(${a.r}, ${a.g}, ${a.b}, ${Re(a.a)})`
                    : `rgb(${a.r}, ${a.g}, ${a.b})`)
                );
              })(this._rgb)
            : this._rgb;
        }
        hexString() {
          return this._valid
            ? (function Ni(a) {
                var h = (function Hi(a) {
                  return Ke(a.r) && Ke(a.g) && Ke(a.b) && Ke(a.a);
                })(a)
                  ? Pi
                  : Wi;
                return (
                  a &&
                  "#" + h(a.r) + h(a.g) + h(a.b) + (a.a < 255 ? h(a.a) : "")
                );
              })(this._rgb)
            : this._rgb;
        }
        hslString() {
          return this._valid
            ? (function rn(a) {
                if (!a) return;
                const h = At(a),
                  f = h[0],
                  b = Qe(h[1]),
                  v = Qe(h[2]);
                return a.a < 255
                  ? `hsla(${f}, ${b}%, ${v}%, ${Re(a.a)})`
                  : `hsl(${f}, ${b}%, ${v}%)`;
              })(this._rgb)
            : this._rgb;
        }
        mix(h, f) {
          const b = this;
          if (h) {
            const v = b.rgb,
              M = h.rgb;
            let C;
            const L = f === C ? 0.5 : f,
              j = 2 * L - 1,
              z = v.a - M.a,
              V = ((j * z == -1 ? j : (j + z) / (1 + j * z)) + 1) / 2;
            (C = 1 - V),
              (v.r = 255 & (V * v.r + C * M.r + 0.5)),
              (v.g = 255 & (V * v.g + C * M.g + 0.5)),
              (v.b = 255 & (V * v.b + C * M.b + 0.5)),
              (v.a = L * v.a + (1 - L) * M.a),
              (b.rgb = v);
          }
          return b;
        }
        clone() {
          return new fi(this.rgb);
        }
        alpha(h) {
          return (this._rgb.a = Je(h)), this;
        }
        clearer(h) {
          return (this._rgb.a *= 1 - h), this;
        }
        greyscale() {
          const h = this._rgb,
            f = oe(0.3 * h.r + 0.59 * h.g + 0.11 * h.b);
          return (h.r = h.g = h.b = f), this;
        }
        opaquer(h) {
          return (this._rgb.a *= 1 + h), this;
        }
        negate() {
          const h = this._rgb;
          return (h.r = 255 - h.r), (h.g = 255 - h.g), (h.b = 255 - h.b), this;
        }
        lighten(h) {
          return re(this._rgb, 2, h), this;
        }
        darken(h) {
          return re(this._rgb, 2, -h), this;
        }
        saturate(h) {
          return re(this._rgb, 1, h), this;
        }
        desaturate(h) {
          return re(this._rgb, 1, -h), this;
        }
        rotate(h) {
          return (
            (function he(a, h) {
              var f = At(a);
              (f[0] = Di(f[0] + h)),
                (f = Be(f)),
                (a.r = f[0]),
                (a.g = f[1]),
                (a.b = f[2]);
            })(this._rgb, h),
            this
          );
        }
      }
      function ti(a) {
        return new fi(a);
      }
      const _e = (a) =>
        a instanceof CanvasGradient || a instanceof CanvasPattern;
      function ln(a) {
        return _e(a) ? a : ti(a);
      }
      function m(a) {
        return _e(a) ? a : ti(a).saturate(0.5).darken(0.1).hexString();
      }
      const g = Object.create(null),
        _ = Object.create(null);
      function w(a, h) {
        if (!h) return a;
        const f = h.split(".");
        for (let b = 0, v = f.length; b < v; ++b) {
          const M = f[b];
          a = a[M] || (a[M] = Object.create(null));
        }
        return a;
      }
      function P(a, h, f) {
        return "string" == typeof h ? le(w(a, h), f) : le(w(a, ""), h);
      }
      var R = new (class E {
        constructor(h) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (f) =>
              f.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (f, b) => m(b.backgroundColor)),
            (this.hoverBorderColor = (f, b) => m(b.borderColor)),
            (this.hoverColor = (f, b) => m(b.color)),
            (this.indexAxis = "x"),
            (this.interaction = { mode: "nearest", intersect: !0 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            this.describe(h);
        }
        set(h, f) {
          return P(this, h, f);
        }
        get(h) {
          return w(this, h);
        }
        describe(h, f) {
          return P(_, h, f);
        }
        override(h, f) {
          return P(g, h, f);
        }
        route(h, f, b, v) {
          const M = w(this, h),
            C = w(this, b),
            L = "_" + f;
          Object.defineProperties(M, {
            [L]: { value: M[f], writable: !0 },
            [f]: {
              enumerable: !0,
              get() {
                const j = this[L],
                  z = C[v];
                return Ot(j) ? Object.assign({}, z, j) : Zt(j, z);
              },
              set(j) {
                this[L] = j;
              },
            },
          });
        }
      })({
        _scriptable: (a) => !a.startsWith("on"),
        _indexable: (a) => "events" !== a,
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function $(a, h, f, b, v) {
        let M = h[v];
        return (
          M || ((M = h[v] = a.measureText(v).width), f.push(v)),
          M > b && (b = M),
          b
        );
      }
      function X(a, h, f, b) {
        let v = ((b = b || {}).data = b.data || {}),
          M = (b.garbageCollect = b.garbageCollect || []);
        b.font !== h &&
          ((v = b.data = {}), (M = b.garbageCollect = []), (b.font = h)),
          a.save(),
          (a.font = h);
        let C = 0;
        const L = f.length;
        let j, z, V, Z, J;
        for (j = 0; j < L; j++)
          if (((Z = f[j]), null != Z && !0 !== Ct(Z))) C = $(a, v, M, C, Z);
          else if (Ct(Z))
            for (z = 0, V = Z.length; z < V; z++)
              (J = Z[z]), null != J && !Ct(J) && (C = $(a, v, M, C, J));
        a.restore();
        const Wt = M.length / 2;
        if (Wt > f.length) {
          for (j = 0; j < Wt; j++) delete v[M[j]];
          M.splice(0, Wt);
        }
        return C;
      }
      function et(a, h, f) {
        const b = a.currentDevicePixelRatio,
          v = 0 !== f ? Math.max(f / 2, 0.5) : 0;
        return Math.round((h - v) * b) / b + v;
      }
      function tt(a, h) {
        (h = h || a.getContext("2d")).save(),
          h.resetTransform(),
          h.clearRect(0, 0, a.width, a.height),
          h.restore();
      }
      function lt(a, h, f, b) {
        let v, M, C, L, j;
        const z = h.pointStyle,
          V = h.rotation,
          Z = h.radius;
        let J = (V || 0) * Dt;
        if (
          z &&
          "object" == typeof z &&
          ((v = z.toString()),
          "[object HTMLImageElement]" === v ||
            "[object HTMLCanvasElement]" === v)
        )
          return (
            a.save(),
            a.translate(f, b),
            a.rotate(J),
            a.drawImage(z, -z.width / 2, -z.height / 2, z.width, z.height),
            void a.restore()
          );
        if (!(isNaN(Z) || Z <= 0)) {
          switch ((a.beginPath(), z)) {
            default:
              a.arc(f, b, Z, 0, gt), a.closePath();
              break;
            case "triangle":
              a.moveTo(f + Math.sin(J) * Z, b - Math.cos(J) * Z),
                (J += jt),
                a.lineTo(f + Math.sin(J) * Z, b - Math.cos(J) * Z),
                (J += jt),
                a.lineTo(f + Math.sin(J) * Z, b - Math.cos(J) * Z),
                a.closePath();
              break;
            case "rectRounded":
              (j = 0.516 * Z),
                (L = Z - j),
                (M = Math.cos(J + Et) * L),
                (C = Math.sin(J + Et) * L),
                a.arc(f - M, b - C, j, J - ot, J - at),
                a.arc(f + C, b - M, j, J - at, J),
                a.arc(f + M, b + C, j, J, J + at),
                a.arc(f - C, b + M, j, J + at, J + ot),
                a.closePath();
              break;
            case "rect":
              if (!V) {
                (L = Math.SQRT1_2 * Z), a.rect(f - L, b - L, 2 * L, 2 * L);
                break;
              }
              J += Et;
            case "rectRot":
              (M = Math.cos(J) * Z),
                (C = Math.sin(J) * Z),
                a.moveTo(f - M, b - C),
                a.lineTo(f + C, b - M),
                a.lineTo(f + M, b + C),
                a.lineTo(f - C, b + M),
                a.closePath();
              break;
            case "crossRot":
              J += Et;
            case "cross":
              (M = Math.cos(J) * Z),
                (C = Math.sin(J) * Z),
                a.moveTo(f - M, b - C),
                a.lineTo(f + M, b + C),
                a.moveTo(f + C, b - M),
                a.lineTo(f - C, b + M);
              break;
            case "star":
              (M = Math.cos(J) * Z),
                (C = Math.sin(J) * Z),
                a.moveTo(f - M, b - C),
                a.lineTo(f + M, b + C),
                a.moveTo(f + C, b - M),
                a.lineTo(f - C, b + M),
                (J += Et),
                (M = Math.cos(J) * Z),
                (C = Math.sin(J) * Z),
                a.moveTo(f - M, b - C),
                a.lineTo(f + M, b + C),
                a.moveTo(f + C, b - M),
                a.lineTo(f - C, b + M);
              break;
            case "line":
              (M = Math.cos(J) * Z),
                (C = Math.sin(J) * Z),
                a.moveTo(f - M, b - C),
                a.lineTo(f + M, b + C);
              break;
            case "dash":
              a.moveTo(f, b),
                a.lineTo(f + Math.cos(J) * Z, b + Math.sin(J) * Z);
          }
          a.fill(), h.borderWidth > 0 && a.stroke();
        }
      }
      function pt(a, h, f) {
        return (
          (f = f || 0.5),
          !h ||
            (a &&
              a.x > h.left - f &&
              a.x < h.right + f &&
              a.y > h.top - f &&
              a.y < h.bottom + f)
        );
      }
      function vt(a, h) {
        a.save(),
          a.beginPath(),
          a.rect(h.left, h.top, h.right - h.left, h.bottom - h.top),
          a.clip();
      }
      function Lt(a) {
        a.restore();
      }
      function gi(a, h, f, b, v) {
        if (!h) return a.lineTo(f.x, f.y);
        if ("middle" === v) {
          const M = (h.x + f.x) / 2;
          a.lineTo(M, h.y), a.lineTo(M, f.y);
        } else ("after" === v) != !!b ? a.lineTo(h.x, f.y) : a.lineTo(f.x, h.y);
        a.lineTo(f.x, f.y);
      }
      function pi(a, h, f, b) {
        if (!h) return a.lineTo(f.x, f.y);
        a.bezierCurveTo(
          b ? h.cp1x : h.cp2x,
          b ? h.cp1y : h.cp2y,
          b ? f.cp2x : f.cp1x,
          b ? f.cp2y : f.cp1y,
          f.x,
          f.y
        );
      }
      function Ai(a, h, f, b, v, M = {}) {
        const C = Ct(h) ? h : [h],
          L = M.strokeWidth > 0 && "" !== M.strokeColor;
        let j, z;
        for (
          a.save(),
            a.font = v.string,
            (function Xi(a, h) {
              h.translation && a.translate(h.translation[0], h.translation[1]),
                Ut(h.rotation) || a.rotate(h.rotation),
                h.color && (a.fillStyle = h.color),
                h.textAlign && (a.textAlign = h.textAlign),
                h.textBaseline && (a.textBaseline = h.textBaseline);
            })(a, M),
            j = 0;
          j < C.length;
          ++j
        )
          (z = C[j]),
            L &&
              (M.strokeColor && (a.strokeStyle = M.strokeColor),
              Ut(M.strokeWidth) || (a.lineWidth = M.strokeWidth),
              a.strokeText(z, f, b, M.maxWidth)),
            a.fillText(z, f, b, M.maxWidth),
            as(a, f, b, z, M),
            (b += v.lineHeight);
        a.restore();
      }
      function as(a, h, f, b, v) {
        if (v.strikethrough || v.underline) {
          const M = a.measureText(b),
            C = h - M.actualBoundingBoxLeft,
            L = h + M.actualBoundingBoxRight,
            j = f - M.actualBoundingBoxAscent,
            z = f + M.actualBoundingBoxDescent,
            V = v.strikethrough ? (j + z) / 2 : z;
          (a.strokeStyle = a.fillStyle),
            a.beginPath(),
            (a.lineWidth = v.decorationWidth || 2),
            a.moveTo(C, V),
            a.lineTo(L, V),
            a.stroke();
        }
      }
      function Ys(a, h) {
        const { x: f, y: b, w: v, h: M, radius: C } = h;
        a.arc(f + C.topLeft, b + C.topLeft, C.topLeft, -at, ot, !0),
          a.lineTo(f, b + M - C.bottomLeft),
          a.arc(
            f + C.bottomLeft,
            b + M - C.bottomLeft,
            C.bottomLeft,
            ot,
            at,
            !0
          ),
          a.lineTo(f + v - C.bottomRight, b + M),
          a.arc(
            f + v - C.bottomRight,
            b + M - C.bottomRight,
            C.bottomRight,
            at,
            0,
            !0
          ),
          a.lineTo(f + v, b + C.topRight),
          a.arc(f + v - C.topRight, b + C.topRight, C.topRight, 0, -at, !0),
          a.lineTo(f + C.topLeft, b);
      }
      const ls = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        cs = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function ze(a, h) {
        const f = ("" + a).match(ls);
        if (!f || "normal" === f[1]) return 1.2 * h;
        switch (((a = +f[2]), f[3])) {
          case "px":
            return a;
          case "%":
            a /= 100;
        }
        return h * a;
      }
      const Ti = (a) => +a || 0;
      function cn(a, h) {
        const f = {},
          b = Ot(h),
          v = b ? Object.keys(h) : h,
          M = Ot(a) ? (b ? (C) => Zt(a[C], a[h[C]]) : (C) => a[C]) : () => a;
        for (const C of v) f[C] = Ti(M(C));
        return f;
      }
      function hn(a) {
        return cn(a, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function En(a) {
        return cn(a, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function hs(a) {
        const h = hn(a);
        return (h.width = h.left + h.right), (h.height = h.top + h.bottom), h;
      }
      function Pe(a, h) {
        let f = Zt((a = a || {}).size, (h = h || R.font).size);
        "string" == typeof f && (f = parseInt(f, 10));
        let b = Zt(a.style, h.style);
        b &&
          !("" + b).match(cs) &&
          (d.warn('Invalid font style specified: "' + b + '"'), (b = ""));
        const v = {
          family: Zt(a.family, h.family),
          lineHeight: ze(Zt(a.lineHeight, h.lineHeight), f),
          size: f,
          style: b,
          weight: Zt(a.weight, h.weight),
          string: "",
        };
        return (
          (v.string = (function B(a) {
            return !a || Ut(a.size) || Ut(a.family)
              ? null
              : (a.style ? a.style + " " : "") +
                  (a.weight ? a.weight + " " : "") +
                  a.size +
                  "px " +
                  a.family;
          })(v)),
          v
        );
      }
      function ds(a, h, f, b) {
        let M,
          C,
          L,
          v = !0;
        for (M = 0, C = a.length; M < C; ++M)
          if (
            ((L = a[M]),
            void 0 !== L &&
              (void 0 !== h && "function" == typeof L && ((L = L(h)), (v = !1)),
              void 0 !== f && Ct(L) && ((L = L[f % L.length]), (v = !1)),
              void 0 !== L))
          )
            return b && !v && (b.cacheable = !1), L;
      }
      function Ln(a, h, f) {
        const { min: b, max: v } = a,
          M = Ye(h, (v - b) / 2),
          C = (L, j) => (f && 0 === L ? 0 : L + j);
        return { min: C(b, -Math.abs(M)), max: C(v, M) };
      }
      function Rn(a, h) {
        return Object.assign(Object.create(a), h);
      }
      function dn(a, h, f) {
        f = f || ((C) => a[C] < h);
        let M,
          b = a.length - 1,
          v = 0;
        for (; b - v > 1; ) (M = (v + b) >> 1), f(M) ? (v = M) : (b = M);
        return { lo: v, hi: b };
      }
      const us = (a, h, f) => dn(a, f, (b) => a[b][h] < f),
        un = (a, h, f) => dn(a, f, (b) => a[b][h] >= f);
      function fs(a, h, f) {
        let b = 0,
          v = a.length;
        for (; b < v && a[b] < h; ) b++;
        for (; v > b && a[v - 1] > f; ) v--;
        return b > 0 || v < a.length ? a.slice(b, v) : a;
      }
      const In = ["push", "pop", "shift", "splice", "unshift"];
      function Bn(a, h) {
        a._chartjs
          ? a._chartjs.listeners.push(h)
          : (Object.defineProperty(a, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [h] },
            }),
            In.forEach((f) => {
              const b = "_onData" + Nt(f),
                v = a[f];
              Object.defineProperty(a, f, {
                configurable: !0,
                enumerable: !1,
                value(...M) {
                  const C = v.apply(this, M);
                  return (
                    a._chartjs.listeners.forEach((L) => {
                      "function" == typeof L[b] && L[b](...M);
                    }),
                    C
                  );
                },
              });
            }));
      }
      function fn(a, h) {
        const f = a._chartjs;
        if (!f) return;
        const b = f.listeners,
          v = b.indexOf(h);
        -1 !== v && b.splice(v, 1),
          !(b.length > 0) &&
            (In.forEach((M) => {
              delete a[M];
            }),
            delete a._chartjs);
      }
      function gs(a) {
        const h = new Set();
        let f, b;
        for (f = 0, b = a.length; f < b; ++f) h.add(a[f]);
        return h.size === b ? a : Array.from(h);
      }
      function Ki(a, h = [""], f = a, b, v = () => a[0]) {
        It(b) || (b = Hn("_fallback", a));
        const M = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: a,
          _rootScopes: f,
          _fallback: b,
          _getTarget: v,
          override: (C) => Ki([C, ...a], h, f, b),
        };
        return new Proxy(M, {
          deleteProperty: (C, L) => (
            delete C[L], delete C._keys, delete a[0][L], !0
          ),
          get: (C, L) =>
            Li(C, L, () =>
              (function Wn(a, h, f, b) {
                let v;
                for (const M of h)
                  if (((v = Hn(gn(M, a), f)), It(v)))
                    return Gi(a, v) ? pn(f, b, a, v) : v;
              })(L, h, a, C)
            ),
          getOwnPropertyDescriptor: (C, L) =>
            Reflect.getOwnPropertyDescriptor(C._scopes[0], L),
          getPrototypeOf: () => Reflect.getPrototypeOf(a[0]),
          has: (C, L) => bn(C).includes(L),
          ownKeys: (C) => bn(C),
          set(C, L, j) {
            const z = C._storage || (C._storage = v());
            return (C[L] = z[L] = j), delete C._keys, !0;
          },
        });
      }
      function Ei(a, h, f, b) {
        const v = {
          _cacheable: !1,
          _proxy: a,
          _context: h,
          _subProxy: f,
          _stack: new Set(),
          _descriptors: Fn(a, b),
          setContext: (M) => Ei(a, M, f, b),
          override: (M) => Ei(a.override(M), h, f, b),
        };
        return new Proxy(v, {
          deleteProperty: (M, C) => (delete M[C], delete a[C], !0),
          get: (M, C, L) =>
            Li(M, C, () =>
              (function mi(a, h, f) {
                const {
                  _proxy: b,
                  _context: v,
                  _subProxy: M,
                  _descriptors: C,
                } = a;
                let L = b[h];
                return (
                  xt(L) &&
                    C.isScriptable(h) &&
                    (L = (function ps(a, h, f, b) {
                      const {
                        _proxy: v,
                        _context: M,
                        _subProxy: C,
                        _stack: L,
                      } = f;
                      if (L.has(a))
                        throw new Error(
                          "Recursion detected: " +
                            Array.from(L).join("->") +
                            "->" +
                            a
                        );
                      return (
                        L.add(a),
                        (h = h(M, C || b)),
                        L.delete(a),
                        Gi(a, h) && (h = pn(v._scopes, v, a, h)),
                        h
                      );
                    })(h, L, a, f)),
                  Ct(L) &&
                    L.length &&
                    (L = (function jn(a, h, f, b) {
                      const {
                        _proxy: v,
                        _context: M,
                        _subProxy: C,
                        _descriptors: L,
                      } = f;
                      if (It(M.index) && b(a)) h = h[M.index % h.length];
                      else if (Ot(h[0])) {
                        const j = h,
                          z = v._scopes.filter((V) => V !== j);
                        h = [];
                        for (const V of j) {
                          const Z = pn(z, v, a, V);
                          h.push(Ei(Z, M, C && C[a], L));
                        }
                      }
                      return h;
                    })(h, L, a, C.isIndexable)),
                  Gi(h, L) && (L = Ei(L, v, M && M[h], C)),
                  L
                );
              })(M, C, L)
            ),
          getOwnPropertyDescriptor: (M, C) =>
            M._descriptors.allKeys
              ? Reflect.has(a, C)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(a, C),
          getPrototypeOf: () => Reflect.getPrototypeOf(a),
          has: (M, C) => Reflect.has(a, C),
          ownKeys: () => Reflect.ownKeys(a),
          set: (M, C, L) => ((a[C] = L), delete M[C], !0),
        });
      }
      function Fn(a, h = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: f = h.scriptable,
          _indexable: b = h.indexable,
          _allKeys: v = h.allKeys,
        } = a;
        return {
          allKeys: v,
          scriptable: f,
          indexable: b,
          isScriptable: xt(f) ? f : () => f,
          isIndexable: xt(b) ? b : () => b,
        };
      }
      const gn = (a, h) => (a ? a + Nt(h) : h),
        Gi = (a, h) =>
          Ot(h) &&
          "adapters" !== a &&
          (null === Object.getPrototypeOf(h) || h.constructor === Object);
      function Li(a, h, f) {
        if (Object.prototype.hasOwnProperty.call(a, h)) return a[h];
        const b = f();
        return (a[h] = b), b;
      }
      function zn(a, h, f) {
        return xt(a) ? a(h, f) : a;
      }
      const Ri = (a, h) =>
        !0 === a ? h : "string" == typeof a ? Me(h, a) : void 0;
      function ms(a, h, f, b) {
        for (const v of h) {
          const M = Ri(f, v);
          if (M) {
            a.add(M);
            const C = zn(M._fallback, f, M);
            if (It(C) && C !== f && C !== b) return C;
          } else if (!1 === M && It(b) && f !== b) return null;
        }
        return !1;
      }
      function pn(a, h, f, b) {
        const v = h._rootScopes,
          M = zn(h._fallback, f, b),
          C = [...a, ...v],
          L = new Set();
        L.add(b);
        let j = Ji(L, C, f, M || f);
        return (
          !(
            null === j ||
            (It(M) && M !== f && ((j = Ji(L, C, M, j)), null === j))
          ) &&
          Ki(Array.from(L), [""], v, M, () =>
            (function mn(a, h, f) {
              const b = a._getTarget();
              h in b || (b[h] = {});
              const v = b[h];
              return Ct(v) && Ot(f) ? f : v;
            })(h, f, b)
          )
        );
      }
      function Ji(a, h, f, b) {
        for (; f; ) f = ms(a, h, f, b);
        return f;
      }
      function Hn(a, h) {
        for (const f of h) {
          if (!f) continue;
          const b = f[a];
          if (It(b)) return b;
        }
      }
      function bn(a) {
        let h = a._keys;
        return (
          h ||
            (h = a._keys =
              (function bi(a) {
                const h = new Set();
                for (const f of a)
                  for (const b of Object.keys(f).filter(
                    (v) => !v.startsWith("_")
                  ))
                    h.add(b);
                return Array.from(h);
              })(a._scopes)),
          h
        );
      }
      const Nn = Number.EPSILON || 1e-14,
        We = (a, h) => h < a.length && !a[h].skip && a[h],
        Qi = (a) => ("x" === a ? "y" : "x");
      function Vn(a, h, f, b) {
        const v = a.skip ? h : a,
          M = h,
          C = f.skip ? h : f,
          L = Te(M, v),
          j = Te(C, M);
        let z = L / (L + j),
          V = j / (L + j);
        (z = isNaN(z) ? 0 : z), (V = isNaN(V) ? 0 : V);
        const Z = b * z,
          J = b * V;
        return {
          previous: { x: M.x - Z * (C.x - v.x), y: M.y - Z * (C.y - v.y) },
          next: { x: M.x + J * (C.x - v.x), y: M.y + J * (C.y - v.y) },
        };
      }
      function Zi(a, h, f) {
        return Math.max(Math.min(a, f), h);
      }
      function xn(a, h, f, b, v) {
        let M, C, L, j;
        if (
          (h.spanGaps && (a = a.filter((z) => !z.skip)),
          "monotone" === h.cubicInterpolationMode)
        )
          !(function _n(a, h = "x") {
            const f = Qi(h),
              b = a.length,
              v = Array(b).fill(0),
              M = Array(b);
            let C,
              L,
              j,
              z = We(a, 0);
            for (C = 0; C < b; ++C)
              if (((L = j), (j = z), (z = We(a, C + 1)), j)) {
                if (z) {
                  const V = z[h] - j[h];
                  v[C] = 0 !== V ? (z[f] - j[f]) / V : 0;
                }
                M[C] = L
                  ? z
                    ? Bt(v[C - 1]) !== Bt(v[C])
                      ? 0
                      : (v[C - 1] + v[C]) / 2
                    : v[C - 1]
                  : v[C];
              }
            (function Oe(a, h, f) {
              const b = a.length;
              let v,
                M,
                C,
                L,
                j,
                z = We(a, 0);
              for (let V = 0; V < b - 1; ++V)
                if (((j = z), (z = We(a, V + 1)), j && z)) {
                  if (Ae(h[V], 0, Nn)) {
                    f[V] = f[V + 1] = 0;
                    continue;
                  }
                  (v = f[V] / h[V]),
                    (M = f[V + 1] / h[V]),
                    (L = Math.pow(v, 2) + Math.pow(M, 2)),
                    !(L <= 9) &&
                      ((C = 3 / Math.sqrt(L)),
                      (f[V] = v * C * h[V]),
                      (f[V + 1] = M * C * h[V]));
                }
            })(a, v, M),
              (function Yn(a, h, f = "x") {
                const b = Qi(f),
                  v = a.length;
                let M,
                  C,
                  L,
                  j = We(a, 0);
                for (let z = 0; z < v; ++z) {
                  if (((C = L), (L = j), (j = We(a, z + 1)), !L)) continue;
                  const V = L[f],
                    Z = L[b];
                  C &&
                    ((M = (V - C[f]) / 3),
                    (L[`cp1${f}`] = V - M),
                    (L[`cp1${b}`] = Z - M * h[z])),
                    j &&
                      ((M = (j[f] - V) / 3),
                      (L[`cp2${f}`] = V + M),
                      (L[`cp2${b}`] = Z + M * h[z]));
                }
              })(a, M, h);
          })(a, v);
        else {
          let z = b ? a[a.length - 1] : a[0];
          for (M = 0, C = a.length; M < C; ++M)
            (L = a[M]),
              (j = Vn(
                z,
                L,
                a[Math.min(M + 1, C - (b ? 0 : 1)) % C],
                h.tension
              )),
              (L.cp1x = j.previous.x),
              (L.cp1y = j.previous.y),
              (L.cp2x = j.next.x),
              (L.cp2y = j.next.y),
              (z = L);
        }
        h.capBezierPoints &&
          (function _i(a, h) {
            let f,
              b,
              v,
              M,
              C,
              L = pt(a[0], h);
            for (f = 0, b = a.length; f < b; ++f)
              (C = M),
                (M = L),
                (L = f < b - 1 && pt(a[f + 1], h)),
                M &&
                  ((v = a[f]),
                  C &&
                    ((v.cp1x = Zi(v.cp1x, h.left, h.right)),
                    (v.cp1y = Zi(v.cp1y, h.top, h.bottom))),
                  L &&
                    ((v.cp2x = Zi(v.cp2x, h.left, h.right)),
                    (v.cp2y = Zi(v.cp2y, h.top, h.bottom))));
          })(a, f);
      }
      function bs() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function yn(a) {
        let h = a.parentNode;
        return h && "[object ShadowRoot]" === h.toString() && (h = h.host), h;
      }
      function Ii(a, h, f) {
        let b;
        return (
          "string" == typeof a
            ? ((b = parseInt(a, 10)),
              -1 !== a.indexOf("%") && (b = (b / 100) * h.parentNode[f]))
            : (b = a),
          b
        );
      }
      const He = (a) => window.getComputedStyle(a, null),
        _s = ["top", "right", "bottom", "left"];
      function ei(a, h, f) {
        const b = {};
        f = f ? "-" + f : "";
        for (let v = 0; v < 4; v++) {
          const M = _s[v];
          b[M] = parseFloat(a[h + "-" + M + f]) || 0;
        }
        return (b.width = b.left + b.right), (b.height = b.top + b.bottom), b;
      }
      function ys(a, h) {
        const { canvas: f, currentDevicePixelRatio: b } = h,
          v = He(f),
          M = "border-box" === v.boxSizing,
          C = ei(v, "padding"),
          L = ei(v, "border", "width"),
          {
            x: j,
            y: z,
            box: V,
          } = (function xs(a, h) {
            const f = a.native || a,
              b = f.touches,
              v = b && b.length ? b[0] : f,
              { offsetX: M, offsetY: C } = v;
            let j,
              z,
              L = !1;
            if (
              ((a, h, f) => (a > 0 || h > 0) && (!f || !f.shadowRoot))(
                M,
                C,
                f.target
              )
            )
              (j = M), (z = C);
            else {
              const V = h.getBoundingClientRect();
              (j = v.clientX - V.left), (z = v.clientY - V.top), (L = !0);
            }
            return { x: j, y: z, box: L };
          })(a, f),
          Z = C.left + (V && L.left),
          J = C.top + (V && L.top);
        let { width: Wt, height: kt } = h;
        return (
          M && ((Wt -= C.width + L.width), (kt -= C.height + L.height)),
          {
            x: Math.round((((j - Z) / Wt) * f.width) / b),
            y: Math.round((((z - J) / kt) * f.height) / b),
          }
        );
      }
      const qi = (a) => Math.round(10 * a) / 10;
      function vs(a, h, f, b) {
        const v = He(a),
          M = ei(v, "margin"),
          C = Ii(v.maxWidth, a, "clientWidth") || dt,
          L = Ii(v.maxHeight, a, "clientHeight") || dt,
          j = (function Mn(a, h, f) {
            let b, v;
            if (void 0 === h || void 0 === f) {
              const M = yn(a);
              if (M) {
                const C = M.getBoundingClientRect(),
                  L = He(M),
                  j = ei(L, "border", "width"),
                  z = ei(L, "padding");
                (h = C.width - z.width - j.width),
                  (f = C.height - z.height - j.height),
                  (b = Ii(L.maxWidth, M, "clientWidth")),
                  (v = Ii(L.maxHeight, M, "clientHeight"));
              } else (h = a.clientWidth), (f = a.clientHeight);
            }
            return {
              width: h,
              height: f,
              maxWidth: b || dt,
              maxHeight: v || dt,
            };
          })(a, h, f);
        let { width: z, height: V } = j;
        if ("content-box" === v.boxSizing) {
          const Z = ei(v, "border", "width"),
            J = ei(v, "padding");
          (z -= J.width + Z.width), (V -= J.height + Z.height);
        }
        return (
          (z = Math.max(0, z - M.width)),
          (V = Math.max(0, b ? Math.floor(z / b) : V - M.height)),
          (z = qi(Math.min(z, C, j.maxWidth))),
          (V = qi(Math.min(V, L, j.maxHeight))),
          z && !V && (V = qi(z / 2)),
          { width: z, height: V }
        );
      }
      function ws(a, h, f) {
        const b = h || 1,
          v = Math.floor(a.height * b),
          M = Math.floor(a.width * b);
        (a.height = v / b), (a.width = M / b);
        const C = a.canvas;
        return (
          C.style &&
            (f || (!C.style.height && !C.style.width)) &&
            ((C.style.height = `${a.height}px`),
            (C.style.width = `${a.width}px`)),
          (a.currentDevicePixelRatio !== b ||
            C.height !== v ||
            C.width !== M) &&
            ((a.currentDevicePixelRatio = b),
            (C.height = v),
            (C.width = M),
            a.ctx.setTransform(b, 0, 0, b, 0, 0),
            !0)
        );
      }
      const Ms = (function () {
        let a = !1;
        try {
          const h = {
            get passive() {
              return (a = !0), !1;
            },
          };
          window.addEventListener("test", null, h),
            window.removeEventListener("test", null, h);
        } catch (h) {}
        return a;
      })();
      function Ss(a, h) {
        const f = (function vn(a, h) {
            return He(a).getPropertyValue(h);
          })(a, h),
          b = f && f.match(/^(\d+)(\.\d+)?px$/);
        return b ? +b[1] : void 0;
      }
      function de(a, h, f, b) {
        return { x: a.x + f * (h.x - a.x), y: a.y + f * (h.y - a.y) };
      }
      function $n(a, h, f, b) {
        return {
          x: a.x + f * (h.x - a.x),
          y:
            "middle" === b
              ? f < 0.5
                ? a.y
                : h.y
              : "after" === b
              ? f < 1
                ? a.y
                : h.y
              : f > 0
              ? h.y
              : a.y,
        };
      }
      function Un(a, h, f, b) {
        const v = { x: a.cp2x, y: a.cp2y },
          M = { x: h.cp1x, y: h.cp1y },
          C = de(a, v, f),
          L = de(v, M, f),
          j = de(M, h, f),
          z = de(C, L, f),
          V = de(L, j, f);
        return de(z, V, f);
      }
      const Sn = new Map();
      function Cs(a, h, f) {
        return (function Ne(a, h) {
          h = h || {};
          const f = a + JSON.stringify(h);
          let b = Sn.get(f);
          return b || ((b = new Intl.NumberFormat(a, h)), Sn.set(f, b)), b;
        })(h, f).format(a);
      }
      function Cn(a, h, f) {
        return a
          ? (function (a, h) {
              return {
                x: (f) => a + a + h - f,
                setWidth(f) {
                  h = f;
                },
                textAlign: (f) =>
                  "center" === f ? f : "right" === f ? "left" : "right",
                xPlus: (f, b) => f - b,
                leftForLtr: (f, b) => f - b,
              };
            })(h, f)
          : {
              x: (a) => a,
              setWidth(a) {},
              textAlign: (a) => a,
              xPlus: (a, h) => a + h,
              leftForLtr: (a, h) => a,
            };
      }
      function Os(a, h) {
        let f, b;
        ("ltr" === h || "rtl" === h) &&
          ((f = a.canvas.style),
          (b = [
            f.getPropertyValue("direction"),
            f.getPropertyPriority("direction"),
          ]),
          f.setProperty("direction", h, "important"),
          (a.prevTextDirection = b));
      }
      function Ds(a, h) {
        void 0 !== h &&
          (delete a.prevTextDirection,
          a.canvas.style.setProperty("direction", h[0], h[1]));
      }
      function tn(a) {
        return "angle" === a
          ? { between: Ee, compare: Si, normalize: Ft }
          : { between: Ci, compare: (h, f) => h - f, normalize: (h) => h };
      }
      function xi({ start: a, end: h, count: f, loop: b, style: v }) {
        return {
          start: a % f,
          end: h % f,
          loop: b && (h - a + 1) % f == 0,
          style: v,
        };
      }
      function Xn(a, h, f) {
        if (!f) return [a];
        const { property: b, start: v, end: M } = f,
          C = h.length,
          { compare: L, between: j, normalize: z } = tn(b),
          {
            start: V,
            end: Z,
            loop: J,
            style: Wt,
          } = (function As(a, h, f) {
            const { property: b, start: v, end: M } = f,
              { between: C, normalize: L } = tn(b),
              j = h.length;
            let J,
              Wt,
              { start: z, end: V, loop: Z } = a;
            if (Z) {
              for (
                z += j, V += j, J = 0, Wt = j;
                J < Wt && C(L(h[z % j][b]), v, M);
                ++J
              )
                z--, V--;
              (z %= j), (V %= j);
            }
            return (
              V < z && (V += j), { start: z, end: V, loop: Z, style: a.style }
            );
          })(a, h, f),
          kt = [];
        let Gt,
          ii,
          yi,
          Kt = !1,
          Yt = null;
        for (let vi = V, Pn = V; vi <= Z; ++vi)
          (ii = h[vi % C]),
            !ii.skip &&
              ((Gt = z(ii[b])),
              Gt !== yi &&
                ((Kt = j(Gt, v, M)),
                null === Yt &&
                  (Kt || (j(v, yi, Gt) && 0 !== L(v, yi))) &&
                  (Yt = 0 === L(Gt, v) ? vi : Pn),
                null !== Yt &&
                  (!Kt || 0 === L(M, Gt) || j(M, yi, Gt)) &&
                  (kt.push(
                    xi({ start: Yt, end: vi, loop: J, count: C, style: Wt })
                  ),
                  (Yt = null)),
                (Pn = vi),
                (yi = Gt)));
        return (
          null !== Yt &&
            kt.push(xi({ start: Yt, end: Z, loop: J, count: C, style: Wt })),
          kt
        );
      }
      function Ts(a, h) {
        const f = [],
          b = a.segments;
        for (let v = 0; v < b.length; v++) {
          const M = Xn(b[v], a.points, h);
          M.length && f.push(...M);
        }
        return f;
      }
      function Es(a, h) {
        const f = a.points,
          b = a.options.spanGaps,
          v = f.length;
        if (!v) return [];
        const M = !!a._loop,
          { start: C, end: L } = (function Kn(a, h, f, b) {
            let v = 0,
              M = h - 1;
            if (f && !b) for (; v < h && !a[v].skip; ) v++;
            for (; v < h && a[v].skip; ) v++;
            for (v %= h, f && (M += v); M > v && a[M % h].skip; ) M--;
            return (M %= h), { start: v, end: M };
          })(f, v, M, b);
        return Jn(
          a,
          !0 === b
            ? [{ start: C, end: L, loop: M }]
            : (function Gn(a, h, f, b) {
                const v = a.length,
                  M = [];
                let j,
                  C = h,
                  L = a[h];
                for (j = h + 1; j <= f; ++j) {
                  const z = a[j % v];
                  z.skip || z.stop
                    ? L.skip ||
                      (M.push({
                        start: h % v,
                        end: (j - 1) % v,
                        loop: (b = !1),
                      }),
                      (h = C = z.stop ? j : null))
                    : ((C = j), L.skip && (h = j)),
                    (L = z);
                }
                return (
                  null !== C && M.push({ start: h % v, end: C % v, loop: b }), M
                );
              })(
                f,
                C,
                L < C ? L + v : L,
                !!a._fullLoop && 0 === C && L === v - 1
              ),
          f,
          h
        );
      }
      function Jn(a, h, f, b) {
        return b && b.setContext && f
          ? (function Ls(a, h, f, b) {
              const v = a._chart.getContext(),
                M = Qn(a.options),
                {
                  _datasetIndex: C,
                  options: { spanGaps: L },
                } = a,
                j = f.length,
                z = [];
              let V = M,
                Z = h[0].start,
                J = Z;
              function Wt(kt, Kt, Yt, Gt) {
                const ii = L ? -1 : 1;
                if (kt !== Kt) {
                  for (kt += j; f[kt % j].skip; ) kt -= ii;
                  for (; f[Kt % j].skip; ) Kt += ii;
                  kt % j != Kt % j &&
                    (z.push({
                      start: kt % j,
                      end: Kt % j,
                      loop: Yt,
                      style: Gt,
                    }),
                    (V = Gt),
                    (Z = Kt % j));
                }
              }
              for (const kt of h) {
                Z = L ? Z : kt.start;
                let Yt,
                  Kt = f[Z % j];
                for (J = Z + 1; J <= kt.end; J++) {
                  const Gt = f[J % j];
                  (Yt = Qn(
                    b.setContext(
                      Rn(v, {
                        type: "segment",
                        p0: Kt,
                        p1: Gt,
                        p0DataIndex: (J - 1) % j,
                        p1DataIndex: J % j,
                        datasetIndex: C,
                      })
                    )
                  )),
                    Rs(Yt, V) && Wt(Z, J - 1, kt.loop, V),
                    (Kt = Gt),
                    (V = Yt);
                }
                Z < J - 1 && Wt(Z, J - 1, kt.loop, V);
              }
              return z;
            })(a, h, f, b)
          : h;
      }
      function Qn(a) {
        return {
          backgroundColor: a.backgroundColor,
          borderCapStyle: a.borderCapStyle,
          borderDash: a.borderDash,
          borderDashOffset: a.borderDashOffset,
          borderJoinStyle: a.borderJoinStyle,
          borderWidth: a.borderWidth,
          borderColor: a.borderColor,
        };
      }
      function Rs(a, h) {
        return h && JSON.stringify(a) !== JSON.stringify(h);
      }
    },
    34204: (ee, Mt, q) => {
      q.d(Mt, {
        PI: () => d.P,
        eT: () => d.aX,
        tH: () => d.ar,
        uz: () => d.N,
        i7: () => d.V,
        ri: () => d.j,
        ME: () => d.aB,
        Qd: () => d.aq,
        kJ: () => d.b,
        KH: () => d.g,
        _D: () => d.k,
        Kn: () => d.i,
        TS: () => d.a1,
        re: () => d.Y,
        oY: () => d.B,
        Yr: () => d.t,
        kX: () => d.at,
        p2: () => d.X,
        Be: () => d.v,
      });
      var d = q(43);
    },
    27612: (ee, Mt, q) => {
      q.d(Mt, { Z: () => rn });
      var d = q(5372),
        U = q(34204),
        $t = q(83140);
      const Pt = ["click", "dblclick"],
        zt = ["enter", "leave"],
        ie = Pt.concat(zt);
      function Ct(m, g, _) {
        (0, U.uz)(m, [g.$context, _]);
      }
      function Ot(m, g) {
        let _ = Number.POSITIVE_INFINITY;
        return m
          .filter((w) => w.options.display && w.inRange(g.x, g.y))
          .reduce((w, P) => {
            const E = P.getCenterPoint(),
              R = (0, U.ME)(g, E);
            return R < _ ? ((w = [P]), (_ = R)) : R === _ && w.push(P), w;
          }, [])
          .sort((w, P) => w._index - P._index)
          .slice(0, 1)[0];
      }
      function Zt(m, g, _, w) {
        if (
          (0, U.KH)(g[_]) &&
          !(function si(m, g, _) {
            return (0, U.ri)(m[g]) || (0, U.ri)(m[_]);
          })(m.options, _, w)
        ) {
          const P = m[_] !== g[_];
          return (m[_] = g[_]), P;
        }
      }
      function Ye(m, g) {
        for (const _ of ["scaleID", "xScaleID", "yScaleID"])
          m[_] &&
            !g[m[_]] &&
            wi(m, _) &&
            $t.warn(
              `No scale found with id '${m[_]}' for annotation '${m.id}'`
            );
      }
      function wi(m, g) {
        if ("scaleID" === g) return !0;
        const _ = g.charAt(0);
        for (const w of ["Min", "Max", "Value"])
          if ((0, U.ri)(m[_ + w])) return !0;
        return !1;
      }
      function ye(m, g, _, w) {
        for (const P of _) {
          const E = m[P];
          if ((0, U.ri)(E)) {
            const R = g.parse(E);
            (w.min = Math.min(w.min, R)), (w.max = Math.max(w.max, R));
          }
        }
      }
      const fe = (m, g, _) => Math.min(_, Math.max(g, m));
      function oi(m, g, _) {
        for (const w of Object.keys(m)) m[w] = fe(m[w], g, _);
        return m;
      }
      function le(m, g, { x: _, y: w, width: P, height: E }, R) {
        const B = R / 2 || 0;
        return m >= _ - B && m <= _ + P + B && g >= w - B && g <= w + E + B;
      }
      function ve(m, g) {
        const { x: _, y: w } = m.getProps(["x", "y"], g);
        return { x: _, y: w };
      }
      const Mi = (m, g) =>
          g > m || (m.length > g.length && m.substr(0, g.length) === g),
        ge = (m) => "string" == typeof m && m.endsWith("%"),
        we = (m) => fe(parseFloat(m) / 100, 0, 1);
      function Rt(m, g) {
        return "start" === g ? 0 : "end" === g ? m : ge(g) ? we(g) * m : m / 2;
      }
      function Me(m, g) {
        return "number" == typeof g ? g : ge(g) ? we(g) * m : m;
      }
      function It(m) {
        return (0, U.Kn)(m)
          ? { x: (0, U.Be)(m.x, "center"), y: (0, U.Be)(m.y, "center") }
          : { x: (m = (0, U.Be)(m, "center")), y: m };
      }
      function xt(m) {
        return m && ((0, U.ri)(m.xValue) || (0, U.ri)(m.yValue));
      }
      const se = new Map();
      function ot(m) {
        return m instanceof Image || m instanceof HTMLCanvasElement;
      }
      function bt(m, g) {
        if (g && g.borderWidth)
          return (
            (m.lineCap = g.borderCapStyle),
            m.setLineDash(g.borderDash),
            (m.lineDashOffset = g.borderDashOffset),
            (m.lineJoin = g.borderJoinStyle),
            (m.lineWidth = g.borderWidth),
            (m.strokeStyle = g.borderColor),
            !0
          );
      }
      function dt(m, g) {
        (m.shadowColor = g.backgroundShadowColor),
          (m.shadowBlur = g.shadowBlur),
          (m.shadowOffsetX = g.shadowOffsetX),
          (m.shadowOffsetY = g.shadowOffsetY);
      }
      function Dt(m, g) {
        const _ = g.content;
        if (ot(_))
          return {
            width: Me(_.width, g.width),
            height: Me(_.height, g.height),
          };
        const w = (0, U.re)(g.font),
          P = (0, U.kJ)(_) ? _ : [_],
          E = P.join() + w.string + (m._measureText ? "-spriting" : "");
        if (!se.has(E)) {
          m.save(), (m.font = w.string);
          const R = P.length;
          let B = 0;
          for (let X = 0; X < R; X++)
            B = Math.max(B, m.measureText(P[X]).width);
          m.restore(), se.set(E, { width: B, height: R * w.lineHeight });
        }
        return se.get(E);
      }
      function at(m, g, _) {
        const { x: w, y: P, width: E, height: R } = g;
        m.save(), dt(m, _);
        const B = bt(m, _);
        (m.fillStyle = _.backgroundColor),
          m.beginPath(),
          (0, U.tH)(m, {
            x: w,
            y: P,
            w: E,
            h: R,
            radius: oi(
              (0, U.kX)((0, U.Be)(_.cornerRadius, _.borderRadius)),
              0,
              Math.min(E, R) / 2
            ),
          }),
          m.closePath(),
          m.fill(),
          B && ((m.shadowColor = _.borderShadowColor), m.stroke()),
          m.restore();
      }
      function Et(m, g, _) {
        const w = _.content;
        if (ot(w)) return void m.drawImage(w, g.x, g.y, g.width, g.height);
        const P = (0, U.kJ)(w) ? w : [w],
          E = (0, U.re)(_.font),
          R = E.lineHeight,
          B = (function Nt(m, g) {
            const { x: _, width: w } = m,
              P = g.textAlign;
            return "center" === P
              ? _ + w / 2
              : "end" === P || "right" === P
              ? _ + w
              : _;
          })(g, _),
          $ = g.y + R / 2;
        (m.font = E.string),
          (m.textBaseline = "middle"),
          (m.textAlign = _.textAlign),
          (m.fillStyle = _.color),
          P.forEach((X, et) => m.fillText(X, B, $ + et * R));
      }
      function jt(m) {
        const { x: g, y: _, width: w, height: P } = m;
        return { x: g + w / 2, y: _ + P / 2 };
      }
      function Bt(m, g, _) {
        return (
          (g = "number" == typeof g ? g : m.parse(g)),
          (0, U.KH)(g) ? m.getPixelForValue(g) : _
        );
      }
      function Se(m, g) {
        if (m) {
          const _ = Bt(m, g.min, g.start),
            w = Bt(m, g.max, g.end);
          return { start: Math.min(_, w), end: Math.max(_, w) };
        }
        return { start: g.start, end: g.end };
      }
      function ai(m, g) {
        const { chartArea: _, scales: w } = m,
          P = w[g.xScaleID],
          E = w[g.yScaleID];
        let R = _.width / 2,
          B = _.height / 2;
        return (
          P && (R = Bt(P, g.xValue, R)),
          E && (B = Bt(E, g.yValue, B)),
          { x: R, y: B }
        );
      }
      function pe(m, g) {
        const _ = m.scales[g.xScaleID],
          w = m.scales[g.yScaleID];
        let { top: P, left: E, bottom: R, right: B } = m.chartArea;
        if (!_ && !w) return {};
        const $ = Se(_, { min: g.xMin, max: g.xMax, start: E, end: B });
        (E = $.start), (B = $.end);
        const X = Se(w, { min: g.yMin, max: g.yMax, start: P, end: R });
        return (
          (P = X.start),
          (R = X.end),
          { x: E, y: P, x2: B, y2: R, width: B - E, height: R - P }
        );
      }
      function $e(m, g) {
        if (!xt(g)) {
          const _ = pe(m, g),
            w = jt(_);
          let P = g.radius;
          return (
            (!P || isNaN(P)) &&
              ((P = Math.min(_.width, _.height) / 2), (g.radius = P)),
            {
              x: w.x + g.xAdjust,
              y: w.y + g.yAdjust,
              width: 2 * P,
              height: 2 * P,
            }
          );
        }
        return (function Ae(m, g) {
          const _ = ai(m, g);
          return {
            x: _.x + g.xAdjust,
            y: _.y + g.yAdjust,
            width: 2 * g.radius,
            height: 2 * g.radius,
          };
        })(m, g);
      }
      class Ce extends d.W_ {
        inRange(g, _, w) {
          return le(
            g,
            _,
            this.getProps(["x", "y", "width", "height"], w),
            this.options.borderWidth
          );
        }
        getCenterPoint(g) {
          return jt(this.getProps(["x", "y", "width", "height"], g));
        }
        draw(g) {
          g.save(), at(g, this, this.options), g.restore();
        }
        drawLabel(g) {
          const { x: _, y: w, width: P, height: E, options: R } = this,
            { label: B, borderWidth: $ } = R,
            X = $ / 2,
            et = It(B.position),
            tt = (0, U.oY)(B.padding),
            lt = Dt(g, B),
            pt = {
              x: ce(this, lt, et, tt),
              y: nn(this, lt, et, tt),
              width: lt.width,
              height: lt.height,
            };
          g.save(),
            g.beginPath(),
            g.rect(
              _ + X + tt.left,
              w + X + tt.top,
              P - $ - tt.width,
              E - $ - tt.height
            ),
            g.clip(),
            Et(g, pt, B),
            g.restore();
        }
        resolveElementProperties(g, _) {
          return pe(g, _);
        }
      }
      function ce(m, g, _, w) {
        const { x: P, x2: E, width: R, options: B } = m,
          { xAdjust: $, borderWidth: X } = B.label;
        return Fi(
          { start: P, end: E, size: R },
          {
            position: _.x,
            padding: { start: w.left, end: w.right },
            adjust: $,
            borderWidth: X,
            size: g.width,
          }
        );
      }
      function nn(m, g, _, w) {
        const { y: P, y2: E, height: R, options: B } = m,
          { yAdjust: $, borderWidth: X } = B.label;
        return Fi(
          { start: P, end: E, size: R },
          {
            position: _.y,
            padding: { start: w.top, end: w.bottom },
            adjust: $,
            borderWidth: X,
            size: g.height,
          }
        );
      }
      function Fi(m, g) {
        const { start: _, end: w } = m,
          {
            position: P,
            padding: { start: E, end: R },
            adjust: B,
            borderWidth: $,
          } = g;
        return _ + $ / 2 + B + E + Rt(w - $ - _ - E - R - g.size, P);
      }
      (Ce.id = "boxAnnotation"),
        (Ce.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          cornerRadius: void 0,
          display: !0,
          label: {
            borderWidth: void 0,
            color: "black",
            content: null,
            drawTime: void 0,
            enabled: !1,
            font: {
              family: void 0,
              lineHeight: void 0,
              size: void 0,
              style: void 0,
              weight: "bold",
            },
            height: void 0,
            padding: 6,
            position: "center",
            textAlign: "start",
            xAdjust: 0,
            yAdjust: 0,
            width: void 0,
          },
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
        }),
        (Ce.defaultRoutes = { borderColor: "color", backgroundColor: "color" }),
        (Ce.descriptors = { label: { _fallback: !0 } });
      const li = (m, g, _) => ({
          x: m.x + _ * (g.x - m.x),
          y: m.y + _ * (g.y - m.y),
        }),
        Te = (m, g, _) => li(g, _, Math.abs((m - g.y) / (_.y - g.y))).x,
        Si = (m, g, _) => li(g, _, Math.abs((m - g.x) / (_.x - g.x))).y,
        Ft = (m) => m * m,
        Ee = 0.001;
      function qt(
        { x: m, y: g, x2: _, y2: w },
        { top: P, right: E, bottom: R, left: B }
      ) {
        return !(
          (m < B && _ < B) ||
          (m > E && _ > E) ||
          (g < P && w < P) ||
          (g > R && w > R)
        );
      }
      function ji({ x: m, y: g }, _, { top: w, right: P, bottom: E, left: R }) {
        return (
          m < R && ((g = Si(R, { x: m, y: g }, _)), (m = R)),
          m > P && ((g = Si(P, { x: m, y: g }, _)), (m = P)),
          g < w && ((m = Te(w, { x: m, y: g }, _)), (g = w)),
          g > E && ((m = Te(E, { x: m, y: g }, _)), (g = E)),
          { x: m, y: g }
        );
      }
      let te = (() => {
        class m extends d.W_ {
          intersects(_, w, P = Ee, E) {
            const {
                x: R,
                y: B,
                x2: $,
                y2: X,
              } = this.getProps(["x", "y", "x2", "y2"], E),
              et = $ - R,
              tt = X - B,
              lt = Ft(et) + Ft(tt),
              pt = 0 === lt ? -1 : ((_ - R) * et + (w - B) * tt) / lt;
            let vt, Lt;
            return (
              pt < 0
                ? ((vt = R), (Lt = B))
                : pt > 1
                ? ((vt = $), (Lt = X))
                : ((vt = R + pt * et), (Lt = B + pt * tt)),
              Ft(_ - vt) + Ft(w - Lt) <= P
            );
          }
          labelIsVisible(_, w) {
            const P = this.options.label;
            return (
              !(!P || !P.enabled) &&
              (!w || qt(this.getProps(["x", "y", "x2", "y2"], _), w))
            );
          }
          isOnLabel(_, w, P) {
            if (!this.labelIsVisible(P)) return !1;
            const {
                labelX: E,
                labelY: R,
                labelWidth: B,
                labelHeight: $,
                labelRotation: X,
              } = this.getProps(
                [
                  "labelX",
                  "labelY",
                  "labelWidth",
                  "labelHeight",
                  "labelRotation",
                ],
                P
              ),
              { x: et, y: tt } = (function Vt(m, g, _) {
                const w = Math.cos(_),
                  P = Math.sin(_),
                  E = g.x,
                  R = g.y;
                return {
                  x: E + w * (m.x - E) - P * (m.y - R),
                  y: R + P * (m.x - E) + w * (m.y - R),
                };
              })({ x: _, y: w }, { x: E, y: R }, -X),
              lt = this.options.label.borderWidth / 2 || 0,
              pt = B / 2 + lt,
              vt = $ / 2 + lt;
            return (
              et >= E - pt - Ee &&
              et <= E + pt + Ee &&
              tt >= R - vt - Ee &&
              tt <= R + vt + Ee
            );
          }
          inRange(_, w, P) {
            const E = Ft(this.options.borderWidth / 2);
            return this.intersects(_, w, E, P) || this.isOnLabel(_, w, P);
          }
          getCenterPoint() {
            return { x: (this.x2 + this.x) / 2, y: (this.y2 + this.y) / 2 };
          }
          draw(_) {
            const { x: w, y: P, x2: E, y2: R, options: B } = this;
            if ((_.save(), !bt(_, B))) return _.restore();
            dt(_, B);
            const $ = Math.atan2(R - P, E - w),
              X = Math.sqrt(Math.pow(E - w, 2) + Math.pow(R - P, 2)),
              {
                startOpts: et,
                endOpts: tt,
                startAdjust: lt,
                endAdjust: pt,
              } = (function Ni(m) {
                const g = m.options,
                  _ = g.arrowHeads && g.arrowHeads.start,
                  w = g.arrowHeads && g.arrowHeads.end;
                return {
                  startOpts: _,
                  endOpts: w,
                  startAdjust: oe(m, _),
                  endAdjust: oe(m, w),
                };
              })(this);
            _.translate(w, P),
              _.rotate($),
              _.beginPath(),
              _.moveTo(0 + lt, 0),
              _.lineTo(X - pt, 0),
              (_.shadowColor = B.borderShadowColor),
              _.stroke(),
              Ge(_, 0, lt, et),
              Ge(_, X, -pt, tt),
              _.restore();
          }
          drawLabel(_, w) {
            if (!this.labelIsVisible(!1, w)) return;
            const {
              labelX: P,
              labelY: E,
              labelWidth: R,
              labelHeight: B,
              labelRotation: $,
              labelPadding: X,
              labelTextSize: et,
              options: { label: tt },
            } = this;
            _.save(),
              _.translate(P, E),
              _.rotate($),
              at(_, { x: -R / 2, y: -B / 2, width: R, height: B }, tt),
              Et(
                _,
                {
                  x: -R / 2 + X.left + tt.borderWidth / 2,
                  y: -B / 2 + X.top + tt.borderWidth / 2,
                  width: et.width,
                  height: et.height,
                },
                tt
              ),
              _.restore();
          }
          resolveElementProperties(_, w) {
            const P = _.scales[w.scaleID];
            let X,
              et,
              { top: E, left: R, bottom: B, right: $ } = _.chartArea;
            if (P)
              (X = Bt(P, w.value, NaN)),
                (et = Bt(P, w.endValue, X)),
                P.isHorizontal() ? ((R = X), ($ = et)) : ((E = X), (B = et));
            else {
              const vt = _.scales[w.xScaleID],
                Lt = _.scales[w.yScaleID];
              vt && ((R = Bt(vt, w.xMin, R)), ($ = Bt(vt, w.xMax, $))),
                Lt && ((E = Bt(Lt, w.yMin, E)), (B = Bt(Lt, w.yMax, B)));
            }
            const lt = qt({ x: R, y: E, x2: $, y2: B }, _.chartArea)
                ? (function Ci(m, g, _) {
                    const { x: w, y: P } = ji(m, g, _),
                      { x: E, y: R } = ji(g, m, _);
                    return {
                      x: w,
                      y: P,
                      x2: E,
                      y2: R,
                      width: Math.abs(E - w),
                      height: Math.abs(R - P),
                    };
                  })({ x: R, y: E }, { x: $, y: B }, _.chartArea)
                : {
                    x: R,
                    y: E,
                    x2: $,
                    y2: B,
                    width: Math.abs($ - R),
                    height: Math.abs(B - E),
                  },
              pt = w.label;
            return pt && pt.content
              ? (function zi(m, g, _) {
                  const {
                      padding: w,
                      xPadding: P,
                      yPadding: E,
                      borderWidth: R,
                    } = _,
                    B = (function Xt(m, g, _) {
                      let w = m;
                      return (
                        (g || _) && (w = { x: g || 6, y: _ || 6 }), (0, U.oY)(w)
                      );
                    })(w, P, E),
                    $ = Dt(g.ctx, _),
                    tt = (function Xe(m, g, _, w) {
                      const { width: P, height: E, padding: R } = _,
                        { xAdjust: B, yAdjust: $ } = g,
                        X = { x: m.x, y: m.y },
                        et = { x: m.x2, y: m.y2 },
                        tt =
                          "auto" === g.rotation
                            ? (function Ue(m) {
                                const { x: g, y: _, x2: w, y2: P } = m,
                                  E = Math.atan2(P - _, w - g);
                                return E > U.PI / 2
                                  ? E - U.PI
                                  : E < U.PI / -2
                                  ? E + U.PI
                                  : E;
                              })(m)
                            : (0, U.Yr)(g.rotation),
                        lt = (function Pi(m, g, _) {
                          const w = Math.cos(_),
                            P = Math.sin(_);
                          return {
                            w: Math.abs(m * w) + Math.abs(g * P),
                            h: Math.abs(m * P) + Math.abs(g * w),
                          };
                        })(P, E, tt),
                        pt = (function Wi(m, g, _, w) {
                          let P;
                          const E = (function Hi(m, g) {
                            const { x: _, x2: w, y: P, y2: E } = m,
                              R = Math.min(P, E) - g.top,
                              B = Math.min(_, w) - g.left,
                              $ = g.bottom - Math.max(P, E),
                              X = g.right - Math.max(_, w);
                            return {
                              x: Math.min(B, X),
                              y: Math.min(R, $),
                              dx: B <= X ? 1 : -1,
                              dy: R <= $ ? 1 : -1,
                            };
                          })(m, w);
                          return (
                            (P =
                              "start" === g.position
                                ? Ke({ w: m.x2 - m.x, h: m.y2 - m.y }, _, 0, E)
                                : "end" === g.position
                                ? 1 -
                                  Ke({ w: m.x - m.x2, h: m.y - m.y2 }, _, 0, E)
                                : Rt(1, g.position)),
                            P
                          );
                        })(m, g, { labelSize: lt, padding: R }, w),
                        vt = li(X, et, pt),
                        gi = {
                          size: lt.h,
                          min: w.top,
                          max: w.bottom,
                          padding: R.top,
                        };
                      return {
                        x:
                          Le(vt.x, {
                            size: lt.w,
                            min: w.left,
                            max: w.right,
                            padding: R.left,
                          }) + B,
                        y: Le(vt.y, gi) + $,
                        width: P,
                        height: E,
                        rotation: tt,
                      };
                    })(
                      m,
                      _,
                      {
                        width: $.width + B.width + R,
                        height: $.height + B.height + R,
                        padding: B,
                      },
                      g.chartArea
                    );
                  return (
                    (m.labelX = tt.x),
                    (m.labelY = tt.y),
                    (m.labelWidth = tt.width),
                    (m.labelHeight = tt.height),
                    (m.labelRotation = tt.rotation),
                    (m.labelPadding = B),
                    (m.labelTextSize = $),
                    m
                  );
                })(lt, _, pt)
              : lt;
          }
        }
        return (m.id = "lineAnnotation"), m;
      })();
      const ki = {
        backgroundColor: void 0,
        backgroundShadowColor: void 0,
        borderColor: void 0,
        borderDash: void 0,
        borderDashOffset: void 0,
        borderShadowColor: void 0,
        borderWidth: void 0,
        enabled: void 0,
        fill: void 0,
        length: void 0,
        shadowBlur: void 0,
        shadowOffsetX: void 0,
        shadowOffsetY: void 0,
        width: void 0,
      };
      function Ke(m, g, _, w) {
        const { labelSize: P, padding: E } = g,
          R = m.w * w.dx,
          B = m.h * w.dy;
        return fe(
          Math.max(
            R > 0 && (P.w / 2 + E.left - w.x) / R,
            B > 0 && (P.h / 2 + E.top - w.y) / B
          ),
          0,
          0.25
        );
      }
      function Le(m, g) {
        const { size: _, min: w, max: P, padding: E } = g,
          R = _ / 2;
        return _ > P - w
          ? (P + w) / 2
          : (w >= m - E - R && (m = w + E + R),
            P <= m + E + R && (m = P - E - R),
            m);
      }
      function oe(m, g) {
        if (!g || !g.enabled) return 0;
        const { length: _, width: w } = g,
          P = m.options.borderWidth / 2;
        return Math.abs(Te(0, { x: _, y: w + P }, { x: 0, y: P }));
      }
      function Ge(m, g, _, w) {
        if (!w || !w.enabled) return;
        const {
            length: P,
            width: E,
            fill: R,
            backgroundColor: B,
            borderColor: $,
          } = w,
          X = Math.abs(g - P) + _;
        m.beginPath(),
          dt(m, w),
          bt(m, w),
          m.moveTo(X, -E),
          m.lineTo(g + _, 0),
          m.lineTo(X, E),
          !0 === R
            ? ((m.fillStyle = B || $),
              m.closePath(),
              m.fill(),
              (m.shadowColor = "transparent"))
            : (m.shadowColor = w.borderShadowColor),
          m.stroke();
      }
      (te.defaults = {
        adjustScaleRange: !0,
        arrowHeads: {
          enabled: !1,
          end: Object.assign({}, ki),
          fill: !1,
          length: 12,
          start: Object.assign({}, ki),
          width: 6,
        },
        borderDash: [],
        borderDashOffset: 0,
        borderShadowColor: "transparent",
        borderWidth: 2,
        display: !0,
        endValue: void 0,
        label: {
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderColor: "black",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 6,
          borderShadowColor: "transparent",
          borderWidth: 0,
          color: "#fff",
          content: null,
          cornerRadius: void 0,
          drawTime: void 0,
          enabled: !1,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: "bold",
          },
          height: void 0,
          padding: 6,
          position: "center",
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          width: void 0,
          xAdjust: 0,
          xPadding: void 0,
          yAdjust: 0,
          yPadding: void 0,
        },
        scaleID: void 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        value: void 0,
        xMax: void 0,
        xMin: void 0,
        xScaleID: "x",
        yMax: void 0,
        yMin: void 0,
        yScaleID: "y",
      }),
        (te.descriptors = {
          arrowHeads: {
            start: { _fallback: !0 },
            end: { _fallback: !0 },
            _fallback: !0,
          },
        }),
        (te.defaultRoutes = { borderColor: "color" });
      class me extends d.W_ {
        inRange(g, _, w) {
          return (function Je(m, g, _, w) {
            const { width: P, height: E } = g,
              R = g.getCenterPoint(!0),
              B = P / 2,
              $ = E / 2;
            if (B <= 0 || $ <= 0) return !1;
            const X = (0, U.Yr)(_ || 0),
              et = w / 2 || 0,
              tt = Math.cos(X),
              lt = Math.sin(X),
              pt = Math.pow(tt * (m.x - R.x) + lt * (m.y - R.y), 2),
              vt = Math.pow(lt * (m.x - R.x) - tt * (m.y - R.y), 2);
            return (
              pt / Math.pow(B + et, 2) + vt / Math.pow($ + et, 2) <= 1.0001
            );
          })(
            { x: g, y: _ },
            this.getProps(["width", "height"], w),
            this.options.rotation,
            this.options.borderWidth
          );
        }
        getCenterPoint(g) {
          return jt(this.getProps(["x", "y", "width", "height"], g));
        }
        draw(g) {
          const { width: _, height: w, options: P } = this,
            E = this.getCenterPoint();
          g.save(),
            (function gt(m, g, _) {
              if (_) {
                const w = g.getCenterPoint();
                m.translate(w.x, w.y),
                  m.rotate((0, U.Yr)(_)),
                  m.translate(-w.x, -w.y);
              }
            })(g, this, P.rotation),
            dt(g, this.options),
            g.beginPath(),
            (g.fillStyle = P.backgroundColor);
          const R = bt(g, P);
          g.ellipse(E.x, E.y, w / 2, _ / 2, U.PI / 2, 0, 2 * U.PI),
            g.fill(),
            R && ((g.shadowColor = P.borderShadowColor), g.stroke()),
            g.restore();
        }
        resolveElementProperties(g, _) {
          return pe(g, _);
        }
      }
      (me.id = "ellipseAnnotation"),
        (me.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
        }),
        (me.defaultRoutes = { borderColor: "color", backgroundColor: "color" });
      class Re extends d.W_ {
        inRange(g, _, w) {
          return le(
            g,
            _,
            this.getProps(["x", "y", "width", "height"], w),
            this.options.borderWidth
          );
        }
        getCenterPoint(g) {
          return jt(this.getProps(["x", "y", "width", "height"], g));
        }
        draw(g) {
          if (!this.options.content) return;
          const {
            labelX: _,
            labelY: w,
            labelWidth: P,
            labelHeight: E,
            options: R,
          } = this;
          (function Vi(m, g) {
            const { pointX: _, pointY: w, calloutPosition: P, options: E } = g;
            if (!P) return;
            const R = E.callout;
            if ((m.save(), m.beginPath(), !bt(m, R))) return m.restore();
            const { separatorStart: $, separatorEnd: X } = (function sn(m, g) {
                const { x: _, y: w, width: P, height: E } = m,
                  R = (function Ze(m, g) {
                    const { width: _, height: w, options: P } = m,
                      E = P.callout.margin + P.borderWidth / 2;
                    return "right" === g ? _ + E : "bottom" === g ? w + E : -E;
                  })(m, g);
                let B, $;
                return (
                  "left" === g || "right" === g
                    ? ((B = { x: _ + R, y: w }), ($ = { x: B.x, y: B.y + E }))
                    : ((B = { x: _, y: w + R }), ($ = { x: B.x + P, y: B.y })),
                  { separatorStart: B, separatorEnd: $ }
                );
              })(g, P),
              { sideStart: et, sideEnd: tt } = (function Ie(m, g, _) {
                const { y: w, width: P, height: E, options: R } = m,
                  B = R.callout.start,
                  $ = (function ci(m, g) {
                    const _ = g.side;
                    return "left" === m || "top" === m ? -_ : _;
                  })(g, R.callout);
                let X, et;
                return (
                  "left" === g || "right" === g
                    ? ((X = { x: _.x, y: w + Me(E, B) }),
                      (et = { x: X.x + $, y: X.y }))
                    : ((X = { x: _.x + Me(P, B), y: _.y }),
                      (et = { x: X.x, y: X.y + $ })),
                  { sideStart: X, sideEnd: et }
                );
              })(g, P, $);
            (R.margin > 0 || 0 === E.borderWidth) &&
              (m.moveTo($.x, $.y), m.lineTo(X.x, X.y)),
              m.moveTo(et.x, et.y),
              m.lineTo(tt.x, tt.y),
              m.lineTo(_, w),
              m.stroke(),
              m.restore();
          })(g, this),
            at(g, this, R),
            Et(g, { x: _, y: w, width: P, height: E }, R);
        }
        resolveElementProperties(g, _) {
          const w = xt(_) ? ai(g, _) : jt(pe(g, _)),
            P = (0, U.oY)(_.padding),
            E = Dt(g.ctx, _),
            R = (function Qe(m, g, _, w) {
              const P = g.width + w.width + _.borderWidth,
                E = g.height + w.height + _.borderWidth,
                R = It(_.position);
              return {
                x: Oi(m.x, P, _.xAdjust, R.x),
                y: Oi(m.y, E, _.yAdjust, R.y),
                width: P,
                height: E,
              };
            })(w, E, _, P),
            B = _.borderWidth / 2,
            $ = co(lo({ pointX: w.x, pointY: w.y }, R), {
              labelX: R.x + P.left + B,
              labelY: R.y + P.top + B,
              labelWidth: E.width,
              labelHeight: E.height,
            });
          return (
            ($.calloutPosition =
              _.callout.enabled &&
              (function Yi(m, g) {
                const _ = g.position;
                return "left" === _ ||
                  "right" === _ ||
                  "top" === _ ||
                  "bottom" === _
                  ? _
                  : (function At(m, g) {
                      const {
                          x: _,
                          y: w,
                          width: P,
                          height: E,
                          pointX: R,
                          pointY: B,
                        } = m,
                        { margin: $, side: X } = g,
                        et = $ + X;
                      return R < _ - et
                        ? "left"
                        : R > _ + P + et
                        ? "right"
                        : B < w - et
                        ? "top"
                        : B > w + E + et
                        ? "bottom"
                        : void 0;
                    })(m, g);
              })($, _.callout)),
            $
          );
        }
      }
      function Oi(m, g, _ = 0, w) {
        return m - Rt(g, w) + _;
      }
      (Re.id = "labelAnnotation"),
        (Re.defaults = {
          adjustScaleRange: !0,
          backgroundColor: "transparent",
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderRadius: 0,
          borderShadowColor: "transparent",
          borderWidth: 0,
          callout: {
            borderCapStyle: "butt",
            borderColor: void 0,
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 1,
            enabled: !1,
            margin: 5,
            position: "auto",
            side: 5,
            start: "50%",
          },
          color: "black",
          content: null,
          display: !0,
          font: {
            family: void 0,
            lineHeight: void 0,
            size: void 0,
            style: void 0,
            weight: void 0,
          },
          height: void 0,
          padding: 6,
          position: "center",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          textAlign: "center",
          width: void 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (Re.defaultRoutes = { borderColor: "color" });
      class ke extends d.W_ {
        inRange(g, _, w) {
          const { width: P } = this.getProps(["width"], w);
          return (function ri(m, g, _, w) {
            if (!m || !g || _ <= 0) return !1;
            const P = w / 2 || 0;
            return (
              Math.pow(m.x - g.x, 2) + Math.pow(m.y - g.y, 2) <=
              Math.pow(_ + P, 2)
            );
          })(
            { x: g, y: _ },
            this.getCenterPoint(w),
            P / 2,
            this.options.borderWidth
          );
        }
        getCenterPoint(g) {
          return ve(this, g);
        }
        draw(g) {
          const _ = this.options,
            w = _.borderWidth;
          if (_.radius < 0.1) return;
          g.save(), (g.fillStyle = _.backgroundColor), dt(g, _);
          const P = bt(g, _);
          (_.borderWidth = 0),
            (0, U.Qd)(g, _, this.x, this.y),
            P &&
              !ot(_.pointStyle) &&
              ((g.shadowColor = _.borderShadowColor), g.stroke()),
            g.restore(),
            (_.borderWidth = w);
        }
        resolveElementProperties(g, _) {
          return $e(g, _);
        }
      }
      (ke.id = "pointAnnotation"),
        (ke.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderDash: [],
          borderDashOffset: 0,
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          pointStyle: "circle",
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (ke.defaultRoutes = { borderColor: "color", backgroundColor: "color" });
      class Be extends d.W_ {
        inRange(g, _, w) {
          return (
            this.options.radius >= 0.1 &&
            this.elements.length > 1 &&
            (function hi(m, g, _, w) {
              let P = !1,
                E = m[m.length - 1].getProps(["bX", "bY"], w);
              for (const R of m) {
                const B = R.getProps(["bX", "bY"], w);
                B.bY > _ != E.bY > _ &&
                  g < ((E.bX - B.bX) * (_ - B.bY)) / (E.bY - B.bY) + B.bX &&
                  (P = !P),
                  (E = B);
              }
              return P;
            })(this.elements, g, _, w)
          );
        }
        getCenterPoint(g) {
          return ve(this, g);
        }
        draw(g) {
          const { elements: _, options: w } = this;
          g.save(), g.beginPath(), (g.fillStyle = w.backgroundColor), dt(g, w);
          const P = bt(g, w);
          let E = !0;
          for (const R of _)
            E ? (g.moveTo(R.x, R.y), (E = !1)) : g.lineTo(R.x, R.y);
          g.closePath(),
            g.fill(),
            P && ((g.shadowColor = w.borderShadowColor), g.stroke()),
            g.restore();
        }
        resolveElementProperties(g, _) {
          const { x: w, y: P, width: E, height: R } = $e(g, _),
            { sides: B, radius: $, rotation: X, borderWidth: et } = _,
            tt = et / 2,
            lt = [],
            pt = (2 * U.PI) / B;
          let vt = X * U.eT;
          for (let Lt = 0; Lt < B; Lt++, vt += pt) {
            const gi = Math.sin(vt),
              pi = Math.cos(vt);
            lt.push({
              type: "point",
              optionScope: "point",
              properties: {
                x: w + gi * $,
                y: P - pi * $,
                bX: w + gi * ($ + tt),
                bY: P - pi * ($ + tt),
              },
            });
          }
          return {
            x: w,
            y: P,
            width: E,
            height: R,
            elements: lt,
            initProperties: { x: w, y: P },
          };
        }
      }
      (Be.id = "polygonAnnotation"),
        (Be.defaults = {
          adjustScaleRange: !0,
          backgroundShadowColor: "transparent",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderShadowColor: "transparent",
          borderWidth: 1,
          display: !0,
          point: { radius: 0 },
          radius: 10,
          rotation: 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          sides: 3,
          xAdjust: 0,
          xMax: void 0,
          xMin: void 0,
          xScaleID: "x",
          xValue: void 0,
          yAdjust: 0,
          yMax: void 0,
          yMin: void 0,
          yScaleID: "y",
          yValue: void 0,
        }),
        (Be.defaultRoutes = { borderColor: "color", backgroundColor: "color" });
      const be = {
        box: Ce,
        ellipse: me,
        label: Re,
        line: te,
        point: ke,
        polygon: Be,
      };
      Object.keys(be).forEach((m) => {
        d.ce.describe(`elements.${be[m].id}`, {
          _fallback: "plugins.annotation",
        });
      });
      const he = new Map();
      var rn = {
        id: "annotation",
        version: "1.3.1",
        afterRegister() {
          d.kL.register(be),
            (function Bi(m, g, _, w = !0) {
              const P = _.split(".");
              let E = 0;
              for (const R of g.split(".")) {
                const B = P[E++];
                if (parseInt(R, 10) < parseInt(B, 10)) break;
                if (Mi(B, R)) {
                  if (w)
                    throw new Error(
                      `${m} v${_} is not supported. v${g} or newer is required.`
                    );
                  return !1;
                }
              }
              return !0;
            })("chart.js", "3.7", d.kL.version, !1) ||
              ($t.warn(
                "chartjs-plugin-annotation has known issues with chart.js versions prior to 3.7, please consider upgrading."
              ),
              d.kL.defaults.set("elements.lineAnnotation", {
                callout: {},
                font: {},
                padding: 6,
              }));
        },
        afterUnregister() {
          d.kL.unregister(be);
        },
        beforeInit(m) {
          he.set(m, {
            annotations: [],
            elements: [],
            visibleElements: [],
            listeners: {},
            listened: !1,
            moveListened: !1,
          });
        },
        beforeUpdate(m, g, _) {
          const P = (he.get(m).annotations = []);
          let E = _.annotations;
          (0, U.Kn)(E)
            ? Object.keys(E).forEach((R) => {
                const B = E[R];
                (0, U.Kn)(B) && ((B.id = R), P.push(B));
              })
            : (0, U.kJ)(E) && P.push(...E),
            (function Tt(m, g) {
              for (const _ of m) Ye(_, g);
            })(P, m.scales);
        },
        afterDataLimits(m, g) {
          const _ = he.get(m);
          !(function De(m, g, _) {
            const w = (function ae(m, g) {
              const _ = m.axis,
                w = m.id,
                P = _ + "ScaleID",
                E = {
                  min: (0, U.Be)(m.min, Number.NEGATIVE_INFINITY),
                  max: (0, U.Be)(m.max, Number.POSITIVE_INFINITY),
                };
              for (const R of g)
                R.scaleID === w
                  ? ye(R, m, ["value", "endValue"], E)
                  : R[P] === w &&
                    ye(R, m, [_ + "Min", _ + "Max", _ + "Value"], E);
              return E;
            })(g, _);
            let P = Zt(g, w, "min", "suggestedMin");
            (P = Zt(g, w, "max", "suggestedMax") || P),
              P &&
                "function" == typeof g.handleTickRangeOptions &&
                g.handleTickRangeOptions();
          })(
            0,
            g.scale,
            _.annotations.filter((w) => w.display && w.adjustScaleRange)
          );
        },
        afterUpdate(m, g, _) {
          const w = he.get(m);
          (function Qt(m, g, _) {
            (g.listened = !1),
              (g.moveListened = !1),
              ie.forEach((w) => {
                "function" == typeof _[w]
                  ? ((g.listened = !0), (g.listeners[w] = _[w]))
                  : (0, U.ri)(g.listeners[w]) && delete g.listeners[w];
              }),
              zt.forEach((w) => {
                "function" == typeof _[w] && (g.moveListened = !0);
              }),
              (!g.listened || !g.moveListened) &&
                g.annotations.forEach((w) => {
                  g.listened ||
                    Pt.forEach((P) => {
                      "function" == typeof w[P] && (g.listened = !0);
                    }),
                    g.moveListened ||
                      zt.forEach((P) => {
                        "function" == typeof w[P] &&
                          ((g.listened = !0), (g.moveListened = !0));
                      });
                });
          })(0, w, _),
            (function di(m, g, _, w) {
              const P = (function Ui(m, g, _) {
                  return "reset" === _ || "none" === _ || "resize" === _
                    ? $i
                    : new d.FK(m, g);
                })(m, _.animations, w),
                E = g.annotations,
                R = (function fi(m, g) {
                  const _ = g.length,
                    w = m.length;
                  return (
                    w < _
                      ? m.splice(w, 0, ...new Array(_ - w))
                      : w > _ && m.splice(_, w - _),
                    m
                  );
                })(g.elements, E);
              for (let B = 0; B < E.length; B++) {
                const $ = E[B],
                  X = re(R, B, $.type),
                  et = $.setContext(an(m, X, $)),
                  tt = X.resolveElementProperties(m, et);
                (tt.skip = isNaN(tt.x) || isNaN(tt.y)),
                  "elements" in tt && (je(X, tt, et, P), delete tt.elements),
                  (0, U.ri)(X.x) || Object.assign(X, tt),
                  (tt.options = ui(et)),
                  P.update(X, tt);
              }
            })(m, w, _, g.mode),
            (w.visibleElements = w.elements.filter(
              (P) => !P.skip && P.options.display
            ));
        },
        beforeDatasetsDraw(m, g, _) {
          ti(m, "beforeDatasetsDraw", _.clip);
        },
        afterDatasetsDraw(m, g, _) {
          ti(m, "afterDatasetsDraw", _.clip);
        },
        beforeDraw(m, g, _) {
          ti(m, "beforeDraw", _.clip);
        },
        afterDraw(m, g, _) {
          ti(m, "afterDraw", _.clip);
        },
        beforeEvent(m, g, _) {
          !(function xe(m, g, _) {
            if (m.listened)
              switch (g.type) {
                case "mousemove":
                case "mouseout":
                  !(function ne(m, g) {
                    if (!m.moveListened) return;
                    let _;
                    "mousemove" === g.type && (_ = Ot(m.elements, g));
                    const w = m.hovered;
                    (m.hovered = _),
                      (function yt(m, g, _) {
                        const { previous: w, element: P } = g;
                        w &&
                          w !== P &&
                          Ct(w.options.leave || m.listeners.leave, w, _),
                          P &&
                            P !== w &&
                            Ct(P.options.enter || m.listeners.enter, P, _);
                      })(m, { previous: w, element: _ }, g);
                  })(m, g);
                  break;
                case "click":
                  !(function Ut(m, g, _) {
                    const w = m.listeners,
                      P = Ot(m.elements, g);
                    if (P) {
                      const E = P.options,
                        R = E.dblclick || w.dblclick,
                        B = E.click || w.click;
                      P.clickTimeout
                        ? (clearTimeout(P.clickTimeout),
                          delete P.clickTimeout,
                          Ct(R, P, g))
                        : R
                        ? (P.clickTimeout = setTimeout(() => {
                            delete P.clickTimeout, Ct(B, P, g);
                          }, _.dblClickSpeed))
                        : Ct(B, P, g);
                    }
                  })(m, g, _);
              }
          })(he.get(m), g.event, _);
        },
        destroy(m) {
          he.delete(m);
        },
        _getState: (m) => he.get(m),
        defaults: {
          animations: {
            numbers: {
              properties: [
                "x",
                "y",
                "x2",
                "y2",
                "width",
                "height",
                "pointX",
                "pointY",
                "labelX",
                "labelY",
                "labelWidth",
                "labelHeight",
                "radius",
              ],
              type: "number",
            },
          },
          clip: !0,
          dblClickSpeed: 350,
          drawTime: "afterDatasetsDraw",
          label: { drawTime: null },
        },
        descriptors: {
          _indexable: !1,
          _scriptable: (m) => !ie.includes(m),
          annotations: {
            _allKeys: !1,
            _fallback: (m, g) => `elements.${be[Fe(g.type)].id}`,
          },
        },
        additionalOptionScopes: [""],
      };
      const $i = { update: Object.assign };
      function Fe(m = "line") {
        return be[m]
          ? m
          : ($t.warn(`Unknown annotation type: '${m}', defaulting to 'line'`),
            "line");
      }
      function je(m, { elements: g, initProperties: _ }, w, P) {
        const E = m.elements || (m.elements = []);
        E.length = g.length;
        for (let R = 0; R < g.length; R++) {
          const B = g[R],
            $ = B.properties,
            X = re(E, R, B.type, _),
            et = w[B.optionScope].override(B);
          ($.options = ui(et)), P.update(X, $);
        }
      }
      function re(m, g, _, w) {
        const P = be[Fe(_)];
        let E = m[g];
        return (
          (!E || !(E instanceof P)) &&
            ((E = m[g] = new P()), (0, U.Kn)(w) && Object.assign(E, w)),
          E
        );
      }
      function ui(m) {
        const g = be[Fe(m.type)],
          _ = {};
        (_.id = m.id),
          (_.type = m.type),
          (_.drawTime = m.drawTime),
          Object.assign(_, qe(m, g.defaults), qe(m, g.defaultRoutes));
        for (const w of ie) _[w] = m[w];
        return _;
      }
      function qe(m, g) {
        const _ = {};
        for (const w of Object.keys(g)) {
          const P = g[w],
            E = m[w];
          _[w] = (0, U.Kn)(P) ? qe(E, P) : E;
        }
        return _;
      }
      function an(m, g, _) {
        return (
          g.$context ||
          (g.$context = Object.assign(Object.create(m.getContext()), {
            element: g,
            id: _.id,
            type: "annotation",
          }))
        );
      }
      function ti(m, g, _) {
        const { ctx: w, chartArea: P } = m,
          { visibleElements: E } = he.get(m);
        _ && (0, U.i7)(w, P),
          _e(w, E, g),
          (function ln(m, g, _) {
            for (const w of g) (0, U.kJ)(w.elements) && _e(m, w.elements, _);
          })(w, E, g),
          _ && (0, U.p2)(w),
          E.forEach((R) => {
            if (!("drawLabel" in R)) return;
            const B = R.options.label;
            B &&
              B.enabled &&
              B.content &&
              (B.drawTime || R.options.drawTime) === g &&
              R.drawLabel(w, P);
          });
      }
      function _e(m, g, _) {
        for (const w of g) w.options.drawTime === _ && w.draw(m);
      }
    },
    85125: (ee, Mt, q) => {
      q.d(Mt, { jh: () => Eo, vQ: () => Lo });
      var d = q(51109),
        U = q(5372),
        $t = q(35878);
      const Qt = function ie(y, D) {
          return y === D || (y != y && D != D);
        },
        ne = function xe(y, D) {
          for (var A = y.length; A--; ) if (Qt(y[A][0], D)) return A;
          return -1;
        };
      var Ut = Array.prototype.splice;
      function ae(y) {
        var D = -1,
          A = null == y ? 0 : y.length;
        for (this.clear(); ++D < A; ) {
          var Y = y[D];
          this.set(Y[0], Y[1]);
        }
      }
      (ae.prototype.clear = function Pt() {
        (this.__data__ = []), (this.size = 0);
      }),
        (ae.prototype.delete = function Ct(y) {
          var D = this.__data__,
            A = ne(D, y);
          return !(
            A < 0 ||
            (A == D.length - 1 ? D.pop() : Ut.call(D, A, 1), --this.size, 0)
          );
        }),
        (ae.prototype.get = function De(y) {
          var D = this.__data__,
            A = ne(D, y);
          return A < 0 ? void 0 : D[A][1];
        }),
        (ae.prototype.has = function Zt(y) {
          return ne(this.__data__, y) > -1;
        }),
        (ae.prototype.set = function Ye(y, D) {
          var A = this.__data__,
            Y = ne(A, y);
          return Y < 0 ? (++this.size, A.push([y, D])) : (A[Y][1] = D), this;
        });
      const ye = ae,
        Rt =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global;
      var Me =
        "object" == typeof self && self && self.Object === Object && self;
      const It = Rt || Me || Function("return this")();
      var xt = It.Symbol,
        ot = Object.prototype,
        gt = ot.hasOwnProperty,
        bt = ot.toString,
        dt = xt ? xt.toStringTag : void 0;
      var jt = Object.prototype.toString;
      var pe = xt ? xt.toStringTag : void 0;
      const $e = function Ae(y) {
          return null == y
            ? void 0 === y
              ? "[object Undefined]"
              : "[object Null]"
            : pe && pe in Object(y)
            ? (function Dt(y) {
                var D = gt.call(y, dt),
                  A = y[dt];
                try {
                  y[dt] = void 0;
                  var Y = !0;
                } catch (rt) {}
                var st = bt.call(y);
                return Y && (D ? (y[dt] = A) : delete y[dt]), st;
              })(y)
            : (function Vt(y) {
                return jt.call(y);
              })(y);
        },
        ce = function Ce(y) {
          var D = typeof y;
          return null != y && ("object" == D || "function" == D);
        },
        Ft = function Si(y) {
          if (!ce(y)) return !1;
          var D = $e(y);
          return (
            "[object Function]" == D ||
            "[object GeneratorFunction]" == D ||
            "[object AsyncFunction]" == D ||
            "[object Proxy]" == D
          );
        };
      var y,
        Ee = It["__core-js_shared__"],
        ji = (y = /[^.]+$/.exec((Ee && Ee.keys && Ee.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + y
          : "";
      var zi = Function.prototype.toString;
      var Pi = /^\[object .+?Constructor\]$/,
        Ni = RegExp(
          "^" +
            Function.prototype.toString
              .call(Object.prototype.hasOwnProperty)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      const Ge = function oe(y) {
          return (
            !(
              !ce(y) ||
              (function Ci(y) {
                return !!ji && ji in y;
              })(y)
            ) &&
            (Ft(y) ? Ni : Pi).test(
              (function Ue(y) {
                if (null != y) {
                  try {
                    return zi.call(y);
                  } catch (D) {}
                  try {
                    return y + "";
                  } catch (D) {}
                }
                return "";
              })(y)
            )
          );
        },
        Qe = function Re(y, D) {
          var A = (function me(y, D) {
            return null == y ? void 0 : y[D];
          })(y, D);
          return Ge(A) ? A : void 0;
        },
        Vi = Qe(It, "Map"),
        Ze = Qe(Object, "create");
      var hi = Object.prototype.hasOwnProperty;
      var he = Object.prototype.hasOwnProperty;
      function je(y) {
        var D = -1,
          A = null == y ? 0 : y.length;
        for (this.clear(); ++D < A; ) {
          var Y = y[D];
          this.set(Y[0], Y[1]);
        }
      }
      (je.prototype.clear = function Ie() {
        (this.__data__ = Ze ? Ze(null) : {}), (this.size = 0);
      }),
        (je.prototype.delete = function Yi(y) {
          var D = this.has(y) && delete this.__data__[y];
          return (this.size -= D ? 1 : 0), D;
        }),
        (je.prototype.get = function be(y) {
          var D = this.__data__;
          if (Ze) {
            var A = D[y];
            return "__lodash_hash_undefined__" === A ? void 0 : A;
          }
          return hi.call(D, y) ? D[y] : void 0;
        }),
        (je.prototype.has = function rn(y) {
          var D = this.__data__;
          return Ze ? void 0 !== D[y] : he.call(D, y);
        }),
        (je.prototype.set = function Fe(y, D) {
          var A = this.__data__;
          return (
            (this.size += this.has(y) ? 0 : 1),
            (A[y] = Ze && void 0 === D ? "__lodash_hash_undefined__" : D),
            this
          );
        });
      const re = je,
        _e = function ti(y, D) {
          var A = y.__data__;
          return (function an(y) {
            var D = typeof y;
            return "string" == D ||
              "number" == D ||
              "symbol" == D ||
              "boolean" == D
              ? "__proto__" !== y
              : null === y;
          })(D)
            ? A["string" == typeof D ? "string" : "hash"]
            : A.map;
        };
      function B(y) {
        var D = -1,
          A = null == y ? 0 : y.length;
        for (this.clear(); ++D < A; ) {
          var Y = y[D];
          this.set(Y[0], Y[1]);
        }
      }
      (B.prototype.clear = function ui() {
        (this.size = 0),
          (this.__data__ = {
            hash: new re(),
            map: new (Vi || ye)(),
            string: new re(),
          });
      }),
        (B.prototype.delete = function ln(y) {
          var D = _e(this, y).delete(y);
          return (this.size -= D ? 1 : 0), D;
        }),
        (B.prototype.get = function g(y) {
          return _e(this, y).get(y);
        }),
        (B.prototype.has = function w(y) {
          return _e(this, y).has(y);
        }),
        (B.prototype.set = function E(y, D) {
          var A = _e(this, y),
            Y = A.size;
          return A.set(y, D), (this.size += A.size == Y ? 0 : 1), this;
        });
      const $ = B;
      function lt(y) {
        var D = (this.__data__ = new ye(y));
        this.size = D.size;
      }
      (lt.prototype.clear = function fe() {
        (this.__data__ = new ye()), (this.size = 0);
      }),
        (lt.prototype.delete = function ri(y) {
          var D = this.__data__,
            A = D.delete(y);
          return (this.size = D.size), A;
        }),
        (lt.prototype.get = function ve(y) {
          return this.__data__.get(y);
        }),
        (lt.prototype.has = function Bi(y) {
          return this.__data__.has(y);
        }),
        (lt.prototype.set = function et(y, D) {
          var A = this.__data__;
          if (A instanceof ye) {
            var Y = A.__data__;
            if (!Vi || Y.length < 199)
              return Y.push([y, D]), (this.size = ++A.size), this;
            A = this.__data__ = new $(Y);
          }
          return A.set(y, D), (this.size = A.size), this;
        });
      const pt = lt;
      var vt = (function () {
        try {
          var y = Qe(Object, "defineProperty");
          return y({}, "", {}), y;
        } catch (D) {}
      })();
      const Lt = vt,
        pi = function gi(y, D, A) {
          "__proto__" == D && Lt
            ? Lt(y, D, {
                configurable: !0,
                enumerable: !0,
                value: A,
                writable: !0,
              })
            : (y[D] = A);
        },
        Xi = function Ai(y, D, A) {
          ((void 0 !== A && !Qt(y[D], A)) || (void 0 === A && !(D in y))) &&
            pi(y, D, A);
        };
      var ls = (function as(y) {
        return function (D, A, Y) {
          for (var st = -1, rt = Object(D), St = Y(D), ht = St.length; ht--; ) {
            var s = St[y ? ht : ++st];
            if (!1 === A(rt[s], s, rt)) break;
          }
          return D;
        };
      })();
      const cs = ls;
      var ze =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Ti =
          ze &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        hn = Ti && Ti.exports === ze ? It.Buffer : void 0,
        En = hn ? hn.allocUnsafe : void 0;
      const Ln = It.Uint8Array,
        un = function us(y, D) {
          var A = D
            ? (function Rn(y) {
                var D = new y.constructor(y.byteLength);
                return new Ln(D).set(new Ln(y)), D;
              })(y.buffer)
            : y.buffer;
          return new y.constructor(A, y.byteOffset, y.length);
        };
      var Bn = Object.create,
        fn = (function () {
          function y() {}
          return function (D) {
            if (!ce(D)) return {};
            if (Bn) return Bn(D);
            y.prototype = D;
            var A = new y();
            return (y.prototype = void 0), A;
          };
        })();
      const gs = fn;
      var Fn = (function Ki(y, D) {
        return function (A) {
          return y(D(A));
        };
      })(Object.getPrototypeOf, Object);
      const gn = Fn;
      var Gi = Object.prototype;
      const mi = function Li(y) {
          var D = y && y.constructor;
          return y === (("function" == typeof D && D.prototype) || Gi);
        },
        Ri = function zn(y) {
          return null != y && "object" == typeof y;
        },
        Ji = function pn(y) {
          return Ri(y) && "[object Arguments]" == $e(y);
        };
      var mn = Object.prototype,
        Wn = mn.hasOwnProperty,
        Hn = mn.propertyIsEnumerable,
        bn = Ji(
          (function () {
            return arguments;
          })()
        )
          ? Ji
          : function (y) {
              return Ri(y) && Wn.call(y, "callee") && !Hn.call(y, "callee");
            };
      const bi = bn,
        We = Array.isArray,
        Oe = function Vn(y) {
          return (
            "number" == typeof y &&
            y > -1 &&
            y % 1 == 0 &&
            y <= 9007199254740991
          );
        },
        _n = function Yn(y) {
          return null != y && Oe(y.length) && !Ft(y);
        };
      var yn =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Ii =
          yn &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        vn = Ii && Ii.exports === yn ? It.Buffer : void 0;
      const wn =
        (vn ? vn.isBuffer : void 0) ||
        function xn() {
          return !1;
        };
      var qi = Function.prototype.toString,
        vs = Object.prototype.hasOwnProperty,
        ws = qi.call(Object);
      var h = {};
      (h["[object Float32Array]"] =
        h["[object Float64Array]"] =
        h["[object Int8Array]"] =
        h["[object Int16Array]"] =
        h["[object Int32Array]"] =
        h["[object Uint8Array]"] =
        h["[object Uint8ClampedArray]"] =
        h["[object Uint16Array]"] =
        h["[object Uint32Array]"] =
          !0),
        (h["[object Arguments]"] =
          h["[object Array]"] =
          h["[object ArrayBuffer]"] =
          h["[object Boolean]"] =
          h["[object DataView]"] =
          h["[object Date]"] =
          h["[object Error]"] =
          h["[object Function]"] =
          h["[object Map]"] =
          h["[object Number]"] =
          h["[object Object]"] =
          h["[object RegExp]"] =
          h["[object Set]"] =
          h["[object String]"] =
          h["[object WeakMap]"] =
            !1);
      var C =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        L =
          C &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        z = L && L.exports === C && Rt.process,
        V = (function () {
          try {
            return (
              (L && L.require && L.require("util").types) ||
              (z && z.binding && z.binding("util"))
            );
          } catch (D) {}
        })(),
        J = V && V.isTypedArray;
      const kt = J
          ? (function v(y) {
              return function (D) {
                return y(D);
              };
            })(J)
          : function f(y) {
              return Ri(y) && Oe(y.length) && !!h[$e(y)];
            },
        Yt = function Kt(y, D) {
          if (
            ("constructor" !== D || "function" != typeof y[D]) &&
            "__proto__" != D
          )
            return y[D];
        };
      var ii = Object.prototype.hasOwnProperty;
      const Is = function yi(y, D, A) {
        var Y = y[D];
        (!ii.call(y, D) || !Qt(Y, A) || (void 0 === A && !(D in y))) &&
          pi(y, D, A);
      };
      var ho = /^(?:0|[1-9]\d*)$/;
      const ts = function $s(y, D) {
        var A = typeof y;
        return (
          !!(D = null == D ? 9007199254740991 : D) &&
          ("number" == A || ("symbol" != A && ho.test(y))) &&
          y > -1 &&
          y % 1 == 0 &&
          y < D
        );
      };
      var Us = Object.prototype.hasOwnProperty;
      const fo = function es(y, D) {
        var A = We(y),
          Y = !A && bi(y),
          st = !A && !Y && wn(y),
          rt = !A && !Y && !st && kt(y),
          St = A || Y || st || rt,
          ht = St
            ? (function qn(y, D) {
                for (var A = -1, Y = Array(y); ++A < y; ) Y[A] = D(A);
                return Y;
              })(y.length, String)
            : [],
          s = ht.length;
        for (var e in y)
          (D || Us.call(y, e)) &&
            (!St ||
              !(
                "length" == e ||
                (st && ("offset" == e || "parent" == e)) ||
                (rt &&
                  ("buffer" == e || "byteLength" == e || "byteOffset" == e)) ||
                ts(e, s)
              )) &&
            ht.push(e);
        return ht;
      };
      var go = Object.prototype.hasOwnProperty;
      const po = function Xs(y) {
          if (!ce(y))
            return (function On(y) {
              var D = [];
              if (null != y) for (var A in Object(y)) D.push(A);
              return D;
            })(y);
          var D = mi(y),
            A = [];
          for (var Y in y)
            ("constructor" == Y && (D || !go.call(y, Y))) || A.push(Y);
          return A;
        },
        Ks = function mo(y) {
          return _n(y) ? fo(y, !0) : po(y);
        },
        bo = function Gs(y) {
          return (function kn(y, D, A, Y) {
            var st = !A;
            A || (A = {});
            for (var rt = -1, St = D.length; ++rt < St; ) {
              var ht = D[rt],
                s = Y ? Y(A[ht], y[ht], ht, A, y) : void 0;
              void 0 === s && (s = y[ht]), st ? pi(A, ht, s) : Is(A, ht, s);
            }
            return A;
          })(y, Ks(y));
        },
        Js = function _o(y, D, A, Y, st, rt, St) {
          var ht = Yt(y, A),
            s = Yt(D, A),
            e = St.get(s);
          if (e) Xi(y, A, e);
          else {
            var t = rt ? rt(ht, s, A + "", y, D, St) : void 0,
              i = void 0 === t;
            if (i) {
              var n = We(s),
                o = !n && wn(s),
                r = !n && !o && kt(s);
              (t = s),
                n || o || r
                  ? We(ht)
                    ? (t = ht)
                    : (function Zi(y) {
                        return Ri(y) && _n(y);
                      })(ht)
                    ? (t = (function fs(y, D) {
                        var A = -1,
                          Y = y.length;
                        for (D || (D = Array(Y)); ++A < Y; ) D[A] = y[A];
                        return D;
                      })(ht))
                    : o
                    ? ((i = !1),
                      (t = (function hs(y, D) {
                        if (D) return y.slice();
                        var A = y.length,
                          Y = En ? En(A) : new y.constructor(A);
                        return y.copy(Y), Y;
                      })(s, !0)))
                    : r
                    ? ((i = !1), (t = un(s, !0)))
                    : (t = [])
                  : (function Ms(y) {
                      if (!Ri(y) || "[object Object]" != $e(y)) return !1;
                      var D = gn(y);
                      if (null === D) return !0;
                      var A = vs.call(D, "constructor") && D.constructor;
                      return (
                        "function" == typeof A &&
                        A instanceof A &&
                        qi.call(A) == ws
                      );
                    })(s) || bi(s)
                  ? ((t = ht),
                    bi(ht)
                      ? (t = bo(ht))
                      : (!ce(ht) || Ft(ht)) &&
                        (t = (function ps(y) {
                          return "function" != typeof y.constructor || mi(y)
                            ? {}
                            : gs(gn(y));
                        })(s)))
                  : (i = !1);
            }
            i && (St.set(s, t), st(t, s, Y, rt, St), St.delete(s)), Xi(y, A, t);
          }
        },
        Qs = function Dn(y, D, A, Y, st) {
          y !== D &&
            cs(
              D,
              function (rt, St) {
                if ((st || (st = new pt()), ce(rt))) Js(y, D, St, A, Dn, Y, st);
                else {
                  var ht = Y ? Y(Yt(y, St), rt, St + "", y, D, st) : void 0;
                  void 0 === ht && (ht = rt), Xi(y, St, ht);
                }
              },
              Ks
            );
        },
        Bs = function xo(y) {
          return y;
        },
        qs = function Zs(y, D, A) {
          switch (A.length) {
            case 0:
              return y.call(D);
            case 1:
              return y.call(D, A[0]);
            case 2:
              return y.call(D, A[0], A[1]);
            case 3:
              return y.call(D, A[0], A[1], A[2]);
          }
          return y.apply(D, A);
        };
      var to = Math.max;
      const An = function wo(y) {
        return function () {
          return y;
        };
      };
      var Mo = Lt
          ? function (y, D) {
              return Lt(y, "toString", {
                configurable: !0,
                enumerable: !1,
                value: An(D),
                writable: !0,
              });
            }
          : Bs,
        io = Date.now,
        Fs = (function So(y) {
          var D = 0,
            A = 0;
          return function () {
            var Y = io(),
              st = 16 - (Y - A);
            if (((A = Y), st > 0)) {
              if (++D >= 800) return arguments[0];
            } else D = 0;
            return y.apply(void 0, arguments);
          };
        })(Mo);
      const Co = Fs,
        ko = function so(y, D) {
          return Co(
            (function yo(y, D, A) {
              return (
                (D = to(void 0 === D ? y.length - 1 : D, 0)),
                function () {
                  for (
                    var Y = arguments,
                      st = -1,
                      rt = to(Y.length - D, 0),
                      St = Array(rt);
                    ++st < rt;

                  )
                    St[st] = Y[D + st];
                  st = -1;
                  for (var ht = Array(D + 1); ++st < D; ) ht[st] = Y[st];
                  return (ht[D] = A(St)), qs(y, this, ht);
                }
              );
            })(y, D, Bs),
            y + ""
          );
        };
      var Ao = (function Do(y) {
        return ko(function (D, A) {
          var Y = -1,
            st = A.length,
            rt = st > 1 ? A[st - 1] : void 0,
            St = st > 2 ? A[2] : void 0;
          for (
            rt = y.length > 3 && "function" == typeof rt ? (st--, rt) : void 0,
              St &&
                (function Po(y, D, A) {
                  if (!ce(A)) return !1;
                  var Y = typeof D;
                  return (
                    !!("number" == Y
                      ? _n(A) && ts(D, A.length)
                      : "string" == Y && (D in A)) && Qt(A[D], y)
                  );
                })(A[0], A[1], St) &&
                ((rt = st < 3 ? void 0 : rt), (st = 1)),
              D = Object(D);
            ++Y < st;

          ) {
            var ht = A[Y];
            ht && y(D, ht, Y, rt);
          }
          return D;
        });
      })(function (y, D, A) {
        Qs(y, D, A);
      });
      const js = Ao;
      var To = q(76027);
      let ss = (() => {
          class y {
            constructor() {
              this.colorschemesOptions = new To.X(void 0);
            }
            setColorschemesOptions(A) {
              (this.pColorschemesOptions = A), this.colorschemesOptions.next(A);
            }
            getColorschemesOptions() {
              return this.pColorschemesOptions;
            }
          }
          return (
            (y.ɵfac = function (A) {
              return new (A || y)();
            }),
            (y.ɵprov = d.ɵɵdefineInjectable({
              token: y,
              factory: y.ɵfac,
              providedIn: "root",
            })),
            y
          );
        })(),
        Eo = (() => {
          class y {
            constructor(A, Y, st) {
              (this.element = A),
                (this.zone = Y),
                (this.themeService = st),
                (this.type = "bar"),
                (this.plugins = []),
                (this.chartClick = new d.EventEmitter()),
                (this.chartHover = new d.EventEmitter()),
                (this.subs = []),
                (this.ctx = A.nativeElement.getContext("2d")),
                this.subs.push(
                  this.themeService.colorschemesOptions
                    .pipe((0, $t.x)())
                    .subscribe((rt) => this.themeChanged(rt))
                );
            }
            ngOnChanges(A) {
              const Y = ["type"],
                st = Object.getOwnPropertyNames(A);
              if (
                st.some((rt) => Y.includes(rt)) ||
                st.every((rt) => A[rt].isFirstChange())
              )
                this.render();
              else {
                const rt = this.getChartConfiguration();
                this.chart &&
                  (Object.assign(this.chart.config.data, rt.data),
                  Object.assign(this.chart.config.plugins, rt.plugins),
                  Object.assign(this.chart.config.options, rt.options)),
                  this.update();
              }
            }
            ngOnDestroy() {
              this.chart && (this.chart.destroy(), (this.chart = void 0)),
                this.subs.forEach((A) => A.unsubscribe());
            }
            render() {
              return (
                this.chart && this.chart.destroy(),
                this.zone.runOutsideAngular(
                  () =>
                    (this.chart = new U.kL(
                      this.ctx,
                      this.getChartConfiguration()
                    ))
                )
              );
            }
            update(A) {
              this.chart &&
                this.zone.runOutsideAngular(() => {
                  var Y;
                  return null === (Y = this.chart) || void 0 === Y
                    ? void 0
                    : Y.update(A);
                });
            }
            hideDataset(A, Y) {
              this.chart &&
                ((this.chart.getDatasetMeta(A).hidden = Y), this.update());
            }
            isDatasetHidden(A) {
              var Y, st;
              return null ===
                (st =
                  null === (Y = this.chart) || void 0 === Y
                    ? void 0
                    : Y.getDatasetMeta(A)) || void 0 === st
                ? void 0
                : st.hidden;
            }
            toBase64Image() {
              var A;
              return null === (A = this.chart) || void 0 === A
                ? void 0
                : A.toBase64Image();
            }
            themeChanged(A) {
              (this.themeOverrides = A),
                this.chart &&
                  (Object.assign(
                    this.chart.config.options,
                    this.getChartOptions()
                  ),
                  this.update());
            }
            getChartOptions() {
              return js(
                {
                  onHover: (A, Y) => {
                    (Y && !Y.length) ||
                      this.chartHover.emit({ event: A, active: Y });
                  },
                  onClick: (A, Y) => {
                    this.chartClick.emit({ event: A, active: Y });
                  },
                },
                this.themeOverrides,
                this.options,
                { plugins: { legend: { display: this.legend } } }
              );
            }
            getChartConfiguration() {
              return {
                type: this.type,
                data: this.getChartData(),
                plugins: this.plugins,
                options: this.getChartOptions(),
              };
            }
            getChartData() {
              return this.data
                ? this.data
                : { labels: this.labels || [], datasets: this.datasets || [] };
            }
          }
          return (
            (y.ɵfac = function (A) {
              return new (A || y)(
                d.ɵɵdirectiveInject(d.ElementRef),
                d.ɵɵdirectiveInject(d.NgZone),
                d.ɵɵdirectiveInject(ss)
              );
            }),
            (y.ɵdir = d.ɵɵdefineDirective({
              type: y,
              selectors: [["canvas", "baseChart", ""]],
              inputs: {
                type: "type",
                legend: "legend",
                data: "data",
                options: "options",
                plugins: "plugins",
                labels: "labels",
                datasets: "datasets",
              },
              outputs: { chartClick: "chartClick", chartHover: "chartHover" },
              exportAs: ["base-chart"],
              features: [d.ɵɵNgOnChangesFeature],
            })),
            y
          );
        })();
      const en = [
          [255, 99, 132],
          [54, 162, 235],
          [255, 206, 86],
          [231, 233, 237],
          [75, 192, 192],
          [151, 187, 205],
          [220, 220, 220],
          [247, 70, 74],
          [70, 191, 189],
          [253, 180, 92],
          [148, 159, 177],
          [77, 83, 96],
        ],
        os = {
          datasets: {
            line: {
              backgroundColor: (y) => mt(Jt(y.datasetIndex), 0.4),
              borderColor: (y) => mt(Jt(y.datasetIndex), 1),
              pointBackgroundColor: (y) => mt(Jt(y.datasetIndex), 1),
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: (y) => mt(Jt(y.datasetIndex), 0.8),
            },
            bar: {
              backgroundColor: (y) => mt(Jt(y.datasetIndex), 0.6),
              borderColor: (y) => mt(Jt(y.datasetIndex), 1),
              hoverBackgroundColor: (y) => mt(Jt(y.datasetIndex), 0.8),
              hoverBorderColor: (y) => mt(Jt(y.datasetIndex), 1),
            },
            get radar() {
              return this.line;
            },
            doughnut: {
              backgroundColor: (y) => mt(Jt(y.dataIndex), 0.6),
              borderColor: "#fff",
              hoverBackgroundColor: (y) => mt(Jt(y.dataIndex), 1),
              hoverBorderColor: (y) => mt(Jt(y.dataIndex), 1),
            },
            get pie() {
              return this.doughnut;
            },
            polarArea: {
              backgroundColor: (y) => mt(Jt(y.dataIndex), 0.6),
              borderColor: (y) => mt(Jt(y.dataIndex), 1),
              hoverBackgroundColor: (y) => mt(Jt(y.dataIndex), 0.8),
              hoverBorderColor: (y) => mt(Jt(y.dataIndex), 1),
            },
            get bubble() {
              return this.doughnut;
            },
            get scatter() {
              return this.doughnut;
            },
            get area() {
              return this.polarArea;
            },
          },
        };
      function mt(y, D) {
        return "rgba(" + y.concat(D).join(",") + ")";
      }
      function zs(y, D) {
        return Math.floor(Math.random() * (D - y + 1)) + y;
      }
      function Jt(y = 0) {
        return (
          en[y] ||
          (function oo() {
            return [zs(0, 255), zs(0, 255), zs(0, 255)];
          })()
        );
      }
      U.kL.register(
        U.Dx,
        U.u,
        U.Gu,
        U.De,
        U.ST,
        U.jn,
        U.od,
        U.f$,
        U.uw,
        U.vn,
        U.ZL,
        U.jI,
        U.qi,
        U.Xi,
        U.l7,
        U.tt,
        U.CV,
        U.N0,
        U.ho,
        U.RM
      );
      let Lo = (() => {
          class y {
            constructor(A) {
              null != A &&
                A.plugins &&
                U.kL.register(...(null == A ? void 0 : A.plugins));
              const Y = js(os, (null == A ? void 0 : A.defaults) || {});
              U.ce.set(Y);
            }
            static forRoot(A) {
              return { ngModule: y, providers: [{ provide: ro, useValue: A }] };
            }
          }
          return (
            (y.ɵfac = function (A) {
              return new (A || y)(d.ɵɵinject(ro, 8));
            }),
            (y.ɵmod = d.ɵɵdefineNgModule({ type: y })),
            (y.ɵinj = d.ɵɵdefineInjector({ imports: [[]] })),
            y
          );
        })(),
        ro = (() => {
          class y {}
          return (
            (y.ɵfac = function (A) {
              return new (A || y)();
            }),
            (y.ɵprov = d.ɵɵdefineInjectable({
              token: y,
              factory: y.ɵfac,
              providedIn: "root",
            })),
            y
          );
        })();
    },
  },
]);
