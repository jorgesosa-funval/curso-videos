const frame = document.querySelector('#video_container > iframe')
const next = document.querySelector('#next')
const back = document.querySelector('#back')

const list = [
    "wZoCS6jn43N_forSPZea7A",
    "aUbijC4imxqH9sWoCpbwBQ",
    "7zMQH1VL1fEYCgAMfQl8Hg",
    "mqR6_v22e_ejRTCmhlgxZA",
    "krGtDWvZIA6LV91UWtCkwA",
    "M9uWdA9ZYINBA99aNGZMQw",
    "U_ZFKZ_ldc_q5zQb9nSLSw",
    "MUIBgpMzES7lwmEfZXzNKg",
    "7H2MM4UfP8VRwAcVsNn3Ug",
    "auQf3k3V-LBtFqKIcEUalQ",]

let current = 0;


next.addEventListener('click', () => {
    current++
    frame.src = `https://terabox.com/sharing/embed?surl=${list[current]}&resolution=720&fid=349371215172653`
    nextButtonState()
    backButtonState()
})


back.addEventListener('click', () => {
    if (current > 0) {
        current--
        frame.src = `https://terabox.com/sharing/embed?surl=${list[current]}&resolution=720&fid=349371215172653`
    } else {
        back.disabled = true
        back.classList.add('')
    }
    nextButtonState()
    backButtonState()
})


function nextButtonState() {
    if (current === list.length - 1) {
        next.disabled = true
        next.classList.remove('text-cyan-500', 'hover:text-white')
        next.classList.add('text-cyan-900')
    } else {
        back.disabled = false
        next.classList.add('text-cyan-500', 'hover:text-white')
        next.classList.remove('text-cyan-900')
    }
}

function backButtonState() {
    if (current === 0) {
        back.disabled = true
        back.classList.remove('text-cyan-500', 'hover:text-white')
        back.classList.add('text-cyan-900')
    } else {
        back.disabled = false
        back.classList.add('text-cyan-500', 'hover:text-white')
        back.classList.remove('text-cyan-900')
    }
}

backButtonState()