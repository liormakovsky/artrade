const etfDB = [
  {
    etf: "xlf",
    stocks: ["BRK.B", "JPM", "V", "MA", "BAC"],
    connected: ["xlf", "dia"],
  },
  {
    etf: "xlv",
    stocks: ["UNH", "LLY", "JNJ", "MRK", "ABBV", "TMO"],
    connected: ["xlv", "dia"],
  },
  {
    etf: "xle",
    stocks: ["XOM", "CVX", "EOG", "SLB", "COP"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xlk",
    stocks: ["AAPL", "MSFT", "NVDA", "AVGO", "ADBE", "CSCO"],
    connected: ["xlk", "spy", "qqq", "dia"],
  },
  {
    etf: "xop",
    stocks: ["DEN", "VLO", "XOM", "CVX", "COP"],
    connected: ["xop", "xle"],
  },
  {
    etf: "xly",
    stocks: ["AMZN", "TSLA", "MCD", "HD", "LOW"],
    connected: ["xly", "dia"],
  },
  {
    etf: "xli",
    stocks: ["CAT", "UNP", "HON", "GE", "BA"],
    connected: ["xli", "dia"],
  },
  {
    etf: "xlb",
    stocks: ["LIN", "APD", "SHW", "FCX", "ECL"],
    connected: ["xlb"],
  },
  {
    etf: "xlu",
    stocks: ["NEE", "SO", "DUK", "SRE", "AEP"],
    connected: ["xlu"],
  },
  {
    etf: "xlp",
    stocks: ["PG", "COST", "PEP", "WMT", "PM"],
    connected: ["xlp"],
  },
  {
    etf: "xlc",
    stocks: ["META", "GOOGL", "GOOG", "T", "CHTR", "TMUS"],
    connected: ["xlc", "spy", "qqq"],
  },
  {
    etf: "xlre",
    stocks: ["PLD", "AMT", "EQIX", "WELL", "PSA", "CCI"],
    connected: ["xlc"],
  },
  {
    etf: "XME",
    stocks: ["ARCH", "AMR", "BTU", "RGLD", "NEM", "AA"],
    connected: ["xlc"],
  },
  {
    etf: "spy",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "META", "TSLA", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "qqq",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "META", "TSLA", "GOOGL", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "dia",
    stocks: ["UNH", "GS", "MSFT", "HD", "CAT", "MCD", "AMGN", "V"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
  {
    etf: "vt",
    stocks: ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "TSLA", "META", "GOOG"],
    connected: ["spy", "qqq", "dia", "vt"],
  },
];
