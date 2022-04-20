const characterRange = document.getElementById('characterRange')

const characterNumber = document.getElementById('characterNumber')

const includeUppercaseElement = document.getElementById('includeUppercase')

const includeNumbersElement = document.getElementById('includeNumbers')

const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGenerator')

const pwdDisplay = document.getElementById('pwdDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)

const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)

const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(33,47)).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(123,126))

characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()

    const characterAmount = characterNumber.value 
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    pwdDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
        let charCodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    const pwdChars = []
        for(let i = 0; i < characterAmount; i++){
            const character = charCodes[Math.floor(Math.random() * charCodes.length)]
            pwdChars.push(String.fromCharCode(character))
        }
        return pwdChars.join('')
}

function arrayFromLowToHigh(low, high){
    const array = []
    for(let i = low; i<= high; i++) {
        array.push(i)

    }
    return array
}

function syncCharacterAmount(e){
    const value = e.target.value
    characterNumber.value = value
    characterRange.value = value
}