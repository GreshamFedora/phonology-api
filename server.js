const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:langName', (req,res)=>{
    const langName = req.params.langName.toLowerCase()
    if(lang[langName]){
        res.json(lang[langName])
    }else{
        res.json(lang['empty'])
    }
})

app.listen(PORT, () =>{
    console.log(`The server is runnong on port # ${PORT}.`)
})


const lang = {
   'mandarin':{
    'ɕ':{IPA:'ɕ', Symbols: 'x/ㄒ', Examples: '西'},
   'f':{IPA: 'f', Symbols: 'f/ㄈ', Examples: '非'},
    'j':{IPA: 'j', Symbols: 'y-/i-/一', Examples: '牙'},},
    /*{IPA: 'k', Symbols: 'g/ㄍ', Examples: '干'},
    {IPA: 'kʰ', Symbols: 'k/ㄎ', Examples: '口'},
    {IPA: 'l', Symbols: 'l/ㄌ', Examples: '了'},
    {IPA: 'm', Symbols: 'm/ㄇ', Examples: '明'},
    {IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '你'},
    {IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ', Examples: '江'},
    {IPA: 'p', Symbols: 'b/ㄅ', Examples: '包'},
    {IPA: 'pʰ', Symbols: 'p/ㄆ', Examples: '旁'},
    {IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日'},
    {IPA: 's', Symbols: 's/ㄙ', Examples: '私'},
    {IPA: 'ʂ',  Symbols: 'sh/ㄕ', Examples: '失'},
    {IPA: 't', Symbols: 'd/ㄉ', Examples: '但'},
    {IPA: 'tʰ', Symbols: 't/ㄊ', Examples: '透'},
    {IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫'},
    {IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去'},
    {IPA: 'ts', Symbols: 'z/ㄗ', Examples: '子'},
    {IPA: 'tsʰ', Symbols: 'c/ㄘ', Examples: '此'},
    {IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之'},
    {IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃'},
    {IPA: 'w', Symbols: 'w-/u-/ㄨ', Examples: '我'},
    {IPA: 'x', Symbols: 'h/ㄏ', Examples: '火'},
    {IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月'},
*/
'cantonese':{
    'f':{IPA: 'f', Symbols: 'f/ㄈ', Examples: '客'},
    'h':{IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎'},
    'j':{IPA: 'j', Symbols: 'j/一', Examples: '月'},
},
    /*{IPA: 'k', Symbols: 'g-/ㄍ', Examples: '家'},
    {IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識'},
    {IPA: 'kʰ', Symbols: 'k-/ㄎ-', Examples: '卡'},
    {IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜'},
    {IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇'},
    {IPA: 'l', Symbols: 'l/ㄌ', Examples: '落'},
    {IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔'},
    {IPA: 'n', Symbols: 'n/ㄋ', Examples: '男'},
    {IPA: 'ŋ', Symbols: 'ng/ㄫ ', Examples: '牙'},
    {IPA: 'p', Symbols: 'b/ㄅ', Examples: '班'},
    {IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕'},
    {IPA: 'pʰ', Symbols: 'p-/ㄆ-', Examples: '拍'},
    {IPA: 's', Symbols: 's/ㄙ/ㄒ', Examples: '西'},
    {IPA: 't', Symbols: 'd/ㄉ', Examples: '打'},
    {IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失'},
    {IPA: 'tʰ', Symbols: 't-/ㄊ-', Examples: '拖'},
    {IPA: 'ts', Symbols: 'z/ㄗ/ㄐ', Examples: '將'},
    {IPA: 'tsʰ', Symbols: 'c/ㄘ/ㄑ', Examples: '鏘'},
    {IPA: 'w', Symbols: 'w/ㄨ', Examples: '活'},
    {IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五'},
*/
'empty':{
    '':{IPA: '', Symbols: '', Examples: ''},
    '':{IPA: '', Symbols: '', Examples: ''},
    '':{IPA: '', Symbols: '', Examples: ''},
},
}