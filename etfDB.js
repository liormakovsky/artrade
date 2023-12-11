const etfDB = [
  {
    etf: "xlf",
    stocks: ["brk.b", "jpm", "v", "ma", "bac"],
    connected: ["xlf", "dia"],
  },
  {
    etf: "xlv",
    stocks: ["unh", "lly", "jnj", "mrk", "abbv", "tmo"],
    connected: ["xlv", "dia"],
  },
  {
    etf: "xle",
    stocks: ["xom", "cvx", "eog", "slb", "cop"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xlk",
    stocks: ["aapl", "msft", "nvda", "avgo", "adbe", "csco"],
    connected: ["xlk", "spy", "qqq", "dia"],
  },
  {
    etf: "xop",
    stocks: ["den", "vlo", "xom", "cvx", "cop"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xly",
    stocks: ["amzn", "tsla", "mcd", "hd", "low"],
    connected: ["xly", "dia"],
  },
  {
    etf: "xli",
    stocks: ["cat", "unp", "hon", "ge", "ba"],
    connected: ["xli", "dia"],
  },
  {
    etf: "xlb",
    stocks: ["lin", "apd", "shw", "fcx", "ecl"],
    connected: ["xlb"],
  },
  {
    etf: "xlu",
    stocks: ["nee", "so", "duk", "sre", "aep"],
    connected: ["xlu"],
  },
  {
    etf: "xlp",
    stocks: ["pg", "cost", "pep", "wmt", "pm"],
    connected: ["xlp"],
  },
  {
    etf: "xlc",
    stocks: ["meta", "googl", "goog", "t", "chtr", "tmus"],
    connected: ["xlc", "spy", "qqq"],
  },
  {
    etf: "xlre",
    stocks: ["pld", "amt", "eqix", "well", "psa", "cci"],
    connected: ["xlc"],
  },
  {
    etf: "xme",
    stocks: ["arch", "amr", "btu", "rgld", "nem", "aa"],
    connected: ["xlc"],
  },
  {
    etf: "spy",
    stocks: ["aapl", "msft", "amzn", "nvda", "googl", "meta", "tsla", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "qqq",
    stocks: ["aapl", "msft", "amzn", "nvda", "meta", "tsla", "googl", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "dia",
    stocks: ["unh", "gs", "msft", "hd", "cat", "mcd", "amgn", "v"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "vt",
    stocks: ["aapl", "msft", "amzn", "nvda", "googl", "tsla", "meta", "goog"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
];

//https://www.fool.com/investing/stock-market/types-of-stocks/dividend-stocks/dividend-kings/#:~:text=A%20Dividend%20King%20is%20a,steady%20profits%20year%20after%20year.
const kingsDB = [
  {
    "ticker": "awr",
    "name": "american states water",
    "sector": "utilities",
    "dividendincrease": 69
  },
  {
    "ticker": "dov",
    "name": "dover corporation",
    "sector": "industrials",
    "dividendincrease": 68
  },
  {
    "ticker": "nwn",
    "name": "northwest natural holding",
    "sector": "utilities",
    "dividendincrease": 68
  },
  {
    "ticker": "gpc",
    "name": "genuine parts",
    "sector": "consumer goods",
    "dividendincrease": 67
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "sector": "consumer goods",
    "dividendincrease": 67
  },
  {
    "ticker": "ph",
    "name": "parker hannifin",
    "sector": "industrials",
    "dividendincrease": 67
  },
  {
    "ticker": "emr",
    "name": "emerson electric",
    "sector": "industrials",
    "dividendincrease": 66
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "sector": "industrials",
    "dividendincrease": 65
  },
  {
    "ticker": "cinf",
    "name": "cincinnati financial",
    "sector": "financials",
    "dividendincrease": 62
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "sector": "consumer goods",
    "dividendincrease": 61
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "sector": "healthcare",
    "dividendincrease": 61
  },
  {
    "ticker": "kvue",
    "name": "kenvue",
    "sector": "consumer goods",
    "dividendincrease": 61
  },
  {
    "ticker": "lanc",
    "name": "lancaster colony",
    "sector": "consumer goods",
    "dividendincrease": 60
  },
  {
    "ticker": "cl",
    "name": "colgate-palmolive",
    "sector": "consumer goods",
    "dividendincrease": 60
  },
  {
    "ticker": "ndsn",
    "name": "nordson",
    "sector": "industrials",
    "dividendincrease": 60
  },
  {
    "ticker": "fmcb",
    "name": "farmers & merchants bancorp",
    "sector": "financials",
    "dividendincrease": 58
  },
  {
    "ticker": "hrl",
    "name": "hormel foods",
    "sector": "consumer goods",
    "dividendincrease": 57
  },
  {
    "ticker": "abm",
    "name": "abm industries",
    "sector": "industrials",
    "dividendincrease": 56
  },
  {
    "ticker": "cwt",
    "name": "california water service group",
    "sector": "utilities",
    "dividendincrease": 56
  },
  {
    "ticker": "swk",
    "name": "stanley black & decker",
    "sector": "industrials",
    "dividendincrease": 56
  },
  {
    "ticker": "frt",
    "name": "federal realty investment trust",
    "sector": "real estate",
    "dividendincrease": 56
  },
  {
    "ticker": "scl",
    "name": "stepan company",
    "sector": "industrials",
    "dividendincrease": 55
  },
  {
    "ticker": "cbsh",
    "name": "commerce bancshares",
    "sector": "financials",
    "dividendincrease": 55
  },
  {
    "ticker": "sjw",
    "name": "sjw group",
    "sector": "utilities",
    "dividendincrease": 55
  },
  {
    "ticker": "syy",
    "name": "sysco",
    "sector": "consumer goods",
    "dividendincrease": 54
  },
  {
    "ticker": "ful",
    "name": "h.b. fuller",
    "sector": "materials",
    "dividendincrease": 54
  },
  {
    "ticker": "mo",
    "name": "altria group",
    "sector": "consumer goods",
    "dividendincrease": 54
  },
  {
    "ticker": "msa",
    "name": "msa safety",
    "sector": "industrials",
    "dividendincrease": 53
  },
  {
    "ticker": "nfg",
    "name": "national fuel gas",
    "sector": "energy",
    "dividendincrease": 53
  },
  {
    "ticker": "uvv",
    "name": "universal corporation",
    "sector": "consumer goods",
    "dividendincrease": 53
  },
  {
    "ticker": "itw",
    "name": "illinois tool works",
    "sector": "industrials",
    "dividendincrease": 53
  },
  {
    "ticker": "bkh",
    "name": "black hills corp.",
    "sector": "utilities",
    "dividendincrease": 52
  },
  {
    "ticker": "gww",
    "name": "w.w. grainger",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "tgt",
    "name": "target",
    "sector": "consumer goods",
    "dividendincrease": 52
  },
  {
    "ticker": "leg",
    "name": "leggett & platt",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "ppg",
    "name": "ppg industries",
    "sector": "industrials",
    "dividendincrease": 52
  },
  {
    "ticker": "bdx",
    "name": "becton, dickinson & co.",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "abbv",
    "name": "abbvie",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "abt",
    "name": "abbott labs",
    "sector": "healthcare",
    "dividendincrease": 51
  },
  {
    "ticker": "tnc",
    "name": "tennant",
    "sector": "industrials",
    "dividendincrease": 51
  },
  {
    "ticker": "kmb",
    "name": "kimberly clark",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "cduaf",
    "name": "canadian utilities",
    "sector": "utilities",
    "dividendincrease": 51
  },
  {
    "ticker": "pep",
    "name": "pepsico",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "low",
    "name": "lowe's",
    "sector": "consumer goods",
    "dividendincrease": 51
  },
  {
    "ticker": "nue",
    "name": "nucor",
    "sector": "industrials",
    "dividendincrease": 50
  },
  {
    "ticker": "spgi",
    "name": "s&p global",
    "sector": "financials",
    "dividendincrease": 50
  },
  {
    "ticker": "tr",
    "name": "tootsie roll industries",
    "sector": "consumer goods",
    "dividendincrease": 50
  },
  {
    "ticker": "wmt",
    "name": "walmart inc.",
    "sector": "consumer goods",
    "dividendincrease": 50
  },
  {
    "ticker": "grc",
    "name": "the gorman-rupp company",
    "sector": "industrials",
    "dividendincrease": 50
  },
  {
    "ticker": "msex",
    "name": "middlesex water",
    "sector": "utilities",
    "dividendincrease": 50
  },
  {
    "ticker": "adm",
    "name": "adm",
    "sector": "industrials",
    "dividendincrease": 50
  }
]


//https://www.simplysafedividends.com/world-of-dividends/posts/6-2023-dividend-aristocrats-list-all-68-our-top-5-picks
const aristocratsDB = [
  {
    "ticker": "wba",
    "name": "walgreens boots alliance",
    "industry": "drug retail",
    "dividendincrease": 47
  },
  {
    "ticker": "leg",
    "name": "leggett & platt",
    "industry": "home furnishings",
    "dividendincrease": 52
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "industry": "industrial conglomerates",
    "dividendincrease": 65
  },
  {
    "ticker": "o",
    "name": "realty income",
    "industry": "retail reits",
    "dividendincrease": 29
  },
  {
    "ticker": "amcr",
    "name": "amcor",
    "industry": "paper and plastic packaging products and materials",
    "dividendincrease": 39
  },
  {
    "ticker": "trow",
    "name": "t. rowe price",
    "industry": "asset management and custody banks",
    "dividendincrease": 39
  },
  {
    "ticker": "ben",
    "name": "franklin resources",
    "industry": "asset management and custody banks",
    "dividendincrease": 42
  },
  {
    "ticker": "frt",
    "name": "federal realty",
    "industry": "retail reits",
    "dividendincrease": 56
  },
  {
    "ticker": "abbv",
    "name": "abbvie",
    "industry": "biotechnology",
    "dividendincrease": 51
  },
  {
    "ticker": "ibm",
    "name": "international business machines",
    "industry": "it consulting and other services",
    "dividendincrease": 28
  },
  {
    "ticker": "ess",
    "name": "essex property trust",
    "industry": "multi-family residential reits",
    "dividendincrease": 29
  },
  {
    "ticker": "cvx",
    "name": "chevron",
    "industry": "integrated oil and gas",
    "dividendincrease": 36
  },
  {
    "ticker": "kvue",
    "name": "kenvue",
    "industry": "personal care products",
    "dividendincrease": 61
  },
  {
    "ticker": "kmb",
    "name": "kimberly-clark",
    "industry": "household products",
    "dividendincrease": 51
  },
  {
    "ticker": "sjm",
    "name": "j.m. smucker",
    "industry": "packaged foods and meats",
    "dividendincrease": 21
  },
  {
    "ticker": "mdt",
    "name": "medtronic",
    "industry": "health care equipment",
    "dividendincrease": 46
  },
  {
    "ticker": "xom",
    "name": "exxon mobil",
    "industry": "integrated oil and gas",
    "dividendincrease": 40
  },
  {
    "ticker": "ed",
    "name": "consolidated edison",
    "industry": "multi-utilities",
    "dividendincrease": 49
  },
  {
    "ticker": "swk",
    "name": "stanley black & decker",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 56
  },
  {
    "ticker": "clx",
    "name": "clorox",
    "industry": "household products",
    "dividendincrease": 60
  },
  {
    "ticker": "tgt",
    "name": "target",
    "industry": "consumer staples merchandise retail",
    "dividendincrease": 52
  },
  {
    "ticker": "hrl",
    "name": "hormel foods",
    "industry": "packaged foods and meats",
    "dividendincrease": 57
  },
  {
    "ticker": "nee",
    "name": "nextera energy",
    "industry": "electric utilities",
    "dividendincrease": 28
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "industry": "soft drinks and non-alcoholic beverages",
    "dividendincrease": 61
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "industry": "pharmaceuticals",
    "dividendincrease": 61
  },
  {
    "ticker": "pep",
    "name": "pepsico",
    "industry": "soft drinks and non-alcoholic beverages",
    "dividendincrease": 51
  },
  {
    "ticker": "cinf",
    "name": "cincinnati financial",
    "industry": "property and casualty insurance",
    "dividendincrease": 62
  },
  {
    "ticker": "chrw",
    "name": "c.h. robinson",
    "industry": "air freight and logistics",
    "dividendincrease": 25
  },
  {
    "ticker": "ato",
    "name": "atmos energy",
    "industry": "gas utilities",
    "dividendincrease": 39
  },
  {
    "ticker": "syy",
    "name": "sysco",
    "industry": "food distributors",
    "dividendincrease": 54
  },
  {
    "ticker": "gpc",
    "name": "genuine parts company",
    "industry": "distributors",
    "dividendincrease": 67
  },
  {
    "ticker": "apd",
    "name": "air products and chemicals",
    "industry": "industrial gases",
    "dividendincrease": 41
  },
  {
    "ticker": "cl",
    "name": "colgate-palmolive",
    "industry": "household products",
    "dividendincrease": 60
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "industry": "household products",
    "dividendincrease": 67
  },
  {
    "ticker": "mcd",
    "name": "mcdonald's",
    "industry": "restaurants",
    "dividendincrease": 46
  },
  {
    "ticker": "afl",
    "name": "aflac",
    "industry": "life and health insurance",
    "dividendincrease": 40
  },
  {
    "ticker": "adp",
    "name": "automatic data processing",
    "industry": "human resource and employment services",
    "dividendincrease": 48
  },
  {
    "ticker": "adm",
    "name": "archer-daniels-midland",
    "industry": "agricultural products and services",
    "dividendincrease": 50
  },
  {
    "ticker": "emr",
    "name": "emerson electric",
    "industry": "electrical components and equipment",
    "dividendincrease": 66
  },
  {
    "ticker": "mkc",
    "name": "mccormick & company",
    "industry": "packaged foods and meats",
    "dividendincrease": 37
  },
  {
    "ticker": "itw",
    "name": "illinois tool works",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 53
  },
  {
    "ticker": "low",
    "name": "lowe's",
    "industry": "home improvement retail",
    "dividendincrease": 51
  },
  {
    "ticker": "gd",
    "name": "general dynamics",
    "industry": "aerospace and defense",
    "dividendincrease": 30
  },
  {
    "ticker": "abt",
    "name": "abbott laboratories",
    "industry": "health care equipment",
    "dividendincrease": 51
  },
  {
    "ticker": "cat",
    "name": "caterpillar",
    "industry": "construction machinery and heavy transportation equipment",
    "dividendincrease": 30
  },
  {
    "ticker": "cah",
    "name": "cardinal health",
    "industry": "health care distributors",
    "dividendincrease": 38
  },
  {
    "ticker": "ppg",
    "name": "ppg industries",
    "industry": "specialty chemicals",
    "dividendincrease": 52
  },
  {
    "ticker": "aos",
    "name": "a. o. smith",
    "industry": "building products",
    "dividendincrease": 30
  },
  {
    "ticker": "bdx",
    "name": "becton, dickinson and company",
    "industry": "health care equipment",
    "dividendincrease": 51
  },
  {
    "ticker": "cb",
    "name": "chubb",
    "industry": "property and casualty insurance",
    "dividendincrease": 29
  },
  {
    "ticker": "dov",
    "name": "dover",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 68
  },
  {
    "ticker": "bf.b",
    "name": "brown-forman",
    "industry": "distillers and vintners",
    "dividendincrease": 39
  },
  {
    "ticker": "pnr",
    "name": "pentair",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 47
  },
  {
    "ticker": "wmt",
    "name": "walmart",
    "industry": "consumer staples merchandise retail",
    "dividendincrease": 50
  },
  {
    "ticker": "nue",
    "name": "nucor",
    "industry": "steel",
    "dividendincrease": 50
  },
  {
    "ticker": "lin",
    "name": "linde",
    "industry": "industrial gases",
    "dividendincrease": 31
  },
  {
    "ticker": "alb",
    "name": "albemarle",
    "industry": "specialty chemicals",
    "dividendincrease": 29
  },
  {
    "ticker": "chd",
    "name": "church & dwight",
    "industry": "household products",
    "dividendincrease": 27
  },
  {
    "ticker": "expd",
    "name": "expeditors international of washington",
    "industry": "air freight and logistics",
    "dividendincrease": 29
  },
  {
    "ticker": "ndsn",
    "name": "nordson corporation",
    "industry": "industrial machinery and supplies and components",
    "dividendincrease": 60
  },
  {
    "ticker": "ecl",
    "name": "ecolab",
    "industry": "specialty chemicals",
    "dividendincrease": 31
  },
  {
    "ticker": "ctas",
    "name": "cintas",
    "industry": "diversified support services",
    "dividendincrease": 40
  },
  {
    "ticker": "gww",
    "name": "w.w. grainger",
    "industry": "trading companies and distributors",
    "dividendincrease": 52
  },
  {
    "ticker": "shw",
    "name": "sherwin-williams",
    "industry": "specialty chemicals",
    "dividendincrease": 45
  },
  {
    "ticker": "spgi",
    "name": "s&p global",
    "industry": "financial exchanges and data",
    "dividendincrease": 50
  },
  {
    "ticker": "bro",
    "name": "brown & brown",
    "industry": "insurance brokers",
    "dividendincrease": 29
  },
  {
    "ticker": "rop",
    "name": "roper technologies",
    "industry": "application software",
    "dividendincrease": 30
  },
  {
    "ticker": "wst",
    "name": "west pharmaceutical services",
    "industry": "life sciences tools and services",
    "dividendincrease": 30
  }
];

//https://www.schwabassetmanagement.com/products/schd
//https://www.gurufocus.com/stock/UPS/dividend
//https://www.financecharts.com/stocks/FAST/all-metrics

const schdDB = [
  {
    "ticker": "vz",
    "name": "verizon communications inc",
    "percent": 4.538278868,
    "gfscore": 75,
    "cagr": -3.26,
    "dyieldoncost": 7.74,
    "dyield": 6.91,
    "dgrowth": 2.1,

  },
  {
    "ticker": "amgn",
    "name": "amgen inc",
    "percent": 4.382195393,
    "gfscore": 89,
    "cagr": 9.06,
    "dyieldoncost": 5.36,
    "dyield": 3.16,
    "dgrowth": 10.8,
  },
  {
    "ticker": "avgo",
    "name": "broadcom inc",
    "percent": 4.294932269,
    "gfscore": 83,
    "cagr": 35.74,
    "dyieldoncost": 4.78,
    "dyield": 2.04,
    "dgrowth": 30.5,
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "percent": 4.023509138,
    "gfscore": 81,
    "cagr": 6.61,
    "dyieldoncost": 3.68,
    "dyield": 3.14,
    "dgrowth": 3.2,
  },
  {
    "ticker": "abbv",
    "name": "abbvie inc",
    "percent": 3.957423013,
    "gfscore": 91,
    "cagr": 14.97,
    "dyieldoncost": 8.26,
    "dyield": 4.24,
    "dgrowth": 15.9,
  },
  {
    "ticker": "pep",
    "name": "pepsico inc",
    "percent": 3.89775965,
    "gfscore": 85,
    "cagr": 10.05,
    "dyieldoncost": 4.17,
    "dyield": 2.95,
    "dgrowth": 6.9,
  },
  {
    "ticker": "mrk",
    "name": "merck & co inc",
    "percent": 3.894525156,
    "gfscore": 84,
    "cagr": 9.91,
    "dyieldoncost": 4.29,
    "dyield": 2.92,
    "dgrowth": 8.7,
  },
  {
    "ticker": "hd",
    "name": "home depot inc",
    "percent": 3.891616754,
    "gfscore": 94,
    "cagr": 15.18,
    "dyieldoncost": 5.45,
    "dyield": 2.56,
    "dgrowth": 16.4,
  },
  {
    "ticker": "blk",
    "name": "blackrock inc",
    "percent": 3.693024192,
    "gfscore": 93,
    "cagr": 14.45,
    "dyieldoncost": 5.06,
    "dyield": 2.69,
    "dgrowth": 13.4,
  },
  {
    "ticker": "txn",
    "name": "texas instrument inc",
    "percent": 3.677504473,
    "gfscore": 93,
    "cagr": 12.22,
    "dyieldoncost": 7.05,
    "dyield": 3.31,
    "dgrowth": 17.1,
  },
  {
    "ticker": "ups",
    "name": "united parcel service inc class b",
    "percent": 3.606950615,
    "gfscore": 95,
    "cagr": 9.70,
    "dyieldoncost": 6.76,
    "dyield": 4.17,
    "dgrowth": 10.3,
  },
  {
    "ticker": "pfe",
    "name": "pfizer inc",
    "percent": 3.587710061,
    "gfscore": 86,
    "cagr": -4.29,
    "dyieldoncost": 7.12,
    "dyield": 5.7,
    "dgrowth": 4.6,
  },
  {
    "ticker": "cvx",
    "name": "chevron corp",
    "percent": 3.487591741,
    "gfscore": 86,
    "cagr": 8.28,
    "dyieldoncost": 5.45,
    "dyield": 4.24,
    "dgrowth": 5.8,
  },
  {
    "ticker": "csco",
    "name": "cisco systems inc",
    "percent": 3.425295365,
    "gfscore": 93,
    "cagr": 2.92,
    "dyieldoncost": 3.89,
    "dyield": 3.27,
    "dgrowth": 4.1,
  },
  {
    "ticker": "lmt",
    "name": "lockheed martin corp",
    "percent": 3.312875635,
    "gfscore": 89,
    "cagr": 11.48,
    "dyieldoncost": 4.12,
    "dyield": 2.8,
    "dgrowth": 8.9,
  },
  {
    "ticker": "adp",
    "name": "automatic data processing inc",
    "percent": 3.117900277,
    "gfscore": 94,
    "cagr": 11.63,
    "dyieldoncost": 3.96,
    "dyield": 2.41,
    "dgrowth": 12.4,
  },
  {
    "ticker": "bx",
    "name": "blackstone inc",
    "percent": 2.60443362,
    "gfscore": 61,
    "cagr": 31.35,
    "dyieldoncost": 5.96,
    "dyield": 2.96,
    "dgrowth": 15.2,
  },
  {
    "ticker": "mo",
    "name": "altria group inc",
    "percent": 2.463297965,
    "gfscore": 76,
    "cagr": 1.72,
    "dyieldoncost": 12.89,
    "dyield": 9.48,
    "dgrowth": 7,
  },
  {
    "ticker": "eog",
    "name": "eog resources inc",
    "percent": 2.362705918,
    "gfscore": 88,
    "cagr": 6.23,
    "dyieldoncost": 11.79,
    "dyield": 3.02,
    "dgrowth": 33.4,
  },
  {
    "ticker": "itw",
    "name": "illinois tool inc",
    "percent": 2.198743411,
    "gfscore": 88,
    "cagr": 15.09,
    "dyieldoncost": 6.78,
    "dyield": 2.27,
    "dgrowth": 11.4,
  },
  {
    "ticker": "mmm",
    "name": "3m",
    "percent": 1.794027537,
    "gfscore": 83,
    "cagr": -9.52,
    "dyieldoncost": 7.16,
    "dyield": 5.85,
    "dgrowth": 4.3,
  },
  {
    "ticker": "usb",
    "name": "us bancorp",
    "percent": 1.745501733,
    "gfscore": 81,
    "cagr": -1.98,
    "dyieldoncost": 7.52,
    "dyield": 4.89,
    "dgrowth": 9.9,
  },
  {
    "ticker": "vlo",
    "name": "valero energy corp",
    "percent": 1.487627321,
    "gfscore": 90,
    "cagr": 13.59,
    "dyieldoncost": 4.68,
    "dyield": 3.31,
    "dgrowth": 7,
  },
  {
    "ticker": "kmb",
    "name": "kimberly clark corp",
    "percent": 1.370255339,
    "gfscore": 72,
    "cagr": 4.79,
    "dyieldoncost": 4.82,
    "dyield": 3.89,
    "dgrowth": 3.9,
  },
  {
    "ticker": "f",
    "name": "ford motor",
    "percent": 1.323539967,
    "gfscore": 73,
    "cagr": 7.34,
    "dyieldoncost": 1.81,
    "dyield": 5.58,
    "dgrowth": -19.7,
  },
  {
    "ticker": "payx",
    "name": "paychex inc",
    "percent": 1.284559252,
    "gfscore": 97,
    "cagr": 15,
    "dyieldoncost": 4.24,
    "dyield": 2.86,
    "dgrowth": 8.5,
  },
  {
    "ticker": "all",
    "name": "allstate corp",
    "percent": 1.189561257,
    "gfscore": 75,
    "cagr": 12.15,
    "dyieldoncost": 6.05,
    "dyield": 2.55,
    "dgrowth": 18.5,
  },
  {
    "ticker": "fast",
    "name": "fastenal",
    "percent": 1.124073247,
    "gfscore": 97,
    "cagr": 19.19,
    "dyieldoncost": 4.35,
    "dyield": 2.26,
    "dgrowth": 14,
  },
  {
    "ticker": "nem",
    "name": "newmont",
    "percent": 1.04841683,
    "gfscore": 68,
    "cagr": 7.57,
    "dyieldoncost": 38.96,
    "dyield": 4.09,
    "dgrowth": 56.2,
  },
  {
    "ticker": "oke",
    "name": "oneok inc",
    "percent": 1.011224214,
    "gfscore": 83,
    "cagr": 9.09,
    "dyieldoncost": 7.44,
    "dyield": 5.56,
    "dgrowth": 6.1,
  }
];

// https://www.ishares.com/us/products/264623/ishares-core-dividend-growth-etf.
const dgroDB = [
  {
    "ticker": "msft",
    "name": "microsoft corp",
    "percent": 3.38,
    "gfscore": 92,
    "cagr": 28.48,
    "dyield": 0.81,
    "dyieldoncost": 1.21,
    "dgrowth": 10.1
  },
  {
    "ticker": "jpm",
    "name": "jpmorgan chase & co",
    "percent": 3.01,
    "gfscore": 92,
    "cagr": 10.41,
    "dyield": 2.69,
    "dyieldoncost": 4.64,
    "dgrowth": 12.9
  },
  {
    "ticker": "aapl",
    "name": "apple inc",
    "percent": 2.98,
    "gfscore": 93,
    "cagr": 34.44,
    "dyield": 0.50,
    "dyieldoncost": 0.67,
    "dgrowth": 6.6
  },
  {
    "ticker": "jnj",
    "name": "johnson & johnson",
    "percent": 2.71,
    "gfscore": 87,
    "cagr": 3.86,
    "dyield": 3.08,
    "dyieldoncost": 4.11,
    "dgrowth": 6
  },
  {
    "ticker": "abbv",
    "name": "abbvie inc",
    "percent": 2.50,
    "gfscore": 91,
    "cagr": 14.97,
    "dyield": 4.24,
    "dyieldoncost": 8.26,
    "dgrowth": 15.9
  },
  {
    "ticker": "xom",
    "name": "exxon mobil corp",
    "percent": 2.47,
    "gfscore": 85,
    "cagr": 9.59,
    "dyield": 3.77,
    "dyieldoncost": 4.25,
    "dgrowth": 2.9
  },
  {
    "ticker": "cvx",
    "name": "chevron corp",
    "percent": 2.19,
    "gfscore": 86,
    "cagr": 8.28,
    "dyield": 4.17,
    "dyieldoncost": 5.45,
    "dgrowth": 6.16
  },
  {
    "ticker": "pg",
    "name": "procter & gamble",
    "percent": 2.04,
    "gfscore": 86,
    "cagr": 12,
    "dyield": 2.57,
    "dyieldoncost": 3.47,
    "dgrowth": 6.00
  },
  {
    "ticker": "hd",
    "name": "home depot inc",
    "percent": 2.02,
    "gfscore": 94,
    "cagr": 15.18,
    "dyield": 2.56,
    "dyieldoncost": 5.45,
    "dgrowth": 16.4
  },
  {
    "ticker": "unh",
    "name": "unitedhealth group inc",
    "percent": 1.92,
    "gfscore": 96,
    "cagr": 15.60,
    "dyield": 1.37,
    "dyieldoncost": 2.97,
    "dgrowth": 17.4
  },
  {
    "ticker": "avgo",
    "name": "broadcom inc",
    "percent": 1.90,
    "gfscore": 83,
    "cagr": 35.74,
    "dyield": 2.04,
    "dyieldoncost": 4.78,
    "dgrowth": 30.5
  },
  {
    "ticker": "pfe",
    "name": "pfizer inc",
    "percent": 1.85,
    "gfscore": 86,
    "cagr": -4.29,
    "dyield": 5.7,
    "dyieldoncost": 7.12,
    "dgrowth": 4.6
  },
  {
    "ticker": "mrk",
    "name": "merck & co inc",
    "percent": 1.75,
    "gfscore": 84,
    "cagr": 9.91,
    "dyield": 2.92,
    "dyieldoncost": 4.29,
    "dgrowth": 8.7,
  },
  {
    "ticker": "bac",
    "name": "bank of america corp",
    "percent": 1.71,
    "gfscore": 75,
    "cagr": 4.25,
    "dyield": 3.10,
    "dyieldoncost": 6.16,
    "dgrowth": 15.80
  },
  {
    "ticker": "ko",
    "name": "coca-cola",
    "percent": 1.70,
    "gfscore": 81,
    "cagr": 6.61,
    "dyield": 3.14,
    "dyieldoncost": 3.68,
    "dgrowth": 3.2,
  },
  {
    "ticker": "pep",
    "name": "pepsico inc",
    "percent": 1.59,
    "gfscore": 85,
    "cagr": 10.05,
    "dyield": 2.95,
    "dyieldoncost": 4.17,
    "dgrowth": 6.9,
  },
  {
    "ticker": "csco",
    "name": "cisco systems inc",
    "percent": 1.27,
    "gfscore": 93,
    "cagr": 2.92,
    "dyield": 3.27,
    "dyieldoncost": 3.89,
    "dgrowth": 4.1,
  },
  {
    "ticker": "amgn",
    "name": "amgen inc",
    "percent": 1.17,
    "gfscore": 89,
    "cagr": 9.06,
    "dyield": 3.16,
    "dyieldoncost": 5.36,
    "dgrowth": 10.8,
  },
  {
    "ticker": "c",
    "name": "citigroup inc",
    "percent": 1.14,
    "gfscore": 73,
    "cagr": -2.07,
    "dyield": 4.30,
    "dyieldoncost": 8.27,
    "dgrowth": 14.3
  },
  {
    "ticker": "mcd",
    "name": "mcdonalds corp",
    "percent": 1.10,
    "gfscore": 80,
    "cagr": 11.54,
    "dyield": 2.32,
    "dyieldoncost": 3.19,
    "dgrowth": 8.00
  },
  {
    "ticker": "ups",
    "name": "united parcel service inc class b",
    "percent": 1.07,
    "gfscore": 95,
    "cagr": 9.70,
    "dyield": 4.17,
    "dyieldoncost": 6.76,
    "dgrowth": 10.3,
  },
  {
    "ticker": "cmcsa",
    "name": "comcast corp class a",
    "percent": 1.07,
    "gfscore": 86,
    "cagr": 3.82,
    "dyield": 2.70,
    "dyieldoncost": 4.55,
    "dgrowth": 10.9
  },
  {
    "ticker": "ms",
    "name": "morgan stanley",
    "percent": 1.01,
    "gfscore": 81,
    "cagr": 16.24,
    "dyield": 4.13,
    "dyieldoncost": 11.89,
    "dgrowth": 25.5
  },
  {
    "ticker": "txn",
    "name": "Texas instrument inc",
    "percent": 1.00,
    "gfscore": 93,
    "cagr": 12.22,
    "dyield": 3.31,
    "dyieldoncost": 7.05,
    "dgrowth": 17.1,
  },
];

//https://www.wisdomtree.com/investments/etfs/equity/dgrw
const dgrwDB = [
  {
    "ticker": "msft",
    "name": "Microsoft Corporation",
    "percent": 9.72,
    "gfscore": 92,
    "cagr": 28.48,
    "dyield": 0.81,
    "dyieldoncost": 1.21,
    "dgrowth": 10.1
  },
  {
    "ticker": "aapl",
    "name": "Apple Inc.",
    "percent": 6.00,
    "gfscore": 93,
    "cagr": 34.44,
    "dyield": 0.50,
    "dyieldoncost": 0.67,
    "dgrowth": 6.6
  },
  {
    "ticker": "avgo",
    "name": "Broadcom Inc.",
    "percent": 3.67,
    "gfscore": 83,
    "cagr": 35.74,
    "dyield": 2.04,
    "dyieldoncost": 4.78,
    "dgrowth": 30.5
  },
  {
    "ticker": "jnj",
    "name": "Johnson & Johnson",
    "percent": 3.24,
    "gfscore": 87,
    "cagr": 3.86,
    "dyield": 3.08,
    "dyieldoncost": 4.11,
    "dgrowth": 6
  },
  {
    "ticker": "pg",
    "name": "Procter & Gamble Company",
    "percent": 2.83,
    "gfscore": 86,
    "cagr": 12,
    "dyield": 2.57,
    "dyieldoncost": 3.47,
    "dgrowth": 6.00
  },
  {
    "ticker": "hd",
    "name": "Home Depot, Inc.",
    "percent": 2.40,
    "gfscore": 94,
    "cagr": 15.18,
    "dyield": 2.56,
    "dyieldoncost": 5.45,
    "dgrowth": 16.4
  },
  {
    "ticker": "ko",
    "name": "Coca-Cola Company",
    "percent": 2.21,
    "gfscore": 81,
    "cagr": 6.61,
    "dyield": 3.14,
    "dyieldoncost": 3.68,
    "dgrowth": 3.2,
  },
  {
    "ticker": "mrk",
    "name": "Merck & Co., Inc.",
    "percent": 2.18,
    "gfscore": 84,
    "cagr": 9.91,
    "dyield": 2.92,
    "dyieldoncost": 4.29,
    "dgrowth": 8.7,
  },
  {
    "ticker": "pm",
    "name": "Philip Morris International Inc.",
    "percent": 2.05,
    "gfscore": 78,
    "cagr": 6.77,
    "dyield": 5.71,
    "dyieldoncost": 6.64,
    "dgrowth": 3.4
  },
  {
    "ticker": "unh",
    "name": "UnitedHealth Group Incorporated",
    "percent": 2.01,
    "gfscore": 96,
    "cagr": 15.60,
    "dyield": 1.37,
    "dyieldoncost": 2.97,
    "dgrowth": 17.4
  },
  {
    "ticker": "wmt",
    "name": "Walmart Inc.",
    "percent": 1.98,
    "gfscore": 83,
    "cagr": 10.75,
    "dyield": 1.48,
    "dyieldoncost": 1.68,
    "dgrowth": 1.90
  },
  {
    "ticker": "csco",
    "name": "Cisco Systems, Inc.",
    "percent": 1.94,
    "gfscore": 93,
    "cagr": 2.92,
    "dyield": 3.27,
    "dyieldoncost": 3.89,
    "dgrowth": 4.1,
  },
  {
    "ticker": "nvda",
    "name": "NVIDIA Corporation",
    "percent": 1.92,
    "gfscore": 95,
    "cagr": 62.05,
    "dyield": 0.04,
    "dyieldoncost": 0.03,
    "dgrowth": 2.00
  },
  {
    "ticker": "lly",
    "name": "Eli Lilly and Company",
    "percent": 1.89,
    "gfscore": 75,
    "cagr": 40.32,
    "dyield": 0.79,
    "dyieldoncost": 1.46,
    "dgrowth": 13.90
  },
  {
    "ticker": "pep",
    "name": "PepsiCo, Inc.",
    "percent": 1.84,
    "gfscore": 85,
    "cagr": 10.05,
    "dyield": 2.95,
    "dyieldoncost": 4.17,
    "dgrowth": 6.9,
  },
  {
    "ticker": "orcl",
    "name": "Oracle Corp",
    "percent": 1.60,
    "gfscore": 84,
    "cagr": 19.80,
    "dyield": 1.42,
    "dyieldoncost": 2.54,
    "dgrowth": 13.30
  },
  {
    "ticker": "wfc",
    "name": "Wells Fargo & Co",
    "percent": 1.49,
    "gfscore": 76,
    "cagr": -0.32,
    "dyield": 3.12,
    "dyieldoncost": 1.34,
    "dgrowth": -13.7
  },
  {
    "ticker": "ms",
    "name": "Morgan Stanley",
    "percent": 1.48,
    "gfscore": 81,
    "cagr": 16.24,
    "dyield": 4.24,
    "dyieldoncost": 11.89,
    "dgrowth": 25.5
  },
  {
    "ticker": "mcd",
    "name": "McDonalds Corp",
    "percent": 1.47,
    "gfscore": 80,
    "cagr": 11.54,
    "dyield": 2.32,
    "dyieldoncost": 3.19,
    "dgrowth": 8.00
  },
  {
    "ticker": "amgn",
    "name": "Amgen Inc",
    "percent": 1.24,
    "gfscore": 89,
    "cagr": 9.06,
    "dyield": 3.16,
    "dyieldoncost": 5.36,
    "dgrowth": 10.8,
  },
  {
    "ticker": "txn",
    "name": "Texas Instruments Inc",
    "percent": 1.23,
    "gfscore": 93,
    "cagr": 12.22,
    "dyield": 3.33,
    "dyieldoncost": 7.05,
    "dgrowth": 17.1,
  },
  {
    "ticker": "ups",
    "name": "United Parcel Service Inc",
    "percent": 1.20,
    "gfscore": 95,
    "cagr": 9.70,
    "dyield": 4.17,
    "dyieldoncost": 6.76,
    "dgrowth": 10.3,
  },
  {
    "ticker": "qcom",
    "name": "Qualcomm Inc",
    "percent": 1.11,
    "gfscore": 93,
    "cagr": 20.82,
    "dyield": 2.42,
    "dyieldoncost": 3.03,
    "dgrowth": 5.30
  },
  {
    "ticker": "v",
    "name": "Visa Inc",
    "percent": 1.10,
    "gfscore": 97,
    "cagr": 12.74,
    "dyield": 0.82,
    "dyieldoncost": 1.53,
    "dgrowth": 16.00
  },
  {
    "ticker": "mo",
    "name": "Altria Group Inc",
    "percent": 1.10,
    "gfscore": 81,
    "cagr": 1.72,
    "dyield": 4.24,
    "dyieldoncost": 12.89,
    "dgrowth": 25.5
  },
  {
    "ticker": "unp",
    "name": "Union Pacific Corp",
    "percent": 1.10,
    "gfscore": 88,
    "cagr": 10.25,
    "dyield": 2.23,
    "dyieldoncost": 4.45,
    "dgrowth": 14.20
  },
  {
    "ticker": "gs",
    "name": "Goldman Sachs Group Inc",
    "percent": 1.00,
    "gfscore": 72,
    "cagr": 15.52,
    "dyield": 3.22,
    "dyieldoncost": 9.33,
    "dgrowth": 25.80
  }
];

//https://investor.vanguard.com/investment-products/etfs/profile/vug#portfolio-composition
const vugDB = [
  {
    "ticker": "aapl",
    "name": "Apple Inc.",
    "percent": 13.00,
    "gfscore": 93,
    "cagr": 34.44,
    "dyield": 0.50,
    "dyieldoncost": 0.67,
    "dgrowth": 6.6
  },
  {
    "ticker": "msft",
    "name": "Microsoft Corp.",
    "percent": 12.88,
    "gfscore": 92,
    "cagr": 28.48,
    "dyield": 0.81,
    "dyieldoncost": 1.21,
    "dgrowth": 10.1
  },
  {
    "ticker": "amzn",
    "name": "Amazon.com Inc.",
    "percent": 6.33,
    "gfscore": 92,
    "cagr": 10.68,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "nvda",
    "name": "NVIDIA Corp.",
    "percent": 4.90,
    "gfscore": 95,
    "cagr": 62.05,
    "dyield": 0.04,
    "dyieldoncost": 0.03,
    "dgrowth": 2.00
  },
  {
    "ticker": "googl",
    "name": "Alphabet Inc. Class A",
    "percent": 3.77,
    "gfscore": 98,
    "cagr": 19.25,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "meta",
    "name": "Facebook Inc. Class A",
    "percent": 3.43,
    "gfscore": 89,
    "cagr": 18.65,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "goog",
    "name": "Alphabet Inc. Class C",
    "percent": 3.17,
    "gfscore": 98,
    "cagr": 19.75,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "tsla",
    "name": "Tesla Inc.",
    "percent": 2.78,
    "gfscore": 84,
    "cagr": 58.89,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "lly",
    "name": "Eli Lilly & Co.",
    "percent": 2.43,
    "gfscore": 75,
    "cagr": 40.32,
    "dyield": 0.79,
    "dyieldoncost": 1.46,
    "dgrowth": 13.90
  },
  {
    "ticker": "v",
    "name": "Visa Inc. Class A",
    "percent": 1.88,
    "gfscore": 97,
    "cagr": 12.74,
    "dyield": 0.82,
    "dyieldoncost": 1.53,
    "dgrowth": 16.00
  },
  {
    "ticker": "ma",
    "name": "Mastercard Inc. Class A",
    "percent": 1.62,
    "gfscore": 98,
    "cagr": 15.04,
    "dyield": 0.56,
    "dyieldoncost": 1.27,
    "dgrowth": 17.92
  },
  {
    "ticker": "hd",
    "name": "Home Depot Inc.",
    "percent": 1.46,
    "gfscore": 94,
    "cagr": 15.18,
    "dyield": 2.56,
    "dyieldoncost": 5.45,
    "dgrowth": 16.4
  },
  {
    "ticker": "cost",
    "name": "Costco Wholesale Corp.",
    "percent": 1.25,
    "gfscore": 92,
    "cagr": 24.22,
    "dyield": 0.67,
    "dyieldoncost": 1.15,
    "dgrowth": 12.1
  },
  {
    "ticker": "adbe",
    "name": "Adobe Inc.",
    "percent": 1.24,
    "gfscore": 92,
    "cagr": 18.97,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "mcd",
    "name": "McDonald's Corp.",
    "percent": 0.98,
    "gfscore": 80,
    "cagr": 11.54,
    "dyield": 2.32,
    "dyieldoncost": 3.19,
    "dgrowth": 8.00
  },
  {
    "ticker": "acn",
    "name": "Accenture plc Class A",
    "percent": 0.96,
    "gfscore": 97,
    "cagr": 16.68,
    "dyield": 1.54,
    "dyieldoncost": 2.29,
    "dgrowth": 10.70
  },
  {
    "ticker": "lin",
    "name": "Linde plc",
    "percent": 0.96,
    "gfscore": 85,
    "cagr": 20.24,
    "dyield": 1.28,
    "dyieldoncost": 1.92,
    "dgrowth": 8.40
  },
  {
    "ticker": "crm",
    "name": "salesforce.com Inc.",
    "percent": 0.95,
    "gfscore": 86,
    "cagr": 11.67,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "nflx",
    "name": "Netflix Inc.",
    "percent": 0.91,
    "gfscore": 96,
    "cagr": 9.31,
    "dyield": 0,
    "dyieldoncost": 0,
    "dgrowth": 0
  },
  {
    "ticker": "tmo",
    "name": "Thermo Fisher Scientific Inc.",
    "percent": 0.88,
    "gfscore": 92,
    "cagr": 14.44,
    "dyield": 0.28,
    "dyieldoncost": 0.54,
    "dgrowth": 15.00
  }
];

