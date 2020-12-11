
export const getJobList = () => {
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
            const jobListContainer = document.getElementById('job-list')
            const list = document.createElement('ul')

            $(resultCountContainer).children().remove()

            jobListContainer.setAttribute('class', 'container')
            Utilities.clearList(jobListContainer)

            p1.id = 'uni-result-count'
            p1.innerHTML = `${data.length}`
            p2.innerHTML = '&nbsp;Results found:'

            const p1p2 = [p1, p2]

            p1p2.forEach(element => {
                $(element).css({
                    'font-weight': 'bold',
                    'font-size': '120%'
                })
                resultCountContainer.appendChild(element)
            })

            data.forEach(job => {
                const div = document.createElement('div')
                const h3 = document.createElement('h3')
                const a = document.createElement('a')
                const p = document.createElement('p')

                div.className = 'list-entry'
                a.textContent = job['title']
                a.href = `job.html?soc=${job['soc']}`
                p.textContent = job['description']

                h3.appendChild(a)
                div.appendChild(h3)
                div.appendChild(p)
                jobListContainer.appendChild(div)
            })
        })
        .catch(error => console.log(`response error: ${error}`))
}

// export const getJobData = () => {
//     const requestUrl = `http://api.lmiforall.org.uk/api/v1/soc/code/${Utilities.getSocFromUrl()}`
//
// }