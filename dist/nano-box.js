import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, mergeProps as o, normalizeClass as s, normalizeStyle as c, openBlock as l, provide as u, ref as d, renderSlot as f, unref as p, useAttrs as m, useSlots as h } from "vue";
//#region src/components/input/src/input.vue?vue&type=script&setup=true&lang.ts
var g = [
	"type",
	"value",
	"disabled"
], _ = /* @__PURE__ */ i({
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
	setup(i, { emit: a }) {
		let c = i, u = a, d = m(), f = e({
			get: () => c.modelValue,
			set: (e) => u("update:modelValue", e)
		}), h = () => {
			u("update:modelValue", ""), u("clear");
		};
		return (e, i) => (l(), n("div", { class: s(["nano-input", { "is-disabled": c.disabled }]) }, [r("input", o(p(d), {
			type: c.type,
			value: f.value,
			disabled: c.disabled,
			onInput: i[0] ||= (e) => f.value = e.target.value,
			onBlur: i[1] ||= (e) => u("blur", e),
			onFocus: i[2] ||= (e) => u("focus", e),
			class: "nano-input__inner"
		}), null, 16, g), c.clearable && f.value && !c.disabled ? (l(), n("span", {
			key: 0,
			class: "nano-input__clear",
			onClick: h
		}, " ✕ ")) : t("", !0)], 2));
	}
});
_.install = (e) => {
	e.component("NanoInput", _);
};
//#endregion
//#region src/components/layout/src/container.vue
var v = /* @__PURE__ */ i({
	name: "NanoContainer",
	__name: "container",
	setup(t) {
		let r = h(), i = e(() => r.default ? r.default().some((e) => e.type?.name === "NanoAside" || e.props && "aside" in e.props) : !1);
		return (e, t) => (l(), n("section", { class: s(["nano-container", { "is-vertical": i.value }]) }, [f(e.$slots, "default")], 2));
	}
}), y = /* @__PURE__ */ i({
	name: "NanoHeader",
	__name: "header",
	props: { height: { default: "60px" } },
	setup(e) {
		return (t, r) => (l(), n("header", {
			class: "nano-header",
			style: c({ height: e.height })
		}, [f(t.$slots, "default")], 4));
	}
}), b = /* @__PURE__ */ i({
	name: "NanoAside",
	__name: "aside",
	props: { width: { default: "300px" } },
	setup(e) {
		return (t, r) => (l(), n("aside", {
			class: "nano-aside",
			style: c({ width: e.width })
		}, [f(t.$slots, "default")], 4));
	}
}), x = { class: "nano-main" }, S = /* @__PURE__ */ i({
	name: "NanoMain",
	__name: "main",
	setup(e) {
		return (e, t) => (l(), n("main", x, [f(e.$slots, "default")]));
	}
}), C = /* @__PURE__ */ i({
	name: "NanoFooter",
	__name: "footer",
	props: { height: { default: "60px" } },
	setup(e) {
		return (t, r) => (l(), n("footer", {
			class: "nano-footer",
			style: c({ height: e.height })
		}, [f(t.$slots, "default")], 4));
	}
}), w = v, T = y, E = b, D = S, O = C, k = [
	w,
	T,
	E,
	D,
	O
], A = { install(e) {
	k.forEach((t) => {
		t.name && e.component(t.name, t);
	});
} };
k.forEach((e) => {
	e.install = (t) => {
		e.name && t.component(e.name, e);
	};
});
//#endregion
//#region src/components/menu/src/menu.vue
var j = /* @__PURE__ */ i({
	name: "NanoMenu",
	__name: "menu",
	props: {
		mode: { default: "vertical" },
		defaultActive: { default: "" }
	},
	emits: ["select"],
	setup(t, { emit: r }) {
		let i = t, a = r;
		return u("nanoMenu", {
			activeindex: e(() => i.defaultActive),
			mode: i.mode,
			handleSelect: (e) => {
				a("select", e);
			}
		}), (e, t) => (l(), n("ul", { class: s(["nano-menu", `nano-menu-${i.mode}`]) }, [f(e.$slots, "default")], 2));
	}
}), M = /* @__PURE__ */ i({
	name: "NanoMenuItem",
	__name: "menu-item",
	props: {
		index: {},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let r = t, i = a("nanoMenu", {}), o = e(() => i.activeindex?.value === r.index), c = () => {
			r.disabled || i.handleSelect && i.handleSelect(r.index);
		};
		return (e, r) => (l(), n("li", {
			class: s(["nano-menu-item", {
				"is-active": o.value,
				"is-disabled": t.disabled
			}]),
			onClick: c
		}, [f(e.$slots, "default")], 2));
	}
}), N = j, P = M;
//#endregion
//#region src/composables/theme/src/theme.ts
function F(e = !1) {
	let t = d(e);
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
var I = [
	_,
	w,
	T,
	E,
	D,
	O,
	N,
	P
], L = { install(e) {
	I.forEach((t) => {
		t.name && e.component(t.name, t);
	});
} };
//#endregion
export { E as NanoAside, w as NanoContainer, O as NanoFooter, T as NanoHeader, _ as NanoInput, A as NanoLayout, D as NanoMain, N as NanoMenu, P as NanoMenuItem, L as default, F as useThemeTransition };
