new Vue({

    el: '#root',
    data: {
        equity: 5700,
        trigger: '',
        stopVal: '',
        shares: '',
        risk: 25,
        position: '',
        tradeNotValid: false,
        activeEquity: false,
        profitTrigger: '',
        profitShares: '',
        targetProfit: '',
        profit: '',
        etf: '',
        finviz: '',
        nasdaq: '',
        stock: '',
        details: '',
        detailsResultsStocks: '',
        etfArr: etfDB,
        kingsDB,
        aristocratsDB,
        schdDB,
        dgroDB,
        vugDB,
        dgrwDB,
        showUrl: false,
        showStockModal: false,
        showDividendModal: false,
        showEtfModal: false,
        showFinvizModal: false,
        stockOrEtfNameForUrl: '',
        stopPercent: '',
        firstTarget: '',
        secondTarget: '',
        thirdTarget: '',
        fourthTarget: '',
        displayDividendkings: false,
        displayDividendAristocrats: false,
        displayStocksAndEtfs: false,
        displaySCHD: false,
        displayDGRO: false,
        displayVUG: false,
        displayDGRW: false,
        dividendKingsList: [],
        dividendAristocratsList: [],
        schdList: [],
        dgroList: [],
        vugList: [],
        dgrwList: [],
    },
    watch: {
        trigger() {
            this.calculateShares();
            this.cleanNumber();
        },
        stopVal() {
            this.calculateShares();
            this.cleanNumber();
            this.calculatePercentFromStop();
        },
        stopPercent: function () {
            this.calculateShares();
            this.calculateStopFromPercent();
        },
        risk() {
            this.calculateShares();
        },
        equity() {
            this.calculateShares();
        },
        profitTrigger() {
            this.calculateProfit();
        },
        profitShares() {
            this.calculateProfit();
        },
        targetProfit() {
            this.calculateProfit();
        }
    },
    methods: {
        calculateShares() {
            this.shares = Math.floor(this.risk / (this.trigger - this.stopVal));
            this.updatePosition();
        },
        calculateRisk() {
            this.risk = Math.floor(this.shares * (this.trigger - this.stopVal));
            this.updatePosition();
        },
        activeSharesFunc() {
            this.shares = Math.floor(this.equity / this.trigger);
            this.calculateRisk();
        },
        riskDefult() {
            this.risk = 25;
            this.calculateShares();
        },
        updatePosition() {
            this.position = Math.floor(this.shares * this.trigger);
            (this.position > this.equity || this.position < 0 || this.shares < 0) ? this.tradeNotValid = true : this.tradeNotValid = false;
        },
        enterDot() {
            if (event.currentTarget.value.split('.').length < 2) {
                event.currentTarget.value = event.currentTarget.value + `.`;
                event.currentTarget.value = event.currentTarget.value.replace(' ', '');
            } else {
                if (this.trigger.slice(-1) === '.') {
                    this.trigger = this.trigger.slice(0, -1)
                }
                this.$refs.stopVal.focus();
            }
        },
        cleanNumber() {
            if (/[^0-9|.]+/g.test(this.trigger)) {
                this.trigger = this.trigger.slice(0, -1)
            }
            if (/[^0-9|.]+/g.test(this.stopVal || (this.stopVal.slice(-1) === '.' && this.stopVal.split('.').length > 2))) {
                this.stopVal = this.stopVal.slice(0, -1)
            }
            if (this.trigger.slice(-1) === '.' && this.trigger.split('.').length > 2) {
                if (this.trigger.slice(-1) === '.') {
                    this.trigger = this.trigger.slice(0, -1)
                }
                this.$refs.stopVal.focus();
            }

        },
        focusInput() {
            this.$refs.trigger.focus();
        },
        getTriggerValue() {
            this.profitTrigger = this.trigger;
        },
        getShares() {
            this.profitShares = this.shares;
        },
        calculateProfit() {
            this.profit = Math.floor(this.profitShares * (this.targetProfit - this.profitTrigger));
        },
        enterDotProfit() {
            if (event.currentTarget.value.split('.').length < 2) {
                event.currentTarget.value = event.currentTarget.value + `.`;
                event.currentTarget.value = event.currentTarget.value.replace(' ', '');
            }
        },
        clearForm() {
            [
                this.$refs.trigger,
                this.$refs.stopVal,
                this.$refs.stopPercent,
                this.$refs.firstTarget,
                this.$refs.secondTarget,
                this.$refs.thirdTarget,
                this.$refs.fourthTarget].forEach((val) => {
                    val.value = '';
                });
        },
        clearRow() {
            event.currentTarget.value = ''
        },
        buildEtfUrl() {
            window.open(`https://etfdb.com/etf/${this.stockOrEtfNameForUrl}/#holdings`);

        },
        buildFinvizUrl() {
            window.open(`https://finviz.com/quote.ashx?t=${this.stockOrEtfNameForUrl}`);
        },
        buildNasdaqUrl() {
            window.open(`https://www.nasdaq.com/market-activity/stocks/${this.stockOrEtfNameForUrl}`);
        },
        buildStockUrl() {
            window.open(`https://etfdb.com/stock/${this.stockOrEtfNameForUrl}`);
        },
        buildGuruUrl() {
            window.open(`https://www.gurufocus.com/stock/${this.stockOrEtfNameForUrl}/summary`);
        },
        buildStockAnalysisUrl() {
            window.open(`https://stockanalysis.com/stocks/${this.stockOrEtfNameForUrl}/financials/`);
        },
        buildTradingUrl() {
            window.open(`https://www.tradingview.com/chart/EvRa3Cdl/?symbol=${this.stockOrEtfNameForUrl}`);
        },
        buildTradingUrl() {
            window.open(`https://www.tradingview.com/chart/EvRa3Cdl/?symbol=${this.stockOrEtfNameForUrl}`);
        },
        buildAlphaUrl() {
            window.open(`https://seekingalpha.com/symbol/${this.stockOrEtfNameForUrl}/growth`);
        },
        openStockMap() {
            window.open(`https://finviz.com/map.ashx?t=sec`);
        },
        openEtfMap() {
            window.open(`https://finviz.com/map.ashx?t=etf`);
        },
        dataToModal(stockOrEtfName) {
            this.stockOrEtfNameForUrl = stockOrEtfName;
        },
        showDetails(name) {
            this.resetDisplayFlags();
            this.displayStocksAndEtfs = true;
            this.details = name || this.details;

            // Step 1: Initialize arrays to store information
            let chosenEtfArr = [];
            let chosenEtfstocks = [];
            let chosenEtfconnected = [];
            let chosenEtfFromStocks = [];

            // Step 2: Iterate over each ETF in etfArr
            this.etfArr.forEach(etf => {
                // Step 3: Check if the input details match stocks or connected of the current ETF
                if (etf.stocks.includes(this.details.toLowerCase()) || etf.connected.includes(this.details.toLowerCase())) {
                    // Step 4: Add ETF to the list if it contains the input details
                    chosenEtfFromStocks.push(etf.etf);

                    // Step 5: If the ETF matches the input details, add its stocks to chosenEtfArr
                    if (etf.etf === this.details) {
                        chosenEtfArr.push(etf.stocks);
                    }

                    // Step 6: Add ETF's stocks to chosenEtfstocks
                    etf.stocks.forEach(element => {
                        chosenEtfstocks.push(element);
                    });

                    // Step 7: Add ETF's connected to chosenEtfconnected
                    etf.connected.forEach(element => {
                        chosenEtfconnected.push(element);
                    });
                }
            });

            // Step 8: Initialize array to store information about each stock
            let chosenEtfstocksLength = [];

            // Step 9: Iterate over each element in chosenEtfstocks
            chosenEtfstocks.forEach((element, i) => {
                let obj = {};
                // Step 10: Set the name and length properties
                obj['name'] = element;
                obj['length'] = chosenEtfstocks.filter((v) => (v === element)).length;

                // Step 11: Set 'belongtoindex' to 'isbelong' if the element is the selected ETF
                if (element === this.details.toLowerCase()) {
                    obj['belongtoindex'] = 'isbelong';
                }

                // Step 12: Check if the element belongs to chosenEtfArr and set 'belongtoindex' accordingly
                if (chosenEtfArr.length) {
                    chosenEtfArr[0].forEach(el => {
                        if (el === element) {
                            obj['belongtoindex'] = 'isbelong';
                        }
                    });
                }

                // Step 13: Push the object to chosenEtfstocksLength array
                chosenEtfstocksLength.push(obj);
            });


            // Step 14: Initialize map object to keep track of unique stocks
            const map = {};

            // Step 15: Initialize array to store unique information about each stock
            const chosenEtfstocksLengthUniqe = [];

            // Step 16: Iterate over each element in chosenEtfstocksLength
            chosenEtfstocksLength.forEach(el => {
                // Step 17: Check if the element is not already in the map (unique)
                if (!map[JSON.stringify(el)]) {
                    // Step 18: Add the element to the map and push it to chosenEtfstocksLengthUniqe
                    map[JSON.stringify(el)] = true;
                    chosenEtfstocksLengthUniqe.push(el);
                }
            });

            // Step 19: Sort the array based on the 'length' property in descending order
            chosenEtfstocksLengthUniqe.sort((a, b) => b.length - a.length);

            // Step 20: Iterate over each element in chosenEtfstocksLengthUniqe
            chosenEtfstocksLengthUniqe.forEach((obj, i) => {
                // Step 21: Set 'length' property based on the count of stocks
                switch (obj.length) {
                    case 1:
                        chosenEtfstocksLengthUniqe[i].length = 'lowest-quality';
                        break;
                    case 2:
                        chosenEtfstocksLengthUniqe[i].length = 'low-quality';
                        break;
                    case 3:
                        chosenEtfstocksLengthUniqe[i].length = 'normal-quality';
                        break;
                    case 4:
                        chosenEtfstocksLengthUniqe[i].length = 'high-quality';
                        break;
                    case 5:
                        chosenEtfstocksLengthUniqe[i].length = 'highest-quality';
                        break;
                    default:
                        chosenEtfstocksLengthUniqe[i].length = 'highest-quality';
                        break;
                }
            });

            // Step 22: Define a function to filter and return unique elements
            const useFilter = el => {
                return el.filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
            };

            // Step 23: Filter the connected stocks to get unique elements
            let finalconnected = useFilter(chosenEtfconnected);

            // Step 24: Initialize array to store final connected objects
            let finalconnectedObj = [];

            // Step 25: Iterate over each element in finalconnected
            finalconnected.forEach((element) => {
                let obj = {};
                // Step 26: Check conditions and set properties accordingly
                if (chosenEtfFromStocks.includes(element) && !finalconnected.includes(this.details.toLowerCase()) || element === this.details.toLowerCase()) {
                    obj['isChosenEtf'] = 'isbelong';
                }
                obj['name'] = element;
                finalconnectedObj.push(obj);
            });

            // Step 27: Set detailsResultsStocks with the final results
            this.detailsResultsStocks = {
                "etf": this.details,
                "stocks": chosenEtfstocksLengthUniqe,
                "connected": finalconnectedObj
            };

            // Step 28: Reset the details property
            this.details = '';

        },
        showUrlMethod() {
            this.showUrl = !this.showUrl;
        },
        calculateStopFromPercent() {
            const stopPercentage = parseFloat(this.stopPercent) / 100;
            this.stopVal = this.formatNumber(this.trigger - this.trigger * stopPercentage);
            this.calculateTargets();
        },
        calculatePercentFromStop() {
            const stopValue = parseFloat(this.stopVal);
            this.stopPercent = this.formatNumber(((this.trigger - stopValue) / this.trigger) * 100);
            this.calculateTargets();
        },
        calculateTargets() {
            const stopValue = parseFloat(this.stopVal);
            this.firstTarget = this.formatNumber(parseFloat(this.trigger) + parseFloat(this.trigger - stopValue));
            this.secondTarget = this.formatNumber(parseFloat(this.trigger) + 2 * parseFloat(this.trigger - stopValue));
            this.thirdTarget = this.formatNumber(parseFloat(this.trigger) + 3 * parseFloat(this.trigger - stopValue));
            this.fourthTarget = this.formatNumber(parseFloat(this.trigger) + 4 * parseFloat(this.trigger - stopValue));
        },
        formatNumber(value) {
            const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
            return isNaN(formattedValue) ? '' : formattedValue;
        },

        /**
         * Display a list based on the specified parameters.
         * @param {string} listType - Type of the list (e.g., 'schd', 'dgro', 'dgrw').
         * @param {string} displayFlag - Flag to control the display of the list in the UI.
         * @param {string} dataList - Property to store the generated list data in the component.
         * @param {Array} db - Database or array of stocks to generate the list from.
         */
        showList(listType, displayFlag, dataList, db) {
            // Reset all display flags to false
            this.resetDisplayFlags();
            // Set the display flag for the current list type to true
            this[displayFlag] = true;
            // Generate the list and the titles
            this[dataList] = db.map((stock) => {
                // including lists from other databases except the current one.
                const title = this.connectedDB(stock.ticker, listType);
                const chowder = this.defineTickerColor(stock.ticker, listType);
                // Merge the stock information with the generated title information
                return {
                    ...stock,
                    ...title,
                    ...chowder
                };
            }).sort((a, b) => b.percent - a.percent); // Sort the list based on the 'percent' property in descending order
        },

        /**
         * Create title information for a stock based on its presence in different lists.
         * @param {string} ticker - Ticker symbol of the stock.
         * @param {string} listType - Name of DB.
         * @returns {Object} - Object containing the stock ticker and associated lists.
         */
        connectedDB(ticker, listType) {
            // Define array for different lists
            const databaseKeys = ['kings', 'aristocrats', 'schd', 'dgro', 'vug', 'dgrw'];

            // Initialize result object with the stock ticker and an empty array for lists
            const result = { ticker, lists: [] };

            // Check if the listType is in the array
            if (databaseKeys.includes(listType)) {
                // Filter out the current listType and add the rest to the lists array
                result.lists = databaseKeys.filter(key => key !== listType);
            }

            return { ...result };
        },

        defineTickerColor(ticker, listType) {
            // Define color constants
            const HIGH_SCORE_COLOR = "linear-gradient(45deg, #137413 0%, gold 50%)";
            const MODERATE_SCORE_COLOR = "linear-gradient(45deg, #24AE24 0%, gold 50%)";
            const LOW_SCORE_COLOR = "linear-gradient(45deg, #AFEAAF 30%, gold 70%)";
            const GOLD_SCORE_COLOR = "gold";
            const DEEP_GREEN_SCORE_COLOR = "#137413";
            const MODERATE_GREEN_SCORE_COLOR = "#24AE24";
            const LIGHT_GREEN_SCORE_COLOR = "#AFEAAF";

            // Define databases for different lists
            const databases = {
                kings: this.kingsDB,
                aristocrats: this.aristocratsDB,
                schd: this.schdDB,
                dgro: this.dgroDB,
                vug: this.vugDB,
                dgrw: this.dgrwDB,
            };

            // Find the stock in the database for the current ticker
            const stock = databases[listType].find((item) => item.ticker === ticker);

            if (stock) {
                let color = "";
                let chowderNumber = stock.dyield + stock.dgrowth || 0;

                switch (true) {
                    case stock.ticker && stock.dyield > 4 && (stock.dyield + stock.dgrowth) > 11 && stock.gfscore >= 95:
                        color = HIGH_SCORE_COLOR;
                        break;
                    case stock.ticker && stock.dyield > 3 && (stock.dyield + stock.dgrowth) > 11 && stock.gfscore >= 95:
                        color = MODERATE_SCORE_COLOR;
                        break;
                    case stock.ticker && (stock.dyield + stock.dgrowth) > 11 && stock.gfscore >= 95:
                        color = LOW_SCORE_COLOR;
                        break;
                    case stock.ticker && stock.gfscore >= 95:
                        color = GOLD_SCORE_COLOR;
                        break;
                    case stock.ticker && stock.dyield > 4 && (stock.dyield + stock.dgrowth) > 11:
                        color = DEEP_GREEN_SCORE_COLOR;
                        break;
                    case stock.ticker && stock.dyield > 3 && (stock.dyield + stock.dgrowth) > 11:
                        color = MODERATE_GREEN_SCORE_COLOR;
                        break;
                    case stock.ticker && (stock.dyield + stock.dgrowth) > 11:
                        color = LIGHT_GREEN_SCORE_COLOR;
                        break;
                }

                return { color, chowderNumber };
            }

            // If no matching stock is found, return a default color and value
            return { color: "", chowderNumber: 0 };
        },
        resetDisplayFlags() {
            this.displayDividendkings = false;
            this.displayDividendAristocrats = false;
            this.displayStocksAndEtfs = false;
            this.displaySCHD = false;
            this.displayDGRO = false;
            this.displayVUG = false;
            this.displayDGRW = false;
        },
        generateTitle(elem, listType) {
            const status = elem.lists.join(', ');
            const uppercaseName = elem.name.charAt(0).toUpperCase() + elem.name.slice(1);

            let gfscore = '';
            let dividendText = '';

            if (elem && elem.gfscore !== undefined) {
                gfscore = `GuruFocus Score: ${elem.gfscore}`;
            }

            if (elem && elem.chowderNumber !== undefined) {
                dividendText = `Dividend yield: ${elem.dyield}%\nDividend growth(5Y): ${elem.dgrowth}%\nChowder: ${elem.chowderNumber.toFixed(2)}`;
            }

            if (listType === 'kingsDB' || listType === 'aristocratsDB') {
                // Use the "years" format for dividendKings and dividendAristocrats
                return `${uppercaseName}\n${elem.dividendincrease} years ${status ? ' - ' + status : ''}`;
            } else {
                // Use the percentage and status format for dgro and schd
                return `${uppercaseName}\nHolding: ${elem.percent.toFixed(2)}%${status ? ' \nAlso in: ' + status : ''}${gfscore ? '\n' + gfscore : ""} ${dividendText ? ' \n' + dividendText : ''}`;
            }
        },
    },

    mounted() {
        this.focusInput();
    },

});