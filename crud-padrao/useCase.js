const Dev = require('./domain');
class DevService {
  async createDev(data) {
    try {
      await Dev.sync();
      const dev = await Dev.create(data);
      return { message: 'Sucesso ao criar dev', code: 0, dev: dev  };
    } catch (error) {
      return { message: `Erro ao criar dev: ${error.message}`, code: 3, dev: null  };
    }
  }

  async getDevById(id) {
    try {
      await Dev.sync();
      const dev = await Dev.findByPk(id);
      if (!dev) {
        return { message: 'Dev não encontrado', code: 0, dev: null  };
      }
      return { message: 'Sucesso ao buscar Dev', code: 0, dev: dev  };
    } catch (error) {
      return { message: `Erro ao buscar dev: ${error.message}`, code: 3, dev: null  };
    }
  }

  async getDevByEmail(email) {
    try {
      await Dev.sync();
      const dev = await Dev.findOne({ where: { email } });
      if (!dev) {
        return { message: 'Dev não encontrado com esse email', code: 0, dev: null  };
      }
      return { message: 'Sucesso ao buscar Dev', code: 0, dev: dev  };
    } catch (error) {
      return { message: `Erro ao buscar dev por email: ${error.message}`, code: 3, dev: null  };
    }
  }

  async getAllDevs() {
    try {
      await Dev.sync();
      const devs = await Dev.findAll();
      return { message: 'Sucesso ao buscar devs', code: 0, devs  };
    } catch (error) {
      return { message: `Erro ao buscar devs: ${error.message}`, code: 3, devs: null  };
    }
  }

  async updateDev(id, data) {
    try {
      await Dev.sync();
      const dev = await Dev.findByPk(id);
      if (!dev) {
        return { message: 'Dev não encontrado', code: 0, dev: null };
      }
      await dev.update(data);
      return { message: 'Sucesso ao atualizar devs', code: 0, dev: dev };
    } catch (error) {
      return { message: `Erro ao atualizar dev: ${error.message}`, code: 3, dev: null };
    }
  }

  async deleteDev(id) {
    try {
      await Dev.sync();
      const dev = await Dev.findByPk(id);
      if (!dev) {
        throw new Error('Dev não encontrado');
      }
      await dev.destroy();
      return { message: 'Dev deletado com sucesso', code: 0, dev: null };
    } catch (error) {
      return { message: `Erro ao deletar dev: ${error.message}`, code: 3, dev: null  };
    }
  }
}
module.exports = DevService;
