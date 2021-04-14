/*import {
    makeApiRequest,
    generateSymbol,
    parseFullSymbol,
} from './helpers.js';*/

const lastBarsCache = new Map();

const configurationData = {
    supported_resolutions: ['1D', '1W', '1M'],
    exchanges: [{
        value: 'Bitfinex',
        name: 'Bitfinex',
        desc: 'Bitfinex',
    },
        {
            // `exchange` argument for the `searchSymbols` method, if a user selects this exchange
            value: 'Kraken',

            // filter name
            name: 'Kraken',

            // full exchange name displayed in the filter popup
            desc: 'Kraken bitcoin exchange',
        },
    ],
    symbols_types: [{
        name: 'crypto',

        // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
        value: 'crypto',
    },
        // ...
    ],
};

/*async function getAllSymbols() {
    const data = await makeApiRequest('data/v3/all/exchanges');
    let allSymbols = [];

    for (const exchange of configurationData.exchanges) {
        const pairs = data.Data[exchange.value].pairs;

        for (const leftPairPart of Object.keys(pairs)) {
            const symbols = pairs[leftPairPart].map(rightPairPart => {
                const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart);
                return {
                    symbol: symbol.short,
                    full_name: symbol.full,
                    description: symbol.short,
                    exchange: exchange.value,
                    type: 'crypto',
                };
            });
            allSymbols = [...allSymbols, ...symbols];
        }
    }
    return allSymbols;
}*/

export default {
    onReady: (callback) => {
        console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
    },

    searchSymbols: async (
        userInput,
        exchange,
        symbolType,
        onResultReadyCallback,
    ) => {
    },

    resolveSymbol: async (
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback,
    ) => {
        console.log('[resolveSymbol]: Method call', symbolName);

        const symbolInfo = {
            ticker: symbolName,
            name: symbolName,
            description: '',
            type: 'crypto',
            session: '24x7',
            timezone: 'Etc/UTC',
            //exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: 100,
            has_intraday: false,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: 'streaming',
        };

        console.log('[resolveSymbol]: Symbol resolved', symbolName);
        setTimeout(() => onSymbolResolvedCallback(symbolInfo));
    },

    getBars: async (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) => {
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
        /*const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
        const urlParameters = {
            e: parsedSymbol.exchange,
            fsym: parsedSymbol.fromSymbol,
            tsym: parsedSymbol.toSymbol,
            toTs: to,
            limit: 2000,
        };
        const query = Object.keys(urlParameters)
            .map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
            .join('&');*/
        try {
            /*const data = await makeApiRequest(`data/histoday?${query}`);
            if (data.Response && data.Response === 'Error' || data.Data.length === 0) {
                // "noData" should be set if there is no data in the requested period.
                onHistoryCallback([], {
                    noData: true,
                });
                return;
            }*/
            let bars = [];
            /*data.Data.forEach(bar => {
                if (bar.time >= from && bar.time < to) {
                    bars = [...bars, {
                        time: bar.time * 1000,
                        low: bar.low,
                        high: bar.high,
                        open: bar.open,
                        close: bar.close,
                    }];
                }
            });*/
            /*if (firstDataRequest) {
                lastBarsCache.set(symbolInfo.full_name, {
                    ...bars[bars.length - 1],
                });
            }*/

            bars = [
                {
                    time: 1519603200 * 1000,
                    low: 176.21,
                    high: 179.39,
                    open: 176.35,
                    close: 178.97,
                },
                {
                    time: 1519703200 * 1000,
                    low: 150.21,
                    high: 145.39,
                    open: 150.35,
                    close: 145.97,
                },
                {
                    time: 1519803200 * 1000,
                    low: 150.21,
                    high: 145.39,
                    open: 150.35,
                    close: 145.97,
                }
            ]

            console.log(`[getBars]: returned ${bars.length} bar(s)`);
            onHistoryCallback(bars, {
                noData: false,
            });
        } catch (error) {
            console.log('[getBars]: Get error', error);
            onErrorCallback(error);
        }
    },

    subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback,
    ) => {
    },

    unsubscribeBars: (subscriberUID) => {
    },
};