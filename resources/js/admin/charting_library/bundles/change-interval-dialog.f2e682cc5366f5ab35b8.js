;(window.webpackJsonp = window.webpackJsonp || []).push([
  ["change-interval-dialog"],
  {
    MuC6: function (t, i, e) {
      "use strict"
      var n = e("JWMC").trackEvent,
        s = e("PT1i").linking,
        o = e("h24c").parseIntervalValue,
        a = e("h24c").intervalIsSupported,
        r = e("Kxc7"),
        l = e("pPtI"),
        p = e("GAqT").TVOldDialogs,
        h = e("LxhU").Interval,
        u = $.t(
          "Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)"
        ),
        d = $.t(
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)"
        ),
        c = [1, 5, 15, 30]
      function _(t) {
        ;(this._options = t || {}),
          this._setInput(),
          (this._caption = $('<i class="interval-caption">').html("&nbsp;")),
          (this._helpTooltipTrigger = $(
            '<i class="help-tooltip-trigger apply-common-tooltip common-tooltip-below">'
          )
            .text("?")
            .attr("title", v() ? d : u)),
          (this._dialogTitle = $.t("Change Interval"))
      }
      function v() {
        return r.enabled("seconds_resolution")
      }
      ;(_.prototype._setInput = function () {
        ;(this._input = $(
          '<input type="text" class="change-interval-input" autocomplete="off" maxlength="7">'
        )),
          this._input
            .on("keypress", this._handleInput.bind(this))
            .on(
              "input",
              function () {
                this._validate(), this._updateCaption()
              }.bind(this)
            )
            .on(
              "blur",
              function () {
                setTimeout(this._submit.bind(this), 0)
              }.bind(this)
            )
      }),
        (_.prototype._validate = function () {
          var t = this._input.val()
          ;(this._parsed = o(t)),
            (this._valid = !this._parsed.error),
            (this._supported = !this._parsed.error && a(t))
          var i = this._parsed.unit
          if (this._supported)
            if ("R" === i && this._parsed.qty > l.getMaxResolutionValue("R"))
              this._supported = !1
            else if (null === i || "H" === i) {
              this._parsed.qty * ("H" === i ? 60 : 1) > 1440 &&
                (this._supported = !1)
            } else
              "S" !== i ||
                c.includes(this._parsed.qty) ||
                (this._supported = !1)
        }),
        (_.prototype._updateCaption = function () {
          var t
          if (this._valid && this._supported) {
            var i = this._parsed.qty || 1,
              e = this._parsed.unit || ""
            ;(t = l.getTranslatedResolutionModel(i + e).hint),
              this._input.add(this._caption).removeClass("error")
          } else
            (t = this._parsed.error ? "&nbsp;" : $.t("Not applicable")),
              this._input.add(this._caption).addClass("error")
          this._caption.html(t)
        }),
        (_.prototype._handleInput = function (t) {
          13 !== t.which
            ? t.ctrlKey ||
              t.metaKey ||
              !t.charCode ||
              !t.which ||
              t.which <= 32 ||
              (function (t) {
                var i, e
                ;(i = /[\dhdwms]/i), (e = /[\dhdwm]/i)
                return v() ? i.test(t) : e.test(t)
              })(String.fromCharCode(t.charCode)) ||
              t.preventDefault()
            : this._submit()
        }),
        (_.prototype._submit = function () {
          if (p.isOpen(this._dialogTitle)) {
            if (this._valid && this._supported) {
              var t = h.normalize(this._input.val()),
                i = s.interval.value()
              t &&
                i !== t &&
                "function" == typeof this._options.callback &&
                this._options.callback(t)
            }
            p.destroy(this._dialogTitle)
          }
        }),
        (_.prototype._setInitialValue = function (t) {
          var i = "",
            e = !1
          ;(t = t || this._options.initialValue) && "," !== t
            ? (i = h.normalize(t) || "")
            : ((i = t = s.interval.value()), (e = !0)),
            this._input.val(i),
            e && this._input.select()
        }),
        (_.prototype.isValid = function () {
          return Boolean(this._valid)
        }),
        (_.prototype.show = function (t) {
          n("GUI", "Show Change Interval Dialog", t)
          var i = p.createDialog(this._dialogTitle, {
              hideCloseCross: !0,
              addClass: "change-interval-dialog",
              ownerDocument: this._options.ownerDocument,
            }),
            e = i.find("._tv-dialog-content")
          return (
            i.css("min-width", 0),
            e
              .css("min-width", 0)
              .mousedown(
                function (t) {
                  this._input.is(t.target) || t.preventDefault()
                }.bind(this)
              )
              .append(
                this._input.add(this._caption).add(this._helpTooltipTrigger)
              ),
            p.applyHandlers(i),
            p.positionDialog(i),
            this._setInitialValue(t),
            this._validate(),
            this._updateCaption(),
            i
          )
        }),
        (t.exports.ChangeIntervalDialog = _)
    },
  },
])