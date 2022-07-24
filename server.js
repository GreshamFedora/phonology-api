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
    'consonants': {
    'p':{IPA: 'p', Symbols: 'p/ㄅ', Examples: '布 (pòo)'},
     'pʰ':{IPA: 'pʰ', Symbols: 'ph/ㄆ', Examples: '普 (phóo)'},
     'b':{IPA: 'b', Symbols: 'b/ㆠ', Examples: '明 (bîng)'},
     'm':{IPA: 'm', Symbols: 'm/ㄇ/ㆰ/ㆬ', Examples: '媽 (má)/暗 (àm)/參 (som)/心 (sim)'},
     't':{IPA: 't', Symbols: 't/ㄉ', Examples: '端 (tuan)'},
     'tʰ':{IPA: 'tʰ', Symbols: 'th/ㄊ', Examples: '透 (thò)'},
     'l':{IPA: 'l', Symbols: 'l/ㄌ', Examples: '來 (lâi)'},
     'n':{IPA: 'n', Symbols: 'n/ㄋ/ㄣ/ㄢ', Examples: '泥 (nî), 因 (in), 安 (an)'},
     'k':{IPA: 'k', Symbols: 'k/ㄍ', Examples: '見 (kiàn)'},
     'kʰ':{IPA: 'kʰ', Symbols: 'kh/ㄎ', Examples: '溪 (khe)'},
     'g':{IPA: 'g', Symbols: 'g/ㆣ', Examples: '義 (gī)'},
     'ŋ':{IPA: 'ŋ', Symbols: 'ng/ㄫ/ㄥ/ㄤ/ㆲ', Examples: '吳 (ngôo)/櫻 (ing)/幫 (pang)/王 (ông)'},
     'h':{IPA: 'h', Symbols: 'h/ㄏ', Examples: '曉 (hiáu)'},
     'ʔ':{IPA: 'ʔ', Symbols: '∅ /-h/◌ㄏ', Examples: '影 (íng)/桌 (toh)'},
     't͡s':{IPA: 't͡s', Symbols: 'ch/ㄗ', Examples: '走 (tsáu)'},
     't͡ɕ':{IPA: 't͡ɕ', Symbols: 'ch/ㄐ', Examples: '精 (tsing)'},
     't͡sʰ':{IPA: 't͡sʰ', Symbols: 'chh/ㄘ', Examples: '菜 (tshài)'},
     't͡ɕʰ':{IPA: 't͡ɕʰ', Symbols: 'chh/ㄑ', Examples: '市 (tshī)'},
     's':{IPA: 's', Symbols: 's/ㄙ', Examples: '三 (sam)'},
     'ɕ':{IPA: 'ɕ', Symbols: 's/ㄒ', Examples: '審 (sím)'},
     'd͡z':{IPA: 'd͡z', Symbols: 'j/ㆡ', Examples: '熱 (jua̍h)'},
     'z':{IPA: 'z', Symbols: 'j/ㆡ', Examples: '熱 (jua̍h)'},
     'd͡ʑ':{IPA: 'd͡ʑ', Symbols: 'j/ㆢ', Examples: '日 (ji̍t)'},
     'ʑ':{IPA: 'ʑ', Symbols: 'j/ㆢ', Examples: '日 (ji̍t)'},
     'm̩':{IPA: 'm̩', Symbols: 'm/ㆬ', Examples: '姆 (ḿ)'},
     'ŋ̍':{IPA: 'ŋ̍', Symbols: 'ng/ㆭ', Examples: '光 (kng)'},
     'p̚':{IPA: 'p̚', Symbols: 'p/◌ㄅ', Examples: '合 (ha̍p)'},
     't̚':{IPA: 't̚', Symbols: 't/◌ㄉ', Examples: '七 (tshit)'},
     'k̚':{IPA: 'k̚', Symbols: 'k/◌ㄍ', Examples: '角 (kak)'},
    },
    'vowels':{

    },
    'tones':{}
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


