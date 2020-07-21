describe('File upload and download tests', () => {

    beforeEach(() => {
        cy.visit('https://filebin.net/')
    })

    it('Upload file and download it in Zip format', () => {
        cy.get('#fileField').attachFile('foxPicture.jpg')
        cy.contains('This bin contains 1 file',).should('be.visible')
        cy.get('.fa-cloud-download').click()
        cy.contains('Zip').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(downloadLink, 'mydownloads/zipFiles', 'foxPicture_downloadedFromCypress.zip')
            cy.readFile('mydownloads/zipFiles/foxPicture_downloadedFromCypress.zip')
        })
    })

    it('Upload file and download it in Tar format', () => {
        cy.get('#fileField').attachFile('bearPicture.jpg')
        cy.contains('This bin contains 1 file',).should('be.visible')
        cy.get('.fa-cloud-download').click()
        cy.contains('Tar').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(downloadLink, 'mydownloads/tarFiles', 'bearPicture_downloadedFromCypress.tar')
            cy.readFile('mydownloads/tarFiles/bearPicture_downloadedFromCypress.tar')
        })
    })

})