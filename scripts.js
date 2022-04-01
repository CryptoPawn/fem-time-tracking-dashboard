const cardNames = [".work",".play",".study",".exercise",".social",".selfcare"];
const title = "#card-title";
const current_hrs = "#current-hours";
const last_hrs = "#last-hours";
const daily = "#daily";
const weekly = "#weekly";
const monthly = "#monthly";
const activeCSS = "active";



function getHours(period) {
    for (i=0; i < cardNames.length; i++) {
        $(cardNames[i]).find(current_hrs).html(data[i].timeframes[period].current + "hrs");
        if (period === "daily") {
            lastHrsPrefix = "Day - ";
        } else if (period === "weekly") {
            lastHrsPrefix = "Week - ";
        } else if (period === "monthly") {
            lastHrsPrefix = "Month - ";
        }
        $(cardNames[i]).find(last_hrs).html(lastHrsPrefix + data[i].timeframes[period].previous + "hrs");
    }
}

function buttonHighlighter(periodButton) {
    $(daily).removeClass(activeCSS);
    $(weekly).removeClass(activeCSS);
    $(monthly).removeClass(activeCSS);
    $(periodButton).addClass(activeCSS);
}



$(document).ready(function() {
    for (i=0; i < cardNames.length; i++) {
        $(cardNames[i]).find(title).html(data[i].title);
        $(cardNames[i]).find(current_hrs).html(data[i].timeframes.daily.current);
    }

    getHours("daily");
    buttonHighlighter($(daily));

    $(daily).on("click", function() {
        getHours("daily");
        buttonHighlighter(this);
    });

    $(weekly).on("click", function() {
        getHours("weekly");
        buttonHighlighter(this);
    });

    $(monthly).on("click", function() {
        getHours("monthly");
        buttonHighlighter(this);
    });
});