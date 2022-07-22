const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const lang = {
    'mandarin':{
     'ɕ':{IPA:'ɕ', Symbols: 'x/ㄒ', Examples: '西'},
    'f':{IPA: 'f', Symbols: 'f/ㄈ', Examples: '非'},
     'j':{IPA: 'j', Symbols: 'y-/i-/一', Examples: '牙'},
     'k':{IPA: 'k', Symbols: 'g/ㄍ', Examples: '干'},
     'kʰ':{IPA: 'kʰ', Symbols: 'k/ㄎ', Examples: '口'},
     'l':{IPA: 'l', Symbols: 'l/ㄌ', Examples: '了'},
     'm':{IPA: 'm', Symbols: 'm/ㄇ', Examples: '明'},
     'n':{IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '你'},
     'ŋ':{IPA: 'ŋ', Symbols: '-ng/ㄥ/ㄤ', Examples: '江'},
     'p':{IPA: 'p', Symbols: 'b/ㄅ', Examples: '包'},
     'pʰ':{IPA: 'pʰ', Symbols: 'p/ㄆ', Examples: '旁'},
     'ʐ':{IPA: 'ʐ', Symbols: 'r-/ㄖ', Examples: '日'},
     's':{IPA: 's', Symbols: 's/ㄙ', Examples: '私'},
     'ʂ':{IPA: 'ʂ',  Symbols: 'sh/ㄕ', Examples: '失'},
     't':{IPA: 't', Symbols: 'd/ㄉ', Examples: '但'},
     'tʰ':{IPA: 'tʰ', Symbols: 't/ㄊ', Examples: '透'},
     'tɕ':{IPA: 'tɕ', Symbols: 'j/ㄐ', Examples: '叫'},
     'tɕʰ':{IPA: 'tɕʰ', Symbols: 'q/ㄑ', Examples: '去'},
     'ts':{IPA: 'ts', Symbols: 'z/ㄗ', Examples: '子'},
     'tsʰ':{IPA: 'tsʰ', Symbols: 'c/ㄘ', Examples: '此'},
     'ʈʂ':{IPA: 'ʈʂ', Symbols: 'zh/ㄓ', Examples: '之'},
     'ʈʂʰ':{IPA: 'ʈʂʰ', Symbols: 'ch/ㄔ', Examples: '吃'},
     'w':{IPA: 'w', Symbols: 'w-/u-/ㄨ', Examples: '我'},
     'x':{IPA: 'x', Symbols: 'h/ㄏ', Examples: '火'},
     'ɥ':{IPA: 'ɥ', Symbols: 'yu-/-ü-/ㄩ', Examples: '月'},
 },
 'cantonese':{
     'f':{IPA: 'f', Symbols: 'f/ㄈ', Examples: '客'},
     'h':{IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎'},
     'j':{IPA: 'j', Symbols: 'j/一', Examples: '月'},
     'k':{IPA: 'k', Symbols: 'g-/ㄍ', Examples: '家'},
     'k̚':{IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識'},
     'kʰ':{IPA: 'kʰ', Symbols: 'k-/ㄎ-', Examples: '卡'},
     'kʷ':{IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜'},
     'kʷʰ':{IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇'},
     'l':{IPA: 'l', Symbols: 'l/ㄌ', Examples: '落'},
     'm̩':{IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔'},
     'n':{IPA: 'n', Symbols: 'n/ㄋ', Examples: '男'},
     'ŋ':{IPA: 'ŋ', Symbols: 'ng/ㄫ ', Examples: '牙'},
     'p':{IPA: 'p', Symbols: 'b/ㄅ', Examples: '班'},
     'p̚':{IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕'},
     'pʰ':{IPA: 'pʰ', Symbols: 'p-/ㄆ-', Examples: '拍'},
     's':{IPA: 's', Symbols: 's/ㄙ/ㄒ', Examples: '西'},
     't':{IPA: 't', Symbols: 'd/ㄉ', Examples: '打'},
     't̚':{IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失'},
     'tʰ':{IPA: 'tʰ', Symbols: 't-/ㄊ-', Examples: '拖'},
     'ts':{IPA: 'ts', Symbols: 'z/ㄗ/ㄐ', Examples: '將'},
     'tsʰ':{IPA: 'tsʰ', Symbols: 'c/ㄘ/ㄑ', Examples: '鏘'},
     'w':{IPA: 'w', Symbols: 'w/ㄨ', Examples: '活'},
     'ŋ̩':{IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五'},
 },
 'hokkien':{
     'f':{IPA: 'f', Symbols: 'f/ㄈ', Examples: '客'},
     'h':{IPA: 'h', Symbols: 'h/ㄏ', Examples: '虎'},
     'j':{IPA: 'j', Symbols: 'j/一', Examples: '月'},
     'k':{IPA: 'k', Symbols: 'g-/ㄍ', Examples: '家'},
     'k̚':{IPA: 'k̚', Symbols: '-k/-ㄎ', Examples: '識'},
     'kʰ':{IPA: 'kʰ', Symbols: 'k-/ㄎ-', Examples: '卡'},
     'kʷ':{IPA: 'kʷ', Symbols: 'gw/ㄍㄨ', Examples: '瓜'},
     'kʷʰ':{IPA: 'kʷʰ', Symbols: 'kw/ㄎㄨ', Examples: '誇'},
     'l':{IPA: 'l', Symbols: 'l/ㄌ', Examples: '落'},
     'm̩':{IPA: 'm̩', Symbols: 'm/ㄇ', Examples: '莫/唔'},
     'n':{IPA: 'n', Symbols: 'n/ㄋ', Examples: '男'},
     'ŋ':{IPA: 'ŋ', Symbols: 'ng/ㄫ ', Examples: '牙'},
     'p':{IPA: 'p', Symbols: 'b/ㄅ', Examples: '班'},
     'p̚':{IPA: 'p̚', Symbols: '-p/-ㄆ', Examples: '濕'},
     'pʰ':{IPA: 'pʰ', Symbols: 'p-/ㄆ-', Examples: '拍'},
     's':{IPA: 's', Symbols: 's/ㄙ/ㄒ', Examples: '西'},
     't':{IPA: 't', Symbols: 'd/ㄉ', Examples: '打'},
     't̚':{IPA: 't̚', Symbols: '-t/-ㄊ', Examples: '失'},
     'tʰ':{IPA: 'tʰ', Symbols: 't-/ㄊ-', Examples: '拖'},
     'ts':{IPA: 'ts', Symbols: 'z/ㄗ/ㄐ', Examples: '將'},
     'tsʰ':{IPA: 'tsʰ', Symbols: 'c/ㄘ/ㄑ', Examples: '鏘'},
     'w':{IPA: 'w', Symbols: 'w/ㄨ', Examples: '活'},
     'ŋ̩':{IPA: 'ŋ̩', Symbols: 'ng/ㄫ ', Examples: '五'},
 },
 'empty':{
     'unknown':{IPA: 'unknown', Symbols: 'unknown', Examples: 'unknown'},
 },
 }


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

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running on port # ${PORT}.`)
})


