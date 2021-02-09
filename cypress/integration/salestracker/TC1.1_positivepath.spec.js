describe('Uzupelnienie formularza - scen. pozytywny - sciezka nr 1', function(){
    it('Uzupelnienie formularza', function(){
        cy.visit('https://serwer1419259.home.pl/tester/index.php/site/form/52')
        cy.title().should('eq', 'Formularz zgłoszeniowy – kwestionariusz osobowy')
        cy.location('protocol').should('eq', 'https:')
    //DANE DOTYCZACE KANDYDATA
        //imie
        cy.get('#id_1_1').type('Maciej')
        //nazwisko
        cy.get('#id_1_2').type('Witecki')                                   
        //plec
        cy.get('input[type="radio"]#id_1_3_2').check()
        //pesel
        cy.get('#id_1_4').type('80010101234')
        //nip
        cy.get('#id_1_70').type('1234567890')
        //wyksztalcenie
        cy.get('input[type="radio"]#id_1_5_7').check()
        //skan dyplomu
        cy.get('input[type="file"]#id_1_43').attachFile('pngFile.png');
        //nr prawa zawodu
        cy.get('#id_1_6').type('12345')
        //zatrudniony w podmiocie leczniczym
        cy.get('input[type="radio"]#id_1_7_9').check()
        //nazwa i adres poz
        cy.contains('Nazwa i adres poz:').should('be.visible')
        cy.get('#id_1_9').should('be.visible')
        cy.get('#id_1_9').type('33-100 Tarnów, ul. Krakowska 1')
        //czy os niepelnosprawna
        cy.get('input[type="radio"]#id_1_10_12').check()
        //czy zatrudniony na obsz wiejskich
        cy.get('input[type="radio"]#id_1_11_14').check()   
    //DANE KONTAKTOWE I STATUS NA RYNKU PRACY
        //ulica
        cy.get('#id_2_12').type('Krakowska')
        //nr budynku
        cy.get('#id_2_13').type('1A')                                   
        //nr lokalu
        cy.get('#id_2_14').type('3a')
        //miejscowosc
        cy.get('#id_2_15').type('Tarnów')
        //kod pocztowy
        cy.get('#id_2_16').type('33-100')
        //gmina
        cy.get('#id_2_17').type('Tarnów')
        //powiat
        cy.get('#id_2_18').type('Tarnów');
        //wojewodztwo
        cy.get('#id_2_19').type('małopolskie')
        //kraj
        cy.get('#id_2_20').type('Polska')
        //email
        cy.get('#id_2_21').type('mackowit@o2.pl')
        //telefon
        cy.get('#id_2_68').type('123456789')
        //czy bezrobotny
        cy.get('input[type="checkbox"]#id_2_22_15').should('not.be.checked')
        //Osoba bezrobotna niezarejestrowana w ewidencji  urzędów pracy, w tym
        cy.get('label#id_2_23_16').parent().should('have.class', 'hidden')
        //Osoba bezrobotna zarejestrowana w ewidencji  urzędów pracy, w tym:
        cy.get('label#id_2_24_18').parent().should('have.class', 'hidden')
        //Osoba bierna zawodowo, w tym:
        cy.get('label#id_2_25_20').parent().should('have.class', 'hidden')
        //osoba pracująca
        cy.get('input[type="radio"]#id_2_27_23').check()
        //wykonywany zawod
        cy.get('input[type="radio"]#id_2_28_31').check()
        //miejsce pracy
        cy.get('#id_2_30').type('33-100 Tarnów, ul. Krakowska 2')
    //STATUS UCZESTNIKA PROJEKTU W CHWILI PRZYSTĄPIENIA DO PROJEKTU
        //mniejszosci narodowe
        cy.get('input[type="radio"]#id_3_32_32').check()
        //osoba bezdomna
        cy.get('input[type="radio"]#id_3_33_35').check()
        //osoba z niepelnosprawnosciami
        cy.get('input[type="radio"]#id_3_34_37').check()
        //gosp dom bez pracujacych
        cy.get('input[type="radio"]#id_3_36_40').check()
        //gosp dom z dziecmi
        cy.get('input[type="radio"]#id_3_37_42').check()
        //gosp dom jedna os dorosla + dzieci
        cy.get('input[type="radio"]#id_3_38_44').check()
        //w innej niekorz sytuacji
        cy.get('input[type="radio"]#id_3_39_46').check()
        //wyslij
        cy.get('input[type="submit"]').click()
        //walidacje sukcesu
        cy.get('div.alert-success').should('be.visible')
        cy.contains('Formularz został poprawnie zapisany.')
    })
})