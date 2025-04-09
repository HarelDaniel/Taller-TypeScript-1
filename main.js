System.register("Serie", [], function (exports_1, context_1) {
    "use strict";
    var Serie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Serie = /** @class */ (function () {
                function Serie(id, name, channel, seasons, description, link, image) {
                    this.id = id;
                    this.name = name;
                    this.channel = channel;
                    this.seasons = seasons;
                    this.description = description;
                    this.link = link;
                    this.image = image;
                }
                return Serie;
            }());
            exports_1("Serie", Serie);
        }
    };
});
System.register("data", ["Serie"], function (exports_2, context_2) {
    "use strict";
    var Serie_js_1, series;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Serie_js_1_1) {
                Serie_js_1 = Serie_js_1_1;
            }
        ],
        execute: function () {
            exports_2("series", series = [
                new Serie_js_1.Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
                new Serie_js_1.Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
                new Serie_js_1.Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
                new Serie_js_1.Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny...", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
                new Serie_js_1.Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London...", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
                new Serie_js_1.Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries...", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
            ]);
        }
    };
});
System.register("main", ["data"], function (exports_3, context_3) {
    "use strict";
    var data_js_1, seriesTable, averageElement;
    var __moduleName = context_3 && context_3.id;
    function renderSeries(series) {
        var totalSeasons = 0;
        series.forEach(function (s) {
            var tr = document.createElement("tr");
            tr.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td>").concat(s.name, "</td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n      <td>").concat(s.description, "</td>\n      <td><a href=\"").concat(s.link, "\" target=\"_blank\">Link</a></td>\n      <td><img src=\"").concat(s.image, "\" alt=\"").concat(s.name, "\" width=\"100\"/></td>\n    ");
            seriesTable.appendChild(tr);
            totalSeasons += s.seasons;
        });
        var average = totalSeasons / series.length;
        averageElement.textContent = "Average Seasons: ".concat(average.toFixed(2));
    }
    return {
        setters: [
            function (data_js_1_1) {
                data_js_1 = data_js_1_1;
            }
        ],
        execute: function () {
            seriesTable = document.getElementById("seriesTable").getElementsByTagName("tbody")[0];
            averageElement = document.getElementById("average");
            renderSeries(data_js_1.series);
        }
    };
});
