import * as cheerio from 'cheerio';
export const gethtmldata = html => {
    let data = [];
    const $ = cheerio.load(html);
    // iterate over each html element and fetch data using jquery selectors
    $('div#questions div.s-post-summary.js-post-summary').each((i, elem) => {
        let dt = [];
        $(elem).find('div.s-post-summary--stats.js-post-summary-stats div.s-post-summary--stats-item').each((i, newElm) => {
            dt.push($(newElm).find('span.s-post-summary--stats-item-number.mr4').html());
        });

        // data is pushed into array as Objects
        data.push({
            questionUrl: 'https://stackoverflow.com/' + $(elem).find('a.s-link').attr('href'),
            voteCount: dt[0],
            answers: dt[1],
            referenceCount: dt[2],
        })
    });
    return data;
}