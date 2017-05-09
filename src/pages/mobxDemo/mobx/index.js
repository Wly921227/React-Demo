import { observable } from 'mobx'

class State {
    @observable list = {
        name: '目录',
        open: false,
        children: [
            {
                name: '第一章',
                open: false,
                children: [
                    {
                        name: '第一节',
                        open: false,
                        children: [
                            {
                                name: 'One First',
                                open: false
                            },
                            {
                                name: 'One Second',
                                open: false
                            },
                            {
                                name: 'One Third',
                                open: false
                            }
                        ]
                    },
                    {
                        name: '第二节',
                        open: false,
                        children: [
                            {
                                name: 'Two First',
                                open: false
                            },
                            {
                                name: 'Two Second',
                                open: false
                            },
                            {
                                name: 'Two Third',
                                open: false
                            }
                        ]
                    },
                    {
                        name: '第三节',
                        open: false
                    },
                    {
                        name: '第四节',
                        open: false
                    }
                ]
            },
            {
                name: '第二章',
                open: false,
                children: [
                    {
                        name: '第一节',
                        open: false
                    },
                    {
                        name: '第二节',
                        open: false
                    },
                    {
                        name: '第三节',
                        open: false
                    },
                    {
                        name: '第四节',
                        open: false
                    },
                    {
                        name: '第五节',
                        open: false
                    }
                ]
            },
            {
                name: '第三章',
                open: false,
                children: [
                    {
                        name: '第一节',
                        open: false
                    },
                    {
                        name: '第二节',
                        open: false
                    },
                    {
                        name: '第三节',
                        open: false
                    }
                ]
            },
            {
                name: '第四章',
                open: false,
                children: [
                    {
                        name: '第一节',
                        open: false
                    },
                    {
                        name: '第二节',
                        open: false
                    },
                    {
                        name: '第三节',
                        open: false
                    },
                    {
                        name: '第四节',
                        open: false
                    }
                ]
            }
        ]
    }

    @observable value = {
        text: ''
    }
}

export default State