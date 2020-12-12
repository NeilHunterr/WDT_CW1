<!--
file: GetJobInfo.js
author: Neil Hunter
date: 11/12/2020
desc: job info js code
-->


export const getSocFromUrl = () => {
    const urlQueryString = window.location.search
    const urlParameters = new URLSearchParams(urlQueryString)
    return urlParameters.get('soc')
}

export const getJobInfo = () => {

    const requestUrl = `http://api.lmiforall.org.uk/api/v1/soc/code/${getSocFromUrl()}`

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('jobTitle').innerText = data.title
            document.getElementById('description').innerText = data.description

            document.getElementById('qual').innerText = 'Qualifications'
            document.getElementById('qualDesc').innerText = data.qualifications

            document.getElementById('tasksTitle').innerText = 'Tasks'



             const tasksList = document.getElementById('tasksList')

             let subArray = []

             const regex = /^[A-Za-z\s]+$/;  // only match letters and spaces
             [...data.tasks].forEach(character => {
                 if (character.match(regex)) {
                     subArray.push(character)
                 } else {
                     const listItem = document.createElement('li')
                     listItem.innerHTML = subArray.join('')
                     tasksList.appendChild(listItem)
                     subArray = []
                 }
             })

            document.getElementById('tagsTitle').innerText = 'Tags'
            document.getElementById('tagsDesc').innerText = `[${data.add_titles.slice(0, 10)}]`
        })
        .catch(error => console.log(`response error: ${error}`))
}

// document on ready
$(function () {
    getJobInfo()
})