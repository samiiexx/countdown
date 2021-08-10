// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const numbers = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    numbers.forEach((num) => {
        num.classList.value = ''
    })

    numbers[0].classList.add('in')
}

function runAnimation() {
    numbers.forEach((num, idx) => {
        const nextToLast = numbers.length - 1

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            }
            else if(e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            }
            else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})