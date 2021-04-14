import { makeOptions } from "../../../../common/helpers"

export const timestampFormatOptions = [
  { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
  { label: "YYYY/MM/DD", value: "YYYY/MM/DD" },
  { label: "DD-MM-YYYY", value: "DD-MM-YYYY" },
  { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
  { label: "MM-DD-YYYY", value: "MM-DD-YYYY" },
  { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
]

const numberRange = []

for (let i = 1; i <= 60; i++) {
  numberRange.push(i)
}

export const horizonOptions = makeOptions(numberRange)

export const frequencyOptions = [
  // { label: "M", value: "M" },
  // { label: "3M", value: "3M" },
  // { label: "5M", value: "5M" },
  // { label: "15M", value: "15M" },
  // { label: "30M", value: "30M" },
  // { label: "H", value: "H" },
  // { label: "2H", value: "2H" },
  // { label: "3H", value: "3H" },
  // { label: "4H", value: "4H" },
  { label: "D", value: "D" },
  // { label: "2D", value: "2D" },
  // { label: "W", value: "W" },
]

export const algorithmOptions = [
  {
    label: "ARIMA",
    value: {
      descr:
        "Autoregressive Integrated Moving Average (ARIMA) is a commonly-used local statistical algorithm for time-series forecasting. ARIMA captures standard temporal structures (patterned organizations of time) in the input dataset.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-recipe-arima.html",
    },
  },
  {
    label: "Prophet",
    value: {
      descr:
        "Prophet is a popular local Bayesian structural time series model. Prophet is an additive regression model with a piecewise linear or logistic growth curve trend. It includes a yearly seasonal component modeled using Fourier series and a weekly seasonal component modeled using dummy variables. Prophet is especially useful for datasets that: 1. Contain an extended time period (months or years) of detailed historical observations (hourly, daily, or weekly) 2. Have multiple strong seasonalities 3. Include previously known important, but irregular, events 4. Have missing data points or large outliers 5. Have non-linear growth trends that are approaching a limit.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-recipe-prophet.html",
    },
  },
  {
    label: "DeepAR+",
    value: {
      descr:
        "Amazon Forecast DeepAR+ is a supervised learning algorithm for forecasting time series using recurrent neural networks (RNNs). Classical forecasting methods, such as ARIMA and ETS, fit a single model to each individual time series, and then use that model to extrapolate the time series into the future. In many applications, however, you have many similar time series across a set of cross-sectional units. In this case, it can be beneficial to train a single model jointly over all of the time series. DeepAR+ takes this approach. When your dataset contains hundreds of feature time series, the DeepAR+ algorithm outperforms the standard ARIMA and ETS methods.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-recipe-deeparplus.html",
    },
  },
  {
    label: "CNN-QR",
    value: {
      descr:
        "Amazon Forecast CNN-QR, Convolutional Neural Network - Quantile Regression, is a proprietary machine learning algorithm for forecasting scalar (one-dimensional) time series using causal convolutional neural networks (CNNs). This supervised learning algorithm trains one global model from a large collection of time series and uses a quantile decoder to make probabilistic predictions.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-algo-cnnqr.html",
    },
  },
  {
    label: "NPTS",
    value: {
      descr:
        "The Amazon Forecast Non-Parametric Time Series (NPTS) algorithm is a scalable, probabilistic baseline forecaster. NPTS is especially useful when the time series is intermittent (or sparse, containing many 0s) and bursty. For example, forecasting demand for individual items where the time series has many low counts.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-recipe-npts.html",
    },
  },
  {
    label: "ETS",
    value: {
      descr:
        "The Exponential Smoothing (ETS) algorithm is especially useful for datasets with seasonality and other prior assumptions about the data. ETS computes a weighted average over all observations in the input time series dataset as its prediction. The weights are exponentially decreasing over time, rather than the constant weights in simple moving average methods. The weights are dependent on a constant parameter, which is known as the smoothing parameter.",
      link:
        "https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-recipe-ets.html",
    },
  },
  {
    label: "AutoML",
    value: {
      descr:
        "If you are unsure of which algorithm to use to train your model, choose AutoML when creating a predictor and let Forecast select the optimal algorithm for your datasets.",
    },
  },
]
