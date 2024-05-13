const cheerio = require("cheerio")
const htmlString = `<html><body><div><div class='productDetails'><h2 class='productTitle'>Lenovo, T480s</h2><span class='productPrice'>70000</span></div><div class='productDetails'><h2 class='productTitle'>Dell, 7470</h2><span class='productPrice'>50000</span></div></div></body></html>`

const $ = cheerio.load(htmlString)
const products = [];
$('.productDetails').each((i, el) => {

    const productName = $(el).find('.productTitle').text().trim()
    const productPrice = $(el).find('.productPrice').text().trim()

    products.push({ productName, productPrice })
})

console.log(products)