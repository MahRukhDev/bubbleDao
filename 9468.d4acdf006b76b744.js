"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [9468],
  {
    9468: (he, k, i) => {
      i.d(k, { uJ: () => _, OI: () => p, Jy: () => ge });
      var c = i(24883),
        e = i(51109),
        h = i(31777),
        R = i(25214),
        L = i(48966),
        A = i(87395),
        y = i(33643),
        V = i(51422),
        f = i(6643),
        T = i(92470),
        I = i(67945),
        v = i(9261),
        d = i(76248),
        b = i(7475),
        U = i(45501),
        C = i(18285),
        a = i(64324),
        s = i(38143);
      function H(t, r) {
        1 & t && e.ɵɵelement(0, "tui-svg", 1),
          2 & t && e.ɵɵproperty("src", r.$implicit);
      }
      const x = {
          iconSmall: "tuiIconChevronDown",
          iconLarge: "tuiIconChevronDownLarge",
        },
        S = new e.InjectionToken("Default parameters for arrow component", {
          factory: () => x,
        }),
        O = new e.InjectionToken(
          "Type of icon in dropdowns for interactive or disable mode",
          { factory: () => ({ interactive: M, disabled: M }) }
        ),
        M = new a.Al(
          (() => {
            let t = class {
              constructor(n, o, l) {
                (this.dropdown = n),
                  (this.textfieldSize = o),
                  (this.options = l);
              }
              get arrowIcon() {
                return (0, U.Bb)(this.textfieldSize.size)
                  ? this.options.iconLarge
                  : this.options.iconSmall;
              }
            };
            return (
              (t.ɵfac = function (n) {
                return new (n || t)(
                  e.ɵɵdirectiveInject(d.o1),
                  e.ɵɵdirectiveInject(T.kI),
                  e.ɵɵdirectiveInject(S)
                );
              }),
              (t.ɵcmp = e.ɵɵdefineComponent({
                type: t,
                selectors: [["tui-arrow"]],
                decls: 3,
                vars: 5,
                consts: [
                  ["polymorpheus-outlet", "", 1, "t-icon", 3, "content"],
                  [3, "src"],
                ],
                template: function (n, o) {
                  1 & n &&
                    (e.ɵɵelementStart(0, "span", 0),
                    e.ɵɵpipe(1, "async"),
                    e.ɵɵtemplate(2, H, 1, 1, "ng-template"),
                    e.ɵɵelementEnd()),
                    2 & n &&
                      (e.ɵɵclassProp(
                        "t-icon_rotated",
                        e.ɵɵpipeBind1(1, 3, o.dropdown.openChange)
                      ),
                      e.ɵɵproperty("content", o.arrowIcon));
                },
                dependencies: [C.P, a.r1, s.Ov],
                styles: [
                  ".t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,300ms);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}",
                ],
                changeDetection: 0,
              })),
              (t = (0, c.gn)(
                [
                  (0, c.fM)(0, (0, e.Inject)(d.o1)),
                  (0, c.fM)(1, (0, e.Inject)(T.kI)),
                  (0, c.fM)(2, (0, e.Inject)(S)),
                ],
                t
              )),
              t
            );
          })()
        );
      let Q = (() => {
        let t = class {};
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({ imports: [s.ez, C.E, a.wq] })),
          t
        );
      })();
      var P = i(22254),
        W = i(90697),
        J = i(48205),
        w = i(43074),
        m = i(25377),
        K = i(12955),
        D = i(33747),
        $ = i(21724),
        B = i(30606),
        Z = i(55231);
      let Y = (() => {
          let t = class {
            constructor(n, o, l) {
              (this.elementRef = n),
                (this.documentRef = o),
                (this.destroy$ = l);
            }
            set tuiScrollIntoView(n) {
              !n ||
                (0, B.H)(0)
                  .pipe((0, Z.R)(this.destroy$))
                  .subscribe(() => {
                    this.elementRef.nativeElement.dispatchEvent(
                      (0, K.hO)(
                        $.fe,
                        { bubbles: !0, detail: this.elementRef.nativeElement },
                        this.documentRef
                      )
                    );
                  });
            }
          };
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵdirectiveInject(e.ElementRef),
                e.ɵɵdirectiveInject(s.K0),
                e.ɵɵdirectiveInject(D.a3)
              );
            }),
            (t.ɵdir = e.ɵɵdefineDirective({
              type: t,
              selectors: [["", "tuiScrollIntoView", ""]],
              inputs: { tuiScrollIntoView: "tuiScrollIntoView" },
              features: [e.ɵɵProvidersFeature([D.a3])],
            })),
            (0, m.gn)(
              [(0, e.Input)(), (0, y.NH)()],
              t.prototype,
              "tuiScrollIntoView",
              null
            ),
            (t = (0, m.gn)(
              [
                (0, m.fM)(0, (0, e.Inject)(e.ElementRef)),
                (0, m.fM)(1, (0, e.Inject)(s.K0)),
                (0, m.fM)(2, (0, e.Inject)(D.a3)),
              ],
              t
            )),
            t
          );
        })(),
        G = (() => {
          let t = class {};
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({})),
            t
          );
        })();
      var X = i(1753),
        q = i(82188),
        ee = i(12733),
        te = i(64736),
        ne = i(35878);
      function oe(t, r) {
        1 & t && e.ɵɵelement(0, "tui-svg", 3),
          2 & t && e.ɵɵproperty("tuiScrollIntoView", !0);
      }
      function ie(t, r) {
        1 & t && e.ɵɵelement(0, "span", 4);
      }
      const ce = new a.Al(
        (() => {
          let t = class {
            constructor(n, o, l, u, E) {
              var g;
              (this.context = n),
                (this.host = o),
                (this.elementRef = l),
                (this.option = u),
                (this.control = E),
                (this.selected$ = (0, X.T)(
                  null !== (g = this.control.valueChanges) && void 0 !== g
                    ? g
                    : q.E,
                  (0, W.eh)(this.elementRef.nativeElement, "animationstart")
                ).pipe(
                  (0, ee.O)(null),
                  (0, te.U)(() => this.selected),
                  (0, ne.x)()
                ));
            }
            get matcher() {
              return this.host.identityMatcher || J.bg;
            }
            ngOnInit() {
              Promise.resolve().then(() => {
                (0, w.EN)(this.option.value) &&
                  this.host.checkOption &&
                  this.host.checkOption(this.option.value);
              });
            }
            get selected() {
              return (
                (0, w.EN)(this.option.value) &&
                (0, w.EN)(this.control.value) &&
                this.matcher(this.control.value, this.option.value)
              );
            }
          };
          return (
            (t.ɵfac = function (n) {
              return new (n || t)(
                e.ɵɵdirectiveInject(a.yf),
                e.ɵɵdirectiveInject(f.N1),
                e.ɵɵdirectiveInject(e.ElementRef),
                e.ɵɵdirectiveInject(I.vK),
                e.ɵɵdirectiveInject(h.NgControl)
              );
            }),
            (t.ɵcmp = e.ɵɵdefineComponent({
              type: t,
              selectors: [["tui-select-option"]],
              decls: 5,
              vars: 5,
              consts: [
                [3, "ngTemplateOutlet"],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  "src",
                  "tuiIconCheckLarge",
                  "class",
                  "checkmark",
                  3,
                  "tuiScrollIntoView",
                  4,
                  "ngIf",
                  "ngIfElse",
                ],
                ["dummy", ""],
                [
                  "automation-id",
                  "tui-select-option__checkmark",
                  "src",
                  "tuiIconCheckLarge",
                  1,
                  "checkmark",
                  3,
                  "tuiScrollIntoView",
                ],
                [1, "dummy"],
              ],
              template: function (n, o) {
                if (
                  (1 & n &&
                    (e.ɵɵelementContainer(0, 0),
                    e.ɵɵtemplate(1, oe, 1, 1, "tui-svg", 1),
                    e.ɵɵpipe(2, "async"),
                    e.ɵɵtemplate(
                      3,
                      ie,
                      1,
                      0,
                      "ng-template",
                      null,
                      2,
                      e.ɵɵtemplateRefExtractor
                    )),
                  2 & n)
                ) {
                  const l = e.ɵɵreference(4);
                  e.ɵɵproperty("ngTemplateOutlet", o.context.$implicit),
                    e.ɵɵadvance(1),
                    e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 3, o.selected$))(
                      "ngIfElse",
                      l
                    );
                }
              },
              dependencies: [s.O5, s.tP, C.P, Y, s.Ov],
              styles: [
                "@-webkit-keyframes retrigger{from{left:1px}to{left:2px}}@keyframes retrigger{from{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;-webkit-animation:1s retrigger;animation:1s retrigger}.checkmark[_ngcontent-%COMP%]{margin:0 -.375rem 0 auto;border-left:5px solid transparent}.dummy[_ngcontent-%COMP%]{width:1.5rem}",
              ],
              changeDetection: 0,
            })),
            (t = (0, c.gn)(
              [
                (0, c.fM)(0, (0, e.Inject)(a.yf)),
                (0, c.fM)(1, (0, e.Inject)(f.N1)),
                (0, c.fM)(2, (0, e.Inject)(e.ElementRef)),
                (0, c.fM)(3, (0, e.Inject)(I.vK)),
                (0, c.fM)(4, (0, e.Inject)(h.NgControl)),
              ],
              t
            )),
            t
          );
        })()
      );
      let le = (() => {
        let t = class {};
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({ imports: [s.ez, C.E, G] })),
          t
        );
      })();
      var ue = i(82383);
      function se(t, r) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 4), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = r.$implicit;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(n);
        }
      }
      const ae = function (t, r) {
        return { $implicit: t, active: r };
      };
      function de(t, r) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, "div", 3),
            e.ɵɵtemplate(1, se, 2, 1, "ng-template"),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("content", n.computedContent)(
            "context",
            e.ɵɵpureFunction2(2, ae, n.value, n.computedFocused)
          );
        }
      }
      const pe = ["*", [["input"]]],
        fe = ["*", "input"],
        ve = ce,
        me = [
          { provide: R.M$, useExisting: (0, e.forwardRef)(() => _) },
          { provide: L.KZ, useExisting: (0, e.forwardRef)(() => _) },
          { provide: f.N1, useExisting: (0, e.forwardRef)(() => _) },
          { provide: f.IQ, useValue: ve },
          ue.yn,
        ],
        F = { valueContent: "" },
        j = new e.InjectionToken("Default parameters for select component", {
          factory: () => F,
        });
      let _ = (() => {
        let t = class extends R.F9 {
          constructor(n, o, l, u, E, g) {
            super(n, o),
              (this.textfieldCleaner = l),
              (this.arrowMode = u),
              (this.itemsHandlers = E),
              (this.options = g),
              (this.stringify = this.itemsHandlers.stringify),
              (this.identityMatcher = this.itemsHandlers.identityMatcher),
              (this.valueContent = this.options.valueContent),
              (this.datalist = "");
          }
          get arrow() {
            return this.interactive
              ? this.arrowMode.interactive
              : this.arrowMode.disabled;
          }
          get nativeFocusableElement() {
            return this.textfield
              ? this.textfield.nativeFocusableElement
              : null;
          }
          get focused() {
            return (
              (0, A.zV)(this.nativeFocusableElement) ||
              (!!this.hostedDropdown && this.hostedDropdown.focused)
            );
          }
          get computedValue() {
            return null === this.value ? "" : this.stringify(this.value) || " ";
          }
          get computedContent() {
            return this.valueContent || this.computedValue;
          }
          onValueChange(n) {
            n || this.updateValue(null);
          }
          onActiveZone(n) {
            this.updateFocused(n);
          }
          onHovered(n) {
            this.updateHovered(n);
          }
          onKeyDownDelete() {
            this.textfieldCleaner.cleaner && this.updateValue(null);
          }
          handleOption(n) {
            var o;
            this.focusInput(),
              this.updateValue(n),
              null === (o = this.hostedDropdown) ||
                void 0 === o ||
                o.updateOpen(!1);
          }
          focusInput(n = !1) {
            this.nativeFocusableElement &&
              (0, A.NY)(this.nativeFocusableElement, !0, n);
          }
        };
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(h.NgControl, 10),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef),
              e.ɵɵdirectiveInject(T.Ym),
              e.ɵɵdirectiveInject(O),
              e.ɵɵdirectiveInject(P.Ys),
              e.ɵɵdirectiveInject(j)
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [["tui-select"]],
            contentQueries: function (n, o, l) {
              if (
                (1 & n && e.ɵɵcontentQuery(l, I.gX, 5, e.TemplateRef), 2 & n)
              ) {
                let u;
                e.ɵɵqueryRefresh((u = e.ɵɵloadQuery())) &&
                  (o.datalist = u.first);
              }
            },
            viewQuery: function (n, o) {
              if (
                (1 & n && (e.ɵɵviewQuery(v.yc, 5), e.ɵɵviewQuery(d.o1, 5)),
                2 & n)
              ) {
                let l;
                e.ɵɵqueryRefresh((l = e.ɵɵloadQuery())) &&
                  (o.textfield = l.first),
                  e.ɵɵqueryRefresh((l = e.ɵɵloadQuery())) &&
                    (o.hostedDropdown = l.first);
              }
            },
            inputs: {
              stringify: "stringify",
              identityMatcher: "identityMatcher",
              valueContent: "valueContent",
            },
            features: [e.ɵɵProvidersFeature(me), e.ɵɵInheritDefinitionFeature],
            ngContentSelectors: fe,
            decls: 5,
            vars: 14,
            consts: [
              [1, "t-hosted", 3, "canOpen", "content", "tuiActiveZoneChange"],
              [
                "automation-id",
                "tui-select__textfield",
                1,
                "t-textfield",
                3,
                "editable",
                "pseudoFocused",
                "pseudoHovered",
                "pseudoPressed",
                "invalid",
                "nativeId",
                "readOnly",
                "iconContent",
                "disabled",
                "focusable",
                "value",
                "valueChange",
                "hoveredChange",
                "keydown.delete.prevent",
                "keydown.backspace.prevent",
              ],
              [
                "polymorpheus-outlet",
                "",
                "automation-id",
                "tui-select__value",
                "class",
                "t-value",
                3,
                "content",
                "context",
                4,
                "ngIf",
              ],
              [
                "polymorpheus-outlet",
                "",
                "automation-id",
                "tui-select__value",
                1,
                "t-value",
                3,
                "content",
                "context",
              ],
              [1, "t-primitive-value"],
            ],
            template: function (n, o) {
              1 & n &&
                (e.ɵɵprojectionDef(pe),
                e.ɵɵelementStart(0, "tui-hosted-dropdown", 0),
                e.ɵɵlistener("tuiActiveZoneChange", function (u) {
                  return o.onActiveZone(u);
                }),
                e.ɵɵelementStart(1, "tui-primitive-textfield", 1),
                e.ɵɵlistener("valueChange", function (u) {
                  return o.onValueChange(u);
                })("hoveredChange", function (u) {
                  return o.onHovered(u);
                })("keydown.delete.prevent", function () {
                  return o.onKeyDownDelete();
                })("keydown.backspace.prevent", function () {
                  return o.onKeyDownDelete();
                }),
                e.ɵɵprojection(2),
                e.ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]),
                e.ɵɵtemplate(4, de, 2, 5, "div", 2),
                e.ɵɵelementEnd()()),
                2 & n &&
                  (e.ɵɵproperty("canOpen", o.interactive)(
                    "content",
                    o.datalist || ""
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("editable", !1)(
                    "pseudoFocused",
                    o.computedFocused
                  )("pseudoHovered", o.pseudoHovered)(
                    "pseudoPressed",
                    o.pseudoPressed
                  )("invalid", o.computedInvalid)("nativeId", o.nativeId)(
                    "readOnly",
                    o.readOnly
                  )("iconContent", o.arrow)("disabled", o.computedDisabled)(
                    "focusable",
                    o.computedFocusable
                  )("value", o.computedValue),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", null !== o.value));
            },
            dependencies: [s.O5, a.r1, V.e, v.yc, v.B1, d.o1],
            styles: [
              "[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
            ],
            changeDetection: 0,
          })),
          (0, c.gn)([(0, e.ViewChild)(v.yc)], t.prototype, "textfield", void 0),
          (0, c.gn)(
            [(0, e.ViewChild)(d.o1)],
            t.prototype,
            "hostedDropdown",
            void 0
          ),
          (0, c.gn)(
            [(0, e.Input)(), (0, y.TH)()],
            t.prototype,
            "stringify",
            void 0
          ),
          (0, c.gn)(
            [(0, e.Input)(), (0, y.TH)()],
            t.prototype,
            "identityMatcher",
            void 0
          ),
          (0, c.gn)(
            [(0, e.Input)(), (0, y.TH)()],
            t.prototype,
            "valueContent",
            void 0
          ),
          (0, c.gn)(
            [(0, e.ContentChild)(I.gX, { read: e.TemplateRef })],
            t.prototype,
            "datalist",
            void 0
          ),
          (t = (0, c.gn)(
            [
              (0, c.fM)(0, (0, e.Optional)()),
              (0, c.fM)(0, (0, e.Self)()),
              (0, c.fM)(0, (0, e.Inject)(h.NgControl)),
              (0, c.fM)(1, (0, e.Inject)(e.ChangeDetectorRef)),
              (0, c.fM)(2, (0, e.Inject)(T.Ym)),
              (0, c.fM)(3, (0, e.Inject)(O)),
              (0, c.fM)(4, (0, e.Inject)(P.Ys)),
              (0, c.fM)(5, (0, e.Inject)(j)),
            ],
            t
          )),
          t
        );
      })();
      var N;
      let p = (N = class extends b.dh {
        get readOnly() {
          return !0;
        }
        get value() {
          return this.host.computedValue;
        }
        onValueChange(r) {
          this.host.onValueChange(r);
        }
      });
      (p.ɵfac = (function () {
        let t;
        return function (n) {
          return (t || (t = e.ɵɵgetInheritedFactory(p)))(n || p);
        };
      })()),
        (p.ɵdir = e.ɵɵdefineDirective({
          type: p,
          selectors: [["tui-select"]],
          features: [
            e.ɵɵProvidersFeature([
              { provide: f.S0, useExisting: (0, e.forwardRef)(() => N) },
            ]),
            e.ɵɵInheritDefinitionFeature,
          ],
        }));
      let ge = (() => {
        let t = class {};
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
          (t.ɵinj = e.ɵɵdefineInjector({
            imports: [s.ez, a.wq, V.A, v.KW, d.jh, le, Q],
          })),
          t
        );
      })();
    },
  },
]);
