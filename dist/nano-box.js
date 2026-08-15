import { Teleport as e, Transition as t, computed as n, createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createVNode as s, defineComponent as c, inject as l, mergeProps as u, nextTick as d, normalizeClass as f, normalizeStyle as p, onMounted as m, openBlock as h, provide as g, ref as _, renderSlot as v, resolveComponent as y, resolveDynamicComponent as b, toDisplayString as x, unref as S, useAttrs as C, useSlots as w, vShow as ee, watch as T, withCtx as E, withDirectives as D, withModifiers as O } from "vue";
//#region src/components/input/src/input.vue?vue&type=script&setup=true&lang.ts
var k = [
	"type",
	"value",
	"disabled"
], A = /* @__PURE__ */ c({
	name: "NanoInput",
	inheritAttrs: !1,
	__name: "input",
	props: {
		modelValue: { default: "" },
		type: { default: "text" },
		clearable: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"update:modelValue",
		"clear",
		"blur",
		"focus"
	],
	setup(e, { emit: t }) {
		let r = e, s = t, c = C(), l = n({
			get: () => r.modelValue,
			set: (e) => s("update:modelValue", e)
		}), d = () => {
			s("update:modelValue", ""), s("clear");
		};
		return (e, t) => (h(), a("div", { class: f(["nano-input", { "is-disabled": r.disabled }]) }, [o("input", u(S(c), {
			type: r.type,
			value: l.value,
			disabled: r.disabled,
			onInput: t[0] ||= (e) => l.value = e.target.value,
			onBlur: t[1] ||= (e) => s("blur", e),
			onFocus: t[2] ||= (e) => s("focus", e),
			class: "nano-input__inner"
		}), null, 16, k), r.clearable && l.value && !r.disabled ? (h(), a("span", {
			key: 0,
			class: "nano-input__clear",
			onClick: d
		}, " ✕ ")) : i("", !0)], 2));
	}
});
A.install = (e) => {
	e.component("NanoInput", A);
};
//#endregion
//#region src/components/layout/src/container.vue
var j = /* @__PURE__ */ c({
	name: "NanoContainer",
	__name: "container",
	setup(e) {
		let t = w(), r = n(() => t.default ? t.default().some((e) => e.type?.name === "NanoAside" || e.props && "aside" in e.props) : !1);
		return (e, t) => (h(), a("section", { class: f(["nano-container", { "is-vertical": r.value }]) }, [v(e.$slots, "default")], 2));
	}
}), M = /* @__PURE__ */ c({
	name: "NanoHeader",
	__name: "header",
	props: { height: { default: "60px" } },
	setup(e) {
		return (t, n) => (h(), a("header", {
			class: "nano-header",
			style: p({ height: e.height })
		}, [v(t.$slots, "default")], 4));
	}
}), N = /* @__PURE__ */ c({
	name: "NanoAside",
	__name: "aside",
	props: { width: { default: "300px" } },
	setup(e) {
		return (t, n) => (h(), a("aside", {
			class: "nano-aside",
			style: p({ width: e.width })
		}, [v(t.$slots, "default")], 4));
	}
}), P = { class: "nano-main" }, F = /* @__PURE__ */ c({
	name: "NanoMain",
	__name: "main",
	setup(e) {
		return (e, t) => (h(), a("main", P, [v(e.$slots, "default")]));
	}
}), I = /* @__PURE__ */ c({
	name: "NanoFooter",
	__name: "footer",
	props: { height: { default: "60px" } },
	setup(e) {
		return (t, n) => (h(), a("footer", {
			class: "nano-footer",
			style: p({ height: e.height })
		}, [v(t.$slots, "default")], 4));
	}
}), L = j, R = M, z = N, B = F, V = I, H = [
	L,
	R,
	z,
	B,
	V
], U = { install(e) {
	H.forEach((t) => {
		t.name && e.component(t.name, t);
	});
} };
H.forEach((e) => {
	e.install = (t) => {
		e.name && t.component(e.name, e);
	};
});
//#endregion
//#region src/components/scrollbar/src/scrollbar.vue?vue&type=script&setup=true&lang.ts
var W = { class: "nano-scrollbar__wrap" }, G = /* @__PURE__ */ c({
	name: "NanoScrollbar",
	__name: "scrollbar",
	props: {
		height: {},
		maxHeight: {},
		width: {},
		maxWidth: {},
		tag: { default: "div" }
	},
	setup(e) {
		let t = e, i = n(() => ({
			height: t.height ? typeof t.height == "number" ? `${t.height}px` : t.height : void 0,
			maxHeight: t.maxHeight ? typeof t.maxHeight == "number" ? `${t.maxHeight}px` : t.maxHeight : void 0,
			width: t.width ? typeof t.width == "number" ? `${t.width}px` : t.width : void 0,
			maxWidth: t.maxWidth ? typeof t.maxWidth == "number" ? `${t.maxWidth}px` : t.maxWidth : void 0
		}));
		return (t, n) => (h(), a("div", {
			class: "nano-scrollbar",
			style: p(i.value)
		}, [o("div", W, [(h(), r(b(e.tag), { class: "nano-scrollbar__view" }, {
			default: E(() => [v(t.$slots, "default")]),
			_: 3
		}))])], 4));
	}
}), K = /* @__PURE__ */ c({
	name: "NanoMenu",
	__name: "menu",
	props: {
		mode: { default: "vertical" },
		defaultActive: { default: "" },
		maxHeight: { default: "" },
		maxWidth: { default: "" }
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let i = e, a = t;
		return g("nanoMenu", {
			activeindex: n(() => i.defaultActive),
			mode: i.mode,
			handleSelect: (e) => {
				a("select", e);
			}
		}), (e, t) => (h(), r(S(G), {
			"max-height": i.maxHeight,
			"max-width": i.maxWidth
		}, {
			default: E(() => [o("ul", { class: f(["nano-menu", `nano-menu-${i.mode}`]) }, [v(e.$slots, "default")], 2)]),
			_: 3
		}, 8, ["max-height", "max-width"]));
	}
}), q = /* @__PURE__ */ c({
	name: "NanoMenuItem",
	__name: "menu-item",
	props: {
		index: {},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let t = e, i = l("nanoMenu", {}), a = l("nanoSubMenu", null), s = n(() => i.activeindex?.value === t.index), c = n(() => i.mode?.value === "horizontal" ? "bottom" : "right"), u = () => {
			t.disabled || i.handleSelect && i.handleSelect(t.index);
		}, p = _(null), g = _(""), b = () => {
			p.value && (p.value.scrollWidth > p.value.clientWidth ? g.value = p.value.textContent || "" : g.value = "");
		};
		return m(() => {
			d(() => {
				b();
			});
		}), a?.isOpen && T(() => a.isOpen.value, (e) => {
			e && d(() => {
				b();
			});
		}), (t, n) => {
			let i = y("nano-tooltip");
			return h(), r(i, {
				content: g.value,
				placement: c.value
			}, {
				default: E(() => [o("li", {
					class: f(["nano-menu-item", {
						"is-active": s.value,
						"is-disabled": e.disabled,
						"is-sub-item": !!S(a)
					}]),
					onClick: O(u, ["stop"])
				}, [o("span", {
					ref_key: "textRef",
					ref: p,
					class: "nano-menu-item__text"
				}, [v(t.$slots, "default")], 512)], 2)]),
				_: 3
			}, 8, ["content", "placement"]);
		};
	}
}), J = { class: "nano-submenu__list" }, Y = /* @__PURE__ */ c({
	name: "NanoSubMenu",
	__name: "sub-menu",
	props: {
		index: {},
		title: {},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		let r = e, i = l("nanoMenu", {}), c = l("nanoSubMenu", null), u = _(!1), d = () => {
			r.disabled || (u.value = !u.value, i.handleSelect && i.handleSelect(r.index));
		};
		g("nanoSubMenu", {
			parentIndex: r.index,
			isOpen: u
		});
		let p = n(() => i.activeindex?.value === r.index), b = n(() => i.mode?.value === "horizontal" ? "bottom" : "right"), C = _(null), w = _("");
		m(() => {
			C.value && C.value.scrollWidth > C.value.clientWidth && (w.value = r.title);
		});
		let T = (e) => {
			let t = e;
			t.style.height = "0", t.style.opacity = "0", t.style.overflow = "hidden";
		}, k = (e, t) => {
			let n = e;
			n.style.transition = "height 0.3s ease, opacity 0.3s ease", n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1", n.addEventListener("transitionend", t, { once: !0 });
		}, A = (e) => {
			let t = e;
			t.style.transition = "", t.style.height = "auto", t.style.overflow = "";
		}, j = (e) => {
			let t = e;
			t.style.height = `${t.scrollHeight}px`, t.style.opacity = "1", t.style.overflow = "hidden";
		}, M = (e, t) => {
			let n = e;
			n.offsetHeight, n.style.transition = "height 0.3s ease, opacity 0.3s ease", n.style.height = "0", n.style.opacity = "0", n.addEventListener("transitionend", t, { once: !0 });
		}, N = (e) => {
			let t = e;
			t.style.transition = "", t.style.height = "", t.style.overflow = "";
		};
		return (n, r) => {
			let i = y("nano-tooltip");
			return h(), a("li", { class: f(["nano-submenu", {
				"is-opened": u.value,
				"is-active": p.value,
				"is-disabled": e.disabled,
				"is-nested": !!S(c)
			}]) }, [s(i, {
				content: w.value,
				placement: b.value
			}, {
				default: E(() => [o("div", {
					class: "nano-submenu__title",
					onClick: O(d, ["stop"])
				}, [o("span", {
					ref_key: "textRef",
					ref: C,
					class: "nano-submenu__title-text"
				}, x(e.title), 513), o("span", { class: f(["nano-submenu__arrow", { "is-open": u.value }]) }, "▼", 2)])]),
				_: 1
			}, 8, ["content", "placement"]), s(t, {
				onBeforeEnter: T,
				onEnter: k,
				onAfterEnter: A,
				onBeforeLeave: j,
				onLeave: M,
				onAfterLeave: N
			}, {
				default: E(() => [D(o("ul", J, [v(n.$slots, "default")], 512), [[ee, u.value]])]),
				_: 3
			})], 2);
		};
	}
}), X = K, Z = q, Q = Y, $ = /* @__PURE__ */ c({
	name: "NanoTooltip",
	__name: "tooltip",
	props: {
		content: {},
		placement: { default: "top" }
	},
	setup(n) {
		let o = n, c = _(!1), l = _({}), u = _(null), f = _(null), m = async () => {
			if (!u.value) return;
			let e = u.value.getBoundingClientRect();
			c.value = !0, await d();
			let t = 0, n = 0, r = "none";
			switch (o.placement) {
				case "right":
					t = e.top + e.height / 2, n = e.right + 8, r = "translateY(-50%)";
					break;
				case "bottom":
					t = e.bottom + 8, n = e.left + e.width / 2, r = "translateX(-50%)";
					break;
				case "left":
					t = e.top + e.height / 2, n = e.left - 8, r = "translate(-100%, -50%)";
					break;
				default: t = e.top - 8, n = e.left + e.width / 2, r = "translate(-50%, -100%)";
			}
			l.value = {
				top: `${t}px`,
				left: `${n}px`,
				transform: r
			};
		}, g = () => {
			c.value = !1;
		};
		return (o, d) => (h(), a("div", {
			ref_key: "wrapperRef",
			ref: u,
			class: "nano-tooltip-wrapper",
			onMouseenter: m,
			onMouseleave: g
		}, [v(o.$slots, "default"), (h(), r(e, { to: "body" }, [s(t, { name: "nano-fade" }, {
			default: E(() => [c.value && n.content ? (h(), a("div", {
				key: 0,
				ref_key: "tooltipRef",
				ref: f,
				class: "nano-tooltip-content",
				style: p(l.value)
			}, x(n.content), 5)) : i("", !0)]),
			_: 1
		})]))], 544));
	}
});
//#endregion
//#region src/composables/theme/src/theme.ts
function te(e = !1) {
	let t = _(e);
	return {
		isDark: t,
		toggleTheme: async () => {
			if (!document.startViewTransition) {
				t.value = !t.value, document.documentElement.classList.toggle("dark", t.value);
				return;
			}
			let e = window.devicePixelRatio || 1, n = window.innerWidth / 2 * e, r = window.innerHeight / 2 * e, i = Math.max(n, window.innerWidth * e - n), a = Math.max(r, window.innerHeight * e - r), o = Math.hypot(i, a) + Math.max(window.innerWidth, window.innerHeight) * .5;
			await document.startViewTransition(() => {
				t.value = !t.value, document.documentElement.classList.toggle("dark", t.value);
			}).ready, document.documentElement.animate([{ clipPath: `circle(0px at ${n}px ${r}px)` }, { clipPath: `circle(${o}px at ${n}px ${r}px)` }], {
				duration: 750,
				easing: "cubic-bezier(0.25, 1, 0.5, 1)",
				pseudoElement: "::view-transition-new(root)"
			});
		}
	};
}
//#endregion
//#region src/index.ts
var ne = [
	A,
	L,
	R,
	z,
	B,
	V,
	X,
	Z,
	Q,
	$
], re = { install(e) {
	ne.forEach((t) => {
		t.name && e.component(t.name, t);
	});
} };
//#endregion
export { z as NanoAside, L as NanoContainer, V as NanoFooter, R as NanoHeader, A as NanoInput, U as NanoLayout, B as NanoMain, X as NanoMenu, Z as NanoMenuItem, Q as NanoSubMenu, $ as NanoTooltip, re as default, te as useThemeTransition };
