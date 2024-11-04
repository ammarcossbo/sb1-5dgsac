import React from 'react';
import { Key, Users, Shield, Lock } from 'lucide-react';

export default function Security() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Segurança</h1>

        <div className="mt-6">
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Alterar Senha</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Atualize sua senha de acesso ao sistema
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="current_password" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Key className="h-5 w-5 mr-2 text-gray-400" />
                      Senha Atual
                    </label>
                    <input
                      type="password"
                      name="current_password"
                      id="current_password"
                      className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="new_password" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-gray-400" />
                      Nova Senha
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      id="new_password"
                      className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-gray-400" />
                      Confirmar Nova Senha
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Atualizar Senha
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Autenticação em Duas Etapas</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Adicione uma camada extra de segurança à sua conta
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="two_factor"
                        name="two_factor"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="two_factor" className="font-medium text-gray-700">Ativar Autenticação em Duas Etapas</label>
                      <p className="text-sm text-gray-500">
                        Receba um código de verificação no seu celular ao fazer login
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de Celular</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="+55 (11) 99999-9999"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Sessões Ativas</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Gerencie seus dispositivos conectados
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Chrome - Windows</p>
                          <p className="text-xs text-gray-500">Última atividade: Agora</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-600 hover:text-red-900"
                      >
                        Encerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}