import { AuthController } from '../src/modules/auth/auth.controller'

const userController = new AuthController()

const user: any = {
    name: "teste",
    email: "a@email.com",
    password: "1233456",
    id: "sadasionaon",
    phoneNumber: "11930780482"
}

jest.spyOn(userController, 'create').mockReturnValue(user)

describe('create user', () => {
    it('should return 200', async () => {
        const req: any = {
            body: user
        }

        const res: any = {
            json: jest.fn(),
            status: jest.fn()
        }

        let usuario = await userController.create(req, res)


        expect(userController.create).toHaveBeenCalledTimes(1)
        expect(usuario).toEqual(user)
    })
})
