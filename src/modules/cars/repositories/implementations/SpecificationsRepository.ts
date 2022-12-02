import { PrismaClient } from '@prisma/client'
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private prisma = new PrismaClient()

  async create({ description, name }: ICreateSpecificationDTO) {
    await this.prisma.specifications.create({
      data: {
        name,
        description,
      },
    })
  }

  async findByName(name: string) {
    const specification = await this.prisma.specifications.findFirst({
      where: {
        name,
      },
      orderBy: {
        id: 'asc',
      },
    })

    return specification
  }
}

export { SpecificationsRepository }
