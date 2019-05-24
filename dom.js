//innitial
let picture = document.getElementById("picture")
let body = document.body
let next_page = document.getElementById("text")
let content = document.getElementById("content")
let way = document.getElementById("way")
let correct = document.getElementById("correct")
let incorrect = document.getElementById("incorrect")
let other = document.getElementById("other")
let spoil = document.getElementById("spoil")
let spoil1 = document.getElementById("spoil_1")
let spoil2 = document.getElementById("spoil_2")
let spoil3 = document.getElementById("spoil_3")
let spoil4 = document.getElementById("spoil_4")
let spoil5 = document.getElementById("spoil_5")
let spoil6 = document.getElementById("spoil_6")

let des = 0
let ques = 0
let description = [
    "เริ่มทำ Quiz",
    "เป็นชั่วโมงเร่งด่วน คุณกำลังเร่งรีบเพื่อเดินทางไปคณะเพื่อเข้าเรียนให้ทันเวลา",
    "ทางข้างหน้าดูวุ่นวาย มีคนจำนวนมากยืนมุงดูราวกับมีเหตุการณ์อะไรเกิดขึ้น",
    "ฝูงชนที่แออัด ทำให้คุณที่จำเป็นต้องผ่านทางนั้นไม่สามารถจะผ่านจุดเกิดเหตุไปได้โดยเร็วคุณจึงหยุด และ สังเกตเหตุการณ์ที่เกิดขึ้น",
    "ท่ามกลางสายตาผู้คน สาวใหญ่วัยกลางคนทำลังทุบตีทำร้ายร่างกายแฟนหนุ่มของตน ทั้งยังก่นด่าด้วยข้อความหยาบคาย เกี่ยวกับพฤติกรรมชู้สาวของแฟนหนุ่มคนนั้น",
    "ในสถานการณ์นี้คุณจะ ..",
    "เรื่องราวนี้เป็นส่วนหนึ่งในการทดสอบทัศนคติของคุณที่มีต่อ ความรุนแรงในครอบครัวและหลักสิทธิมนุษยชน",
    "ในปัจจุบันยังมีคนจำนวนมาก มีมุมมองเกี่ยวกับการใช้ความรุนแรงในครอบครัวว่าเป็นเรื่องปกติ มีค่านิยมที่คนกระทำผิดต้องถูกลงโทษอย่างโหดร้ายทารุณมีค่านิยมว่าผู้เป็นลูกต้องกตัญญูและตอบแทนบุญคุณของพ่อแม่ผู้ชุบเลี้ยงมีความคิดว่าเด็กต้องอยู่ภายใต้ความคิดของผู้ใหญ่",
    "ด้วยความคิดและค่านิยมเหล่านี้ นำไปสู่การละเมิดสิทธิมนุษยชนของคนในครอบครัวตนเอง รวมถึงการใช้ความรุนแรงภายในครอบครัวด้วยไม่ว่าจะเป็นการทำร้ายร่างกาย การบังคับขู่เข็ญ หรือแม้กระทั่งการกักขัง",
    "เหตุการณ์ต่อไปจะเป็นเหตุการณ์สมมติโดยอ้างอิงมาจากเหตุการณ์ที่เกิดขึ้นจริงในสังคม",
    "เราหวังว่าคุณจะได้รับความรู้ความเข้าใจเพิ่มเติมเกี่ยวกับหลักสิทธิมนุษยชน และ ความรุนแรงในครอบครัวจากการตอบคำถาม และ อ่านเนื้องเรื่องเหล่านี้..",
    "นางสาว A(นามสมมุติ) เป็นวัยรุ่นอายุ 16 ปี อาศัยอยู่กับตาเเละยาย",
    "ในช่วงปิดเทอมนางสาว A ชอบออกไปเที่ยวกับเพื่อนบ่อยๆบ้างก็ค้างคืน",
    "ตายายของนางสาว A นั้นรู้สึกว่านางสาว A ทำตัวไม่เหมาะสมเป็นสาวเป็นนาง ชอบเที่ยวกลางคืน เลยทำการจับขังติดกับเตียงไว้",
    "นางสาวAจึงโพสขอความช่วยเหลือในโซเชี่ยล นำไปสู่ตำรวจในที่สุด",
    "Quiz",
    "คุณคิดว่า ตายายมีความผิดหรือไม่?",
    "นาย A อดออมเงินค่าขนมและทำงานพิเศษเก็บเงินเพื่อจะซื้อ Laptop",
    "วันหนึ่งนาย A กลับมาบ้านแล้วพบว่ากระปุกเก็บเงินของตนนั้น เงินได้หายไป",
    "เลยสอบถามคนในบ้านจนรู้ต้นเหตุว่าคนที่นำเงินไปนั้นคือพ่อของตน",
    "นาย A ไม่พอใจอย่างมากเมื่อเงินที่เก็บออมมานั้นถูกพ่อนำไปใช้โดยโดยพลการ",
    "เมื่อนาย A ไปทักท้วงเรื่องเงินของตนพ่อของนาย A ได้ขึ้นเสียงแล้วข่มขู่ใส่",
    "คุณคิดว่า พ่อมีความผิดหรือไม่ที่เอาเงินของลูกชายไปโดยไม่ยินยอม",
    "คู่สามีภรรยาคู่หนึ่ง อยู่อาศัยด้วยกัน",
    "ในช่วงเวลาก่อนนอน สามีสังเกตว่าภรรยาของตนนั้นชอบเล่นโทรศัพท์",
    "เล่นโทรศัพท์ไป ยิ้มเล็กยิ้มน้อย หัวเราะคิกคักเป็นช่วงบ่อยเข้า จนเริ่มเกิดความสงสัย",
    "นานเข้าจึงเกิดมีปากเสียงกัน เพราะความเคืองใจของสามีว่าภรรยาของตนแอบแชทกับหนุ่มอื่นนอกใจตนอยู่หรือเปล่า",
    "ในท้ายที่สุด สามีจึ่งเอ่ยว่าต้องการทราบข้อมูลรหัส Facebook, Line ของภรรยาเพื่อความบริสุทธิใจ",
    "คุณคิดว่า การที่สามีต้องการพิสูจน์ความบริสุทธิ์ใจของภรรยาด้วยการขอรหัส Facebook, Line เพื่อตรวจสอบนั้นสมควรและถูกต้องหรือไม่",
    "นาย A เป็นเกมเมอร์ที่ชื่นชอบเล่นเกมบน Console (PS4)",
    "และนาย A ก็มีแฟนสาวเป็น นางสาว B",
    "ในหลายๆครั้งที่มีเกมดังๆใหม่ๆออกนาย A มันจะเล่นเกมจนไม่ค่อยให้ความใส่ใจกับแฟนสาวมากนักเป็นบ่อยครั้ง",
    "จนเกิดมีปากเสียง ทะเลาะกันอยู่หลายครั้งเพราะความไม่เอาใจใส่ของนาย A",
    "จนในที่สุดนางสาว B ได้หมดความอดทน",
    "นางสาว B ได้ทำการเอา PS4 ของแฟนหนุ่มไปทำลายทิ้งพร้อมทั้งอัดคลิปไว้แล้วส่งให้แฟนหนุ่มดู",
    "พร้อมทั้งส่งข้อความไปด้วยว่า ถ้ายังไม่ใส่ใจตนอีกจะต้องเจอแบบนี้",
    "คุณคิดว่า การทำลายทรัพย์สินของส่วนตัวนั้นเป็นความรุนแรงในครอบครัวหรือไม่เมื่อไม่ได้มีการกระทำกับตัวบุคคลโดยตรง"
]
let question = [
    "ตายาย มีความผิดหรือไม่อย่างไร"
]
//function
function next(){
    picture.style.display = "none"
    body.style.backgroundImage = "radial-gradient(rgb(215,33,30), rgb(178,23,29), rgb(0,0,0))"
    if (des == 15){
        way.style.visibility = "visible"
        way.innerText = question[0]
    }
    
    if (des == 38) {
        spoil_5.style.visibility = "hidden"
        spoil_6.style.visibility = "visible"
        next_page.style.visibility = "hidden"
    }
    if (des == 37){
        spoil4.style.visibility = "hidden"
        spoil_5.style.visibility = "visible"
        content.style.visibility = "hidden"
    }
    if (des == 36){
        correct.innerText = "เป็น"
        incorrect.innerText = "ไม่เป็น"
        next_page.style.visibility = "hidden"
        correct.style.visibility = "visible"
        incorrect.style.visibility = "visible"
    }
    if (des > 28 && des < 36){
        spoil3.style.visibility = "hidden"
        content.style.visibility = "visible"
    }
    if (des == 28){
        correct.innerText = "สมควร"
        incorrect.innerText = "ไม่สมควร"
        other.innerText = "สมควรเเต่ไม่ถูกต้อง"
        next_page.style.visibility = "hidden"
        correct.style.visibility = "visible"
        incorrect.style.visibility = "visible"
        other.style.visibility = "visible"
    }
    if (des > 22 && des < 28){
        content.style.visibility = "visible"
        spoil2.style.visibility = "hidden"
    }
    if (des == 22){
        next_page.style.visibility = "hidden"
        correct.style.visibility = "visible"
        incorrect.style.visibility = "visible"
        way.style.visibility = "hidden"
    }
    if (des > 16 && des < 22){
        spoil.style.visibility = "hidden"
        way.style.visibility = "hidden"
        content.style.visibility = "visible"
    }
    if (des == 16){
        correct.innerText = "ผิด"
        incorrect.innerText = "ไม่ผิด"
        correct.style.visibility = "visible"
        incorrect.style.visibility = "visible"
        next_page.style.visibility = "hidden"
        way.style.visibility = "hidden"
    }
    if (des > 5 && des < 11){
        spoil1.style.visibility = "hidden"
        correct.style.visibility = "hidden"
        incorrect.style.visibility = "hidden"
        spoil.style.visibility = "hidden"
        way.style.visibility = "hidden"
        content.style.visibility = "visible"
    }
    if (ques == 5){
        correct.innerText = "รีบเดินฝ่าฝูงชนเพื่อไปเรียนให้ทันเวลา"
        incorrect.innerText = "เข้าไปห้ามปรามชายหญิงคู่นั้น"
        next_page.style.visibility = "hidden"
        way.style.visibility = "hidden"
        correct.style.visibility = "visible"
        incorrect.style.visibility = "visible"
    }
    content.innerText = description[des]
    ques += 1
    des += 1
    console.log(des)
}

function show_spoil(){
    if(des == 6){
        spoil1.style.visibility = "visible"
    }
    if(des == 17){
        spoil.style.visibility = "visible"
    }
    if(des == 23){
        spoil2.style.visibility = "visible"
    }
    if(des == 29){
        spoil3.style.visibility = "visible"
    }
    if(des == 37){
        spoil4.style.visibility = "visible"
    }
    content.style.visibility = "hidden"
    correct.style.visibility = "hidden"
    incorrect.style.visibility = "hidden"
    other.style.visibility = "hidden"
    next_page.style.visibility = "visible"
}
