<!--
file: GetJobs.js
author: Neil Hunter
date: 11/12/2020
desc: job search js code
-->

export const getJobsList = () => {
    const textBox = document.getElementById('job')

    let requestUrl = `http://api.lmiforall.org.uk/api/v1/soc/search?q=${textBox.value.trim()}`

    fetch(requestUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            const jobListContainer = document.getElementById('jobList')
            const list = document.createElement('ul')

            jobListContainer.setAttribute('class', 'container')

            data.forEach(job => {
                const li = document.createElement('li')
                const a = document.createElement('a')

                li.className = 'listItem'
                a.textContent = job['title']
                a.href = `Job%20Info.html?soc=${job['soc']}`

                list.appendChild(li)
                li.appendChild(a)
                jobListContainer.appendChild(li)
            })
        })
        .catch(error => console.log(`response error: ${error}`))
}

// document on ready
$(function () {
    getJobsList()
})

$('#jobSearchBtn').on('click', function () {
    getJobsList()
})

// export const getJobData = () => {
//     const requestUrl = `http://api.lmiforall.org.uk/api/v1/soc/code/${Utilities.getSocFromUrl()}`
//
// }