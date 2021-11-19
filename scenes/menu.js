class Menu extends Phaser.Scene
{
    constructor()
    {
        super({key: "Menu"})
    }

    preload()
    {
        //
    }

    create()
    {
		this.add.text(10, 10, "Test")
    }

    update(time, delta)
    {
        //
    }
}