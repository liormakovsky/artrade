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
        dividendkingsArr: dividendkings,
        dividendAristocratsArr: dividendAristocrats,
        showUrl: false,
        showStockModal: false,
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
        dividendKingsList: [],
        dividendAristocratsList: [],
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
        buildFinanceUrl() {
            window.open(`https://stockanalysis.com/stocks/${this.stockOrEtfNameForUrl}/financials/`);
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
            this.displayDividendkings = false;
            this.displayDividendAristocrats = false;
            this.displayStocksAndEtfs = true;
            this.details = name ? name : this.details;
            let chosenEtfArr = [];
            let chosenEtfstocks = [];
            let chosenEtfconnected = [];
            let chosenEtfFromStocks = [];
            this.etfArr.forEach(etf => {
                if (etf.stocks.includes(this.details) || etf.connected.includes(this.details)) {
                    chosenEtfFromStocks.push(etf.etf);
                    if (etf.etf === this.details) {
                        chosenEtfArr.push(etf.stocks);
                    }
                    etf.stocks.forEach(element => {
                        chosenEtfstocks.push(element);
                    });
                    etf.connected.forEach(element => {
                        chosenEtfconnected.push(element);
                    });
                }
            });

            chosenEtfstocksLength = [];
            chosenEtfstocks.forEach((element, i) => {
                let obj = {};
                obj['name'] = element,
                    obj['length'] = chosenEtfstocks.filter((v) => (v === element)).length;
                if (element === this.details) {
                    obj['belongtoindex'] = 'isbelong';
                }
                if (chosenEtfArr.length) {
                    chosenEtfArr[0].forEach(el => {
                        if (el === element) {
                            obj['belongtoindex'] = 'isbelong';
                        }
                    });
                }

                chosenEtfstocksLength.push(obj);
            });

            const map = {};
            const chosenEtfstocksLengthUniqe = [];
            chosenEtfstocksLength.forEach(el => {
                if (!map[JSON.stringify(el)]) {
                    map[JSON.stringify(el)] = true;
                    chosenEtfstocksLengthUniqe.push(el);
                }
            });
            chosenEtfstocksLengthUniqe.sort(function (a, b) { return b.length - a.length });
            chosenEtfstocksLengthUniqe.forEach((obj, i) => {
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
            const useFilter = el => {
                return el.filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
            };
            let finalconnected = useFilter(chosenEtfconnected);
            let finalconnectedObj = [];
            finalconnected.forEach((element) => {
                let obj = {};
                if (chosenEtfFromStocks.includes(element) && !finalconnected.includes(this.details) || element === this.details) {
                    obj['isChosenEtf'] = 'isbelong';
                };
                obj['name'] = element,
                    finalconnectedObj.push(obj);
            });

            this.detailsResultsStocks = {
                "etf": this.details,
                "stocks": chosenEtfstocksLengthUniqe,
                "connected": finalconnectedObj
            }
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
        showDividendKingsList() {
            this.displayDividendkings = true;
            this.displayDividendAristocrats = false;
            this.displayStocksAndEtfs = false;
            const sortedDividendKings = this.dividendkingsArr.sort((a, b) => b.dividendincrease - a.dividendincrease);
            this.dividendKingsList = sortedDividendKings.map(item => item.ticker);
        },
        showDividendAristocratsList() {
            this.displayDividendkings = false;
            this.displayDividendAristocrats = true;
            this.displayStocksAndEtfs = false;
            this.dividendAristocratsList = this.dividendAristocratsArr.map(item => item.ticker);
        },
    },

    mounted() {
        this.focusInput();
    },

});