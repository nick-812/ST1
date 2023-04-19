const {_electron: electron} = require('playwright');
const { test, expect } = require('@playwright/test');

test('Prikaz gumba', async()=> {
    const electronApp = await electron.launch({ args: ['.']});

    const window = await electronApp.firstWindow();
    const button = await window.waitForSelector('#new_users');
    const text = await button.textContent();
    expect(text).toContain('Posodobi');
    await window.close();
    await electronApp.close();
})

test('Gumb za iskanje', async()=> {
    const electronApp = await electron.launch({ args: ['.']});

    const window = await electronApp.firstWindow();
    const button = await window.waitForSelector('#iskanje');
    const text = await button.textContent();
    expect(text).toContain('Iskanje');
    await window.close();
    await electronApp.close();
})

test('Naslov', async()=> {
    const electronApp = await electron.launch({ args: ['.']});

    const window = await electronApp.firstWindow();
    const button = await window.waitForSelector('#naslov');
    const text = await button.textContent();
    expect(text).toContain('MyPet');
    await window.close();
    await electronApp.close();
})