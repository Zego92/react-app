export const triggers = [
    {
        label: "Value",
        value: "Value"
    },
    {
        label: "TA Indicators",
        options: [
            {label: "RSI", value: "RSI"},
            {label: "New High", value: "New High"},
            {label: "New Low", value: "New Low"}
        ]
    }
]
export const conditions = [
    {
        label: "Above",
        value: "Above"
    },
    {
        label: "Below",
        value: "Below"
    },
    {
        label: "Between",
        value: "Between"
    },
    {
        label: "Equal to",
        value: "Equal to"
    },
    {
        label: "Crossed Above",
        value: "Crossed Above"
    },
    {
        label: "Crossed Below",
        value: "Crossed Below"
    }
]

export const optionsMarket = [
    {
        value: "Allmarkets",
        label: "All markets",
    },
    {
        value: "Only bull markets",
        label: "Only bull markets",
    },
    {
        value: "Only bear markets",
        label: "Only bear markets",
    }
]

export const chartOption = {
    series: [
        {
            name: "series1",
            data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
        },
    ],
    options: {
        chart: {
            toolbar: "false",
            dropShadow: {
                enabled: !0,
                color: "#000",
                top: 18,
                left: 7,
                blur: 8,
                opacity: 0.2,
            },
        },
        dataLabels: {
            enabled: !1,
        },
        colors: ["#556ee6"],
        stroke: {
            curve: "smooth",
            width: 3,
        },
    },
}